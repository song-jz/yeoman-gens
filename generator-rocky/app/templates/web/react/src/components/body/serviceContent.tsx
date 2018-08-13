import * as React from 'react'
import ServiceBodyTag from './serviceContent.css'

class ServiceBody extends React.Component<{}, {}>{
    render() {
        return (
            <ServiceBodyTag>
            <div className="serviceBodyFrame">
                <div className="serviceBody">
                    <p className="serviceP1Title">华泰证券资产托管业务</p>
                    <p className="serviceP1Content">华泰证券资产托管业务是指由公司担任托管人，按照法律法规的规定及基金合同的约定，代表资产所有人的利益，对基金履行安全保管基金财产、办理清算交割、复核审查资产净值、开展投资监督、召集基金份额持有人大会等职责的行为。</p>
                    <p className="serviceP2Title">华泰证券外包业务</p>
                    <p className="serviceP2Content">华泰证券基金外包服务，是指公司接受符合条件的基金管理人等专业机构投资者委托，为其所发行的证券投资基金类产品提供份额登记、资金结算、估值核算、事后监控及绩效评估等基础运营外包服务，以及未来可能衍生出的其他增值服务。基金管理人可结合自身情况及产品特点选择单项或多项服务内容。</p>
                    <div className="serviceFlow"></div>
                </div>
            </div>
            </ServiceBodyTag>
        )
    }
}

export default ServiceBody