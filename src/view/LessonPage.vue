<template>
  <div>
    <div class="bg-[#7556F7] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1
        class="container text-[white] text-[20px] text-center pt-[15px] font-bold"
      >
        Уроки по JAVA
      </h1>
    </div>
    <div class="pt-[70px]">
      <LessonList
        class="pt-[15px]"
        v-for="i in 3"
        :key="i"
        :id="i"
      ></LessonList>
    </div>
  </div>
</template>

<script>
import LessonList from "../components/LessonList.vue";
export default {
  components: {
    LessonList,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;

  width: 95%;
}
</style>
