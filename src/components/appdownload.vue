<template>
  <v-jumbotron color="light-green" dark height="620px">
    <v-container fill-height >
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3"><b> App Still Loading</b></h3>
           <div class="text-xs-center">
    <v-progress-circular :value="20"></v-progress-circular>

    <v-progress-circular :value="40"></v-progress-circular>

    <v-progress-circular :value="60"></v-progress-circular>

    <v-progress-circular :value="80"></v-progress-circular>

    <v-progress-circular :value="100"></v-progress-circular>
  </div>
        </v-flex>

      </v-layout>

    </v-container>
  </v-jumbotron>
</template>
