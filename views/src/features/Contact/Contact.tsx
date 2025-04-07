import { BasicProps } from "../../types/types"
import { SocialMedia } from "./SocialMedia/SocialMedia";
import Gmail from "../../images/Gmail.svg";
import LinkedIn from "../../images/LinkedIn.png";
import GitHub from "../../images/Github2.svg";
import { FormEvent, forwardRef, useEffect, useState } from "react";
import { CustomTextInput } from "../../components/CustomTextInput";
import { CustomTextArea } from "../../components/CustomTextArea";
import { CustomSelect } from "../../components/CustomSelect";
import emailjs from "emailjs-com";
import { Loading } from "../../components/Loading";



export const Contact = forwardRef<HTMLDivElement, BasicProps>(({ darkMode }, ref) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [reason, setReason] = useState("Select reason");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSelectChange = (value: string) => {
        setReason(value);
    };

    const options = ["Invite you to apply for a job", 'Hire you for a project', "Find out more about your services"];


    const validatePhone = (value: string) => {
        return value.replace(/[^0-9]/g, '');
    }

    const handleSubmitContactForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const templateParams = {
            user_name: name,
            user_email: email,
            user_phone: phone,
            user_message: message,
            contact_reason: reason,
        };

        emailjs
            .send(
                "service_pbn95ij", // Replace with your Service ID
                "template_uzfcsvi", // Replace with your Template ID
                templateParams,
                "cOJdV3VKP9NHYeC4_" // Replace with your User ID
            )
            .then(
                (response) => {
                    setStatus("Message sent successfully!");
                    setName("");
                    setEmail("");
                    setPhone("");
                    setReason("Select reason");
                    setMessage("");
                    setLoading(false);
                },
                (err) => {
                    setStatus("Something went wrong, please try again.");
                    setLoading(false);
                }
            );
    }

    useEffect(() => {
        if (status) {
            setTimeout(() => {
                setStatus("")
            }, 4000)
        }
    }, [status])


    return (
        <div ref={ref} className={`w-full py-20 flex flex-col items-center ${darkMode ? 'bg-customDarkPurple text-customPinkLight' : 'bg-customPinkLight text-customPurple'} overflow-hidden`}>
            <h1 className="text-4xl font-bold pb-4">Contact Me</h1>
            <div className="flex items-center justify-evenly flex-wrap gap-y-4 w-full lg:w-3/4 ">
                <div>
                    <SocialMedia
                        src={Gmail}
                        name="Email"
                        phrase="Let's get in touch."
                        darkMode={darkMode}
                        href="https://mail.google.com/mail/?view=cm&to=antica.rusi@gmail.com&su=Let's%20Connect"
                    />
                </div>
                <div>
                    <SocialMedia
                        src={LinkedIn}
                        name="LinkedIn"
                        phrase="Let's connect."
                        darkMode={darkMode}
                        href=""
                    />
                </div>
                <div>
                    <SocialMedia
                        src={GitHub}
                        name="GitHub"
                        phrase="Check out my repos."
                        darkMode={darkMode}
                        href="https://github.com/Rocklyn-R"
                    />
                </div>

            </div>
            <div className="w-full flex flex-col items-center justify-center xs:px-4 px-1 py-10 ">

                    <form onSubmit={handleSubmitContactForm} className="w-full max-w-lg p-8 dark:border dark:border-customPink bg-customPurpleLight rounded-lg shadow-md">
                        <h4 className="text-customPinkLight text-2xl mb-6 font-bold text-center">
                            Send Me a Message:
                        </h4>

                        <div className="space-y-4">
                            <CustomTextInput
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={setName}
                                maxLength={70}
                                required
                            />

                            <CustomTextInput
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={setEmail}
                                maxLength={70}
                                required
                            />

                            <CustomTextInput
                                name="phone"
                                placeholder="Phone"
                                value={phone}
                                onChange={setPhone}
                                validateFunction={validatePhone}
                                maxLength={70}
                                required
                            />

                            <CustomTextArea
                                name="message"
                                placeholder="Your message"
                                value={message}
                                onChange={setMessage}
                                maxLength={500}
                                required
                            />

                            <CustomSelect
                                onChange={handleSelectChange}
                                value={reason}
                                options={options}
                                placeholder="Select reason"
                            />

                        </div>

                        <div className="mt-6 text-center">
                            <button
                                className="w-full flex justify-center py-3 bg-customPinkLight text-customPurple font-bold rounded-md hover:bg-customPinkMedium transition duration-300"
                                type="submit"
                            >
                               {loading ? <Loading size="w-6 h-6" /> : "Submit"}
                            </button>
                        </div>
                    </form>
                    {status ? <span className="py-4 font-semibold">{status}</span> : ""}

            </div>

        </div>
    )
})