/* eslint-disable jsx-a11y/anchor-is-valid */
import './Nav.css';
import { useState } from 'react';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiMessage2Line} from 'react-icons/ri'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" 
        onClick={() => { setActiveNav('#') }}
        className={activeNav === '#' ? 'active' : '' }
      ><AiOutlineHome /></a>

      <a href="#about" 
        onClick={() => { setActiveNav('#about') }}
        className={activeNav === '#about' ? 'active' : '' }
      ><AiOutlineUser /></a>

      <a href="#experience"
        onClick={() => { setActiveNav('#experience') }}
        className={activeNav === '#experience' ? 'active' : '' }
      ><BiBook /></a>

      <a href="#contact"
        onClick={() => { setActiveNav('#contact') }}
        className={activeNav === '#contact' ? 'active' : '' }
      ><RiMessage2Line /></a>
    </nav>
  )
}

export default Nav