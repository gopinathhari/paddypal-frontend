<template>
<v-app id="inspire">

  <v-toolbar style="color:#000000;" dark>
    <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
    <h1 style="color:#76FF03;font-family:Trasandina">PaddyPal</h1>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat dark ><v-badge overlap >
      <span slot="badge" style="color:green;">3</span>

      <v-avatar
        color="purple red--after"
      >
        <v-icon dark >notifications</v-icon>
      </v-avatar>
    </v-badge></v-btn>
      <v-btn ><v-avatar color="green">
      <v-icon >account_circle</v-icon>
    </v-avatar></v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-navigation-drawer
      temporary
      clipped
      class="grey lighten-4"
      v-model="drawer"
      fixed
      app
      >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >

          </v-layout>
          <v-divider
            dark
            v-else-if="item.divider"
            class="my-3"
            :key="i"
          ></v-divider>
          <v-list-tile
            :key="i"
            v-else
          :to="item.link"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

  <v-layout column>
    <v-flex xs12 sm6 >

      <v-spacer></v-spacer>

      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
           >
              <v-card :to="card.link">
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn  icon color="green">
                    <v-icon >circle-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-app>
</template>
<script>

  export default {
    data: () => ({
      drawer:null,
      cards: [
        { title: 'Home', src: 'http://www.veryrustic.com/wp-content/uploads/2015/10/1a.jpg', flex: 3,link:"/home"  },
        { title: 'Farmers Details', src: 'https://www.thenational.ae/image/policy:1.261574:1499419181/image/jpeg.jpg?f=16x9&w=1024&$p$f$w=2589da4', flex: 3, link:"/farmdetails" },
        { title: 'Fertilizers', src: 'https://cdn.maximumyield.com/images/uploads/blanket-home-decor-flora-plant-food.jpg?height=580&width=940&mode=crop', flex: 3 },
        { title: 'Chart Status', src: 'https://cdn-images-1.medium.com/max/2000/1*Dc_ghRRz_QPo-yoOUaCe9Q.png', flex: 3 },
        { title: 'Images', src: 'https://static.photocdn.pt/images/articles/2017/06/06/iStock-512034218.jpg', flex: 3 },

        { title: 'Map', src: 'http://www.alearningfamily.com/main/wp-content/uploads/IndiaPhysical.jpg', flex: 3, link:"/map" },
        { title: 'Contect Us', src: 'https://i.etsystatic.com/9278201/r/il/b36804/651566479/il_570xN.651566479_kmdj.jpg', flex: 3 },
        { title: 'Feedback', src: 'https://www.questionpro.com/blog/wp-content/uploads/2016/05/bigstock-Feedback-Concept-with-Doodle-D-120765935-1-800x450.jpg', flex: 3 }


      ],

      items: [
        { icon: 'home', text: 'Login',link: "/signin" },
        { icon: 'home', text: 'Logout',link: "/signin" },
        { icon: 'account_box', text: 'Profile',link: "/profile" },
       { divider: true },
        { heading: 'Labels' },
        { icon: 'face', text: 'Create new Account',link: "/createnew" },
      { divider: true },
        { icon: 'nature_people', text: 'Farmers',link: "/farmdetails" },

        { divider: true },


        { icon: 'phonelink', text: 'App downloads',link: "/appdownload" },

      ]
    })


  }
</script>
