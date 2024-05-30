<template>
  <div class="bg-[#a9ed29] rounded-b-[35px] h-[60px] fixed z-10 w-full">
    <h1 class="text-[white] text-[17px] text-center pt-[15px] font-bold">
      Мысалы кодтар
    </h1>
  </div>
  <div class="pt-[150px]">
    <router-link v-for="i in examples" :to="{ path: '/examplePage/' + i }">
      <h1
        class="text-center bg-[#a9ed29] mb-[20px] mx-[10px] p-[10px] rounded-[30px]"
      >
        {{ i }}
      </h1>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examples: [
        "Hello World! бағдарламасы",
        "Екі санды қосуға арналған бағдарламасы",
        "Факториалды табуға арналған бағдарламасы",
        "Санның жұп немесе тақ екенін тексеруге арналған бағдарлама бағдарламасы",
        "Санның дәрежесін есептеу бағдарламасы",
        "Санның факторларын көрсететін бағдарлама",
        "Армстронг санын тексеруге арналған бағдарламасы",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
