<template>
  <router-link :to="{ path: '/lessonListPage/' + id }">
    <div
      class="c w-[95%] h-[120px] border-[3px] border-[#7556F7] rounded-[25px] flex relative"
    >
      <img
        class="w-[70px] h-[70px] object-contain rounded-[15px] ml-[15px]"
        src="https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png"
        alt=""
      />
      <div class="ml-[15px]">
        <div class="absolute left-[-7px] top-[-7px] ]">
          <p
            class="w-[35px] h-[35px] pl-[10px] pt-[5px] bg-blue-100 text-[#7556F7] rounded-[10px] border-[2px] border-[#7556F7] font-semibold inline-flex dark:bg-blue-200 dark:text-blue-800"
          >
            {{ id }}
          </p>
        </div>

        <h1 class="font-bold text-[#7556F7]">Язык программирования Java</h1>
        <p class="text-[gray]">14 страниц</p>
        <div
          class="w-[95%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-[10px]"
        >
          <div class="bg-[#7556F7] h-2.5 rounded-full" style="width: 45%"></div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style lang="scss" scoped>
.c {
  padding-top: 15px;
  margin: 0 auto;
  margin-top: 15px;
}
</style>
