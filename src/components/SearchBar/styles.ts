import styled from "styled-components";

export const Search = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputSearch = styled.input`
  background: #7c7c7c2b;
  border: none;
  border-radius: 24px;
  color: white;
  font-family: inherit;
  font-size: 105%;
  outline: none;
  padding: 0.4em 1em;
  width: calc(100% - 100px);
`;

export const ButtonSearch = styled.button`
  background: #7c7c7c2b;
  border-radius: 50%;
  border: none;
  color: white;
  cursor: pointer;
  height: 44px;
  width: 44px;
  outline: none;
  margin: 0.5em;
  &:hover {
    background: #7c7c7c6b;
  }
  svg {
    width: 1.5em;
    height: 1.5em;
    fill: currentColor;
  }
`;
