<template>
  <div>
    <router-link to="/cadastrar">
      <button class="novoLivro">Novo Livro</button>
    </router-link>

    <form>
      <div class="booklist">
        <div v-for="book in books" :key="book._id" class="card">
          <h2>{{ book.title }}</h2>
          <label>Autor:</label>
          <p>{{ book.autor }}</p>
          <label>ISBN:</label>
          <p>{{ book.isbn }}</p>
          <label>Resumo:</label>
          <p>{{ book.resumo }}</p>
          <label>Ano do Lançamento:</label>
          <p>{{ book.ano_lancamento }}</p>
          <router-link :to="{ name: 'EditarView', params: { id: book._id } }">
            <button class="editarLivro">Editar</button>
          </router-link>
          <button class="deletarLivro" v-on:click="deleteBook(book._id)">Deletar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { server } from '../services/config';

export default {
  name: 'BooksList',

  data() {
    return {
      books: [],
    }
  },
  methods: {
    async getBook() {
      const result = await server.get('/books');
      this.books = result.data;

      if ( this.books ) {
        this.title = this.books.title;
        this.autor = this.books.autor;
        this.isbn = this.books.isbn;
        this.resumo = this.books.resumo;
        this.ano_lancamento = this.books.ano_lancamento;
      }
    },
    async deleteBook(id) {
      await fetch(`https://expressaula.herokuapp.com/books/${id}`, {
        method: "DELETE",
      });
      this.getBook();
    },
  },
  async beforeMount() {
    await this.getBook();
  }
}
</script>

<style scoped>

button {
  height: 40px;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 5px;
}

.novoLivro {
  width: 300px;
  background: #23da23;
  margin: 10px 0;
}
.editarLivro {
  width: 300px;
  background: #33d0ec;
  margin: 10px 0 0;
}
.deletarLivro {
  width: 300px;
  background: #ff2828;
  margin: 10px 0 0;
}

.booklist {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}

h2 {
  text-align: center;
  width: 100%;
}

label {
  font-weight: 600;
}

p {
  margin: 5px 0;
}
</style>
