let b1 = document.getElementById('button1')
let b2 = document.getElementById('button2')
let b3 = document.getElementById('button3')
let b4 = document.getElementById('button4')
let b5 = document.getElementById('button5')
let b6 = document.getElementById('button6')
let homeScore = Number(document.getElementById('homeScore').textContent)
let guestScore = Number(document.getElementById('guestScore').textContent)
let homebb = document.getElementsByClassName('homebackboard')[0]
let guestbb = document.getElementsByClassName('guestbackboard')[0]

function onClickButton1() {
    homeScore += 1
    document.getElementById('homeScore').textContent = homeScore
    checkHighlight()
}

function onClickButton2() {
    homeScore += 2
    document.getElementById('homeScore').textContent = homeScore
    checkHighlight()
}

function onClickButton3() {
    homeScore += 3
    document.getElementById('homeScore').textContent = homeScore
    checkHighlight()
}

function onClickButton4() {
    guestScore += 1
    document.getElementById('guestScore').textContent = guestScore
    checkHighlight()
}

function onClickButton5() {
    guestScore += 2
    document.getElementById('guestScore').textContent = guestScore
    checkHighlight()
}

function onClickButton6() {
    guestScore += 3
    document.getElementById('guestScore').textContent = guestScore
    checkHighlight()
}

function onClickNewGame() {
    homeScore = 0
    guestScore = 0
    document.getElementById('homeScore').textContent = '0'
    document.getElementById('guestScore').textContent = '0'
    homebb.style.backgroundColor = 'black'
    guestbb.style.backgroundColor = 'black'
}

function checkHighlight() {
    if(homeScore > guestScore) {
        homebb.style.backgroundColor = 'green'
        guestbb.style.backgroundColor = 'black'
    } else if (guestScore > homeScore) {
        guestbb.style.backgroundColor = 'green'
        homebb.style.backgroundColor = 'black'
    } else {
        homebb.style.backgroundColor = 'black'
        guestbb.style.backgroundColor = 'black'
    }
}