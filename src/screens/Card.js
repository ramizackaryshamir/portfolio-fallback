import React, { useId, useContext } from 'react';
import Video from '../components/Video/Video';

const Card = ({
  cardHeader,
  cardVideo,
  cardText,
  children,
  cardFooter,
  styles
}) => {

  const cardId = useId();


  return (
    <main className="cardContainer" style={styles} id={cardId}>
      <header>{cardHeader}</header>
      <section className="cardContent">
        <div className="cardVideo">
          <Video src={cardVideo} />
        </div>
        <div className="cardText">{cardText}</div>
        <div className="cardChildren"> {children}</div>
      </section>
      <footer className="cardFooter">{cardFooter}</footer>
    </main >
  );
};
export default Card;
