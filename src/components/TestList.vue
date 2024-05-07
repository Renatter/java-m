<template>
  <router-link :to="{ path: '/testListPage/' + java.name }">
    <div
      class="c w-[95%] h-[120px] border-[3px] border-[#a8d524] rounded-[25px] flex relative"
    >
      <img
        class="w-[100px] h-[100px] object-contain rounded-[15px] ml-[15px]"
        :src="java.img"
        alt=""
      />
      <div class="ml-[15px] w-[100%]">
        <div class="absolute left-[-7px] top-[-7px] ]">
          <p
            class="w-[35px] h-[35px] pl-[10px] pt-[5px] bg-blue-100 text-[#7556F7] rounded-[10px] border-[2px] border-[#7556F7] font-semibold inline-flex dark:bg-blue-200 dark:text-blue-800"
          >
            {{ id + 1 }}
          </p>
        </div>

        <h1 class="font-bold text-[#a8d524]">{{ java.name }}</h1>
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
@media (max-width: 436px) {
}
</style>
