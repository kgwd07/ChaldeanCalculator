import React from 'react'

const loshuFunction = (birthDate) => {

    let numbers = birthDate.split('');


    let digits = [];
    

    for(let item of numbers){

        if(item !== '-'){
            digits.push( parseInt(item))
        }
    }

    // ! digits
    console.log(digits);


    let sumOfDigits = [];
    let tempSumOfDigits = 0;
    for(let item of digits){
         tempSumOfDigits = tempSumOfDigits  + parseInt(item);
        }
        sumOfDigits.push(tempSumOfDigits)


        
        let DateSum = 0;
        if(sumOfDigits.length > 1) {
            sumOfDigits.forEach((digit) => {
                DateSum = DateSum + digit;
            })
            sumOfDigits = [];
            sumOfDigits.push(DateSum)
        }
        
        // ! sum of digits
    console.log(sumOfDigits);


    do{
    let sum = 0;
    if(sumOfDigits[0] > 9){

        let r = sumOfDigits[0] % 10;
        let q = parseInt(sumOfDigits[0] / 10);

        sum = sum + r + q;
        sumOfDigits = [];
        sumOfDigits.push(sum)
    }
} while (sumOfDigits[0] > 9);
    
    console.log(sumOfDigits);
    

        // ! date
    let date = digits.slice(6);

    if(date.length > 1){
        let dateSum = 0;
        date.forEach((digit) => {
            dateSum = dateSum + parseInt(digit); 
        })
        date = [];
        date.push(dateSum)
    }
   
    // console.log(date);

    let dateSum = 0

    if(date[0] > 9){

        let r = date[0] % 10;
        let q = parseInt(date[0] / 10);

        dateSum = dateSum + r + q;
        date = [];
        date.push(dateSum)
    }
    
    console.log(date);
    
    
    const mainArr = [...digits,...sumOfDigits,...date]

    console.log(mainArr);


    let b1 = mainArr.filter((item) => {
    return  item === 4;
    });
    if(b1.length === 0){
        b1.push('X');
    }
    b1 = b1.toString() + '-rahu';

    let b2 = mainArr.filter((item) => {
    return  item === 9;
    });
    if(b2.length === 0){
        b2.push('X');
    }
     b2 = b2.toString() + '-mars';


    let b3 = mainArr.filter((item) => {
    return  item === 2;
    });
    if(b3.length === 0){
        b3.push('X');
    }
    b3 = b3.toString() + '-moon';

    let b4 = mainArr.filter((item) => {
    return  item === 3;
    });
    if(b4.length === 0){
        b4.push('X');
    }
    b4 = b4.toString() + '-jupiter';

    let b5 = mainArr.filter((item) => {
    return  item === 5;
    });
    if(b5.length === 0){
        b5.push('X');
    }
    b5 = b5.toString() + '-mercury';

    let b6 = mainArr.filter((item) => {
    return  item === 7;
    });
    if(b6.length === 0){
        b6.push('X');
    }
    b6 = b6.toString() + '-ketu';

    let b7 = mainArr.filter((item) => {
    return  item === 8;
    });
    if(b7.length === 0){
        b7.push('X');
    }
    b7 = b7.toString() + '-saturn';

    let b8 = mainArr.filter((item) => {
    return  item === 1;
    });
    
    if(b8.length === 0){
        b8.push('X');
    }
    b8 = b8.toString() + '-sun'; 

    let b9 = mainArr.filter((item) => {
    return  item === 6;
    });
    
    if(b9.length === 0){
        b9.push('X');
    }
    b9 = b9.toString() + '-venus'; 

    

    

    console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9);

  const  masterArry = [b1,b2,b3,b4,b5,b6,b7,b8,b9];

  console.log(masterArry);

  return masterArry;
}
export default loshuFunction;
