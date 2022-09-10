import React, { useState } from "react";
import Header from "./components/header/Header";
import BookDetailForm from "./components/form/BookDetailForm";
import BookList from "./components/books/BooksList";
function App() {
  const [listData, setListData] = useState([]);
  const addEnteredData = (newItem) => {
    setListData((previousList) => {
      return [...previousList, newItem];
    });
  };
  const deleteItem = (item)=>{
    setListData(listData.filter(listDataItem =>listDataItem.id !== item.id));
  }


  return (

    <div>
      <Header />
      <BookDetailForm addEnteredData={addEnteredData} />
      {
        listData.map(listDataItem => <BookList key={listDataItem.id} item={listDataItem} deleteItemProp={deleteItem}/>)
      }
    </div>
  );
}

export default App;
