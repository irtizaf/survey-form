"use client"
import { Box } from '@chakra-ui/react'

import { useFormData } from '../context/context'

import Question1 from './questionone';
import Question2 from './questiontwo';
import Question3 from './questionthree';
import Question4 from './questionfour';
import Question5 from './questionfive';
import Question8 from './questioneight';
import Question7 from './questionseven';
import Question9 from './questionnine';
import  Question6   from './questionsix';
import Question11 from './questioneleven';
import Question12 from './questiontwelve';
import Question16 from './questionsixteen';
import Question17 from './questionseventeen';
import Question10 from './questionten';
import Question13 from './questionthirteen';
import Question14 from './questionfourteen';
import Question15 from './questionfifteen';



export default function Male() {

  const { step, setStep, formData, setFormData } = useFormData()

  // const [Step, setStep] = useState(8)
  // console.log(setStep())
  console.log("hello",formData.queTwo)

 
  return (
    <Box>
                
                {step == 3 && (
        <Question3/> //Both
      )}
        

      
        {step == 4 && (
        <Question4/> //Both
      )}
      
      {step == 5 && (
        <Question5/> //Both
      )}
           {step == 6 && (
        <Question6/> //Both
      )}

{step == 7 && (
        <Question7/> //Both
      )}

{step == 8 && (
        <Question8/> //Both
      )}
     {step == 9 && (
        <Question9/> //Both
      )}

{step == 10 && (
        <Question10/> //Both
      )}
      
      {step == 11 && (
        <Question11/> //Both
      )}

     
{step == 12 && (
        <Question12/> //Both
      )} 
      
         
     {step == 15 && (
        <Question15/> //Both
      )}
        {step == 16 && (
        <Question16/> //Both
      )}
        
        {step == 17 && (
        <Question17/> //Both
      )}  
     
        
      
      {/* <Question16/> */}

      {/* <Question10/> */}
       
    </Box>
  )
}



