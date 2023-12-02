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
} from '@chakra-ui/react'
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginData, UserInfo } from '../../types/Authentication';
import AuthenticationService from '../../services/AuthenticationService';
import { useToast } from '@chakra-ui/react';
import { AppUserContext } from '../../providers/AppUserProvider'



const Login = () => {

    const [formData, setFormData] = useState<LoginData>({
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

        AuthenticationService.login(formData)
            .then((response: any) => {
                // login successfull
                // display success toast
                toast({
                    title: 'Authentication successful',
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
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                    <form onSubmit={handleFormSubmit}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input name='email' type="email" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id="password" mt={3}>
                            <FormLabel>Password</FormLabel>
                            <Input name='password' type="password" onChange={handleInputChange} />
                        </FormControl>
                        <Stack spacing={6} mt={3}>
                            <Button colorScheme={'green'} variant={'solid'} type='submit'>
                                Login
                            </Button>
                            <Text>Don't have an account <Link to={'/auth/register'} className='link'>Register here.</Link></Text>
                        </Stack>
                    </form>
                </Stack>
            </Flex >
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack >
    )
};

export default Login
