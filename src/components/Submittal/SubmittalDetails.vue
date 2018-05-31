<template>
  <div>
    <h1>Submittal Details</h1>
    <h2>{{ submittal }}</h2>
    <div style="width:75%; margin: 0 auto;">
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>Approvals</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <v-container style="height: 200px; box-shadow: 2px 3px 8px grey;">
          <Signature/>
        </v-container>
    </div>

    <div style="height:30px;"></div>

    <div style="width:75%; margin: 0 auto;">
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>Atachments</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <v-container style="height: 100px; box-shadow: 2px 3px 8px grey;">

        </v-container>
    </div>
  </div>
</template>

<script>
  import store from '@/store/store.js';
  import Signature from '@/components/Submittal/Signature.vue';
    export default {
        name: "SubmittalDetails",
        data: function(){return {submittal: store.state.submittal}},
        components:Signature
    }
</script>

<style scoped>

</style>
