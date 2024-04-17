<template>
  <div class="page">
    <div class="container">
      <div class="center-content pt-[50px]">
        <img class="" src="../assets/logo.png" alt="" srcset="" />
        <h1 class="text-2xl text-center">Тiркелу</h1>
      </div>
      <div class="mt-[30px]">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Почта</label
        >
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          
          required
          v-model="email"
        />
      </div>
      <div class="mt-[10px]">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Имя</label
        >
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          
          required
          v-model="name"
        />
      </div>
      <div class="mt-[20px]">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Номер</label
        >
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       
          required
          v-model="phone"
        />
      </div>

      <div class="mt-[20px]">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Пароль</label
        >
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

          v-model="password"
          required
        />
      </div>
      <router-link to="/login">Кіру</router-link>
      <button
        @click="register"
        type="button"
        class="mt-[15px] text-white w-[100%] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Тiркелу
      </button>
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
      phone: "",
      name: "",
    };
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        await signInWithEmailAndPassword(auth, this.email, this.password);
        const currentUser = auth.currentUser;
        await setDoc(doc(db, "userProfile", currentUser.uid), {
          email: this.email,
          password: this.password,
          name: this.name,
          phone: this.phone,
          role: "user",
        });
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
