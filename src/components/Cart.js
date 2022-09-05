import {Link} from 'react-router-dom'

function Cart(){
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
            <div>
            <h1>Cart Page</h1>
            <Link to='/checkout' ><button className='btn btn-danger'>Go to Checkout</button></Link>
            </div>
        </div>
    )
}

export default Cart;