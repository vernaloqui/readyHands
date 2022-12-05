import cat1 from '../assets/img/cat1.png'
import cat2 from '../assets/img/cat2.png'
import cat3 from '../assets/img/cat3.png'
import cat4 from '../assets/img/cat4.png'
import cat5 from '../assets/img/cat5.png'
import cat6 from '../assets/img/cat6.png'
import Card from '../components/Card'
function Category(){
    return(
        <div>
            <h1>Category</h1>
            <div >
                <div className="col mb-3" style={{display:'inline-flex'}}>
                    <Card img={cat1} title={'Carpenter'} text={'sample text'} />
                    <Card img={cat2} title={'Plumber'} text={'sample text'} />
                    <Card img={cat3} title={'Painter'} text={'sample text'} />
                </div>
            </div><br/><br/>
            <div className="box">
                <h1>Hi! What service do you need today?</h1>
            </div>
            <br/><br/>
            <div >
                <div className="col mb-3" style={{display:'inline-flex'}}>
                    <Card img={cat4} title={'House Cleaner'} text={'sample text'} />
                    <Card img={cat5} title={'Electrician'} text={'sample text'} />
                    <Card img={cat6} title={'Welder'} text={'sample text'} />
                </div>
            </div>
        </div>
    )
}
export default Category;