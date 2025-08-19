import PropTypes from "prop-types";

const Body = ( { children, bodyClass = "w-full h-full p-2" } ) => {
  return ( <div className={ `body ${ bodyClass }` }
  >
    { children }
  </div> );
};

Body.propTypes = {
  children: PropTypes.string.isRequired, className: PropTypes.string
};

export { Body };