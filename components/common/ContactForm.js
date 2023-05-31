import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ContactForm() {
    return ( <
        section className = "py-20 px-4 lg:px-32 overflow-hidden relative"
        data - aos = "fade-up"
        id = "contact" >
        <
        div className = "container" >
        <
        div className = "flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-200 lg:justify-between -mx-4" >
        <
        div className = "w-full lg:w-1/2 xl:w-6/12 px-4"
        data - aos = "fade-up"
        data - aos - delay = "200" >
        <
        div className = "max-w-[570px] mb-12 lg:mb-0 space-y-4" >
        <
        p className = "uppercase lg:text-3xl text-2xl font-bold text-body-color leading-relaxed stand__out__text mx-5 border-b-4 border-[#da2d55]" >
        GET IN TOUCH WITH US <
        /p> <
        div className = "flex" >
        <
        p className = " lg:text-2xl text-xl font-bold text-body-color leading-relaxed mb-9 mx-5" >
        ADDRESS -
        <
        /p> <
        p className = "text-black lg:text-xl text-md font-semibold" >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <
        /p> <
        /div> <
        div className = "flex lg:space-x-8" >
        <
        p className = " lg:text-2xl text-xl font-bold text-body-color leading-relaxed mb-9 mx-5" >
        EMAIL -
        <
        /p> <
        p className = "text-black lg:text-xl text-md font-semibold" >
        outrank @gmail.com outrank @gmail.com <
        /p> <
        /div> <
        div className = "flex" >
        <
        p className = "lg:text-2xl text-xl font-bold text-body-color leading-relaxed mb-9 mx-5" >
        PHONE NO. -
        <
        /p> <
        p className = "text-black lg:text-xl text-md font-semibold" >
        +91 XXXXXXXXXX <
        /p> <
        /div> <
        div className = "flex px-4 gap-2 space-x-4" >
        <
        div className = " " >
        <
        FaFacebookF className = "rounded-full bg-black text-white w-12 h-12 text-center p-3 hover:bg-[#da2d55] hover:scale-110 duration-500" / >
        <
        /div> <
        div className = " " >
        <
        FaInstagram className = "rounded-full bg-black text-white w-12 h-12 text-center p-3 hover:bg-[#da2d55] hover:scale-110 duration-500" / >
        <
        /div> <
        div className = " " >
        <
        FaTwitter className = "rounded-full bg-black text-white w-12 h-12 text-center p-3 hover:bg-[#da2d55] hover:scale-110 duration-500" / >
        <
        /div> <
        div className = " " >
        <
        FaYoutube className = "rounded-full bg-black text-white w-12 h-12 text-center p-3 hover:bg-[#da2d55] hover:scale-110 duration-500" / >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "w-full lg:w-1/2 xl:w-5/12 px-4"
        data - aos = "fade-up"
        data - aos - delay = "500"
        data - aos - duration = "2000" >
        <
        div className = "bg-white  relative rounded-xl lg:px-4 py-6 px-4 lg:py-12 shadow-2xl" >
        <
        form >
        <
        div className = "grid grid-cols-2 gap-2 " >
        <
        div className = "flex mb-6 border rounded-lg items-center px-2 border-gray-400" >
        <
        img src = "assets/images/person.png" / >
        <
        input type = "name"
        placeholder = "First Name"
        className = "border-1 rounded-lg
        w - full p - 3 text - gray - 800 border - gray - 300 outline - none focus - visible: shadow - none focus: border - [#da2d55]
        "
        name = "firstname"
        id = "firstname" /
        >
        <
        /div> <
        div className = "flex mb-6 border rounded-lg items-center px-2 border-gray-400" >
        <
        img src = "assets/images/person.png" / >
        <
        input type = "name"
        placeholder = "Last Name"
        className = "border-1 rounded-lg
        w - full p - 3 text - gray - 800

        outline - none focus - visible: shadow - none focus: border - [#da2d55]
        "
        name = "lastname"
        id = "lastname" /
        >
        <
        /div> <
        /div> <
        div className = "mb-6 flex justify-center items-center border rounded-lg px-2 border-gray-400" >
        <
        img src = "assets/images/email.png" / >
        <
        input type = "email"
        placeholder = "Email ID"
        className = "
        w - full p - 3 text - gray - 800

        border - gray - 300

        outline - none focus - visible: shadow - none focus: border - [#da2d55]
        "
        name = "email"
        id = "email" /
        >
        <
        /div> <
        div className = "mb-6 flex justify-center items-center border rounded-lg px-2 border-gray-400" >
        <
        img src = "assets/images/phone.png" / >
        <
        input type = "phone"
        placeholder = "Phone Number"
        className = "
        w - full p - 3 text - gray - 800

        border - gray - 300

        outline - none focus - visible: shadow - none focus: border - [#da2d55]
        "
        name = "phone"
        id = "phone" /
        >
        <
        /div>

        <
        div className = "mb-6 flex justify-center  border rounded-lg px-2 border-gray-400" >
        <
        div >
        <
        img src = "assets/images/message.png"
        className = "pt-5" / >
        <
        /div> <
        textarea type = "text"
        placeholder = "Type Message"
        className = "
        w - full p - 3 text - gray - 800

        border - gray - 300

        outline - none focus - visible: shadow - none focus: border - [#da2d55]
        "
        name = "email"
        id = "email" /
        >
        <
        /div> <
        div >
        <
        button type = "submit"
        className = "
        w - 40 text - lg font - semibold text - white

        bg - black rounded - lg border border - [#da2d55]

        p - 2 transition ease - in -out duration - 500 hover: bg - [#da2d55]
        " >
        SEND <
        /button> <
        /div> <
        /form> <
        div >
        <
        span className = "absolute -right-20 top-[170px] z-[-1] floating" >
        <
        img src = "assets/images/Ellipse 42.png" / >
        <
        /span> <
        span className = "absolute -left-20 -top-10 z-[-1] " >
        <
        img src = "assets/images/Group 316.png"
        className = "floating" / >
        <
        /span> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section>
    );
}