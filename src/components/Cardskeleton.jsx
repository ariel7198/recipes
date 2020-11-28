import React from 'react'
import style from '../style/cardskeleton.module.css'


const Cardskeleton = () => {
    return (
        <div className={style.skeletonCard}>
            <div className={style.cardImg} />
            <div className={style.cardTime} />
            <div className={style.cardTitle} />
            <div className={style.cardIngredients} />
        </div>


    )
}

export default Cardskeleton