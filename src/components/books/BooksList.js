import classes from "./BooksList.module.css";

const BookList = ({item,deleteItemProp,editItemProp}) => {
    const deleteItem = ()=> deleteItemProp(item);
  return (
    <ul className={classes.list}>
        <li className={classes.item}>
          <figure>
            <figcaption>{item.enteredBookName}</figcaption>
            <blockquote>
              <p>{item.enteredBookDescription}</p>
            </blockquote>
          </figure>
          <div className={classes.btn}>
            <button onClick={deleteItem}>Delete</button>
          </div>
        </li>
    </ul>
  );
};
export default BookList;
