function equiRect(λ1, φ1, λ2, φ2) {
  var x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
  var y = (φ2-φ1);
  var d = Math.sqrt(x*x + y*y) * R;

  return d;
}

function hexCenter(hexcounts) {

  var latLonArray = [];
  var centerArray = [];


  hexcounts.features.forEach((hex) => {
    let i = 0;
    hex.geometry.coordinates.forEach((hexPoint) => {
      if (i === 0 || i === 3) {
        let lat = hexPoint[0][1];
        let lon = hexPoint[0][0];
        let point = [lat,lon];
        latLonArray.push(point);
      }
      i++
    })
  })
  for (var j = 0; j < latLonArray.length-1; j++) {
    let lat1 = latLonArray[j][0];
    let lon1 = latLonArray[[j][1];
    let lat2 = latLonArray[j+1][0];
    let lon2 = latLonArray[[j+1][1];
    centerArray.push([((lat1+lat2)/2),((lon1+lon2)/2)]);
  }


// // Compute average x, y and z coordinates.
// x = (x1 + x2 + ... + xn) / n
// y = (y1 + y2 + ... + yn) / n
// z = (z1 + z2 + ... + zn) / n
//
// // Convert average x, y, z coordinate to latitude and longitude.
// Lon = atan2(y, x)
// Hyp = sqrt(x * x + y * y)
// Lat = atan2(z, hyp)
}
