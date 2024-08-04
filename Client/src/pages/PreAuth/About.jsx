import NavigationBar from "../../components/PreAuth/NavigationBar";
import SlideInOnViewAnimation from "../../components/Animations/SlideInOnViewAnimation";

const AboutContent = () => {
    return (
        <SlideInOnViewAnimation>
            <div className="flex items-center justify-center md:justify-between pl-4 md:pl-20 pr-4 md:pr-20 animate-fade-in">
                <div className="max-w-lg w-full text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl text-black font-axiom mb-4">About</h1>
                    <p className="mb-4 text-black text-lg">
                        FitConnect is a platform designed to bring fitness enthusiasts together. Whether you're a beginner or a seasoned athlete, our community provides the tools and support needed to reach your fitness goals.
                    </p>
                    <p className="mb-4 text-black text-lg">
                        Our mission is to connect, motivate, and help you achieve your fitness aspirations through a supportive network and innovative features.
                    </p>
                    <p className="mb-4 text-black text-lg">
                        Founded by fitness lovers, for fitness lovers, FitConnect is committed to creating a space where everyone can thrive and become the best version of themselves.
                    </p>
                </div>

            </div>
        </SlideInOnViewAnimation>
    );
};



const About = () => {
    return (
        <div className="min-h-screen flex flex-col animate-fade-in-0.5">
            <div className="relative h-screen flex flex-col">

                {/* Header */}
                <NavigationBar/>

                {/* Main content */}
                <div className="flex flex-1 items-center z-10">
                    <AboutContent />
                </div>
            </div>
        </div>
    );
};

export default About;