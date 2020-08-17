import styled from 'styled-components'

const a = 'red'

const Link_h2 = styled.h2<{ currentpath:boolean }>`
    box-sizing: border-box;
    line-height: 39px;
    letter-spacing: 3px;
    width: 170px;
    padding-left: 15px;
    border-radius: 20px;
    margin-bottom: 8px;
    user-select: none;
    background-color: ${(props) => (props.currentpath ? '#99FF99' : '#FDFAF7')};
    @media (min-width: 751px) {
        &:hover {
            line-height: 31px;
            padding-left: 11px;
            border: #99FF99 4px solid;
        }
    }
    @media (max-width: 750px) {
        text-align: center;
        padding-left: 0px;
        &:hover {
            line-height: 31px;
            border: #99FF99 4px solid;
        }
    }
`

export default Link_h2