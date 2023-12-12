import linkedin from "../assets/brand/linkedin.png"
import fb from "../assets/brand/fb.png"
import instaram from "../assets/brand/instaram.jpg"
import twitter from "../assets/brand/twitter.png"
import email from "../assets/brand/email.png"
import github from "../assets/brand/github.png"
import { FaMailBulk } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-7 bg-neutral text-neutral-content my-20">
                <aside className="items-center grid-flow-col">
                    <h1 className="text-4xl  font-semibold">Md Mehedi<span className="text-amber-500" > Hasan</span></h1>
                    <div>
                        <p>Copyright © 2023 - All right reserved</p>
                        <div className="flex items-center gap-2"> <FaMailBulk /><p>mdmehedidhl@gmail.com</p></div>
                    </div>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <div className="text-xl mt-1 flex items-center gap-2" ><p>Follow Me On</p><FaLongArrowAltRight /></div>
                    <a href="https://www.linkedin.com/in/md-mehedi-hasan-a937012a0/" ><img className="w-10 h-10  rounded-lg" src={linkedin} /></a>
                    <a href="https://github.com/mdmehedi060" ><img className="w-10 h-10 rounded-lg" src={github} /></a>
                    <a href="https://www.facebook.com/md.hasan.tushar" ><img className="w-10 h-10 rounded-lg" src={fb} /></a>
                    <a href="" ><img className="w-10 h-10 rounded-lg" src={email} /></a>
                    <a href="https://www.instagram.com/mdmehedidhl" ><img className="w-10 h-10 rounded-lg" src={instaram} /></a>
                    <a href="https://twitter.com/MdMehediHa68209" ><img className="w-10 h-10 rounded-lg" src={twitter} /></a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;