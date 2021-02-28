
<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="8" class="left">
        <h1>Welcome to my site</h1>
      </v-col>
      <v-col cols="4" class="right">
        <h2>LOGIN</h2>
          <v-form v-on:submit.prevent="submit">
              <v-text-field
                v-model="email"
               label="Email"
                required
                outlined
                dark
                filled
                dense
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                required
                outlined
                dense
                dark
                filled
                :type="showPass ? 'text' : 'password'"
              ></v-text-field>
            <div class="text-center">
              <v-btn class="signin-btn" type="submit" rounded color="white" >
                Sign In
              </v-btn>
            </div>
          </v-form>
      </v-col>
    </v-row>
  </section>
</template>
<script>

export default {
  name: 'HelloWord',
  data: () => ({
    email: '',
    password: '',
    showPass: false
  }),
  methods: {
    submit: function() {
    if(this.form.email != "" && this.form.password != "") {

    this.$router.replace({ name: "Edit" });
    }
    }
  }
}
</script>
<style lang="scss" scoped>
/* ./assets/styles.scss */

.section-container {
  padding: 20px;
  margin: 20px;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1);
  box-sizing: border-box;
  .signin {
    padding: 0;
    max-width: 1000px;
    margin: 0 auto;
    min-height: 600px;
    box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1);
    .left {
      padding: 30px;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      color: #30ac7c;
      background-color: #f9f9f9;
    }
    .right {
      padding: 30px;
      box-sizing: border-box;
      background: #30ac7c;
      color: #fff;
      h2 {
        text-align: center;
        margin: 30px 0;
      }
      .signin-btn {
        width: 100%;
        color: #30ac7c;
      }
    }
  }
}

</style>