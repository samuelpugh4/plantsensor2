input.onButtonPressed(Button.A, function () {
    basic.showString("" + (gatorEnvironment.getMeasurement(measurementType.eCO2)))
    led.plotBarGraph(
    gatorEnvironment.getMeasurement(measurementType.eCO2),
    100
    )
})
input.onButtonPressed(Button.B, function () {
    let strip: neopixel.Strip = null
    basic.showString("" + (gatorEnvironment.getMeasurement(measurementType.degreesF)))
    if (gatorEnvironment.getMeasurement(measurementType.degreesF) < 60) {
        basic.showIcon(IconNames.Sad)
        for (let index = 0; index < 4; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            strip.clear()
        }
    } else if (gatorEnvironment.getMeasurement(measurementType.degreesF) > 90) {
        basic.showIcon(IconNames.Sad)
        for (let index = 0; index < 4; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            strip.clear()
        }
    } else {
        basic.showIcon(IconNames.Happy)
        for (let index = 0; index < 4; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.clear()
        }
    }
})
basic.forever(function () {
    if (gatorSoil.moisture(AnalogPin.P0, GatorSoilType.Moisture, DigitalPin.P0) > 50) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
