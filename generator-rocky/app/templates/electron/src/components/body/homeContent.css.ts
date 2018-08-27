import styled from 'styled-components'



const BodyTag = styled.div`
.bodyContent{
        width:100%;
        height: auto;
        background-color:rgb(236,241,244);
        display:inline-block;
        padding:20px 15% 40px;
    .bodyContentTop{
        padding:35px 30px 15px 20px;
        background-color:white;
        width:100%;
        .topTitle{
            padding-bottom:15px;
            border-bottom:1px solid rgb(234,234,234);
            font-weight:bold;
            font-size:14px;
        }
        .topContentOneTitle{
            font-size:14px;
            text-indent:2em;
            padding-top:10px;
            display: block;
        }
        .topContentOneP1{
            font-size:14px;
            text-indent:2em;
        }
        .topContentOneP2{
            font-size:14px;
            text-indent:2em;
            padding-bottom:15px;
        }
        .topContentTwo{
            .topContentTwoTitle{
                font-size:14px;
                text-indent:2em;
                padding-top:10px;
                display: block;
            }
            .topContentTwoP1{
                font-size:14px;
                text-indent:2em;
            }
            .topContentTwoP2{
                font-size:14px;
                text-indent:2em;
            }
        }
        .topContentOpen{
            float:right;
        }
       
    }
    .bodyContentBottom{
        margin-top:20px;
        padding:35px 30px 15px 20px;
        background-color:white;
        width:100%;
        .bottomTitle{
            display:inline-block;
            font-size:14px;
            font-weight:bold;
            margin-bottom:10px;
            padding-left:20px;
        }
        .bottomTitleRight{
            float:right; 
            display:inline-block;
            margin-bottom:10px;
            padding-right:15px;
            a{
                text-decoration:underline;
                color:rgb(81,79,90);
            }
            a:hover{
                color:rgb(89,154,229);
            }
        }
        .bottomListContent{
            .ant-table-thead > tr > th{
                font-weight:bold;
                :first-child{
                    padding-left:120px;
                }
            }
            .ant-table-tbody > tr > td{
                border:none;
                span:hover{
                    color:rgb(89,154,299);
                }
                :first-child{
                    padding-left:50px;
                }
            }
        }
    }
}
`

export default BodyTag;