<template>
  <div
    class="container w-[95%] h-[150px] bg-[#7556F7] m-[1px] rounded-[35px] p-[30px] text-white"
  >
    <div class="flex justify-between">
      <h1 class="text-[25px]" v-if="user">
        {{ user.name }}, <br />
        Good morning
      </h1>
     <div class="flex">
       <div
        class="w-10 h-10 rounded-full flex items-center justify-center bg-[white] text-[#7556F7] font-bold mr-[15px]"
      >
        {{ user ? user.name.charAt(0) : "?" }}
      </div>
       <div
       @click="logout"
        class="w-10 h-10 rounded-full flex items-center justify-center bg-[white] text-[#7556F7] font-bold"
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
import lampa from "../assets/lampa.png";
import test from "../assets/test.png";
import video from "../assets/video.png";
import CategoryCard from "../components/CategoryCard.vue";
export default {
  data() {
    return {
      user: null,
      category: [
        { title: "Текст", img: book, router: "/lesson" },
        { title: "Видео", img: video, router: "/videoPage" },
        { title: "Тест", img: test, router: "/testPage" },
        { title: "Чат", img: lampa, router: "/ChatRoom" },
      ],
    };
  },
  components: {
    CategoryCard,
  },
  methods: {
    async addData() {
  
      javaCourse.forEach((course) => {
        addDoc(collection(db, "javaText"), course)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      });
    },
       logout() {
      auth.signOut();
      setIsAuthenticated(false);
      localStorage.clear()
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
