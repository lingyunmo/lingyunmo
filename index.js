const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '░'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there, I'm Shen Lingzhi (Lingyunmo) 👋

<div align="center">
  <a href="https://www.monash.edu/">
    <img src="https://img.shields.io/badge/Monash_University-Master_of_AI-006DAE?style=for-the-badge&logo=monashuniversity&logoColor=white" alt="Monash University">
  </a>
  <br/>
  <h3>🚀 Bridging Software Engineering & Artificial Intelligence</h3>
</div>

---

> *"Code implies the desire to build things. AI implies the desire to make them smart."*

I am a **Master of AI student at Monash University**, evolving from a solid **Computer Science background**. 
Unlike typical researchers, I bring **industrial-grade engineering discipline (CI/CD, DevOps)** into AI research.

- 🔭 **Focus**: Large Language Models (LLMs), NLP, and Data Mining.
- ⚙️ **Engineering**: Expert in automating workflows with **GitHub Actions** (e.g., my automated Minecraft Mod CI/CD pipeline).
- 🌱 **Learning**: Advanced MLOps & Distributed Training strategies.

---

### 📊 Vital Statistics
⏳ **Year Progress**: ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
<br/>
⏰ **Last Auto-Update**: ${new Date().toUTCString()}

---

### 🛠️ The Arsenal

#### 🧠 **AI & Research (Current Focus)**
<div style="display: flex; flex-wrap: wrap; gap: 4px;">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" />
  <img src="https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white" />
</div>

#### 🏗️ **Engineering & Infrastructure (Core Strength)**
<div style="display: flex; flex-wrap: wrap; gap: 4px;">
  <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" />
  <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
</div>

---

### 📈 Contribution Graph

<div align="center">
  <img src="https://github-readme-stats-chi-smoky.vercel.app/api?username=lingyunmo&show_icons=true&theme=tokyonight" height="150" alt="stats graph" />
  
  <img src="https://github-readme-stats-chi-smoky.vercel.app/api/top-langs/?username=lingyunmo&layout=compact&theme=tokyonight&langs_count=6" height="150" alt="top languages" />
</div>

<br/>

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/lingyunmo/lingyunmo/output/github-contribution-grid-snake-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/lingyunmo/lingyunmo/output/github-contribution-grid-snake.svg">
    <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/lingyunmo/lingyunmo/output/github-contribution-grid-snake.svg">
  </picture>
</div>
`

console.log(readme)
