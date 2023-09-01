'use client'
const options = [
    {
      value:
        "Yes, my parents focused on my education from childhood and support me in my career",
      opt_no: "A",
      label:
        "Yes, my parents focused on my education from childhood andsupport me in my career",
    },
    {
      value: "My parents focused on my academic qualification but do not encourage me in my career",
      opt_no: "B",
      label: "My parents focused on my academic qualification but do not encourage me in my career",
    },
    {
      value: "No, my parents never focused on my education or career",
      opt_no: "C",
      label: "No, my parents never focused on my education or career",
    },
    {
      value: "No, my parents do not allow me to work",
      opt_no: "D",
      label: "No, my parents do not allow me to work",
    },
  ]

 
  import React, { useEffect, useState } from 'react'
  import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
  import { BiRightArrowAlt } from 'react-icons/bi'
import { useFormData } from '../context/context'
  
  const Question14 = ({ data }: any) => {
     
      const { step, setStep, formData, setFormData, addData } = useFormData()
      const [style, setStyle] = useState(false)
      function handleSubmit(selected: any) {
        // e.preventDefault()
        setStyle(true)
        setStep(15)
        setFormData({...formData, queForteen: selected})
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
          <Flex height={{sm: "100vh"}} backgroundColor={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
              <Box height={{sm: "80%", mm: "80%", md: "80%", lg: "70%", xl: "80%", "2xl": "80%"}} 
              width={{sm: "90%", md: "85%", lg: "", xl: "80%", "2xl": "90%"}} 
              margin={{sm: "auto"}} 
              display={"flex"} alignItems={"start"} gap={{sm: "10px", md: "12px", lg: "", xl:"25px", "2xl": "25px"}}>
  
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                      <Text fontSize={{ sm: "12px", md: "18px", lg: "24px", xl: "38px", "2xl": "44px" }} textColor={"#FFF"}
                      >14</Text>
                      <Text fontSize={{ sm: "10px", md: "16px", lg: "16px", xl: "26px", "2xl": "35px" }} textColor={"#FFF"}>
                          <BiRightArrowAlt />
                      </Text>
                  </Box>
  
                  <Box >
                      <Box>
                          <Text fontSize={{ sm: "12px", md: "18px", lg: "24px", xl: "34px", "2xl": "44px"  }} textColor={"#FFF"}
                          paddingX={{sm: "3px", md: "6px", xl:"18px"}}
                          lineHeight={{sm: "20px",mm: "22px", md: "28px", lg: "40px", xl: "55px", "2xl": "65px"}}
                          >Did your parents support you with your education
                          and career?</Text>
                      </Box>
                      <Box display={"flex"} flexDirection={"column"}
                          gap={{ sm: "8px", md: "12px", lg: "15px", xl: "20px", "2xl": "30px" }} 
                          paddingY={{ sm: "15px", mm: "20px", md: "20px", lg: "45px", xl: "35px", "2xl": "54px" }}>
                          {
                              options.map((data: any) => {
                                  return <Box border={"1px"} borderColor={"white"} 
                                  backgroundColor={"rgba(253, 255, 252, 0.10)"}
                                  display={"flex"} alignItems={"center"} 
                                  gap={{ sm: "10px", md: "12px", lg: "12px", xl: "18px", "2xl": "22px" }}
                                  width={{ sm: "250px",mm: "250px", md: "400px", lg: "600px", xl: "800px", "2xl": "1000px" }}
                                  paddingX={{ sm: "8px", md: "12px", lg: "16px", xl: "18px", "2xl": "20px" }}
                                  paddingY={{ sm: "10px", md: "12px", lg: "16px", xl: "18px", "2xl": "20px" }}
                                  onClick={()=> handleSubmit(data.value)}

                                  >
                                      <Box
                                      border={"1px"} borderColor={"white"} 
                                      width={{ sm: "18px", md: "18px", lg: "26px", xl: "26px", "2xl": "30px" }}
                                      paddingX={{ sm: "2px", md: "4px", lg: "2px", xl: "4px", "2xl": "6px" }} 
                                      paddingY={{ sm: "1px", md: "4px", lg: "1px", xl: "3px", "2xl": "5px" }} 
                                      fontSize={{ sm: "6px", md: "10px", lg: "12px", xl: "12px", "2xl": "20px" }} 
                                      // padding={"4px"}
                                      textColor={"white"}
                                      textAlign={"center"}
                                      >{data.opt_no}</Box>
                                      <Text
                                      fontSize={{ sm: "8px", md: "12px", lg: "14px", xl: "16px", "2xl": "22px" }}
                                      textColor={"white"}
                                      >{data.label}</Text>
                                  </Box>
                              })
                          }
                      </Box>
                  </Box>
              </Box>
  
          </Flex>
      )
  }
  
  export default Question14