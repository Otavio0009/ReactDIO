# ⚛️ Trilha de Estudos ReactJS

Este repositório é dedicado ao estudo prático da biblioteca **React**, cobrindo desde a configuração manual de um ambiente de desenvolvimento do zero até a utilização de ferramentas modernas de build como o Vite.

---

## 📌 Projetos no Repositório

### 1. ⚡ `dio-react` (Projeto com Vite)
Aplicação React criada utilizando o **Vite**, focando na rápida inicialização, criação de componentes reutilizáveis e estilização modular.

- **Destaques:**
  - Componentização modular (`src/components`).
  - Organização de ativos estáticos e ícones SVG (`public/` e `src/assets`).
  - Configuração de linters e otimização de build com `vite.config.js`.

### 2. 🛠️ `ProjetoReactDoZero` (Configuração Manual)
Projeto desenvolvido para entender como o React funciona por baixo dos panos, realizando a **configuração manual do ambiente** sem utilizar ferramentas como Create React App ou Vite.

- **Destaques:**
  - **Babel (`.babelrc`):** Transpilação de código JavaScript moderno e sintaxe JSX para JavaScript compatível com os navegadores.
  - **Webpack (`webpack.config.js`):** Bundler responsável por empacotar todos os módulos, scripts e ativos da aplicação.
  - Estruturação base de arquivos com entrada via `src/index.js` e `public/index.html`.

---

## 🛠️ Tecnologias & Ferramentas

- **ReactJS:** Biblioteca para construção de interfaces de usuário.
- **JavaScript (ES6+) / JSX:** Sintaxe e lógica da aplicação.
- **Vite:** Build tool ultra-rápida para desenvolvimento web moderno.
- **Webpack & Babel:** Bundling e transpilação de código na configuração manual.
- **HTML5 & CSS3:** Estrutura e estilização das páginas.

---

## 📂 Estrutura do Repositório

```text
ReactDio/
├── dio-react/                  # Projeto React criado com Vite
│   ├── public/                 # Recursos públicos (favicon.svg, icons.svg)
│   ├── src/
│   │   ├── assets/             # Imagens e arquivos estáticos
│   │   ├── components/         # Componentes React reutilizáveis
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx            # Ponto de entrada do Vite
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── ProjetoReactDoZero/         # Projeto React configurado manualmente
    ├── public/
    │   └── index.html          # Template HTML principal
    ├── src/
    │   ├── App.jsx             # Componente raiz
    │   └── index.js            # Ponto de entrada da aplicação
    ├── .babelrc                # Configuração do compilador Babel
    ├── package.json
    └── webpack.config.js       # Configuração do empacotador Webpack
