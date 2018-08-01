import React from 'react'
import { shallow } from 'enzyme'

import StyledMessage from '.'

describe('components:Message:styled', () => {
  it('renders <StyledMessage/> correctly', () => {
    expect(toJson(shallow(<StyledMessage />))).toMatchSnapshot()
  })
})
