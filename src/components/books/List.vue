<template>
  <div>
    <div v-for="book in books" :key="book._id">
      {{ book.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BooksList',
  data: () => ({
    books: [],
  }),
  created() {
    fetch('https://expressaula.herokuapp.com/books')
      .then(response => response.json())
      .then(data => this.books = data);
  }
}
</script>
