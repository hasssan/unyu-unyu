(function($){
  function getImages(callback) {
    $.ajax({
      url: '/data.json',
      success: callback
    })
  }

  function createItem(id) {
    return '<div class="col s12 m2">'
      + '<img src="http://i.imgur.com/' + id + 'b.jpg" class="circle image-item" />'
      + '</div>'
  }

  getImages(function(data) {
    data.map(function(item) {
      var image = createItem(item.id)
      $('#collection').append(image);
    })
  })
})(window.jQuery)
