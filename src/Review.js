import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [ index , setIndex] = useState(0)
  const { id , image , job , name , text } = people[index];

  console.log(people)
 
  const personFunc = (number) => {
     if( number > people.length - 1 ) {
         return 0
     } else if(number < 0) {
      return people.length - 1
     }
     return number
  }

  const nextPerson = () => {
     setIndex( (index) => personFunc(index + 1))
  }

  const prevPerson = () => {
    setIndex((index) => personFunc(index - 1))
 }
  return (
    <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'> {name} </h4>
    <p className='job'> {job} </p>
    <p className='info'> {text} </p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson} >
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson} >
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' >
      surprise me
    </button>
  </article>
  )
};

export default Review;
