import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <main className="form-signin">
                <div className="d-flex justify-content-center w-100">
                    <form>
                        <h1 className ="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className ="form-floating">
                        <input type ="email" className ="form-control" id="floatingInput" placeholder="name@example.com"></input>
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div className ="form-floating">
                        <input type ="password" className ="form-control" id="floatingPassword" placeholder="Password"></input>
                        <label for="floatingPassword">Password</label>
                        </div>

                        <div className ="checkbox mb-3">
                        <input type ="checkbox" value="remember-me"></input>
                        </div>
                        <button className ="w-100 btn btn-lg btn-primary" type ="submit">Sign in</button>
                        <p className ="mt-5 mb-3 text-muted">© 2017–2021</p>
                        <Link to = "/register" >Register</Link>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login
