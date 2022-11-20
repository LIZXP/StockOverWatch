import Navbar from "../navbar/Navbar";
import Body from "../bodycontent/Body";
import Stockcards from "../stockcards/Stockcards";
import BodyTwo from "../bodycontent/BodyTwo";
import "./Home.styles.scss";

function Main({ stocks }) {
  return (
    <div className="stocks-container">
      <div className="Main">
        <Stockcards stocks={stocks} />
        <Navbar />
        <Body />
        <BodyTwo />
      </div>
    </div>
  );
}

export default Main;
