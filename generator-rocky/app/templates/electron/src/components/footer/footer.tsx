import * as React from 'react'
import FooterTag from './footer.css'

const qrurl = require('../../static/imgs/qr.png')
const ppNumberurl = require('../../static/imgs/phone.jpg')

class Footer extends React.Component<{}, {}>{

    render() {
        return (
            <FooterTag>
                <div className="footerFrame">
                    <div className="footerContent">
                        <div className="left">
                            <ul className="footerLeft">
                                <li>华泰中心</li>
                                <li><a href="http://www.htsc.com.hk/zh/index.aspx" target="_blank">华泰香港</a></li>
                                <li><a href="https://www.lhzq.com/main/sy/index.shtml" target="_blank">华泰联合证券</a></li>
                                <li><a href="http://www.htzjtz.com.cn/" target="_blank">华泰紫金投资</a></li>
                                <li><a href="http://www.nffund.com/" target="_blank">南方基金</a></li>
                                <li><a href="http://www.huatai-pb.com/" target="_blank">华泰柏瑞</a></li>
                                <li><a href="http://www.htgwf.com/" target="_blank">华泰期货</a></li>
                                <li><a href="http://www.jseec.com.cn/" target="_blank">江苏股权交易中心</a></li>
                                <li><a href="http://www.htsc.com.cn/htzq/htcx/htcx.jsp" target="_blank">华泰创新</a></li>
                            </ul>
                        </div>
                        <div className="middle">
                            <ul className="footerMiddle">
                                <li>服务中心</li>
                                <li><a href="http://imcc.zhangle.com:8081/webchat/" target="_blank">客服中心</a></li>
                                <li><a href="http://imcc.zhangle.com:8081/webchat/leaveMessage.jsp" target="_blank">投诉建议</a></li>
                                <li><a href="https://member.zhangle.com/openMobile/index.jsp" target="_blank">预约开户</a></li>
                                <li><a href="http://job.htsc.com.cn/" target="_blank">诚聘英才</a></li>
                                <li><a href="http://www.htsc.com.cn/htzq//fileCommos/mztk.jsp" target="_blank">免责条款</a></li>
                                <li><a href="http://www.htsc.com.cn/htzq/fileCommos/jjxx.jsp" target="_blank">纪检信箱</a></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul className="footerRight">
                                <li><a href="http://www.htsc.com.cn/htzq//fileCommos/yqlj.jsp" target="_blank">友情链接</a></li>
                                <li><a href="http://www.cs.com.cn/" target="_blank">中国证券网</a></li>
                                <li><a href="http://www.sse.com.cn/" target="_blank">上海证券交易所</a></li>
                                <li><a href="http://www.szse.cn/" target="_blank">深圳证券交易所</a></li>
                                <li><a href="http://www.csrc.gov.cn/pub/newsite/" target="_blank">中国证监会</a></li>
                                <li><a href="http://www.sfc.hk/web/EN/index.html" target="_blank">香港证监会</a></li>
                            </ul>
                        </div>
                        <div className="qrCode">
                            <div className="ppNumber">
                                <span>服务热线</span>
                                <img src={ppNumberurl} />
                            </div>
                            <span className="ppName">我们7*24小时为您服务</span>
                            <div className="qrCodeImg"><img src={qrurl} /></div>
                        </div>
                    </div>
                    <div className="footerBottom">
                        <p>Copyright 2008-2018 Huatai Securities All Rights Reserved 华泰证券股份有限公司版权所有</p>
                        <p>公司总部：江苏省南京市江东中路228号 邮编：210019  公司级总机：025-83389999  投诉电话：4008895597  传真：025-83387337   邮箱：95597@htsc.com</p>
                        <div>
                            <a href="http://www.htsc.com.cn/htzq/fileCommos/zytsh.jsp" target="_blank">信息系统安全性设计审定</a>
                            <a href="http://www.htsc.com.cn/htzq/fileCommos/infosys.jsp" target="_blank">证监会核准网上证券委托业务资格</a>
                            <a href="http://www.htsc.com.cn/htzq/fileCommos/icp.jsp" target="_blank">许可证编号：苏B2-20140508</a>
                            <a href="http://www.miitbeian.gov.cn/" target="_blank">备案许可证编号：苏ICP证030125-1</a>
                        </div>
                    </div>
                </div>
            </FooterTag>
        )
    }
}

export default Footer