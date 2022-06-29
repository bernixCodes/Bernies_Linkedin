import React from 'react'
import './HeaderOptions.css'

function HeaderOptions({avatar, Icon, title}) {
  return (
    <div className='headerOptions'>
        {Icon && <Icon className='headerOption__icon'/>}
        {avatar && <img className='headerOption__img' src={avatar}/>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions