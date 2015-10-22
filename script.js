/*global _,jQuery*/
(function($){
  var dbName = 'images';

  // initialize
  function init() {
    if (store().length) {
      var data = store();
      gallery(data);

    } else {
      fetchImage(function(data) {
        store(data);
        gallery(data);
      })
    }
  }
  init();

  // localStorage Helper
  function store(data){
    if (data) {
      localStorage.setItem(dbName, JSON.stringify(data));
    }

    var store = localStorage.getItem(dbName);
    return (store && JSON.parse(store)) || [];
  }

  // Get initial data from server
  function fetchImage(callback) {
    $.ajax({
      url: '/data.json',
      success: callback
    })
  }

  function cuteFilter(level) {
    var data = store();

    if (typeof level === 'undefined') return data;

    var newData = data.filter(function(element) {
      return parseInt(element.level) === parseInt(level);
    })

    return newData;
  }

  function cute(itemToCuted) {
    var data = store();

    var newData = data.map(function(item) {
      return item.id !== itemToCuted.id ?
        item :
        _.assign({}, item, {level: itemToCuted.level});
    })

    store(newData);
  }

  function createItem(item) {
    return '<div class="col s12 m2">'
      + '<img id="' + item.id + '" src="http://i.imgur.com/' + item.id + 'b.jpg" class="circle image-item" data-id="' + item.id + '" data-level="' + item.level + '" />'
      + '</div>'
  }

  function addItem(item) {
    var image = createItem(item)
    $('#collection').append(image);
  }

  function deleteGallery() {
    $('#collection').empty();
  }

  function gallery(data) {
    return data.map(function(item) {
        addItem(item);
    })
  }

  $('#collection').on('click', '.image-item', function() {
    var level = parseInt($(this).data('level')) + 1;

    if (level > 3) {
      level = 0;
    }

    var item = {
      id: $(this).data('id'),
      level: level.toString()
    };

    cute(item)

    $('#collection').find('#' + item.id).data('level', item.level);
  })

  $('#cute-selector').on('click', '.level', function() {
    var level = $(this).data('level');

    deleteGallery();
    gallery(cuteFilter(level));
  })

})(jQuery)
