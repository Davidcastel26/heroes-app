import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';
import { SimpleGrid } from '@chakra-ui/react';

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher )

  return (
    <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {
            heroes.map( hero => (
                <HeroCard 
                    key={hero.id} 
                    {...hero} 
                />
            ))
        } 
    </SimpleGrid>
  )
}
