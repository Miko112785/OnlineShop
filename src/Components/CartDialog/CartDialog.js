import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from "react-redux";
import { showCartDlg, setCheckedOutItems } from "../../Redux/Actions"
import { withRouter } from 'react-router-dom'
import CartRow from "./CartRow"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';


const mapStateToProps = state => {
    return { open: state.showCartDialog, items: state.cartItems };
};


class ConnectedCartDialog extends Component {

    render() {

        /* Total price of items in the cart */
        let totalPrice = this.props.items.reduce((accumulator, item) => {
            return accumulator + item.price * item.quantity;
        }, 0);


        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={() => {
                        this.props.dispatch(showCartDlg(false))
                    }}>

                    {/* Title */}
                    <div style={{ display: "flex", marginTop: 25 }}>
                        <ShoppingCartIcon fontSize="large" style={{ marginLeft: 10, color: "#E27F86" }} />
                        <div style={{ marginTop: 10, marginLeft: 10, fontSize: 16, color: "white" }}>Корзина</div>
                    </div>

                    {/* Render the actual table */}
                    <div style={{ minWidth: 300, maxHeight: 400, overflow: "auto" }}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Имя продукта</TableCell>
                                    <TableCell>Цена</TableCell>
                                    <TableCell>Штук</TableCell>
                                    <TableCell>Действие</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.items.map((item, index) => {
                                    return (<CartRow item={item} key={item.id} {...this.props} />)
                                })}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Footer related stuff */}
                    <div style={{ marginTop: 20 }}>
                        <div style={{ float: "left", margin: 10, marginTop: 20, fontSize: 20, color: "white", fontWeight: "bold" }}> Итого: {totalPrice} тг</div>
                        <Button style={{ float: "right", margin: 20 }}
                            variant="outlined"
                            color="primary"
                            disabled={totalPrice === 0}
                            onClick={() => {
                                this.props.dispatch(showCartDlg(false));
                                this.props.dispatch(setCheckedOutItems(this.props.items))
                                this.props.history.push('/order');
                            }}>Проверить</Button>
                    </div>
                </Dialog>
            </div>


        );
    }
}
const CartDialog = withRouter(connect(mapStateToProps)(ConnectedCartDialog));
export default CartDialog;