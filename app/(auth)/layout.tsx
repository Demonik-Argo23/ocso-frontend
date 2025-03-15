import { Image } from '@heroui/react';
import React from 'react';

type AuthLayoutProps = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
    return (
        <div className="bg-orange-300 w-screen h-screen overflow-hidden grid">
            <div className="place content-center place-self-center place-items-center text-center"> 
                <div className='flex flex-col items-center bottom-10 relative'>
                    <Image src='.\public\Oxxo_Logo.svg' 
                    alt='Logo de Ocso'
                    className='place-content-center w-full my-10 scale-50' 
                    width={250} 
                    height={0}/>
                </div>
                
                {children} 
            </div>
        </div>
    );
}