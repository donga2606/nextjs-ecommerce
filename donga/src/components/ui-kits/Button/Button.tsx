import React from 'react'
import { StyledButton } from './Button.styled'

interface ButtonProps {
  children: React.ReactChild
  id?: number
  onClick?(e: React.MouseEvent<HTMLElement>): void
}

const Button: React.FC<ButtonProps> = (props:ButtonProps) => {
  return <StyledButton onClick={props.onClick&&props.onClick}  >{props.children}</StyledButton>
}

export default Button
