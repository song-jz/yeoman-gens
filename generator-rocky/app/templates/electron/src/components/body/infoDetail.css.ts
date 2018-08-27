import styled from 'styled-components'

const DetailTag = styled.div`
.detailNoticeFrame{
    width:100%;
    background-color:rgb(241,241,241);
    padding:20px 15% 40px;
    font-size:16px;
.detailNoticeContent
{
    /* padding:0 30px; */
    margin:0 auto;
    width:906px;
}
.detailNoticeContent h1,h3
{
    text-align:center;
}

.detailNoticeContent div ul li
{
    display:inline-block;
    padding-top:10px;
}
.detailNoticeContent div ul li a
{
    color:black;
    text-decoration:underline;
}
.detailNoticeContent div ul li:first-child
{
    padding-left:10px;
}
.detailNoticeContent div ul li:nth-child(2)
{
    padding-right:10px;
    float:right;
}

.detailNoticeContent .detailNoticeDownNew
{
    margin-top:15px;
    text-align:left;
}
.detailNoticeContent .detailNoticeDownNew span
{
    font-weight:bold;
    font-size:14px;
    padding-right:15px;
}
.detailNoticeContent .detailNoticeDownNew a
{
    text-decoration:none;
    color:rgb(90,90,90);
    font-size:14px;
}
        
.detailNoticeContent .detailNoticeClose
{
    text-align:center;
    margin-top:10px;
}
.detailNoticeContent .detailNoticeClose .noticeClose
{
    background-color:rgb(177,32,33);
    width:100px;
    color:white;
    border:none;
}
}

`

export default DetailTag;