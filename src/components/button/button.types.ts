import React, { ReactNode } from "react";

export interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
  variant: "default" | "outline"
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
}
