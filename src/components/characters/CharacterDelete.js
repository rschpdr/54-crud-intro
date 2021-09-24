import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function CharacterDelete() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .delete(`http://localhost:4000/characters/${id}`)
      .then(() => history.push("/"))
      .catch((err) => console.error(err));
  }, [history, id]);

  return <div>Deleting...</div>;
}

export default CharacterDelete;
