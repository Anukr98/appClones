import React from "react";
import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import Subscriptions from "@material-ui/icons/SubscriptionsOutlined";
import StoreFront from "@material-ui/icons/StorefrontOutlined";
import Supervised from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationIcon from "@material-ui/icons/NotificationsActive";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../StateProvider";

function Header() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon style = {{color : 'white'}}/>
          <input type="text" name="" id="" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <Subscriptions fontSize="large" />
        </div>
        <div className="header__option">
          <StoreFront fontSize="large" />
        </div>
        <div className="header__option">
          <Supervised fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src = {user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton className = 'header__icons' style = {{color : 'white' , backgroundColor : 'rgba(255,255,255,0.1)' , marginLeft : '5px' , marginRight : '5px'}}>
          <AddIcon />
        </IconButton>
        <IconButton className = 'header__icons' style = {{color : 'white' , backgroundColor : 'rgba(255,255,255,0.1)' , marginLeft : '5px' , marginRight : '5px'}}>
          <ForumIcon />
        </IconButton>
        <IconButton className = 'header__icons' style = {{color : 'white' , backgroundColor : 'rgba(255,255,255,0.1)' , marginLeft : '5px' , marginRight : '5px'}}>
          <NotificationIcon />
        </IconButton>
        <IconButton className = 'header__icons' style = {{color : 'white' , backgroundColor : 'rgba(255,255,255,0.1)' , marginLeft : '5px' , marginRight : '5px'}}>
          <ExpandIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
