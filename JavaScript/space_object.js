// Write your fasterShip object literal below
let fasterShip={
    color:'silver',
    'Fuel Type':'Turbo Fuel'
  };
  //Accessing properties of objects
  let objectColor = fasterShip.color;
  console.log(objectColor);
  //using bracket notation to access properties of objects..
  let whichFuel = fasterShip['Fuel Type'];
  //Property assignment
fasterShip.color = 'glorious gold';
fasterShip.numEngines = 1;
delete fasterShip['numEngines'];
// Methods 
let alienShip = {
  retreat(){
    console.log(retreatMessage);
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

alienShip.retreat();
alienShip.takeOff();

// Nested objects-----------------
let spaceship = {
  passengers : [{name: 'Space Dog'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 