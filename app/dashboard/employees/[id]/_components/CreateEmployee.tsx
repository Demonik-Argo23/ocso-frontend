"use client";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
} from "@heroui/react";
import { ReactNode } from "react";
import { LuPlus } from "react-icons/lu";

export default function CreateEmployee({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary" className="rounded-full shadow-lg" size="lg">
                <LuPlus size="28" />
            </Button>
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