import styled from "styled-components";

export const WrapperContainerLeft = styled.div`
    flex: 1;
    display: flex;
    padding: 40px 45px 25px;
    flex-direction: column;
`

export const WrapperContainerRight = styled.div`
    width: 300px;
    background: linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`

export const WrapperTextLight = styled.span`
    color: rgb(13, 92, 182);
    font-size: 14px;
    cursor: pointer;
`