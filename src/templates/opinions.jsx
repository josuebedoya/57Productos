import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Carousel } from '@/components/carousel';
import { OpinionItem } from './parts/opinionItem';
import { Button } from "@/components/button";
import { AngleRightIcon } from '@/resources/icons';
import { Path_page } from "@/routes";
import { useComment } from "@/context/comments";

const Opinions = () => {
  const navigate = useNavigate();
  const { comments, localComments } =  useComment();
  const [AllComments, setAllComments] = useState([]);

useEffect(() => {
  
  const AllOpinions = [ ...( comments || [] ), ...( localComments || [] ) ].map(( opinion ) => <OpinionItem name={opinion.name} key={ opinion.id }>{ opinion.comment }</OpinionItem>).reverse();
  setAllComments(AllOpinions);

}, [comments, localComments])

  const gotToOpinios = () =>{
    navigate(Path_page.COMMENTS);
  };

  return ( <section id='Opinions'>
    <div className='container mx-auto pt-16'>
      <div className='top-section flex justify-between items-center'>
        <div className='title text-2xl'>
          <h2>Algunos comentarios de nuestros clientes</h2>
        </div>
        <div className='view-all-btn'>
          <Button btnText iconRight icon={ <AngleRightIcon /> } onClick={gotToOpinios} classBtn='text-xl family-oswald' >Ver más</Button>
        </div>
      </div>
      <div className="carousel-section p-10 pt-5">
        <Carousel items={AllComments} effect={1} itemsSpace={0} navs autoplay autoplayDelay={8000} itemClass="rounded-3xl px-10 py-16 bg-white block"/>
      </div>
    </div>
  </section> )
}

export { Opinions };