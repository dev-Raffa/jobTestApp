import React, { ReactNode } from "react";

export interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
  variant: "default" | "outline"
  children: ReactNode
}
