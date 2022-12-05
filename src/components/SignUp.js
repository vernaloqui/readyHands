import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
import axios from 'axios';

function SignUp(){
    const [email, setEmail] = useState();
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();
    const [users, setUsers] = useState("");
    useEffect(()=>{
        const url = 'http://localhost/sat1126/db.php';
        axios.get(url).then((response)=>{
            setUsers(response.data);
            console.log(users);
        })
    },[])
    const submitBtn = function(e){
        e.preventDefault();
        let getData = new FormData();
        getData.append('email', email);
        getData.append('password', password);
        getData.append('firstname', fname);
        getData.append('lastname', lname);
        getData.append('mobileNum', mobile);
        getData.append('function', 'insert');
        axios({
            method: 'POST',
            url: 'http://localhost/sat1126/user.php',
            data: getData,
            config: 'Content-Type="multipart/form-data"'
        }).then(function(response) {
            const url = 'http://localhost/sat1126/user.php';
            axios.get(url).then((response)=>{
                setUsers(response.data);
                console.log(users);
        })
        });
        setEmail('');
        setFname('');
        setLname('');
        setPassword('');
        setMobile('');
    }
    return(
        <center>
            <br/>
            <br/>
            <ul className="nav nav-tabs nav-justified flex-column flex-sm-row">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" aria-current="page" href="#UserSignUp">Create a User Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#ProviderSignUp">Create a Service Provider Account</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="UserSignUp"><br/>
                    <h3>User Signup</h3>
                    <p>Fill out this form to get started if you're looking for some helper or service provider</p>
                    <p className="text-muted">Already have an account?  
                    <Link to="/login">Log in here</Link>
                    </p>
                    <form className="UsersignUpForm" action="">
                        
                        <div className="loginField">
                            <i className="bi bi-envelope-at-fill"></i>
                            <input type="text" name="email" value={email} placeholder="Email" required onChange = {(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="loginField">
                            <i className="bi bi-person-fill"></i>
                            <input type="text" name="firstname" value={fname} placeholder="First Name" required onChange = {(e) => setFname(e.target.value)}/>
                        </div>
                        <div className="loginField">
                            <i className="bi bi-person-fill"></i>
                            <input type="text" name="lastname" value={lname} placeholder="Last Name" required onChange={(e) => setLname(e.target.value)}/>
                        </div>
                        <div className="loginField">
                            <i className="bi bi-lock-fill"></i>
                            <input type="password" name="password" value={password} placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="loginField">
                            <i className="bi bi-phone"></i>
                            <input type="tel" name="mobileNum" value={mobile} placeholder="Mobile No.(09xxxxxxxxx)" maxlength="11" minlength="11" required onChange={(e) => setMobile(e.target.value)}/>
                        </div><br/>
                        <input className="logIn btn btn-outline-dark" type="submit" onClick={submitBtn}/>
                    </form>
                </div>
                <div className="tab-pane" id="ProviderSignUp"><br/>
                    <h3>Service Provider Signup</h3>
                    <p>Fill out the form to get started if you're looking to offer your services and skills</p>
                    <p className="text-muted">Already have an account?  
                    <Link to="/login">Log in here</Link>
                    </p>
                    <form className="ProviderSignUpForm" action="">
                        
                    <div className="loginField">
                            <i className="bi bi-envelope-at-fill"></i>
                            <input type="text" name="ProviderEmail" id="ProviderEmail" placeholder="Email" required/>
                        </div>
                        <div className="loginField">
                            <i className="bi bi-person-fill"></i>
                            <input type="text" name="ProviderFirstname" id="ProviderFirstname" placeholder="First Name" required/>
                        </div>
                        <div className="loginField">
                            <i className="bi bi-person-fill"></i>
                            <input type="text" name="ProviderLastname" id="ProviderLastname" placeholder="Last Name" required/>
                        </div>
                        <div className="loginField">
                            <i className="bi bi-lock-fill"></i>
                            <input type="password" name="ProviderPassword" id="ProviderPassword" placeholder="Password" required/>
                        </div>
                        <div className="loginField">
                            <i className="bi bi-phone"></i>
                            <input type="tel" name="ProviderMobileNum" id="ProviderMobileNum" placeholder="Mobile No.(09xxxxxxxxx)" maxlength="11" minlength="11" required/>
                        </div><br/>
                        <button className="logIn btn btn-outline-dark" type="submit">Submit Info</button>
                    </form>
                </div>
            </div>
        </center>
    
    )
}

export default SignUp;