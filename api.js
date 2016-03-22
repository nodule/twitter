module.exports = {
  name: "api",
  ns: "twitter",
  description: "Twitter API",
  phrases: {
    active: "Starting Twitter API"
  },
  ports: {
    input: {
      consumer_key: {
        type: "string",
        title: "Consumer Key",
        required: true
      },
      consumer_secret: {
        type: "string",
        title: "Consumer Secret",
        required: true
      },
      access_token_key: {
        type: "string",
        title: "Access Token Key",
        required: true
      },
      access_token_secret: {
        type: "string",
        title: "Access Token Secret",
        required: true
      }
    },
    output: {
      twitter: {
        type: "Twitter"
      }
    }
  },
  dependencies: {
    npm: {
      twitter: require('twitter')
    }
  },
  fn: function api(input, $, output, state, done, cb, on, twitter) {
    var r = function() {
      output.twitter = $.create(new twitter({
        comsumer_key: $.consumer_key,
        comsumer_secret: $.consumer_secret,
        access_token_key: $.access_token_key,
        access_token_secret: $.access_token_secret
      }))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}