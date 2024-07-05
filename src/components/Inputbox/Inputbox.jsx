import './Inputbox.css';

const Inputbox = ({ title, type, tag }) => {
  return (
    <>
      <label className="inputTitle">{title}</label>
      <div className={`Inputbox ${type}`}>
        <div className="tagInput">{tag}</div>
        <input type="number" />
      </div>
    </>
  );
};

export { Inputbox };
