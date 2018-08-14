import * as React from 'react'
import HeaderTag from './header.css'


class Header extends React.Component<{}, {}>{

    render() {

        return (
            <HeaderTag>
                <div className="headFrame">
                    <div className="content">
                        <div className="logo">
                        </div>
                        <div className="cornerimg">
                        </div>
                    </div>
                </div>
            </HeaderTag>

        )
    }
}

export default Header