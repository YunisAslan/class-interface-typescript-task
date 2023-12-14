enum VehicleType {
  Car,
  MotorCycle,
}

enum EngineType {
  DOHC,
  SOHC,
  TURBO,
}

type Capacity = 30 | 40 | 50 | 70 | 100;

interface IVehicle<T> {
  brandName: string;
  modelName: string;
  year: number;
  fuelCapacity: Capacity;
  currentFuel: T;
  milage: number;
  fuelFor1KM: number;
  engine: EngineType;
  vehicleType: VehicleType;
  getInfo: () => void;
  drive: (km: number) => T;
}

class Car implements IVehicle<number> {
  brandName: string;

  constructor(
    brandName: string,
    private _modelName: string,
    private _year: number,
    private _fuelCapacity: Capacity,
    private _currentFuel: number,
    private _milage: number,
    private _fuelFor1KM: number,
    private _engine: EngineType,
    private _vehicleType: VehicleType
  ) {
    this.brandName = brandName;
  }

  // getters
  get modelName() {
    return this._modelName;
  }

  get year() {
    return this._year;
  }

  get fuelCapacity() {
    return this._fuelCapacity;
  }

  get currentFuel() {
    return this._currentFuel;
  }

  get fuelFor1KM() {
    return this._fuelFor1KM;
  }

  get engine() {
    return this._engine;
  }

  get milage() {
    return this._milage;
  }

  get vehicleType() {
    return this._vehicleType;
  }

  // methods
  getInfo(): void {
    console.log(
      `Brand name: ${this.brandName}, Model name: ${this._modelName}, Type: ${
        VehicleType[VehicleType.Car]
      }`
    );
  }

  drive(km: number): number {
    let requiredFuelAmount = km * this._fuelFor1KM;

    if (requiredFuelAmount > this._currentFuel) {
      console.log("Benzin yeterli deyil");
    } else {
      this._currentFuel -= requiredFuelAmount;
    }

    this._milage += km;

    return this._currentFuel;
  }
}

class Motorcycle implements IVehicle<number> {
  brandName: string;

  constructor(
    brandName: string,
    private _modelName: string,
    private _year: number,
    private _fuelCapacity: Capacity,
    private _currentFuel: number,
    private _milage: number,
    private _fuelFor1KM: number,
    private _engine: EngineType,
    private _vehicleType: VehicleType
  ) {
    this.brandName = brandName;
  }

  // getters
  get modelName() {
    return this._modelName;
  }

  get year() {
    return this._year;
  }

  get fuelCapacity() {
    return this._fuelCapacity;
  }

  get currentFuel() {
    return this._currentFuel;
  }

  get fuelFor1KM() {
    return this._fuelFor1KM;
  }

  get engine() {
    return this._engine;
  }

  get milage() {
    return this._milage;
  }

  get vehicleType() {
    return this._vehicleType;
  }

  // methods
  getInfo(): void {
    console.log(
      `Brand name: ${this.brandName}, Model name: ${this._modelName}, Type: ${
        VehicleType[VehicleType.MotorCycle]
      }`
    );
  }

  drive(km: number): number {
    let requiredFuelAmount = km * this._fuelFor1KM;

    if (requiredFuelAmount > this._currentFuel) {
      console.log("Benzin yeterli deyil");
    } else {
      this._currentFuel -= requiredFuelAmount;
    }

    this._milage += km;

    return this._currentFuel;
  }

  startEngine(): void {
    console.log(
      `${this.brandName} ${this._modelName}'s engine is now running..`
    );
  }
}

const audi = new Car(
  "Audi",
  "A8",
  2011,
  30,
  2000,
  1000,
  100,
  EngineType.DOHC,
  VehicleType.Car
);

audi.getInfo();
console.log(audi.drive(10));

const honda = new Motorcycle(
  "Honda",
  "CBR600R",
  2015,
  40,
  2000,
  1000,
  100,
  EngineType.TURBO,
  VehicleType.MotorCycle
);

honda.startEngine();
honda.getInfo();

// manipulation part
const heading1 = document.querySelector("h2") as HTMLHeadingElement;
const heading2 = document.querySelector("h3") as HTMLHeadingElement;

heading1.textContent = `${audi.brandName} ${audi.modelName}`;
heading2.textContent = `${honda.brandName} ${honda.modelName}`;
