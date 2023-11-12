import { Link } from 'react-router-dom';

import { Button, Card, 
    CardBody, 
    CardFooter, 
    Divider, 
    Heading, 
    Image, 
    Stack, 
    Text } from '@chakra-ui/react';

const CharactersByHero = ({ alter_ego, characters}) => {
    // if(alter_ego !== characters) return (<></>);
    // return <Text> { characters } </Text>;
    return (alter_ego !== characters)
    ?<></>
    :<Text> { characters } </Text>;
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/heroes/${id}.jpg`

  return (
    <Card maxW='sm' className="m-5">  
        <CardBody className='animate__animated animate__fadeIn'>
            <Image
                
                src={heroImageUrl}
                alt={ superhero }
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                    <Heading size='md'>{ superhero}</Heading>
                    <CharactersByHero characters={ characters } alter_ego={alter_ego} />
                    <Text color='blue.600' fontSize='2xl'>
                        {alter_ego}
                    </Text>
                    <Text fontSize='1xl'>{first_appearance}</Text>
            </Stack>
        </CardBody> 
        <Divider />
        <CardFooter>
            <Link to={`/hero/${ id }`}>
            <Button variant='solid' colorScheme='blue'>Mas..</Button>
            </Link>
        </CardFooter>
    </Card>
  )
}
