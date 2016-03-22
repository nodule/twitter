output = function() {
  $.twitter.stream($.endpoint, $options, function (err, ev) {
    if (err) {
      cb({error: $.create(err)})
    } else {
      cb({out: $.create(ev)})
    }
  })
}
