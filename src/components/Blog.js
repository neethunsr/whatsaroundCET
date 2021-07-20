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
            
            {/* <div className="col-8">
                <div className="card">
                    
                    {blogs.map((bItem, index) =>(
                        <blogCard
                            key={index}
                            name='James Bond'
                            title={bItem.title}
                            content={bItem.content}
                            category={bItem.categ}
                        />
                    ))}
                </div>
                {/* <div class="card">
                    <div class="card-header">
                        Hermoine Granger
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Dhwani 18’ ; A Short Reminiscence</h2>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare proin interdum faucibus et arcu pellentesque parturient...</p>
                        <a href="./Home.js" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        Ron Weasley
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Blockchain Technology</h2>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare proin interdum faucibus et arcu pellentesque parturient...</p>
                        <a href="./Home.js" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        Harry Potter
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Our First Mass Bunk at CET</h2>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare proin interdum faucibus et arcu pellentesque parturient...</p>
                        <a href="./Home.js" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            </div> */}
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