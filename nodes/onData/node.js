output = function(cb) {
  $.in.on('data', function(chunk) {
    cb({ out: $.create(chunk) } );
  });
};
