import React from 'react';
import "./Learn.scss";
import Card from './card/card';
import investor1 from "../../assets/warren-buffett.jpg"
import investor2 from "../../assets/mark-cuban.jpeg"
import investor3 from "../../assets/barbara-corcoran.jpeg"

// import Typewriter from "typewriter-effect";

const cards = [
  {id:"1",
  name: "Warren Buffet",
  link:"https://finance.yahoo.com/news/8-genius-investing-tips-warren-120011793.html#:~:text=Invest%20In%20Low%2DCost%20Index,swears%20by%20one%20simple%20tip.&text=%22Consistently%20buy%20an%20S%26P%20500,practically%20all%20of%20the%20time.%22",
  img: investor1,
  quote: "If you aren't willing to own a stock for 10 years, don't even think about owning it for 10 minutes.",
  networth: "$108.2 billions"
},
{id:"2",
name: "Mark Cuban",
link:"https://finance.yahoo.com/news/mark-cuban-top-investing-advice-193955063.html",
img: investor2,
quote: "I believe that starting any business should be as easy as a 10-year-old starting a lemonade stand.",
networth: "$4.8 billions"
},

  {id:"3",
  name: "Barbara Corcoran",
  link:"https://www.inc.com/graham-winfrey/barbara-corcoran-shark-tank-business-plan-rent.html",
  img: investor3,
  quote: "Don’t get cocky just because you’ve had a good run. You can lose your business as fast as you’ve earned it.",
  networth: "$100 millions"
}

]
export default function Learn() {
  return <>
  <div className='services'>
  
  {/* <div className="pop-out-card with-transform"> */}

  <div className="flippable-card-container">
    {cards.map((card)=>(

      <Card key={card.id} card={card} />
    ))}
  
  </div>
  </div>
  </>
}
