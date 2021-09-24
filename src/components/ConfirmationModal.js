import Modal from "react-bootstrap/Modal";

function ConfirmationModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You are going to delete this character. This action is irreversible. Are
        you sure?
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={props.handleClose}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={props.handleAction}>
          Delete
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
