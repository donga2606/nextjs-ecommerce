import styled from 'styled-components'

export const StyledCard = styled.div`
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  /* border: 1px solid rgba(0, 0, 0, 0.125); */
  border-radius: 0.25rem;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 10px;
grid-gap: 20px;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  
`



export const StyledCardImage = styled.img`
  max-width: 300px;
  justify-self: center;
`

export const StyledCardBody = styled.div`
  text-align: center;
`

export const StyledCardButtonGroup = styled.div`
  display: grid;
  grid-gap: 5px;
`
