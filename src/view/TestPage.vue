<template>
  <div>
    <div class="bg-[#a8d524] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1
        class="container text-[white] text-[20px] text-center pt-[15px] font-bold"
      >
        JAVA тестілері
      </h1>
    </div>
    <div class="pt-[70px]">
      <TestList
        class="pt-[15px]"
        v-for="(i, index) in item"
        :key="i"
        :id="index"
        :java="i"
      ></TestList>
    </div>
  </div>
</template>

<script>
import { onSnapshot, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import TestList from "../components/TestList.vue";
export default {
  components: {
    TestList,
  },
  data() {
    return {
      item: [],
    };
  },
  async created() {
    const q = collection(db, "questions");

    onSnapshot(q, (querySnapshot) => {
      this.item = []; // Очищаем массив перед добавлением новых данных
      querySnapshot.forEach((doc) => {
        this.item.push(doc.data());
      });

      // Сортировка списка по возрастанию id
      this.item.sort((a, b) => a.id - b.id);
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;

  width: 95%;
}
</style>
