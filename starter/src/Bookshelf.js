import Book from "./Book";

const Bookshelf = ({title, codename, books,flipper, setFlip}) => {
    const books_for_shelf = books.filter(b => b.shelf === codename);

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                {
                   books_for_shelf.map((b) => {
                     return (<li key={b.id}>

                         <Book id={b.id} title={b.title} authors={b.authors} image={b.imageLinks ? b.imageLinks.smallThumbnail : ""} shelf={codename} flipper={flipper} setFlip={setFlip}/>
                     </li>)
                   })
                }
          </ol>
        </div>
      </div>
    );
}

export default Bookshelf;