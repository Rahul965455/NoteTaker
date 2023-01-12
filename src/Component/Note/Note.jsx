import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const Note = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(data); 
  const handleEdit = () => {
    const notes = JSON.parse(localStorage.getItem("notes"));

  };

  
  const remove = (id) => {
    const newNotes = notes.filter((elem) => {
      if (elem.id !== id) {
        return elem
      }
    });
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (title.length < 10) {
      if (desc === "") {
        alert("Description is Required");
        return;
      }
      alert("Title should be at least 10 characters long!")
      return;
    }
    const newNote = { title: title, desc: desc, id: new Date().getTime() };
    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
    setDesc("");
    setTitle("");
  };
  
  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="w-50">
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
{title.length < 10 && desc === "" && <div style={{color: 'red'}}> Description is Required</div>}
</div>
<button
         type="submit"
         class="btn btn-primary mt-2"
         onClick={handleAdd}
       >
Submit
</button>
</form>
</div>
<div className="d-flex justify-content-center">
<div className="row w-50">
{notes.map((n) => (
<div className="col-lg-6">
<div className="card mt-5" key={n.id}>
<h5 className="card-header">{n.title}</h5>
<div className="card-body">
<p>{n.desc}</p>
<NavLink to={`/edit/${n.id}`}>
  <a href="#" class="btn btn-primary">Edit</a>
</NavLink>

<a href="#" class="btn btn-danger mx-2 " onClick={() => remove(n.id)}>
Remove
</a>
</div>
</div>
</div>
))}
</div>
</div>
</>
);
};

export function data(){
const local=localStorage.getItem('notes');
if(local){
return JSON.parse(local)
}else {
return []
}
}

export default Note;




