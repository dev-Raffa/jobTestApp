import './navbar.css'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { Logo } from "../../../../components/logo/logo"
import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { FaPersonChalkboard } from "react-icons/fa6"
import { IoExitOutline } from "react-icons/io5";
import { useAdminContext } from '../../../../providers/admin/context';

export const NavBar = ()=>{
  const[isOpen, setIsOpen]=useState<boolean>(true)
  const {logout} = useAdminContext()

  const clickButtonMenuHandle = ()=>{
    setIsOpen(!isOpen)
  }

  const clickButtonExitHandle = () => {
    logout()
  }

  return (
    <>
      <aside value={`${isOpen}`} className='navbar'>
        <header>
          <Logo />
          <button onClick={clickButtonMenuHandle}>
            {
              isOpen? <RiMenuFoldLine />: <RiMenuUnfoldFill />
            }
            
          </button>
        </header>
        <nav>
          <ul>
            <li>
              <Link to='courses'>
                <PiStudentFill />
                <span>Cursos</span>
              </Link>
            </li>
            <li>
              <Link to='professors'>
                <FaPersonChalkboard />
                <span>Professores</span> 
              </Link>
            </li>
          </ul>
        </nav>
        <footer>
          <button onClick= {clickButtonExitHandle}>
            <IoExitOutline />
          </button>
        </footer>
      </aside>
    </>
  )
}