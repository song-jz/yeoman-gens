//首页
import * as React from 'react'
import { observer } from 'mobx-react'
import deposit from '@common/index'
import { Button } from 'antd'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'
import HomeContent from '@components/body/homeContent'
interface HomeProps {

}
interface HomeStates {
    name: string

}
@observer
class HomePage extends React.Component<HomeProps, HomeStates>{
    constructor(props) {
        super(props)
        // ['requestTest'].forEach(m => this[m] = this[m].bind(this)) //bind this for methods
        this.state = {
            name: ''
        }
    }
    requestTest() {
        let params = {}
        let that = this;
        deposit.ajax({
            url: '/test1/getNames',
            data: params,
            callback(data) {
                console.log('我是请求的数据', data)
                that.setState({ name: data.name2 })
            }
        })
    }
    /*<Button type='primary' onClick={this.requestTest.bind(this)}>
                    测试接口
                    {this.state.name}
                </Button> */
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <HomeContent />
                <Footer />
            </div>
        )
    }
}

export default HomePage