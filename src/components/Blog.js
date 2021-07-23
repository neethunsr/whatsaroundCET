import React, { useEffect, useState } from 'react';
import blog from './images/logo-blog.svg';
import add from './images/add-button.svg';
import './Blog.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import BlogCard from './blogCard';
function Blog(props) {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await axios.get('https://whatsaround-backend.herokuapp.com/blogd');
                setBlogs(res.data);
                console.log(res.data)
            } catch(err) {
                console.log(err);
            }
        }
        fetchBlogs();
    }, [])

    return (
        <div>
            <div className="blog container row">
            <img src={blog} className="blog-cet" alt="blog-cet"></img>
            <div className="col-8">
            {blogs.map((bItem, index) =>(
                //<h1>{bItem.title}</h1>
                        <BlogCard
                            key={index}
                            //name='James Bond'
                            title={bItem.title}
                            content={bItem.content}
                            category={bItem.categ}
                        />
                    ))}
            </div>
            
            <div className="plus-btn add col-4">
                <NavLink exact to='/form'>
                    <img src={add} alt="add-button"></img>
                </NavLink>    
            </div>

            </div>
        </div>
    );
}

export default Blog;