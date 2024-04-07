<template>
  <div>
    <div class="bg-[#FF5D5D] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1 class="text-[white] text-[20px] text-center pt-[15px] font-bold">
        Язык программирования Java
      </h1>
    </div>
    <div class="pt-[70px]">
      <video class="mx-[10px] w-[95%] max-w-[600px] rounded-[25px]" controls>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/university-fa1bf.appspot.com/o/Why%20take%20this%20Java%20Course%20.mp4?alt=media&token=ff9ac6b3-2298-49f4-86b7-ea662c6fe6ee"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <p class="w-[90%] mx-[15px] text-[15px] pt-[15px]">
        {{ colors }}
      </p>
    </div>

    <nav
      class="fixed bottom-0 left-0 w-[90%] mx-[15px] bg-[#FF5D5D] mb-[15px] rounded-[35px] text-white"
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
import { javaCourse } from "../data";

export default {
  data() {
    return {
      name: this.$route.params.id,
      colors: javaCourse[0], // По умолчанию устанавливаем первый цвет из массива
      currentColorIndex: 0, // Индекс текущего цвета
    };
  },
  methods: {
    // Метод для перехода к предыдущему цвету
    goToPreviousColor() {
      if (this.currentColorIndex > 0) {
        this.currentColorIndex--;
        this.colors = javaCourse[this.currentColorIndex];
      }
    },
    // Метод для перехода к следующему цвету
    goToNextColor() {
      if (this.currentColorIndex < javaCourse.length - 1) {
        this.currentColorIndex++;
        this.colors = javaCourse[this.currentColorIndex];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Здесь вы можете добавить стили по вашему усмотрению для нижнего меню */
</style>
