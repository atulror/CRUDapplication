import { useState } from "react";
import Card from "../UI/Card";
import classes from "../form/BookDetailForm.module.css";

const BookDetailForm = (props) => {
  const [enteredBookName, setEnteredBookName] = useState("");
  const [enteredBookDescription, setEnteredBookDescription] = useState("");

  const bookNameChangeHandler = (event) => {
    setEnteredBookName(event.target.value);
  };
  const bookDescriptionChangeHandler = (event) => {
    setEnteredBookDescription(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    props.addEnteredData({id:Math.random().toString(),enteredBookName,enteredBookDescription});
    setEnteredBookName('');
    setEnteredBookDescription('');
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="author">Book Name</label>
          <input type="text" id="author" value={enteredBookName} onChange={bookNameChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Book Description</label>
          <textarea id="text" rows="5" value={enteredBookDescription} onChange={bookDescriptionChangeHandler}></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit" className="btn">
            Add Book
          </button>
        </div>
      </form>
    </Card>
  );
};
export default BookDetailForm;
