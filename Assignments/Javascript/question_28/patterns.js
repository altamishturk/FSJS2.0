// question: a
// Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
function trangularPattern(num) {
  for (let i = 1; i <= num; i++) {
    let arr = [];
    for (let j = 1; j <= num; j++) {
      if (j <= i) {
        arr.push("*");
      }
    }
    console.log(...arr);
  }
}

// trangularPattern(6);

// question: b
// Print a square pattern, if the input is 3 then the output should be similar to the given output
function squirePattern(num) {
  for (let i = 1; i <= num; i++) {
    let arr = [];
    for (let j = 1; j <= num; j++) {
      arr.push("*");
    }
    console.log(...arr);
  }
}

// squirePattern(3);

// question: c
// Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
function pyramidPattern(num) {
  for (let i = 1; i <= num; i++) {
    let arr = [];
    for (let j = 1; j <= num - i; j++) {
      arr.push(" ");
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      arr.push("*");
    }
    console.log(...arr);
  }
}

pyramidPattern(5);
