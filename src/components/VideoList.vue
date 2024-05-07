<template>
  <router-link :to="{ path: '/VideoListPage/' + (id + 1) }">
    <div
      class="c w-[95%] h-[120px] border-[3px] border-[#FF5D5D] rounded-[25px] flex relative"
    >
      <img
        class="w-[70px] h-[70px] object-contain rounded-[15px] ml-[15px]"
        :src="java.img"
        alt=""
      />
      <div class="ml-[15px]">
        <div class="absolute left-[-7px] top-[-7px] ]">
          <p
            class="w-[35px] h-[35px] pl-[10px] pt-[5px] bg-[#ffffff] text-[#FF5D5D] rounded-[10px] border-[2px] border-[#FF5D5D] font-semibold inline-flex dark:bg-blue-200 dark:text-blue-800"
          >
            {{ id + 1 }}
          </p>
        </div>

        <h1 class="font-bold text-[#FF5D5D] text-[17px]">{{ java.name }}</h1>
        <p class="text-[gray] text-[18px]">{{ java.page }} бет</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["id", "java"],
};
</script>

<style lang="scss" scoped>
.c {
  padding-top: 15px;
  margin: 0 auto;
  margin-top: 15px;
}
</style>
