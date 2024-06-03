<template>
  <div class="page">
    <div class="container">
      <div class="center-content pt-[50px]">
        <img class="" src="../assets/logo.png" alt="" srcset="" />
        <h1 class="text-2xl text-center">Кiру!</h1>
      </div>
      <div class="mt-[30px]">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Почта</label
        >
        <input
          v-model="email"
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div class="mt-[20px]">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Кұпия сөз</label
        >
        <input
          v-model="password"
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        @click="register"
        type="button"
        class="mt-[15px] text-white w-[100%] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Кiру
      </button>
      <router-link to="/create">
        <button
          type="button"
          class="mt-[15px] text-white w-[100%] bg-[red] hover:bg-[red] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Тiркелу
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, setIsAuthenticated } from "../firebase/firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        this.$router.push("/");
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 470px) {
  .page {
    height: 100vh;
    width: 100%;
  }
  .container {
    padding: 0 45px 0 45px;
  }
  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
