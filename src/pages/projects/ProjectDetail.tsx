import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Icon,
    HStack,
} from '@chakra-ui/react';
import { MdPerson, MdVisibility, MdFavorite } from 'react-icons/md'
import { useParams } from 'react-router';
import { ProjectDetailData } from '../../types/Projects';
import { useEffect, useState } from 'react';
import ProjectsService from '../../services/ProjectsService';
import ProjectCard, { ProjectCardProps } from '../home/ProjectCard';

const ProjectDetail = () => {

    const { id } = useParams();
    const [project, setProject] = useState<ProjectDetailData>();
    const [recommendedProjects, setRecommendedProjects] = useState<ProjectDetailData[]>([]);

    useEffect(() => {
        ProjectsService.getDetail(id!)
            .then((response: any) => {
                setProject(response.data.data);
                setRecommendedProjects(response.data.recommendations);
            });
    }, [id]);

    const handleFavoriteBtn = () =>{
        ProjectsService.favorite(project?.id!)
            .then((_) => {
                window.location.reload();
            })
    }

    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={
                            'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
                        }
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {project?.title}
                        </Heading>
                        <Stack direction="row" alignItems="center" spacing={6} justifyContent={"start"} mt={4}>

                            <HStack>
                                <Icon as={MdPerson} w={5} h={5} />
                                <Text>{project?.owner}</Text>
                            </HStack>

                            <HStack>
                                <Icon as={MdVisibility} color={"teal"} w={5} h={5} />
                                <Text>{project?.viewCount ?? 0}</Text>
                            </HStack>

                            <HStack>
                                <Icon as={MdFavorite} w={5} h={5} color={"red"} />
                                <Text>{project?.favoriteCount ?? 0}</Text>
                            </HStack>
                        </Stack>
                        <br />
                    </Box>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue('gray.500', 'gray.400')}
                                fontSize={'2xl'}
                                fontWeight={'300'}>
                                {project?.description}
                            </Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Project Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Domain:
                                    </Text>{' '}
                                    {project?.domain}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Duration:
                                    </Text>{' '}
                                    {project?.duration} month(s)
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Team Size:
                                    </Text>{' '}
                                    {project?.teamSize} member(s)
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Skill Level:
                                    </Text>{' '}
                                    {project?.skillLevel}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Complexity:
                                    </Text>{' '}
                                    {project?.complexity}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Project Year:
                                    </Text>{' '}
                                    {new Date(project?.projectYear!).toDateString()}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>

                    {project?.isFavorite ? <Button
                        rounded={'none'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('gray.900', 'gray.50')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}
                        onClick={() => handleFavoriteBtn()}
                        >
                        Remove from favorites
                    </Button> : 
                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={"teal"}
                            color={useColorModeValue('white', 'gray.900')}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}
                            onClick={() => handleFavoriteBtn()}
                            >
                            Add to favorites
                        </Button>}
                </Stack>
            </SimpleGrid>
            <Stack mt={5}>
                <Heading size={"lg"}>Recommended</Heading> <hr />
                <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
                    {recommendedProjects.map((item, index) => {
                        var props: ProjectCardProps = {
                            id: item.id,
                            domain: item.domain,
                            owner: item.owner!,
                            projectYear: item.projectYear!,
                            title: item.title,
                            favoriteCount: item.favoriteCount,
                            viewCount: item.viewCount
                        }
                        return <ProjectCard {...props} key={index} />
                    })}
                </Flex>
            </Stack>
        </Container>
    )
};

export default ProjectDetail;