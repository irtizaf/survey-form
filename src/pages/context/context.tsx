"use client"
import { useState, createContext, useContext } from "react";
import {useEffect} from "react"

const initial_context = {
    queOne: "",
    queTwo: "",
    queThree: "",
    queFour: "",
    queFive: "",
    queSix: "",
    queSeven: "",
    queEight: "",
    queNine: "",
    queTen: "",
    queEleven: "",
    queTwelve: "",
    queThir: "",
    queForteen: "",
    queFifteen: "",
    queSixteen: "",
    queSeventeen: ""
  }

  export type data = {
    [x: string]: string | string[]
};

export const FormContext = createContext<any>(null);

export default function FormProvider({ children }: any) {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<data>(initial_context);
    const key = "form-responses"
    // const [formData, setFormData] = useState([{
    //     Question1:" ",
    //     Question2:" ",
    //     Question3:" "
    // }]);

    // const addData = (newdata: any) => {
    //     setFormData((previousdata: any) =>
    //         [...previousdata, newdata]
    //     )
    // }

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('survey-response') as string)
        if (localStorageData !== null) {
            setFormData(localStorageData)
        } else {
            localStorage.setItem('survey-response', JSON.stringify(formData))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(formData));
    },[formData])
    console.log("the updated context is", formData)

    return (
        <FormContext.Provider value={{ step, setStep, formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormData = () => useContext(FormContext); 