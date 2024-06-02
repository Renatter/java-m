<template>
  <div
    class="container w-[95%] h-[150px] bg-[#7556F7] m-[1px] rounded-[35px] p-[30px] text-white"
  >
    <div class="flex justify-between">
      <h1 class="text-[25px]" v-if="user">
        {{ user.name }}, <br />
        Салем
      </h1>
      <div class="flex">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center bg-[white] text-[#7556F7] font-bold"
        >
          {{ user ? user.name.charAt(0) : "?" }}
        </div>
        <div
          @click="logout"
          class="ml-[10px] cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-[white] text-[#7556F7] font-bold"
        >
          x
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <h1 class="text-[25px] font-bold">Категория</h1>
    <div class="flex flex-wrap gap-[15px] justify-evenly pt-[15px]">
      <CategoryCard
        :title="i.title"
        :img="i.img"
        :router="i.router"
        v-for="i in category"
        :key="i"
      ></CategoryCard>
    </div>
  </div>
</template>

<script>
import { auth, db, setIsAuthenticated } from "../firebase/firebase";
import { doc, addDoc, onSnapshot, collection } from "firebase/firestore";
import book from "../assets/book.png";
import books from "../assets/books.png";
import math from "../assets/math.png";
import lampa from "../assets/lampa.png";
import test from "../assets/test.png";
import video from "../assets/video.png";
import CategoryCard from "../components/CategoryCard.vue";
export default {
  data() {
    return {
      user: null,
      category: [
        { title: "Сабақтар", img: book, router: "/lesson" },
        { title: "Видео", img: video, router: "/videoPage" },
        { title: "Тесттер", img: test, router: "/testPage" },
        { title: "Пiкiр", img: lampa, router: "/ChatRoom" },
        { title: "Кiтаптар", img: books, router: "/books" },
        { title: "Мысалдар", img: math, router: "/example" },
      ],
    };
  },
  components: {
    CategoryCard,
  },
  methods: {
    logout() {
      auth.signOut();
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated");
      this.$router.push("/create");
    },
    logout() {
      auth.signOut();
      setIsAuthenticated(false);
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        const docRef = doc(db, "userProfile", user.uid);
        const unsubscribeCart = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.user = docSnap.data();
            console.log(this.user);
          } else {
            console.log("No such document!");
          }
        });

        // Save the unsubscribe functions to be used when the component is destroyed
        this.unsubscribeCart = unsubscribeCart;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  margin-top: 15px;
  width: 95%;
}
</style>
