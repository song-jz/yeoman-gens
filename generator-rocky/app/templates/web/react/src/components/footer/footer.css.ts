import styled from 'styled-components'

const FooterTag = styled.div`
.footerFrame{
    width:100%;
    height:500px;
    /* background-color:pink; */
    min-width: 1200px;
    .footerContent{
        /*background-color:green;*/
        padding: 0 120px;
        
        width:100%;
        height: 80%;
      float:left;
    font-size:0;
    .right{
        text-align:center;
        width:25%;
        display: inline-block;
	    vertical-align: top;  
    }
    .middle{
        text-align:center;
        width:25%;
        display: inline-block;
	    vertical-align: top; 
    }
    .left{
        text-align:center;
        width:25%;
        display: inline-block;
    }
    li{
        text-align:left;
        margin-bottom:10px;
        font-size:14px;
        font-family:'microsoft yahei';
    }
    ul>li:first-child{
        margin-top:55px;
        padding-bottom:30px;
        font-weight:bold;
        font-size:24px;
    }
    .qrCode{
        width:25%;
        float:right;
        text-align: right;
        .pp{
            display:inline-block;
            font-size:24px;
            margin-top:50px;
            color:rgb(237,126,30);
            display:inline-block;
            padding-right:15px;
        }
        .ppNumber{
            font-family:Palatino Linotype;
            font-size:34px;
            color:rgb(237,126,30);
            display:inline-block;
        }
        .ppName{
            font-size:16px;
            font-family:'microsoft yahei';
            color:rgb(138,141,150);
        }

    }
}
.footerBottom{
    float:left;
    width:100%;
    height: 20%;
    
    padding:0px 120px;
    /*border-top:2px solid rgb(234,234,234);*/
    font-family:'microsoft yahei';
a{
   padding-right:20px;
   color:rgb(137,137,137);
}
a:hover{
   color: rgb(63,140,254);
}
p:first-child{
    padding-top:40px;
    border-top:1px solid rgb(234,234,234);
}
}
`

export default FooterTag;