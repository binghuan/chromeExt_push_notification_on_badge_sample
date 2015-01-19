var backgroundPageWindow = chrome.extension.getBackgroundPage();

$("document").ready(function() {
	$("#messagelist").html(backgroundPageWindow.messages);
});
