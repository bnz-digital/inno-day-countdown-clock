import React from 'react'
import { shallow } from 'enzyme'

import Now from '.'

describe('components:styled:Now', () => {
  it('renders <Now/> correctly', () => {
    expect(toJson(shallow(<Now />))).toMatchSnapshot()
  })
})
