import React from 'react'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from '@App/server/i18n'

function I18nHoc<T>(namspace?: string) {
  return (TargetCompoent: any) =>
    withTranslation(namspace)(
      class extends React.Component<T & WithTranslation> {
        static async getInitialProps() {
          return {
            namespacesRequired: [namspace || 'common']
          }
        }

        render() {
          return (
            <React.Fragment>
              <TargetCompoent {...this.props} />
            </React.Fragment>
          )
        }
      }
    )
}
export default I18nHoc
