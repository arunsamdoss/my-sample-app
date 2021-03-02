<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    
  },
    data() {
    return {
      authenticated: false,
      Account: {
        name: 'admin@mail.com',
        password: 'Admin@123',
      }
    }
  },
    // mounted() {
    //     if (!this.authenticated) {
    //       this.$router.push({ name: "Home" });
          
    //     }
    //   },
        methods: {
        setAuthenticated(status) {
          this.authenticated = status 
        },
            logout() {
              this.authenticated = false;
            }
      }
}
</script>
