//added by john 8-6
import styled from 'styled-components'

const MenuTag = styled.div`
.menuFrame{
    /* ul li以横排显示 */
    min-width: 1200px;
    height:45px;
    width:100%;
    background-color:rgb(177,32,33);
/* 所有class为menu的div中的ul样式 */
div.menu ul
{
    list-style:none; /* 去掉ul前面的符号 */
    margin:0 15%; /* 与外界元素的距离为0 */
    padding: 0px; /* 与内部元素的距离为0 */
    /* width: auto;   宽度根据元素内容调整 */
}
/* 所有class为menu的div中的ul中的li样式 */ 
div.menu ul li
{
    font-size:16px;
    float:left; /* 向左漂移，将竖排变为横排 */
}
/* 所有class为menu的div中的ul中的a样式(包括尚未点击的和点击过的样式) */
div.menu ul li a
{
    /* background-color: #465c71;  背景色 */
    /* border: 1px #4e667d solid;  边框 */
    color: white; /* 文字颜色 */
    display: block; /* 此元素将显示为块级元素，此元素前后会带有换行符 */
    /*line-height: 1.35em;  行高 */
    line-height: 37px; /* 行高 */
    padding:4px 20px; /* 内部填充的距离 */
    text-decoration: none; /* 不显示超链接下划线 */
    white-space: nowrap; /* 对于文本内的空白处，不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
}
/* 所有class为menu的div中的ul中的a样式(鼠标移动到元素中的样式) */
div.menu ul li a:hover,div.menu ul li a:active
{
    background-color: rgb(138,24,25);  /* 背景色 */
    /* color: #465c71;  文字颜色 */
    text-decoration: none; /* 不显示超链接下划线 */
}

div.menu ul .currentSelect{
    background-color: rgb(138,24,25);
    text-decoration:none;
}
}
`
export default MenuTag;