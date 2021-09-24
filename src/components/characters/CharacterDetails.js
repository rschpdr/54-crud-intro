import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import ConfirmationModal from "../ConfirmationModal";

function CharacterDetails(props) {
  const [characterInfo, setCharacterInfo] = useState({
    id: null,
    name: "",
    occupation: "",
    weapon: "",
    cartoon: null,
    picture: "",
  });
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  function handleModalOpen() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

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

      <div>
        <Link
          className="me-3"
          title="Edit"
          to={`/character/update/${characterInfo.id}`}
        >
          <i className="fas fa-edit"></i> Edit
        </Link>

        {/* QUando o usuário clicar no botão de deletar, abrimos o modal de confirmação */}
        <a
          href="/"
          className="text-danger"
          onClick={(event) => {
            event.preventDefault();
            handleModalOpen();
          }}
        >
          <i class="fas fa-trash-alt"></i> Delete
        </a>
      </div>

      {/* No modal de confirmação, se o usuário fechar, nada acontece. Caso ele clique no botão "Delete", redirecionar para a rota de deleção */}
      <ConfirmationModal
        show={showModal}
        handleClose={handleModalClose}
        handleAction={() =>
          history.push(`/character/delete/${characterInfo.id}`)
        }
      />
    </div>
  );
}

export default CharacterDetails;
