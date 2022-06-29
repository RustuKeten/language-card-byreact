import  {languages} from "../data";
import Item from "../item/Item";
import "./Card.css";

const Card = () => {
    // console.log(img);
  return (
    <div className="cards-area-container">
    <div className="bars"></div>
    <h1 className="language-title">Languages</h1>
    <div className="cards-container">
    {languages.map((item,index)=>{
            return<Item card={item} />;
            
        })}
    </div>
        
    </div>
  )
}

export default Card;

// Dikkat! Card.js dosyası açık olmaz ise ve Card.js dosyasından export verilmez ise App.js içinde "<Card/>" yazdığımızda otomatik gelmez. (edited) {/* <img src={img} alt="img" />
        // <h3>{name}</h3> */}