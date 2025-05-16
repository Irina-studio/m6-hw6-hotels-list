import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [hotels, setHotels] = useState(data);

  const [showText, setShowText] = useState(false);

  const removeHotel = (id) => {
    let newHotels = hotels.filter((hotelName) => hotelName.id !== id);
    setHotels(newHotels);
  };

  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText(!showText);
  };

  return (
    <div>
      <div className="container">
        <h1>nyc top {hotels.length} hotels</h1>
      </div>

      {hotels.map((element) => {
        const { id, hotelName, description, image, source, showMore } = element;

        return (
          <div key={id}>
            <div className="container">
              <h2>
                {id} - {hotelName}
              </h2>
            </div>

            <div className="container">
              <p>
                {showMore
                  ? description
                  : description.substring(0, 301) + " ... "}
                <button onClick={() => showTextClick(element)}>
                  {showMore ? "Show less " : "Show more"}
                </button>
              </p>
            </div>

            <div className="container">
              <img src={image} alt="hotel" width="300px" />
            </div>

            <div className="container">
              <p>{source}</p>
            </div>

            <div className="container">
              <button className="btn" onClick={() => removeHotel(id)}>
                remove
              </button>
            </div>
          </div>
        );
      })}

      <div className="container">
        <button className="btn" onClick={() => setHotels([])}>
          delete all list
        </button>
      </div>
    </div>
  );
}

export default App;
