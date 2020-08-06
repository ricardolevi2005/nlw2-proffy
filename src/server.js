const proffys = [
  {
    name: "Ricardo Levi",
    avatar: "https://avatars0.githubusercontent.com/u/56764055?s=400&u=232b1d9405d873879c8dddc7094e99437d29922c&v=4",
    whatsapp: "2199854134",
    bio: "Entusiasta das melhores tecnologias de matemática avançada. Apaixonado por cálculos mirabolantes, tabuada informatizada e mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por um dos meus cálculos.",
    subject: "Matemática",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },
  {
    name: "Ricardo Campos",
    avatar: "https://avatars0.githubusercontent.com/u/56764055?s=400&u=232b1d9405d873879c8dddc7094e99437d29922c&v=4",
    whatsapp: "2199854134",
    bio: "Entusiasta das melhores tecnologias de matemática avançada. Apaixonado por cálculos mirabolantes, tabuada informatizada e mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por um dos meus cálculos.",
    subject: "Química",
    cost: "50",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

function getSubject(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query

  return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
   const data = req.query

   const isNotEmpty = Object.keys(data).length > 0
   if (isNotEmpty) {

     data.subject = getSubject(data.subject) 
     proffys.push(data)

     return res.redirect("/study")
   }
   

  return res.render("give-classes.html", {subjects, weekdays})
}


const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache:  true,
})

server
// configuração de 
.use(express.static("public"))

.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.listen(5500)
