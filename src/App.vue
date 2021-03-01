<template>
  <div id="app">
    <v-app id="inspire">
      <div id="nav">
        <!-- <v-btn
        depressed
        color="primary"
      ><router-link to="/"></router-link>Home</v-btn> -->
      </div>
      <router-view  />
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      authenticated: false,
      mockAccount: [{
        name: 'sam',
        password: '123456',
      }],
      mounted() {
        if (!this.authenticated) {
          this.$router.replace({ name: "Home" });
        }
      },
      methods: {
        setAuthenticated(status) {
          this.authenticated = status;
        },
      },
    };
  },
};
</script>
