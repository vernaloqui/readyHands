import {Link} from 'react-router-dom'
function CarouselItem(prop){
    return (
        <div>
            <div className="card" style={{width: "18rem",  margin:"2px"}}>
                <img src={prop.img} className="card-img-top" alt="text" style={{height:"200px",}}/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{prop.title}</h5>
                    <p className="card-text">{prop.text}</p>
                    <Link to="/userSignUp" className="btn signUp">Create an account</Link>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem;