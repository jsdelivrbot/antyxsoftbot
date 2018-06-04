/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.
<@U3TFCABRR>
*/

/*
const c = Botkit.slackbot({
  debug: true,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  scopes: ['bot', 'users:read.email'],
});
*/


module.exports = function(controller) {

  controller.hears(['<@([A-Z0-9]{9})>'], 'message_received,direct_message,direct_mention,mention,ambient', function(bot, message) {
    
    bot.api.users.lookupByEmail({email: 'dimmitk@antyxsoft.com'}, function(error, response) {
      const {name, real_name, id} = response.user;
      console.log({name, real_name, id});

      const { user, channel, text } = message;

      var pattern = '<@'+id+'>';
      var regex = new RegExp(pattern,"g");
      var found = text.match(regex);
      if (found) {
        bot.reply(message, ':kavouras: Αγαπητέ συνάδελφε <@'+user+'> μήπως να σκεφτείς να ανοίξεις ένα ticket στην Antyxsoft; <http://helpdesk.antyxsoft.com:8099/servicedesk/customer/portal/2?sda_source=notification-email|Raise a request>');
      }
          
    });

  });

};
