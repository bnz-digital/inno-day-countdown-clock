import React from 'react'
import { shallow, mount } from 'enzyme'
import addDays from 'date-fns/fp/addDays'
import addHours from 'date-fns/fp/addHours'
import addMinutes from 'date-fns/fp/addMinutes'
import toDate from 'date-fns/fp/toDate'

import App from '.'
import {
  PASTRIES,
  GO_TO_BEEHIVE,
  SHOW_AND_TELL,
  INNOVATION_DAY_BEGINS,
  ID_LUNCH,
  ID_LUNCH_ENDS,
  ID_DINNER,
  ID_DINNER_ENDS,
  ID_HOT_CHOCOLATE,
  ID_HOT_CHOCOLATE_ENDS,
  ID_BREAKFAST,
  ID_BREAKFAST_ENDS,
  CODE_CUTOFF,
  LUNCH_WITH_TEAM,
  TRADE_FAIR,
  JUDGING,
  PRIZES,
  DRINKS,
  FINI
} from '../../constants'

jest.useFakeTimers()

const DAYS_BEFORE_TEST = addDays(-5)(toDate(PASTRIES))
const HOURS_BEFORE_TEST = addHours(-5)(toDate(PASTRIES))
const PASTRIES_TEST = addMinutes(5)(toDate(PASTRIES))
const GO_TO_BEEHIVE_TEST = addMinutes(5)(toDate(GO_TO_BEEHIVE))
const SHOW_AND_TELL_TEST = addMinutes(5)(toDate(SHOW_AND_TELL))
const INNOVATION_DAY_BEGINS_TEST = addMinutes(5)(toDate(INNOVATION_DAY_BEGINS))
const ID_LUNCH_TEST = addMinutes(5)(toDate(ID_LUNCH))
const ID_LUNCH_ENDS_TEST = addMinutes(5)(toDate(ID_LUNCH_ENDS))
const ID_DINNER_TEST = addMinutes(5)(toDate(ID_DINNER))
const ID_DINNER_ENDS_TEST = addMinutes(5)(toDate(ID_DINNER_ENDS))
const ID_HOT_CHOCOLATE_TEST = addMinutes(5)(toDate(ID_HOT_CHOCOLATE))
const ID_HOT_CHOCOLATE_ENDS_TEST = addMinutes(5)(toDate(ID_HOT_CHOCOLATE_ENDS))
const ID_BREAKFAST_TEST = addMinutes(5)(toDate(ID_BREAKFAST))
const ID_BREAKFAST_ENDS_TEST = addMinutes(5)(toDate(ID_BREAKFAST_ENDS))
const CODE_CUTOFF_TEST = addMinutes(5)(toDate(CODE_CUTOFF))
const LUNCH_WITH_TEAM_TEST = addMinutes(5)(toDate(LUNCH_WITH_TEAM))
const TRADE_FAIR_TEST = addMinutes(5)(toDate(TRADE_FAIR))
const JUDGING_TEST = addMinutes(5)(toDate(JUDGING))
const PRIZES_TEST = addMinutes(5)(toDate(PRIZES))
const DRINKS_TEST = addMinutes(5)(toDate(DRINKS))
const FINI_TEST = addMinutes(5)(toDate(FINI))

describe('components:App', () => {
  it('renders <App/> correctly days before the event starts', () => {
    const wrapper = shallow(<App t={DAYS_BEFORE_TEST} />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly hours before the event starts', () => {
    const wrapper = shallow(<App t={HOURS_BEFORE_TEST} />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during PASTRIES', () => {
    const wrapper = shallow(<App t={PASTRIES_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during GO_TO_BEEHIVE', () => {
    const wrapper = shallow(<App t={GO_TO_BEEHIVE_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during SHOW_AND_TELL', () => {
    const wrapper = shallow(<App t={SHOW_AND_TELL_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly right after INNOVATION_DAY_BEGINS', () => {
    const wrapper = shallow(<App t={INNOVATION_DAY_BEGINS_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during ID_LUNCH', () => {
    const wrapper = shallow(<App t={ID_LUNCH_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly right after ID_LUNCH_ENDS', () => {
    const wrapper = shallow(<App t={ID_LUNCH_ENDS_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during ID_DINNER', () => {
    const wrapper = shallow(<App t={ID_DINNER_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly right after ID_DINNER_ENDS', () => {
    const wrapper = shallow(<App t={ID_DINNER_ENDS_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during ID_HOT_CHOCOLATE', () => {
    const wrapper = shallow(<App t={ID_HOT_CHOCOLATE_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly right after ID_HOT_CHOCOLATE_ENDS', () => {
    const wrapper = shallow(<App t={ID_HOT_CHOCOLATE_ENDS_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during ID_BREAKFAST', () => {
    const wrapper = shallow(<App t={ID_BREAKFAST_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly right after ID_BREAKFAST_ENDS', () => {
    const wrapper = shallow(<App t={ID_BREAKFAST_ENDS_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly right after CODE_CUTOFF', () => {
    const wrapper = shallow(<App t={CODE_CUTOFF_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during LUNCH_WITH_TEAM', () => {
    const wrapper = shallow(<App t={LUNCH_WITH_TEAM_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during TRADE_FAIR', () => {
    const wrapper = shallow(<App t={TRADE_FAIR_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during JUDGING', () => {
    const wrapper = shallow(<App t={JUDGING_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during PRIZES', () => {
    const wrapper = shallow(<App t={PRIZES_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly during DRINKS', () => {
    const wrapper = shallow(<App t={DRINKS_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders <App/> correctly after FINI', () => {
    const wrapper = shallow(<App t={FINI_TEST} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('runs clearInterval on unmount', () => {
    const wrapper = mount(<App />)
    jest.runOnlyPendingTimers()
    expect(setInterval).toHaveBeenCalled()
    wrapper.unmount()
    expect(clearInterval).toHaveBeenCalledTimes(1)
  })
})
