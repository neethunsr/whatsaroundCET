import React from 'react';
import blog from './images/logo-blog.svg'
import './Blog.css'
function Blog(props) {
    return (
        <div>
            <div className="blog container">
            <img src={blog} alt="blog-cet"></img>
            <div className="col-8">
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
            <div class="card">
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
            
            </div>
        </div>
    );
}

export default Blog;