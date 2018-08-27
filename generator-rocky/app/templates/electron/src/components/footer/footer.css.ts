import styled from 'styled-components'

const FooterTag = styled.div`
.footerFrame
{
        width:100%;
        height:auto;
        padding: 0 15%;
        min-width: 1200px;
}
.footerFrame .footerContent
{
        padding-bottom:30px;
        width:100%;
        height: 80%;
        float:left;
        font-size:0;
}
.footerFrame .footerContent .right
{
        text-align:center;
        width:25%;
        display: inline-block;
	    vertical-align: top;  
}
.footerFrame .footerContent .middle
{
        text-align:center;
        width:25%;
        display: inline-block;
	    vertical-align: top; 
}
.footerFrame .footerContent .left
{
        text-align:center;
        width:25%;
        display: inline-block;
}
.footerFrame .footerContent ul>li:first-child
{
        margin-top:55px;
        padding-bottom:30px;
        font-weight:bold;
        font-size:20px;
}
.footerFrame .footerContent li
{
        text-align:left;
        margin-bottom:10px;
        font-size:14px;
        font-family:'microsoft yahei';
}
.footerFrame .footerContent li a
{
        text-decoration:none;
        color:rgb(95,95,95);
}
.footerFrame .footerContent li a:hover
{
        color:rgb(63,140,254);
}
.footerFrame .footerContent .qrCode
{
        width:25%;
        float:right;
        text-align: right;  
}
.footerFrame .footerContent .qrCode .ppNumber
{
        margin-top:60px;
        display:inline-block;
        vertical-align:middle;
        white-space: nowrap;       
}
.footerFrame .footerContent .qrCode .ppNumber span
{
        height:100%;
        padding-right:10px;
        font-size:24px;
        color:rgb(237,126,30);
        vertical-align:middle;
} 
.footerFrame .footerContent .qrCode .ppNumber img
{
        vertical-align:middle;
}
.footerFrame .footerContent .qrCode .ppName
{
        display:block;
        padding-top:10px;
        font-size:19px;
        font-family:'microsoft yahei';
        color:rgb(138,141,150);
}
.footerFrame .footerContent .qrCode .qrCodeImg
{
        padding-top:20px;
}

.footerFrame .footerBottom
{
        float:left;
        width:100%;
        height: 20%;
        padding-bottom:10px;
        font-family:'microsoft yahei';
}
.footerFrame .footerBottom a
{
        padding-right:20px;
        color:rgb(137,137,137);
}
.footerFrame .footerBottom a:hover
{
        color: rgb(63,140,254);
}
.footerFrame .footerBottom p:first-child
{
        padding-top:30px;
        border-top:1px solid rgb(234,234,234);
}
`

export default FooterTag;