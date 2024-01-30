import styled from "styled-components";

export const Weather = styled.article`
  margin-left: 1rem;
  &.loading {
    visibility: hidden;
    position: relative;
    max-height: 20px;
  }

  &.loading::after {
    visibility: visible;
    content: "Loading...";
    color: white;
    position: absolute;
    top: 0;
    margin-left: 4rem;
  }
`;
