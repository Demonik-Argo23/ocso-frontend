"use client";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
    Image,
} from "@heroui/react";
import { ReactNode } from "react";

export default function CreateEmployee({ children, icon, photo }: { children: ReactNode, icon: ReactNode, photo: string | undefined}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Image src={photo} onClick={onOpen} isZoomed
                className="object-cover"
                classNames={{
                    img: "size-60",
                }} 
                />
            <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="w-full max-w-lg mx-auto">
                    {() => (
                        <div className="bg-white rounded-lg shadow-lg p-4 text-black">
                            <ModalHeader>Crear nuevo empleado</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}