import React, {useState} from 'react';
import './Card.css';
import Button from '../Button/Button';

function Card({upgrades}) {

    const [count, setCount] = useState(0);  

    const {title, Image, price, id} = upgrades;
    
    const handlerInecrement = ()=>{
        setCount(count+1);
    }


    return <div className='card'>
        <span className={`${count !==0 ? 'card__badge' : 'card__badge--hidden'}`}
        ></span>
        <div className='.image__container'>
            <img src={Image} alt={title} />
        </div>
        <h4 className='card__title'>
            {title}<span className='class__price'> {price}</span>
            {count}
        </h4>
        <div className='btn-container'>
            <Button title={'Upgrade'} type={'add'} onClick={handlerInecrement}/>
        </div>
    </div>;
}
export default Card;