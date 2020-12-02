function Map(props) {
    return (
        <div id="map-container-google-9" className="z-depth-1-half map-container-5">
            <iframe className="w-100 map" title="Google map" src={'https://maps.google.com/maps?q=' + props.query + '&t=&z=15&ie=UTF8&iwloc=&output=embed'}></iframe>
        </div >
    );
}

export default Map;