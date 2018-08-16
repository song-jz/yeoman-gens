import * as React from 'react'
import BizTag from './biz.css'
import { Layout, Row, Col } from 'antd'
import BizHeader from './header/header'
import BizRouter from './bizRouter'


class Biz extends React.Component<{}, {}>{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BizTag>
                <Layout>
                    <BizHeader />
                    <Row>
                        <Col span={3}>
                        </Col>
                        <Col span={21}>
                        </Col>
                    </Row>
                </Layout>
            </BizTag>
        )
    }
}
export default Biz