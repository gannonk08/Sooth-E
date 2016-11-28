(function() {
  'use strict';

  function getWalkScore(lat, long, address) {
    var paramsObj = {
      format: 'json',
      address: address,
      lat: lat,
      lon: long,
      wsapikey: '9fc2c5b29359cba86ceed1d60e16f511'
    };
    var queryString = jQuery.param(paramsObj);

    var url = `http://api.walkscore.com/score?${queryString}`;

    $.ajax({
      url: url,
      dataType:'jsonp',
    })
    .done((data) => {
      console.log(data);
    })
    .fail((err) => {
      console.log(err);
    })

  }
  $('#walkscoreButton').on('click', function(e) {
    e.preventDefault();
    console.log('walkscore clicked');
    getWalkScore(39.695455, -104.978427, '1161 South Clarkson St,Denver,CO');
  });

}());
