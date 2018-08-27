import * as React from 'react'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'
import ServiceBody from '@components/body/serviceContent'


class ServicePage extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <ServiceBody />
                <Footer />
            </div>
        )
    }
}

export default ServicePage