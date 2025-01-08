import {useNavigate} from "react-router";
import { Carousel } from '../Components/Carousel';
import { OpinionItem } from './Parts/OpinionsItem';
import { Button } from "../Components/Button";
import { AngleRightIcon } from '../Resources/Icons';
import { Path_page } from "../Routes";
import { useComment } from "../Components/Context/commentsContext";
import { useEffect } from "react";

const Opinions = () => {
  const navigate = useNavigate();
  const { comments, localComments } =  useComment();

  const opinions = [...comments].map((opinion) => <OpinionItem name={opinion.name}>{opinion.value}</OpinionItem>);

  const opinionsLocal = [...localComments].map((opinion) => <OpinionItem name={opinion.name}>{opinion.value}</OpinionItem>);

  const opinions3 = localComments ? [...opinions, ...opinionsLocal].reverse() : opinions.reverse();
  useEffect(()=>{  console.log(opinions3)}, [localComments, opinions3])

  const gotToOpinios = () =>{
    navigate(Path_page.COMMENTS);
  };

  return ( <section id='Opinions' className='container mx-auto'>
    <div className='top-section flex justify-between items-center'>
      <div className='title'>
        <h2>Algunos comentarios de nuestros clientes</h2>
      </div>
      <div className='view-all-btn'>
        <Button btnText iconRight icon={ <AngleRightIcon/> } onClick={gotToOpinios}>Ver más</Button>
      </div>
    </div>
    <div>
    <Carousel items={ opinions3 } itemsView={ 1 } itemsSpace={ 0 } navs effect={ 1 }/>
  </div>
  </section> )
}

export { Opinions };