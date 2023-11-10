import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { SearchIcon } from '@chakra-ui/icons'
import { Alert, 
        AlertDescription, 
        AlertIcon,
        AlertTitle, 
        Button, 
        Divider, 
        FormLabel, 
        Input, 
        Text } from '@chakra-ui/react'

import { useForm } from '../../hooks/useForm'
import {HeroCard} from '../components'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // console.log({ location })
  const {q = ''} = queryString.parse( location.search );
  // console.log({query})
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0) 
  const showError = (q.length > 0) && heroes.length === 0

  const { searchText, onInputChange } = useForm({
    searchText:q
  })

  

  const onSearchSubmit = ( event ) => {
    event.preventDefault();
    // if( searchText.trim().length <= 1 ) return;
    
    navigate(`?q=${ searchText.toLowerCase().trim() }`)

  }

  return (
    <>
      <Text fontSize='5xl'>Search</Text>
      <Divider />

      <div className="grid grid-cols-2 m-5">

      <div className="col-span-1">
        <FormLabel>Searching</FormLabel>
        <form onSubmit={ onSearchSubmit }>
          <Input
            htmlSize={20} 
            width='auto' 
            name='searchText'
            type="text" 
            placeholder="Search a hero"
            className="form-control"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
          />
          <Button
            className="ml-2"
            colorScheme='teal'
            variant='solid'
            leftIcon={< SearchIcon/>}
            onClick={ onSearchSubmit }
          >
            Search
          </Button>
        </form>
      </div>

      <div className="col-span-1">
        <h4>Results</h4>
        <Divider />
        {/* {
          ( q === '')
            ? <Alert status='warning'>
                <AlertIcon />
                <AlertTitle>Nothing here!</AlertTitle>
              </Alert>
          : ( heroes.length === 0 ) && <Alert status='error'> <AlertIcon /> No hero with,  <b> { q }</b> </Alert>
        } */}
        <Alert 
          status='warning' 
          className='mt-4 animate__animated animate__fadeInRight' 
          style={{ display: showSearch ? '': 'none'}}>
          <AlertIcon />
          <AlertTitle>Nothing here!</AlertTitle>
        </Alert>

        <Alert 
          status='error' 
          className='mt-4 animate__animated animate__fadeInRight' 
          style={{ display: showError ? '': 'none'}}>
          <AlertIcon /> 
          No hero with,  <b> { q }</b> 
        </Alert>
        
        

        {
          heroes.map(hero => (
            <HeroCard key={hero.id} {...hero}/>
          ))
        }

      </div>

      </div>
    </>
  )
}
