import React from 'react'

const Grid = ({number}) => {

    const newNumber = number.split('-');
    console.log(newNumber);

    return (
        <>
        <div className="box">{newNumber.map((item,index)=>{

            if(index === 1){
                return <h3 className='planets'>{item}</h3>    
            }
            return <h3>{item}</h3>
        })}
            
        </div>
       
     </>   
    )
}

export default Grid
