import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="relative w-full h-[200px] text-white overflow-hidden">
            <div className="h-[240px] md:h-[400px]">
                <div
                    className="
                        absolute w-full
                        bottom-6 md:bottom-20
                        flex items-center justify-center
                        flex-col md:flex-row
                        gap-3 md:gap-20
                        z-10 px-4
                    "
                >
                    {["Facebook", "Hotline", "Website"].map((label) => (
                        <button
                            key={label}
                            className="
        w-[200px] md:w-[400px] h-[48px] md:h-[64px]
        rounded-[16px]

        text-base md:text-[25px]
        bg-gradient-to-b from-white/20 to-white
        font-[400]
        text-[#0011BF]
        font-[NeueHelveticaExt,sans-serif]
        shadow-md
        hover:opacity-90
        transition
    "
                        >
                            {label}
                        </button>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
