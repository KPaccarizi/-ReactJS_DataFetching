import plusIcon from "../../assets/icons/plus.svg";

interface Props {
  onClick: () => void;
}

export const AddModalButton = (props: Props) => {
  return (
    <div className="add_button" onClick={props.onClick}>
      <span>Add New</span>
      <div className="add_button__circle">
        <img src={plusIcon} alt="Add New Icon" />
      </div>
    </div>
  );
};
