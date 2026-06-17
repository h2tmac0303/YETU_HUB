# 🚀 YETO HUB

O **YETO HUB** é uma plataforma de "crescimento colaborativo" que atua como uma ponte de três vias entre Empreendedores, Investidores e Parceiros estratégicos. Nosso objetivo não é apenas listar empresas, mas criar "matches" inteligentes baseados em necessidades e capacidades reais.



---

## 🎯 A Proposta de Valor
* **Para o Empreendedor:** Acesso a capital, mentoria e ferramentas essenciais de gestão.
* **Para o Investidor:** Acesso a negócios validados e com suporte, reduzindo o risco do investimento (Due Diligence simplificada).
* **Para Parceiros/Patrocinadores:** Visibilidade de marca e acesso a um mercado B2B segmentado.

## 🏗️ Arquitetura do Projeto
O sistema foi construído com foco em escalabilidade e manutenção, utilizando uma arquitetura modular inspirada em DDD (Domain-Driven Design).



---

## 🛠️ Stack Tecnológico
* **Runtime:** Node.js (v22+)
* **Linguagem:** TypeScript
* **ORM:** Prisma (com `@prisma/adapter-pg`)
* **Validação:** Zod (Ambiente e DTOs)
* **Segurança:** JWT, Bcrypt
* **Banco de Dados:** PostgreSQL

---

## 🚀 Como Rodar o Projeto

### 1. Pré-requisitos
* Node.js v22+
* PostgreSQL
* `npm` ou `pnpm`

### 2. Instalação
```bash
# Clone o repositório
git clone <url-do-seu-repositorio>

# Instale as dependências
npm install

# Gere o cliente Prisma
npx prisma generate

3. Variáveis de AmbienteCrie um arquivo .env na raiz seguindo o modelo:Fragmento do códigoDATABASE_URL="postgresql://user:password@localhost:5432/yeto_hub"
JWT_SECRET="sua_chave_secreta_min_16_caracteres"
JWT_EXPIRES_IN="7d"
NODE_ENV="development"
PORT=3000
4. ExecuçãoBash# Rodar em modo de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Rodar a build
node dist/server.js

🛣️ Endpoints da API
Módulo | Método | Endpoint | Descrição | 
Auth | POST | /auth/register | Cria uma nova conta
        POST | /auth/login  | Autenticação e obtenção do JWT
Users | GET  | /users   | Lista todos os usuários
      | GET  | /users/:id | Detalha usuário por ID
      | PATCH| /users/:id | Atualiza dados do usuário
      | DELETE| /users/:id | Remove um usuário
EntrepreneurPOST/entrepreneursCria perfil de empreendedorGET/entrepreneursLista todos os empreendedoresPATCH/entrepreneurs/:idAtualiza perfilInvestorPOST/investorsCria perfil de investidorGET/investorsLista todos os investidoresPATCH/investors/:idAtualiza tese/perfilPartnerPOST/partnersCria perfil de parceiroGET/partners/:id/benefitsLista benefícios do parceiroPOST/partners/:id/benefitsCria um novo benefícioMatchPOST/matches/generateCria novo match entre perfisGET/matchesLista todos os matchesConnectionPOST/connectionsSolicita uma conexãoPATCH/connections/:idAtualiza status (Aceitar/Rejeitar)ReportsPOST/reportsCria relatório mensalGET/reports/:idDetalha relatório de performance🤝 Como ContribuirFaça um fork do projeto.Crie uma branch para sua funcionalidade: git checkout -b feat/nome-da-feature.Siga o padrão de Conventional Commits (ex: feat:, fix:, chore:).Submeta um pull request.Desenvolvido para transformar o ecossistema de pequenos negócios.