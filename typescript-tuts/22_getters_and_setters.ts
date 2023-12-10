// Todo: Getters and Setters

// Getters and Setters are special types of methods
//! Getters - takes no arguments and returns a value
//! Setters - takes one argument and does not return any value

class Plant {
    private _species: string = 'Default'; // private property is generally prefixed with underscore

    get species() { // getter- we might confuse it with a method but it is not a method, it is a property with validation
        return this._species;
    }

    set species(value: string) { // setter- we might confuse it with a method but it is not a method, it is a property with validation
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}

let plant = new Plant();
console.log( plant.species ); // Default

plant.species = 'AB';
console.log( plant.species ); // Default

plant.species = 'Green Plant';
console.log( plant.species ); // Green Plant