/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program plays a Cookie Clicker game
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let nombre = 1
input.onButtonPressed(Button.A, function () {
    basic.showNumber(nombre)
    nombre = nombre + 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
    nombre = 1
})
