import React from 'react'

class A extends React.PureComponent {
  static async getInitialProps(ctx: any) {
    return {}
  }

  render() {
    return <div>aaaaa</div>
  }
}

export default A
