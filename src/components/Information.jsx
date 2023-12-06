import { styled } from "styled-components";

const Information = ({ LocationInformation }) => {
  return (
    <>
      <InformationBox>
        <IpAddressWrapper>
          <div>
            <h5>IP ADDRESS</h5>
            <div></div>
          </div>
        </IpAddressWrapper>
        <LocationWrapper>
          <div>
            <h5>LOCATION</h5>
            <div style={{ fontSize: "16px" }}>
              <div>위도 {LocationInformation.latitude}</div>
              <div>경도 {LocationInformation.longtitude}</div>
            </div>
          </div>
        </LocationWrapper>
        <TimeZoneWrapper>
          <div>
            <h5>TIMEZONE</h5>
            <div></div>
          </div>
        </TimeZoneWrapper>
        <IspWrapper>
          <div>
            <h5>ISP</h5>
            <div></div>
          </div>
        </IspWrapper>
      </InformationBox>
    </>
  );
};

export default Information;

const InformationBox = styled.div`
  width: 80%;
  height: 10rem;
  border: 1px solid black;
  position: absolute;
  bottom: -5rem;

  display: flex;
  justify-content: space-between;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  z-index: 5;
`;

const IpAddressWrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  & > div:first-child {
    width: 90%;
    height: 80%;
    border-right: 1px solid hsl(0, 0%, 59%);
    & > h5 {
      color: hsl(0, 0%, 59%);
    }
    & > div {
      font-weight: 700;
      font-size: 18px;
      color: hsl(0, 0%, 17%);
    }
  }
`;

const LocationWrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  & > div:first-child {
    width: 90%;
    height: 80%;
    border-right: 1px solid hsl(0, 0%, 59%);
    & > h5 {
      color: hsl(0, 0%, 59%);
    }
    & > div {
      font-weight: 700;
      font-size: 18px;
      color: hsl(0, 0%, 17%);
    }
  }
`;

const TimeZoneWrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  & > div:first-child {
    width: 90%;
    height: 80%;
    border-right: 1px solid hsl(0, 0%, 59%);
    & > h5 {
      color: hsl(0, 0%, 59%);
    }
    & > div {
      font-weight: 700;
      font-size: 18px;
      color: hsl(0, 0%, 17%);
    }
  }
`;

const IspWrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  & > div:first-child {
    width: 90%;
    height: 80%;
    border-right: 1px solid hsl(0, 0%, 59%);
    & > h5 {
      color: hsl(0, 0%, 59%);
    }
    & > div {
      font-weight: 700;
      font-size: 18px;
      color: hsl(0, 0%, 17%);
    }
  }
`;
