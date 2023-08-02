<template>
  <div class="about">
    <h1
      class="text-center my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Lista de lectura
    </h1>
    <BooksList
      class="text-center"
      :books="$booksStore.booksList"
      :type="'bookList'"
    />
  </div>
</template>

<script setup>
import BooksList from "@/components/BooksList.vue";
import { useBooksStore } from "@/stores/BooksStore";

const $booksStore = useBooksStore();
</script>
