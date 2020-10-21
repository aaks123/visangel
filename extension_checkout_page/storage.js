var data = response.name + " " + change;
var myString = data;
chrome.downloads.download({
    url: "data:text/plain," + myString,
    filename: "data.txt",
    conflictAction: "uniquify", // or "overwrite" / "prompt"
    saveAs: false, // true gives save-as dialogue
}, function(downloadId) {
    console.log("Downloaded item with ID", downloadId);
});
