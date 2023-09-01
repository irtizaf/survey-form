// "use client"
// import ReactFlagsSelect from "react-flags-select";
// import React, { useEffect, useState } from "react";
// import { Box, Heading, Text, Flex, Input, useBreakpointValue } from "@chakra-ui/react";
// import "tailwindcss/tailwind.css";
// import { ArrowForwardIcon } from '@chakra-ui/icons'
// import { form_data } from "@/data";
// import { useFormData } from '../context/context';
// import { warning } from "framer-motion";
// const Question1 = () => {
//   const [selected, setSelected] = useState("");


//   if (selected) {
//     console.log("you created droped and selected country are", selected)
//   }

//   const question2_data = form_data[0]

//   const { Step, setStep, formData, setFormData, addData } = useFormData()
//   const [style, setStyle] = useState(false)
//   function handleSubmit(e: any) {
    
//     setStyle(true)
//     setTimeout(() => {
//       setStep(2)
//     }, 500);
//     addData(e);
//   //  setFormData(e)

//    console.log("context data is updated", formData)
    
//     setSelected(e)
//   }
 
//   console.log(style)
//   useEffect(() => {
//     const elements = document.querySelectorAll(
//       ".initialPosition"
//     );
//     // Create an intersection observer
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Add the "animate" class when the element is in the viewport
//           entry.target.classList.add("animate");
//         }
//       });
//     });
//     elements.forEach((element) => {
//       observer.observe(element);  
//     });
//   }, [])
//   return (
//     <Flex h="100vh" overflow={'hidden'} flexDirection={"column"} bg={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} transform={`${style ? 'translateY(0px)' : 'translateY(350px)'}`} opacity={`${style ? '0' : '1'}`}>

//       <Box
      
//         color={"white"}
//         width={{ sm: "100%", mm: "90%", md: "90%", lg: "80%", xl: "80%" }} height={"50%"}
//         display={"flex"} margin={"auto"} justifyContent={"flex-start"} alignItems={"start"}>

//         <Box width={{ sm: "35px", md: "40px", lg: "60px", xl: "80px" }}>
//           <Text display={"flex"} alignItems={"center"}
//             fontSize={{ sm: "15px", md: "23px", lg: "28px", xl: "46px" }}
//             paddingX={"5px"} > 1
//             <ArrowForwardIcon paddingRight={{ sm: "5px", md: "12px", lg: "16px", xl: "20px" }}
//               width={{ sm: "18px", md: "25px", lg: "35px", xl: "45px" }}
//               height={{ sm: "18px", md: "25px", lg: "35px", xl: "45px" }} /></Text>
//         </Box>
//         <Box>
//           <Text fontSize={{ sm: "15px", md: "24px", lg: "30px", xl: "48px" }}
//             display={"flex"} alignItems={"center"}>
//             {question2_data.text}
//           </Text>
//           <Text fontSize={{ sm: "10px", md: "15px", lg: "16px", xl: "30px" }} textColor={"#9bc0ff"}
//             pt={"12px"}>{question2_data.subtext}</Text>
//           <Box paddingY={"15px"} width={{ sm: "100%", md: "70%", lg: "70%", xl: "40%" }} >
//             <ReactFlagsSelect
//               selectButtonClassName=''
//               selected={selected}
//               onSelect={(e) => handleSubmit(e)}
//               placeholder={"Please select your country"}
//               className='menu-flags '
              
              
//             />

//           </Box>
//         </Box>

//       </Box>
//     </Flex>

//   );
// };

// export default Question1;



"use client"
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { BiRightArrowAlt } from 'react-icons/bi'
import Dropdown from './dropdown'
import { useFormData } from '../context/context'

const Question1 = ({ data }: any) => {
    // data.options.map((data: any) => {
    //     console.log(data);
    // })
    const { step, setStep, formData, setFormData } = useFormData()
    const [style, setStyle] = useState(false)

 
        

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
        <Flex height={{sm: "100vh"}} backgroundColor={"#7EA2FF"}  overflow={'hidden'} flexDirection={"column"} bg={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} transform={`${style ? 'translateY(0px)' : 'translateY(350px)'}`} opacity={`${style ? '0' : '1'}`}>
            <Box height={{sm: "90%", mm: "80%", md: "70%", lg: "", xl: "70%", "2xl": "70%"}} 
            width={{sm: "90%", md: "85%", lg: "", xl: "85%", "2xl": "85%"}} 
            margin={{sm: "auto"}} 
            display={"flex"} alignItems={"start"} gap={{sm: "10px", md: "12px", lg: "", xl:"25px", "2xl": "25px"}}>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text fontSize={{ sm: "12px", md: "20px", lg: "", xl: "40px", "2xl": "48px" }} textColor={"#FFF"}
                    onClick={()=>{
                      console.log("clicked text headug")
                    }}
                    >1</Text>
                    <Text fontSize={{ sm: "10px", md: "16px", lg: "", xl: "28px", "2xl": "35px" }} textColor={"#FFF"}>
                        <BiRightArrowAlt />
                    </Text>
                </Box>

                <Box >
                    <Box>
                        <Text fontSize={{ sm: "12px", md: "22px", lg: "", xl: "40px", "2xl": "48px"  }} textColor={"#FFF"}
                        paddingX={{sm: "3px", md: "6px", xl:"15px"}}
                        >Where do you live?</Text>
                        <Text fontSize={{ sm: "10px", md: "14px", lg: "", xl: "28px", "2xl": "32px" }} pl={{ sm: "0px", md: "0px", lg: "0px", xl: "18px", "2xl": "0px" }} textColor={"#A5BFFF"}
                            paddingTop={{ sm: "4px", md: "10px", lg: "", xl: "15px", "2xl": "15px" }}
                        >Which part of this big, round Earth do you call home?</Text>
                    </Box>
                    <Box display={{sm:"flex"}}  flexWrap={"wrap"}
                        gap={{ sm: "10px", md: "", lg: "", xl: "30px", "2xl": "30px" }} 
                        paddingY={{ sm: "15px", mm: "20px", md: "30px", lg: "", xl: "64px", "2xl": "64px" }} pl={{ sm: "0px", md: "0px", lg: "0px", xl: "18px", "2xl": "0px" }}>
                        <Dropdown/>
                    </Box>
                </Box>
            </Box>

        </Flex>
    )
                
}

export default Question1