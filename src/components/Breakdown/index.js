import React from 'react'
import { number, string } from 'prop-types'

import StyledBreakdown from './styled'

export default function Breakdown ({ days, hrs, mins, secs, unstyled }) {
  const clock = days > 0
    ? `${days}:${hrs}:${mins}:${secs}`
    : `${hrs}:${mins}:${secs}`

  return unstyled
    ? <span>{clock}</span>
    : <StyledBreakdown>{clock}</StyledBreakdown>
}

Breakdown.propTypes = {
  days: number,
  hrs: string.isRequired,
  mins: string.isRequired,
  secs: string.isRequired
}
