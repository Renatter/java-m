<template>
  <div class="bg-[#7556F7] rounded-b-[35px] h-[60px] fixed z-10 w-full">
    <h1 class="text-[white] text-[17px] text-center pt-[15px] font-bold">
      Чат
    </h1>
  </div>
  <div class="w-[90%] mx-[15px] relative pt-[70px]">
    <div class="pb-[70px]">
      <div class="my-[5px]" v-for="(message, index) in messages" :key="index">
        <Message
          :message="message"
          :isCurrentUser="message.sender === currentUser"
        />
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="tex flex">
      <input
        type="text"
        v-model="newMessageText"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <button
        type="submit"
        class="text-white bg-[#7556F7] hover:bg-[#7556F7] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#7556F7] dark:hover:bg-[#7556F7] focus:outline-none ml-[15px]"
      >
        Отправить
      </button>
    </form>
  </div>
</template>
<script>
import { dbase, auth, db } from "../firebase/firebase";
import { ref, onValue, push } from "firebase/database";
import { doc, onSnapshot } from "firebase/firestore";
import Message from "../components/Message.vue";

export default {
  components: {
    Message,
  },
  data() {
    return {
      messages: [],
      newMessageText: "",
      currentUser: null, // Изначально currentUser устанавливаем в null
    };
  },
  mounted() {
    this.loadMessages();
  },
  methods: {
    loadMessages() {
      const messagesRef = ref(dbase, "messages");
      onValue(messagesRef, (snapshot) => {
        this.messages = snapshot.val() || [];
      });
    },
    sendMessage() {
      const messagesRef = ref(dbase, "messages");
      push(messagesRef, {
        text: this.newMessageText,
        timestamp: Date.now(),
        sender: this.currentUser,
      });
      this.newMessageText = "";
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "userProfile", user.uid);
        const unsubscribeCart = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.currentUser = docSnap.data().name;
          } else {
            console.log("No such document!");
          }
        });

        // Save the unsubscribe functions to be used when the component is destroyed
        this.unsubscribeCart = unsubscribeCart;
      }
    });
    console.log();
  },
};
</script>
<style scoped>
.tex {
  position: fixed;
  bottom: 15px;
}
</style>
