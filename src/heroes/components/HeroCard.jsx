import { Link } from 'react-router-dom';

import { Button, Card, 
    CardBody, 
    CardFooter, 
    Divider, 
    Heading, 
    Image, 
    Stack, 
    Text } from '@chakra-ui/react';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/public/assets/heroes/${id}.jpg`

  return (
    <Card maxW='sm' className="m-5">  
        <CardBody>
            <Image
                src={heroImageUrl}
                alt={ superhero }
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                    <Heading size='md'>{ superhero}</Heading>
                    {
                        (alter_ego !== characters) && (<Text> { characters } </Text>)
                    }
                    <Text color='blue.600' fontSize='2xl'>
                        {alter_ego}
                    </Text>
                    <Text fontSize='1xl'>{first_appearance}</Text>
            </Stack>
        </CardBody> 
        <Divider />
        <CardFooter>
            <Link to={`/hero`}>
            <Button variant='solid' colorScheme='blue'>Mas..</Button>
            </Link>
        </CardFooter>
    </Card>
  )
}
