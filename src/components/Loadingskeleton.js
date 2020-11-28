import React from 'react'
import CardSkeleton from './Cardskeleton'

import style from '../style/skeletonPulse.module.css'

const Loadingskeleton = () => {
    return (
        <div className={style.skeletonPulse}>
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}

export default Loadingskeleton