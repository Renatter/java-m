<template>
  <div class="mb-[85px]">
    <div class="bg-[#7556F7] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1 class="text-[white] text-[17px] text-center pt-[15px] font-bold">
        {{ item.desc[currentColorIndex].name }}
      </h1>
    </div>
    <div class="pt-[70px]">
      <img
        class="object-contain w-[90%] h-[250px] mx-[15px] rounded-[25px]"
        :src="item.desc[currentColorIndex].img"
        alt=""
      />
      <p class="text-center text-[25px] text-[#7556F7]">
        {{ currentColorIndex + 1 }}/ {{ item.desc.length }}
      </p>
      <p class="w-[90%] mx-[15px] text-[15px] pt-[15px]" style="">
        <span
          class="t"
          v-html="formatText(item.desc[currentColorIndex].text)"
        ></span>
      </p>
    </div>

    <nav
      class="fixed bottom-0 left-0 w-[90%] mx-[15px] bg-[#7556F7] mb-[15px] rounded-[35px] text-white"
    >
      <ul class="flex justify-around p-4">
        <li>
          <!-- Вызываем метод goToPreviousColor при клике на кнопку Back -->
          <button @click="goToPrevious">Back</button>
        </li>
        <li>
          <!-- Вызываем метод goToNextColor при клике на кнопку Next -->
          <button @click="goToNext">Next</button>
        </li>
      </ul>
    </nav>
  </div>
  <button
    @click="showCompil = !showCompil"
    class="bg-[#7556F7] hover:bg-[#7556F7] text-white font-bold py-2 px-4 border-b-4 border-[#4426bd] hover:border-[#563cc0] rounded"
  >
    {{ showCompil ? "Компилятор жабу" : "Компилятор корсету" }}
  </button>
  <iframe
    v-if="showCompil"
    src="https://www.jdoodle.com/embed/v0/3"
    width="100%"
    height="500px"
  ></iframe>
</template>

<script>
import {
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
  collection,
  onSnapshot,
  getDocs,
  getDocsFromServer,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";

import { db, auth, storage } from "../firebase/firebase";
import { javaCourse } from "../data";
export default {
  data() {
    return {
      name: this.$route.params.id,
      colors: javaCourse[0],
      currentColorIndex: 0,
      showCompil: false,
      item: {},
    };
  },
  methods: {
    // Метод для перехода к предыдущему цвету
    goToPrevious() {
      if (this.currentColorIndex > 0) {
        this.currentColorIndex--;
      }
    },
    // Метод для перехода к следующему цвету
    goToNext() {
      if (this.currentColorIndex < this.item.desc.length - 1) {
        this.currentColorIndex++;
      }
    },
    // Метод для форматирования текста
    // Метод для форматирования текста
    formatText(text) {
      // Используем регулярное выражение для замены обратных кавычек и добавления переносов строки
      const formattedText = text.replace(
        /`([^`]+)`/g,
        '<span class="code bg-[#7556F7] text-[white] p-[4px]  rounded-[5px]">$1</span>'
      );
      return formattedText.replace(/\n/g, "<br/>");
    },
  },
  async created() {
    const javaQuery = query(
      collection(db, "javaText"),
      where("id", "==", +this.name)
    );
    onSnapshot(javaQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.item = doc.data();
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.code {
  background-color: #c41616;
  border-radius: 3px;
  padding: 2px 4px;
}
@media (max-width: 385px) {
  .t {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>
