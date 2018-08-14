import * as React from 'react'
import FooterTag from './footer.css'

class Footer extends React.Component<{}, {}>{

    render() {

        return (
            <FooterTag>
            <div className="footerFrame">
            <div className="footerContent">
              <div className="left">
                <ul className="footerLeft">
                    <li>华泰中心</li>
                    <li>华泰香港</li>
                    <li>华泰联合证券</li>
                    <li>华泰紫金投资</li>
                    <li>南方基金</li>
                    <li>华泰柏瑞</li>
                    <li>华泰期货</li>
                    <li>江苏股权交易中心</li>
                    <li>华泰创新</li>
                </ul>
                </div>
                <div className="middle">
                <ul className="footerMiddle">
                    <li>服务中心</li>
                    <li>客服中心</li>
                    <li>投诉建议</li>
                    <li>预约开户</li>
                    <li>诚聘英才</li>
                    <li>免责条款</li>
                    <li>纪检信箱</li>
                </ul>
                </div>
                <div className="right">
                <ul className="footerRight">
                    <li>友情链接</li>
                    <li>中国证券网</li>
                    <li>上海证券交易所</li>
                    <li>深圳证券交易所</li>
                    <li>中国证监会</li>
                    <li>香港证监会</li>
                </ul>
                </div>
                <div className="qrCode">
                <p className="pp">服务热线</p>
                <p className="ppNumber">95577</p>
                <p className="ppName">我们7*24小时为您服务</p>
                <p><img src=""/></p>
                </div>
                </div>
                <div className="footerBottom">
                    <p>Copyright 2008-2018 Huatai Securities All Rights Reserved 华泰证券股份有限公司版权所有</p>
                    <p>公司总部：江苏省南京市江东中路228号 邮编：210019  公司级总机：025-83389999  投诉电话：4008895597  传真：025-83387337   邮箱：95597@htsc.com</p>
                    <p>
                        <a>信息系统安全性设计审定</a>
                        <a>证监会核准网上证券委托业务资格</a>
                        <a>许可证编号：苏B2-20140508</a>
                        <a>备案许可证编号：苏ICP证030125-1</a>
                    </p>
                </div>
            </div>
            </FooterTag>
        )
    }
}

export default Footer