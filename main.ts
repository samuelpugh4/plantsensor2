input.onButtonPressed(Button.A, function () {
    basic.showString("" + (gatorEnvironment.getMeasurement(measurementType.eCO2)))
    if (gatorEnvironment.getMeasurement(measurementType.eCO2) >= 50) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (gatorSoil.moisture(AnalogPin.P0, GatorSoilType.Moisture, DigitalPin.P0) > 50) {
        basic.showString("Soil Moisture OK")
    } else {
        basic.showString("Soil Moisture LOW")
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (gatorEnvironment.getMeasurement(measurementType.degreesF)))
    if (gatorEnvironment.getMeasurement(measurementType.degreesF) < 60) {
        basic.showString("TOO COLD")
        basic.showIcon(IconNames.Sad)
    } else if (gatorEnvironment.getMeasurement(measurementType.degreesF) > 90) {
        basic.showString("TOO HOT")
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
