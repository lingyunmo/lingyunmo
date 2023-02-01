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
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

---
<a href=#><img src="contributions.svg"></a>
<div align="center">
<img src=https://github-readme-stats.vercel.app/api?username=lingyunmo&show_icons=true&theme=radical>
</div>
<div align="center">
<img src=https://github-readme-stats.vercel.app/api/top-langs/?username=lingyunmo&layout=compact&theme=radical>
</div>

##
:pushpin:Now working on

![DataStructure](https://img.shields.io/badge/DataStructure-C%2FC%2B%2B-brightgreen?style=plastic)
![JavaWeb](https://img.shields.io/badge/JavaWeb-Java/HTML/JavaScript-orange?style=plastic)
![Database](https://img.shields.io/badge/Database-MySQL-blue?style=plastic)
![Yunzai-Bot](https://img.shields.io/badge/Yunzai--Bot-Node.js-red?style=plastic)
![YuanShen](https://img.shields.io/badge/Genshin%20Impact-202797524-blueviolet?style=plastic)

:penguin:Now in use

![Java](https://img.shields.io/badge/java-green?style=plastic)
![C](https://img.shields.io/badge/C-green?style=plastic&logo=c&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-blueviolet?style=plastic&logo=mysql&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-red?style=plastic&logo=github)
![MacOS](https://img.shields.io/badge/MacOS-blue?style=plastic&logo=apple)
![Win](https://img.shields.io/badge/Windows-blue?style=plastic&logo=windows)
![Git](https://img.shields.io/badge/Git-yellowgreen?style=plastic&logo=git&logoColor=white)

:rocket:Devote to

![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=lingyunmo&repo=dataStructureLearning)

![](https://raw.githubusercontent.com/lingyunmo/lingyunmo/main/assets/github-contribution-grid-snake.svg)

\
`
