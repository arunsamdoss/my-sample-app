<template>
  <div>
    <section class="section-container">
      <v-row class="signin">
        <v-col cols="8" class="left">
          <h1>Welcome</h1>
        </v-col>
        <v-col cols="4" class="right">
          <h2>Register</h2>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="formData.email"
              label="Email"
              :rules="emailRules"
              outlined
              dark
              filled
              dense
            ></v-text-field>
            <v-text-field
              v-model="formData.name"
              label="User Name"
              :rules="nameRules"
              outlined
              dark
              filled
              dense
            ></v-text-field>
            <v-text-field
              v-model="formData.password"
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
            <v-btn
              class="signin-btn"
              rounded
              color="white"
              v-on:click.prevent="Register(formData)"
            >
              Submit
            </v-btn>
            <!-- <div class="cta">
      <router-link to="/">Back</router-link>
    </div> -->
          </v-form>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "signup",
  data() {
    return {
      formData: {
        email: "",
        name: "",
        password: "",
      },
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) =>
            /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "E-mail must be valid",
        ],
        passwordRules: [
          (v) => !!v || "Password is required",
          (v) =>
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
            "Password must contain at least lowercase letter, one number, a special character and one uppercase letter",
        ],
        nameRules: [
          (v) => !!v || "Name is required",
          (v) =>
            (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
      showPass: false,
    };
  },
  methods: {
    ...mapActions(["singup"]),
    Register(das) {
      console.log(das);
      if (
        this.formData.name != "" &&
        this.formData.password != "" &&
        this.formData.email != ""
      ) {
        this.$store.dispatch("signup", this.formData);
      } else {
        console.log("must be present");
      }
    },
  },
};
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
.cta {
  width: 300px;
  margin: auto;
  text-align: center;
}

.cta a {
  margin: 10px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #08c0b7;
  border-radius: 3px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  color: #08c0b7;
}

.cta a:hover,
.cta a:active {
  background-color: #08c0b7;
  color: white;
}
</style>
