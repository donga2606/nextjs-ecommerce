import React, { ReactElement } from 'react'
import { StyledCard, StyledCardImage, StyledCardBody, StyledCardButtonGroup } from './Card.styled'

interface CardProps {
  children: React.ReactNode
  onClick?(e:React.MouseEvent<HTMLElement>): void
  buttonGroups?: React.ReactNode
  imageURL: string
  // alt: string
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <StyledCard >
      <StyledCardImage src={props.imageURL}  />

      <StyledCardBody>
        {props.children}
      </StyledCardBody>
      {props.buttonGroups && <StyledCardButtonGroup>{props.buttonGroups}</StyledCardButtonGroup>}
    </StyledCard>
  )
}




export default Card
