import "./card.scss";
// import Typewriter from "typewriter-effect";

export default function Card({ card }) {
  return (
    <div className="card">
      <div className="card-front">
        <img className="image" src={card.img} />
        <div className="content">
          <p>&ldquo;{card.quote}&rdquo;</p>
          <strong>&mdash; {card.name},</strong> networth {card.networth}
        </div>
      </div>
      <div className="card-back">
        <a href={card.link}>
          {" "}
          Learn More
          {/* <Typewriter
          options={{
            strings:["Learn more"
          ],
          autoStart: true,
          loop: true,
        }}
        
        /> */}
        </a>
      </div>
    </div>
  );
}
