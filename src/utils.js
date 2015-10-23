import 'isomorphic-fetch';
var dbName = 'images';

// localStorage Helper
export function store(data){
  if (data) {
    localStorage.setItem(dbName, JSON.stringify(data));
  }

  var store = localStorage.getItem(dbName);
  return (store && JSON.parse(store)) || [];
}

export function cuteFilter(level) {
  var data = store();

  if (typeof level === 'undefined') return data;

  var newData = data.filter(function(element) {
    return parseInt(element.level) === parseInt(level);
  })

  return newData;
}

export function cuted(itemToCuted) {
  var data = store();

  var newData = data.map(function(item) {
    return item.id !== itemToCuted.id ?
      item :
      Object.assign({}, item, {level: itemToCuted.level});
  })

  store(newData);
}

// initialize
export function getInitialData() {
  if (store().length) {
    return store();

  } else {
    fetch('/data.json')
      .then(response => response.json())
      .then(json => {
        store(json);
      })
  }
}