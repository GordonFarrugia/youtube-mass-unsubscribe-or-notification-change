(async function () {
    //Assign the value of "SELECTED_OPTION" to your required option before running
    const OPTION_NOTIFICATIONS_ALL = 1;
    const OPTION_NOTIFICATIONS_PERSONALIZED = 2;
    const OPTION_NOTIFICATIONS_NONE = 3;
    const OPTION_UNSUBSCRIBE = 4;
    const SELECTED_OPTION = OPTION_UNSUBSCRIBE;

    const DELAY = 50;
    const CHANNELS = Array.from(document.querySelectorAll('ytd-channel-renderer'));
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const ChaneNotifsAll = async (channels) => {
        try {
            for (const channel of channels) {
                var notifMenuBtn = channel.querySelector('ytd-subscription-notification-toggle-button-renderer-next yt-button-shape button');
                if (notifMenuBtn) {
                    notifMenuBtn.click();
                    await wait(DELAY);

                    var noNotifsBtn = document.querySelector(`tp-yt-paper-listbox ytd-menu-service-item-renderer:nth-of-type(${SELECTED_OPTION})`);
                    if (noNotifsBtn) {
                        noNotifsBtn.click();
                        await wait(DELAY);

                        console.log(`Turned off notifications for: ${channel.querySelector('#channel-title').innerText}`);
                    }
                }
            }
        } catch (error) {
            console.error(`Error turning off channel notifications for channel: ${channel.querySelector('#channel-title').innerText}`, error);
        }
    };

    const UnsubscribeAll = async (channels) => {
        try {
            for (var channel of channels) {
                var unsubBtn = channel.querySelector('ytd-subscribe-button-renderer button');
                if (unsubBtn) {
                    unsubBtn.click();
                    await wait(DELAY);

                    const confirmBtn = document.querySelector('yt-confirm-dialog-renderer #confirm-button button');
                    if (confirmBtn) {
                        confirmBtn.click();
                        await wait(DELAY);
                        
                        console.log(`Unsubscribed from channel: ${channel.querySelector('#channel-title').innerText}`);
                    }
                }
            }
        } catch (error) {
            console.error(`Error unsubscribing from channel: ${channel.querySelector('#channel-title').innerText}`, error);
        }
    };

    var startTime = Date.now();

    if(SELECTED_OPTION == 4) {
        await UnsubscribeAll(CHANNELS); 
    } else {
        await ChaneNotifsAll(CHANNELS);
    }

    var endTime = (Date.now() - startTime) / 1000

    console.log(`Process completed in: ${endTime} seconds.`);
})();