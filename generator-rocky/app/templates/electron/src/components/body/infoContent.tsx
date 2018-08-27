import * as React from 'react'
import InfoBodyTag from './infoContent.css'
import { Table, Form, Input, Col, Row, Select, Button } from 'antd';
import deposit from '@common/index'
import NoticeStore from '@models/notice';
import Search from '@models/searchParams'
const imgurl = require('../../static/imgs/icon.png')
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
    searchParams: any
    constructor(props: InfoProps) {
        super(props)
        this.searchParams = {
            prodCode: ''
        }

        this.state = {
            columns: [{
                title: '公告标题',
                dataIndex: 'title',
                key: 'title',
                render: (text, data, index) => {
                    //console.log(`我是第${index + 1}行的数据`, JSON.stringify(data))
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
                showSizeChanger: true,
                current: 1,
                onChange: this.handleChange
            }
        }


    }
    handleChange(pageNum) {
        console.log('我是页码', pageNum);
        this.getDataList(pageNum, this.searchParams)

    }
    componentWillMount() {
        this.getDataList(1)
        this.searchParams = Search.getSearch()
    }
    showDetail(data) {
        //console.log(data);
        location.hash = "/infoDetail"
        NoticeStore.setNotice(data)
    }
    //获取table数据
    getDataList(pageNum, searchObj?: object) {
        let params = { pageNum: pageNum, pageSizeNum: '10' }

        params = Object.assign(params, searchObj)
        let that = this;

        // deposit.ajax({
        //     url: 'getDisclosureInfo',   //信息披露查询接口
        //     data: params,
        //     callback(data) {
        //         console.log('我是查询到的第一条数据标题', data[0].title)
        //         // if(data.title===params.prodName)
        //         that.setState({ dataSource: data })
        //     }
        // })

    }
    onSearch() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            console.log('我是请求的数据标题:', values.prodName)
            Search.setSearch(values)  //保存search参数
            this.searchParams = values;
            this.getDataList(1, this.searchParams)
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
                                    <Col span={5}>
                                        <FormItem
                                            label="产品代码"
                                            labelCol={{ span: 10 }}
                                            wrapperCol={{ span: 14 }}
                                        >
                                            {getFieldDecorator('prodCode', {
                                                rules: [],
                                                initialValue: this.searchParams.prodCode
                                            })(
                                                <Input placeholder="请输入" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={5}>
                                        <FormItem
                                            label="产品名称"
                                            labelCol={{ span: 10 }}
                                            wrapperCol={{ span: 14 }}
                                        >
                                            {getFieldDecorator('prodName', {
                                                rules: [],
                                                initialValue: ''
                                            })(
                                                <Input placeholder="请输入" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={5}>
                                        <FormItem
                                            label="文章标题"
                                            labelCol={{ span: 10 }}
                                            wrapperCol={{ span: 14 }}
                                        >
                                            {getFieldDecorator('articleTitle', {
                                                rules: [],
                                                initialValue: ''
                                            })(
                                                <Input placeholder="请输入" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={6}>
                                        <FormItem
                                            label="产品类型"
                                            labelCol={{ span: 10 }}
                                            wrapperCol={{ span: 14 }}
                                        >
                                            {getFieldDecorator('prodType', {
                                                rules: [],
                                                initialValue: ''
                                            })(
                                                <Select style={{ width: 130 }} placeholder="请选择(默认全部)">
                                                    <Option value="1">全部</Option>
                                                    <Option value="2">私募基金</Option>
                                                    <Option value="3">公募基金</Option>
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