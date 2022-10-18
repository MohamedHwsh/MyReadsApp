import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import { useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

const ListBooks = ({Books, setBooks, flipper, setFlip}) => {

    useEffect(() => {
        const fetchall = async () => {
            BooksAPI.getAll().then((res) => {
                setBooks(res);
                console.log(res);
            });
        }
        fetchall();
    },[flipper, setBooks])

    return (
        <div className="app">
    
            <div className="list-books">
              <div className="list-books-title" style={{background: "blueviolet"}}>
                <h1>MyReads App.</h1>
              </div>
              <div className="list-books-content">
                <div>
                    <Bookshelf title="Currently Reading" codename="currentlyReading" books={Books} flipper={flipper} setFlip={setFlip}/>
                    <Bookshelf title="Want to Read" codename="wantToRead" books={Books} flipper={flipper} setFlip={setFlip}/>
                    <Bookshelf title="Read" codename="read" books={Books} flipper={flipper} setFlip={setFlip}/>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
    
        </div>
      );
}

export default ListBooks;