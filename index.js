var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["MotorCycle"] = 1] = "MotorCycle";
})(VehicleType || (VehicleType = {}));
var EngineType;
(function (EngineType) {
    EngineType[EngineType["DOHC"] = 0] = "DOHC";
    EngineType[EngineType["SOHC"] = 1] = "SOHC";
    EngineType[EngineType["TURBO"] = 2] = "TURBO";
})(EngineType || (EngineType = {}));
var Car = /** @class */ (function () {
    function Car(brandName, _modelName, _year, _fuelCapacity, _currentFuel, _milage, _fuelFor1KM, _engine, _vehicleType) {
        this._modelName = _modelName;
        this._year = _year;
        this._fuelCapacity = _fuelCapacity;
        this._currentFuel = _currentFuel;
        this._milage = _milage;
        this._fuelFor1KM = _fuelFor1KM;
        this._engine = _engine;
        this._vehicleType = _vehicleType;
        this.brandName = brandName;
    }
    Object.defineProperty(Car.prototype, "modelName", {
        // getters
        get: function () {
            return this._modelName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "milage", {
        get: function () {
            return this._milage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    Car.prototype.getInfo = function () {
        console.log("Brand name: ".concat(this.brandName, ", Model name: ").concat(this._modelName, ", Type: ").concat(VehicleType[VehicleType.Car]));
    };
    Car.prototype.drive = function (km) {
        var requiredFuelAmount = km * this._fuelFor1KM;
        if (requiredFuelAmount > this._currentFuel) {
            console.log("Benzin yeterli deyil");
        }
        else {
            this._currentFuel -= requiredFuelAmount;
        }
        this._milage += km;
        return this._currentFuel;
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(brandName, _modelName, _year, _fuelCapacity, _currentFuel, _milage, _fuelFor1KM, _engine, _vehicleType) {
        this._modelName = _modelName;
        this._year = _year;
        this._fuelCapacity = _fuelCapacity;
        this._currentFuel = _currentFuel;
        this._milage = _milage;
        this._fuelFor1KM = _fuelFor1KM;
        this._engine = _engine;
        this._vehicleType = _vehicleType;
        this.brandName = brandName;
    }
    Object.defineProperty(Motorcycle.prototype, "modelName", {
        // getters
        get: function () {
            return this._modelName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "milage", {
        get: function () {
            return this._milage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    Motorcycle.prototype.getInfo = function () {
        console.log("Brand name: ".concat(this.brandName, ", Model name: ").concat(this._modelName, ", Type: ").concat(VehicleType[VehicleType.MotorCycle]));
    };
    Motorcycle.prototype.drive = function (km) {
        var requiredFuelAmount = km * this._fuelFor1KM;
        if (requiredFuelAmount > this._currentFuel) {
            console.log("Benzin yeterli deyil");
        }
        else {
            this._currentFuel -= requiredFuelAmount;
        }
        this._milage += km;
        return this._currentFuel;
    };
    Motorcycle.prototype.startEngine = function () {
        console.log("".concat(this.brandName, " ").concat(this._modelName, "'s engine is now running.."));
    };
    return Motorcycle;
}());
var audi = new Car("Audi", "A8", 2011, 30, 2000, 1000, 100, EngineType.DOHC, VehicleType.Car);
audi.getInfo();
console.log(audi.drive(10));
var honda = new Motorcycle("Honda", "CBR600R", 2015, 40, 2000, 1000, 100, EngineType.TURBO, VehicleType.MotorCycle);
honda.startEngine();
honda.getInfo();
// manipulation part
var heading1 = document.querySelector("h2");
var heading2 = document.querySelector("h3");
heading1.textContent = "".concat(audi.brandName, " ").concat(audi.modelName);
heading2.textContent = "".concat(honda.brandName, " ").concat(honda.modelName);
