<template>
  <div class="body">
    <form>

      <h1>Cadastre seu Livro</h1>

      <div class="card">

        <div class="card__field">
          <label for="title">Titulo</label>
          <input type="text" id="title" name="title" v-model="title" required="true"/>
        </div>

        <div class="card__field">
          <label for="autor">Autor</label>
          <input type="text" id="autor" name="autor" v-model="autor" required="true"/>
        </div>

        <div class="card__field">
          <label for="isbn">ISBN</label>
          <input type="number" id="isbn" name="isbn" v-model="isbn" required="true"/>
        </div>

        <div class="card__field">
          <label for="resumo">Resumo</label>
          <input type="text" id="resumo" name="resumo" v-model="resumo" required="true"/>
        </div>

        <div class="card__field">
          <label for="anoLancamento">Ano do Lançamento</label>
          <input type="number" id="anoLancamento" name="anoLancamento" v-model="ano_lancamento" required="true"/>
        </div>

        <div class="card__submit">
          <button type="submit" @click="adicionarLivro($event)">Adicionar novo Livro</button>
        </div>

        <router-link to="/listaLivro" class="card__create">
          Voltar
        </router-link>

      </div>

    </form>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CadastrarLivro",
  components: {},
  data() {
    return {
      title: null,
      autor: null,
      isbn: null,
      resumo: null,
      ano_lancamento: null,
      msg: null,
    }
  },
  methods: {
    async adicionarLivro(e) {
      e.preventDefault();

      const data = {
        title: this.title,
        autor: this.autor,
        isbn: this.isbn,
        resumo: this.resumo,
        ano_lancamento: this.ano_lancamento,
      }

      console.log(data);

      const dataJson = JSON.stringify(data);

      const req = await fetch('https://expressaula.herokuapp.com/books', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: dataJson,
      })

      //Limpar Campos
      this.title = '';
      this.autor = '';
      this.isbn = '';
      this.resumo = '';
      this.ano_lancamento = '';

      console.log(await req.json())
    }
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