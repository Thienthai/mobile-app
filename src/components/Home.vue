<template>
  <f7-page name="about">
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Home
      </f7-nav-title>
      <f7-nav-right>
        <a style="color:red;" @click.stop="userSignOut()"><span>Signout</span></a>
      </f7-nav-right>
    </f7-navbar>

    <!-- Scrollable page content-->
    <f7-block inner v-if="user === 'admin@mail.com'">
      <div v-for="item in 5">
      <div class="card demo-card-header-pic">
        <div style="background-image:url(http://images.goodsmile.info/cgm/images/product/20170606/6486/45777/large/0f78fbdf148fd7d0da70b85ad091dd4d.jpg)" class="card-header align-items-flex-end">Journey To Mountains</div>
        <div class="card-content card-content-padding">
          <p class="date">Posted on January 21, 2015</p>
          <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
        </div>
        <div class="card-footer"><a href="#" class="link" @click.stop="openPhoto()">More Picture</a><a style="color:red;" class="link">Delete</a></div>
      </div>
      </div>
        <!-- Photo Browser -->
      <f7-photo-browser
        ref="pb"
        :photos="photos"
        theme="dark"
        @open="onOpen"
      ></f7-photo-browser>
    </f7-block>


    <f7-block inner v-else>
    </f7-block>

  </f7-page>
</template>

<script>
export default {
  name: 'AboutCom',
  data() {
    return {
      db: this.$store.state.db,
      auth: this.$store.state.auth,
      user: this.$store.state.user.email,
      move: "movethis",
      info: [],
      brows: null
    };
  },
  methods: {
    work: function () {
      console.log(this.$store.state.user)
    },
    onFileChange (e) {
        var files = e.target.files[0]
        //this.fileList.push(files)
        var fileList = []
        console.log(fileList.length)
        var storageRef = this.storeRef.ref('home/' + files.name)
          var task = storageRef.put(files)
          task.on('state_changed', function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(percentage)

          }, function error(err) {
             console.log(err)
          }, () => {
             console.log("complete")
              this.storeRef.ref().child('home/' + files.name).getDownloadURL().then((url) => {
                    this.pic.push({src:url})
             })
        })
    },
    userSignOut: function () {
        this.$store.dispatch('userSignOut', {f7: this.$f7})
    },
      Submit () {
          this.dialog = false
          var db = this.db
          var auth = this.auth
          const uid = auth.currentUser.uid

          var forgotRef = this.db.ref('add/' + uid).push()
          forgotRef.set({
            name: this.name,
            brand: this.brand,
            found: this.found,
            date: this.date,
            pic: this.pic,
            path: "add/" + uid + "/" + forgotRef.key  
          })
          location.reload()
      },
      picTest (item) {
        if(item.pic.length === null){
          return 0
        }else{
          return item.pic[0].src
        }
      },
      remove(path) {
        var db = this.db
        var auth = this.auth
        const uid = auth.currentUser.uid
        db.ref(path).remove()
        this.info = []
        db.ref('add').on('child_added', snapshot => {
          db.ref('add/' + snapshot.key).on('child_added', snapshot => {
            console.log("added")
            this.info.push(snapshot.val())
          })
        })
      },
      openPhoto () {
        this.brows.open();
      }
  },
  created () {
      var db = this.db
      var auth = this.auth
      db.ref('add').on('child_added', snapshot => {
        db.ref('add/' + snapshot.key).on('child_added', snapshot => {
             this.info.push(snapshot.val())
        })
      })

      var app = this.$f7
      this.brows = app.photoBrowser.create({
        photos : [
        'https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png',
        'https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png',
        'https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png',
        ]
      })
      
  }
}
</script>