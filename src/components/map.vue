<template>
<v-app id="inspire">
  <v-toolbar dark>
<v-btn @click="add()" to:link="components/signin"><v-icon>fast_rewind</v-icon></v-btn>
<v-spacer></v-spacer>
 <b><h1>Search and add a pin</h1></b>
      <label style="size=20px">
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker"><h2>Add</h2></button>
      </label>
  </v-toolbar >
    <div  class="circular" style="height:630px;" >
      <v-content>
        <v-container fluid fill-height >
          <v-layout align-center justify-center >
           <v-flex xs12  >
  <div>


    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 600px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
           </v-flex>
          </v-layout>
      </v-container>
    </v-content>
  </div>
  <router-view></router-view>
</v-app>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};

</script>

