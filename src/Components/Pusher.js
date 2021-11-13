    // Enable pusher logging - don't include this in production
    //https://dashboard.pusher.com/apps/1296742/getting_started

    
    Pusher.logToConsole = true;

    var pusher = new Pusher('d851aa243fe2053f5e1d', {
      cluster: 'mt1'
    });

    var channel = pusher.subscribe('macho-cucaracho');
    channel.bind('site-event', function(data) {
      alert(JSON.stringify(data));
    });
