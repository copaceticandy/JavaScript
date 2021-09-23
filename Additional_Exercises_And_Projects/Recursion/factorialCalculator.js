function factorial(num, answer = 1) {
    if (num < 0) {
        throw Error("Negative numbers not accepted");
    }
    if (!Number.isInteger(num)) {
        throw Error("Not an integer")
    }
    if (num === 0) {
        return answer;
    }
    answer *= num;
    return factorial(num - 1, answer);
}

//better version

function factorial(x)
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);

// }

console.log(factorial(4))