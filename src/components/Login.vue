<template>
  <aside>
    <h3>Sign in Anonymusly</h3>
    <button @click="pressed" class="button is-primary is-rounded">
      Sign In
    </button>
    <div v-if="newUser">
      <a href="#" @click="newUser = false">Returning User?</a>
    </div>

    <div v-else>
      <a href="#" @click="newUser = true">Sign In With Email</a>
    </div>

    <form>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            v-model="email"
            type="email"
            placeholder="Email"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input
            class="input"
            v-model="password"
            type="password"
            placeholder="Password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <div class="control">
          <button
            @click="signInOrCreateUser"
            class="button is-success"
            :class="{ 'is-loading': loading }"
          >
            {{ newUser ? "SignUp" : "Login" }}
          </button>
          <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
        </div>
      </div>
    </form>
  </aside>
</template>
<script>
import { auth } from "../firebase";
import { signInAnonymously } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export default {
  data() {
    return {
      auth,
      email: "",
      password: "",
      newUser: true,
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async pressed() {
      await signInAnonymously(auth);
    },
    async signInOrCreateUser() {
      this.loading = true;
      this.errorMessage = "";
      try {
        if (this.newUser) {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
        } else {
          await signInWithEmailAndPassword(auth, this.email, this.password);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }
      this.loading = false;
    },
  },
};
</script>
