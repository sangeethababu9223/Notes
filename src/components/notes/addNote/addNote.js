import styled from "@emotion/styled";
import "./addNote.scss";

const Button = styled.button`
  color: ${(props) => props.primary ?? "hotpink"};
`;
const AddNote = () => {
  return (
    <div className='add-note__container'>
      <h1>Add Note</h1>
      <Button primary='green'>Add</Button>
    </div>
  );
};

export default AddNote;
