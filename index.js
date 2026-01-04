const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    // 这里的进度条可以保持原样，或者你可以改成更像是MC经验条的绿色（GitHub只支持有限字符，所以保持方块最稳妥）
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '░'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `[${progressBar}]`
}

const readme = `\
### ⛏️ Hi there, I'm Lingyunmo!

<div align="center">
  <img src="https://img.shields.io/badge/Monash_University-Master_of_AI-006DAE?style=for-the-badge&logo=monashuniversity&logoColor=white" alt="Monash University">
  <img src="https://img.shields.io/badge/Minecraft-Java_Edition-2d2d2d?style=for-the-badge&logo=minecraft&logoColor=25D366" alt="Minecraft">
  <br/>
  <h3> 🔮 Bridging Neural Networks & Redstone Circuits</h3>
</div>

---

> *"I train models by day, and craft worlds by night."*

👋 Welcome to my base! I am a **Master of AI student at Monash University** with a heart made of voxels.
My coding journey wanders between **training LLMs** and **optimizing Minecraft server ticks**. I don't just write code; I craft automated systems—whether it's a CI/CD pipeline or a complex command block sequence.

- 🔭 **Current Quest**: Exploring the depths of **Large Language Models (LLMs)** & NLP.
- ⚙️ **Redstone Engineering**: Automating everything with **GitHub Actions** (My CI/CD pipelines are as reliable as a comparators clock).
- 🍎 **Crafting Table**: Learning MLOps & Distributed Training strategies.

---

### 🟢 Player Status (Level ${thisYear})
**XP Bar**: ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
<br/>
*Server Last Updated: ${new Date().toUTCString()}*

---

### 🎒 Inventory & Skills

#### 🔮 **Enchanting Table (AI & Research)**
<div style="display: flex; flex-wrap: wrap; gap: 4px;">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white" />
</div>

#### ⚙️ **Redstone Mechanics (DevOps & Engineering)**
<div style="display: flex; flex-wrap: wrap; gap: 4px;">
  <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" />
  <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
</div>

---

### 🗺️ World Map (Stats)

<div align="center">
  <img src="https://github-readme-stats-chi-smoky.vercel.app/api?username=lingyunmo&show_icons=true&theme=tokyonight&hide_border=true" height="150" alt="stats graph" />
  
  <img src="https://github-readme-stats-chi-smoky.vercel.app/api/top-langs/?username=lingyunmo&layout=compact&theme=tokyonight&langs_count=6&hide_border=true" height="150" alt="top languages" />
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
