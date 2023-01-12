import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPage = () => {
    const {id} = useParams();
    const idNumber = parseInt(id)
    console.log(id)
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
console.log(typeof id)
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    const selectedNote = notes.find((note) => note.id === idNumber);
  
    if(selectedNote){
      setTitle(selectedNote.title);
      setDesc(selectedNote.desc);
      }
      
  }, [id]);

  const handleSave = () => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    const updatedNotes = notes.map((note) => {
   
      if (note.id === idNumber) {
        return { ...note, title, desc };
      }
      return note;
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    history("/");
  };

  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleInputTitle">Title</label>
          <input
            type="title"
            class="form-control title-input"
            id="exampleInputTitle"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div class="form-mb-3">
          <label for="exampleInputDescription"> description</label>
          <textarea
            name="desc"
            id="desc"
            rows="3"
            className="form-control desc-input"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </form>
    </>
  );
};

export default EditPage;
