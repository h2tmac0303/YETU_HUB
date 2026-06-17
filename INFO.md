## 🔐 Autenticação
* POST /auth/register - Cria uma nova conta.

* POST /auth/login - Autentica e retorna o JWT.

## 👤 Usuários
* GET /users - Lista todos os usuários.

* GET /users/:id - Detalha um usuário específico.

* PATCH /users/:id - Atualiza dados do usuário.

* DELETE /users/:id - Remove um usuário.

## 🚀 Empreendedores
* POST /entrepreneurs - Cria perfil de empreendedor.

* GET /entrepreneurs - Lista todos os empreendedores.

* GET /entrepreneurs/:id - Detalha perfil de empreendedor.

* PATCH /entrepreneurs/:id - Atualiza perfil.

## 💰 Investidores
* POST /investors - Cria perfil de investidor.

* GET /investors - Lista todos os investidores.

* GET /investors/:id - Detalha perfil de investidor.

* PATCH /investors/:id - Atualiza tese/perfil.

## 🤝 Parceiros
* POST /partners - Cria perfil de parceiro.

* GET /partners - Lista todos os parceiros.

* GET /partners/:id - Detalha parceiro.

* PATCH /partners/:id - Atualiza perfil.

* GET /partners/:id/benefits - Lista benefícios de um parceiro.

* POST /partners/:id/benefits - Adiciona novo benefício.

## 🎯 Matchmaking
* GET /matches - Lista todos os matches.

* POST /matches/generate - Cria um novo match.

* GET /matches/:id - Detalha um match específico.

## 🔗 Conexões
* POST /connections - Solicita conexão.

* PATCH /connections/:id/accept - Aceita conexão.

* PATCH /connections/:id/reject - Rejeita conexão.

## 📊 Governança (Reports)
* GET /reports - Lista todos os relatórios.

* GET /reports/:id - Detalha relatório.

* POST /reports - Cria novo relatório mensal.

* PATCH /reports/:id - Atualiza relatório.