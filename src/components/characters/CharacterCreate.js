import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import FormField from "../FormField";

function CharacterCreate() {
  const [state, setState] = useState({
    name: "",
    occupation: "",
    weapon: "",
    cartoon: false,
    picture: "",
  });

  const history = useHistory();

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:4000/characters", state)
      .then((response) => {
        history.push("/");
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1>New Character</h1>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CharacterCreate;
