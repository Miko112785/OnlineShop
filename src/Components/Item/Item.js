import React, { Component } from 'react';
import "./Item.css";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { connect } from "react-redux";
import { addItemInCart } from "../../Redux/Actions"
import { withRouter } from "react-router-dom";
import color from '@material-ui/core/colors/amber';
import { blue } from '@material-ui/core/colors';


/*
 * This is a card like component which shows info about single product (e.g. when you see search result of products).
 * 
 */

class ConnectedItem extends Component {

    render() {
        return (
            <div className="item" style= {{color:"black", height: this.props.mini? "220px": "300px",  width:this.props.mini?"170px":"215px"} } onClick={() => {
                this.props.history.push('/details/' + this.props.item.id);
            }}>
                <div style={{height: this.props.mini? 180:190, width:this.props.mini? 180:190 }}>  <img   alt={this.props.item.name} height={this.props.mini? 250:200} width = {this.props.mini? 190:220} src={this.props.item.imageURL} /> </div>
                <div style={{color: "black",fontFamily:"fonts/PT-Root-UI_VF.ttf",textAlign:"center", margin:10, fontSize: 15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{this.props.item.name}</div>
                <div style={{color: "black",fontFamily:"fonts/PT-Root-UI_VF.ttf", textAlign:"center", margin: 10, fontSize: 16 , }}><b>Цена: {this.props.item.price} тг</b></div>
                
        
                {/* <div style={{color: "black", float:"right", margin: 10,  fontSize: 13 }}>{this.props.item.popular && ""}</div> */}

                {!this.props.mini && <div className="details-btn-div">
                    {/* <Button onClick={(e) => {
                        e.stopPropagation();
                        this.props.history.push('/details/' + this.props.item.id);
                    }}>
                        
                    </Button> */}
                </div>}
                {!this.props.mini && <div className="add-btn-div">
                    {/* <IconButton onClick={(e) => {
                        e.stopPropagation();
                        this.props.dispatch(addItemInCart({ ...this.props.item, quantity: 1 }));
                    }} color="primary" aria-label="Add to shopping cart">
                         <AddShoppingCartIcon />
                    </IconButton> */}
                    
                        <Button  style={{background: "#E27F86",fontFamily:"fonts/PT-Root-UI_VF.ttf",fontWeight:"bold", color: "white",margin:0,width:214,borderRadius:10,fontSize:15}}onClick={(e) => {
                        e.stopPropagation();
                        this.props.dispatch(addItemInCart({ ...this.props.item, quantity: 1 }));
                    }} >
                        В корзину
                        

                        </Button>
                        
                </div>}
            </div>


        );
    }
}

export default withRouter(connect()(ConnectedItem));
