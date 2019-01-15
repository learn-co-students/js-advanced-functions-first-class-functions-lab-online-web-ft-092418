const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i) {
    return function fare(amount) {
        return amount * i
    }
}

function fareDoubler(fare) {
    const multiplier = createFareMultiplier(2)(fare)
    return multiplier
}

function fareTripler(fare) {
    const tripler = createFareMultiplier(3)(fare)
    return tripler
}

function fetchSpecifiedDrivers(drivers, argument) {
    return argument(drivers)

}