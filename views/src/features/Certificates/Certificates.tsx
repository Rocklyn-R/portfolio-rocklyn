import { forwardRef } from "react";
import { Header } from "../../components/Header";
import { BasicProps } from "../../types/types";
import FullStackCert from "../../images/Certifications/AnticaCertificate.jpg"
import OpenAICert from "../../images/Certifications/OpenAIAPICert.jpg";

export const Certificates = forwardRef<HTMLDivElement, BasicProps>(({ darkMode }, ref) => {
    return (
        <div
            ref={ref}
            className={`dark:border-t dark:border-customPink w-full py-10 flex flex-col items-center dark:bg-customDarkPurple dark:text-customPinkLight dark:border-b bg-customPinkLight text-customPurple overflow-hidden`}
        >
            <Header text="Certificates" />
            <div className="flex w-full justify-evenly flex-wrap space-y-10">
                <img src={FullStackCert} width={600} />
                <img src={OpenAICert} width={600} />
            </div>
        </div>
    );
});