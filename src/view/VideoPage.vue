<template>
  <div>
    <div class="bg-[#FF5D5D] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1
        class="container text-[white] text-[20px] text-center pt-[15px] font-bold"
      >
        Видео по JAVA
      </h1>
    </div>
    <div class="pt-[70px]">
      <VideoList class="pt-[15px]" v-for="i in 3" :key="i" :id="i"></VideoList>
    </div>
  </div>
</template>

<script>
import VideoList from "../components/VideoList.vue";
export default {
  components: {
    VideoList,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;

  width: 95%;
}
</style>
