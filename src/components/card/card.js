import "./card.css"
import { useState } from "react"
const Card = (props)=>{

    const [item,setItem] = useState(0)

    return (
        <div className="Card">
            <img src={props.product.image} />
            <div className="card-body">
            <div className="product_name">{props.product.name}</div>
            <div></div>
            <div>{props.product.exPrice && <span className="muted">{props.product.exPrice}</span>}{props.product.price}</div>
            </div>
            {props.product.exPrice && <div className="batch">Sale</div>}
            {props.product.price.includes("-")? <button type="submit">View Options</button>:<button onClick={()=>{props.updateCount(count => count+1);setItem(item => item< 0 ? 1: item+1)}}>Add to cart</button>}{item>0 &&<span className="itemCount">{item>0 && item}</span>}
        </div>
        
    )
}

export default Card;