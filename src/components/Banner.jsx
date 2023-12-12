import img from "../assets/mehedi.jpg"
// import { Typed } from 'react-typed';


const Banner = () => {
    return (
        <div id="home" className="md:flex gap-10 px-2 md:px-20 py-32 p-16 bg-neutral">
            <div className="md:w-1/2 mt-10 mx-auto md:hidden">
                <div className="flex h-full justify-center items-center ">
                    <img className="w-60 h-60 rounded-full" src={img} />
                </div>
            </div>
            <div className="md:w-1/2 mx-auto flex justify-center items-center ">
                <div className="space-y-5 text-center md:text-left">
                    <h1 className=" text-3xl md:text-4xl  font-semibold">
                        {/* <Typed
                            strings={['Hello,<br/> Welcome to my portfolio']}
                            typeSpeed={70}
                        /> */}
                    </h1>
                    <h1 className=" text-4xl text-white md:text-5xl  font-semibold">
                        Hi I am Md Mehedi<span className="text-amber-500" > Hasan</span>
                        {/* <Typed
                            strings={['Hello,<br/> Welcome to my portfolio']}
                            typeSpeed={70}
                        /> */}
                    </h1>
                    <h2 className="text-2xl text-orange-400">Front End Web Developer</h2>
                    <p className="text-emerald-500">Passionate Front-End Developer transforming ideas into captivating digital experiences through code and creativity.</p>
                </div>
            </div>
            <div className="md:w-1/2 mt-10 mx-auto hidden md:block">
                <div className="flex h-full justify-center items-center ">
                    <img className="w-60 h-60 rounded-full" src={img} />
                </div>
            </div>
        </div>
    );
};

export default Banner;