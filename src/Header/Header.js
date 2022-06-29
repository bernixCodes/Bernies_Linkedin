import React from 'react'
import './Header.css'
import { SearchIcon, HomeIcon, UsersIcon, BriefcaseIcon, ChatIcon, BellIcon, ViewGridIcon,CalendarIcon } from '@heroicons/react/solid'
import HeaderOptions from './HeaderOptions'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
          <img src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1656522829~hmac=6550460328e354a925a9d7bb292ab898' alt=''/>
          <div className='header__search'>
            <SearchIcon className='icons__size'/>
            <input type='text'/>
          </div>
      </div>

      <div className='header__right'>
        <HeaderOptions Icon={HomeIcon} title='Home'/>
        <HeaderOptions Icon={UsersIcon} title='My Network'/>
        <HeaderOptions Icon={BriefcaseIcon} title='Jobs'/>
        <HeaderOptions Icon={ChatIcon} title='Messaging'/>
        <HeaderOptions Icon={BellIcon} title='Notifications'/>
        <HeaderOptions title='Me' avatar='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
        <HeaderOptions Icon={ViewGridIcon} title='Work'/>
        <HeaderOptions Icon={CalendarIcon} title='Post job' className='work__session'/>
      </div>

    </div>
  )
}

export default Header