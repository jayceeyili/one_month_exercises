/***************************************************************************************************
  Given a fleet of 50 trucks, each with a full fuel tank and a range of 100 miles,
  how far can you deliver a payload? You can transfer the payload from truck to truck,
  and you can transfer fuel from truck to truck. Assume all the payload will fit in one truck.
***************************************************************************************************/

const truckin = (fleetSize, perRange, totalMiles) => {
  totalMiles = totalMiles || perRange / fleetSize;
  if (fleetSize === 1) return totalMiles;
  fleetSize--;
  totalMiles += perRange / fleetSize;
  return truckin(fleetSize, perRange, totalMiles);
};

console.log(truckin(40, 80));
