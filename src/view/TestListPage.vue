<template>
  <div>
    <div class="bg-[#FF5D5D] rounded-b-[35px] h-[60px] fixed z-10 w-full">
      <h1 class="text-[white] text-[20px] text-center pt-[15px] font-bold">
        Язык программирования Java
      </h1>
    </div>
    <div class="pt-[70px] w-[95%] mx-[15px]">
      <div v-if="currentQuestion">
        <p class="text-center text-[35px] font-bold mb-[15px]">
          {{ currentQuestion.text }}
        </p>
        <div class="flex flex-wrap gap-[20px] justify-between">
          <div
            v-for="(option, optionIndex) in currentQuestion.options"
            :key="optionIndex"
            class="option border-[1px] border-purple-500 text-[15px] h-[150px] w-[150px] text-center font-bold pt-[55px] rounded-[15px]"
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

    <div
      v-if="showCorrectMessage"
      class="text-green-500 text-center font-bold pt-[15px]"
    >
      Вы ответили правильно
    </div>
     <div
      v-if="showFalseMes"
      class="text-[red] text-center font-bold pt-[15px]"
    >
      Вы ответили не правильно
    </div>

    <div v-if="currentQuestionIndex === questions.length">
      <p class="text-center text-[35px] font-bold mb-[15px]">
        Тест завершен. Вы ответили правильно на {{ totalCorrectAnswers }} из {{ questions.length }} вопросов.
      </p>
    </div>
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      currentQuestionIndex: 0,
      showCorrectMessage: false,
      showFalseMes:false,
      questions: [],
    };
  },
  computed: {
    currentQuestion() {
      return this.currentQuestionIndex !== null
        ? this.questions[this.currentQuestionIndex]
        : null;
    },
    totalCorrectAnswers() {
      return this.questions.filter(
        (question, index) => this.isCorrect(index, question.selectedOption)
      ).length;
    },
  },
  methods: {
selectOption(questionIndex, optionIndex) {
  this.questions[questionIndex].selectedOption = optionIndex;
  if (this.isCorrect(questionIndex, optionIndex)) {
    this.showCorrectMessage = true;
    setTimeout(() => {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.goToNext(); // Перенаправление на следующий вопрос
      } else {
        this.currentQuestionIndex = this.questions.length; // Устанавливаем индекс для завершения теста
      }
      this.showCorrectMessage = false;
    }, 1000);
  } else {
    this.showFalseMes = true
     setTimeout(() => {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.goToNext(); // Перенаправление на следующий вопрос
      } else {
        this.currentQuestionIndex = this.questions.length; // Устанавливаем индекс для завершения теста
      }
      this.showFalseMes = false;
    }, 1000);
  }
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
      } else {
        this.currentQuestionIndex = this.questions.length; // Устанавливаем индекс для завершения теста
      }
    },
    goToPrevious() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
  },
  async created() {
    try {
      const docRef = doc(db, "questions", "java1");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        this.questions = data.questions;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  },
};
</script>

<style lang="scss" scoped>
.option {
  margin-right: 10px;
  cursor: pointer;
}
.selected {
  cursor: pointer;
  border: 3px solid transparent;
}
.correct {
  border-color: green;
}
.incorrect {
  border-color: red;
}
</style>
