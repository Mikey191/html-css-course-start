function bankerRound(x){
  if (Math.round(x) % 2 == 0) return Math.round(x);
  else {
    if (x < Math.round(x)) return Math.round(x) - 1;
    else return Math.round(x) + 1;
  }
}

console.log(bankerRound(2.7)); // 2
console.log(bankerRound(3.2)); // 4
console.log(bankerRound(4.3)); // 4
