import "./modal.css"
import { ReactNode } from "react";

export const Modal = ({children, show}: {children: ReactNode, show: string})=>{
    return(
        <article show={show}  className="modal" >
            <section>
                {children}
            </section>
        </article>
    )
}