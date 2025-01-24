import { useNavigate } from "react-router";
import { Carousel } from '@/components/carousel';
import { OpinionItem } from './parts/opinionItem';
import { Button } from "@/components/button";
import { AngleRightIcon } from '@/resources/icons';
import { Path_page } from "@/routes";
import { useComment } from "@/context/comments";

const Opinions = () => {
  const navigate = useNavigate();
  const { comments, localComments } =  useComment();

  const opinions = [...comments].map((opinion, i) => <OpinionItem name={opinion.name} key={i}>{opinion.comment}</OpinionItem>);
  const opinionsLocal = [...localComments].map((opinion, i) => <OpinionItem name={opinion.name} key={i}>{opinion.value}</OpinionItem>);
  const opinionsLast = localComments ? [...opinions, ...opinionsLocal].reverse() : opinions.reverse();

  const gotToOpinios = () =>{
    navigate(Path_page.COMMENTS);
  };

  return ( <section id='Opinions'>
    <div className='container mx-auto'>
      <div className='top-section flex justify-between items-center'>
        <div className='title'>
          <h2>Algunos comentarios de nuestros clientes</h2>
        </div>
        <div className='view-all-btn'>
          <Button btnText iconRight icon={ <AngleRightIcon /> } onClick={gotToOpinios}>Ver más</Button>
        </div>
      </div>
      <div className="carousel-section p-10">
        <Carousel items={opinionsLast} effect={1} itemsSpace={0} navs cursor /* autoplay autoplayDelay={10000}  */loop itemClass="rounded-3xl px-10 py-16"/>
      </div>
    </div>
  </section> )
}

export { Opinions };