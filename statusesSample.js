module.exports = {
  name: "statusesSample",
  ns: "twitter",
  description: "Sample twitter statusus",
  phrases: {
    active: "Sampling twitter statusus"
  },
  ports: {
    input: {
      twitter: {
        type: "Twitter",
        title: "Twitter",
        required: true
      }
    },
    output: {
      stream: {
        type: "Stream"
      }
    }
  },
  fn: function statusesSample(input, $, output, state, done, cb, on) {
    var r = function() {
      // ok streams should be installed async
      $.twitter.statusesSample('status/sample', function statusesSampleCallback(stream) {
        cb({
          stream: stream
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