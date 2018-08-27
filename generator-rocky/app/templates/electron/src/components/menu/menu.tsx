import * as React from 'react'
import MenuTag from './menu.css'
import { removeObserver } from 'mobx/lib/internal';
import { setupMaster } from 'cluster';

interface MenuState {
    currentIndex: number;
}

class Menu extends React.Component<{}, MenuState>{
    constructor(props: MenuState) {
        super(props)
        this.state = {
            currentIndex: 0 //默认首页
        }
    }
    componentWillMount() {
        this.checkLink()    //获取当前页的信息
    }
    checkLink() {
        var curHash = location.hash.split('#')[1];
        switch (curHash) {
            case '/home':
                this.setState({ currentIndex: 0 })
                break;
            case '/service':
                this.setState({ currentIndex: 1 })
                break;
            case '/info':
                this.setState({ currentIndex: 2 })
                break;
            case '/infoDetail':
                this.setState({ currentIndex: 2 })
                break;
        }
    }

    clickLink(this, index) {
        this.setState({ currentIndex: index })
        switch (index) {
            case 0:
                location.hash = '/home';
                break;
            case 1:
                location.hash = '/service';
                break;
            case 2:
                location.hash = '/info';
                break;
        }
    }


    render() {

        return (
            <MenuTag>
                <div className="menuFrame">
                    <div className="menu">
                        <ul className="focusOn">
                            <li className={this.state.currentIndex == 0 ? 'currentSelect' : 'none'}><a onClick={this.clickLink.bind(this, 0)}>主页</a></li>
                            <li className={this.state.currentIndex == 1 ? 'currentSelect' : 'none'}><a onClick={this.clickLink.bind(this, 1)}>服务介绍</a></li>
                            <li className={this.state.currentIndex == 2 ? 'currentSelect' : 'none'}><a onClick={this.clickLink.bind(this, 2)}>信息披露</a></li>
                            <li><a href="https://pb.htsc.com.cn/htsc-pos-ms">管理人服务平台</a></li>
                            <li><a href="https://pb.htsc.com.cn/htsc-pos-is">投资者服务平台</a></li>
                        </ul>
                    </div>
                </div>
            </MenuTag>

        )
    }
}

export default Menu