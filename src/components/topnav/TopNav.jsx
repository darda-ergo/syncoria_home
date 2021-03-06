import React from 'react'

import './topnav.css'

import { Link,useHistory } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'
import * as actionType from '../../constants/actionTypes';
import user_image from '../../assets/images/profile.jpg'
import { useDispatch } from 'react-redux';
import user_menu from '../../assets/JsonData/user_menus.json'

const curr_user = {
    display_name: 'Abu Darda',
    image: user_image
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user" >
        <div className="topnav__right-user__image" >
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu =(item, index,action) => (
    // <Link to='/' key={index}>
        <div className="notification-item" onClick={item.id===3 ? action:()=>console.log("clicked")}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    // </Link>
)

const Topnav = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const logout = () => {
        console.log("logout clicked")
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/auth');
    
   
     };
    
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index,logout)}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default Topnav

// {
//     "display_name": "Orders",
//     "route": "/orders",
//     "icon": "bx bx-cart"
// },

// {
//     "display_name": "categories",
//     "route": "/categories",
//     "icon": "bx bx-list-ol"
// },
// {
//     "display_name": "discount",
//     "route": "/discount",
//     "icon": "bx bx-gift"
// },
// {
//     "display_name": "inventory",
//     "route": "/inventory",
//     "icon": "bx bx-store-alt"
// },

// {
//     "display_name": "Products",
//     "route": "/products",
//     "icon": "bx bx-package"
// },