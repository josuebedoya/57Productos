function Button({ children, icon, FuctionButton, iconRight }) {
  return (
    <>
      <button
        className="
                    flex
                    items-center
                    gap-2
                    button-search
                    bg-Primary
                    text-white
                    font-semibold
                    px-7
                    py-1.5
                    rounded-full
                    shadow-md
                    hover:bg-transparent
                    hover:text-Primary
                    hover:border
                    border-Primary
                    hover:font-semibold
                    duration-150"
        onClick={FuctionButton}
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