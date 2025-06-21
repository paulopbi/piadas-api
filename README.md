### 🧠 Introdução

Bem-vindo à API de Piadas, uma aplicação robusta e bem estruturada desenvolvida para gerenciar e distribuir piadas de forma eficiente. Este projeto foi construído seguindo os princípios de arquitetura **MVC (Model-View-Controller)**, garantindo uma separação clara de responsabilidades e um código organizado. A API segue o padrão **RESTful**, oferecendo endpoints intuitivos e respostas em formato **JSON**, ideais para integração com frontends ou outros serviços.

### 🚀 Tecnologias Utilizadas

- **Bun.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção da API.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: ODM para MongoDB.
- **TypeScript**: Superset JavaScript com tipagem.
- **CORS**: Middleware para permitir requisições entre domínios.

### 📡 Rotas da API

| Rotas                       | Método   | Descrição                    |
| --------------------------- | -------- | ---------------------------- |
| `/api/piadas`               | `GET`    | Retorna todas as piadas      |
| `/api/piadas/:id`           | `GET`    | Retorna uma piada específica |
| `/api/piadas/criar`         | `POST`   | Cria uma nova piada          |
| `/api/piadas/deletar/:id`   | `DELETE` | Deleta uma piada             |
| `/api/piadas/atualizar/:id` | `PUT`    | Atualiza uma piada           |

Exemplo de resposta da rota `/piadas/criar`

```json
{
  "message": "...", //mensagem de retorno
  "data": {
    "_id": "65a1b2c3...",
    "conteudo": "...", //contem a piada
    "curtidas": 0, //total de curtidas
    "categorias": [""], //array de categorias
    "criado_em": "2023-12-14T12:00:00Z" //data de criação
  }
}
```

> **Todas as rotas possuem um padrão de resposta semântica, garantindo clareza e entendimento dos desenvolvedores.**

- **Status HTTP**: Semântica clara (200 para sucesso, 404 para não encontrado, 500 para erros internos).

- **Mensagens de Sucesso**: Confirmações detalhadas (ex: "Piada criada com sucesso!").

- **Tratamento de Erros**: Mensagens amigáveis e logs para debug (ex: "Piada não encontrada").

### Estrutura de pastas

```textplain
projeto/
├── src/
│   ├── controllers/    # Lógica das rotas
│   ├── models/         # Modelos do MongoDB
│   ├── routes/         # Definição das rotas
│   └── server.ts       # Configuração do servidor
├── package.json        # Dependências e scripts
└── README.md           # Documentação
```

### 📄 Licença

[Este projeto está sob a licença MIT. Clique aqui para ver os detalhes.](./LICENSE)

### 📩 Contato

- **Email**: [paulovictordev16@gmail.com](mailto:paulovictordev16@gmail.com)
- **GitHub**: [paulopbi](https://github.com/paulopbi)
- **LinkedIn**: [paulopbi](https://www.linkedin.com/in/paulopbi/)
