module.exports = {
  name: "updateStatus",
  ns: "twitter",
  description: "Update twitter status",
  phrases: {
    active: "Updating twitter status"
  },
  ports: {
    input: {
      twitter: {
        type: "Twitter",
        title: "Twitter",
        required: true
      },
      message: {
        type: "string",
        title: "Message",
        required: true
      }
    },
    output: {
      out: {
        type: "object"
      }
    }
  },
  fn: function updateStatus(input, $, output, state, done, cb, on) {
    var r = function() {
      $.twitter.updateStatus($.message, function updateStatusCallback(out) {
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