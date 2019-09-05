// import Login from '@Components/Login'
import React from 'react'
import Route from '../routes/routes'
import { WithTranslation } from 'next-i18next'
import style from '@Components/Landing/landing.sass'
import { withTranslation } from '@App/server/i18n'

const Link = Route.Link
class Index extends React.PureComponent<WithTranslation> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }
  render() {
    return (
      <div>
        {/* <Login /> */}
        <ul>
          <li>
            <Link route='test' params={{ slug: 'aaa' }}>
              <a>{this.props.t('test')}</a>
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
  }
}

export default withTranslation('common')(Index)
