import * as React from 'react'
import DetailTag from './infoDetail.css'
import NoticeStore from '@models/notice'
import { observer } from 'mobx-react'
import MypdfPreView from '../preview/MyPdfViewer'
import { Button } from 'antd'
import deposit from '@common/index'
interface InfoDetailStates {
    myPdffile: any
}
@observer
class InfoDetail extends React.Component<{}, InfoDetailStates>{

    constructor(props: InfoDetailStates) {
        super(props);
        this.state = {
            myPdffile: ''
        }
    }
    componentWillMount() {
        //  this.getData()
    }

    getData() {
        let params = { fileUrl: '', fileName: '' };
        let that = this;
        deposit.ajax({
            url: 'downloadDisclosureInfo',   //信息披露附件展示接口   
            data: params,
            callback(data) {
                console.log('我是数据流', data) //'BLODJKAJDIAWIJDHDUWEDAWJDOAOJWODOWAJODWAJ'
                // if(data.title===params.prodName)
                that.setState({ myPdffile: data })
            }
        })
    }
    handleClose() {
        location.hash = '/info';
    }
    render() {
        return (
            <DetailTag>
                <div className="detailNoticeFrame">
                    <div className="detailNoticeContent">
                        <h1>{NoticeStore.getNotice()['title']}</h1>
                        <h3>{NoticeStore.getNotice()['publishTime']}</h3>
                        <MypdfPreView myPdf={this.state.myPdffile} />
                        <div className="detailNoticeDownNew"><span>附件:</span><a>{NoticeStore.getNotice()['title']}</a>
                        </div>
                        <div className="detailNoticeClose"><Button className="noticeClose" onClick={this.handleClose.bind(this)}>关闭页面</Button></div>
                    </div>
                </div>
            </DetailTag>
        )
    }
}

export default InfoDetail