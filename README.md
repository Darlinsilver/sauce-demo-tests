# 🧪 Testes Manuais – Projeto Sauce Demo

Este documento contém os casos de teste manuais realizados no sistema **Sauce Demo**, simulando fluxos de compra com diferentes perfis de usuários. O objetivo principal é validar comportamentos esperados e identificar possíveis falhas de usabilidade, interface e funcionamento.

---

## 📦 Escopo dos Testes

- Validação funcional de fluxo de compra
- Verificação de elementos visuais e estruturais
- Testes com diferentes usuários:
  - `standard_user` – fluxo ideal
  - `problem_user` – comportamento inesperado

---

## ⚙️ Ambiente de Execução

- **URL do sistema:** [https://www.saucedemo.com/v1](https://www.saucedemo.com/v1)
- **Tipo de teste:** Manual
- **Ferramentas utilizadas:** Navegador, DevTools, Captura de tela, ScreenToGif, Lightshot


## ✅ Caso de Teste 1 – Compra bem-sucedida (usuário padrão)

| **ID**             | CT001 |
|--------------------|-------|
| **Título**         | Compra bem-sucedida com usuário standard_user |
| **Objetivo**       | Validar o fluxo completo de compra com o usuário padrão |
| **Pré-condições**  | Usuário padrão (`standard_user`) está cadastrado no sistema |
| **Ambiente de Teste** | [Inserir URL ou nome do sistema] |
| **Dados de Teste** | Login: `standard_user`<br>Senha: `[senha padrão]` |

### 🔍 Passos
1. Acessar o site com o usuário `standard_user`  
2. Navegar pelas opções de produtos  
3. Adicionar **3 produtos diferentes** ao carrinho  
4. Acessar o carrinho e revisar os itens  
5. Clicar em “Checkout”  
6. Preencher os campos obrigatórios:
   - First Name
   - Last Name
   - Zip/Postal Code  
7. Prosseguir com a finalização da compra  
8. Confirmar a compra

### 🎯 Resultado Esperado
> Mensagem de confirmação exibida: **“THANK YOU FOR YOUR ORDER”**

### 📌 Status
`Passou`

### 📷 Evidência
- **Print do erro:** ![Captura de tela](/cypress/evidencias/videos/evidencia_caso_de_teste1.mp4)

---

## ⚠️ Caso de Teste 2 – Compra com falhas (usuário `problem_user`)

### 🎯 Objetivo
Executar o fluxo completo de compra utilizando o usuário `problem_user`, observando possíveis comportamentos inesperados e falhas funcionais/visuais.

---

### 📋 Instruções

1. Acesse o site: [https://www.saucedemo.com](https://www.saucedemo.com)
2. Realize login com:
   - **Usuário:** `problem_user`
   - **Senha:** `secret_sauce`
3. Navegue pelo sistema e tente realizar o fluxo de compra:
   - Adição de produtos ao carrinho
   - Acesso ao carrinho
   - Início e finalização do checkout

---

### 🔍 Comportamentos a observar

- 🧱 **Elementos quebrados ou desalinhados**
- ❌ **Campos sem validação**
- 💬 **Mensagens confusas, mal formatadas ou ausentes**
- 🖼️ **Imagens trocadas, ausentes ou corrompidas**
- 🛑 **Erros de requisição no DevTools (console do navegador)**
- 🚧 **Bugs visuais, funcionais ou de navegação**

---

### 🧪 Resultado Esperado

> O sistema deve apresentar falhas visuais ou comportamentais associadas ao usuário `problem_user`, permitindo a identificação e registro de defeitos durante o fluxo de compra.

---

### 📌 Status
`Passou`

---

### 📷 Evidência
- **Print do erro:** ![Captura de tela](/cypress/evidencias/videos/evidencia_caso_de_teste2.mp4)

---

🔎 Identificação e Análise de Erros

## 🐞 Lista de bugs/encontrados

### 🔧 Bug #1 – [Imagens dos produtos não carregaram]
- **Descrição breve:** [Ao realizar o login e acessar a "All Itens", as imagens dos produtos não carregaram]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  
- **Comportamento esperado:** [Exibição das imagens dos produtos]
- **Comportamento observado:** [As imagens dos produtos não carregam]
- **Print do erro:** ![Captura de tela](/cypress/evidencias/imagens/Bug1.png)
- **Print do erro:** ![Captura de tela](/cypress/evidencias/imagens/Bug1.1.png)
---

### 🔧 Bug #2 – [Logotipo excendendo o limite do header]
- **Descrição breve:** [O logotipo da tela "All Itens" está excedendo o limite do header da página]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]

- **Comportamento esperado:** [O logotipo deveria estar dentro do header, obedecendo o limite definido]
- **Comportamento observado:** [O logotipo excede o limite do header]
- **Print do erro:** ![Captura de tela](/cypress/evidencias/imagens/Bug2.png)

---

### 🔧 Bug #3 – [Ordenação por nome (Z to A) não ordena]
- **Descrição breve:** [Ao definir a ordenação de itens da tela "All Itens" por nome (Z to A), a mesma não ordena os itens.]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Clicar na lista de ordenação]
  4. [Selecionar ordenação por nome (Z to A)]

- **Comportamento esperado:** [Ordenar os produtos por nome na ordem (Z to A)]
- **Comportamento observado:** [Os produtos não são ordenados por nome na ordem (Z to A)]
- **Print do erro:** ![Captura de tela](/cypress/evidencias/imagens/Bug3.png)

---

### 🔧 Bug #4 – [Ordenação por preço (low to high) não ordena]
- **Descrição breve:** [Ao definir a ornenação de itens da página "All Itens" por por preço (low to high), a mesma não ordena os itens.]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Clicar na lista de ordenação]
  4. [Selecionar ordenação por preço (low to high)]

- **Comportamento esperado:** [Ordenar os produtos por preço (low to high)]
- **Comportamento observado:** [Os produtos não são ordenados por por preço na ordem (low to high)]
- **Print do erro:** ![Captura de tela](/cypress/evidencias/imagens/Bug4.png)

---

### 🔧 Bug #5 – [Ordenação por preço (high to low) não ordena]
- **Descrição breve:** [Ao definir a ornenação de itens da tela "All Itens" por por preço (high to low), a mesma não ordena os itens.]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Clicar na lista de ordenação]
  4. [Selecionar ordenação por preço (high to low)]

- **Comportamento esperado:** [Ordenar os produtos por preço (high to low)]
- **Comportamento observado:** [Os produtos não são ordenados por por preço na ordem (high to low)]
- **Print do erro:** ![Captura de tela](/cypress/evidencias/imagens/Bug5.png)

---

### 🔧 Bug #6 – [Página about não existe]
- **Descrição breve:** [Ao acessar a página (About), é retornado 404 not found]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar o menu lateral]
  3. [Clicar na opção (About)]
 
- **Comportamento esperado:** [Ao clicar em (About), deve ser carregada a página About com as informações da empresa]
- **Comportamento observado:** [A página About não existe, é retornado 404 not found]
- **Print do erro:** ![Captura de tela](/cypress/evidencias/imagens/Bug6.png)
- **Print do erro:** ![Captura de tela](/cypress/evidencias/imagens/Bug6.1.png)

---

### 🔧 Bug #7 – [Itens não são adicionados no carrinho na tela "All Itens"]
- **Descrição breve:** [Ao clicar em (Add to cart), na tela "All Itens", alguns itens não são adicionados]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Adicionar o item no carrinho clicando em (Add to cart)]
 
- **Comportamento esperado:** [Ao clicar em (Add to cart), o item deve ser adicionado no carrinho]
- **Comportamento observado:** [Ao clicar em (Add to cart), o item não é adicionado no carrinho]
- **Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug7.gif)
---

### 🔧 Bug #8 – [Não é possivel remover itens na tela "All Itens"]
- **Descrição breve:** [Ao clicar em (Remove), na tela "All Itens", alguns itens não são removidos]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Remover o item do carinho clicando em (Remove)]
- **Comportamento esperado:** [Ao clicar em (Remove), o item deve ser removido do carrinho]
- **Comportamento observado:** [Ao clicar em (Remove), o item não é removido do carrinho]
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug8.gif)

---

### 🔧 Bug #9 – [Itens não são adicionados no carrinho na tela do item]
- **Descrição breve:** [Ao clicar em (Add to cart), na tela do item, alguns itens não são adicionados]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Acessar a tela do item específico]
  4. [Adicionar o item no carrinho clicando em (Add to cart)]
- **Comportamento esperado:** [Ao clicar em (Add to cart), o item deve ser adicionado no carrinho]
- **Comportamento observado:** [Ao clicar em (Add to cart), o item não é adicionado no carrinho]
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug9.gif)

---

### 🔧 Bug #10 – [Carrinho não exibe todos os produtos adicionados]
- **Descrição breve:** [Ao adicionar itens no carrinho a partir da tela do item, o carrinho não exibe todos os produtos que foram adicionados. Obs.: O contador de itens exibe a quantidade de itens que foram adicionados.]
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Acessar a tela do item específico]
  4. [Adicionar o item no carrinho clicando em (Add to cart)]
  5. [Acessar a tela do carrinho]
- **Comportamento esperado:** [O carrinho deve exibir todos os itens que foram adicionados nele]
- **Comportamento observado:** [Ao clicar em (Add to cart), o carrinho não exibe todos os itens que foram adicionados nele]
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug10.gif)

---

### 🔧 Bug #11 – [Campos de entrada de dados não validam a informação]
- **Descrição breve:** Na tela de (Checkout: Your Information) os campos (First Name, Last Name e Zip/Postal Code), não validam as informações inseridas, permitindo a entrada de caracteres especiais, espaços e números sem checagem e posteriormente, permitindo avançar para a tela de finalização de pedido.
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Adicionar o item no carrinho clicando em (Add to cart)]
  4. [Acessar a tela do carrinho]
  5. [Acessar a tela de (Checkout: Your Information) clicando em checkout]
  6. [Preencher os campos (First Name, Last Name e Zip/Postal Code)]
  7. [Clicar em continue]
- **Comportamento esperado:** [Os campos (First Name, Last Name e Zip/Postal Code) devem checar as informações inseridas neles, para confirmar se são dados válidos]
- **Comportamento observado:** [Os campos (First Name, Last Name e Zip/Postal Code) não checam as informações inseridas neles, permitindo a inserção de qualquer dado]
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug11.gif)

---

### 🔧 Bug #12 – [O campo (Last Name) sobreescreve o campo (First Name)]
- **Descrição breve:** Na tela de (Checkout: Your Information) ao inserir dados no campo (Last Name), o mesmo sobreescreve o campo (First Name), quer ele esteja vazio ou preenchido.
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Adicionar o item no carrinho clicando em (Add to cart)]
  4. [Acessar a tela do carrinho]
  5. [Acessar a tela de (Checkout: Your Information) clicando em checkout]
  6. [Inserir informação no campo (Last Name)]
- **Comportamento esperado:** O campo (Last Name) não pode sobreescreve o campo (First Name)
- **Comportamento observado:** O campo (Last Name) sobreescreve o campo (First Name)
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug12.gif)

---

### 🔧 Bug #13 – [É possível concluir a compra com dados inconsistentes]
- **Descrição breve:** Na tela de (Checkout: Overview) é possível concluir a compra com os dados inseridos sem nenhuma validação.
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Adicionar o item no carrinho clicando em (Add to cart)]
  4. [Acessar a tela do carrinho]
  5. [Acessar a tela de (Checkout: Your Information) clicando em checkout]
  6. [Preencher os campos (First Name, Last Name e Zip/Postal Code)]
  7. [Acessar a tela de (Checkout: Overview) clicando em Continue]
  8. [Finalizar a compra clicando em Finish]
- **Comportamento esperado:** A compra não pode ser concluída com informações inconsistentes
- **Comportamento observado:** É possível concluir a compra com informações inconsistentes
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug13.gif)

---

### 🔧 Bug #14 – [Ao concluir a compra, os itens continuam no carrinho]
- **Descrição breve:** Após concluir a compra, os itens continuam sendo exibidos no carrinho, assim como o contador de itens do carrinho continua exibindo a quantidade de itens antes da compra.
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Adicionar o item no carrinho clicando em (Add to cart)]
  4. [Acessar a tela do carrinho]
  5. [Acessar a tela de (Checkout: Your Information) clicando em checkout]
  6. [Preencher os campos (First Name, Last Name e Zip/Postal Code)]
  7. [Acessar a tela de (Checkout: Overview) clicando em Continue]
  8. [Finalizar a compra clicando em Finish]
  9. [Acessar a tela do carrinho]
- **Comportamento esperado:** Os itens devem ser baixados do carrinho após a compra, assim como o contador de itens do carrinho.
- **Comportamento observado:** Os itens continuam sendo exibidos no carrinho após a compra, assim como o contador de itens do carrinho
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug14.gif)

---

### 🔧 Bug #15 – [O botão (Back) só funciona em uma região específica]
- **Descrição breve:** Ao acessar a página de um item específico e clicar no botão (Back), apenas uma região especifica dele aceita o clique, a região próxima a margem direita.
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Acessar a tela do item específico]

- **Comportamento esperado:** O botão (Back) deve aceitar o clique em toda sua região de responsividade
- **Comportamento observado:** O botão (Back) só aceita o clique em uma região especifica dele, a região próxima a margem direita.
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug15.gif)

---

### 🔧 Bug #16 – [Logo (Swag Labs) sem formatação na página de itens]
- **Descrição breve:** A logo (Swag Labs) não possui formatação na página de itens, se diferindo da logo nas outras páginas
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Acessar a tela do item específico]

- **Comportamento esperado:** A logo (Swag Labs) deve posuir o mesmo padrão de formação em todas as páginas.
- **Comportamento observado:** A logo (Swag Labs) não possui formatação na página de itens
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug16.gif)

---

### 🔧 Bug #17 – [É possível concluir compra sem itens no carrinho]
- **Descrição breve:** Ao acessar a página de (Checkout: Overview) sem ter adicionado itens ao carrinho é possível concluir a compra.
- **Etapas para reproduzir:**
  1. [Realizar o login]
  2. [Acessar a tela "All Itens"]
  3. [Acessar a tela do carrinho]
  4. [Acessar a tela de (Checkout: Your Information) clicando em checkout]
  5. [Preencher os campos (First Name, Last Name e Zip/Postal Code)]
  6. [Acessar a tela de (Checkout: Overview) clicando em Continue]
  7. [Finalizar a compra clicando em Finish]

- **Comportamento esperado:** Não permitir o acesso a tela de (Checkout: Your Information) sem ter produtos adicionados no carrinho
- **Comportamento observado:** É possível avançar para as telas de (Checkout: Your Information), (Checkout: Overview) e finalizar a compra sem itens no carrinho
**Print do erro:** ![Captura de tela](/cypress/evidencias/videos/Bug17.gif)

---

## 🛒 Fluxo de compra automatizado – SauceDemo

Automação **end-to-end** do processo de compra no site [SauceDemo](https://www.saucedemo.com/) utilizando **Cypress + Cucumber + Gherkin**. Este projeto simula o comportamento de um usuário realizando login, adicionando produtos ao carrinho e finalizando a compra com sucesso.

---

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Framework de testes E2E
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) – Interpretação de arquivos `.feature` com Gherkin
- [Gherkin](https://cucumber.io/docs/gherkin/) – Linguagem de descrição de cenários BDD

---

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   └── features/
│       └── fluxo_compra.feature
├── support/
│   └── step_definitions/
│       └── fluxo_compra.js
├── fixtures/
├── support/
│   ├── commands.js
│   ├── e2e.js
cypress.config.js
package.json
```

---

## ⚙️ Instalação e Execução

### Clonar o projeto
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### Instalar dependências
```bash
npm install
```

### Executar os testes

#### Modo interativo (GUI):
```bash
npx cypress open
```

#### Modo headless (terminal):
```bash
npx cypress run
```

> Os cenários `.feature` estão localizados em `cypress/e2e/features/`

---

## 🧪 Cenário Automatizado

```gherkin
Feature: Compra de produtos no SauceDemo

  Scenario: Usuário finaliza compra com sucesso
    Given que estou na página de login
    When faço login como "standard_user" com senha "secret_sauce"
    And adiciono 3 produtos ao carrinho
    And finalizo o checkout com os dados "Lucas", "QA", "30140-000"
    Then devo ver a mensagem "THANK YOU FOR YOUR ORDER"
```

---

## 📸 Evidências

- ✅ Mensagem final validada: `Thank you for your order!`
- Logs detalhados de cada passo da execução
- Prints disponíveis no diretório `cypress/screenshots/`

---

## 🏷️ Badges

```md
![Cypress](https://img.shields.io/badge/tested%20with-Cypress-3E876F.svg)
![Gherkin](https://img.shields.io/badge/Gherkin-BDD-90b6f0)
```

---

## 🙌 Contribuições

Sugestões de novos cenários, melhorias de estrutura ou inclusão de novos fluxos são sempre bem-vindas! Basta abrir uma **issue** ou enviar um **pull request**.

---



