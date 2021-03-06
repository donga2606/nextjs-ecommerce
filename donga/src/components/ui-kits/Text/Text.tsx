import React from 'react'
import { StyledText } from './Text.styled'

interface TextProps {
  children: string
  role?: string
  num?: number
}

const Text: React.FC<TextProps> = (props) => {
  return <StyledText>{props.children}</StyledText>
}

export default Text
