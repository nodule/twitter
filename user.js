module.exports = {
  name: "user",
  ns: "twitter",
  description: "twitter users",
  phrases: {
    active: "Streaming user stream"
  },
  ports: {
    input: {
      twitter: {
        type: "Twitter",
        title: "Twitter",
        required: true
      },
      parameters: {
        type: "object",
        title: "Parameters",
        required: true,
        properties: {
          delimited: {
            type: "boolean",
            title: "Delimited",
            required: false
          },
          track: {
            type: "string",
            title: "Track",
            "default": false
          },
          "with": {
            type: "boolean",
            title: "Width",
            "default": false
          },
          locations: {
            type: "string",
            title: "locations",
            required: false
          },
          replies: {
            type: "boolean",
            title: "Replies",
            "default": false
          },
          stall_warnings: {
            type: "string",
            title: "Delimited",
            "default": false
          },
          stringify_friends_ids: {
            type: "boolean",
            title: "Stringify Friends Ids",
            "default": false
          }
        }
      }
    },
    output: {
      stream: {
        type: "Stream"
      }
    }
  },
  fn: function user(input, $, output, state, done, cb, on) {
    var r = function() {
      // ok streams should be installed async
      $.twitter.user('user', $.parameters, function userCallback(stream) {
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