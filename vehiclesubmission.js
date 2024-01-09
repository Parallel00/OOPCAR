class Vehicle{
	constructor(make, model, year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
	
	honk(){
		return "Hooonk!";
	}
	
	toString(){
		return `This vehicle is a ${this.make} ${this.modal} from ${this.year}.`;
	}
}

class Car extends Vehicle{
	constructor(make, model, year){
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle{
	constructor(make, mocel, year){
		super(make, model, year)
		this.numWheels = 2;
	}
	
	revEngine(){
		return "VRRRRMVRMVRMVRRRRRRMMMMMM";
	}
}

class Garage{
	constructor(capacity){
		this.vehicles = [];
		this.capacity = capacity;
	}
	
	add(newVehicle){
		if (!(newVehicle instanceof Vehicle)){
			return "Please enter a valid vehicle";
		}
		if (this.vehicles.length >= this.capacity){
			return "The garage is full.";
		}
		this.vehicles.push(newVehicle);
		return "Vehicle has been added.";
	}
}