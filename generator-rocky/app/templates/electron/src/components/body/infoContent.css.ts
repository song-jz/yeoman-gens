import styled from 'styled-components'

/*let infourl = require('../../static/imgs/icon.jpg')*/

const InfoBodyTag = styled.div`
.infoFrame{
    width:100%;
    background-color:rgb(234,234,234);
    padding:20px 15% 40px;
.infoContent{
        background-color:white;
        padding:30px 30px 15px 30px;
.infoTitle
{
        font-weight:bold;
        font-size:16px;
        padding-bottom:15px;
        border-bottom:1px solid rgb(234,234,234);
}
.infoSearch
{
        /*通过antd-design拉取控件*/
        padding:20px 0;
        width:100%;
        height:100px;
}
.infoWaring
{
    display:inline-block;
    padding-bottom:20px;
    border-bottom:1px solid rgb(234,234,234);
}
.infoWaring .infoText
{
    display:block;/*p与img同一行显示*/
    font-size:14px;
}  
.infoWaring img
{
    padding:5px 10px 20px 0;
    float:left; 
}

.buttonCustom
{
    background-color:rgb(177,32,33);
    color:white;
    border:none;
    margin-left:30px;
}

.tableFrame .ant-table-tbody > tr > td
{
    border-bottom:none;
}
.tableFrame .ant-table-tbody > tr > td:first-child
{
    padding-left:30px;
}
.tableFrame .ant-table-tbody > tr > td:first-child:hover
{
    color:rgb(89,154,299);
}

.tableFrame .ant-table-thead > tr > th
{
    font-weight:bold; 
}    
.tableFrame .ant-table-thead > tr > th:first-child 
{
    padding-left:120px;
}
}
}



`
export default InfoBodyTag;