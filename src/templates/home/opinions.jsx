import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Carousel } from '@/components/carousel.jsx';
import { OpinionItem } from './parts/opinionItem.jsx';
import { Button } from "@/components/button.jsx";
import { AngleRightIcon } from '@/resources/icons.jsx';
import { Path_page } from "@/routes.jsx";
import { useComment } from "@/context/comments.jsx";

const Opinions = () => {
  const navigate = useNavigate();
  const { comments, localComments } =  useComment();
  const [AllComments, setAllComments] = useState([]);

useEffect(() => {
  
  const AllOpinions = [ ...( comments || [] ), ...( localComments || [] ) ].map(( opinion ) =>
   <OpinionItem
                id={opinion.id}
                name={opinion.name}
                likes={opinion.likes  || 0}
                dontLike={opinion.dont_likes  || 0}
                key={ opinion.id }
   >
     { opinion.comment }
   </OpinionItem>).reverse();

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