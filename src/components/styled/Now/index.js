import React from 'react'
import styled from 'styled-components'

const StyledNow = styled.p`
  font-size: 2vw;
`
StyledNow.displayName = 'StyledNow'

export default function Now ({ children }) {
  return (
    <StyledNow>
      Now:
      {' '}
      {children}
    </StyledNow>
  )
}
