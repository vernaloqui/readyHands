import avatar from '../assets/img/user.png'
function MyAccount(){
    
    return (
        <div>
            <div className="row border g-0 shadow-sm">
                    <h3 className="mb-3">My Profile</h3>
                    <div className="col-3 d-block">
                        
                        {/* <!--Put in Div--> */}
                        <div id="profilePic">
                            <img src={avatar} alt='avatar' className="img-thumbnail h-25" style={{width:'500px', height:'300px'}}/>
                        </div>
                    </div>
                    <div className="col-9 p-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="fName">First Name:</span>
                            <input type="text" className="form-control" id="firstName" placeholder="John" disabled/> 
                            <span className="input-group-text" id="lName">Last Name:</span>
                            <input type="text" className="form-control" id="lastName" placeholder="Doe" disabled/>
                        </div><br/>
                        <div className="input-group mb-3">
                            <label for="phoneNum" className="input-group-text">Cellphone number:</label>
                            <input type="tel" className="form-control" id="phoneNum" placeholder="09951231234" maxlength="11" minlength="11"/>
                        </div><br/>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="email">Email:</span>
                            <input type="text" className="form-control" id="email" placeholder="sample@gmail.com"/> 
                        </div><br/>
                        <button type="submit" className="btn text-capitalize save" >Save Changes</button>
                    </div>
                    
                </div>
        </div>
    )
}
export default MyAccount;