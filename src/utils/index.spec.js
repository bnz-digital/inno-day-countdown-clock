import {
  getCountdown,
  getData,
  getDifference,
  getSubTimer,
  getTimeParts,
  leftPad
} from '.'
import { CODE_CUTOFF } from '../constants'

const m = 1500000000000
const t1 = new Date(m)

describe('utils', () => {
  describe('leftPad', () => {
    it('pads a single digit properly', () => {
      expect(leftPad(1)).toBe('01')
    })

    it('does not pad two digits', () => {
      expect(leftPad(12)).toBe('12')
    })
  })

  describe('getTimeParts', () => {
    it('gets the correct time parts', () => {
      const diff = 86400 * 2 + 3600 * 5 + 60 * 22 + 37
      const { days, hrs, mins, secs } = getTimeParts(diff)

      expect(days).toBe(2)
      expect(hrs).toBe('05')
      expect(mins).toBe('22')
      expect(secs).toBe('37')
    })
  })

  describe('getCountdown', () => {
    it('outputs the correct countdown', () => {
      const fragment = getCountdown(
        new Date('2018-08-03T07:30:00+1200'),
        CODE_CUTOFF,
        'Code Cutoof'
      )

      expect(toJson(fragment)).toMatchSnapshot()
    })
  })

  describe('getSubTimer', () => {
    it('outputs the correct countdown', () => {
      const fragment = getSubTimer(new Date('2018-08-03T07:30:00+1200'))

      expect(toJson(fragment)).toMatchSnapshot()
    })
  })

  describe('getDifference', () => {
    it('gets the correct difference in seconds', () => {
      const t2 = new Date(m + 55000)

      expect(getDifference(t1, t2)).toBe('56 seconds')
    })

    it('gets the correct difference in seconds (singular)', () => {
      const t2 = new Date(m + 500)

      expect(getDifference(t1, t2)).toBe('1 second')
    })

    it('gets the correct difference in minutes', () => {
      const t2 = new Date(m + 61000)

      expect(getDifference(t1, t2)).toBe('2 minutes')
    })

    it('gets the correct difference in hours', () => {
      const t2 = new Date(m + 5400000)

      expect(getDifference(t1, t2)).toBe('2 hours')
    })

    it('gets the correct difference in days', () => {
      const t2 = new Date(m + 86500000)

      expect(getDifference(t1, t2)).toBe('2 days')
    })
  })

  describe('getData', () => {
    it('works for days before PASTRIES', () => {
      const data = getData(new Date('2018-07-30T05:43:21+1200'))

      expect(data.days).toBe(3)
      expect(data.hrs).toBe('02')
      expect(data.mins).toBe('01')
      expect(data.secs).toBe('39')
    })

    it('works for times before PASTRIES', () => {
      const data = getData(new Date('2018-08-02T05:43:21+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('02')
      expect(data.mins).toBe('01')
      expect(data.secs).toBe('39')
    })

    it('works during PASTRIES', () => {
      const data = getData(new Date('2018-08-02T07:51:27+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('00')
      expect(data.mins).toBe('38')
      expect(data.secs).toBe('33')
    })

    it('works during GO_TO_BEEHIVE', () => {
      const data = getData(new Date('2018-08-02T08:44:19+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('00')
      expect(data.mins).toBe('15')
      expect(data.secs).toBe('41')
    })

    it('works during SHOW_AND_TELL', () => {
      const data = getData(new Date('2018-08-02T09:01:07+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('01')
      expect(data.mins).toBe('58')
      expect(data.secs).toBe('53')
    })

    it('works during INNOVATION_DAY_BEGINS', () => {
      const data = getData(new Date('2018-08-02T11:11:12+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('01')
      expect(data.mins).toBe('18')
      expect(data.secs).toBe('48')
    })

    it('works during ID_LUNCH', () => {
      const data = getData(new Date('2018-08-02T12:35:05+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('00')
      expect(data.mins).toBe('24')
      expect(data.secs).toBe('55')
    })

    it('works during ID_LUNCH_ENDS', () => {
      const data = getData(new Date('2018-08-02T13:12:51+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('05')
      expect(data.mins).toBe('17')
      expect(data.secs).toBe('09')
    })

    it('works during ID_DINNER', () => {
      const data = getData(new Date('2018-08-02T18:36:15+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('00')
      expect(data.mins).toBe('23')
      expect(data.secs).toBe('45')
    })

    it('works during ID_DINNER_ENDS', () => {
      const data = getData(new Date('2018-08-02T19:17:41+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('04')
      expect(data.mins).toBe('42')
      expect(data.secs).toBe('19')
    })

    it('works during ID_HOT_CHOCOLATE', () => {
      const data = getData(new Date('2018-08-03T00:15:15+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('00')
      expect(data.mins).toBe('14')
      expect(data.secs).toBe('45')
    })

    it('works during ID_HOT_CHOCOLATE_ENDS', () => {
      const data = getData(new Date('2018-08-03T02:51:03+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('04')
      expect(data.mins).toBe('38')
      expect(data.secs).toBe('57')
    })

    it('works during ID_BREAKFAST', () => {
      const data = getData(new Date('2018-08-03T07:33:33+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('00')
      expect(data.mins).toBe('26')
      expect(data.secs).toBe('27')
    })

    it('works during ID_BREAKFAST_ENDS', () => {
      const data = getData(new Date('2018-08-03T09:00:00+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('02')
      expect(data.mins).toBe('00')
      expect(data.secs).toBe('00')
    })

    it('works during CODE_CUTOFF', () => {
      const data = getData(new Date('2018-08-03T11:11:11+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('02')
      expect(data.mins).toBe('18')
      expect(data.secs).toBe('49')
    })

    it('works during LUNCH_WITH_TEAM', () => {
      const data = getData(new Date('2018-08-03T12:12:12+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('01')
      expect(data.mins).toBe('17')
      expect(data.secs).toBe('48')
    })

    it('works during TRADE_FAIR', () => {
      const data = getData(new Date('2018-08-03T13:37:37+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('01')
      expect(data.mins).toBe('52')
      expect(data.secs).toBe('23')
    })

    it('works during JUDGING', () => {
      const data = getData(new Date('2018-08-03T15:09:08+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('00')
      expect(data.mins).toBe('20')
      expect(data.secs).toBe('52')
    })

    it('works during PRIZES', () => {
      const data = getData(new Date('2018-08-03T15:34:24+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('00')
      expect(data.mins).toBe('25')
      expect(data.secs).toBe('36')
    })

    it('works during DRINKS', () => {
      const data = getData(new Date('2018-08-03T18:18:18+1200'))

      expect(data.days).toBe(0)
      expect(data.hrs).toBe('01')
      expect(data.mins).toBe('41')
      expect(data.secs).toBe('42')
    })

    it('works after FINI', () => {
      const data = getData(new Date('2018-08-03T21:01:02+1200'))

      expect(data.days).toBeUndefined()
      expect(data.hrs).toBe('00')
      expect(data.mins).toBe('00')
      expect(data.secs).toBe('00')
    })
  })
})
