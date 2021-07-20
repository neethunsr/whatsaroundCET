import React,{useEffect, useState} from 'react';
import './App.css';
import MenuItem from './MenuItem';
import logo from './images/user.png';

const menuItems = [
    {name: 'HOME', to: '/home', iconClassName: 'bi bi-house'},
    {name: 'TRAVEL', to: '/travel', iconClassName: 'bi bi-briefcase'},
    {name: 'BLOG', to: '/blog', iconClassName: 'bi bi-blockquote-left'},
    {name: 'BOOKS', to: '/books', iconClassName: 'bi bi-book'},
    {name: 'FOOD', to: '/food', iconClassName: 'bi bi-cup-straw'}
];

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        props.onCollapse(inactive);
    },[inactive]);
    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="whatsaroundcet" />
                </div>
                <div onClick={()=>{setInactive(!inactive);}} className="toggle-menu-btn">
                {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
                </div>

            </div>
            <div className="divider"></div>
            <div className="main-menu">
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <MenuItem 
                            key={index}
                            name={menuItem.name}
                            to={menuItem.to}
                            iconClassName={menuItem.iconClassName}
                            onClick={()=> {
                                if(inactive){
                                    setInactive(false);
                                }
                            }
                        }
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;