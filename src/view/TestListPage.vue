<template>
  <div>
    <div class="bg-[#FF5D5D] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1 class="text-[white] text-[20px] text-center pt-[15px] font-bold">
        Язык программирования Java
      </h1>
    </div>
    <div class="pt-[70px] w-[95%] mx-[15px]">
      <div v-if="currentQuestionIndex !== null">
        <p>{{ currentQuestion.text }}</p>
        <div
          v-for="(option, optionIndex) in currentQuestion.options"
          :key="optionIndex"
          class="cursor-pointer"
          :class="{
            correct: isCorrect(currentQuestionIndex, optionIndex),
            incorrect:
              isSelected(currentQuestionIndex, optionIndex) &&
              !isCorrect(currentQuestionIndex, optionIndex),
            selected: isSelected(currentQuestionIndex, optionIndex),
          }"
          @click="selectOption(currentQuestionIndex, optionIndex)"
        >
          {{ option }}
        </div>
      </div>
    </div>

    <nav
      class="fixed bottom-0 left-0 w-[90%] mx-[15px] bg-[#FF5D5D] mb-[15px] rounded-[35px] text-white"
    >
      <ul class="flex justify-around p-4">
        <li>
          <button @click="goToPrevious" :disabled="currentQuestionIndex === 0">
            Back
          </button>
        </li>
        <li>
          <button
            @click="goToNext"
            :disabled="currentQuestionIndex === questions.length - 1"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.id,
      questions: [
        {
          text: "Что такое JVM в контексте языка Java?",
          options: [
            "Java Virtual Memory",
            "Java Virtual Machine",
            "Java Visual Module",
            "Java Variable Manager",
          ],
          correctIndex: 1,
          selectedOption: null,
        },
        {
          text: "Как объявить переменную целочисленного типа в Java?",
          options: ["int x;", "integer x;", "var x;", "float x;"],
          correctIndex: 0,
          selectedOption: null,
        },
        {
          text: "Какой ключевое слово используется для создания нового экземпляра класса в Java?",
          options: ["new", "create", "instance", "object"],
          correctIndex: 0,
          selectedOption: null,
        },
        {
          text: "Какой из следующих операторов используется для ветвления в Java?",
          options: ["switch", "while", "for", "do-while"],
          correctIndex: 0,
          selectedOption: null,
        },
      ],
      currentQuestionIndex: 0,
    };
  },
  computed: {
    currentQuestion() {
      return this.currentQuestionIndex !== null
        ? this.questions[this.currentQuestionIndex]
        : null;
    },
  },
  methods: {
    selectOption(questionIndex, optionIndex) {
      this.questions[questionIndex].selectedOption = optionIndex;
    },
    isSelected(questionIndex, optionIndex) {
      return this.questions[questionIndex].selectedOption === optionIndex;
    },
    isCorrect(questionIndex, optionIndex) {
      return (
        this.isSelected(questionIndex, optionIndex) &&
        optionIndex === this.questions[questionIndex].correctIndex
      );
    },
    goToNext() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    },
    goToPrevious() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.question {
  margin-bottom: 20px;
}
.option {
  margin-right: 10px;
  cursor: pointer;
}
.selected {
  cursor: pointer;
  border: 2px solid transparent;
}
.correct {
  border-color: green;
}
.incorrect {
  border-color: red;
}
</style>
