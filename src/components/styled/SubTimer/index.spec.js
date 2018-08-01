import React from 'react'
import { shallow } from 'enzyme'

import StyledSubTimer from '.'

describe('components:styled:SubTimer', () => {
  it('renders <StyledSubTimer/> correctly', () => {
    expect(toJson(shallow(<StyledSubTimer />))).toMatchSnapshot()
  })
})
