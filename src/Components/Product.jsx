import { StarLineIcon, AngleRightIcon, HearthCheckIcon, HearthLineIcon, DocumentIcon } from './Icons';
import { Button } from './Button';
import { Stars } from './Stars';

const getImages = require.context('../Images/ProductImages', true, /\.(jpg|png)$/);

const Product = (props) => {
    return (
        <>
            <div id='item-product'>
                <div className='item-image'>
                    <img src={getImages(`./${props.img}`)} alt={props.title} className='aspect-100/83 p-2 rounded-3xl border border-Primary cursor-pointer' />
                </div>
                <div className='rating-stars flex gap-1 mt-4 text-13'>
                    <Stars />
                </div>
                <div className='item-title text-base'>
                    <h3>{props.title}</h3>
                </div>
                <div className='item-price text-lg font-bold'>
                    <span>{props.price}</span>
                </div>
                <div className='flex gap-1 items-center justify-around'>
                    <div className='btn-add-basket'>
                        <Button icon={<AngleRightIcon />} iconRight classBtn='text-base trasn'>
                            Añadir
                        </Button>
                    </div>
                    <div className='btn-outstanding'>
                        <Button icon={<HearthLineIcon />} classBtn='text-lg' />
                    </div>
                    <div className='btn-modal-information'>
                        <Button icon={<DocumentIcon />} classBtn='text-lg' />
                    </div>
                </div>
            </div>
        </>
    );
};


export { Product };