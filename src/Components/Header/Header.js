import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu"
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { showCartDlg, toggleMenu, setLoggedInUser } from "../../Redux/Actions"
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import cartImage from "../../Images/logo2.png"
import searchImage from "../../Images/search.png"
import userImage from "../../Images/user.png"
import heartImage from "../../Images/heart1.png"
import menuImage from "../../Images/menu.png"
import shoppingImage from "../../Images/shop.png"
import Auth from "../../Auth"
import { categories } from "../../Data"
import Person from '@material-ui/icons/PersonOutline';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import color from '@material-ui/core/colors/amber';


const mapStateToProps = state => {
    return { nrOfItemsInCard: state.cartItems.length, loggedInUser: state.loggedInUser, };
};

const categoryOptions = categories.map(x => {
    return { value: x, label: x }
})

class ConnectedHeader extends Component {
    state = {
        searchTerm: "",
        anchorEl: null,
        categoryFilter: categoryOptions[0]
    }

    render() {
        let { anchorEl } = this.state;
        return (
            <div className="header">
                <div className="left-part">
                    <a href="http://localhost:3000/search/Header.js"><img  src={cartImage} alt={"Logo"} style={{ marginTop: 8, marginLeft: 8 ,height:85,width:90}} width="64" height="64"/></a>
                    <div class="menu" style={{width: 110, height: 40, marginTop: 25, marginLeft:5, borderRadius:10, background:"#E27F86"}}>
                        <IconButton onClick={() => { 
                            this.props.dispatch(toggleMenu()) 
                        }}>
                            <img src={menuImage}  size="medium" style={{fontSize:20, width:20, height:20, justifyContent:"center" }}/>
                        </IconButton>Каталог</div>

                    <input
                        type="text"
                        //border= "white"
                        //label="Поиск" 
                        value={this.state.searchTerm}
                        onChange={(e) => {
                            this.setState({ searchTerm: e.target.value  })
                        }}
                        placeholder='Поиск'
                        style={{width: 550, height: 40, marginTop: 22, marginLeft:20, borderRadius:10, background:"#E27F86",opacity:"22%", border:"white", fontSize:16, color:"white", fontFamily:"fonts/PT-Root-UI_Bold.ttf"}}
                    />

                    <Button style={{ marginTop: 23.3, marginLeft:-65.5, height: 40 , borderRadius:10, background:"#E27F86", border: "none"}}
                        variant="outlined"F
                        color="primary"
                      B  onClick={() => {
                            /* Generate new URL to redirect user to */
                            this.props.history.push('/search/?category=' + this.state.categoryFilter.value + "&term="+ this.state.searchTerm );
                        }}> <img  src={searchImage} alt={"search"} style={{ marginTop:1, marginLeft: 1,height:25,width:25 }}/> 
                        </Button>
                    <div style={{ marginTop: 30, marginLeft: 20, width: 150}}>
                        <Dropdown
                            options={categoryOptions}
                            className='react-dropdown-h'
                            onChange={(e) => {
                                this.setState({ categoryFilter: e })
                            }}
                            value={this.state.categoryFilter} />
                    </div>
                </div>
                <div className="right-part">

                <div style={{ width: 50, marginTop: 20, marginRight: 40 }}>
  <IconButton aria-label="Cart" onClick={() => {
    this.props.dispatch(showCartDlg(true))
  }}>
    <Badge badgeContent={<span style={{ background: "#E27F86", color: "white", borderRadius: "50%", height:15,width:15, fontSize:"small"}}>{this.props.nrOfItemsInCard}</span>} color="">
      <img  src={shoppingImage} alt={"shopping-card"} style={{ marginTop:-1, marginLeft: -1,height:30,width:30,}}/>
    </Badge>
  </IconButton>
</div>


                    {!this.props.loggedInUser ?
                        (<Button
                            variant=""
                            color="primary"
                            style={{ height: 10, marginTop: 25, marginRight:-10 }}
                            onClick={() => {
                                this.props.history.push('/login');
                            }}>
                            <img  src={userImage} alt={"user"} style={{ marginTop:1, marginLeft: 1,height:30,width:30}}/> 
                        </Button>) :
                        (<Avatar
                            onClick={(event) => {
                                this.setState({ anchorEl: event.currentTarget });
                            }}
                            style={{ marginTop: 22, marginRight: 20, backgroundColor: "#E27F86" }} >
                            <Person /> 
                        </Avatar>)
                    }
                    {!this.props.loggedInUser ?
                        (<Button
                            variant=""
                            color="primary"
                            style={{ height: 10, marginTop: 25, marginRight:-10 }}
                            onClick={() => {
                                this.props.history.push('/login');
                            }}>
                            <img  src={heartImage} alt={"heart"} style={{ marginTop:0, marginLeft: 1,height:25,width:28 }}/> 
                        </Button>) :
                        (<Avatar
                            onClick={(event) => {
                                this.setState({ anchorEl: event.currentTarget });
                            }}
                            style={{ marginTop: 22, marginRight: 20, backgroundColor: "#E27F86" }} >
                            <Person />
                        </Avatar>)
                    }
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => { this.setState({ anchorEl: null }); }}
                    >
                        <MenuItem onClick={() => {
                            this.setState({ anchorEl: null })
                            this.props.history.push('/order');
                        }}>
                            Pending Order
                        </MenuItem>
                        <MenuItem onClick={() => {
                            Auth.signout(() => {
                                this.props.dispatch(setLoggedInUser(null))
                                this.props.history.push('/');
                            })
                            this.setState({ anchorEl: null });
                        }}>Logout</MenuItem>
                    </Menu>
                </div>
            </div >

        );

    }
}
 

const Header = withRouter(connect(mapStateToProps)(ConnectedHeader));
export default Header;
