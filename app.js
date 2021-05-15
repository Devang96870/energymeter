const mqtt = require("mqtt");

// Hvac_1
const client = mqtt.connect("mqtt://thingsboard.cloud", {
  username: "XySa0zXvSjGdonKaoxaL",
});

let randomIntFromInterval = (min, max) => {
  let float_value = Math.random();
  return Math.floor(Math.random() * (max - min + 1) + min) + float_value;
};

let MeterData = {
  ACLN: randomIntFromInterval(3, 5),
  AVLN: randomIntFromInterval(239, 245),
  C1: randomIntFromInterval(3, 5),
  C2: randomIntFromInterval(3, 5),
  C3: randomIntFromInterval(3, 5),
  FR: randomIntFromInterval(49, 51),
  kW1: Math.random(),
  kW2: Math.random(),
  kW3: Math.random(),
  Meter_Identity: "Hvac Device One",
  Meter_lat: 23.0267,
  Meter_long: 72.5093,
  PF: Math.random(),
  THDC1: randomIntFromInterval(25, 35),
  THDC3: randomIntFromInterval(25, 35),
  THDC2: randomIntFromInterval(25, 35),
  THDV12: randomIntFromInterval(1, 3),
  THDV2: randomIntFromInterval(1, 3),
  THDV23: randomIntFromInterval(1, 3),
  THDV3: randomIntFromInterval(1, 3),
  THDV31: randomIntFromInterval(1, 3),
  V1: randomIntFromInterval(240, 250),
  timestamp: Date.now().toString(),
  V12: randomIntFromInterval(240, 250) * 2,
  V2: randomIntFromInterval(240, 250),
  V23: randomIntFromInterval(240, 250) * 2,
  V3: randomIntFromInterval(240, 250),
  V31: randomIntFromInterval(240, 250) * 2,
};

let Hvac_Device_One = function () {
  client.on("connect", function () {
    console.log("Connected");
    let data = 1234;
    setInterval(() => {
      let increment = Math.random();
      data = data + increment;
      const Energy = `{"Energy":${data}}`;
      client.publish("v1/devices/me/telemetry", Energy);
      client.publish("v1/devices/me/telemetry", JSON.stringify(MeterData));
      console.log(Energy, MeterData);
    }, 5000);
  });
};

// Hvac_2
const client2 = mqtt.connect("mqtt://thingsboard.cloud", {
  username: "MyLGHXvvkJ399gC4hsCd",
});

let Hvac_Device_two = function () {
  client2.on("connect", function () {
    console.log("Connected");
    let data = 1234;
    setInterval(() => {
      let increment = Math.random();
      data = data + increment;
      const Energy = `{"Energy":${data}}`;
      client2.publish("v1/devices/me/telemetry", Energy);
      client2.publish("v1/devices/me/telemetry", JSON.stringify(MeterData));
      console.log(Energy, MeterData);
    }, 5000);
  });
};

// Hvac 3

const client3 = mqtt.connect("mqtt://thingsboard.cloud", {
  username: "CUOWKSwN4scSyws14Fa8",
});

let Hvac_Device_three = function () {
  client3.on("connect", function () {
    console.log("Connected");
    let data = 1234;
    setInterval(() => {
      let increment = Math.random();
      data = data + increment;
      const Energy = `{"Energy":${data}}`;
      client3.publish("v1/devices/me/telemetry", Energy);
      client3.publish("v1/devices/me/telemetry", JSON.stringify(MeterData));
      console.log(Energy, MeterData);
    }, 5000);
  });
};

// Hvac 4

const client4 = mqtt.connect("mqtt://thingsboard.cloud", {
  username: "VqtjF2piTb6bxHmpAUQu",
});

let Hvac_Device_four = function () {
  client4.on("connect", function () {
    console.log("Connected");
    let data = 1234;
    setInterval(() => {
      let increment = Math.random();
      data = data + increment;
      const Energy = `{"Energy":${data}}`;
      client4.publish("v1/devices/me/telemetry", Energy);
      client4.publish("v1/devices/me/telemetry", JSON.stringify(MeterData));
      console.log(Energy, MeterData);
    }, 5000);
  });
};

//HVAC 5

const client5 = mqtt.connect("mqtt://thingsboard.cloud", {
  username: "CwASkZ7WBbpMBIToLLY5",
});

let Hvac_Device_five = function () {
  client4.on("connect", function () {
    console.log("Connected");
    let data = 1234;
    setInterval(() => {
      let increment = Math.random();
      data = data + increment;
      const Energy = `{"Energy":${data}}`;
      client5.publish("v1/devices/me/telemetry", Energy);
      client5.publish("v1/devices/me/telemetry", JSON.stringify(MeterData));
      console.log(Energy, MeterData);
    }, 5000);
  });
};

Hvac_Device_One();
Hvac_Device_two();
Hvac_Device_three();
Hvac_Device_four();
Hvac_Device_five();
