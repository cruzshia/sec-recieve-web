import Login from '@Components/Login'
import React from 'react'
import Route from '../routes/routes'
import style from '@Components/Landing/landing.sass'

const Link = Route.Link
export default () => (
  <div>
    <Login />
    <ul>
      <li>
        <Link route='test' params={{ slug: 'aaa' }}>
          <a>a</a>
        </Link>
      </li>
      <li className={style.test}>
        <Link route='accounts'>
          <a>b</a>
        </Link>
      </li>
    </ul>
  </div>
)
