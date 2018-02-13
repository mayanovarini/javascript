// EMPLOYEE JS

let Employee = {
	salary: 10000
};

let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

/*

TASK 1 - 10

Employee.getCadre = function() {
  if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

Employee.calculateTax = function() {
  return payGrades[Employee.getCadre()].taxMultiplier * Employee.salary;
}

Employee.getBenefits = function() {
  return payGrades[Employee.getCadre()].benefits.join(', ');
}

Employee.calculateBonus = function() {
  return .02 * Employee.salary;
}

Employee.reimbursementEligibility = function() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0;
  let employeeBenefits = payGrades[Employee.getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

export default Employee;

*/

/* TASK 11 - 14

const getCadre = () => {
  if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

const calculateTax = () => {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

const getBenefits = () => {
  return payGrades[getCadre()].benefits.join(', ');
}

const calculateBonus = () => {
  return .02 * Employee.salary;
}

const reimbursementEligibility = () => {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };

  let totalBenefitsValue = 0;

  let employeeBenefits = payGrades[getCadre()].benefits;

  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }

  return totalBenefitsValue;
}

export { Employee, getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement };

*/

// TASK 15 - 17

export const getCadre = () => {
  if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

export const calculateTax = () => {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

export const getBenefits = () => {
  return payGrades[getCadre()].benefits.join(', ');
}

export const calculateBonus = () => {
  return .02 * Employee.salary;
}

export const reimbursementEligibility = () => {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };

  let totalBenefitsValue = 0;

  let employeeBenefits = payGrades[getCadre()].benefits;

  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }

  return totalBenefitsValue;
}

export default Employee;



// WORKAROUND JS

/* TASK 1 - 10

import Employee from './employee';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + Employee.getCadre());
  console.log('Tax: ' + Employee.calculateTax());
  console.log('Benefits: ' + Employee.getBenefits());
  console.log('Bonus: ' + Employee.calculateBonus());
  console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
}

*/

/* TASK 11 - 14
import {Employee, cadre, tax, benefits, bonus, reimbursement} from './employee';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + cadre());
  console.log('Tax: ' + tax());
  console.log('Benefits: ' + benefits());
  console.log('Bonus: ' + bonus());
  console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}

*/

// TASK 15 - 17

import { default as Employee, getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './employee';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
