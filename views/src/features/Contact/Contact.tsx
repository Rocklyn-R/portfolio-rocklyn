import { BasicProps, DarkModeProps } from "../../types/types"
import { SocialMedia } from "./SocialMedia/SocialMedia";
import Gmail from "../../images/Gmail.svg";
import LinkedIn from "../../images/LinkedIn.png";
import GitHub from "../../images/Github2.svg";
import { forwardRef, useState } from "react";
import { Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
const { Option } = Select;

export const Contact = forwardRef<HTMLDivElement, BasicProps>(({ darkMode }, ref) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [reason, setReason] = useState("Select Reason");
    const [message, setMessage] = useState("")

    const handleSelectChange = (value: string) => {
        setReason(value);
    };

    const options = ["Invite you to apply for a job", 'Hire you for a project', "Find out more about your services"];

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const lettersAndHyphensOnly = value.replace(/[^a-zA-Z\s-]/g, ''); // Allow letters, spaces, and hyphens
        setName(lettersAndHyphensOnly); // Update the state with the filtered value
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numbersOnly = value.replace(/[^0-9]/g, ''); // Allow only numbers
        setPhone(numbersOnly); // Update the state with the filtered value
    };

    return (
        <div ref={ref} className={`w-full py-20 space-y-10 flex flex-col items-center ${darkMode ? 'bg-customDarkPurple text-customPinkLight' : 'bg-customPinkLight text-customPurple'} overflow-hidden`}>
            <h1 className="text-4xl font-bold pb-4">Contact Me</h1>
            <div className="flex items-center justify-evenly w-2/3">
                <SocialMedia
                    src={Gmail}
                    name="Email"
                    phrase="Let's get in touch."
                    darkMode={darkMode}
                />
                <SocialMedia
                    src={LinkedIn}
                    name="LinkedIn"
                    phrase="Let's connect."
                    darkMode={darkMode}
                />
                <SocialMedia
                    src={GitHub}
                    name="GitHub"
                    phrase="Check out my repos."
                    darkMode={darkMode}
                />
            </div>
            <div className="w-full flex flex-col items-center py-10">
                <form className="w-full max-w-lg p-8 bg-customPurpleLight rounded-lg shadow-md">
                    <h4 className="text-customPinkLight text-2xl mb-6 font-bold text-center">
                        Send Me a Message:
                    </h4>

                    <div className="space-y-4">
                        <Input
                            className="w-full h-10 rounded-md bg-white text-customPurple border border-customPinkLight focus:outline-none focus:ring-2 focus:ring-customPinkLight"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => handleNameChange(e)}
                            maxLength={70}
                        />

                        <Input
                            className="w-full h-10 rounded-md bg-white text-customPurple border border-customPinkLight focus:outline-none focus:ring-2 focus:ring-customPinkLight"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            maxLength={70}
                        />

                        <Input
                            className="w-full h-10 rounded-md bg-white text-customPurple border border-customPinkLight focus:outline-none focus:ring-2 focus:ring-customPinkLight"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => handlePhoneChange(e)}
                            maxLength={70}
                        />

                        <TextArea
                            className="w-full rounded-md bg-white text-customPurple border border-customPinkLight focus:outline-none focus:ring-2 focus:ring-customPinkLight"
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            maxLength={500}
                        />

                        <Select
                            className="w-full h-10 rounded-md bg-white text-customPurple border border-customPinkLight"
                            placeholder="Select Reason"
                            onChange={handleSelectChange}
                            value={reason}
                        >
                            {options.map((option) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            className="w-full py-3 bg-customPinkLight text-customPurple font-bold rounded-md hover:bg-customPinkMedium transition duration-300"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
})