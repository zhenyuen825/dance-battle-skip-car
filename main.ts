basic.showIcon(IconNames.Happy)
SuperBit.Servo2(SuperBit.enServo.S1, 240)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.LoopingInBackground)
basic.forever(function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 240)
    basic.pause(500)
    SuperBit.Servo2(SuperBit.enServo.S1, 120)
    basic.pause(500)
})
basic.forever(function () {
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().show()
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(500)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(500)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(1000)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
    SuperBit.RGB_Program().show()
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(200)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
    SuperBit.RGB_Program().show()
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(200)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.White))
    SuperBit.RGB_Program().show()
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    basic.pause(500)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().show()
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(500)
})
