//added by john 8-6
import styled from 'styled-components'
let logourl = require('../../static/imgs/logo.jpg')
let imgurl = require('../../static/imgs/img.jpg')

const HeaderTag = styled.div`
.headFrame{
    background:rgb(209,51,52);
    width:100%;
    height:111px;
    .content{
        height: 100%;
        margin: 0 120px;
        min-width: 1000px;
        .logo{
            background: url(${logourl}) no-repeat;
            background-size: contain;
            height: 100%;
            /*  margin-top: 12px; */
            /* border: 1px solid red; */
            width: 490px;
            display: inline-block;
        }
        
        .cornerimg{
            float: right;
            height: 100%;
            width: 435px;
            display: block;
            background: url(${imgurl}) no-repeat;
            background-size: contain;
        }
    }
}
`

export default HeaderTag;