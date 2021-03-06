<template>
  <div id="welcome">
    <h1>welcome to sample app</h1>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allAccount: [
        {
          name: "admin@mail.com",
          password: "Admin@123",
        },
        {
          name: "sam@mail.com",
          password: "Sam@123",
        },
        {
          name: "sathish@mail.com",
          password: "Sathish@123",
        },
      ],
    };
  },
  // mounted() {
  //     if (!this.authenticated) {
  //       this.$router.push({ name: "Home" });

  //     }
  // },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
  },
};
</script>

<style scoped>
#welcome {
  width: 80%;
  margin: auto;
}

h1 {
  text-align: center;
}

p {
  text-align: center;
}

.cta {
  width: 300px;
  margin: auto;
  text-align: center;
}

.cta a {
  margin: 10px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #521751;
  border-radius: 3px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  color: #521751;
}

.cta a:hover,
.cta a:active {
  background-color: #521751;
  color: white;
}
</style>
