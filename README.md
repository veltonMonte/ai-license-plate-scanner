# 🚗 AI License Plate Scanner

AI License Plate Scanner é uma aplicação web moderna que utiliza visão computacional para detecção automática de placas de veículos a partir do upload de imagens.

A aplicação transforma um processo complexo de reconhecimento de placas em um **dashboard visual e intuitivo**, exibindo os resultados da análise, níveis de confiança das detecções e o histórico de leituras realizadas.

---

# 🎯 O Desafio

Este projeto foi desenvolvido como parte de um **desafio técnico**, com foco em demonstrar boas práticas de desenvolvimento frontend.

Os principais objetivos foram:

* **Arquitetura clara** com separação de responsabilidades
* **Feedback visual ao usuário** durante o processamento da imagem
* **Visualização de dados** através de gráficos de confiança
* **Experiência de usuário fluida** com animações e feedback de estado

---

# 🚀 Funcionalidades

## 📤 Upload de imagem

Permite enviar imagens contendo veículos para análise.

* Suporte a **drag and drop**
* Seleção manual de arquivo
* **Preview da imagem** antes do envio

---

## ⚙️ Pipeline de processamento visual

Durante o processamento da imagem, o sistema exibe um pipeline simulando as etapas de um sistema de visão computacional:

1. Upload recebido
2. Pré-processamento da imagem
3. Detecção de placa
4. OCR aplicado
5. Resultado retornado

Isso melhora a experiência do usuário ao mostrar o progresso da análise.

---

## 📊 Dashboard de resultados

Após o processamento da imagem, o sistema apresenta:

### Destaque da placa detectada

Exibição da placa com **maior nível de confiança**.

---

### Níveis de confiança

Cada possível leitura retornada pela API é exibida com uma **barra de confiança visual**.

---

### Gráfico de confiança

Um gráfico apresenta a evolução da confiança das leituras realizadas utilizando **Recharts**.

---

### Histórico de leituras

O sistema mantém um histórico das análises realizadas, exibindo:

* Placa detectada
* Nível de confiança
* Ordem das leituras

A leitura mais recente aparece no topo da lista.

---

# 🛠️ Tecnologias utilizadas

| Tecnologia           | Finalidade                                             |
| -------------------- | ------------------------------------------------------ |
| React + Vite         | Base da aplicação e ambiente de desenvolvimento rápido |
| TypeScript           | Tipagem estática e maior segurança no código           |
| Framer Motion        | Animações e transições suaves na interface             |
| Recharts             | Visualização de dados                                  |
| CSS (Grid & Flexbox) | Layout responsivo e estilização do dashboard           |

---

# 🏗️ Estrutura do projeto

A estrutura do projeto foi organizada para facilitar manutenção e escalabilidade.

```
src
 ├ components
 │  ├ ImageUpload.tsx
 │  ├ ResultPanel.tsx
 │  ├ PipelineStatus.tsx
 │  ├ HistoryTable.tsx
 │  └ ConfidenceChart.tsx
 │
 ├ services
 │  └ api.ts
 │
 ├ App.tsx
 ├ main.tsx
 └ index.css
```

---

# 🔌 Integração com API

A aplicação consome um endpoint responsável pelo reconhecimento de placas.

### Endpoint

```
POST /api/recognize-plate
```

### Exemplo de resposta

```json
{
  "status": "success",
  "dados": [
    {
      "placa": "ABC1D23",
      "confianca": 94.7
    }
  ]
}
```

---

# ⚙️ Instalação e execução

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/ai-license-plate-scanner.git
```

Entre na pasta do projeto:

```bash
cd ai-license-plate-scanner
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:5173
```

---

# 🧠 Decisões de projeto

**Framer Motion**

Utilizado para criar animações suaves na renderização dos cards do dashboard, melhorando a percepção de fluidez da interface.

---

**Componentização**

Os componentes foram organizados de forma modular para manter a separação de responsabilidades e facilitar manutenção futura.

---

**Visualização de dados**

O uso de gráficos permite transformar dados brutos retornados pela API em informações mais claras para o usuário.

---

# ✨ Considerações

Este projeto demonstra a construção de uma interface moderna para consumo de serviços de visão computacional, utilizando boas práticas de desenvolvimento frontend, organização de código e foco na experiência do usuário.
