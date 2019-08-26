import React from 'react'
import Route from '../routes/routes'
import style from '@Components/Landing/landing.sass'

const Link = Route.Link
export default () => (
  <ul>
    <li>
      <Link route='test' params={{ slug: 'aaa' }}>
        <a>a</a>
      </Link>
    </li>
    <li className={style.test}>
      <Link route='gogo' params={{ foo: 'aaa' }}>
        <a>b</a>
      </Link>
    </li>
  </ul>
)
