import React, { useState } from 'react';
import NavigationBar from "../../components/PreAuth/NavigationBar";
import SlideInOnViewAnimation from "../../components/Animations/SlideInOnViewAnimation";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mb-6">
            <button className="text-left w-full text-2xl font-medium text-blue-600 bg-blue-50 p-2 rounded-md" onClick={() => setIsOpen(!isOpen)}>
                {question}
            </button>
            {isOpen && <p className="mt-2 ml-2 text-lg text-gray-700">{answer}</p>}
        </div>
    );
};

const FAQs = () => {
    const faqs = [
        { question: "How do I sign up?", answer: "You can sign up by clicking the 'Get Started' button on the Home Page." },
        { question: "Is there a mobile app?", answer: "Yes, we have a mobile app available on both iOS and Android platforms." },
    ];
    return (
        <div className="min-h-screen flex flex-col pt-40 bg-gray-100">
            <NavigationBar/>
            <SlideInOnViewAnimation>
                <div className="max-w-2xl mx-auto my-8 p-4 bg-white rounded-md shadow-md">
                    <h1 className="text-3xl font-bold font-axiom mb-4">FAQs</h1>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer}/>
                    ))}
                </div>
            </SlideInOnViewAnimation>
        </div>
    );
};
export default FAQs;