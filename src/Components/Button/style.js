import styled from "styled-components";

export const Container = styled.div`

width: ${(props) => (props.width ? props.width : "100%")};

button {
    width: 100%;
    background-color: ${(props) => (props.color ? props.color : "var(--grey-3)")};
    color: var(--grey-0);
    padding: 6px 0px 6px 0px;
    border-radius: 4px;
}
`