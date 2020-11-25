// Code your solution in this file!
const returnFirstTwoDrivers = function (driver) {
  return driver.slice(0, 2);
};

const returnLastTwoDrivers = function (driver) {
  return driver.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (mult) {
    return mult * multiplier;
  };
};

const fareDoubler = function (fare) {
  return fare * 2;
};

const fareTripler = function (fare) {
  return fare * 3;
};

const selectDifferentDrivers = function (arr, func) {
  return func(arr);
};
