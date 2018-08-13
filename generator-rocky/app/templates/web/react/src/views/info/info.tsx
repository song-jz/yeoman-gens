import * as React from 'react'
import Header from '@components/header/header'
import Menu from '@components/menu/menu'
import Footer from '@components/footer/footer'
import WrappedInfoBodyForm from '@components/body/infoContent'


class InfoPage extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <WrappedInfoBodyForm />
                <Footer />
            </div>
        )
    }
}

export default InfoPage