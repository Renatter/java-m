<template>
  <div :class="{ sent: isCurrentUser, received: !isCurrentUser }">
    <p class="text-[20px] font-bold">
      {{ isCurrentUser ? "Ciз" : message.sender }}
    </p>
    <p class="text-[15px] break-word">{{ message.text }}</p>
    <small>Дата: {{ formatDate(message.timestamp) }}</small>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
  },
};
</script>

<style scoped>
.sent {
  width: 100%;
  background-color: #7556f7;
  color: white;
  border-radius: 10px;
  padding: 15px;
  margin: 5px 0;
  align-self: flex-start; /* Стилизуем сообщения текущего пользователя слева */
}

.received {
  background-color: #efedf9;
  border-radius: 5px;
  padding: 15px;
  margin: 5px 0;
  align-self: flex-end; /* Стилизуем сообщения от других пользователей справа */
}

.break-word {
  word-break: break-word; /* Добавляем перенос слов по ширине */
}
</style>
