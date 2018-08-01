import React from 'react'
import { shallow } from 'enzyme'

import StyledMain from '.'

describe('components:styled:Main', () => {
  it('renders <StyledMain/> correctly', () => {
    expect(toJson(shallow(<StyledMain />))).toMatchSnapshot()
  })
})
