"use strict";
let numbers = [1, 2, 3, 4, 5];
let user = [30, "Breno"];
let mySize = 13;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 0.25;
}
calculateTax(10000, 2025);
let employee = {
    id: 1,
    name: "Breno",
    retire: (date) => { console.log(date); }
};
let employeeTwo = {
    id: 1,
    name: "Breno",
    retire: (date) => { console.log(date); }
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let height = 'cm';
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('eae');
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map