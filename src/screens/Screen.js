import React, { useId } from 'react';


const Screen = ({ children }) => {
  const screenId = useId();


  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100vw',
        backgroundColor: 'black',
      }}
      id={screenId}
    >
      {children.map((screen, index) => {

        return (
          <section
            style={{
              height: '100vh'
            }}
            key={index}
          >
            {screen}
          </section>
        );
      }

      )}
    </section>
  );
};
export default Screen;
