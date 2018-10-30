var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '635014',
  key: '87451fcc9ddde7893a41',
  secret: '91de27595dadb353cd26',
  cluster: 'ap1',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});
