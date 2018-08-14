import * as React from 'react'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'
import InfoDetail from '@components/body/infoDetail'


class InfoDetailPage extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <InfoDetail />
                <Footer />
            </div>
        )
    }
}

export default InfoDetailPage