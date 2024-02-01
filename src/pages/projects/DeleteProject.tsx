import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from "@chakra-ui/react"
import ProjectsService from "../../services/ProjectsService";
import { useNavigate } from "react-router";


type DeleteProjectProps = {
    isOpen: boolean;
    title: string;
    id: string;
    onClose: () => void;
}


const DeleteProject = (props: DeleteProjectProps) => {
    const toast = useToast();
    const navigate = useNavigate();

    const deleteProject = () => {
        ProjectsService.deleteProject(props.id)
            .then((response: any) => {

                if (response.status === 200) {
                    toast({
                        title: "Project deleted successfully",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                        position: "bottom-right"
                    });
                }
                else {
                    toast({
                        title: "Error occured while deleting the project",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                        position: "bottom-right"
                    });
                }
                props.onClose();
                navigate("/projects");
            })
    };

    return (
        <>
            <Modal onClose={props.onClose} isOpen={props.isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you sure you want to delete this project? <br />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={props.onClose}>Close</Button>
                        <Button onClick={deleteProject} colorScheme={"teal"} ml={4}>Yes, Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

export default DeleteProject;