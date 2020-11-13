import React from 'react'

import style from './style/badge.module.css'

const Badge = ( { text }) => {
    return (
        <div className={style.badge}>
            {text} 
        </div>
    )
}

export default Badge