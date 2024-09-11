import { BiSearchAlt } from "react-icons/bi";
import {MdOutlineCircle} from 'react-icons/md'
import { GrUserSettings } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";
import {FaArrowRight} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";


// icon magnifying glass
export const SearchEngineIcon = () => {
  return (
    <BiSearchAlt />
  )
}

// icon profile avatar
export const ProfileIcon = () => {
  return (
    <GrUserSettings />
  )
}

// angle pointing down 
export const AngleBottomIcon = () => {
  return (
    <IoIosArrowDown />
  )
}

// angle pointing right between a circle
export const AngleRightDroprightIcon = () => {
  return (
    <IoIosArrowDropright />
  )
}

// angle pointing right  type angle
export const AngleRightIcon = ({ atr }) => {
  return (
    <IoIosArrowForward style={atr} />
  )
}

// angle pointing left type angle
export const AngleLeftIcon = ({ atr }) => {
  return (
    <IoIosArrowBack style={atr} />
  )
}

// circle
export const CircleIcon = ({ atr }) => {
  return (
    <MdOutlineCircle style={atr} />
  )
}

//  arrow pointing right
export const ArrowRightIcon = ({ atr }) => {
  return (
    <FaArrowRight  style={atr} />
  )
}

// Cart Basket
export const CartIcon = ({ atr }) => {
  return (
<AiOutlineShoppingCart  style={atr} />
  )
}