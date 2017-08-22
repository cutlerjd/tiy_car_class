// CLASSES PROJECT
// In this project, you will build a Mazda car factory that manufactures both cars and trucks.
// Read each set of instructions carefully!

// BUILD YOUR FACTORY!

// DECLARE A FACTORY CLASS
// - All automobiles manufacutered should have the following properties: make (Mazda), location (USA), airbags (true), abs (true), warranty (60,000 miles / 3 years)
// This factory should also run two functions: massBuild() and customerBuild()

// - massBuild should receive the following parameters: quantity, options.
// It should print "Building QUANTITY COLOR TRIM MODEL's" i.e: "Building 100 blue Touring CX-5's"

// - customerBuild should receive the following parameters: color, options.
// It should print "Building one COLOR TRIM MODEL with the following options: OPTIONS", i.e: "Building one red Sport Mazda3 with the following options: heated seats, rear spoiler"

// Create the Factory class bellow:
class Factory{
    constructor(options){
        this.make = options.make || 'Mazda',
        this.location = options.location || 'USA',
        this.airbags = options.airbags || true,
        this.abs = options.abs || true,
        this.warranty = options.warranty || '60,000 miles / 3 years'
    }
    massBuild(quantity, options){
        console.log(`Building ${quantity} ${this.color} ${this.trim} ${this.model}`)
    }
    static customerBuild(color,options){
        console.log(`Building one ${this.color} ${this.trim} ${this.model} with the following options:${options}`)
    }
}



// CREATE A SUB-CLASS CALLED CAR
// It should extend from Factory.
// The constructor should have the following properties: model, doors, color, enginetype, transmission, trim, wheelstrim, audio, seatstrim, moonroof. The values should be specified when creating an instance of Car.
// It should specifically inherit the warranty property from Factory so we can modify it.
// Car should also have the following additional properties: enginesize (4), navigation (true), backupcamera (true), warranty (100,000 miles / 5 years)
// Write your code below:
class Car extends Factory{
    constructor(options){
        super({warranty:options.warranty})
        this.model = options.model
        this.doors = options.doors
        this.color = options.color
        this.enginetype = options.enginetype
        this.transmission = options.transmission
        this.trim = options.trim
        this.wheelstrim = options.wheelstrim
        this.audio = options.audio
        this.seatstrim = options.seatstrim
        this.moonroof = options.moonroof
        this.enginesize = options.enginesize || 4
        this.navigation = options.navigation || true
        this.backupcamera = options.backupcamera || true
    }
}



// CREATE A SUB-CLASS CALLED SPORT
// It should extend from Car.
// The constructor should have the following properties: model, trim, transmission, top, color, seatstrim, audio, wheelstrim. The values should be specified when creating an instance of Sport.
// Sports cars should also have the following additional properties: moonroof (false), enginetype (gasoline), convertible (true), doors (2)
// Write your code below:
class Sport extends Car{
    constructor(options){
        super(options)
        this.top = options.top
        this.moonroof = false
        this.enginetype = 'gasoline'
        this.convertible = true
        this.doors = 2
    }
}



// CREATE A SUB-CLASS CALLED TRUCK
// Yes...this Mazda factory makes trucks....
// It should extend from 'Factory'.
// The constructor should have the following properties: model, color, enginesize, hitch, bed, navigation. The values should be specified when creating an instance of Truck.
// Truck should also have the following properties, standard: backupcamera (true), audio (basic)
// It should also inherit the warranty property so we can extend it to: 150,000 miles / 6 years.
// Write your code below:

class Truck extends Factory{
    constructor(options){
        super({warranty:(options.warranty||'150,000 miles / 6 years')})
        this.trim = options.trim
        this.model = options.model
        this.color = options.color
        this.enginesize = options.enginesize
        this.hitch = options.hitch
        this.bed = options.bed
        this.navigation = options.navigation
        this.backupcamera = true
        this.audio = true
    }
}



// LET'S BUILD SOME CARS AND TRUCKS!

// MAZDA3 MASS PRODUCTION
// Create an instance  Car.
// The following properties must be specified: model (mazda3), color (red), enginetype (hybrid), transmission (automatic), trim (touring), wheels (base), audio (premium), seats (leather), and moonroof (true)

// Write your 'mazda3' instance below:
let carOption = {
    model:'mazda3',
    color:'red',
    enginetype:'hybrid',
    transmission:'automatic',
    trim:'touring',
    wheels:'base',
    audio:'premium',
    seatstrim:'leather',
    moonroof:'true'
}
let mazda3 = new Car(carOption)
// Print mazda3. I should have all the above properties.
// Write your code below:
console.log(mazda3)




// Print calling massBuild(), building 35000 cars.
// It should print: "Building 35000 Red Touring Mazda3's."
// Write your code below:

mazda3.massBuild(35000,carOption)



// Print, calling customerBuild(), building one yellow mazda3 with the following options, as an array: weather package, satellite radio, rear spoiler.
// It should read: "Building one yellow Touring Mazda3 with the following options: weather package, satellite radio, rear spoiler"
// Write your code below:
let customerOptions = {
    model:'Mazda3',
    trim:'Touring',
    color:'yellow'
}
let customerCar = new Car(customerOptions)
Factory.customerBuild.call(customerCar,'yellow',(['weather package','satellite radio','rear spoiler'].toString()))






// MIATA-RF MASS PRODUCTION
// Create an instance  Sport.
// The following properties must be specified: model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'miataRf' instance below:
// Write your code below:
let miataOptions = {
    model:'Miata-RF',
    trim:'Grand Touring',
    transmission:'manual',
    top:'hard top',
    color:'red',
    seatstrim:'leather',
    audio:'premium',
    wheels:'premium'
}

let miataRf = new Car(miataOptions)




// Print miataRf. It should have all of the above properties. Plus, the extended warranty.
// Write your code below:

console.log(miataRf)



// Print miataRf, calling massBuild(), building 15,000
// It should print: "Building 15000 Red Grand Touring Miata-RF's."
// Write your code below:
miataRf.massBuild(15000,miataOptions)




// Print miataRf, calling customerBuild(), building one black Miata-Rf with the following options, as an array: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control.
// It should read: "Building one black Grand Touring Miata-RF with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"
// Write your code below:
let customerMiataRfOptions = {
    model:'Miata-RF',
    trim:'Grand Touring',
    color:'black',
    options:['hid headlights', 'sports suspension', 'leather steering wheel', 'heated seats', 'adaptive cruise control']
}
let customerMiataRf = new Sport(customerMiataRfOptions)

Factory.customerBuild.call(customerMiataRf,'black',customerMiataRfOptions.options.toString())


// TRAIL BLAZER MASS PRODUCTION
// The Trail Blazer should inherit from truck.
// The following properties must be specified: model (Trail Blazer), color (blue), trim (Sport), enginesize (8), hitch (true), bed (standard), navigation (true), doors (2)

// Write your 'trailBlazer' instance below:
// Write your code below:

let trailblazerOptions = {
    model:'Trail Blazer',
    color:'blue',
    trim:'Sport',
    enginesize:8,
    hitch:true,
    bed:'standard',
    navigation:true,
    doors:2
}

let trailBlazer = new Truck(trailblazerOptions)


// Print trailBlazer. It should have all the above properties. Plus, the extended warranty.
// Write your code below:
console.log(trailBlazer)



// Print trailBlazer, calling massBuid(). It should build 35000 trucks.
// It should print: "Building 35000 blue Sport Trail Blazer's."
// Wrint your code below:


trailBlazer.massBuild(35000,trailblazerOptions)


// Print trailBlazer, calling customerBuild(). It should build a red Trail Blazer with the following options, as an array: seat warmers, tinted windows, fog lamps.
// It should print: "Building one red Sport Trail Blazer with the following options: seat warmers, tinted windows, fog lamps"
// Write your code below:
customerTrailBlazerOptions = {
    model:'Trail Blazer',
    color:'blue',
    trim:'Sport',
    options:['seat warmers', 'tinted windows', 'fog lamps']
}
let customerTrailBlazer = new Truck(customerTrailBlazerOptions)
Factory.customerBuild.call(customerTrailBlazer,'black',customerMiataRfOptions.options.toString())