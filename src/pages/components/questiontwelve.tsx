



import React, { useEffect } from 'react'
import { Box, Heading,Text,Image } from '@chakra-ui/react'
import { Button,  useDisclosure } from '@chakra-ui/react'
import  {Lemonada } from 'next/font/google'
const lemonada = Lemonada({subsets:['latin']})
import { useFormData } from '../context/context';
import { useState } from 'react';

import { BsArrowRightShort } from "react-icons/bs"










const Question12 = () => {
  const { step, setStep, formData, setFormData } = useFormData()
  const [style, setStyle] = useState(false)
  function handleSubmit(e: string) {
    // e.preventDefault()
    setStyle(true)
    if (formData.queTwo=="male"){
      setStep(15)
    }
    
    // addData(e);
    setFormData({...formData, queTwelve: e})
  }

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".initialPosition"
    );
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.add("animate");
        }
      });
    });
    elements.forEach((element) => {
      observer.observe(element);  
    });
  }, [])
  
  return (
    
   
    <Box w={{ xl: "auto", sm: "100%" }}>
     
     <Box className='initialPosition' transitionDuration={'1000ms'} transform={ 'translateY(350px)'} opacity={`${style ? '0' : '1'}`}  pt={{xl:'198px',lg:"110px",sm:"70px",md:"80px"}} pl={{xl:"162", lg:'100px',sm:"10px",md:"60px"}} background={"#7EA2FF"} height={{xl:"1088",lg:"0px",sm:"00"}}  textColor={"#ffff"} > <Box display={"flex"} alignItems={"center"}  ><Text fontSize={{xl:"48", lg:"28px",sm:"12px",md:"18px"}}>12</Text> <Image w={{xl:"35px",sm:"12px",md:"18px",lg:"20px"}}   h={{xl:"35px",sm:"12px",md:"18px",lg:"20px"}}  src='/BiRightArrowAlt.png' /> <Heading fontSize={{xl:"48px",lg:"30px",sm:"12px",md:"20px"}} pl={{xl:"12px"}} >Which do you prioritize more? Career or Family?</Heading> </Box>
    <Text pl={{xl:'100px',lg:"50px",sm:"30px"}} fontSize={{xl:"32px",lg:"20px",sm:"10px",md:"16px"}} pt={{xl:"20px",lg:"2px",sm:"2px"}}textColor={"#A5BFFF"}>Please select the right option.</Text>



         <Box display={"flex"} gap={{ xl: "30px", md: "8px", lg: "10px", sm: "3px" }} mt={{ xl: "64px", lg: "20px", sm: "10px", md: "15px" }} pl={{ xl: "105px", lg: "54px", sm: "30px", md: "33px" }} width={{ xl: "70%" }}>
          <Box border={"solid 1px"} w={{ xl: '300px', lg: "150px", sm: "80px", md: "150px" }} h={{ xl: "350px", lg: "175px", sm: "90px", md: "160px" }} bgColor={'rgba(253, 255, 252, 0.10)'} _hover={{ background: 'rgba(253, 255, 252, 0.30)' }} py={{ xl: '50px', lg: "25px", sm: "10px", md: "20px" }} px={{ xl: '35px', lg: "15px", sm: "10px", md: "20px" }} onClick={(e) => handleSubmit("career")}><Image height={{ xl: "224px", lg: "110px", sm: "50px", md: "100px" }} w={{ xl: "224px", lg: "160px", sm: "60px", md: "110px" }} src={"/career.gif"} />
             <Text fontSize={{ xl: "24px", lg: "12px", sm: "8px", md: "12px" }} pt={{ xl: "8px", lg: '4px', md: "5px", sm: "2px" }} textAlign={"center"} >Career</Text>
          </Box>
           <Box border={"solid 1px"} w={{ xl: '300px', lg: "150px", sm: "80px", md: "150px" }} h={{ xl: "350px", lg: "175px", sm: "90px", md: "160px" }} bgColor={'rgba(253, 255, 252, 0.10)'} _hover={{ background: 'rgba(253, 255, 252, 0.30)' }} py={{ xl: '50px', lg: '25px', sm: "10px", md: "20px" }} px={{ xl: '35px', lg: "15px", sm: "10px", md: "20px" }} onClick={(e) => handleSubmit("family")}><Image height={{ xl: "224px", lg: "110px", sm: "50px", md: "100px" }} w={{ xl: "224px", lg: "160px", sm: "60px", md: "110px" }} src={"/family.gif"} />
             <Text fontSize={{ xl: "24px", lg: "12px", sm: "8px", md: "12px" }} pt={{ xl: "8px", lg: '4px', md: "5px", sm: "2px" }} textAlign={"center"}>Family</Text>
           </Box>
          <Box border={"solid 1px"} w={{ xl: '300px', lg: "150px", sm: "80px", md: "150px" }} h={{ xl: "350px", lg: "175px", sm: "90px", md: "160px" }} bgColor={'rgba(253, 255, 252, 0.10)'} _hover={{ background: 'rgba(253, 255, 252, 0.30)' }} py={{ xl: '50px', lg: '25px', sm: "10px", md: "20px" }} px={{ xl: '35px', lg: "15px", sm: "10px", md: "20px" }} onClick={(e) => handleSubmit("both")}><Image height={{ xl: "224px", lg: "110px", sm: "50px", md: "100px" }} w={{ xl: "224px", lg: "160px", sm: "60px", md: "110px" }} src={"/both.gif"} />
            <Text fontSize={{ xl: "24px", lg: "12px", sm: "8px", md: "12px" }} pt={{ xl: "8px", lg: '4px', md: "5px", sm: "2px" }} textAlign={"center"}>I balance both</Text>
          </Box>

        </Box>
        </Box>

       </Box>
  

  )
}

export default Question12




