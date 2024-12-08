import { Stars } from '../../Components/Stars';
import { HandLike, HandDontLike } from '../../Resources/Icons';

const getProfiles = require.context('../../Resources/Images/Icons', true, /\.(jpg|png)$/);

const OpinionItem = (props) => {

  const randomNum = Math.floor(Math.random() * 9 + 1);

  return (
    <div className='item-option-users'>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-12 container mx-auto place-content-between px-3'>
          <div className='info-section col-span-full sm:col-span-3 tl:col-span-2 flex flex-col justify-center items-center'>
            <div className='image-user'>
              <img src={props.img ? props.img : getProfiles(`./Profile-${randomNum}.png`)} alt={props.name} className=' min-w-40 max-w-none h-auto tl:h-38' />
            </div>
            <div className='name-user mt-3'>
              <h5 className='name text-Primary font-semibold uppercase tracking-wider text-sm'>
                {props.name}
              </h5>
            </div>
          </div>
          <div className='message-section grid grid-cols-subgrid col-span-full sm:col-span-9 tl:col-span-10 mt-6 mt-sm-0'>
            <div className=' flex flex-col justify-center col-span-10 col-start-2 sm:col-span-7 sm:col-start-2'>
              <div className='content-message text-left text-15 leading-6 tl:text-lg text-ellipsis line-clamp-6 whitespace-break-spaces'>
                <p>{props.children}</p>
              </div>
              <div className='content-icons flex justify-between items-center mt-4 md:mt-6 tl:pt-3 border-t border-Primary'>
                <div className="content-stars">
                  <Stars classIcons='cursor-pointer duration-100 hover:scale-125' />
                </div>
                <div className="content-likes flex justify-between items-center gap-2">
                  <HandLike classIcons='cursor-pointer duration-100 hover:scale-125' />
                  <HandDontLike classIcons='cursor-pointer duration-100 hover:scale-125' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OpinionItem };