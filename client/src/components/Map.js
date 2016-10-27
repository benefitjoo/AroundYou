import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';
import UploadView from './UploadView';
//3. 나머지칸 입력한 뒤 엔터 누르면 db 에 입력값 저장후 원래 photo.js 뜬다. 
class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state ={newLng:"", newLat:""};
    this.mapClick = this.mapClick.bind(this);// 1.pin 클릭하면 2.해당 위 경도가 일지하는 사진만 mapping 해서 보여주도록 구현해야  
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };
 
  onDragEnd(e) { //newMarker 움직인 뒤 위경도 값 추출.
    const x = e.latLng.lat();
    const y = e.latLng.lng();
    const val = {lat:x, lng:y};
    console.log('x: ', x,' y: ', y);  
    this.props.onDragged(val);
  };

  mapClick(event, map){
    this.props.onClick(event, map);
  };

  render() {
    var newMarker = undefined;// upload click시 map에 유동적인 marker 생성.
    if(this.props.newmarker){
      newMarker = (<Marker lat={37.581770} lng={126.985966} draggable={true} onDragEnd={this.onDragEnd} />)
    } 
    return (
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={37.583003} // 북촌 위도
        lng={126.985071} // 북촌 경도
        zoom={17}
        loadingMessage={'Loading Araound Maps'}
        params={{v: '3.exp', key: 'AIzaSyApEhbvTjERHndLY1yOdaAES-Fr8-yPrCg'}}
        onMapCreated={this.onMapCreated}>
        {newMarker}
        <UploadView newLng={this.state.newLng} newLat={this.state.newLat} />
        {this.props.marker.map((map,i) => {
          return (<Marker lat={map.lat} lng={map.lng} key={i} onClick={this.mapClick.bind(this, {map})} />);
        })};
      </Gmaps>
    );
  };
};

export default Map;
