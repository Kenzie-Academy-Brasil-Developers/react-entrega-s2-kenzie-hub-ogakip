import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
min-height: 100vh;
background-color: var(--grey-4);
`

export const HeaderContainer = styled.div`
width: 100%;
height: 72px;
padding: 0px 10px 0px 10px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
`

export const HeaderItems = styled.div`
width: 90%;
max-width: 768px;
display: flex;
justify-content: space-between;
`

export const UserContainer = styled.div`
width: 100%;
height: 118px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid var(--grey-3);
border-top: 1px solid var(--grey-3);
`

export const UserItems = styled.div`
width: 90%;
max-width: 768px;
display: flex;
flex-direction: column;
gap: 20px;

@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
}

h1 {
    font-size: 18px;
    color: var(--grey-0);
}

span {
    font-size: 12px;
    font-weight: 600;
    color: var(--grey-1);
}
`