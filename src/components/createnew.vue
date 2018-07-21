<template>
  <v-app id="inspire">
    <div  class="circular" style="height:700px; wigth:600px;" v-bind:style="{'background-image': 'url(' + 'http://wpnature.com/wp-content/uploads/2017/01/field-green-wheat-flower-grass-free-desktop-wallpaper.jpg' + ')'}">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="lime">
                  <v-toolbar-title>Create a new account</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form  ref="form" lazy-validation>
                      <v-container grid-list-md>
                            <v-layout wrap>
                              <v-flex sm6>
                                <v-text-field v-model="user.nic" requeired label="NIC" required :counter="10" ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.firstName" label="First Name" required :counter="10" ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.lastName" label="Last Name" required :counter="10" ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.userName" label="User Name" required :counter="10"></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.password" label="Password" required type="password"  ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.email" label="Email" required ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.userType" label="User Type" required ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.province" label="Province" required ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.district" label="District" required ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.city" label="City" required ></v-text-field>
                              </v-flex>
                            </v-layout>
                        </v-container>
                  </v-form>
                  <v-btn @click="createUser()" >Create account</v-btn>

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
        e6: 1,
        user:{

       }
      }

    },


 methods:{
        save:function(){
            console.log("Hello")

        },

        createUser:function(){
            console.log(this.user);

          axios({ method: "POST", "url": "http://173.82.212.198:8095/keycloak/create", "data": this.user, "headers": { "content-type": "application/json" } })
            .then(result => {
                console.log(result);
            }, error => {
                console.error;
            });
            this.user=''

        },




    }
  }

</script>


<style scoped>

</style>


