import Layout from '@Components/Common/Layout'
import Login from '@Components/Login'
import React from 'react'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from '@App/server/i18n'

class Index extends React.PureComponent<WithTranslation> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }
  render() {
    return (
      <Layout>
        <Login />
      </Layout>
    )
  }
}

export default withTranslation('common')(Index)
