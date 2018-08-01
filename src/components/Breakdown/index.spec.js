import React from 'react'
import { shallow } from 'enzyme'

import Breakdown from '.'

describe('components:Breakdown', () => {
  it('renders <Breakdown/> correctly with days', () => {
    expect(
      toJson(shallow(<Breakdown days={5} hrs='13' mins='05' secs='51' />))
    ).toMatchSnapshot()
  })

  it('renders <Breakdown/> correctly without days', () => {
    expect(
      toJson(shallow(<Breakdown hrs='13' mins='05' secs='51' />))
    ).toMatchSnapshot()
  })

  it('renders <Breakdown/> correctly without styling', () => {
    expect(
      toJson(shallow(<Breakdown hrs='13' mins='05' secs='51' unstyled />))
    ).toMatchSnapshot()
  })
})
