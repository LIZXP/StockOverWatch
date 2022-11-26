import Navbar from "../navbar/Navbar";
import Body from "../bodycontent/Body";
import "./Home.styles.scss";

function Main({ stocks }) {
  // if (!stocks) {
  //   return null;
  // }
  return stocks ? (
    <div className="stocks-container">
      <div className="Main">
        <Navbar stocks={stocks} />
        <Body />
      </div>
    </div>
  ) : null;
}

export default Main;
