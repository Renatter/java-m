<template>
  <div
    class="container w-[95%] h-[250px] bg-[#7556F7] m-[1px] rounded-[35px] p-[30px] text-white"
  >
    <div class="flex justify-between">
      <h1 class="text-[25px]" v-if="user">
        {{ user.name }}, <br />
        Good morning
      </h1>
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center bg-[white] text-[#7556F7] font-bold"
      >
        {{ user ? user.name.charAt(0) : "?" }}
      </div>
    </div>
    <!-- <button @click="addData()">ADD</button> -->
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
      <CategoryCard
        :title="i.title"
        :img="i.img"
        :router="i.router"
        v-for="i in category"
        :key="i"
      ></CategoryCard>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase/firebase";
import { doc, addDoc, onSnapshot, collection } from "firebase/firestore";
import book from "../assets/book.png";
import lampa from "../assets/lampa.png";
import test from "../assets/test.png";
import video from "../assets/video.png";
import CategoryCard from "../components/CategoryCard.vue";
export default {
  data() {
    return {
      user: null,
      category: [
        { title: "Уроки", img: book, router: "/lesson" },
        { title: "Видео", img: video, router: "/videoPage" },
        { title: "Тесты", img: test, router: "/testPage" },
        { title: "Шпаргалка", img: lampa, router: "/lesson" },
      ],
    };
  },
  components: {
    CategoryCard,
  },
  methods: {
    async addData() {
      const javaCourse = [
        {
          name: "Введение в Java",
          img: "1.img",
          page: 10,
          desc: [
            {
              name: "Что такое Java?",
              text: 'Java - это объектно-ориентированный язык программирования, разработанный компанией Sun Microsystems. Простейший пример программы на Java: \n\n```java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Привет, мир!");\n    }\n}\n```',
            },
            {
              name: "Установка Java Development Kit (JDK)",
              text: "Для начала работы с Java необходимо установить JDK. Это набор инструментов для разработки Java-приложений. Инструкции по установке JDK можно найти на официальном сайте Oracle.",
            },
            {
              name: "Компиляция и запуск программ",
              text: "После написания программы на Java, ее необходимо скомпилировать в байт-код с помощью команды `javac`, а затем запустить с помощью команды `java`. Пример:\n\n```bash\njavac HelloWorld.java\njava HelloWorld\n```",
            },
            {
              name: "Интегрированная среда разработки (IDE)",
              text: "Для удобства разработки на Java часто используются интегрированные среды разработки, такие как IntelliJ IDEA, Eclipse или NetBeans.",
            },
            {
              name: "Интерактивные приложения и веб-сервисы",
              text: "Java поддерживает создание как десктопных, так и веб-приложений. Для создания веб-сервисов часто используется технология Java Servlets или фреймворк Spring.",
            },
            {
              name: "Работа с файлами и потоками данных",
              text: "В Java есть множество классов и методов для работы с файлами и потоками данных. Например, классы `File`, `FileInputStream`, `FileOutputStream` и другие.",
            },
            {
              name: "Многопоточное программирование",
              text: "Java имеет встроенную поддержку многопоточности, позволяющую создавать многопоточные приложения. Для этого используются классы `Thread` и `Runnable`.",
            },
            {
              name: "Обработка исключений",
              text: "Исключения в Java используются для обработки ошибок и неожиданных ситуаций. Для обработки исключений используется конструкция `try-catch`.",
            },
            {
              name: "Коллекции",
              text: "Java предоставляет богатый набор коллекций для хранения и управления группами объектов. Некоторые из них: `ArrayList`, `LinkedList`, `HashMap`, `TreeMap` и другие.",
            },
            {
              name: "Работа со строками",
              text: "Java предоставляет множество методов для работы со строками, включая конкатенацию, поиск, замену и многое другое. Например, методы `concat()`, `indexOf()`, `replace()`.",
            },
          ],
        },
        {
          name: "Основы программирования на Java",
          img: "2.img",
          page: 8,
          desc: [
            {
              name: "Переменные и типы данных",
              text: "В Java существует несколько типов данных, таких как `int`, `double`, `boolean`, `String` и другие. Переменная - это имя, которое связывается с некоторым значением.",
            },
            {
              name: "Операторы",
              text: "Java поддерживает множество операторов, включая арифметические, логические, отношения и присваивания.",
            },
            {
              name: "Условные операторы",
              text: "Условные операторы в Java позволяют выполнить определенные действия в зависимости от условия. Пример: `if`, `else`, `switch`.",
            },
            {
              name: "Циклы",
              text: "Циклы в Java позволяют выполнять определенные действия несколько раз. Например, `for`, `while`, `do-while`.",
            },
            {
              name: "Массивы",
              text: "Массивы в Java позволяют хранить набор элементов одного типа. Обращение к элементам массива осуществляется по индексу.",
            },
            {
              name: "Функции (методы)",
              text: "Функции в Java - это блоки кода, которые могут быть вызваны из других частей программы. Они позволяют структурировать код и избегать повторения.",
            },
            {
              name: "Объектно-ориентированное программирование",
              text: "Объектно-ориентированное программирование (ООП) - это парадигма программирования, основанная на объектах и классах. Основные принципы ООП: инкапсуляция, наследование, полиморфизм.",
            },
            {
              name: "Классы и объекты",
              text: "Класс - это шаблон, описывающий состояние и поведение объекта. Объект - это экземпляр класса. В Java объекты создаются с помощью ключевого слова `new`.",
            },
          ],
        },
        {
          name: "Классы. Объектно-ориентированное программирование",
          img: "3.img",
          page: 6,
          desc: [
            {
              name: "Определение классов",
              text: "В Java класс определяется с помощью ключевого слова `class`, за которым следует имя класса и тело класса, содержащее поля (переменные) и методы (функции).",
            },
            {
              name: "Конструкторы",
              text: "Конструктор - это специальный метод класса, который вызывается при создании объекта. В Java конструкторы имеют то же имя, что и класс, и не возвращают значения.",
            },
            {
              name: "Методы класса",
              text: "Методы класса определяют поведение объектов этого класса. Они могут быть публичными, приватными или защищенными.",
            },
            {
              name: "Наследование",
              text: "Наследование в Java позволяет создавать новые классы на основе существующих. Класс-наследник (подкласс) наследует поля и методы своего родительского класса (суперкласса).",
            },
            {
              name: "Полиморфизм",
              text: "Полиморфизм в Java означает способность объекта обрабатывать данные разных типов. Он может проявляться в перегрузке методов или в реализации абстрактных методов интерфейса.",
            },
            {
              name: "Интерфейсы",
              text: "Интерфейс в Java - это абстрактный тип данных, который содержит только методы без реализации. Классы могут реализовывать интерфейсы, что обеспечивает полиморфизм.",
            },
          ],
        },
        {
          name: "Обработка исключений",
          img: "4.img",
          page: 4,
          desc: [
            {
              name: "Исключения в Java",
              text: "Исключение - это объект, который сигнализирует о возникновении ошибки или исключительной ситуации во время выполнения программы. В Java исключения обрабатываются с помощью конструкции `try-catch`.",
            },
            {
              name: "Блок try-catch",
              text: "Конструкция `try-catch` используется для обработки исключений. Код, который может вызвать исключение, помещается в блок `try`, а обработчик исключения - в блок `catch`.",
            },
            {
              name: "Блок finally",
              text: "Блок `finally` используется для выполнения кода независимо от того, возникло исключение или нет. Код в блоке `finally` выполняется всегда, даже если было выброшено исключение.",
            },
            {
              name: "Генерация исключений",
              text: "В Java также можно явным образом генерировать исключения с помощью ключевого слова `throw`. Это позволяет создавать собственные типы исключений или выбрасывать стандартные исключения.",
            },
          ],
        },
        {
          name: "Коллекции",
          img: "5.img",
          page: 6,
          desc: [
            {
              name: "ArrayList",
              text: "ArrayList - это класс, представляющий динамический массив объектов. Он обеспечивает быстрый доступ к элементам и поддерживает различные операции, такие как добавление, удаление и поиск элементов.",
            },
            {
              name: "LinkedList",
              text: "LinkedList - это класс, представляющий двусвязный список объектов. Он хранит элементы в виде узлов, каждый из которых содержит ссылку на следующий и предыдущий элементы.",
            },
            {
              name: "HashMap",
              text: "HashMap - это класс, представляющий хеш-таблицу ключ-значение. Он обеспечивает быстрое добавление, удаление и поиск элементов по ключу.",
            },
            {
              name: "TreeMap",
              text: "TreeMap - это класс, представляющий отсортированное дерево ключ-значение. Он хранит элементы в виде упорядоченного набора, что обеспечивает быстрый доступ к элементам и поддерживает различные операции",
            },
            {
              name: "HashSet",
              text: "HashSet - это класс, представляющий множество уникальных элементов. Он использует хеш-таблицу для хранения элементов и обеспечивает быстрое добавление, удаление и поиск элементов.",
            },
            {
              name: "LinkedHashSet",
              text: "LinkedHashSet - это класс, представляющий множество уникальных элементов с сохранением порядка вставки. Он хранит элементы в виде двусвязного списка и обеспечивает быстрый доступ к элементам.",
            },
          ],
        },
        {
          name: "Работа со строками",
          img: "6.img",
          page: 4,
          desc: [
            {
              name: "Конкатенация строк",
              text: "Конкатенация строк - это операция объединения двух строк в одну. В Java для конкатенации используется оператор `+` или метод `concat()`.",
            },
            {
              name: "Поиск подстроки",
              text: "В Java можно выполнять поиск подстроки в строке с помощью метода `indexOf()`. Он возвращает индекс первого вхождения подстроки в строку.",
            },
            {
              name: "Замена подстроки",
              text: "Для замены подстроки в строке в Java используется метод `replace()`. Он заменяет все вхождения указанной подстроки на новую строку.",
            },
            {
              name: "Разделение строки",
              text: "Метод `split()` в Java используется для разделения строки на подстроки с заданным разделителем. Он возвращает массив подстрок.",
            },
          ],
        },
      ];
      javaCourse.forEach((course) => {
        addDoc(collection(db, "javaText"), course)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      });
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        const docRef = doc(db, "userProfile", user.uid);
        const unsubscribeCart = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.user = docSnap.data();
            console.log(this.user);
          } else {
            console.log("No such document!");
          }
        });

        // Save the unsubscribe functions to be used when the component is destroyed
        this.unsubscribeCart = unsubscribeCart;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  margin-top: 15px;
  width: 95%;
}
</style>
