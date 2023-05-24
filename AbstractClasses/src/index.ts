// +++ Introduction +++

// --> Static Properties and Abstract Classes
// + static properties
// + abstract classes

// --> All about Interfaces
// + multiple inheritance
// + generics with interfaces
// + multiple types as generics
// + classes and interfaces
// + access modifiers with interfaces

// -----------------------------------------------------------------------
// +++ Static Properties and Methods +++
{
  class AutoMobile {
    public static color = 'red';

    public static callMileAge(miles: number, litres: number): number {
      return miles / litres;
    }
  }

  AutoMobile.color;
  AutoMobile.callMileAge(100, 5);

  Math.PI;
}

// -----------------------------------------------------------------------
// +++ Abstract Classes +++
// --> Abstract Classes
// + Abstract Classes can not be instantiated
// + The whole purpose of creating an Abstract Class is to \
// create Child Classes from an Abstract Class
//
// --> Abstract Members
// + Once an Abstract Members is declared in the Parent Class, \
// the Child Class must implement its own functionality of the \
// Abstract Members

// protected constructor
// we don't instantiate the Parent Class --> use protected
{
  abstract class Department {
    protected constructor(public departmentName: string) {}
  }

  class ITDepartment extends Department {}

  const it = new ITDepartment('IT Department');
}
{
  abstract class Department {
    protected constructor(public departmentName: string) {}
  }

  class ITDepartment extends Department {
    constructor(departmentName: string) {
      super(departmentName);
    }
  }

  const it = new ITDepartment('IT Department');
}

// Abstract Members
{
  type Holidays = { date: Date; reason: string }[];

  abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(public departmentName: string) {}
  }

  class ITDepartment extends Department {
    constructor(departmentName: string) {
      super(departmentName);
    }
  }

  class AdminDepartment extends Department {
    constructor(departmentName: string) {
      super(departmentName);
    }
  }

  const it = new ITDepartment('IT Department');
}
{
  type Holidays = { date: Date; reason: string }[];

  abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(public departmentName: string) {}
  }

  class ITDepartment extends Department {
    protected holidays: Holidays = [];

    constructor(departmentName: string) {
      super(departmentName);
    }
  }

  class AdminDepartment extends Department {
    protected holidays: Holidays = [];

    constructor(departmentName: string) {
      super(departmentName);
    }
  }

  const it = new ITDepartment('IT Department');
}

// -----------------------------------------------------------------------
// +++ Shared Methods in Abstract Classes +++
{
  type Holidays = { date: Date; reason: string }[];

  abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(protected departmentName: string) {}

    public addHolidays(holidays: Holidays) {
      holidays.forEach(holiday => {
        this.holidays.push(holiday);
      });
    }
  }

  class ITDepartment extends Department {
    protected holidays: Holidays = [];

    constructor(departmentName: string) {
      super(departmentName);
    }
  }

  class AdminDepartment extends Department {
    protected holidays: Holidays = [];

    constructor(departmentName: string) {
      super(departmentName);
    }
  }

  const it = new ITDepartment('IT Department');
}

// -----------------------------------------------------------------------
// +++ Protected Constructor and Child Classes +++
{
  abstract class Department {
    protected constructor(protected departmentName: string) {}
  }

  class ITDepartment extends Department {
    constructor() {
      super('IT Department');
    }
  }
}

// -----------------------------------------------------------------------
// +++ Adding Holidays to Classes +++
{
  type Holidays = { date: Date; reason: string }[];

  abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(protected departmentName: string) {}

    public addHolidays(holidays: Holidays) {
      holidays.forEach(holiday => {
        this.holidays.push(holiday);
      });
    }
  }

  class ITDepartment extends Department {
    protected holidays: Holidays = [];

    constructor() {
      super('IT Department');
    }
  }

  class AdminDepartment extends Department {
    protected holidays: Holidays = [];

    constructor() {
      super('Admin Department');
    }
  }

  const itDepartment = new ITDepartment();
  const adminDepartment = new AdminDepartment();

  const itHolidays: Holidays = [
    { date: new Date(), reason: 'IT Department Day' },
  ];
  const adminHolidays: Holidays = [
    { date: new Date(), reason: 'Admin Department Day' },
  ];

  itDepartment.addHolidays(itHolidays);
  adminDepartment.addHolidays(adminHolidays);
}

// -----------------------------------------------------------------------
// +++ Print Holidays Method +++
{
  type Holidays = { date: Date; reason: string }[];

  abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(protected departmentName: string) {}

    public addHolidays(holidays: Holidays) {
      holidays.forEach(holiday => {
        this.holidays.push(holiday);
      });
    }

    public printHolidays() {
      if (this.holidays.length === 0) {
        console.log('There are no holidays!');
      } else {
        console.log('Here is the list of holidays');

        this.holidays.forEach((holiday, index) => {
          console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
        });
      }
    }
  }
}

// -----------------------------------------------------------------------
// +++ Method Overriding in Child Class +++
// --> When override a method, we can not change the signature \
// of the method like: adding some more parameters,...
{
  type Holidays = { date: Date; reason: string }[];

  abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(protected departmentName: string) {}

    public addHolidays(holidays: Holidays) {
      holidays.forEach(holiday => {
        this.holidays.push(holiday);
      });
    }

    public printHolidays() {
      if (this.holidays.length === 0) {
        console.log('There are no holidays!');
      } else {
        console.log('Here is the list of holidays');

        this.holidays.forEach((holiday, index) => {
          console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
        });
      }
    }
  }

  class ITDepartment extends Department {
    protected holidays: Holidays = [];

    constructor() {
      super('IT Department');
    }

    public printHolidays(param: string) {
      if (this.holidays.length === 0) {
        console.log('There are no holidays!');
      } else {
        console.log(`Here is the list of holidays ${this.departmentName}`);

        this.holidays.forEach((holiday, index) => {
          console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
        });
      }
    }
  }
}

// -----------------------------------------------------------------------
// +++ Abstract Methods +++
// An Abstract Method is just the signature of the method that every \
// Child Class will have to implement
{
  type Holidays = { date: Date; reason: string }[];

  abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(protected departmentName: string) {}

    public addHolidays(holidays: Holidays) {
      holidays.forEach(holiday => {
        this.holidays.push(holiday);
      });
    }

    public abstract printHolidays(): void;
  }

  class ITDepartment extends Department {
    protected holidays: Holidays = [];

    constructor() {
      super('IT Department');
    }

    public printHolidays() {
      if (this.holidays.length === 0) {
        console.log('There are no holidays!');
      } else {
        console.log(`Here is the list of holidays ${this.departmentName}`);

        this.holidays.forEach((holiday, index) => {
          console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
        });
      }
    }
  }
}
