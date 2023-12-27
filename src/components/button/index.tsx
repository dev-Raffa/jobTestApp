import './button.module.css'
import { buttonProps } from "./button.types"

export const Button = ({children, variant, ...args}: buttonProps) => {
  return(
    <button 
      variant={variant}
      {...args}
      >
      {children}  
    </button>
  )
}