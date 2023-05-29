radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (Mi_jugada == 1) {
            basic.showString("empate")
        } else if (Mi_jugada == 2) {
            basic.showString("ganas")
        } else if (Mi_jugada == 3) {
            basic.showString("pierdes")
        }
    } else if (receivedNumber == 2) {
        if (Mi_jugada == 1) {
            basic.showString("pierdes")
        } else if (Mi_jugada == 2) {
            basic.showString("empate")
        } else if (Mi_jugada == 3) {
            basic.showString("ganas")
        }
    } else if (receivedNumber == 3) {
        if (Mi_jugada == 1) {
            basic.showString("ganas")
        } else if (Mi_jugada == 2) {
            basic.showString("pierdes")
        } else if (Mi_jugada == 3) {
            basic.showString("empate")
        }
    }
    basic.pause(2000)
    basic.clearScreen()
    Mi_jugada = 0
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(500)
    piedra = 1
    Mi_jugada = 1
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(500)
    tijera = 3
    Mi_jugada = 3
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    papel = 2
    Mi_jugada = 2
    radio.sendNumber(2)
})
let papel = 0
let tijera = 0
let piedra = 0
let Mi_jugada = 0
radio.setGroup(220)
