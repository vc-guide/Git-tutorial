import courseImg from './assets/courseimg1.jpeg'

function Card(){
  return(
    <div className="card">
      <img className="card-image" src={courseImg} alt="profile picture"></img>
      <h2 className="card-title">VC code</h2>
      <p className="card-text">I am working, and I want to be a developer</p>
    </div>
  );
}

export default Card