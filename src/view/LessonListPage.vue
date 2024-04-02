<template>
  <div class="bg-[#7556F7] rounded-b-[35px] h-[60px] fixed z-10 w-full">
    <h1 class="text-[white] text-[20px] text-center pt-[15px] font-bold">
      Язык программирования Java
    </h1>
  </div>
  <div class="pt-[250px]">
    <h1 class="bg-[#7556F7] rounded-t-[25px] h-[100vh]">Renat</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped></style>
