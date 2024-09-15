import { StarLineIcon, AngleRightIcon, HearthCheck } from "./Icons";
import { Button } from "./Button";

const getImages = require.context('../Images/ProductImages', true, /\.(jpg|png)$/);

const Product = (props) =>{
    return(
        <>
        <div id="item-product">
            <div className="item-image">
                <img src={getImages(`./${props.img}`)} alt={props.title} className="aspect-100/146 p-2 rounded-3xl border border-Primary" />
            </div>
            <div className="rating-stars flex gap-1 hover:text-yellow-300 mt-4 text-13">
                <StarLineIcon/>
                <StarLineIcon/>
                <StarLineIcon/>
                <StarLineIcon/>
                <StarLineIcon/>
            </div>
            <div className="item-title text-base">
                <h3>{props.title}</h3>
            </div>
            <div className="item-price text-lg font-bold">
                <span>{props.price}</span>
            </div>
            <div className="flex gap-4 items-center justify-around">
            <div className="btn-add-basket">
                <Button icon={<AngleRightIcon/>} iconRight classBtn='text-base'>
                    Añadir
                </Button>
            </div>
            <div className="btn-outstanding">
                <Button icon={<HearthCheck/>} classBtn='text-lg'/>
            </div>
            </div>
        </div>
        </>
    );
};


export {Product};