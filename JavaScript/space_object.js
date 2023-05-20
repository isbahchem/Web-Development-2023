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