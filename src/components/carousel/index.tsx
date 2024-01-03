import { useRef } from "react"

export interface carouselProps {
    width: string,
    height: string,
    color: string,
    arrows?: boolean,
    index?: "bar"| 'circle'
    autoplay?: {
        on: boolean,
        time: number,
        },
}


export const Carousel = ({color, height, width,arrows, autoplay, index}: carouselProps) =>{


    return(
        
}