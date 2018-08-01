import React from 'react'
import { shallow } from 'enzyme'

import Message from '.'

describe('components:Message', () => {
  it('renders <Message/> correctly with component message', () => {
    expect(
      toJson(shallow(<Message message={<p>hello</p>} />))
    ).toMatchSnapshot()
  })

  it('renders <Message/> correctly with string message', () => {
    expect(toJson(shallow(<Message message='howdy' />))).toMatchSnapshot()
  })

  it('renders <Message/> correctly without message', () => {
    expect(toJson(shallow(<Message />))).toMatchSnapshot()
  })
})
