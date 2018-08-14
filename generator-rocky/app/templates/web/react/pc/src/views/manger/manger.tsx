import * as React from 'react'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'


class MangerPage extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <Header />
                <Menu />
                管理人服务平台
                <Footer />
            </div>
        )
    }
}

export default MangerPage