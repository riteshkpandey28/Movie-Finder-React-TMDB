import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: var(--medGrey);
  align-items: center;
  text-align: center;
  color: var(--white);
  font-size: var(--fontBig);

  @media screen and (max-width: 768px) {
    font-size: var(--fontSmall);
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;

  .social-media {
    margin: 5px;
  }
`;
