import React from 'react';
import {useState,useEffect} from 'react';
import Chaldean from './Chaldean';
import loshuFunction from './lo-shu-grid';
import PeopleComp from './PeopleComp';
import logo from './LNH-LOGO.png'
import Grid from './grid'


const getLocalStorage = () => {
    let people =  localStorage.getItem('people');
    
    if(people){
        return JSON.parse(localStorage.getItem('people'))
    }
    else{
        return [];
    }
}

const getLocalStorageGrid = () =>{
    let gridArray = localStorage.getItem('gridArray');

    if(gridArray){
        return JSON.parse(localStorage.getItem('gridArray'))
    }
    else{
        return "";
    }
}

 const Calc = () => {

    const [firstName,setFirstName] = useState('');
    const [birthDate,setBirthDate] = useState('');
    const [gridArray,setGridArray] = useState(getLocalStorageGrid());
    const [people,setPeople] = useState(getLocalStorage());
    const [isError,setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName){
        setIsError(false)
        let number =  Chaldean(firstName);
        
       const person = {id: new Date().getTime().toString(),firstName,number }
       setPeople((people) => {
           return [...people, person]
       })
       setFirstName('')
       }

       else{
        setIsError(true)   
       }
    }

   


    const clear = () => {
        setPeople([]);
        setGridArray('');

    }
    
    useEffect(() => {
        localStorage.setItem('people',JSON.stringify(people));
        localStorage.setItem('gridArray',JSON.stringify(gridArray));
    },[people,gridArray])

    let bday = [];
    const createGrid = (e) => {
        e.preventDefault();
         bday =  loshuFunction(birthDate);
         setGridArray(bday);
        }
        console.log(gridArray);

    return (
        <>
        <article>
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
            <h3 style={{margin:'2rem 0'}}>CHALDEAN CALCULATOR & LO SHU GRID</h3>
            <form className='form' onSubmit = {handleSubmit}> 
                
                <div className="form-control">
                    
                    <label htmlFor="firstName">NAME : </label>
                        <input type="text" id='firstName' name='firstName' value = {firstName} onChange = {(e)=> setFirstName( e.target.value)} required minLength='3' maxLength='100' pattern = '^[a-zA-Z]*$' placeholder='Enter Name'/>
                </div>
                <div className="form-control">
                        <label htmlFor="birthDate">BIRTHDATE : </label>
                        <input type="date" id='birthDate' name='birthDate' value = {birthDate} onChange = {(e)=> setBirthDate( e.target.value)}  minLength='3' maxLength='100'  placeholder='Enter Birthdate'/>
                </div>
                <div className="button-container">
                <button type='submit'>find no</button>
                <button type='btn'onClick={createGrid} >generate Lo shu grid</button>
                <button type='btn' onClick={clear}>clear</button>
                </div>
            </form>

            { people.map((person) => {
                return <PeopleComp key = {person.id}{...person}/>
            })}

            {gridArray && <div className= 'box-container'>
                <h2 className='direction direction-one'>SE</h2>
                <h2 className='direction direction-two'>S</h2>
                <h2 className='direction direction-three'>SW</h2>
                <h2 className='direction direction-four'>E</h2>
                <h2 className='direction direction-five'>W</h2>
                <h2 className='direction direction-six'>NE</h2>
                <h2 className='direction direction-seven'>N</h2>
                <h2 className='direction direction-eight'>NW</h2>
            {gridArray.map((number,index)=>{
                return <Grid key={index} index={index} number = {number}/>
            })}
            </div>}
            

        </article>
        </>
    );
};

export default Calc;