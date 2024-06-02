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
import img4 from "../assets/exm/img4.png";
import img5 from "../assets/exm/img5.png";
import img6 from "../assets/exm/img6.png";
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
        name: "Факториалды табуға арналған бағдарламасы",
        img1: img4,
        result: "Санды енгізі:3 <br/>  Факторлық сан: 3 тен 6",
        text: "1. Пернетақтадан деректерді енгізу үшін `Scanner`   нысаны жасалады. <br/> 2. Пайдаланушыдан нөмірді енгізу сұралады. <br/> 3. Егер сан теріс болса, бағдарлама теріс сандар үшін факториал анықталмағаны туралы хабарлама шығарады. <br/> 4. Егер сан теріс болмаса, факториалды есептеу үшін `calculateFactorial` әдісі шақырылады және нәтиже шығады. <br/>",
        copy: ' import java.util.Scanner; public class FactorialCalculator { public static void main(String[] args) {  Scanner scanner = new Scanner(System.in); System.out.print("numb: ");int number = scanner.nextInt(); if (number < 0) {System.out.println("."); } else { long factorial = calculateFactorial(number);System.out.println("Num " + number + "toEqual " + factorial); }scanner.close();}public static long calculateFactorial(int n) {long result = 1;for (int i = 1; i <= n; i++) {   result *= i;}return result;}}',
      },
      {
        name: "Санның жұп немесе тақ екенін тексеруге арналған бағдарлама бағдарламасы",
        img1: img5,
        text: "1. Пернетақтадан деректерді оқу үшін `Scanner` нысаны жасалады. <br/> 2. Пайдаланушыдан нөмірді енгізу сұралады. <br/> 3. Енгізілген Сан паритетті тексеру үшін `isEven` әдісіне беріледі.  <br/> 4. `IsEven` әдісінің нәтижесіне байланысты бағдарлама санның жұп немесе тақ екендігі туралы хабарлама шығарады. <br/> 5. `Scanner` нысаны жабылады.",
        result:
          "Нөмірді енгізіңіз: 4 <br/> 4 саны жұп. <br/> Нөмірді енгізіңіз: 7  <br/> 7 саны тақ.",
        copy: 'import java.util.Scanner; public class EvenOddChecker {public static void main(String[] args) {Scanner scanner = new Scanner(System.in); System.out.print("Number: "); int number = scanner.nextInt();if (isEven(number)) {System.out.println("Number " + number + " chetnim");} else {System.out.println("Number " + number + " neChetnim");} scanner.close();}public static boolean isEven(int number) { return number % 2 == 0; }}',
      },
      {
        name: "Санның дәрежесін есептеу бағдарламасы",
        text: "`main` әдіс: <br/> 1. Пернетақтадан деректерді оқу үшін Scanner нысаны жасалады. <br/> 2. Пайдаланушыдан негізді (санды) және дәреже көрсеткішін енгізу сұралады. <br/> 3. Енгізілген мәндер санның дәрежесін есептеу үшін `calculate powe`r әдісіне беріледі. <br/> 4. Есептеу нәтижесі экранға шығарылады. <br/> 5. Сканер нысаны жабылады. <br/> `CalculatePower` әдісі:  <br/> 1. Параметрлер ретінде негізді (санды) және дәреже көрсеткішін қабылдайды. <br/> 2. Нәтиже айнымалысын 1 мәнімен инициализациялайды.  <br/> 3. For циклі нәтижені негізге көбейту арқылы көрсеткіштің абсолютті мәніне дейін 1-ден өтеді.  <br/> 4. Егер көрсеткіш теріс болса, нәтиже төңкеріледі (1 / нәтиже).  <br/> 5. Есептелген дәреже мәнін қайтарады.",
        result:
          "Негізді (санды) енгізіңіз: 2 <br/> Көрсеткішті енгізіңіз: 3 <br/>  2.0 3-ші дәрежеде 8.0-ге тең",
        img1: img6,
        copy: "import java.util.Scanner; public class PowerCalculator { public static void main(String[] args) {Scanner scanner = new Scanner(System.in); System.out.print('x'); double base = scanner.nextDouble(); System.out.print('y'); int exponent = scanner.nextInt(); double result = calculatePower(base, exponent); System.out.println(result); scanner.close();} public static double calculatePower(double base, int exponent) {double result = 1;for (int i = 1; i <= Math.abs(exponent); i++) {result *= base;}if (exponent < 0) { result = 1 / result;}return result;}}",
      },
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
