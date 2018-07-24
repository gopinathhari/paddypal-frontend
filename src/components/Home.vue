<template>
  <v-container fluid  style="height:620px; wigth:600px;" v-bind:style="{'background-image': 'url(' + 'https://www.walldevil.com/wallpapers/a87/wallpaper-green-desktop-backgrounds-computer-background-leaves-vector.jpg' + ')'}">
    <v-layout row wrap>
      <v-flex xs12 text-xs-center mt-5 style="color:#FF5722">
        <v-card> <h1>Welcome to PaddyPal</h1></v-card>

      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center" style="color:#9345CD;font-size:300%;">
          Manage your farm or farming region<br>
          with fertilizer controlling
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 class="text-xs-center" mt-5>
        <v-btn color="secondary" to="/createnew">Sign Up</v-btn>
        <v-btn   color="secondary" to="/signin">Sign In</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>
