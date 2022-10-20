<template>
  <div class="body">
    <form>

      <h1>Editar seu Livro</h1>

      <div class="card">

        <div class="card__field">
          <label>Titulo</label>
          <input type="text" v-model="title" required="true"/>
        </div>

        <div class="card__field">
          <label>Autor</label>
          <input type="text" v-model="autor" required="true">
        </div>

        <div class="card__field">
          <label>ISBN</label>
          <input type="number" v-model="isbn" required="true"/>
        </div>

        <div class="card__field">
          <label>Resumo</label>
          <input type="text" v-model="resumo" required="true">
        </div>

        <div class="card__field">
          <label>Ano do Lançamento</label>
          <input type="number" v-model="ano_lancamento" required="true"/>
        </div>

        <div class="card__submit">
          <button type="submit" @click="atualizarLivro($event)">Atualizar Livro</button>
        </div>

        <router-link to="/listaLivro" class="card__create">
          Voltar
        </router-link>

      </div>

    </form>
  </div>
</template>

<script>

import {server} from "@/services/config";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CadastrarLivro",
  components: {},
  props: ["id"],
  data() {
    return {
      books: [],
      title: this.title,
      autor: this.autor,
      isbn: this.isbn,
      resumo: this.resumo,
      ano_lancamento: this.ano_lancamento,
    }
  },
  methods: {
    async getBookById() {
      const result = await server.get(`/books/${this.id}`);
      this.books = result.data;
      if ( this.books ) {
        this.title = this.books.title;
        this.autor = this.books.autor;
        this.isbn = this.books.isbn;
        this.resumo = this.books.resumo;
        this.ano_lancamento = this.books.ano_lancamento;
      }
    },
    async atualizarLivro(e) {
      e.preventDefault();

      const data = {
        title: this.title,
        autor: this.autor,
        isbn: this.isbn,
        resumo: this.resumo,
        ano_lancamento: this.ano_lancamento,
      }
      const dataJson = JSON.stringify(data);

      const req = await fetch(`https://expressaula.herokuapp.com/books/${this.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: dataJson,
      })

      console.log(await req.json());
    }
  },
  async beforeMount() {
    await this.getBookById();
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card__field {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 300px;
}
.card__field label {
  font-size: 18px;
  font-weight: 600;
}
.card__field input {
  font-size: 20px;
  width: 100%;
  margin: 10px 0;
}

button {
  width: 300px;
  height: 40px;
  font-size: 18px;
  margin: 10px 0;
  background: #23da23;
  color: white;
  border: none;
  border-radius: 5px;
}

a {
  font-size: 18px;
  margin: 5px 0;
}
</style>