let piedra = 0
let papel = 0
let tijera = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (true) {
        	
        }
    } else if (receivedNumber == 2) {
        if (true) {
        	
        }
    } else if (receivedNumber == 3) {
        if (true) {
        	
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
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
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
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
        radio.sendNumber(2)
    }
    if (input.buttonIsPressed(Button.AB)) {
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
        radio.sendNumber(3)
    }
})
