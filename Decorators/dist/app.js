"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
{
    function FirstDecorator(constructor) {
        console.log('Decorator called!');
        console.log(constructor);
    }
    let Aircraft = class Aircraft {
        constructor(_aircraftModel, pilot) {
            this._aircraftModel = _aircraftModel;
            this.pilot = pilot;
            console.log('Class called');
        }
        pilotName() {
            console.log(this.pilot);
        }
        get aircraftModel() {
            return this._aircraftModel;
        }
    };
    Aircraft = __decorate([
        FirstDecorator,
        __metadata("design:paramtypes", [String, String])
    ], Aircraft);
    console.log(Aircraft);
}
console.log('---');
console.log('--- Addding to Prototype ---');
console.log('---');
{
    let Brands;
    (function (Brands) {
        Brands["airbus"] = "airbus";
        Brands["boeing"] = "boeing";
    })(Brands || (Brands = {}));
    function ManufacturerFactory(brands) {
        return (constructor) => {
            let origin = '';
            let manufacturer = '';
            let type = '';
            if (brands === Brands.airbus) {
                origin = 'United State';
                manufacturer = Brands.airbus;
                type = 'Jet';
                constructor.prototype.airbusMethod = () => {
                    console.log('Airbus method');
                };
            }
            if (brands === Brands.boeing) {
                origin = 'France';
                manufacturer = Brands.boeing;
                type = 'Helicopter';
                constructor.prototype.boeingMethod = () => {
                    console.log('Boeing method');
                };
            }
            constructor.prototype.origin = origin;
            constructor.prototype.manufacturer = manufacturer;
            constructor.prototype.type = type;
        };
    }
    let Airplane = class Airplane {
        constructor(_aircraftModel, pilot) {
            this._aircraftModel = _aircraftModel;
            this.pilot = pilot;
        }
        pilotName() {
            console.log(this.pilot);
        }
        get aircraftModel() {
            return this._aircraftModel;
        }
    };
    Airplane = __decorate([
        ManufacturerFactory(Brands.airbus),
        __metadata("design:paramtypes", [String, String])
    ], Airplane);
    const airplane = new Airplane('Airbus A380', 'Ajaxander');
    console.log(airplane);
    console.log(airplane.manufacturer);
    airplane.airbusMethod && airplane.airbusMethod();
}
console.log('---');
console.log('--- Method Decorators ---');
console.log('---');
{
    function MethodDecorator(classPrototype, methodName, descriptors) {
        console.log(classPrototype);
        console.log(methodName);
        console.log(descriptors);
        descriptors.writable = true;
    }
    function StaticMethodDecorator(constructor, methodName, descriptors) {
        console.log(constructor);
        console.log(methodName);
        console.log(descriptors);
    }
    class Airplane {
        constructor(_aircraftModel, pilot) {
            this._aircraftModel = _aircraftModel;
            this.pilot = pilot;
        }
        static seatCount() {
            console.log('200 seats.');
        }
        pilotName() {
            console.log(this.pilot);
        }
        get aircraftModel() {
            return this._aircraftModel;
        }
    }
    __decorate([
        MethodDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Airplane.prototype, "pilotName", null);
    __decorate([
        StaticMethodDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Airplane, "seatCount", null);
    const airplane = new Airplane('Airbus A380', 'Ajaxander');
    console.log(airplane);
}
console.log('---');
console.log('--- Parameter Decorators ---');
console.log('---');
{
    function ParameterDecorator(classPrototype, methodName, index) {
        console.log(classPrototype);
        console.log(methodName);
        console.log(index);
    }
    function PropertyDecorator(classPrototype, propertyName) {
        console.log(classPrototype);
        console.log(propertyName);
    }
    function AccessorDecorator(classPrototype, accessorName, descriptors) {
        console.log(classPrototype);
        console.log(accessorName);
        console.log(descriptors);
    }
    class Aircraft {
        constructor(_aircraftModel) {
            this._aircraftModel = _aircraftModel;
        }
        pilotName(firstname) {
            return firstname;
        }
        get aircraftModel() {
            return this._aircraftModel;
        }
    }
    __decorate([
        PropertyDecorator,
        __metadata("design:type", Object)
    ], Aircraft.prototype, "_aircraftModel", void 0);
    __decorate([
        __param(0, ParameterDecorator),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Aircraft.prototype, "pilotName", null);
    __decorate([
        AccessorDecorator,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Aircraft.prototype, "aircraftModel", null);
    new Aircraft('Airbus');
}
console.log('---');
console.log('--- Multiple Decorators ---');
console.log('---');
{
    function AddLocation(lat, long) {
        return (constructor) => {
            return class extends constructor {
                constructor(...args) {
                    super(args);
                    this.location = { lat, long };
                }
            };
        };
    }
    let Person = class Person {
        constructor(firstname, birthyear) {
            this.firstname = firstname;
            this.birthyear = birthyear;
        }
    };
    Person = __decorate([
        AddLocation(1, 2),
        __metadata("design:paramtypes", [String, Number])
    ], Person);
    console.log(Person);
    console.log(new Person('Ajaxander', 2002));
}
console.log('---');
console.log('--- Multiple Decorators - Practice ---');
console.log('---');
{
    function ProgrammingLanguage(language) {
        return (constructor) => {
            return class extends constructor {
                constructor(...args) {
                    super(...args);
                    this.programmingLanguage = language;
                }
            };
        };
    }
    let Student = class Student {
        constructor(firstname, birthyear) {
            this.firstname = firstname;
            this.birthyear = birthyear;
        }
    };
    Student = __decorate([
        ProgrammingLanguage('TypeScript'),
        __metadata("design:paramtypes", [String, Number])
    ], Student);
    console.log(Student);
    const student = new Student('Ajaxander', 2002);
    console.log(student);
}
//# sourceMappingURL=app.js.map