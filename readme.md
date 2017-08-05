# Tea Machine

This is a simple [Slack app](https://api.slack.com/slack-apps) designed
for the purpose of not letting you forget a cup of tea you've made.
When you've set your tea to brew simply type `/tea` in to Slack and
the tea machine will remind you when your tea has brewed sufficiently
so you can go and pick it up and not ever let your tea over-stew ever again.

### Usage

- `/tea [brewing-minutes]` - sends you a reminder in `brewing-minutes` minutes
 to go and fetch your tea. The default value is 3 minutes.
 
### Installation

To install the app somewhere simply clone and run `npm install`.

To run the app call `npm start`. The app gets a few variables from the environment
so make sure these are set:
- `CLIENT_ID` - this is a property of your Slack app. It is necessary to install
your running app to a Slack.
- `VERIFICATION_TOKEN` - this is another property of your Slack app. It is used
to verify that incoming requests are actually from a Slack instance and not
someone else trying to impersonate genuine tea brewing.
- `URL` - this is the URL where you are running your app from, so the app is able
to generate links to itself.
