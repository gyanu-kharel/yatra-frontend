import {
    Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea, useToast
}
    from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { RegisterProjectData } from "../../types/Projects";
import { DomainData } from "../../types/Ideas";
import ProjectsService from "../../services/ProjectsService";
import { AppUserContext } from "../../providers/AppUserProvider";
import { useNavigate } from "react-router";


type RegisterProjectModalData = {
    isOpen: boolean;
    onClose: () => void;
    domains?: DomainData[]
}

const RegisterProject = (props: RegisterProjectModalData) => {
    const { isOpen, onClose } = props;
    const { user } = useContext(AppUserContext);

    const [formData, setFormData] = useState<RegisterProjectData>({
        title: '',
        description: '',
        domainId: '',
    });

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const toast = useToast();
    const navigate = useNavigate();

    const handleInputChange = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        formData.createdBy = user?.id;
        ProjectsService.createProject(formData)
            .then((response) => {
                if (response.status === 200) {
                    toast({
                        title: "Project registered successfully",
                        status: "success",
                        position: "bottom-right",
                        duration: 2000,
                        isClosable: true
                    });
                    onClose();
                    navigate("/projects");
                }
                else {
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    };


    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                scrollBehavior="inside"
                onClose={onClose}
            >
                <ModalOverlay />
                <form onSubmit={handleFormSubmit} id="register-project" encType="multipart/form-data">
                    <ModalContent>
                        <ModalHeader>Register new project</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl isRequired>
                                <FormLabel>Project name</FormLabel>
                                <Input ref={initialRef} placeholder='Project name' name='title' onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Domain</FormLabel>
                                <Select placeholder='Select option' name='domainId' onChange={handleInputChange}>
                                    {props.domains?.map((item, index) => {
                                        return (
                                            <option value={item.id} key={index}>{item.name}</option>
                                        )
                                    })};
                                </Select>
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Date</FormLabel>
                                <Input type="date" name='projectYear' onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Duration (in months)</FormLabel>
                                <Input placeholder='Project duration' name='duration' onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Team Size</FormLabel>
                                <Input placeholder='Total team size' name='teamSize' onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Skill level</FormLabel>
                                <Select placeholder='Select option' name="skillLevel" onChange={handleInputChange}>
                                    <option value='Beginner'>Beginner</option>
                                    <option value='Intermediate'>Intermediate</option>
                                    <option value='Experienced'>Experienced</option>
                                    <option value='Expert'>Expert</option>
                                </Select>
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Complexity</FormLabel>
                                <Select placeholder='Select option' name='complexity' onChange={handleInputChange}>
                                    <option value='Easy'>Easy</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Hard'>Hard</option>
                                </Select>
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Platform</FormLabel>
                                <Select placeholder='Select option' name='platform' onChange={handleInputChange}>
                                    <option value='Mobile'>Mobile</option>
                                    <option value='Web'>Web</option>
                                    <option value='Desktop'>Desktop</option>
                                    <option value='Crypto'>Crypto</option>
                                    <option value='Cloud'>Cloud</option>
                                    <option value='Iot'>IoT</option>
                                </Select>
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Description</FormLabel>
                                <Textarea placeholder='Description of the project' name='description' onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>UI Design Link</FormLabel>
                                <Input placeholder='UI design link' name='uiDesignLink' onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Github Link</FormLabel>
                                <Input placeholder='Github link' name='githubLink' onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Screenshot</FormLabel>
                                <Input type='file' name='screenshot' onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Documentation</FormLabel>
                                <Input type='file' name='documentation' onChange={handleInputChange} />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='teal' mr={3} type="submit" formTarget="register-project">
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal >
        </>
    );
};


export default RegisterProject;