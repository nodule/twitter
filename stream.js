module.exports = {
  name: "stream",
  ns: "twitter",
  description: "Twitter Stream",
  phrases: {
    active: "Streaming {{input.endpoint}}"
  },
  ports: {
    input: {
      twitter: {
        type: "Twitter",
        title: "Twitter",
        required: true
      },
      endpoint: {
        type: "string",
        title: "Endpoint",
        required: true
      },
      options: {
        type: "object",
        title: "Optons",
        required: false,
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
      out: {
        type: "EventEmitter",
        description: "A Stream-like EventEmitter"
      }
    }
  },
  fn: function stream(input, $, output, state, done, cb, on) {
    var r = function() {
      $.twitter.stream($.endpoint, $options, function(err, ev) {
        if (err) {
          output({
            error: $.create(err)
          })
        } else {
          output({
            out: $.create(ev)
          })
        }
      })
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}