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
import Male  from './male';
import Female from './female';


export default function Form() {

  const { step, setStep, formData, setFormData } = useFormData()

  // const [Step, setStep] = useState(8)
  // console.log(setStep())
  console.log("hello",formData.queTwo)

 
  return (
    <Box>
      {step == 1 && (
        <Question1/> //Both
      )
      }
      {step ==2  &&  (
        
        <Question2/> //Both
      )
      }    

      
        { formData.queTwo === "male" && (
            <Male/>

        )}
         { formData.queTwo === "female" && (
            <Female/>

        )} 
        
          
      {/* {step == 3 && (
        <Question3/>
      )
      }
      {step == 4 && (
        <Question4/>
      )
      }
      {step == 5 && (
        <Question5/>
      )
      }
      {step == 6 && (
        <Question6/> // Both
      )
      }
      {step == 7 && (
        <Question7/> //male female
      )
      }
      {step == 8 && (
        <Question8/>
      )
      }
       {step == 9 && (
        <Question9/>
      )
    
      }
      {step == 10 && (
        <Question10/> // female
      )
    
      }
      {step == 11 && (
        <Question11/> // male
      )
    
      }
      {step == 12 && (
        <Question12/> // male
      )
    
      }
      {step == 13 && (
        <Question13/> // female
      )
    
      }
      {step == 14 && (
        <Question14/> // female
      )
    
      }
      {step == 15 && (
        <Question15/>) // male 
        } 
         {step == 16 && (
        <Question16/>   )
        }
        {step == 17 && (
        <Question17/>   )
        }
      
      {/* <Question4/> */}

      {/* <Question10/> */}
       
    </Box>
  )
}



