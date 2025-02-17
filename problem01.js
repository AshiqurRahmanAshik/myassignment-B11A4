function cashOut(money) {
  if (typeof money === "number" && money >= 0) {
    const cashoutCharge = (1.75 * money) / 100;
    return cashoutCharge;
  } else {
    return "Invalid";
  }
}
const total = cashOut(-0);
console.log(total);
