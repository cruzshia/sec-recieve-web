import React from 'react'
import Layout from '@Components/Common/Layout'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from '@App/server/i18n'

interface Props {
  statusCode: number
}

class Error extends React.Component<Props & WithTranslation> {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return {
      namespacesRequired: ['common'],
      statusCode
    }
  }

  render() {
    return (
      <Layout>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </Layout>
    )
  }
}

export default withTranslation('common')(Error)
