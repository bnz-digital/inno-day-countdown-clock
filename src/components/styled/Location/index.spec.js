import React from 'react'
import { shallow } from 'enzyme'

import Location from '.'

describe('components:styled:Location', () => {
  it('renders <Location/> correctly', () => {
    expect(toJson(shallow(<Location />))).toMatchSnapshot()
  })
})
