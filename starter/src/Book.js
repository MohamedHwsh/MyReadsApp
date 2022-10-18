import ShelfChanger from "./ShelfChanger";

const Book = ({id, title, authors, image, shelf,flipper, setFlip}) => {
    return (
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url("${image}")`,
            }}
          ></div>
        <ShelfChanger category={shelf} bookid={id} flipper={flipper} setFlip={setFlip}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors ? authors.join(", ") : ""}</div>
        </div>
    )
}
export default Book;