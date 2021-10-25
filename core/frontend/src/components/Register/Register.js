import React from 'react'

const Register = () => {
    return (
        <>
            <main className="form-signin">
                <div className="d-flex justify-content-center w-100">
                    <form>
                        <h1 className ="h3 mb-3 fw-normal">Please Register</h1>

                        <div className ="form-floating">
                            <input type ="username" className ="form-control" id="floatingInput" placeholder="Username"></input>
                            <label for="floatingInput">Username</label>
                        </div>
                        <div className ="form-floating">
                            <input type ="email" className ="form-control" id="floatingInput" placeholder="name@example.com"></input>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className ="form-floating">
                            <input type ="password" className ="form-control" id="floatingPassword" placeholder="Password"></input>
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className ="form-floating">
                            <input type ="password" className ="form-control" id="floatingConfirmPassword" placeholder="Password"></input>
                            <label for="floatingPassword">Confirm Password</label>
                        </div>
                        <button className ="w-100 btn btn-lg btn-primary" type ="submit">Sign in</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register
