class Grill {
    startGas() {
        console.log("Start Gas");
    }
    stopGas() {
        console.log("Stop Gas");
    }
}
class Oven {
    setTemperature(degrees: number) {
        console.log("set Temperature", degrees);
    }
}

type CookingDevice<T> = T extends "grill" ? Grill : Oven

let device1: CookingDevice<"grill">
//   ^?
let device2: CookingDevice<"Oven">
//   ^?
device1 = new Grill();
device2 = new Oven();

// device2= new Grill();       // complain for type
// device1 = new Oven();       // complain for type

device1.startGas();
device1.stopGas();
device2.setTemperature(4);