import Link from 'next/link'
import numbro from 'numbro'
import { decrease, deleteItem, increase } from '../../../../controller/store/Actions'


const CartItem = ({item, dispatch, cart}) => {
    return (
        <tr>
            <td style={{width: '100px', overflow: 'hidden'}}>
                <img src={item.imageArr[0].url} alt={item.imageArr[0].url}
                className="img-thumbnail w-100"
                style={{minWidth: '80px', height: '80px'}} />
            </td>

            <td style={{minWidth: '200px'}} className="w-50 align-middle" >
                <h5 className="text-capitalize text-secondary">
                    <Link href={`/product/${item._id}`}>
                        <a>{item.title}</a>
                    </Link>
                </h5>

                <h6 className="text-danger">{numbro(item.quantity * item.price).format({ thousandSeparated: true })} đ</h6>
            </td>

            <td className="align-middle" style={{minWidth: '150px'}}>
                <button className="btn btn-outline-secondary"
                onClick={ () => dispatch(decrease(cart, item.id)) } 
                disabled={item.quantity === 1 ? true : false} > - </button>

                <span className="px-3">{item.quantity}</span>

                <button className="btn btn-outline-secondary"
                onClick={ () => dispatch(increase(cart, item.id)) }
                disabled={item.quantity === item.inStock ? true : false} > + </button>
            </td>

            <td className="align-middle" style={{minWidth: '50px', cursor: 'pointer'}}>
                <i className="far fa-trash-alt text-danger" aria-hidden="true" 
                style={{fontSize: '18px'}} data-toggle="modal" data-target="#exampleModal"
                onClick={() => {
                    dispatch(deleteItem(cart, item.id, "ADD_CART"))
                    dispatch({
                        type: 'NOTIFY',
                        payload: {
                            success: 'deleted successfully '
                        }
                    })
                }} ></i>
            </td>
        </tr>
    )
}

export default CartItem