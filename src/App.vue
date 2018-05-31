<template>
  <div id="app">
    <v-app id="inspire">
    <v-navigation-drawer

      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="loadDashboard">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="loadRegister">
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Submittal Register</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile @click="loadUsers">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>

      <v-toolbar-title> Ahtna Document Collaboration Portal</v-toolbar-title>
    </v-toolbar>
    <v-content>

      <!-- CENTRAL CONTENT -->
          <router-view/>
      <!-- CENTRAL CONTENT -->

    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018 Poteresoft</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    loadDashboard: function(){
      window.location = '#/'
    },
    loadRegister: function(){
      window.location = "#/Register";
    },
    loadUsers: function(){
      window.location = "#/Users";
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
