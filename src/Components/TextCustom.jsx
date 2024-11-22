const TextCustom = ({ title, children, lineTitle, atrTitle, titlePosition, atrsummary, linePosition }) => {
  return (
    <>
      <div className='text-custom'>
        <div className='container mx-auto'>
          <div className='tilte-section' style={{ textAlign: titlePosition }}>
            {
              title ?
                <h2 className={`title 
                  ${lineTitle && linePosition === 'start' ? 'TitleWithLineStart' :
                    lineTitle && linePosition === 'center' ? 'TitleWithLineCenter' :
                      lineTitle && linePosition === 'end' ? 'TitleWithLineEnd' :
                        ''
                  }
                `}
                  style={atrTitle}>
                  {title}
                </h2> : null
            }
          </div>
          <div className='summary-section'>
            {
              children ?
                <div className='summary'>
                  <p style={atrsummary}>
                    {children}
                  </p>
                </div> : null
            }
          </div>
        </div>
      </div>
    </>
  )
}

export { TextCustom };