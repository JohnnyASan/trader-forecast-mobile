// This function rounds to a whole number.
function roundToWhole(n : number) {
    return Math.floor(Number((n).toFixed(2)));
}

// This function rounds to 2 decimal places since we are dealing with currency.
function round(number: number, precision: number) {
    if (precision < 0) {
      let factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }
    else
      return +(Math.round(Number(number + "e+" + precision)) +
        "e-" + precision);
}

export {
    round,
    roundToWhole
}