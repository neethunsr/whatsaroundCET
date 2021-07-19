import React from 'react';

function Form(props) {
    return (
        <div className="container">
        <form className="row g-3">
        <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Title</label>
            <input type="text" class="form-control" id="inputEmail4"></input>
        </div>
        <div className="col-md-6">
        </div>
        <div className="col-md-6">
            <label for="inputAddress" class="form-label">Blog content</label>
            <input style={{height: "200px"}} type="text" class="form-control" id="inputAddress" placeholder=""></input>
        </div>
        <div ></div>
        <div className="col-md-4">
            <label for="inputState" class="form-label">Type</label>
            <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Events</option>
            <option>Random</option>
            <option>College Life</option>
            <option>Technical</option>
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