"use client"
import { useFormData } from '../context/context';
// Import React, Chakra UI and Tailwind CSS components
import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Flex,Image } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
import { ArrowForwardIcon } from '@chakra-ui/icons'

type optionType = {
    opt_no: string, option: string
}
type Option = {
    value: string;
    opt_no?: string,
    label: string;
};

type Question = {
    id: number;
    text: string;
    subtext: string;
    options: Option[];
};

const option: optionType[] = [
    { opt_no: "A", option: "High School" },
    { opt_no: "B", option: "Bachelor’s" },
    { opt_no: "C", option: "Master’s" },
    { opt_no: "D", option: "Doctorate" },
]

const questions: Question[] = [
    {
        id: 1,
        text: "Which age group do you belong to?",
        subtext: "Could you let us in on which age grup you're part of? You know, the chapter of life your're currently flipping through?",
        options: [
            { value: "under 18 year old", opt_no: "A", label: "under 18 year old" },
            { value: "18-24 year old", opt_no: "B", label: "18-24 year old" },
            { value: "25-34 year old", opt_no: "C", label: "25-34 year old" },
            { value: "35-44 year old", opt_no: "D", label: "35-44 year old" },
            { value: "45-54 year old", opt_no: "E", label: "45-54 year old" },
            { value: "55 year old and above", opt_no: "F", label: "55 year old and above" },
        ],
    },
    {
        id: 2,
        text: "What's your higher level of education?",
        subtext: "Please select the right option",
        options: [
            { value: "High school", label: "High school" },
            { value: "Bachelor's", label: "Bachelor's" },
            { value: "Master's", label: "Master's" },
            { value: "Doctorate", label: "Doctorate" },
        ],
    },
];


// Define a custom component for the animation or transition
const Question4 = () => {
    const [value, setValue] = useState("");
    const [index, setIndex] = useState(0);
    const question = questions[index];

    // const handleChange = (value: any) => {
    //     setValue(value);
    //     setTimeout(() => {
    //         setIndex((index + 1) % questions.length);
    //         setValue("");
    //     }, 1000);
    // };
    const { Step, setStep, formData, setFormData, } = useFormData()
    const [style, setStyle] = useState(false)
    function handleSubmit(e: string) {
        //   e.preventDefault()
        setStyle(true)
        setStep(5)
        // addData(e);
        setFormData({...formData, queFour: e})
    }
    const handleOption = (selectedOPT: any) => {
        console.log(selectedOPT);
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
        <Box display={"flex"} className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
        <Flex  h="100vh" flexDirection={"column"} backgroundColor={"#7EA2FF"}  width={{ sm: "0px", md: "0px", lg: "0px", xl: "56%" }}>
            <Box color={"white"} width={{ sm: "100%", mm: "90%", md: "90%", lg: "80%", xl: "80%" }} display={"flex"} margin={"auto"} justifyContent={"flex-start"} alignItems={"start"}>
                <Box width={{ sm: "40px", md: "40px", lg: "60px", xl: "80px" }}>
                    <Text display={"flex"} fontSize={{ sm: "12px", md: "25px", lg: "28px", xl: "46px" }}
                        paddingX={"10px"} alignItems={"center"}> 4
                        <ArrowForwardIcon paddingRight={{ sm: "5px", md: "12px", lg: "16px", xl: "20px" }}
                            width={{ sm: "14px", md: "25px", lg: "35px", xl: "45px" }} height={{ sm: "14px", md: "25px", lg: "35px", xl: "45px" }} /></Text>
                </Box>
                <Box><Box> 
                    <Box w={{xl:"1000px"}}>
                    <Text fontSize={{ sm: "12px", md: "28px", lg: "30px", xl: "48px" }} display={"flex"} alignItems={"center"}>What’s your highest level of education? </Text>
                    <Text fontSize={{ sm: "10px", md: "12px", lg: "16px", xl: "30px" }} textColor={"#9bc0ff"} pt={"12px"}> Please select the right option</Text>
                    <Text fontSize={{ sm: "8px", md: "12px", lg: "16px", xl: "30px" }} textColor={"#9bc0ff"} py={"5px"}>  </Text>
                    </Box>
                    
                    </Box>
                    <Stack paddingY={{ sm: "3px", md: "10px", lg: "14px", xl: "22px" }} gap={{ sm: "12px", md: "14px", lg: "16px", xl: "24px" }}>
                        {option.map((data: optionType,) => {
                            return <Box onClick={(e) => {
                                handleSubmit(data.option)
                                handleOption(data.option)
                            }}
                                border="1px" borderColor="white" borderRadius={{ sm: "3px", xl: "lg" }}
                                width={{ sm: "60%", md: "35%", lg: "45%", xl: "40%" }}
                                display='flex'
                                alignItems={"center"} padding={{ sm: "3px", md: "", lg: "10px", xl: "20px" }}
                                paddingY={{ sm: "5px", md: "", lg: "10px", xl: "20px" }}
                                paddingX={{ sm: "5px", md: "", lg: "10px", xl: "20px" }}
                                background='rgba(253, 255, 252, 0.30)'
                                _hover={{ backgroundColor: "#9abffe", cursor: "pointer" }} transition="all 0.5s ease-in-out">

                                <Box
                                    width={{ sm: "13px", md: "16px", lg: "20px", xl: "33px" }}
                                    height={{ sm: "13px", md: "16px", lg: "20px", xl: "33px" }}
                                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                                    border="1px" backgroundColor={"#6ea3ff"} borderColor="white" borderRadius="2px">
                                    <Text textAlign={"center"} fontSize={{ sm: "5px", md: "8px", lg: "10px", xl: "14px" }} color={"white"}>{data.opt_no}</Text>
                                </Box>

                                <Text paddingX={{ sm: "12px", md: "12px", lg: "16px", xl: "20px" }}
                                    fontSize={{ sm: "10px", md: "8px", lg: "12px", xl: "20px" }} color={"white"}> {data.option}</Text>
                            </Box>
                        })
                        }
                    </Stack>
                </Box>
            </Box>
            
        </Flex >
        <Box >
        <Image height={{xl:'250px',lg:"10px",md:"0px",sm:"0px"}} width={{xl:"30%",lg:"100px",md:"0px",sm:"0px" }} mt={{xl:"250px"}} mr={{xl:"500px"}} src='/Results1.png'/>
        </Box>
    </Box>
        );
};

export default Question4;