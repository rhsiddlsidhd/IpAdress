import { useEffect, useState } from "react";
import { styled } from "styled-components";

import HeaderWrapper from "../components/HeaderWrpper";

const Main = () => {
  const [kakaoMap, setKakaoMap] = useState("");
  const [makerWrapper, setMakerWrapper] = useState([]);
  const [LocationInformation, setLocationInformation] = useState({
    latitude: 0,
    longtitude: 0,
  });

  // 카카오맵 첫 렌더링
  useEffect(() => {
    const initializeKakaoMap = () => {
      var mapOptions = {
        center: new window.kakao.maps.LatLng(
          37.57700513197388,
          126.97697390421473
        ),
        level: 3,
      };
      // map load
      setKakaoMap(
        new window.kakao.maps.Map(document.getElementById("map"), mapOptions)
      );
    };

    initializeKakaoMap();
  }, []);

  // 렌더링시 이후 kakaoMap 변경되면 실행(Update)

  useEffect(() => {
    // 이벤트 클릭 추가
    if (kakaoMap) {
      window.kakao.maps.event.addListener(
        kakaoMap,
        "click",
        function (mouseEvent) {
          var latlng = mouseEvent.latLng;
          var marker = new window.kakao.maps.Marker({
            position: latlng,
          });

          setMakerWrapper((prevMarkers) => {
            prevMarkers.forEach((item) => {
              item.setMap(null);
            });
            return [marker];
          });
          marker.setMap(kakaoMap);

          setLocationInformation({
            latitude: latlng.getLat(),
            longtitude: latlng.getLng(),
          });
        }
      );
    }
  }, [kakaoMap]);

  console.log(makerWrapper);
  return (
    <>
      <HeaderWrapper LocationInformation={LocationInformation} />
      <Maps id="map">지도</Maps>
    </>
  );
};

export default Main;

const Maps = styled.div`
  width: 100%;
  height: 70vh;
  background-color: black;
`;
