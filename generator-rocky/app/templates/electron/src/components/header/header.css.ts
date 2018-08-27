import styled from 'styled-components'
let logourl = require('../../static/imgs/logo.jpg')
let imgurl = require('../../static/imgs/img.jpg')

const HeaderTag = styled.div`
.headFrame
{
        background:rgb(209,51,52);
        width:100%;
        height:111px;
}

.headFrame .content
{
        height: 100%;
        margin: 0 15%;
        min-width: 1000px;
}

.headFrame .content .logo
{
        background: url(${logourl}) no-repeat;
        background-size: contain;
        height: 100%;
        width: 490px;
        display: inline-block;
}
        
.headFrame .content .cornerimg
{
        float: right;
        height: 100%;
        width: 435px;
        background: url(${imgurl}) no-repeat;
        background-size: contain;
}
`

export default HeaderTag;