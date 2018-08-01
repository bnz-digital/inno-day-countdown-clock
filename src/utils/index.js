import React, { Fragment } from 'react'
// import { join, lensIndex, over, pipe, toUpper } from 'ramda'
import differenceInDays from 'date-fns/fp/differenceInDays'
import differenceInHours from 'date-fns/fp/differenceInHours'
import differenceInMinutes from 'date-fns/fp/differenceInMinutes'
import differenceInSeconds from 'date-fns/fp/differenceInSeconds'

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
} from '../constants'
import Breakdown from '../components/Breakdown'
import Highlight from '../components/styled/Highlight'
import Location from '../components/styled/Location'
import Now from '../components/styled/Now'
import SubTimer from '../components/styled/SubTimer'

// const toSentence = pipe(over(lensIndex(0), toUpper), join(''))

export function leftPad (num) {
  return ('00' + parseInt(num, 10)).slice(-2)
}

export function getTimeParts (diff) {
  const d = Math.abs(diff)
  const secs = leftPad(d % 60)
  const mins = leftPad(d % 3600 / 60)
  const hrs = leftPad(d % (3600 * 24) / 3600)
  const days = parseInt(d / (3600 * 24), 10)

  return { days, hrs, mins, secs }
}

export function getDifference (t1, t2) {
  const secs = differenceInSeconds(t1)(t2)

  if (secs < 60) {
    return `${secs + 1} second${secs > 0 ? 's' : ''}`
  }

  const mins = differenceInMinutes(t1)(t2)

  if (mins < 90) {
    return `${mins + 1} minutes`
  }

  const hrs = differenceInHours(t1)(t2)

  if (hrs < 24) {
    return `${hrs + 1} hours`
  }

  const days = differenceInDays(t1)(t2)

  return `${days + 1} days`
}

export function getCountdown (t1, t2, event) {
  return (
    <Fragment>
      Less than
      {' '}
      <Highlight>{getDifference(t1, t2)}</Highlight>
      {' '}
      to
      {' '}
      <Highlight>{event}</Highlight>
    </Fragment>
  )
}

export function getSubTimer (t) {
  return (
    <SubTimer>
      <Highlight>
        Code Cutoff in
        {' '}
        <Breakdown
          unstyled
          {...getTimeParts(differenceInSeconds(t)(CODE_CUTOFF))}
        />
      </Highlight>
    </SubTimer>
  )
}

export function getData (t) {
  if (t >= FINI) {
    return {
      hrs: '00',
      mins: '00',
      secs: '00',
      message: (
        <Fragment>
          <Highlight>Show's over, folks!</Highlight>
          <Location>Gumbles has left the building.</Location>
        </Fragment>
      )
    }
  }

  if (t > DRINKS) {
    return {
      ...getTimeParts(differenceInSeconds(t)(FINI)),
      message: (
        <Fragment>
          <p>
            <Highlight>The Wrap Party</Highlight> is happening
            {' '}
            <Highlight>NOW!</Highlight>
          </p>
          <Location>4:30-8 PM, Te Aro Room, Mac's on the Waterfront</Location>
        </Fragment>
      )
    }
  }

  if (t > PRIZES) {
    return {
      ...getTimeParts(differenceInSeconds(t)(DRINKS)),
      message: (
        <Fragment>
          {getCountdown(t, DRINKS, 'the Wrap Party!')}
          <Location>4:30 PM, Te Aro Room, Mac's on the Waterfront</Location>
          <Now>
            Prizes at Mac's on the Waterfront!
          </Now>
        </Fragment>
      )
    }
  }

  if (t > JUDGING) {
    return {
      ...getTimeParts(differenceInSeconds(t)(PRIZES)),
      message: (
        <Fragment>
          {getCountdown(t, PRIZES, 'Prizes!')}
          <Location>4 PM, Te Aro Room, Mac's on the Waterfront</Location>
          <Now>
            Take a break while the judges deliberate!
          </Now>
        </Fragment>
      )
    }
  }

  if (t > TRADE_FAIR) {
    return {
      ...getTimeParts(differenceInSeconds(t)(JUDGING)),
      message: (
        <Fragment>
          {getCountdown(t, JUDGING, 'the Judging')}
          <Location>3:30 PM, Te Aro Room, Mac's on the Waterfront</Location>
          <Now>
            Trade Fair at Mac's (Waterfront)
          </Now>
        </Fragment>
      )
    }
  }

  if (t > LUNCH_WITH_TEAM) {
    return {
      ...getTimeParts(differenceInSeconds(t)(TRADE_FAIR)),
      message: (
        <Fragment>
          {getCountdown(t, TRADE_FAIR, 'the Trade Fair!')}
          <Location>1:30 PM, Te Aro Room, Mac's on the Waterfront</Location>
          <Location>NOTE: Macs Brewery is open for project set up</Location>
          <Now>
            <Highlight>Take your team to lunch!</Highlight>
          </Now>
        </Fragment>
      )
    }
  }

  if (t > CODE_CUTOFF) {
    return {
      ...getTimeParts(differenceInSeconds(t)(TRADE_FAIR)),
      message: (
        <Fragment>
          {getCountdown(t, TRADE_FAIR, 'the Trade Fair!')}
          <Location>1:30 PM, Te Aro Room, Mac's on the Waterfront</Location>
          <Location>NOTE: Macs Brewery is open for project set up</Location>
          <Now>
            <Highlight>Take a breather</Highlight>
          </Now>
        </Fragment>
      )
    }
  }

  if (t > ID_BREAKFAST_ENDS) {
    return {
      ...getTimeParts(differenceInSeconds(t)(CODE_CUTOFF)),
      message: (
        <Fragment>
          {getCountdown(t, CODE_CUTOFF, 'Code Cutoff!')}
          <p>Finish up!</p>
        </Fragment>
      )
    }
  }

  if (t > ID_BREAKFAST) {
    return {
      ...getTimeParts(differenceInSeconds(t)(ID_BREAKFAST_ENDS)),
      message: (
        <Fragment>
          {getCountdown(t, ID_BREAKFAST_ENDS, 'breakfast ends')}
          <Location>Come to Coop levels 1, 9, or 14</Location>
          <Now>Pastries and fruit!</Now>
          {getSubTimer(t)}
        </Fragment>
      )
    }
  }

  if (t > ID_HOT_CHOCOLATE_ENDS) {
    return {
      ...getTimeParts(differenceInSeconds(t)(ID_BREAKFAST)),
      message: (
        <Fragment>
          {getCountdown(t, ID_BREAKFAST, 'Breakfast')}
          <Location>Pastries at 7:30 AM on Coop levels 1, 9, and 14</Location>
          <Now>Chill out time in LG.P1.20</Now>
          {getSubTimer(t)}
        </Fragment>
      )
    }
  }

  if (t > ID_HOT_CHOCOLATE) {
    return {
      ...getTimeParts(differenceInSeconds(t)(ID_HOT_CHOCOLATE_ENDS)),
      message: (
        <Fragment>
          {getCountdown(t, ID_BREAKFAST, 'Breakfast')}
          <Location>Pastries at 7:30 AM on Coop levels 1, 9, and 14</Location>
          <Now>Midnight hot chocolate in LG.P1.20</Now>
          {getSubTimer(t)}
        </Fragment>
      )
    }
  }

  if (t > ID_DINNER_ENDS) {
    return {
      ...getTimeParts(differenceInSeconds(t)(ID_HOT_CHOCOLATE)),
      message: (
        <Fragment>
          {getCountdown(t, ID_HOT_CHOCOLATE, 'Midnight Hot Chocolate!')}
          <Location>At Midnight in LG.P1.20</Location>
          <Now>Chill out time in LG.P1.20</Now>
          {getSubTimer(t)}
        </Fragment>
      )
    }
  }

  if (t > ID_DINNER) {
    return {
      ...getTimeParts(differenceInSeconds(t)(ID_DINNER_ENDS)),
      message: (
        <Fragment>
          {getCountdown(t, ID_DINNER_ENDS, "dinner's over")}
          <Location>Come to the Coop House Atria Café</Location>
          <Now>The Big Digital Dinner!</Now>
          {getSubTimer(t)}
        </Fragment>
      )
    }
  }

  if (t > ID_LUNCH_ENDS) {
    return {
      ...getTimeParts(differenceInSeconds(t)(ID_DINNER)),
      message: (
        <Fragment>
          {getCountdown(t, ID_DINNER, 'Digital Dinner')}
          <Location>At 6:30 PM in the Coop House Atria Café</Location>
          <Now>Work on your Innovation Day project!</Now>
          {getSubTimer(t)}
        </Fragment>
      )
    }
  }

  if (t > ID_LUNCH) {
    return {
      ...getTimeParts(differenceInSeconds(t)(ID_LUNCH_ENDS)),
      message: (
        <Fragment>
          {getCountdown(t, ID_LUNCH_ENDS, 'grab lunch')}
          <Location>Coop levels 1, 9, and 14</Location>
          <Now>Pick up your Eat My Lunch!</Now>
          {getSubTimer(t)}
        </Fragment>
      )
    }
  }

  if (t > INNOVATION_DAY_BEGINS) {
    return {
      ...getTimeParts(differenceInSeconds(t)(ID_LUNCH)),
      message: (
        <Fragment>
          {getCountdown(t, ID_LUNCH, 'Eat My Lunch!')}
          <Location>12:30 PM on Coop levels 1, 9, and 14</Location>
          <Now>Work on your Innovation Day project!</Now>
          {getSubTimer(t)}
        </Fragment>
      )
    }
  }

  if (t > SHOW_AND_TELL) {
    return {
      ...getTimeParts(differenceInSeconds(t)(INNOVATION_DAY_BEGINS)),
      message: (
        <Fragment>
          {getCountdown(t, INNOVATION_DAY_BEGINS, 'Innovation Day')}
          <Location>11 AM at the Coop Building</Location>
          <Now>
            Show & Tell at the Beehive Banquet Hall
          </Now>
        </Fragment>
      )
    }
  }

  if (t > GO_TO_BEEHIVE) {
    return {
      ...getTimeParts(differenceInSeconds(t)(SHOW_AND_TELL)),
      message: (
        <Fragment>
          {getCountdown(t, SHOW_AND_TELL, 'Show & Tell')}
          <Location>9 AM at the Beehive Banquet Hall</Location>
          <Now>
            Make way to the Beehive!
          </Now>
        </Fragment>
      )
    }
  }

  if (t > PASTRIES) {
    return {
      ...getTimeParts(differenceInSeconds(t)(GO_TO_BEEHIVE)),
      message: (
        <Fragment>
          {getCountdown(t, GO_TO_BEEHIVE, 'head to the Beehive')}
          <Location>At 8:30 AM make way to the Beehive Banquet Hall</Location>
          <Now>
            Pastries on Coop levels 1, 9, and 14
          </Now>
        </Fragment>
      )
    }
  }

  return {
    ...getTimeParts(differenceInSeconds(t)(PASTRIES)),
    message: (
      <Fragment>
        {getCountdown(t, PASTRIES, 'Innovation Day!')}
        <Location>Pastries at 7:45 AM on Coop levels 1, 9, and 14</Location>
        <p>Are you ready?</p>
      </Fragment>
    )
  }
}
