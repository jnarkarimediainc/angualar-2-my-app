class Animal{
    public favFood: string;

    static numOfAnimals: number = 0;

    constructor(private name: string, private owner: string){
        Animal.numOfAnimals++;
    }

    ownerInfo(){
        return this.owner;
    }

    static homeManyAnimal(): number{
        return Animal.numOfAnimals;
    }

    // private property@
    private _weight: number;

    // getter 
    get weight(): number{
        return this._weight;
    }

    // set for animal weight
    set weight(weight: number){
        this._weight = weight;
    }
}

var spot = new Animal("Brownie", "Jagdish");
// get ownerinfo
var _ownerInfo = spot.ownerInfo();
// set weight for an animal
spot.weight = 30;
// get weight
spot.weight;

// inheritance
class Dog extends Animal{
    constructor(name: string, owner: string){
        super(name, owner);
        Dog.numOfAnimals++;
    }
}

// create an grover instance for dog
var grover = new Dog("Grover", "Arjun");
grover instanceof Animal