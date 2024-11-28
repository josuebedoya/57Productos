import { Stars } from '../../Components/Stars';

const getProfiles = require.context('../../Resources/Images/Icons', true, /\.(jpg|png)$/);

const OpinionItem = (props, {children}) => {

  const randomNum = Math.floor(Math.random() * 9 + 1);

  return (
    <div className='item-option-users'>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-12'>
          <div className='info-section col-span-4 flex flex-col justify-center items-center'>
            <div className='image-user'>
              <img src={props.img ? props.img : getProfiles(`./Profile-${randomNum}.png`)} alt={props.name} className='h-38' />
            </div>
            <div className='name-user'>
              <h5 className='name text-Primary font-semibold uppercase tracking-wider text-sm'>
                {props.name}
              </h5>
            </div>
          </div>
          <div className='message-section col-span-6 flex flex-col justify-center'>
            <div className='content-message text-left text-lg text-ellipsis line-clamp-6 whitespace-break-spaces'>
              <p>{children}</p>
            </div>
            <div className='content-stars'>
              <Stars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OpinionItem };