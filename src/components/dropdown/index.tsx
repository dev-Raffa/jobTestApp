import './dropdwon.css'
import { ReactNode, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

interface dropdownProps{
    title: string,
    children: ReactNode
    buttons?: ReactNode
}

export const Dropdown = ({children, title, buttons}: dropdownProps)=>{
    const[isOpen, setIsOpen]=useState<boolean>(false)
    
    const onClickHandled=()=>{
        setIsOpen(!isOpen)
    }
    
    return(
        //@ts-expect-error open not defined
        <li open={isOpen} onClick={onClickHandled} className='dropdown' >
            <section>
                <h3>{title}</h3>
                <figure>
                    <MdKeyboardArrowDown />
                </figure>
                {buttons}
            </section>
            <section className='item'>
                {children}
            </section>
        </li>
    )
}