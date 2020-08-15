import styled from 'styled-components'

const Link_h2 = styled.h2<{ currentpath:boolean }>`
    box-sizing: border-box;
    line-height: 39px;
    letter-spacing: 3px;
    width: 170px;
    padding-left: 15px;
    border-radius: 20px;
    margin-bottom: 8px;
    user-select: none;
    &:hover {
        line-height: 31px;
        padding-left: 11px;
        border: #99FF99 4px solid;
    }
    background-color: ${(props) => (props.currentpath ? '#99FF99' : '#FDFAF7')};
`

export default Link_h2