import React from 'react';
import NavigationBar from "../../components/PreAuth/NavigationBar";
import SlideInOnViewAnimation from "../../components/Animations/SlideInOnViewAnimation";

const ContactForm = () => {
    return (
        <form className="max-w-lg mx-auto my-8">
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium font-axiom">Your Name</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium font-axiom">Your Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium font-axiom">Your Message</label>
                <textarea id="message" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required></textarea>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-axiom rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    );
};

const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col pt-40">
            <NavigationBar />
            <SlideInOnViewAnimation>
                <ContactForm />
            </SlideInOnViewAnimation>
        </div>
    );
};

export default ContactUs;