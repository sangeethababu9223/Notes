import "./detailNote.scss";
const DetailNote = (props) => {
  const { note } = props;
  return (
    <div className='note__container'>
      <h1 className='note__headline'>{note.title}</h1>
      <div className='note__description'>{note.content}</div>
    </div>
  );
};

export default DetailNote;
