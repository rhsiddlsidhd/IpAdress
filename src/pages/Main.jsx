import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Main = () => {
  const [initialMapData, setInitialMapData] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const initializeNaverMap = () => {
      var mapOptions = {
        center: new window.naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };
      var map = new window.naver.maps.Map("map", mapOptions);

      var markerOptions = {
        position: new window.naver.maps.LatLng(37.3595704, 127.105399),
        map: map,
      };
      var marker = new window.naver.maps.Marker(markerOptions);
      setInitialMapData(marker);
    };
    initializeNaverMap();
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      try {
        // API 요청
        const response = await axios.get(
          `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=lv007lcqyg&submodules=geocoder`,
          {
            params: {
              query: searchQuery,
            },
            headers: {
              "X-NCP-APIGW-API-KEY-ID": "lv007lcqyg",
              "X-NCP-APIGW-API-KEY": "2M4WLW023D6tTHZMdurpzcVBziFuKLtbvUumgYEw",
            },
          }
        );

        // 데이터 출력 위치 수정
        console.log("API 응답:", response.data);
      } catch (err) {
        // 에러 상세 내용 출력
        console.error("에러 상세 정보:", err);
      }
    }
  };

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch}>검색</button>
            </TextBox>
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
                  <div></div>
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
          </MainWrapper>
        </div>
      </Header>

      <Maps id="map">지도</Maps>
    </>
  );
};

export default Main;

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
  z-index: 1;
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

const Maps = styled.div`
  width: 100%;
  height: 70vh;
  background-color: black;
`;
