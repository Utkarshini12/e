import {Link} from 'react-router-dom'

function Login(){
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-info text-white">
            <div>
            <h1>Login Page</h1>
            <Link to='/' ><button className='btn btn-primary'>Login</button></Link>
            </div>
        </div>
    )
}

export default Login;