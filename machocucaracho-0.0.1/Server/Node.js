//npm install pusher

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1296742",
  key: "d851aa243fe2053f5e1d",
  secret: "2ed99d5b780f7fff1777",
  cluster: "mt1",
  useTLS: true
});

pusher.trigger("macho-cucaracho", "site-event", {
  message: "hello world"
});