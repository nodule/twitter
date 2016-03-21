// ok streams should be installed async
if($.options && Object.keys($.options).length) {
  output = [$.twitter, 'stream', $.endpoint, $.options]
} else {
  output = [$.twitter, 'stream', $.endpoint]
}
