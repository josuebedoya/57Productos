function Button({ children, icon, iconRight, classBtn, btnText, ...FuctionButton }) {
  return (
    <>
      <button
        className={`${classBtn} btn-custom flex items-center gap-2 ${btnText ? 'bg-transparent text-Primary duration-150 ': 'bg-Primary text-white border border-primary hover:bg-transparent hover:border hover:border-Secondary shadow-md rounded-full px-1.5 py-1.5 duration-300'} hover:text-Secondary font-semibold hover:font-semibold`}
        {...FuctionButton}
      >
        {iconRight === true ? (
          <>
            {children}
            {icon}
          </>
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </button>
    </>
  );
}

export { Button };