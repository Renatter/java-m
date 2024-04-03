<template>
  <div>
    <div class="bg-[#7556F7] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1 class="text-[white] text-[20px] text-center pt-[15px] font-bold">
        Язык программирования Java
      </h1>
    </div>
    <div class="pt-[70px]">
      <div
        class="bg-[#7656f791] w-[90%] rounded-[25px] h-[250px] mx-[15px] flex justify-center items-center"
      >
        <img
          class="w-[150px] h-[150px] object-contain"
          src="https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png"
          alt=""
        />
      </div>
      <p class="w-[90%] mx-[15px] text-[15px] pt-[15px]">
        {{ colors }}
      </p>
    </div>

    <nav
      class="fixed bottom-0 left-0 w-[90%] mx-[15px] bg-[#7556F7] mb-[15px] rounded-[35px] text-white"
    >
      <ul class="flex justify-around p-4">
        <li>
          <!-- Вызываем метод goToPreviousColor при клике на кнопку Back -->
          <button @click="goToPreviousColor">Back</button>
        </li>
        <li>
          <!-- Вызываем метод goToNextColor при клике на кнопку Next -->
          <button @click="goToNextColor">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { colorsArray } from "../data";

export default {
  data() {
    return {
      name: this.$route.params.id,
      colors: colorsArray[0], // По умолчанию устанавливаем первый цвет из массива
      currentColorIndex: 0, // Индекс текущего цвета
    };
  },
  methods: {
    // Метод для перехода к предыдущему цвету
    goToPreviousColor() {
      if (this.currentColorIndex > 0) {
        this.currentColorIndex--;
        this.colors = colorsArray[this.currentColorIndex];
      }
    },
    // Метод для перехода к следующему цвету
    goToNextColor() {
      if (this.currentColorIndex < colorsArray.length - 1) {
        this.currentColorIndex++;
        this.colors = colorsArray[this.currentColorIndex];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Здесь вы можете добавить стили по вашему усмотрению для нижнего меню */
</style>
