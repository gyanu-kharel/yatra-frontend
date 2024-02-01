'use client'

import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import { LatestProjectsData } from '../../types/Projects';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

interface ProjectCardProps extends LatestProjectsData {
}


const ProjectCard = (props: ProjectCardProps) => {

  const navigate = useNavigate();

  return (
    <Link to={`/projects/${props.id}`}>
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'xl'}
      rounded={'md'}
      p={6}
      mt={4}
      overflow={'hidden'}>
      <Box h={'150px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        {/* <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            fill
            alt="Example"
          /> */}
      </Box>
      <Stack height={90}>
        <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={600}
          fontSize={'sm'}>
          {props.domain}
        </Text>
        <Heading
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'md'}
          fontFamily={'body'}>
          {props.title}
        </Heading>
      </Stack>
      <Stack direction={'row'} align={'center'}>
        <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>{props.owner}</Text>
          <Text color={'gray.500'}>{new Date(props.projectYear).toDateString()}</Text>
        </Stack>
      </Stack>
    </Box>
    </Link>
  )
};

export default ProjectCard;