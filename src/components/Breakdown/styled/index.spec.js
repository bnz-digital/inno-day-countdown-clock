import React from 'react'
import { shallow } from 'enzyme'

import StyledBreakdown from '.'

describe('components:Breakdown:styled', () => {
  it('renders <StyledBreakdown/> correctly', () => {
    expect(toJson(shallow(<StyledBreakdown />))).toMatchSnapshot()
  })
})
