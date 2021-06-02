import React from 'react';
import {useState} from 'react';
import Chaldean from './Chaldean';
import PeopleComp from './PeopleComp';
import logo from './LNH-LOGO.png'

 const Calc = () => {

    const [firstName,setFirstName] = useState('');
    const [people,setPeople] = useState([]);
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
        setPeople((people) => {
           return [];
       })
    }
    

    return (
        <>
        <article>
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
            <h3>CHALDEAN CALCULATOR</h3>
            <form className='form' onSubmit = {handleSubmit}> 
                
                <div className="form-control">
                    
                    <label htmlFor="firstName">NAME : </label>
                        <input type="text" id='firstName' name='firstName' value = {firstName} onChange = {(e)=> setFirstName( e.target.value)} required minLength='3' maxLength='100' pattern = '^[a-zA-Z]*$' placeholder='Enter Name'/>
                </div>
                <div className="button-container">
                <button type='submit'>find no</button>
                <button type='btn' onClick={clear}>clear list</button>
                </div>
            </form>

            { people.map((person) => {
                return <PeopleComp key = {person.id}{...person}/>
            })}


        </article>
        </>
    );
};

export default Calc;