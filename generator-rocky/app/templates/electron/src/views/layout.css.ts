import styled, { injectGlobal } from 'styled-components'

const layout = styled.div`

`
//全局样式
injectGlobal`
/*设置页面水平方向隐藏滑动进度条*/
html { 
    overflow-x: hidden; 
}
.depositFrame{
    position:relative;
}
div.ant-spin.ant-spin-spinning.ant-spin-show-text
{
    position:absolute;
    top:50%;
    left:50%;
    height:50px;
    weight:50px;
    margin-left:-25px !important;
    margin-top:-25px !important;
}
`


export default layout;