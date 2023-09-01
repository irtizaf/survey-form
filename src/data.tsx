type Option = {
    value?: string;
    label?: string;
    opt_no?: string;
    src?: string;
};

type Question = {
    id: number;
    text: string;
    subtext: string;
    options: Option[];
};

export const form_data: Question[] = [
    {
        id: 1,
        text: "Where do you live?",
        subtext: "Which part of this big, round Earth do you call home? ",
        options: [],
    },
    {
        id: 2,
        text: "What’s your gender?",
        subtext: "Please click on your gender.",
        options: [
            { value: "male", label: "Female", src: "/female.gif" },
            { value: "female", label: "Male", src: "/male.gif" },
        ],
    },
    {
        id: 3,
        text: "Which age group do you belong to?",
        subtext: "Could you let us in on which age group you're part of? You know, the chapter of life you're currently flipping through?",
        options: [
            { value: "Under 18 years old", opt_no: "A", label: "Under 18 years old" },
            { value: "18-24 years old", opt_no: "B", label: "18-24 years old" },
            { value: "25-34 years old", opt_no: "C", label: "25-34 years old" },
            { value: "35-44 years old", opt_no: "D", label: "35-44 years old" },
            { value: "45-54 years old", opt_no: "E", label: "45-54 years old" },
            { value: "55 years old and above", opt_no: "F", label: "55 years old and above" },
        ],
    },
    {
        id: 4,
        text: "What’s your highest level of education?",
        subtext: "Please select the right option",
        options: [
            { value: "High school", opt_no: "A", label: "High school" },
            { value: "Bachelor's", opt_no: "B", label: "Bachelor's" },
            { value: "Master's", opt_no: "C", label: "Master's" },
            { value: "Doctorate", opt_no: "D", label: "Doctorate" },
        ],
    },
    {
        id: 5,
        text: "Are you currently employed?",
        subtext: "Please select the right option.",
        options: [
            { value: "yes", src: "/yes.gif", label: "yes" },
            { value: "no", src: "/no.gif", label: "no" },
        ],
    },
];