var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13]
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    }
  }
}

//   var primeArray = nestedData.innerData.numberData.primeNumbers;

//   var i;
//   for (i=0;i<primeArray.length;i++){
//       console.log(primeArray[i]);
//   }

//   var fibonnaciArray = nestedData.innerData.numberData.fibonnaci;

//   for (i = 0;i<fibonnaciArray.length;i++){
//       if(fibonnaciArray[i]%2===0){
//           console.log(fibonnaciArray[i]);
//       }
//   }

// console.log(nestedData.innerData.order[1]);
nestedData.innerData.addSnack("chocolate");
console.log(nestedData.innerData.snacks);