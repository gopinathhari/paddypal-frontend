<template>
  <v-app id="inspire">
    <div  class="circular" style="height:630px; wigth:600px;" v-bind:style="{'background-image': 'url(' + 'https://justifiedgrid.com/wp-content/gallery/outdoors/landscapes/98945069.jpg' + ')'}">

      <v-content >
        <v-container fluid fill-height >
          <v-layout align-center justify-center >
            <v-flex xs12 sm8 md4  justify-center>
                <v-card dark >
                    <v-toolbar>
                      <h1 style="font-family:Patua One;">Create a new account</h1>
                    </v-toolbar>
                </v-card>
                  <v-spacer></v-spacer>

                  <v-card dark>
                  <v-form  ref="form" lazy-validation  v-model="valid">
                      <v-container >
                            <v-layout wrap>
                              <v-flex sm6 >
                                <v-text-field v-model="user.nic" requeired label="NIC" required :counter="10" :rules="idRules"></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.firstName" label="First Name" required :counter="10" :rules="fnameRules"></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.lastName" label="Last Name" required :counter="10" :rules="lnameRules" ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.userName" label="User Name" required :counter="10" :rules="unameRules"></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.password" label="Password" required type="password" :rules="passwordRules" ></v-text-field>
                              </v-flex>
                              <v-flex sm6>
                                <v-text-field v-model="user.email" label="Email" required :rules="emailRules"></v-text-field>
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

                  <v-btn @click="createUser()"  style="color:#8BC34A;">Create account</v-btn>
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
    data() {

      return{

        user:{

        },

        valid: false,
        id: '',
        idRules: [
          v => !!v || 'Id is required'
        ],
        firstName: '',
        fnameRules: [
          v => !!v || 'First Name is required'
        ],
       lastName: '',
        lnameRules: [
          v => !!v || 'Last Name is required'
        ],
        userName: '',
        unameRules: [
          v => !!v || 'User Name is required'
        ],
        password:'',
        passwordRules: [
          v => !!v || 'Password is required'
        ],


        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
        ],
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
            alert("Create sucess Go to login");

        },




    }

    }



</script>


<style scoped>

</style>


