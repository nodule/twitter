module.exports = {
  name: "search",
  ns: "twitter",
  description: "Twitter search",
  phrases: {
    active: "Searching twitter for {{input.in}}"
  },
  ports: {
    input: {
      twitter: {
        type: "Twitter",
        title: "Twitter",
        required: true
      },
      search: {
        type: "string",
        title: "Search",
        required: true
      }
    },
    output: {
      out: {
        type: "object"
      }
    }
  },
  fn: function search(input, $, output, state, done, cb, on) {
    var r = function() {
      $.twitter.search($.search, function searchCallback(out) {
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