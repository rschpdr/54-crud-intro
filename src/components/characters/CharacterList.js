import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/characters")
      .then((response) => {
        console.log(response);
        setCharacters([...response.data]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="row">
      {characters.map((characterObj) => {
        return (
          <div key={characterObj.id} className="col-4 mb-3">
            <Link to={`/character/${characterObj.id}`}>
              <div className="card" style={{ width: "18rem" }}>
                <div style={{ height: "287px" }}>
                  <img
                    src={
                      characterObj.picture
                        ? characterObj.picture
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png"
                    }
                    className="card-img-top img-fluid"
                    alt={characterObj.name}
                    style={{ maxHeight: "287px", objectFit: "" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{characterObj.name}</h5>
                  <p className="card-text">{characterObj.occupation}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
