var DBG = true;

var currentTime = "";
var time;

var messages = "";

function checkMessage() {

    $.get( "http://localhost/messages.txt", function( data ) {
        console.log("get result: ", data);

        var messageObj = JSON.parse(data);

        messages = "";

        console.log("--> get result: ", messageObj);

        for(var i=0; i< messageObj.length; i++) {
            messages += "Message#" + i + " = " + messageObj[i].txt + "<br>";
        }

        if(messageObj.length > 1) {
            chrome.browserAction.setBadgeText({text: messageObj.length.toString()});
        } else {
            chrome.browserAction.setBadgeText({text:''});
        }


    });

}

function scheduleRequest() {
	var reqeustInterval = 3000;
	console.log("check pending messages...");
    setInterval(checkMessage, reqeustInterval);
}

checkMessage();
scheduleRequest();