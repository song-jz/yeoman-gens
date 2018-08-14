import * as React from 'react'
import DepositLayout from './views/layout'
import 'antd/dist/antd.css' // globally import css

class App extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <DepositLayout />
      </div>
    );
  }
}

export default App

