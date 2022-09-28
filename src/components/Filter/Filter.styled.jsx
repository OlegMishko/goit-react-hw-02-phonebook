import styled from "styled-components";

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`;
export const FilterInput = styled.input`
  width: 400px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;


