import {
    Button,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    useToast,
} from '@chakra-ui/react'
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterData, UserInfo } from '../../types/Authentication';
import AuthenticationService from '../../services/AuthenticationService';
import { AppUserContext } from '../../providers/AppUserProvider';


const Register = () => {

    const [formData, setFormData] = useState<RegisterData>({
        fullName: '',
        email: '',
        password: ''
    });

    const toast = useToast();
    const navigate = useNavigate();
    const { updateUser } = useContext(AppUserContext);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleFormSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        AuthenticationService.register(formData)
            .then((response: any) => {
                // register successfull
                // display success toast
                toast({
                    title: 'Registration successful',
                    status: 'success',
                    duration: 2000,
                    position: 'bottom-right',
                    isClosable: true
                });

                // update user context and navigate to homepage
                const user: UserInfo = { ...response.data };
                updateUser ? updateUser(user) : null;
                navigate('/');
            })
            .catch((error: any) => {
                // login failed
                // display error toast
                console.log(error);
                toast({
                    title: error.response.data.detail,
                    status: 'error',
                    duration: 2000,
                    position: 'bottom-right',
                    isClosable: true
                })
            })
    }

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Create a new account</Heading>
                    <form onSubmit={handleFormSubmit}>
                        <FormControl id="fullName">
                            <FormLabel>Fullname</FormLabel>
                            <Input type="text" name='fullName' onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id="email" mt={3}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" name='email' onChange={handleInputChange}/>
                        </FormControl>
                        <FormControl id="password" mt={3}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" name='password' onChange={handleInputChange}/>
                        </FormControl>
                        <Stack spacing={6} mt={3}>
                            <Button colorScheme={'green'} variant={'solid'} type='submit'>
                                Register
                            </Button>
                            <Text>Already have an account? <Link to={'/auth/login'} className='link'>Login here.</Link></Text>
                        </Stack>
                    </form>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
    )
};

export default Register;
