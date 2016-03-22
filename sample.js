module.exports = {
  name: "statusesFilter",
  ns: "twitter",
  description: "Filter twitter statusus",
  phrases: {
    active: "Filtering twitter statusus"
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
          follow: {
            type: "string",
            title: "Follow",
            required: false
          },
          track: {
            type: "string",
            title: "Track",
            required: false
          },
          locations: {
            type: "string",
            title: "locations",
            required: false
          },
          delimited: {
            type: "string",
            title: "Delimited",
            required: false
          },
          stall_warnings: {
            type: "string",
            title: "Delimited",
            required: false
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
  fn: function statusesFilter(input, $, output, state, done, cb, on) {
    var r = function() {
      // ok streams should be installed async
      input.twitter.statusesFilter('status/filter', input.parameters, function statusesFilterCallback(stream) {
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