import React from 'react'
import { WithTranslation } from 'next-i18next'
import i18nHoc from '@Components/Common/I18nHoc'

interface Props extends WithTranslation {
  a: string
  b: string
}

class Test extends React.PureComponent<Props> {
  render() {
    return <div>{this.props.i18n.t('test')}</div>
  }
}

export default i18nHoc()(Test)
