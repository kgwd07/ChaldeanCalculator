import React from 'react'

const chaldeanFunction = (firstName) => {


        let letters = firstName.toLowerCase().split('');
         let correspondingNo = [];

         for(let letter of letters){

             if (letter === 'a' || letter === 'i' || letter === 'j' || letter === 'q' ||letter === 'y'  ){
                 correspondingNo.push(1);
             }

             if(letter === 'b' || letter === 'k' || letter === 'r' ){
                 correspondingNo.push(2);
             }

             if(letter === 'c' || letter === 'g' || letter === 'l' || letter === 's'  ){
                 correspondingNo.push(3);
             }

             if(letter === 'd' || letter === 'm' || letter === 't' ){
                 correspondingNo.push(4);
             }

             if(letter === 'e' || letter === 'h' || letter === 'n' || letter === 'x' ){
                 correspondingNo.push(5);
             }

             if(letter === 'u' || letter === 'v' || letter === 'w' ){
                 correspondingNo.push(6);
             }

             if(letter === 'o' || letter === 'z'){
                 correspondingNo.push(7);
             }

             if(letter === 'f' || letter === 'p'){
                 correspondingNo.push(8);
             }

         }
    
         let sum = 0;
        for ( let letter of correspondingNo){
        sum = sum + letter;
    }

        // console.log(sum);
        return sum;
}

export default chaldeanFunction;
