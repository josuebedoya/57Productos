import {useNavigate} from "react-router";
import { Carousel } from '../Components/Carousel';
import { OpinionItem } from './Parts/OpinionsItem';
import { Button } from "../Components/Button";
import { AngleRightIcon } from '../Resources/Icons';
import { Path_page } from "../Routes";

const Opinions = () => {
  const navigate = useNavigate();

  const opinions = [0, 1, 2, 3, 5].map(opinion => <OpinionItem>{opinion}</OpinionItem>);

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
      <Carousel items={ opinions } itemsView={ 1 } itemsSpace={ 0 } navs effect={ 1 }/>
    </div>
  </section> )
}

export { Opinions };