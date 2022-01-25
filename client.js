const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i]);
//   employees[i];
// }

function employPayRoll(employee) {
  // for (let i = 0; i < employees.length; i++) {
  //   console.log(employees[i]);
  //   employees[i];
  // }
  // console.log(employee);
  // bonusPercentage = employees;
  let bonusPercent = [];
  if (employee.reviewRating === 3 && employee.annualSalary < 65000) {
    return employee.annualSalary * 0.04;
  }
  if (employee.reviewRating === 3 && employee.annualSalary > 65000) {
    return employee.annualSalary * 0.03;
  }
  if (
    employee.reviewRating === 3 &&
    employee.annualSalary > 65000 &&
    employee.employeeNumber.length === 4
  ) {
    return employee.annualSalary * 0.08;
  }
  //
  //
  //
  //
  //
  //
  if (employee.reviewRating === 4 && employee.annualSalary < 65000) {
    return employee.annualSalary * 0.06;
  }
  if (employee.reviewRating === 4 && employee.annualSalary > 65000) {
    return employee.annualSalary * 0.05;
  }
  if (
    employee.reviewRating === 4 &&
    employee.annualSalary > 65000 &&
    employee.employeeNumber.length === 4
  ) {
    return employee.annualSalary * 0.1;
  }
  //
  //
  //
  //
  //
  if (employee.reviewRating === 5 && employee.annualSalary < 65000) {
    return employee.annualSalary * 0.1;
  }
  if (employee.reviewRating === 5 && employee.annualSalary > 65000) {
    return employee.annualSalary * 0.09;
  }
  if (
    employee.reviewRating === 5 &&
    employee.annualSalary > 65000 &&
    employee.employeeNumber.length === 4
  ) {
    return employee.annualSalary * 0.14;
  }
  //
  //
  //
  if (employee.reviewRating <= 2) {
    return console.log("No Bonus, Rating at 2 or below");
  }
}
console.log();
console.log(employees);
console.log(employPayRoll(employees[0]));
console.log(employPayRoll(employees[1]));
console.log(employPayRoll(employees[2]));
console.log(employPayRoll(employees[3]));
console.log(employPayRoll(employees[4]));
