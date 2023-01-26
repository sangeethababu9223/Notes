import styled from "@emotion/styled";
import "./addNote.scss";

const Button = styled.button`
  color: ${(props) => props.primary ?? "hotpink"};
`;
const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: props.column || "row",
}));
const AddNote = () => {
  return (
    <Container className='add-note__container' column='column'>
      <h1>Add Note</h1>
      <Button primary='green'>Add</Button>
    </Container>
  );
};

export default AddNote;
