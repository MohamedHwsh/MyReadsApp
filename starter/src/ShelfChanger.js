import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

const ShelfChanger = ({category, bookid, flipper, setFlip}) => {
    const [updateToCategory, set_updateToCategory] = useState("");
    const shouldCheck = (option) => {
        return category === option;
    }

    useEffect(() => {
        if(updateToCategory !== ""){
        const update = async () => {
            console.log("Updating bookid: " + bookid + " Cat: " + updateToCategory);
            BooksAPI.update({id: bookid},updateToCategory).then((r)=>{
                set_updateToCategory("");
                if (setFlip){
                    setFlip(!flipper);
                }

            })
            

        }
        update();
        }
    }, [bookid,updateToCategory,setFlip,flipper])

    const onChangeShelf = (e) => {
        console.log(e.target.value);
        set_updateToCategory(e.target.value);
    }

    return(
        <div className="book-shelf-changer">
        <select defaultValue="default" onSelect={onChangeShelf} onChange={onChangeShelf}>
          <option value="default" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
          {shouldCheck("currentlyReading") && "✓ "} Currently Reading
          </option>
          <option value="wantToRead">{shouldCheck("wantToRead") && "✓ "} Want to Read</option>
          <option value="read">{shouldCheck("read") && "✓ "} Read</option>
          <option value="none">{shouldCheck("none") && "✓ "} None</option>
        </select>
        </div>
    )
}

export default ShelfChanger;