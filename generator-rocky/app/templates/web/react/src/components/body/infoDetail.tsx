import * as React from 'react'
import DetailTag from './infoDetail.css'
import NoticeStore from '@models/notice'
import { observer } from 'mobx-react'
import MypdfPreView from '../preview/MyPdfViewer'

@observer
class InfoDetail extends React.Component<{}, {}>{
    componentWillMount() {
        // let Notice = NoticeStore.getNotice();
        // console.log('我是notice', Notice['title'])
    }
    render() {
        return (
            <DetailTag>
                <h1>{NoticeStore.getNotice()['title']}</h1>
                <MypdfPreView />
            </DetailTag>
        )
    }
}

export default InfoDetail