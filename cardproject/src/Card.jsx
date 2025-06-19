import courseImg from './assets/courseimg1.jpeg'
import Babu from './Babu';

function Card(){
  const s={height:"150px", width:"120px"}
  return(
    <div style={{display:"flex", justifyContent:"center"}}>
    <div className="card" >
      {/*<img className="card-image" src={courseImg} alt="profile picture"></img>*/}
      <Babu styles={s}/>
      <h2 className="card-title">Vinayan C L</h2>
      <p className="card-text">I am working, and I want to be a developer</p>
    </div>
    </div>
  );
}

export default Card