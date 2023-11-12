import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id)
  const hero = useMemo(() => getHeroesById(id), [id])
  // console.log(hero);

  const onNavigateBack = () => {
    // -1  returns back one page
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <Heading fontSize='6xl' className="font-extrabold tracking-tight "> 
           { hero.superhero }
          </Heading>
          <Text fontSize='xl'>
           Alter ego: { hero.alter_ego }
          </Text>
          <Text fontSize='xl'>
            Publisher: { hero.publisher }
          </Text>
          <Text fontSize='xl'>
            First Appearance: { hero.first_appearance }
          </Text>
          <Text fontSize='xl' className="mb-8">
            Characters: { hero.characters }
          </Text>

          <Button
           size='md'
           height='48px'
           width='200px'
           border='2px'
           borderColor='green.500'
           leftIcon={< ArrowBackIcon/>}
           onClick={ onNavigateBack }
          >
            Back
          </Button>

        
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Box boxSize='sm'> 
          <Image 
            // boxSize='500px'
            className="animate__animated animate__fadeInRightBig"
            // className="animate__animated animate__lightSpeedInRight"
            // className="animate__animated animate__slideInRight"
            objectFit='cover'
            src={`/heroes/${id}.jpg`} 
            alt={hero.superhero} />
          </Box>
        </div>
      </div>
    </section>
  );
};
