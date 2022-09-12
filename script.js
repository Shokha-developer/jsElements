let container = document.querySelector(".container")
let div = document.createElement("div")
let top1 = document.createElement("div")
let main = document.createElement("div")
let btns = document.createElement("div")
let round = document.createElement("div")
let span_1 = document.createElement("span")
let span_2 = document.createElement("span")
let img = document.createElement("img")
let span1 = document.createElement("span")
let span2 = document.createElement("span")
let span3 = document.createElement("span")
let span4 = document.createElement("span")
let btnLeft = document.createElement("button")
let btnRight = document.createElement("button")
let img1 = document.createElement("img")




div.classList.add("div")
img.classList.add("img")
main.classList.add("main")
span1.classList.add("span1")
span2.classList.add("span2")
span3.classList.add("span3")
span4.classList.add("span4")
btns.classList.add("btns")
btnLeft.classList.add("btnLeft")
btnRight.classList.add("btnRight")
img1.classList.add("img1")
top1.classList.add("top1")
round.classList.add("round")
span_1.classList.add("span_1")




span1.innerHTML = "Школьный набор"
span2.innerHTML = "666 000 сум"
span3.innerHTML = "от 134 000 сум/месяц"
span4.innerHTML = "школьный набор для девочек 5-6 классов"
btnLeft.innerHTML = "Купить"
span_1.innerHTML = "0 | 0 | 5"
span_2.innerHTML = "рассрочка"



img.src = "./assets/images/Y9NHN3w0NLvk2VV9KkZ6HdHfA0OoFDSNbfkuUEvMWrEn5iTLo9hTH9Edox4K_.jfif"
img1.src = "./assets/images/align-left.svg"

container.append(div)
div.append(top1, main, btns)
top1.append(img,round)
round.append(span_1, span_2)
main.append(span1, span2, span3, span4)
btns.append(btnLeft, btnRight)
btnRight.append(img1)

