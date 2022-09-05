import {Link} from 'react-router-dom'

function Checkout(){
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
            <div>
            <h1>Checkout Page</h1>
            <Link to='/' ><button className='btn btn-success'>Go to Home</button></Link>
            </div>
        </div>
    )
}

export default Checkout;