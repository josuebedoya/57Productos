import './TextCustom.css';

const TextCustom = ({ title, children, lineTitle, atrTitle, titlePosition, atrsummary, linePosition }) => {
  return (
    <>
      <div id='Content'>
        <div className='container mx-auto'>
          <div className='tilte-section' style={{ textAlign: titlePosition }}>
            <h2 className={`title-custom 
              ${lineTitle && linePosition === 'start' ? 'TitleWithLineStart' :
              lineTitle && linePosition === 'center' ? 'TitleWithLineCenter' :
                lineTitle && linePosition === 'end' ? 'TitleWithLineEnd' :
                    ''
              }
            `}
              style={atrTitle}>
              {title}
            </h2>
          </div>
          <div className='summary-section'>
            <div className='summary'>
              <p style={atrsummary}>
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { TextCustom };