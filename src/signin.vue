<template>
  <v-app id="inspire">

    <div  class="circular" style="height:620px;" v-bind:style="{'background-image': 'url(' + 'http://miriadna.com/desctopwalls/images/max/Green-and-yellow-fields.jpg' + ')'}">
      <v-content>
        <v-container fluid fill-height >
          <v-layout align-center justify-center >
           <v-flex xs12 sm8 md5 >
              <v-card class="elevation-12" id="login" dark  >
                <v-toolbar dark >
                  <v-toolbar-title style="font-family:Patua One;">Login </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
              <v-card-text  >
                <v-form ref="form"  lazy-validation>
                  <v-text-field
                    v-model="send.userName"
                    label="User Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="send.password"
                    :counter="10"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>

                  <v-btn
                    @click="sendUser()"
                  >
                    Login
                  </v-btn>

                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
       </v-layout>
      </v-container>
    </v-content>
  </div>
  <router-view></router-view>
</v-app>
</template>

<script>

import axios from "axios";



 export default {
    data () {
      return {

        send:{

       }
      }

    },


 methods:{

        sendUser:function(){
            console.log(this.send);

            let uri ='http://173.82.212.198:8095/keycloak/login';
          axios.post(uri,this.send)
            .then(response => {

                console.log(response)
                this.$router.push('/profile');
            })
            .catch(error =>{
              console.log(error.response)
            });


        }
    }
  }

</script>

<style>



</style>


