import * as React from 'react'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'


class VoterPage extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <Header />
                <Menu />
                投资者服务平台
                <Footer />
            </div>
        )
    }
}

export default VoterPage