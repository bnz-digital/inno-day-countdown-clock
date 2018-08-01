import React from 'react'
import { shallow } from 'enzyme'

import StyledHighlight from '.'

describe('components:styled:Highlight', () => {
  it('renders <StyledHighlight/> correctly', () => {
    expect(toJson(shallow(<StyledHighlight />))).toMatchSnapshot()
  })
})
