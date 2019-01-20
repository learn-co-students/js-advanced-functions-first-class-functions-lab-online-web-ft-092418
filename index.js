// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
};

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];

const createFareMultiplier = function(int) {
    return function(arg) {
        return int * arg;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(driverArray, fn) {
    return fn(driverArray);
}