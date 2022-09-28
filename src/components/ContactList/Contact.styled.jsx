import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  margin-left: 0;
  width: auto;
  padding: ${p => p.theme.space[2]}px;
`;



export const DeleteBtn = styled.button`
margin-top: ${p => p.theme.space[2]}px;
  display: flex;
  justify-content: center;
  width: 140px;
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.red};
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    color: white;
    background-color: ${p => p.theme.colors.red};
  }
`;