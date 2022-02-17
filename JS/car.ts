function car (carName:string, carFuelTankSize:number, fuelMIn:number, fuelAverage:number, fuelMax:number) :string {
    const CONSTANT_FOR_FUEL_COUNTING:number = 100;
    const averageFuelConsumptionMin:number = Math.floor(carFuelTankSize/fuelMIn*CONSTANT_FOR_FUEL_COUNTING);
    const averageFuelConsumptionMid:number = Math.floor(carFuelTankSize/fuelAverage*CONSTANT_FOR_FUEL_COUNTING);
    const averageFuelConsumptionMax:number = Math.floor(carFuelTankSize/fuelMax*CONSTANT_FOR_FUEL_COUNTING);


    return `${carName} su ${carFuelTankSize} baku gali nuvaziuoti ${averageFuelConsumptionMin} (magistralej, kai sanaudos yra ${fuelMIn}l/100km), ${averageFuelConsumptionMid}km (vidutiniskai, kai sanaudos yra ${fuelAverage}l/100km) ir ${averageFuelConsumptionMax}km (mieste, kai sanaudos yra ${fuelMax}l/100km)`; 

}

export {car};