import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Avatar } from "@nextui-org/react";

const Profile = ({ isOpen, onOpen, onOpenChange }) => {

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="w-auto">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Personal Information</ModalHeader>
                            <ModalBody>
                                <div className="flex items-center gap-10">
                                    <div className="flex gap-7">
                                        <div className="flex gap-2">
                                            <div>
                                                <p className="font-semibold">Name</p>
                                                <p className="font-semibold">Username</p>
                                                <p className="font-semibold">Email</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">:</p>
                                                <p className="font-semibold">:</p>
                                                <p className="font-semibold">:</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Ratan Deep Singh</p>
                                            <p>ratan.deep.23</p>
                                            <p>ratandeep.blr.12@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default Profile;