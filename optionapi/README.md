# optionapi

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### AULA 01 (29)

foi uma aula de estruturação do codigo para poder começar a trabalhar
primeiro - ele instalou via npm o tailwind para utilizar no vue
segundo -  pegou os arquivos que utilizaria, no caso o spinner.svg e o template para colocar no app.vue
terceiro - ele instalou no global do pc um json-serve para simular o consumo de uma pai online
quarto - criou uma pasta (api) para utilizar um database.json e fazer o consumo dos dados pela api

### AULA 02 (30)

primeiro - quebrar o template html importado para ficar algo mais facil de identificar e manter.
vai ir quebrando um html padrão para ficar dividido em componentes 
segundo - importar o pacote axios para fazer o uso de https 5 min da aula
terceiro - fazemos o uso do axios para acessar o json-serve na porta 3000 que fizemos na aula anterior

created(){
      axios.get('http://localhost:3000/todos')
      .then((response) => {
            console.log(response.data)
            this.todos = response.data
      })
  }

quarto - instalar o pacote do vuex para fazer o acesso aos dados que estamos recebendo do axios
quinto - configurar para o todoItems retorna a lista do todos do axios e passar o parametro da todo para o TodoItem poder acessar por meio das props o que vem do pai
sexto - configar para cada todoItem retornar um todo da lista de todos
pra finalizar colocou um if no spinner para aparecer antes de carregar a api e sumir quando terminar o carregamento.


### AULA 03 (31)

primeira modificação vai ser parar de usar mutations e então vai tirar o comando do axios de dentro do created e colocar ele dentro de actions do vuex
segundo - colocar um setTimeout para simular uma demora na consulta do banco api
terceiro - como não funcionou o timeout vamos fazer o retorno de uma nova promessa
a grande sacada é poder interagir diretamente com os componentes como vai ser o caso do formAdd
quarto - foi feito um evento de submit para reconhecer o texto e colocar prevent, depois fazer uma action para pegar esses dados  que seram passados por methods e assim ja esta feita a criação de mais um todo
quinto - para fazer aparecer na tela vamos ele cria uma mutation para fazer um push no todoItem toda vez ocorrer o post do addTodo
sexto - fazer uma validação simples só para evitar de salvar uma todo em branco
setimo - fazer um finally para limpar o input do form 


### AULA 04 (32)

ele colocou um keyup.enter para programar um metodo para disparar dentro de cada todoItem para fazer o update do texto
aos 2 min ele ensinou o macete para conseguir passar mais q 2 parametros no action do updateTodo, apos ter feito o put para fazer update da api
fazer a troca de tarefa completa ou não
e agora para fazer a troca ser feita no banco basta colocar para chamar o proprio metodo do updateTodo e mudar o completed para receber a variavel isCompleted
apareceu um bug para resolver maroto, onde não da para receber o evento
ele acabou tendo q mudar muita coisa para conseguir adaptar 

criou duas variaveis local para mudar os valores seguindo o padrão
e separou os metodos para ter um que faz o update inteiro e outros dois para alterar os dois campos...


### AULA 05 (33) ultima da option api
ele lembra do detalhe de que o state não esta sendo alterado no update
vamos sincronizar agora, chamando o then depois do ajax

## Proxima aula será refatorando para composition API
