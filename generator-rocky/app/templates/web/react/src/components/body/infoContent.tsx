import * as React from 'react'
import InfoBodyTag from './infoContent.css'
import { Table, Form, Input, Col, Row, Select, Button } from 'antd';
import deposit from '@common/index'
import NoticeStore from '@models/notice'
const imgurl = require('../../static/imgs/icon.jpg')
const FormItem = Form.Item;
const Option = Select.Option;

interface InfoProps {
    form: any
}
interface InfoStates {
    columns: Array<any>
    dataSource: Array<any>,
    pagination: any
}
class InfoBody extends React.Component<InfoProps, InfoStates>{
    constructor(props: InfoProps) {
        super(props)

        this.state = {
            columns: [{
                title: '公共标题',
                dataIndex: 'title',
                key: 'title',
                render: (text, data, index) => {
                    // console.log(`我是第${index + 1}行的数据`, JSON.stringify(data))
                    return <span style={{ cursor: 'pointer' }} onClick={this.showDetail.bind(this, data)}>{text}</span>
                }
            }, {
                title: '发布时间',
                dataIndex: 'publishTime',
                key: 'publishTime'
            }],
            dataSource: [],
            pagination: {
                pageSize: 10,
                showQuickJumper: true,
                showSizeChanger: true
            }
        }
    }
    componentWillMount() {
        this.getDataList()
    }
    showDetail(data) {
        location.hash = "/infoDetail"
        NoticeStore.setNotice(data)
    }
    //获取table数据
    getDataList(searchObj?: object) {
        let params = {}
        params = searchObj ? Object.assign(params, searchObj) : {}
        let that = this;
        deposit.ajax({
            url: '/info/noticeData',
            data: params,
            callback(data) {
                // console.log('我是请求的数据', data)
                that.setState({ dataSource: data })
            }
        })

    }
    onSearch() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            console.log('我是表单的数据:', values)
            let searchObj = values;
            this.getDataList(searchObj)
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <InfoBodyTag>
                <div className="infoFrame">
                    <div className="infoContent">
                        <div className="infoTitle">信息披露</div>
                        <div className="infoSearch">
                            <Form layout="inline">
                                <Row>
                                    <Col span={4}>
                                        <FormItem
                                            label="产品代码"
                                            labelCol={{ span: 12 }}
                                            wrapperCol={{ span: 12 }}
                                        >
                                            {getFieldDecorator('prodCode', {
                                                rules: [],
                                            })(
                                                <Input placeholder="请输入" />
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={4}>
                                        <FormItem
                                            label="产品名称"
                                            labelCol={{ span: 12 }}
                                            wrapperCol={{ span: 12 }}
                                        >
                                            {getFieldDecorator('prodName', {
                                                rules: [],
                                            })(
                                                <Input placeholder="请输入" />
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={4}>
                                        <FormItem
                                            label="文章标题"
                                            labelCol={{ span: 12 }}
                                            wrapperCol={{ span: 12 }}
                                        >
                                            {getFieldDecorator('articleTitle', {
                                                rules: [],
                                            })(
                                                <Input placeholder="请输入" />
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={9}>
                                        <FormItem
                                            label="产品类型"
                                            labelCol={{ span: 12 }}
                                            wrapperCol={{ span: 12 }}
                                        >
                                            {getFieldDecorator('prodType', {
                                                rules: [],
                                            })(
                                                <Select style={{ width: 120 }} placeholder="请选择(默认全部)">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">私募基金</Option>
                                                    <Option value="3" >公募基金</Option>
                                                    <Option value="4">其他</Option>
                                                </Select>
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={3}>
                                        <Button className="buttonCustom" onClick={this.onSearch.bind(this)}>查询</Button>
                                    </Col>
                                </Row>
                            </Form>



                        </div>
                        <div className="infoWaring"><img src={imgurl} />
                            <p className="infoText">根据《私募投资基金信息披露管理办法》第十一条“信息披露义务人披露基金信息，不得存在以下行为：(一) 公开披露或者变相公开披露”，请登录管理人服务平台或投资者服务平台进行查询私募基金相关信息。</p>
                        </div>
                        <div className="tableFrame">
                            <Table
                                columns={this.state.columns}
                                dataSource={this.state.dataSource}
                                rowKey="id"
                                pagination={this.state.pagination}
                            />

                        </div>
                    </div>
                </div>
            </InfoBodyTag>
        )
    }
}
const WrappedInfoBodyForm = Form.create()(InfoBody);
export default WrappedInfoBodyForm