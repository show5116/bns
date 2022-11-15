import React, { useEffect } from 'react'

interface IProps {
  width: string
  height: string
}

const KakaoMap = ({ width, height }: IProps) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.async = true
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=a0c171c1998d864c5edce4f34f97f597&autoload=false'

    document.head.appendChild(script)

    script.onload = () => {
      // @ts-ignore
      kakao.maps.load(() => {
        let el = document.getElementById('map')
        // @ts-ignore
        let map = new kakao.maps.Map(el, {
          // @ts-ignore
          center: new kakao.maps.LatLng(36.36448981957854, 127.44495523046425),
          level: 2, // 지도의 확대 레벨
        })
      })
    }
  }, [])

  return <div id="map" style={{ width, height }}></div>
}

export default KakaoMap
