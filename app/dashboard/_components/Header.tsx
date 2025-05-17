import Image from "next/image";

export default function Header(){
    return (
        <header className="w-full h-[64px] bg-white border-b border-gray-200 flex items-center px-8 shadow-sm">
            <Image 
                src="/Oxxo_Logo.svg" 
                width={90} 
                height={40} 
                alt="Oxxo Logo" 
                draggable={false}
            />
        </header>
    )
}