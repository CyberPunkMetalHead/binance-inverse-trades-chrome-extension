try {
  var button = document.querySelector('#enable');
  button.addEventListener('click', function() {

    // Send message to active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'button_clicked');
    });
  });

  var button = document.querySelector('#disable');
  button.addEventListener('click', function() {
    // Send message to active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'disable_inversion');
    });
  });
}
catch(err) {
  console.log(err.message)
}
