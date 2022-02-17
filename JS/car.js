function car(carName, carFuelTankSize, fuelMIn, fuelAverage, fuelMax) {
    const CONSTANT_FOR_FUEL_COUNTING = 100;
    const averageFuelConsumptionMin = Math.floor(carFuelTankSize / fuelMIn * CONSTANT_FOR_FUEL_COUNTING);
    const averageFuelConsumptionMid = Math.floor(carFuelTankSize / fuelAverage * CONSTANT_FOR_FUEL_COUNTING);
    const averageFuelConsumptionMax = Math.floor(carFuelTankSize / fuelMax * CONSTANT_FOR_FUEL_COUNTING);
    return `${carName} su ${carFuelTankSize} baku gali nuvaziuoti ${averageFuelConsumptionMin} (magistralej, kai sanaudos yra ${fuelMIn}l/100km), ${averageFuelConsumptionMid}km (vidutiniskai, kai sanaudos yra ${fuelAverage}l/100km) ir ${averageFuelConsumptionMax}km (mieste, kai sanaudos yra ${fuelMax}l/100km)`;
}
export { car };
//# sourceMappingURL=car.js.map