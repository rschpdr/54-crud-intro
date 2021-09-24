import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import FormField from "../FormField";

function CharacterUpdate() {
  const [state, setState] = useState({
    name: "",
    occupation: "",
    weapon: "",
    cartoon: false,
    picture: "",
  });

  // O código abaixo equivale à acessar props.match.params.id
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/characters/${id}`)
      .then((response) => {
        console.log(response);
        setState({ ...response.data });
      })
      .catch((err) => console.error(err));
  }, [id]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .patch(`http://localhost:4000/characters/${id}`, state)
      .then(() => history.push("/")) // Redirecionar a página de volta pra lista
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1>Edit Character</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          name="name"
          onChange={handleChange}
          value={state.name}
        />

        <FormField
          label="Occupation"
          name="occupation"
          onChange={handleChange}
          value={state.occupation}
        />

        <FormField
          label="Weapon"
          name="weapon"
          onChange={handleChange}
          value={state.weapon}
        />

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="cartoon"
            checked={state.cartoon}
            onChange={(event) =>
              setState({ ...state, cartoon: event.target.checked })
            }
          />
          <label className="form-check-label">
            Character is from a cartoon
          </label>
        </div>

        <FormField
          label="Picture URL"
          name="picture"
          onChange={handleChange}
          value={state.picture}
        />

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-secondary"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CharacterUpdate;
