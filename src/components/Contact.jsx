import { MdOutlineMailOutline } from "react-icons/md"
import emailjs from "@emailjs/browser";
import Title from "./Title";
import { FaPhone } from "react-icons/fa";
import { Button, Input, Textarea } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Log form values
        console.log("Name:", form.current.user_name.value);
        console.log("Email:", form.current.user_email.value);
        console.log("Message:", form.current.message.value);

        emailjs
            .sendForm(
                "service_ngj61pm",
                "template_39d1qga",
                form.current,
                "fYc9OsJqwXNOnP2_w"
            )
            .then(
                (result) => {
                    toast.success('Message Sent')
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (

        <div id="contact" className="mb-16  my-10">
            <Title heading={'Contact Me'} />
            <Toaster />
            <div className="md:flex md:gap-20 justify-between items-center text-green-600">
            <div className="flex-1">
            <div className="flex text-white gap-2 my-4">
                    <FaPhone className="text-3xl text-cyan-600"/>
                    <a href="tel:+88017178869593" className="text-2xl"> +8801718869593</a>
                    </div>
                   <div className="flex text-white gap-2 my-4">
                   <MdOutlineMailOutline className="text-3xl text-cyan-600"/>
                   <a href="mailto:mdmehedidhl@gmail.com" className="text-2xl">mdmehedidhl@gmail.com</a>
                   </div>
                   <div className="flex text-white gap-2">
                   <IoLocationOutline className="text-3xl text-cyan-600"/>
                   <address className="text-2xl">Tanagail Sadar,Dhaka,Bangladesh</address>
                   </div>
                </div>
                <form className="flex-1 md:w-1/2 mx-auto space-y-8 " ref={form} onSubmit={sendEmail}>
                    <div>
                        <Input placeholder="Name"  label="Name" color="red" required type="text" name="user_name" />
                    </div>
                    <div>
                        <Input placeholder="Email" label="Email" color="purple" required type="email" name="user_email" />
                    </div>
                    <div>
                        <Textarea placeholder="Message" label="Message" color="indigo" required name="message" />
                    </div>
                    <Button color="blue" className="btn btn-success w-full " type="submit" >Send</Button>
                </form>
               
            </div>
        </div>
    );
};

export default Contact;
