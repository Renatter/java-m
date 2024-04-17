<template>
  <div>
    <div class="bg-[#7556F7] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1
        class="container text-[white] text-[20px] text-center pt-[15px] font-bold"
      >
        JAVA-дан сабак
      </h1>
    </div>
    <div class="pt-[70px]">
      <LessonList
        class="pt-[15px]"
        v-for="(i, index) in item"
        :key="i"
        :id="index"
        :java="i"
      ></LessonList>
    </div>
  </div>
</template>

<script>
import { onSnapshot, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import LessonList from "../components/LessonList.vue";
export default {
  data() {
    return {
      item: [],
    };
  },
  components: {
    LessonList,
  },
  async created() {
    const q = collection(db, "javaText");

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
