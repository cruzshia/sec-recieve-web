import { ACCOUNT_PROPS, NextProps } from '@App/types'

import Layout from '@Components/Common/Layout'
import React from 'react'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from '@App/server/i18n'

class paymentShare extends React.PureComponent<
  WithTranslation & ACCOUNT_PROPS
> {
  static async getInitialProps(ctx: NextProps) {
    return {
      namespacesRequired: ['common'],
      type: ctx.query.type,
      account: ctx.query.account
    }
  }
  render() {
    return <Layout>payment share</Layout>
  }
}

export default withTranslation('common')(paymentShare)
