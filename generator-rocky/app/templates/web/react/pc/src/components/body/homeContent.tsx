import * as React from 'react'
import BodyTag from './homeContent.css'

class Body extends React.Component<{}, {}>{
    getMore() {
        location.hash = "/info"
    }
    render() {
        return (
            <BodyTag>
                <div className="bodyContent">
                    <div className="bodyContentTop">
                        <p className="topTitle">华泰证券资产托管业务</p>
                        <p className="topContentOneTitle">1、基金托管业务</p>
                        <p className="topContentOneP1">华泰证券已取得证券投资基金托管资格，可以为公募基金和私募基金提供托管服务，其中所指私募基金包括各类私募基金管理机构发行的私募基金产品、证券公司、基金管理公司、期货公司及其子公司发行的资产管理计划等。</p>
                        <p className="topContentOneP2">华泰证券托管服务，是指由华泰证券担任基金托管人按照法律法规的规定及基金合同的约定，对基金履行安全保管基金财产、办理清算交割、复核审查资产净值、开展投资监督、召集基金份额持有人大会等职责的行为。基金托管主要服务内容包括：资产保管、清算交收、估值核算、投资监督、信息披露。</p>
                        <div className="topContentTwo">
                            <p className="topContentTwoTitle">2、基金外包业务</p>
                            <p className="topContentTwoP1">华泰证券已第一批通过了基金业务外包服务机构备案，取得了基金业务外包服务资格。能够为私募基金提供运营业务外包，支持私募基金管理人特色化、差异化发展，降低私募基金管理人运营成本，提高其核心竞争力，其中所指私募基金包括各类私募基金管理机构发行的私募基金产品；证券公司、基金管理公司、期货公司及其子公司发行的资产管理计划等。</p>
                            <p className="topContentTwoP2">华泰证券接受符合条件的私募基金管理人等专业机构投资者的委托，为其所发行的证券投资基金类产品提供份额登记、资金结算、估值核算、事后监控及绩效评估等基础运营外包服务，以及未来可能衍生出的其他增值服务。专业机构投资者可结合自身情况及产品特点选择以上单项或多项服务内容。</p>
                        </div>
                        {/* <p className="topContentOpen"><a>收起</a></p> */}
                    </div>
                    <div className="bodyContentBottom">
                        <p className="bottomTitle">信息披露</p>
                        <p className="bottomTitleRight"><a onClick={this.getMore.bind(this)}>更多</a></p>
                        <div className="bottomList">
                            <p className="bottomListTitle">信息披露标题</p>
                            <p className="bottomListTime">发布时间</p>
                        </div>
                        <div className="bottomListContent">
                            <ul>
                                <li><a>永赢基金管理有限公司关于旗下部分基金新增代销机构的公告1</a><p>2018-06-08</p></li>
                                <li><a>永赢基金管理有限公司关于旗下部分基金新增代销机构的公告2</a><p>2018-06-09</p></li>
                                <li><a>永赢基金管理有限公司关于旗下部分基金新增代销机构的公告3</a><p>2018-06-10</p></li>
                                <li><a>永赢基金管理有限公司关于旗下部分基金新增代销机构的公告4</a><p>2018-06-11</p></li>
                                <li><a>永赢基金管理有限公司关于旗下部分基金新增代销机构的公告5</a><p>2018-06-12</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </BodyTag>
        )
    }
}

export default Body