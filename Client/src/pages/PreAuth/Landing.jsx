import NavigationBar from "../../components/PreAuth/NavigationBar";
import {useNavigate} from "react-router-dom";
import SlideInOnViewAnimation from "../../components/Animations/SlideInOnViewAnimation";




const MainContent = () => {

    const navigate= useNavigate();

    return (
        <SlideInOnViewAnimation>
            <div className="flex flex-1 items-center justify-center md:justify-start pl-4 md:pl-20 animate-fade-in">
                <div className="max-w-lg w-full text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl text-black font-axiom mb-4">FitConnect</h1>
                    <p className="mb-8 text-black">
                        Connect. Motivate. Achieve.
                    </p>
                    <button onClick={() => navigate('/register')} className=" btn-light">
                        Get Started
                    </button>
                </div>
            </div>
        </SlideInOnViewAnimation>
    );
};




const Background = () => {
    return (
        <div className="absolute inset-0 z-0">
            {/* Background image */}
            <div className="absolute inset-0 bg-landingPageBackground bg-no-repeat bg-cover bg-center" />

            {/* Gradient overlay at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
    );
};
const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col animate-fade-in-0.5">
            <div className="relative h-screen flex flex-col">
                {/* Background */}
                <Background />

                {/* Header */}
                <NavigationBar/>

                {/* Main content */}
                <div className="flex-1 flex items-center z-10">
                    <MainContent />

                </div>
            </div>

        </div>
    );
};

export default LandingPage;