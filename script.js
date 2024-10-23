let question = '2x + y = 5, x + 3y = 2, find x and y'
let option = '3 and 5'
let option1 = '5 and 1'
let option3 = '4 and 3'
let option4 = '3 and 2'

let data = [
    question = question,
    option = option,
    option1 = option1,
    option3 = option3,
    option4 = option4
]

console.log(data)

let grid = document.getElementById('grid')
let div = document.createElement('div')
div.innerHTML = `
     <div class="solve">
                        <h1>${question}</h1>
                    </div>
                    <div class="answer">
                        <ul>
                            <li>A. ${option}</li>
                            <li>B.  ${option1}</li>
                            <li>C.  ${option3}</li>
                            <li>D.  ${option4}</li>
                        </ul>
                    </div>
`
grid.append(div)

let score = 0
let first = document.getElementById('a')
let sec = document.getElementById('b')
let third = document.getElementById('c')
let four = document.getElementById('d')
let first1 = document.getElementById('a1')
let sec1 = document.getElementById('b1')
let third1 = document.getElementById('c1')
let four1 = document.getElementById('d1')
let first2 = document.getElementById('a2')
let sec2 = document.getElementById('b2')
let third2 = document.getElementById('c2')
let four2 = document.getElementById('d2')
let first3 = document.getElementById('a3')
let sec3 = document.getElementById('b3')
let third3 = document.getElementById('c3')
let four3 = document.getElementById('d3')
let first4 = document.getElementById('a4')
let sec4 = document.getElementById('b4')
let third4 = document.getElementById('c4')
let four4 = document.getElementById('d4')
first.onclick = function () {
    score += 0
    console.log(score)
    first.style.backgroundColor= 'grey'
}
sec.onclick = function () {
    score +=1
    console.log(score)
      sec.style.backgroundColor= 'grey'
}
third.onclick = function () {
    score += 0
    console.log(score)
      third.style.backgroundColor= 'grey'
}
four.onclick = function () {
    score += 0
    console.log(score)
      four.style.backgroundColor= 'grey'
}


first1.onclick = function () {
    console.log(score)
    first1.style.backgroundColor='grey'
}
sec1.onclick = function () {
  
    console.log(score)
     sec1.style.backgroundColor='grey'
}
third1.onclick = function () {
    console.log(score)
    score += 1
     third1.style.backgroundColor='grey'
}
four1.onclick = function () {
    console.log(score)
     four1.style.backgroundColor='grey'
}




first2.onclick = function () {
    score += 1
    console.log(score)
    first2.style.backgroundColor='grey'
}
sec2.onclick = function () {
    console.log(score)
     sec2.style.backgroundColor='grey'
}
third2.onclick = function () {
    console.log(score)
    
     third2.style.backgroundColor='grey'
}
four2.onclick = function () {
    console.log(score)
     four2.style.backgroundColor='grey'
}



first3.onclick = function () {
    console.log(score)
    first3.style.backgroundColor='grey'
}
sec3.onclick = function () {
    console.log(score)
     sec3.style.backgroundColor='grey'
}
third3.onclick = function () {
    console.log(score)
     third3.style.backgroundColor='grey'
}
four3.onclick = function () {
    console.log(score)
     four3.style.backgroundColor='grey'
     score += 1
}




first4.onclick = function () {
    score += 1
    console.log(score)
    first4.style.backgroundColor='grey'
}
sec4.onclick = function () {
    console.log(score)
     sec4.style.backgroundColor='grey'
}
third4.onclick = function () {
    console.log(score)
     third4.style.backgroundColor='grey'
}
four4.onclick = function () {
    console.log(score)
     four4.style.backgroundColor='grey'
}


let bet = document.getElementById('bet')
function next() {
    let firstQuestion = document.getElementById('first question')
    let secondQuestion = document.getElementById('second question')
    firstQuestion.style.display = 'none'
    bet.style.display="block"
    secondQuestion.style.display = 'block'
}
let bet1 = document.getElementById('bet1')
function next1() {
    bet1.style.display="block"
    let thirdQuestion = document.getElementById('third question')
    let secondQuestion = document.getElementById('second question')
    thirdQuestion.style.display = 'block'
    secondQuestion.style.display = 'none'
}
let bet2 = document.getElementById('bet2')
function next2() {
    bet2.style.display="block"
    let thirdQuestion = document.getElementById('third question')
    let fourthQuestion = document.getElementById('fourth question')
    thirdQuestion.style.display = 'none'
    fourthQuestion.style.display = 'block'
}

let bet3 = document.getElementById('bet3')
function next3() {
    bet3.style.display="block"
    let fourthQuestion = document.getElementById('fourth question')
    let fifthQuestion = document.getElementById('fifth question')
    fourthQuestion.style.display = 'none'
    fifthQuestion.style.display = 'block'
}
let img = document.getElementById('img')
let next4 = document.getElementById('next4')

next4.onclick = function(){
    let personName = document.getElementById('person_name')
    let username = localStorage.getItem('user')
    console.log(username)
    if(score === 5){
        modal.style.display="block"
        front.style.display="block"
        img.src="gold.jpg"
        personName.innerHTML = username + ' Your Scores is ' + score + ' of 5'
    }else if(score == 4){
        modal.style.display="block"
        front.style.display="block"
        img.src="gold.jpg"
         personName.innerHTML = username + ' Your Scores is ' + score + ' of 5'
    }else if(score == 3){
        modal.style.display="block"
        front.style.display="block"
        img.src="silver.jpg"
         personName.innerHTML = username + ' Your Scores is ' + score + ' of 5'
    }
    else if(score == 2){
        modal.style.display="block"
        front.style.display="block"
        img.src="bronze.jpg"
         personName.innerHTML = username + ' Your Scores is ' + score + ' of 5'
    }
    else{
        modal.style.display="block"
        front.style.display="block"
        img.src="bronze.jpg"
         personName.innerHTML = username + ' Your Scores is ' + score + ' of 5'
    }
}

let front = document.getElementById('front')
let modal = document.getElementById('modal')

let ok = document.getElementById('ok')
ok.onclick = function(){
    modal.style.display="none"
    front.style.display="none"
    window.location="index.html"
}
// body.onclick=function(){
//     front.style.display="none"
//     modal.style.display="none"
// }
let user = localStorage.getItem('user')
let name = document.getElementById('name').innerHTML=user


let date = new Date
let today = date.getDay()
let num = parseInt(today)
console.log(num)



let btn = document.getElementById('btn')
btn.onclick = function(e){
    e.preventDefault()
    let game = ['rock', 'paper', 'scissors']
    let computerChoice = Math.floor(Math.random() * game.length)
    let game1 = game[computerChoice]
    document.getElementById('computer').innerHTML = `Computer: ${game1}`
    let user = document.getElementById('user').value
    let data = {
        user: user
    }
    document.getElementById('you').innerHTML = `You: ${user}`
    location.reload()
console.log(`${game1}`)
}
