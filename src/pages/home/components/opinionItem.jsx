import {Stars} from '@/components/stars.jsx'
import { HandLike, HandDontLike } from '@/assets/icons.jsx'
import img from '/images/profile.png'
import  { useComment } from "@/context/comments.jsx";


const OpinionItem = (props) => {

const { rateLike } = useComment();

  return (
    <div className='item-option-users'>
        <div className='flex justify-center items-center max-w-80 container mx-auto px-3 gap-12'>
          <div className='info-section flex flex-col justify-center items-center'>
            <div className='image-user'>
              <img src={props.img ? props.img : img} alt={props.name} className='min-w-40 max-w-none h-auto tl:h-38' />
            </div>
            <div className='name-user mt-3'>
              <h5 className='name text-Primary font-semibold uppercase tracking-wider text-sm'>
                {props.name}
              </h5>
            </div>
          </div>
          <div className='message-section flex-1 flex flex-col justify-center'>
            <div className='content-message text-left text-15 leading-6 tl:text-lg text-ellipsis line-clamp-6 whitespace-break-spaces'>
              <p>{props.children}</p>
            </div>
            <div className='content-icons flex justify-between items-center mt-4 md:mt-6 tl:pt-3 border-t border-Primary'>
              <div className="content-stars">
                <Stars classIcons='cursor-pointer duration-100 hover:scale-125' />
              </div>
              <div className="content-likes flex justify-between items-center gap-2">
                <span>
                  <HandLike classIcons='cursor-pointer duration-100 hover:scale-125'
                            onClick={ ()=> rateLike(props.id, { likes: props.likes + 1 })}
                  />
                  { props.likes }
                </span>
                <span>
                  <HandDontLike classIcons='cursor-pointer duration-100 hover:scale-125'
                                onClick={ ()=> rateLike(props.id, { dont_likes: props.dontLike + 1 }) }
                  />
                  { props.dontLike }
                </span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export { OpinionItem };