import { ACCOUNT_PROPS, NextProps } from '@App/types'

import Layout from '@Components/Common/Layout'
import QRCode from 'qrcode.react'
import React from 'react'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from '@App/server/i18n'

class Index extends React.PureComponent<WithTranslation & ACCOUNT_PROPS> {
  static async getInitialProps(ctx: NextProps) {
    return {
      namespacesRequired: ['common'],
      type: ctx.query.type,
      account: ctx.query.account
    }
  }
  render() {
    const { type, account } = this.props
    return (
      <Layout>
        <QRCode value='http://facebook.github.io/react/' />
        <br />
        payment embeded: {type}, {account}
      </Layout>
    )
  }
}

export default withTranslation('common')(Index)
