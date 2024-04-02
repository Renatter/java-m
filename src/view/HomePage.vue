<template>
  <div
    class="container w-[95%] h-[250px] bg-[#7556F7] m-[1px] rounded-[35px] p-[30px] text-white"
  >
    <div class="flex justify-between">
      <h1 class="text-[25px]">
        Renat, <br />
        Good morning
      </h1>
      <img
        class="w-10 h-10 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="Rounded avatar"
      />
    </div>

    <form class="pt-[55px]">
      <label
        for="search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          class="block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[35px] w-[100%] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-[#7556F7] hover:bg-[#5937e0] rounded-[35px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  </div>
  <div class="container">
    <h1 class="text-[25px] font-bold">Категория</h1>
  <div class="flex flex-wrap gap-[15px] justify-evenly pt-[15px]">
        <CategoryCard :title="i.title" :img="i.img" :router="i.router" v-for="i in category" :key="i"></CategoryCard>
  </div>  
</div>

</template>

<script>
import book from "../assets/book.png"
import lampa from "../assets/lampa.png"
import test from "../assets/test.png"
import video from "../assets/video.png"
import CategoryCard from '../components/CategoryCard.vue';
export default {
   data() {
        return {
            category: [
                {title:'Уроки', img:book, router: '/lesson'},
                {title:'Видео', img:video ,router: '/lesson'},
                {title:'Тесты', img:test, router: '/lesson'},
                {title:'Шпаргалка', img:lampa, router: '/lesson'},
            ]
        }
    },
  components: {
    CategoryCard
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  margin-top: 15px;
  width: 95%;
}
</style>
