import { styled } from "styled-components";
import Information from "./Information";

const HeaderWrapper = ({ LocationInformation }) => {
  return (
    <>
      <Header>
        <div>
          <h2>IP Address Tracker</h2>
          <MainWrapper>
            <TextBox>
              <input
                type="text"
                placeholder="Search for any IP address or domain"
              />
              <button>검색</button>
            </TextBox>
            <Information LocationInformation={LocationInformation} />
          </MainWrapper>
        </div>
      </Header>
    </>
  );
};

export default HeaderWrapper;

const Header = styled.div`
  background-image: url("/images/pattern-bg-desktop.png");
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  & > div:first-child {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const TextBox = styled.div`
  width: 50%;
  height: 3rem;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  & > input {
    width: 90%;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
  & > button {
    width: 10%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
