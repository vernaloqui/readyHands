import {Link} from 'react-router-dom'

function LogIn(){
  
    return(
      <div className="login">
        
      <form className="logInForm" action="">
        <h1>Welcome Back!</h1>
        <div className="loginField">
          <i className="bi bi-person-fill"></i>
          <input type="text" name="email" id="email" placeholder="Email"  required />
        </div>
        <div className="loginField">
          <i className="bi bi-lock-fill"></i>
          <input type="password" name="password" id="password" placeholder="Password" required/><br/>
        </div><br/>
        <button className="logIn btn btn-outline-dark">Log in</button>
        <button type="button" className="btn btn-link text-muted" 
        style={{textDecoration:"none", marginLeft: "0%"}} 
        data-bs-toggle="modal" data-bs-target="#forgotPw">Forgot password</button>
      </form>
      <br/>
      <Link to="/signup" className="btn signUp">Create an account</Link>
      <br/>
      <br/>
{/* <!--Modal--> */}
<div className="modal fade" id="forgotPw" tabIndex="-1">
    <div className="modal-dialog">
        <div className="modal-content">
        {/* <!--start of modal header--> */}
        <div className="modal-header">
            <h5 className="modal-title text-center" id="modalTitle">
                Forgot Password</h5>
                <button className="btn-close" 
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="close">
                </button>
        </div>
        {/* <!--End of modal header--> */}


        {/* <!--start of modal body--> */}
        <div className="modal-body">
            <p className="fst-italic">Input your email address so we can send you a link to reset your password.</p>
            <div className="input-group mb-3">
                <span className="input-group-text" id="modalEmailUser">Email address:</span>
                <input type="email" name="ValidForgetPass" id="modalemail" className="form-control"/>
            </div>
        </div>
         {/* <!--End of modal body-->
         <!--start of modal footer--> */}
         <div className="modal-footer">
            <button className="btn" 
                    type="button" style={{backgroundColor:"#A2DBB7", borderRadius:"5px", boxShadow:"5px 5px grey"}}>
                    OK
            </button>

        </div>

         {/* <!--End of modal footer--> */}
        </div>
    </div>
</div>
      </div>
     
      
    )
}
export default LogIn;

