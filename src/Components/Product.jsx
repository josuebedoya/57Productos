import { StarLineIcon, AngleRightIcon, HearthCheck } from "./Icons";
import { Button } from "./Button";

const getImages = require.context('../Images/ProductImages', true, /\.(jpg|png)$/);

const Product = (props) =>{
    return(
        <>
        <div id="item-product">
            <div className="item-image">
                <img src={getImages(`./${props.img}`)} alt={props.title} />
            </div>
            <div className="rating-stars">
                <StarLineIcon/>
                <StarLineIcon/>
                <StarLineIcon/>
                <StarLineIcon/>
                <StarLineIcon/>
            </div>
            <div className="item-title">
                <h3>{props.title}</h3>
            </div>
            <div className="item-price">
                <span>{props.price}</span>
            </div>
            <div className="btn-add-basket">
                <Button icon={<AngleRightIcon/>} iconRight>
                    Añadir al Carrito
                </Button>
            </div>
            <div className="btn-outstanding">
                <Button icon={<HearthCheck/>}/>
            </div>
        </div>
        </>
    );
};


export {Product};