var google = require('googleapis');
var calendar = google.calendar('v3');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2();

//Amanda's Spam Account Credentials
const amandaCredentials = {
  refresh: "1/j5rlJrFAJ9i3LPaWsD6yOs-FEB0z05U4wInJJcOBBIgUeZRDOGb9ah08T9d1aWHd",
  token: "ya29.GluIBDUeu_iaT7HIlX5QAS0_3eDdOdoFUCCFddUX38ycgJ61LIunOJ9s5DSVPcqm95CPoKyGkIq77r5t4c4YZ8bNJdNYbrx63mJCj-U8bW9MIGY59iUn_VKGSjit"
}


//Callback will take err as first parameter and hangouts link as second.
module.exports = function(callback){
 // Set the authentication for a user
  oauth2Client.setCredentials({
    access_token: amandaCredentials.token,
    refresh_token: amandaCredentials.refresh
  });
  
  


  var time = new Date();
  
  
  var time2 = new Date();

  time2.setDate(time.getDate() + 1);
  time =time.toISOString();
  time2 = time2.toISOString();

  var event = {
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'anyoneCanAddSelf': true,
  'visibility': 'public',
  'hangoutLink': 'https://hangouts.google.com/hangouts/_/ylkydvhwyre7bghuoi5xkvj7fye',
  'start': {
    'dateTime': time,
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': time2,
    'timeZone': 'America/Los_Angeles',
  },
  'attendees': [
    {'email': 'hijaouyaaaa@gmail.com'},
    {'email': 'sbrin@example.com'},
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10},
    ],
  },
};


//   var key = require('./key.json');
//   var jwtClient = new google.auth.JWT(
//   key.client_email,
//   null,
//   key.private_key,
//   ['https://www.googleapis.com/auth/calendar'], // an array of auth scopes
//   null
// );

// jwtClient.authorize(function (err, tokens) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('MY TOKENS :D ', tokens);

  // Make an authorized request to create new calendar event.
  calendar.events.insert({
    auth: oauth2Client,
    calendarId: 'primary',
    resource: event,
  }, function(err, event) {
    
    callback(err, event.hangoutLink)
    //console.log(event.hangoutLink);
  });
  
//});

///END of test





}