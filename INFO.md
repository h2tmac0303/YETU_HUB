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

## 1. Autenticação (/auth)
POST /register

Request:
 { "name": "string", "email": "string", "password": "string", "role": "ENTREPRENEUR | INVESTOR | PARTNER" }

Response: { "id": "uuid", "email": "string", "role": "string" }

2. Empreendedor (/entrepreneurs)
POST /

Request: { "companyName": "string", "sector": "string", "description": "string", "stage": "IDEA | MVP | TRACTION | SCALE", "monthlyRevenue": number, "capitalNeeded": number }

Response: EntrepreneurProfile (objeto completo com id e isVerified)

3. Investidor (/investors)
POST /

Request: { "ticketMin": number, "ticketMax": number, "sectors": ["string"], "preferredStage": "IDEA | MVP | TRACTION | SCALE" }

Response: InvestorProfile (objeto completo com id)

4. Parceiros (/partners)
POST /

Request: { "companyName": "string", "serviceType": "string", "description": "string" }

Response: PartnerProfile (objeto completo com id)

POST /:id/benefits

Request: { "title": "string", "description": "string" }

Response: Benefit (objeto com id, partnerId, active)

5. Matchmaking (/matches)
POST /generate

Request: { "entrepreneurId": "uuid", "investorId": "uuid" }

Response: { "id": "uuid", "entrepreneurId": "uuid", "investorId": "uuid", "compatibility": number, "status": "PENDING" }

6. Conexões (/connections)
POST /

Request: { "receiverId": "uuid", "message": "string" }

Response: { "id": "uuid", "senderId": "uuid", "receiverId": "uuid", "status": "PENDING" }

PATCH /:id

Request: { "status": "ACCEPTED | REJECTED" }

Response: { "id": "uuid", "status": "string" }

7. Governança (/reports)
POST /

Request: { "entrepreneurId": "uuid", "revenue": number, "expenses": number, "highlights": "string", "challenges": "string" }

Response: MonthlyReport (objeto completo com id, createdAt)