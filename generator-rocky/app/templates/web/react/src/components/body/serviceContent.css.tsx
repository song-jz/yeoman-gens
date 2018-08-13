import styled from 'styled-components'

let serviceurl = require('../../static/imgs/service.jpg')


const ServiceBodyTag = styled.div`
.serviceBodyFrame{
    width:100%;
    background-color:rgb(234,234,234);
    padding:20px 120px 40px;
    
    .serviceBody{
        padding:30px 20px 20px 20px;
        background-color:white;
        .serviceP1Title{
            padding-bottom:15px;
            border-bottom:1px solid rgb(234,234,234);
            font-weight:bold;
            font-size:14px;
        }
        .serviceP1Content{
            text-indent:2em;
            font-size:14px;
            padding-top:15px;
            line-height: 2.3em
        }
        .serviceP2Title{
            margin-top:40px;
            padding-bottom:15px;
            border-bottom:1px solid rgb(234,234,234);
            font-weight:bold;
            font-size:14px;
        }
        .serviceP2Content{
            text-indent:2em;
            font-size:14px;
            padding-top:15px;
            line-height: 2.3em
        }
        .serviceFlow{
            height: 375px;
            width: 100%;
            margin-top:30px;
            display: inline-block;
            background: url(${serviceurl}) no-repeat 45% center;
            background-size: contain;
        }
    }
}
`

export default ServiceBodyTag;