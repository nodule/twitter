output = function(cb) {
  input.in.on('data', function(chunk) {
    cb({ out: chunk } );
  });
};
