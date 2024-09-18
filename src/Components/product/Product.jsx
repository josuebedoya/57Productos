import { AngleRightIcon, HearthCheckIcon, HearthLineIcon, DocumentIcon } from '../Icons';
import { Button } from '../Button';
import { Stars } from '../Stars';

const getImages = require.context('../../Images/ProductImages', true, /\.(jpg|png)$/);

const Product = (props) => {

    let description = props.children;
    let summary = '';

    if (description) {

        for (let i = 0; i <= 250; i++) {
            summary += description[ i ];
        };
    }

    return (
        <>
            <div id='item-product'>
                <div className='item-image'>
                    <img src={getImages(`./${props.img}`)} alt={props.title} className='aspect-100/83 p-2 rounded-3xl border border-Primary cursor-pointer' />
                </div>
                <div className='rating-stars flex gap-1 text-13'>
                    <Stars />
                </div>
                <div className='content mx-2'>
                    <div className='item-title text-base font-bold my-3'>
                        <h3>{props.title}</h3>
                    </div>
                    <div className='text-base text-justify'>
                        <p>
                            {summary}
                        </p>
                    </div>
                    <div className='item-price text-lg font-bold'>
                        <span>{props.price}</span>
                    </div>
                    <div className='group-buttons flex gap-1 items-center justify-between'>
                        <div className='btn-add-to-basket'>
                            <Button icon={<AngleRightIcon />} iconRight classBtn='text-base trasn'>
                                Añadir
                            </Button>
                        </div>
                        <div className='btns-check flex'>
                            <div className='btn-outstanding'>
                                <Button icon={<HearthLineIcon />} classBtn='text-lg' />
                            </div>
                            <div className='btn-modal-information'>
                                <Button icon={<DocumentIcon />} classBtn='text-lg' />
                            </div>
                        </div>
                    </div>
                    {props.IsOpenModal ? (
                        <>
                            <div className='content-description text-lg'>
                                <p className='description'>{props.children}</p>
                            </div>
                        </>
                    ) : (
                        ''
                    )
                    }
                </div>
            </div>
        </>
    );
};


export { Product };