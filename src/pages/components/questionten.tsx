



import React, { useEffect } from 'react'
import { Box, Heading,Text,Image } from '@chakra-ui/react'
import { Button,  useDisclosure } from '@chakra-ui/react'
import  {Lemonada } from 'next/font/google'
const lemonada = Lemonada({subsets:['latin']})
import { useFormData } from '../context/context';
import { useState } from 'react';

import { BsArrowRightShort } from "react-icons/bs"










const Question10 = () => {
  const { step, setStep, formData, setFormData } = useFormData()
  const [style, setStyle] = useState(false)
  function handleSubmit(e: string) {
    // e.preventDefault()
    setStyle(true)
    if (formData.queTwo== "female"){
      setStep(13)

    }
    else {
      setStep(11)
    }
    
    // addData(e);
    setFormData({...formData, queTen: e})
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
    
   
    <Box  >
     
     <Box className='initialPosition' transitionDuration={'1000ms'} transform={ 'translateY(350px)'} opacity={`${style ? '0' : '1'}`}  pt={{xl:'198px',lg:"110px",sm:"70px",md:"80px"}} pl={{xl:"162px", lg:'100px',sm:"10px",md:"60px"}} background={"#7EA2FF"} height={{xl:"1088",lg:"0px",sm:"00"}}  textColor={"#ffff"} > <Box display={"flex"} ><Text fontSize={{xl:"48", lg:"20px",sm:"12px",md:"18px"}}>10</Text> <Image w={{xl:"35px",sm:"20px",md:"18px",lg:"20px"}}   h={{xl:"35px",sm:"12px",md:"18px",lg:"20px"}} mt={{xl:"22px",lg:"6px"}}  src='/BiRightArrowAlt.png' /> <Heading fontSize={{xl:"40px",lg:"20px",sm:"12px",md:"20px"}} pl={{xl:"30px",lg:"10px"}} lineHeight={"normal"} width={{xl:"80%",lg:"80%"}}>People who have faced a lot of failures in life often
 blame their elementary education for their 
misfortune because they couldn’t afford good 
schooling and never got the better opportunities in 
life. How strongly do you feel about this?</Heading> </Box>
    <Text pl={{xl:'100px',lg:"50px",sm:"30px"}} fontSize={{xl:"32px",lg:"15px",sm:"10px",md:"16px"}} pt={{xl:"20px",lg:"2px",sm:"2px"}}textColor={"#A5BFFF"}>Please select the right option.</Text>



         <Box display={"flex"} gap={{ xl: "57px", md: "8px", lg: "10px", sm: "3px" }} mt={{ xl: "64px", lg: "20px", sm: "10px", md: "15px" }} pl={{ xl: "0px", lg: "54px", sm: "30px", md: "33px" }} >
          <Box border={"solid 1px"} w={{ xl: '250px', lg: "150px", sm: "80px", md: "150px" }} h={{ xl: "250px", lg: "175px", sm: "90px", md: "160px" }} bgColor={'rgba(253, 255, 252, 0.10)'} _hover={{ background: 'rgba(253, 255, 252, 0.30)' }} py={{ xl: '25px', lg: "25px", sm: "10px", md: "20px" }} px={{ xl: '50px', lg: "25px", sm: "10px", md: "20px" }} onClick={(e) => handleSubmit("career")}><Image height={{ xl: "150px", lg: "90px", sm: "50px", md: "100px" }} w={{ xl: "150px", lg: "90px", sm: "60px", md: "110px" }} src={"/sAgree.gif"} />
             <Text fontSize={{ xl: "20px", lg: "12px", sm: "8px", md: "12px" }} pt={{ xl: "0px", lg: '4px', md: "5px", sm: "2px" }} width={{xl:""}} lineHeight={"normal"} >I strongly agree</Text>
          </Box>
           <Box border={"solid 1px"} w={{ xl: '250px', lg: "150px", sm: "80px", md: "150px" }} h={{ xl: "250px", lg: "175px", sm: "90px", md: "160px" }} bgColor={'rgba(253, 255, 252, 0.10)'} _hover={{ background: 'rgba(253, 255, 252, 0.30)' }} py={{ xl: '62px', lg: '45px', sm: "10px", md: "20px" }} px={{ xl: '45px', lg: "25px", sm: "10px", md: "20px" }} onClick={(e) => handleSubmit("family")}><Image height={{ xl: "80px", lg: "70px", sm: "50px", md: "100px" }} w={{ xl: "122px", lg: "85px", sm: "60px", md: "110px" }} pb={{ xl:"0px",lg:"15px"}} pl={{xl:"40px",lg:"15px"}} src={"/thums.gif"} />
             <Text fontSize={{ xl: "20px", lg: "12px", sm: "8px", md: "12px" }} lineHeight={"normal"} pt={{ xl: "33px", lg: '4px', md: "5px", sm: "2px" }} >I somewhat agree</Text>
           </Box>
          <Box border={"solid 1px"} w={{ xl: '250px', lg: "150px", sm: "80px", md: "150px" }} h={{ xl: "250px", lg: "175px", sm: "90px", md: "160px" }} bgColor={'rgba(253, 255, 252, 0.10)'} _hover={{ background: 'rgba(253, 255, 252, 0.30)' }} py={{ xl: '62px', lg: '45px', sm: "10px", md: "20px" }} px={{ xl: '47px', lg: "20px", sm: "10px", md: "20px" }} onClick={(e) => handleSubmit("both")}><Image height={{ xl: "90px", lg: "60px", sm: "50px", md: "100px" }} w={{ xl: "122px", lg: "80px", sm: "60px", md: "110px" }} pl={{xl:"34px",lg:"25px"}} pb={{ xl:"0px",lg:"5px"}} src={"/con.gif"} />
            <Text fontSize={{ xl: "20px", lg: "12px", sm: "8px", md: "12px" }} pl={{xl:"0px",lg:"13px"}} pt={{ xl: "8px", lg: '4px', md: "5px", sm: "2px" }} >I don’t have any idea about this</Text>
          </Box>
          <Box border={"solid 1px"} w={{ xl: '250px', lg: "150px", sm: "80px", md: "150px" }} h={{ xl: "250px", lg: "175px", sm: "90px", md: "160px" }} bgColor={'rgba(253, 255, 252, 0.10)'} _hover={{ background: 'rgba(253, 255, 252, 0.30)' }} py={{ xl: '62px', lg: '50px', sm: "10px", md: "20px" }} px={{ xl: '30px', lg: "15px", sm: "10px", md: "20px" }} onClick={(e) => handleSubmit("both")}><Image height={{ xl: "80px", lg: "51px", sm: "50px", md: "100px" }} w={{ xl: "135px", lg: "85px", sm: "60px", md: "110px" }} pl={{xl:"34px",lg:"31px"}} src={"/thumD.gif"} />
            <Text fontSize={{ xl: "20px", lg: "12px", sm: "8px", md: "12px" }} pl={{xl:"0px",lg:"4px"}} pt={{ xl: "8px", lg: '20px', md: "5px", sm: "2px" }} >I somewhat disagree</Text>
          </Box>
          <Box border={"solid 1px"} w={{ xl: '250px', lg: "150px", sm: "80px", md: "150px" }} h={{ xl: "250px", lg: "175px", sm: "90px", md: "160px" }} bgColor={'rgba(253, 255, 252, 0.10)'} _hover={{ background: 'rgba(253, 255, 252, 0.30)' }} py={{ xl: '62px', lg: '45px', sm: "10px", md: "20px" }} px={{ xl: '47px', lg: "18px", sm: "10px", md: "20px" }} onClick={(e) => handleSubmit("both")}><Image height={{ xl: "90px", lg: "60px", sm: "50px", md: "100px" }} w={{ xl: "122px", lg: "80px", sm: "60px", md: "110px" }} pl={{xl:"34px",lg:"27px"}} pb={{ xl:"0px",lg:"5px"}} src={"/SDAgree.gif"} />
            <Text fontSize={{ xl: "20px", lg: "12px", sm: "8px", md: "12px" }} pl={{xl:"0px",lg:"8px"}} pt={{ xl: "8px", lg: '4px', md: "5px", sm: "2px" }} >I strongly disagree</Text>
          </Box>

        </Box>
        </Box>

       </Box>
  

  )
}

export default Question10




