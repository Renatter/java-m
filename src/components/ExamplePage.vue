<template>
  <div>
    <div class="bg-[#a9ed29] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1 class="text-[white] text-[17px] text-center pt-[15px] font-bold">
        {{ example.name }}
      </h1>
    </div>
    <div v-if="example" class="pt-[100px] px-[20px]">
      <h1 class="text-center mb-[10px] font-bold">Енгiзу коды</h1>
      <img :src="example.img1" alt="" class="" width="100%" />
      <button
        @click="copyCode"
        class="bg-[#7556F7] hover:bg-[#7556F7] text-white font-bold py-2 px-4 border-b-4 border-[#4426bd] hover:border-[#563cc0] rounded w-[100%]"
      >
        Кодты көшіру
      </button>
      <h1 class="text-center mb-[10px] font-bold">Нәтижесі</h1>
      <p class="bg-[black] text-[white] text-center mb-[10px]">
        <span class="t" v-html="formatText(example.result)"></span>
      </p>
      <h1 class="text-center mb-[10px] font-bold">Түсіндіру</h1>
      <span class="t" v-html="formatText(example.text)"></span>

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
    </div>
    <div v-else>
      <p>Таңдалған элемент табылмады.</p>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/exm/img1.png";
import img2 from "../assets/exm/img2.png";
export default {
  data() {
    return {
      name: this.$route.params.id,
      example: null,
      showCompil: false,
    };
  },
  created() {
    const data = [
      {
        name: "Hello World! бағдарламасы",
        img1: img1,
        result: "Hello, world!",
        text: "`Hello World` деп аталатын `Java` коды бағдарламаның кіру нүктесі болып табылатын `main` әдісті қамтиды. Әдістің ішінде `System.out` нысанының `println` функциясы шақырылып, «Hello, world!» жолын шығарады.",
        copy: 'public class HelloWorld {public static void main(String[] args) { System.out.println("Hello, world!"); }}',
      },
      {
        name: "Екі санды қосуға арналған бағдарламасы",
        img1: img2,
        result: "numbe1: 1 <br/> number2: 2 <br/> Result: 3.0",
        text: "Екі санды қосуға арналған `Java` бағдарламасы пайдаланушыдан екі санды қабылдайды, оларды қосады және нәтижені консольде көрсетеді. Бұған пайдаланушы енгізуін оқу үшін `Scanner`  әдісін және қосу әрекетін орындау үшін + операторын пайдалану арқылы қол жеткізіледі.",
        copy: 'import java.util.Scanner; public class Addition { public static void main(String[] args) { Scanner scanner = new Scanner(System.in);System.out.print("numbe1: "); double firstNumber = scanner.nextDouble(); System.out.print("number2: "); double secondNumber = scanner.nextDouble(); double sum = firstNumber + secondNumber;System.out.println("Result: " + sum); scanner.close(); }}',
      },
      {
        name: "Квадрат теңдеудің барлық түбірлерін табуға арналған бағдарлама бағдарламасы",
        text: "3",
      },
      { name: "Факториалды табуға арналған бағдарламасы", text: "4" },
      {
        name: "Санның жұп немесе тақ екенін тексеруге арналған бағдарлама бағдарламасы",
        text: "5",
      },
      { name: "Санның дәрежесін есептеу бағдарламасы", text: "6" },
      { name: "Санның факторларын көрсететін бағдарлама", text: "7" },
      { name: "Армстронг санын тексеруге арналған бағдарламасы", text: "8" },
    ];
    this.example = data.find((item) => item.name === this.name);
  },
  watch: {
    "$route.params.id": function (newId) {
      this.name = newId;
      this.example = data.find((item) => item.name === this.name);
    },
  },
  methods: {
    copyCode() {
      if (this.example) {
        const codeToCopy = this.example.copy;
        navigator.clipboard
          .writeText(codeToCopy)
          .then(() => {
            console.log("Код скопирован в буфер обмена");
            // Добавьте здесь обратную связь пользователю, если нужно
          })
          .catch((err) => {
            console.error("Ошибка копирования кода:", err);
            // Добавьте здесь обработку ошибки копирования, если нужно
          });
      }
    },
    formatText(text) {
      // Используем регулярное выражение для замены обратных кавычек и добавления переносов строки
      const formattedText = text.replace(
        /`([^`]+)`/g,
        '<span class="code bg-[#7556F7] text-[white] p-[4px]  rounded-[5px]">$1</span>'
      );
      return formattedText.replace(/\n/g, "<br/>");
    },
  },
};
</script>

<style scoped>
code {
  background-color: red;
  color: blue;
  border-radius: 0.3em;
  padding: 4px 5px 6px;
  white-space: nowrap;
}

.t {
  font-size: 13px;
  line-height: 20px;
}
</style>
