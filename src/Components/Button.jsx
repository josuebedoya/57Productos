function Button({ children, icon, iconRight, classBtn, ...FuctionButton }) {
  return (
    <>
      <button
        className={`
                    ${classBtn}
                    flex
                    items-center
                    gap-2
                    button-search
                    bg-Primary
                    text-white
                    font-semibold
                    px-1.5
                    py-1.5
                    rounded-full
                    shadow-md
                    border
                    border-primary
                    hover:bg-transparent
                    hover:text-Secondary
                    hover:border
                    hover:border-Secondary
                    hover:font-semibold
                    duration-150`}
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