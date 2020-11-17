import React from 'react'
import Styles from './Card.module.css'
const Card = (props) => {
    return (
        <div className={Styles.card}>
            <img src={props.imagePath} alt="Img"/>
            <button className={Styles.btn_red}>Save</button>
            <p className={Styles.download}>50k downloads</p>
        </div>
    )
}

export default Card