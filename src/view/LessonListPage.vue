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
        Java - это мощный и универсальный язык программирования, разработанный
        компанией Sun Microsystems (позднее приобретенной компанией Oracle). Он
        позволяет создавать кроссплатформенные приложения, которые могут
        выполняться на различных устройствах, от компьютеров до мобильных
        устройств. Java обладает строгой типизацией, обширными библиотеками и
        высокоуровневым синтаксисом, делая его одним из самых популярных языков
        программирования в мире
      </p>
    </div>

    <nav
      class="fixed bottom-0 left-0 w-[90%] mx-[15px] bg-[#7556F7] mb-[15px] rounded-[35px] text-white"
    >
      <ul class="flex justify-around p-4">
        <li>
          <router-link to="/profile">Back</router-link>
        </li>
        <li>
          <router-link to="/settings">Next</router-link>
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
    };
  },
};
</script>

<style lang="scss" scoped>
/* Здесь вы можете добавить стили по вашему усмотрению для нижнего меню */
</style>
