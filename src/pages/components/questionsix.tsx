// "use client"
// import ReactFlagsSelect from "react-flags-select";
// import React, { useEffect, useState } from "react";
// import { Box, Heading, Text, Flex, Input, Select } from "@chakra-ui/react";
// import "tailwindcss/tailwind.css";
// import { ArrowForwardIcon } from '@chakra-ui/icons'
// import { useFormData } from '../context/context'


// type optionType = {
//   opt_no: string, option: string
// }
// type Option = {
//   value: string;
//   opt_no?: string,
//   label: string;
// };

// type Question = {
//   id: number;
//   text: string;
//   subtext: string;
//   options: Option[];
// };

// const Question6 = () => {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   interface CountryInfo {
//     name: string;
//     native: string;
//     currency: string;
//     languages: string[];
//     emoji: string;
//     emojiU: string;
//   }
//   const [selected, setSelected] = useState("");
//   if (selected) {
//     console.log("you created droped and selected country are", selected)
//   }

//   const { Step, setStep, formData, setFormData, addData } = useFormData()
//   const [style, setStyle] = useState(false)
//   function handleSubmit(e:string) {
   
//     setStyle(true)
//     setStep(7)
//     setSelected(e)
//     addData(e)
//   }
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
//     <Box className='initialPosition' transitionDuration={'1000ms'} transform={ 'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
//       <Flex h="100vh" flexDirection={"column"} backgroundColor={"#7EA2FF"} >
//         <Box color={"white"} width={{ sm: "100%", mm: "90%", md: "90%", lg: "80%", xl: "80%" }} display={"flex"} margin={"auto"} justifyContent={"flex-start"} alignItems={"start"}>
//           <Box width={{ sm: "35px", md: "40px", lg: "60px", xl: "80px" }}>
//             <Text display={"flex"} fontSize={{ sm: "12px", md: "23px", lg: "28px", xl: "46px" }}
//               paddingX={"5px"} alignItems={"center"}> 6
//               <ArrowForwardIcon paddingRight={{ sm: "5px", md: "12px", lg: "16px", xl: "20px" }}
//                 width={{ sm: "18px", md: "25px", lg: "35px", xl: "45px" }} height={{ sm: "18px", md: "25px", lg: "35px", xl: "45px" }} /></Text>
//           </Box>
//           <Box>
//             <Text fontSize={{ sm: "10px", md: "24px", lg: "30px", xl: "48px" }} display={"flex"} alignItems={"center"}>What’s your monthly household income?</Text>
//             <Text fontSize={{ sm: "10px", md: "15px", lg: "16px", xl: "30px" }} textColor={"#9bc0ff"} pt={"12px"}> Please let us know about your income.</Text>
//             <Box paddingY={"10px"} width={{sm: "80%%", md: "60%", lg: "40%", xl: "70%%"}} fontSize={{ sm: "10px", md: "24px", lg: "48px", xl: "48px" }} >
             
//               <ReactFlagsSelect
//                 selectButtonClassName=''
//                 selected={selected}
//                 onSelect={(e) => handleSubmit(e)}
//                 placeholder={"Please select your country"}
//                 className='menu-flags '
//               />

//             </Box>
//           </Box>
//         </Box>
//       </Flex >

//     </Box>
//   );
// };

// export default Question6;

import Question from "./dropdown1";
import React from 'react'
import { Box, Flex, Heading, Image, Text, Input } from "@chakra-ui/react"
import { BiRightArrowAlt } from 'react-icons/bi'
import {useEffect, useState} from "react"
import axios from "axios"
import { useFormData } from "../context/context";
const Question6 = ({ data }: any) => {
    const [datas, setDatas] = useState([]);
    const { step, setStep, formData, setFormData, addData } = useFormData()
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
        <Flex height={{sm: "100vh"}} backgroundColor={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
            <Box height={{sm: "60%", mm: "70%", md: "70%", lg: "", xl: "60%", "2xl": "70%"}} 
            width={{sm: "90%", mm: "80%", md: "85%", lg: "", xl: "85%", "2xl": "85%"}} 
            margin={{sm: "auto"}} 
            // backgroundColor={"white"}
            display={"flex"} alignItems={"start"} gap={{sm: "10px", md: "12px", lg: "", xl:"25px", "2xl": "25px"}}>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text fontSize={{ sm: "12px", mm: "16px", md: "20px", lg: "", xl: "36px", "2xl": "48px" }} textColor={"#FFF"}
                    >6</Text>
                    <Text fontSize={{ sm: "10px", mm: "12px", md: "16px", lg: "", xl: "24px", "2xl": "35px" }} textColor={"#FFF"}>
                        <BiRightArrowAlt />
                    </Text>
                </Box>

                <Box >
                    <Box>
                        <Text fontSize={{ sm: "12px", mm: "16px", md: "22px", lg: "", xl: "36px", "2xl": "48px"  }} 
                        textColor={"#FFF"}
                        paddingX={{sm: "3px", md: "6px", xl:"15px"}}
                        >What’s your monthly household income?</Text>
                        <Text fontSize={{ sm: "10px", mm: "12px", md: "14px", lg: "", xl: "24px", "2xl": "32px" }} 
                        textColor={"#A5BFFF"}
                            paddingTop={{ sm: "4px", md: "10px", lg: "", xl: "12px", "2xl": "15px" }}
                            pl={{ sm: "0px", md: "0px", lg: "0px", xl: "18px", "2xl": "0px" }} >Please let us know about your income.</Text>
                    </Box>
                    <Box display={{sm:"flex"}}
                        gap={{ sm: "10px", md: "", lg: "", xl: "30px", "2xl": "30px" }} 
                        paddingY={{ sm: "15px", mm: "20px", md: "30px", lg: "", xl: "34px", "2xl": "64px" }}
                        pl={{ sm: "0px", md: "0px", lg: "0px", xl: "18px", "2xl": "0px" }}>
                            
                        <Question/>
                    </Box>
                </Box>
            </Box>

        </Flex>
    )
}

export default Question6






// import { BiRightArrowAlt } from "react-icons/bi";
// import { countries } from "countries-list";

// interface CountryInfo {
//   name: string;
//   currency: string;
//   emoji: string;
// }

// export const Question6 = () => {
//   const countryData: { [key: string]: CountryInfo } = countries;
//   const { Step, setStep, formData, setFormData } = useFormData()
//   const [style, setStyle] = useState(false)
//   const [selected, setSelected] = useState("");
//   function handleSubmit(e: any) {
    
//     setStyle(true)
//     setStep(2)
//     setSelected(e)
//   }
//   return (
//     <>
//       <Box  ml={168} className="menu-flags">
//         <Flex align={"flex-end"} alignItems={"center"}>
//           <Box fontSize={"48px"} color={"#FFF"} fontWeight={300}>
//             6
//           </Box>
//           <Box>
//             <BiRightArrowAlt
//               color="#FFF"
//               style={{ width: "35px", height: "35px" }}
//             />
//           </Box>

//           <Box
//             ml={"30px"}
//             color={"#FFF"}
//             fontWeight={300}
//             fontSize={"48px"}
//             alignItems={"center"}
//           >
//             What’s your monthly household income?
//           </Box>
//         </Flex>
//         <Box
//           color={"#A5BFFF"}
//           fontSize={"32px"}
//           fontWeight={380}
//           ml={20}
//           mb={5}
//         >
//           Please let us know about your income.
//         </Box>
//       </Box>
//       <Box display={"inline-flex"} height={"50px"} bgColor={"#A5BFFF"} ml={249}>
//         <Input
//           defaultValue={"10,000"}
//           color="#FFF"
//           fontSize={"24px"}
//           fontWeight={"380"}
//           width={"300px"}
//           // bgColor={"#A5BFFF"}
//           // height={"50px"}
//           rounded={"none"}
//           borderRightStyle={"none"}
//         />
//         {/* <Box paddingY={"15px"} width={{ sm: "100%", md: "70%", lg: "60%", xl: "30%" }} >
//             <ReactFlagsSelect
//               selectButtonClassName=''
//               onSelect={(e) => setSelected(e)}
//               placeholder={"Please select your country"}
//               className='menu-flags' selected={selected}              
//             />
// </Box> */}
//         <Select
//           rounded={"none"}
//           width={"300px"}
//           height={"100px"}
//           borderLeftStyle={"none"}
//           fontSize={"20px"}
//           fontWeight={"380"}
//           bgColor={"#A5BFFF"}
//           color="#FFF"
//         >
//           {Object.keys(countryData).map((iso) => (
//             <option
//               key={iso}
//               style={{ backgroundColor: "#7EA2FF", color: "#FFF" } }
//                >
//               <Box>{countryData[iso].emoji}</Box>
//               <Box mr={5}>{countryData[iso].currency}</Box>
//               <Box onClick= {setStep(7)}   >{countryData[iso].name}</Box>
//             </option>
//           ))}
          
//         </Select>
//       </Box>
//     </>
//   );
// };

