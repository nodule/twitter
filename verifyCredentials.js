module.exports = {
  name: "verifyCredentials",
  ns: "twitter",
  description: "Twitter Verify Credentials",
  phrases: {
    active: "Verifying credentials"
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
      out: {
        type: "object"
      }
    }
  },
  fn: function verifyCredentials(input, $, output, state, done, cb, on) {
    var r = function() {
      $.twitter.verifyCredentials(function verifyCredentialsCallback(out) {
        cb({
          out: out
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