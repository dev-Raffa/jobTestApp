import './button.module.css'
import { buttonProps } from "./button.types"

export const Button = ({children, variant, ...args}: buttonProps) => {
  return(
    <button 
    //@ts-expect-error Property 'variant' does not exist on type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
      variant={variant}
      {...args}
      >
      {children}  
    </button>
  )
}