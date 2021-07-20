import React, { useState } from 'react';
import axios from 'axios';

function Form(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = async (e) => {
			e.preventDefault(); 
			try {
				await axios.post(
					'https://whatsaround-backend.herokuapp.com/blog',
					{
						title,
						content,
						category: type
					}
				);
				console.log('posted succesfully');
			} catch(err) {
				console.log(err.message);
			}
   
    }

    return (
        <div className="container">
        <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Title</label>
            <input type="text" class="form-control" id="inputEmail4" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
        </div>
        <div className="col-md-6">
        </div>
        <div className="col-md-6">
            <label for="inputAddress" class="form-label">Blog content</label>
            <input 
                style={{height: "200px"}} 
                type="text" class="form-control" 
                id="inputAddress" 
                placeholder=""
                value={content}
                onChange={(e)=>{setContent(e.target.value)}}
            />
        </div>
        <div ></div>
        <div className="col-md-4">
            <label for="inputState" class="form-label">Type</label>
            <select id="inputState" class="form-select" onChange={(e)=>{setType(e.target.value)}}>
            <option selected disabled>Choose...</option>
            <option value="Events">Events</option>
            <option value="Random">Random</option>
            <option value="College life">College Life</option>
            <option value="Technical">Technical</option>
            </select>
        </div>
        <div className="col-md-2">
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Add</button>
        </div>
        </form>
        </div>
    );
}

export default Form;