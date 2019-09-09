import Layout from '@Components/Common/Layout'
import React from 'react'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from '@App/server/i18n'
import SignUp from '@Components/SignUp'

class SignUpPage extends React.PureComponent<WithTranslation> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }
  render() {
    return (
      <Layout>
        <SignUp />
      </Layout>
    )
  }
}

export default withTranslation('common')(SignUpPage)
