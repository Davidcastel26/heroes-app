import { Navigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { Image, Text } from "@chakra-ui/react";

export const HeroPage = () => {
  const { id } = useParams();
  // console.log(id)
  const hero = getHeroesById(id);
  console.log(hero);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <Text fontSize='6xl' className="font-extrabold tracking-tight "> 
          {/* // className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"> */}
          { hero.superhero }
          </Text>
          <Text fontSize='1xl' className="max-w-2xl mb-6 font-light ">
            Alter ego: { hero.alter_ego }
          </Text>
          <p className="max-w-2xl mb-6 font-light">
            Publisher: { hero.publisher }
          </p>
          

        
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={`/public/assets/heroes/${id}.jpg`} alt={hero.superhero} />
        </div>
      </div>
    </section>
  );
};
