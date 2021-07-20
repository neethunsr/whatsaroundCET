import React, {useState} from 'react';


function BlogCard(props) {

    const {name, title, content, category} = props;
    return (
        <div className="card">
            <div className="card-header">
                {/* {name} */}
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{content}</p>
                <a href="./Home.js" className="btn btn-primary">Read More</a>
                <button className="btn btn-outline-secondary" disabled>{category}</button>
            </div>
        </div>
            
        
        // <div className="card-container">
        //     <div className="card-title">
        //         <h3>{name}</h3> 
        //     </div>
        //     <div className="card-footer">
        //         <div className="money">
        //             <h4>Rs {rs}</h4>
        //         </div>
        //         <div className="dist">
        //             <h4>{dis} Kms</h4>
        //         </div>
        //     </div>
            
    );
}

export default BlogCard;