import React from 'react'
import {BsLinkedin, BsGithub, BsStackOverflow} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/diego-thon-cortes" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/DiegoThonC" target='_blank' rel='noreferrer'><BsGithub /></a>
        <a href="https://stackoverflow.com/users/10534223/diego-esteban-thon-cortes" target='_blank' rel='noreferrer'><BsStackOverflow /></a>
    </div>
  )
}

export default HeaderSocials