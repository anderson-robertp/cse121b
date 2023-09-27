// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function shipCanFire()
{
    /*
    Function: return true if the ships health is above 0 AND ammo 
    is above 0 false otherwise

    Variables: None

    returns: true/false
    */
    if (shipHealth >= 1 && shipAmmo >=1){
        canFire = true;
        console.log("ship can fire");
    }
    else {
        canFire = false;
        console.log("ship cannot fire");
    }
    return canFire;
}

function reloadShip()
{
    /*
    Function: reduce ship health by 1 and increase ammo by 3

    Variables: None

    returns: Nothing
    */
   shipHealth -= 1;
   shipAmmo += 3;
}

function isDestroyed(health)
{
    /*
    Function: return true if health is zero or less

    Variables: health

    returns: true/false
    */
   if (health <= 0){
    state = true;
   }
   else{
    state = false;
   }
   return state;
}

function isHit ()
{
    /*
    Function: should return true if a randomly generated number 
    is greater than .5, false if it is less than .5

    Variables: None

    returns: true/false
    */
   let shot = Math.random();
   if (shot >= .5) {
    hit = true;
   }
   else {
    hit = false;
   }
   return hit;

}

