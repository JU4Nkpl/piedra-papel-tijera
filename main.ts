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
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    Mi_jugada = 1
    radio.sendNumber(1)
    basic.pause(1000)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Mi_jugada = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # . # .
        # . . . #
        `)
    Mi_jugada = 3
    radio.sendNumber(3)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    Mi_jugada = 2
    radio.sendNumber(2)
    basic.pause(1000)
})
let Mi_jugada = 0
radio.setGroup(220)
