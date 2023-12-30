import { useModal } from "../../providers/modal/context";
import "./modal.css"
import { ReactNode } from "react";

export const Modal = ({children}: {children: ReactNode})=>{
    const {show}= useModal()
    
    return(
        //@ts-expect-error property show does not exist on type DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
        <article show={`${show}`} className={`modal`} >
            <section>
                {children}
            </section>
        </article>
    )
}