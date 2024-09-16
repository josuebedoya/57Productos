import { StarLineIcon } from './Icons';

const Stars = () => {
    return (
        <div className='rating-stars flex gap-1 mt-4 text-13'>
            <StarLineIcon classIcons='hover:text-yellow-300 hover:scale-130 cursor-pointer' />
            <StarLineIcon classIcons='hover:text-yellow-300 hover:scale-130 cursor-pointer' />
            <StarLineIcon classIcons='hover:text-yellow-300 hover:scale-130 cursor-pointer' />
            <StarLineIcon classIcons='hover:text-yellow-300 hover:scale-130 cursor-pointer' />
            <StarLineIcon classIcons='hover:text-yellow-300 hover:scale-130 cursor-pointer' />
        </div>
    );
};

export { Stars };