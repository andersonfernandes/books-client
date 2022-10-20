<template>
  <div class="about">
    <h1>Lista de Livros</h1>
    <BooksList />
  </div>
</template>

<script>
// @ is an alias to /src
import BooksList from '@/components/BooksList.vue'

export default {
  name: 'HomeView',
  components: {
    BooksList
  }
}
</script>