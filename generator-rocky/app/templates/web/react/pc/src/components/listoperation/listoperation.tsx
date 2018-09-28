import * as React from 'react'
import { Row, Col, Select, DatePicker, Input, Form,  Upload, Icon, Modal, Button  } from 'antd'
import SearchBar from './searchBar'
import BaseTable from '../global/table'

interface PropListOperation {
    
}
class ListOperation extends React.Component<PropListOperation, {}>{
    tableData = []
    total = 0
    pageNo = 0
    tableOptions = {
        pageSize: 10,
        onSelect: (selectedRow, selectedRows) => {},
        onPaging: (pageNo, pageSize) => {}
    }
    columns = [
        // {dataIndex: 'serial', title: '序号'},
        {dataIndex: 'text0', title: '字段00（索引）'},
        {dataIndex: 'text1', title: '字段01'},
        {dataIndex: 'text2', title: '字段02'},
        {dataIndex: 'text3', title: '字段03'},
        {dataIndex: 'text4', title: '字段04'},
        {dataIndex: 'text5', title: '字段05'},
        {dataIndex: 'text6', title: '字段06'},
        {dataIndex: 'text7', title: '字段07'},
        {dataIndex: 'time', title: '时间'},
        {dataIndex: 'date', title: '日期'},
        {dataIndex: 'text10', title: '字段10'},
    ]
    render(){
        let { pageSize, onPaging, onSelect } = this.tableOptions
        return (
            <div>
                <SearchBar />
                <div className="yeoman-page" style={{marginTop: 20}}>
                    <Button type="primary">新建操作01</Button>
                    <Button type="primary">新建操作02</Button>
                    <Button>确认操作</Button>
                    <Button>删除操作</Button>
                    <Button>校验错误</Button>
                    <BaseTable dataSource={this.tableData} total={this.total} pageSize={pageSize} onSelect={onSelect} 
                            onPaging={onPaging} pageNo={this.pageNo} columns={this.columns}/>
                </div>
            </div>
        )
    }
}
export default ListOperation