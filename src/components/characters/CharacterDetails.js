import { useState, useEffect } from "react";
import axios from "axios";

function CharacterDetails(props) {
  const [characterInfo, setCharacterInfo] = useState({
    id: null,
    name: "",
    occupation: "",
    weapon: "",
    cartoon: null,
    picture: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/characters/${props.match.params.id}`)
      .then((response) => {
        console.log(response);
        setCharacterInfo({ ...response.data });
      })
      .catch((err) => console.error(err));
  }, [props.match.params.id]);

  return (
    <div>
      <img
        className="img-fluid"
        src={characterInfo.picture}
        alt={characterInfo.name}
        style={{ maxWidth: "225px" }}
      />

      <h1>{characterInfo.name}</h1>

      <p>
        <strong>Occupation: </strong>
        {characterInfo.occupation}
      </p>

      <p>
        <strong>Weapon: </strong>
        {characterInfo.weapon}
      </p>

      <p>
        <strong>Is this character from a cartoon?: </strong>
        {characterInfo.cartoon ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default CharacterDetails;
