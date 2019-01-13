// Code your solution in this file!

const returnFirstTwoDrivers = function aFunct(drivers){ return drivers.slice(0,2)} ;
const returnLastTwoDrivers = function aFunct(drivers){ return drivers.slice(-2)} ;

let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

const createFareMultiplier = function(multiplier ) {return function(fare) {return fare * multiplier}} ;

const fareDoubler = function( fare) {return createFareMultiplier(2 )(fare)} ;
const fareTripler = function( fare) {return createFareMultiplier(3 )(fare)} ;

const fetchSpecifiedDrivers = function( drivers , myFunc) {return myFunc(drivers)} ;
