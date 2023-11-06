import { Navigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams();
  // console.log(id)
  const hero = getHeroesById( id );
  console.log(hero);

  if( !hero ){
    return <Navigate to="/marvel" />
  }

  return (
    <h1>HeroPage</h1>
  )
}
