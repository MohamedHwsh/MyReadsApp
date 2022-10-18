import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
const SearchComponent = ({Books, setFlip, flipper}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [BookResult, setBookResult] = useState([]);
    useEffect(() => {
        if (searchQuery !== ""){
            BooksAPI.search(searchQuery).then((result)=>{
                setBookResult(result);
            })
        }
        //return (() => {
        //    setSearchQuery("");
        //})
    }, [searchQuery,setSearchQuery])
    const getShelf = (bookid) => {
      const FoundBook = Books.filter(x => x.id === bookid);
      if (FoundBook.length > 0){
        return FoundBook[0].shelf;
      }
      return "none";
    }
    return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={searchQuery}
              onChange={(e) => {setSearchQuery(e.target.value)}}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
          {
            BookResult.length > 0 && BookResult.map((b) => {
                     return (<li key={b.id}>

                         <Book id={b.id} title={b.title} authors={b.authors} image={b.imageLinks ? b.imageLinks.smallThumbnail : ""} shelf={getShelf(b.id)} />
                     </li>)
                   })
          }
          </ol>
        </div>
        </div>
    )
}

export default SearchComponent;