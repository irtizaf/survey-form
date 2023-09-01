"use client"
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Image, Text, Input } from "@chakra-ui/react"
import { BiRightArrowAlt } from 'react-icons/bi'
import { color } from 'framer-motion'
import { useFormData } from '../context/context'

const Question17 = ({ data }: any) => {
    const { step, setStep, formData, setFormData, addData } = useFormData()
    const [style, setStyle] = useState(false)
    function handleSubmit() {
      // e.preventDefault()
      setStyle(true)
      setStep(1)
      
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
        <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} justifyContent={"space-around"} className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
            <Box height={{ sm: "80%", mm: "80%", md: "70%", lg: "70%", xl: "70%", "2xl": "70%" }}
                width={{ sm: "90%", mm: "70%", md: "80%", lg: "", xl: "80%", "2xl": "80%" }}
                margin={{ sm: "auto" }}
                display={"flex"} alignItems={"start"} gap={{ sm: "10px", md: "12px", lg: "", xl: "25px", "2xl": "25px" }}>

                <Box display={"flex"} justifyContent={"space-around"} mt={"35px"} alignItems={"center"} >
                    <Text fontSize={{ sm: "10px", md: "18px", lg: "24px", xl: "48px", "2xl": "44px" }} textColor={"#FFF"}
                    >17</Text>
                    <Text fontSize={{ sm: "10px", md: "16px", lg: "22px", xl: "32px", "2xl": "35px" }} textColor={"#FFF"}>
                        <BiRightArrowAlt />
                    </Text>
                </Box>

                <Box width={"80%"}>
                    <Box display={"flex"} >
                        <Box mt={"10"}>
                            <Text fontSize={{ sm: "10px", md: "18px", lg: "28px", xl: "48px", "2xl": "44px" }} textColor={"#FFF"}
                                lineHeight={{ sm: "5px", mm: "22px", md: "28px", lg: "40px", xl: "55px", "2xl": "60px" }}
                            >And finally, what's your phone number?</Text>
                            <Text fontSize={{ sm: "10px", md: "14px", lg: "20px", xl: "32px", "2xl": "32px" }} textColor={"#A5BFFF"}
                                paddingTop={{ sm: "4px", md: "10px", lg: "12px", xl: "12px", "2xl": "15px" }}
                            >We'll use this for all future communications.</Text>
                        </Box>
                        <Box>
                            <Image src={"/Phone.png"} width={{sm: "100px", md: "200px", lg: "350px", xl: '170px', "2xl": "500px"}} alt='Email' />
                        </Box>

                    </Box>
                    <Box 
                        paddingY={{ sm: "10px", mm: "20px", md: "20px", lg: "25px", xl: "35px", "2xl": "54px" }}>
                        <Input placeholder='name@example.com'
                                _placeholder={{color:"#A5BFFF"}}
                                px={"none"}
                        
                            fontSize={{sm: "10px", lg: "20px", xl: '24px', "2xl": "32px"}}
                            paddingY={{"2xl": "3px"}}
                            width={{sm: "200px", md: "320px", lg: "500px", xl: '850px', "2xl": "900px"}}
                            height={{sm:"20px",lg:"60px"}}
                            border={"0"}
                            rounded={"none"}
                            borderBottom={"1px"}
                            borderColor={""}
                            // borderBottomColor={"white"}
                            onClick={()=> handleSubmit()}
                            textColor={"#FFF"}
                        ></Input>
                    </Box>
                </Box>
            </Box>

        </Flex>
    )
}

export default Question17