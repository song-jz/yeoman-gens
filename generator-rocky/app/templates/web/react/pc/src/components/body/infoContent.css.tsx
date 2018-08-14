import styled from 'styled-components'

/*let infourl = require('../../static/imgs/icon.jpg')*/

const InfoBodyTag = styled.div`
.infoFrame{
    width:100%;
    background-color:rgb(234,234,234);
    padding:20px 120px 40px;
    .infoContent{
        background-color:white;
        padding:30px 30px 15px 30px;
    .infoTitle{
        font-weight:bold;
        font-size:16px;
        padding-bottom:15px;
        border-bottom:1px solid rgb(234,234,234);
    }
    .infoSearch{
        /*通过antd-design拉取控件*/
        padding:20px 0;
        width:100%;
        height:100px;
        /* background-color:blue; */
    }
    .infoWaring{
        display:inline-block;
        padding-bottom:20px;
        border-bottom:1px solid rgb(234,234,234);
        .infoText{
            display:inline;/*p与img同一行显示*/
            font-size:14px;
        }  
        img{
            float:left;
            overflow:hidden;
        }
    }
    .infoTitle{
        border-bottom: 1px solid rgb(241,241,241);
        padding: 15px 20px;
        .infoTitleName{
            width:50%;
            display:inline-block;
            text-align:center;
        }
        .infoTitleTime{
            width:50%;
            text-align:right;
            padding-right:30px;
            display:inline-block;
        }
    }
    .infoList{
        padding:15px 20px 0 0;
        li{
            margin-bottom:20px;
            font-size:14px;
        }
        p{
            padding-right:30px;
            float:right;
            display:inline-block;
        }
        
    }
    .infoPage{
        
        width:50%;
        /*float:right; 分页器 float下边缘问题*/
        background-color:blue;
    }
    .buttonCustom{
        
    }
}
}



`
export default InfoBodyTag;