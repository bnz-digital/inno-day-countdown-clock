import React from 'react'
import { not } from 'ramda'
import { object, oneOfType, string } from 'prop-types'
import { isNilOrEmpty } from 'ramda-adjunct'

import StyledMessage from './styled'
import StyledMain from '../styled/Main'

export default function Message ({ message }) {
  return (
    not(isNilOrEmpty(message)) &&
    <StyledMain>
      <StyledMessage>{message}</StyledMessage>
    </StyledMain>
  )
}

Message.propTypes = {
  message: oneOfType([object, string])
}
