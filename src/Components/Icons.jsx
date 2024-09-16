import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineCircle } from 'react-icons/md'
import { GrUserSettings } from 'react-icons/gr';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowDropright, IoIosArrowForward } from 'react-icons/io';
import { FaArrowRight, FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegStar, FaHeartCircleCheck } from 'react-icons/fa6';
import { TiDocumentText } from 'react-icons/ti';


// icon magnifying glass
export const SearchEngineIcon = ({ atr, classIcons }) => {
  return (
    <BiSearchAlt style={atr} className={classIcons} />
  )
};

// icon profile avatar
export const ProfileIcon = ({ atr, classIcons }) => {
  return (
    <GrUserSettings style={atr} className={classIcons} />
  )
};

// angle pointing down 
export const AngleBottomIcon = ({ atr, classIcons }) => {
  return (
    <IoIosArrowDown style={atr} className={classIcons} />
  )
};

// angle pointing right between a circle
export const AngleRightDroprightIcon = ({ atr, classIcons }) => {
  return (
    <IoIosArrowDropright style={atr} className={classIcons} />
  )
};

// angle pointing right  type angle
export const AngleRightIcon = ({ atr, classIcons }) => {
  return (
    <IoIosArrowForward style={atr} className={classIcons} />
  )
};

// angle pointing left type angle
export const AngleLeftIcon = ({ atr, classIcons }) => {
  return (
    <IoIosArrowBack style={atr} className={classIcons} />
  )
};

// circle
export const CircleIcon = ({ atr, classIcons }) => {
  return (
    <MdOutlineCircle style={atr} className={classIcons} />
  )
};

//  arrow pointing right
export const ArrowRightIcon = ({ atr, classIcons }) => {
  return (
    <FaArrowRight style={atr} className={classIcons} />
  )
};

// Cart Basket
export const CartIcon = ({ atr, classIcons }) => {
  return (
    <AiOutlineShoppingCart style={atr} className={classIcons} />
  )
};

// star without backgroun, only border
export const StarLineIcon = ({ atr, classIcons }) => {
  return (
    <FaRegStar style={atr} className={classIcons} />
  )
};

//Hearth with only border
export const HearthLineIcon = ({ atr, classIcons }) => {
  return (
    <FaRegHeart style={atr} className={classIcons} />
  )
};

//Heart with check
export const HearthCheckIcon = ({ atr, classIcons }) => {
  return (
    <FaHeartCircleCheck style={atr} className={classIcons} />
  )
};

//Document paper
export const DocumentIcon = ({ atr, classIcons }) => {
  return (
    <TiDocumentText style={atr} className={classIcons} />
  )
};