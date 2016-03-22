module.exports = {
  name: "onData",
  ns: "twitter",
  description: "Listen to a twitter stream",
  phrases: {
    active: "Receiving data..."
  },
  ports: {
    input: {
      "in": {
        title: "Stream",
        type: "EventEmitter",
        required: true
      }
    },
    output: {
      out: {
        title: "Data",
        type: "any"
      }
    }
  },
  fn: function onData(input, $, output, state, done, cb, on) {
    var r = function() {
      $.in.on('data', function(chunk) {
        output({
          out: $.create(chunk)
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}