<template>
  <div class="bg-[#7556F7] rounded-b-[35px] h-[60px] fixed z-10 w-full">
    <h1 class="text-[white] text-[17px] text-center pt-[15px] font-bold">
      Кiтаптар
    </h1>
  </div>
  <div class="flex pt-[150px] flex-wrap justify-evenly gap-[70px]">
    <div class="border-[1px] w-[200px] h-[250px]" v-for="i in books">
      <a :href="i.src" target="_blank">
        <img class="w-[200px] h-[250px]" :src="i.img" alt="" />
        <p class="font-bold text-center">{{ i.name }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import {
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
  collection,
  onSnapshot,
  getDocs,
  getDocsFromServer,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      books: [],
    };
  },
  async created() {
    const q = collection(db, "books");

    onSnapshot(q, (querySnapshot) => {
      this.item = [];
      querySnapshot.forEach((doc) => {
        this.books.push(doc.data());
      });
    });
  },
};
</script>

<style lang="scss" scoped></style>
