(function($){
  var dbName = 'images';

  function store(data){
    if (data) {
      localStorage.setItem(dbName, JSON.stringify(data));
    }

    var store = localStorage.getItem(dbName);
    return (store && JSON.parse(store)) || [];
  }

  function fetchImage(callback) {
    $.ajax({
      url: '/data.json',
      success: callback
    })
  }

  function createItem(item) {
    return '<div class="col s12 m2">'
      + '<img id="' + item.id + '" src="http://i.imgur.com/' + item.id + 'b.jpg" class="circle image-item" data-id="' + item.id + '" data-level="' + item.level + '" />'
      + '</div>'
  }

  function getImages() {
    if (store().length) {
      var data = store();

      return data.map(function(item) {
        var image = createItem(item)
        $('#collection').append(image);
      })

    } else {
      fetchImage(function(data) {
        store(data)

        return data.map(function(item) {
          var image = createItem(item)
          $('#collection').append(image);
        })
      })
    }
  }

  getImages();

  function cute(itemToCuted) {
    var data = store();

    var newData = data.map(function(item) {
      return item.id !== itemToCuted.id ?
        item :
        _.assign({}, item, {level: itemToCuted.level});
    })

    $('#collection').find('#' + itemToCuted.id).data('level', itemToCuted.level);
    store(newData);
  }

  $('#collection').on('click', '.image-item', function() {
    var level = parseInt($(this).data('level')) + 1;

    if (level > 3) {
      level = 0;
    }

    cute({
      id: $(this).data('id'),
      level: level.toString()
    })
  })

})(window.jQuery)
