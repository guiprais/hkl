# HKL - Sistema de Gerenciamento de Usuários

Este projeto utiliza React, TypeScript e Vite para criar uma aplicação de gerenciamento de usuários. A aplicação permite adicionar, editar e remover usuários, além de visualizar uma lista de todos os usuários cadastrados.

## Login

- Email: qualquer email (admin@admin.com)
- Senha: 123456

## Observações

- A env já está configurada para rodar localmente com o JSON Server, facilitando na hora de testar o projeto.

## Tecnologias Utilizadas

- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.1
- MUI (Material-UI) 6.1.1
- React Hook Form 7.53.0
- Zod 3.23.8 (para validação de formulários)
- Axios 1.7.7 (para requisições HTTP)
- React Query 5.56.2 (para gerenciamento de estados de servidor)
- Sonner (para notificações)

## Configuração do Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone git@github.com:guiprais/hkl.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o JSON Server para simular uma API backend:
   ```bash
   npm run server
   ```

4. Em outro terminal, inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Para visualizar a aplicação, abra `http://localhost:5173/` no seu navegador.

Para buildar o projeto:

1. Execute o comando de build:
   ```bash
   npm run build
   ```

2. Para visualizar a build localmente, execute:
   ```bash
   npm run preview
   ```

3. Inicie o JSON Server para simular uma API backend:
   ```bash
   npm run server
   ```

4. Para visualizar a aplicação, abra `http://localhost:4173/` no seu navegador.

## Estrutura do Projeto

- `src/`: Contém todo o código fonte do projeto.
  - `api/`: Contém as funções de chamadas API.
  - `assets/`: Contém recursos estáticos como imagens, fontes e arquivos de estilo.
  - `components/`: Contém os componentes reutilizáveis.
  - `constants/`: Contém constantes globais usadas em todo o projeto.
  - `hooks/`: Contém os hooks personalizados.
  - `lib/`: Contém bibliotecas personalizadas.
  - `pages/`: Contém as páginas da aplicação.
    - `auth/`: Páginas relacionadas à autenticação.
    - `app/`: Páginas internas da aplicação.
  - `providers/`: Contém os provedores de contexto ou serviços.
  - `routes/`: Contém as rotas da aplicação que definem a navegação.
  - `types/`: Contém as definições de tipos TypeScript usadas no projeto.
  - `utils/`: Contém funções utilitárias, como máscaras de formatação.

## Possíveis Melhorias

- Adicionar testes
- Adicionar E2E tests
- Implementar paginação
