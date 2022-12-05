import one from '../assets/img/discount.png'
import two from '../assets/img/household cleaning.png'
import three from '../assets/img/electrician.png'
import four from '../assets/img/painter.png'
import five from '../assets/img/plumbing.png'
import six from '../assets/img/woodworker.png'
import seven from '../assets/img/welding.png'
function Home(){
    return(
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={one} className="d-block w-100" alt="discount"/>
                </div>
                <div className="carousel-item">
                <img src={two} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Hire a household help for a day or few hours</h5>
                </div>
                </div>
                <div className="carousel-item">
                <img src={three} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Need emergency assistance about your electricity?</h5>
                </div>
                </div>
                <div className="carousel-item">
                <img src={four} className="d-block w-100" alt="discount"/>
                </div>
                <div className="carousel-item">
                <img src={five} className="d-block w-100" alt="discount"/>
                </div>
                <div className="carousel-item">
                <img src={six} className="d-block w-100" alt="discount"/>
                </div>
                <div className="carousel-item">
                <img src={seven} className="d-block w-100" alt="discount"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}
export default Home;