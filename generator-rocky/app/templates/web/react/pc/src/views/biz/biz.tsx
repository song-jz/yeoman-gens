import * as React from 'react'
import BizTag from './biz.css'
import { Layout, Row, Col } from 'antd'
import BizHeader from './header/header'


class Biz extends React.Component<{}, {}>{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BizTag>
                <Layout>
                    <BizHeader />
                </Layout>
            </BizTag>
        )
    }
}
export default Biz