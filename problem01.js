function cashOut(money) {
  if (typeof money === "number" && money > 0) {
    const cashoutCharge = (1.75 * money) / 100;
    console.log(cashoutCharge);
    return cashoutCharge;
  } else {
    console.log("Invalid");
  }
}
const total = cashOut(20000);
