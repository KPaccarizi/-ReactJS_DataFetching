import closeIcon from "../../assets/icons/close.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddModal = (props: Props) => {
  return (
    <aside
      className={`add_modal ${props.isOpen ? "add_modal--shown" : ""}`}
      id="add-modal"
    >
      <div className="add_modal__wrapper">
        <span
          id="close-modal"
          className="add_modal__close"
          onClick={props.onClose}
        >
          <img src={closeIcon} />
        </span>
        <form className="add_modal__form" id="add-form">
          <h5>Add New</h5>

          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="price" placeholder="Price" />
          <textarea
            id="description"
            name="description"
            placeholder="Description"
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    </aside>
  );
};
