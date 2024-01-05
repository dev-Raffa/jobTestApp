# Documentação da Aplicação - CoursesApp -  Sistema de Gestão de Cursos

## Introdução

Bem-vindo à documentação da aplicação de gestão de cursos desenvolvida utilizando React como tecnologia principal, Vite como bundler, e uma abordagem focada em CSS puro para estilização. A aplicação faz uso intensivo das bibliotecas e ferramentas do ecossistema React, incluindo react-router-dom, react-hook-form, react-icons e zod. Além disso, utiliza uma biblioteca de web-components chamada `kyra-components` desenvolvida com StencilJS para explorar a interoperabilidade entre tecnologias.

## Estrutura do Projeto

A estrutura do projeto segue um padrão organizacional para facilitar a manutenção e expansão da aplicação. Os principais diretórios são:

- `src`: Contém o código-fonte da aplicação.
  - `components`: Componentes React reutilizáveis.
  - `pages`: Páginas principais da aplicação.
  - `services`: Lógica de serviço para manipular dados e interações com a API,  e com as APIs de storage do navegador.
  - `styles`: Arquivos CSS para estilização global.
  - providers: arquivos de gestão dos estados globais da aplicação.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção de interfaces de usuário.
- **Vite**: Bundler utilizado para a configuração inicial do projeto.
- **CSS Puro**: Estilização baseada em CSS para explorar todas as habilidades de estilização, incluindo seletores, pseudo classes, elementos, nth-child, etc.
- **kyra-components**: Utilizado para criar web-components para explorar interoperabilidade.

### Bibliotecas e Ferramentas React

- **react-router-dom**: Para gerenciamento de rotas na aplicação.
- **react-hook-form**: Utilizado para simplificar a lógica de formulários.
- **react-icons**: Ícones SVG para uma experiência visual mais rica.
- **zod**: Utilizado para validação de dados.

### Requisições HTTP

- **Fetch API**: Utilizada para realizar requisições HTTP para a API do backend.

## Funcionalidades

### Atuais

1. **CRUD de Aulas, Professores e Cursos**: Implementação de operações básicas para gerenciamento de dados.
2. **Validação de Usuários (Alunos)**: Implementação de validação de usuários para garantir autenticidade.
3. **Validação de Usuário Administrativo**: Apenas usuários administrativos têm acesso ao painel administrativo.

### Próximas Funcionalidades

1. **Sistema de Aulas**: Implementação de um sistema abrangente para gerenciar aulas.
2. **Gestão de Acesso de Professores ao Painel Administrativo**: Permitir que professores acessem o painel administrativo para gerenciar suas aulas e cursos.

## Configuração do Ambiente de Desenvolvimento

1. Clone o repositório: `git clone <URL_DO_REPOSITORIO>`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`

#### A aplicação está disponível para teste no endereço https://job-test-app.vercel.app/. O painel administrativo está disponível no endereço https://job-test-app.vercel.app/admin

## Considerações Finais

Esta documentação fornece uma visão geral da arquitetura, tecnologias e funcionalidades da aplicação de gestão de cursos. Este documento deve ser atualizado conforme novas funcionalidades são implementadas ou alterações significativas são feitas no projeto. Para obter detalhes mais técnicos, consulte o código-fonte e os comentários relevantes. Boa sorte com o desenvolvimento contínuo da aplicação!
