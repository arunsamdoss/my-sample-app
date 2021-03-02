<template>
<div>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="8" class="left">
        <h1>Welcome</h1>
      </v-col>
      <v-col cols="4" class="right">
        <h2>LOGIN</h2>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="form.name "
            label="User Name"
            :rules="emailRules"
            outlined
            dark
            filled
            dense
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            label="Password"
            :rules="passwordRules"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPass = !showPass"
            outlined
            dense
            dark
            filled
            :type="showPass ? 'text' : 'password'"
          ></v-text-field>
            <v-btn  class="signin-btn" rounded color="white" v-on:click.prevent="login(form)">
              Sign In
            </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </section>
</div>
</template>

<script>

export default {
  name: "HelloWord",
  data() {
    return {
      form: {
      name: '',
      password: ''
      },
    emailRules: [
  v => !!v || 'E-mail is required',
  v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
 ],
   passwordRules: [
      v => !!v || 'Password is required',
      v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
  ],
    showPass: false,
    }
  },
  methods: {
    login(dar) {
      console.log(dar)
      if (this.form.name != "" && this.form.password != "") {
      if(this.form.name == this.$parent.Account.name && this.form.password == this.$parent.Account.password) 
        {
        this.$router.push({ name: "Edit" })
        this.$emit("authenticated", true)
        } else {
            console.log("The username and / or password is incorrect")
        }
      } else {
      console.log("A username and password must be present")
      }
    },
  },
}
</script>
<style lang="scss" scoped>

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
