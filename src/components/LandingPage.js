import {Link} from 'react-router-dom'

function Landing(){
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
            <div>
            <h1 >Landing Page</h1>
            <Link to='/products' ><button className='btn btn-danger'>View Products</button></Link>
            </div>
        </div>
    )
}

export default Landing;