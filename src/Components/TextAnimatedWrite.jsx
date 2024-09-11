import React, { useState, useEffect } from 'react';

const TextAnimatedWrite = ({ children, stylesText }) => {
  const [content, setContent] = useState('');
  const [restartAnimation, setRestartAnimation] = useState(false);
  const [textDanger, setTextDanger] = useState('');

  useEffect(() => {
    let interval;

    const animateText = (text) => {
      let i = 0;
      interval = setInterval(() => {
        if (i <= text.length) {
          setContent(text.substring(0, i));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setRestartAnimation(prev => !prev);
          }, 15000);
        }
      }, 80);
    };

    if (typeof children === 'string') {
      if (children.length <= 150) {
        animateText(children);
        setTextDanger('');
      } else {
        animateText('¡El contenido no puede superar los 150 caracteres!');
        setTextDanger('text-red-500');
      }
    } else if (children === undefined) {
      animateText('¡No hay contenido para mostrar!');
      setTextDanger('text-red-500');
    } else {
      animateText(`!!El contenido proporcionado es un  ${typeof children}, solo puede recibir cadenas de texto¡¡`);
      setTextDanger('text-red-500');
    }

    return () => {
      clearInterval(interval);
    };
  }, [children, restartAnimation]);

  return (
    <div className='text-section flex justify-center'>
      <div className='text w-auto'>
        <p id='TextAnimated' className={textDanger} style={stylesText}>
          {content}
        </p>
      </div>
    </div>
  );
};

export { TextAnimatedWrite };