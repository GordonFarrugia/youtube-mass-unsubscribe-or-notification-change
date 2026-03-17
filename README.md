# YouTube Mass Unsubscriber/Notification Changer

A JS script developed to automate the process of unsubscribing or changing notifications from all YouTube channels associated with a user's account. The script operates directly within the browser, requiring no additional installations or extensions.

## Features
- Automates mass unsubscription or notification setting changes from YouTube channels
- Compatible with all major browsers

## Usage Instructions
1. Navigate to the [YouTube Subscriptions page](https://www.youtube.com/feed/channels).
2. Access the browser's Developer Tools:
   - Right-click on the page and select **Inspect**, or Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).
3. Click on the **Console** tab within the Developer Tools panel.
4. Paste the contents of [`script.js`](./script.js) into the console.
5. Ensure the value of `SELECTED_OPTION` at the top of the script is set to your preferred functionality:
   
   ```javascript
   //Sets channel notifications for all videos
   const SELECTED_OPTION = OPTION_NOTIFICATIONS_ALL;

   //Sets all channel notifications for personalized videos
   const SELECTED_OPTION = OPTION_NOTIFICATIONS_PERSONALIZED;

   //Disables notifications for all channels
   const SELECTED_OPTION = OPTION_NOTIFICATIONS_NONE;
   
   //Unsubscribes from all channels (default setting)
   const SELECTED_OPTION = OPTION_UNSUBSCRIBE;
   ```
6. Press `Enter` to execute the script.
