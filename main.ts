let Mi_jugada = 0
let piedra = 0
let tijera = 0
let papel = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (Mi_jugada == 1) {
            basic.showString("empate")
            basic.clearScreen()
        } else if (Mi_jugada == 2) {
            basic.showString("ganas")
            basic.clearScreen()
        } else if (Mi_jugada == 3) {
            basic.showString("pierdes")
            basic.clearScreen()
        }
    } else if (receivedNumber == 2) {
        if (Mi_jugada == 1) {
            basic.showString("pierdes")
            basic.clearScreen()
        } else if (Mi_jugada == 2) {
            basic.showString("empate")
            basic.clearScreen()
        } else if (Mi_jugada == 3) {
            basic.showString("ganas")
            basic.clearScreen()
        }
    } else if (receivedNumber == 3) {
        if (Mi_jugada == 1) {
            basic.showString("ganas")
            basic.clearScreen()
        } else if (Mi_jugada == 2) {
            basic.showString("pierdes")
            basic.clearScreen()
        } else if (Mi_jugada == 3) {
            basic.showString("empate")
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(220)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    piedra = 1
    Mi_jugada = 1
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(220)
    basic.pause(500)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # . # .
        # . . . #
        `)
    tijera = 3
    Mi_jugada = 3
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(220)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    papel = 2
    Mi_jugada = 2
    radio.sendNumber(2)
})
