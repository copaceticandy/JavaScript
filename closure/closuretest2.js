function counter() {
    let count = 0;
    return function () {
      return count++;
    };
  }
  
  const countValue1 = counter();
  const countValue2 = countValue1;
  console.log(countValue1());  // 0
  console.log(countValue1());  // 1
  console.log(countValue2());   // 0
  console.log(countValue2());   // 1
  