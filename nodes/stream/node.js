// ok streams should be installed async
if(input.options && Object.keys(input.options).length) {
  output = [input.twitter, 'stream', input.endpoint, input.options]
} else {
  output = [input.twitter, 'stream', input.endpoint]
}
