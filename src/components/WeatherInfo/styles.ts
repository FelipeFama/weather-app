import styled from "styled-components";

export const Weather = styled.article`
  margin-left: 1rem;
  padding: 1rem;

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

export const Name = styled.h2`
  margin-bottom: 1rem;
`;

export const Temperature = styled.h1`
  margin: 0;
  margin-bottom: 0.4rem;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
`;
