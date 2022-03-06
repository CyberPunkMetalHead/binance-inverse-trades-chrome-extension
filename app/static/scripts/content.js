chrome.runtime.onMessage.addListener(function(message) {
  // do something when a message is received from the chrome API
  if (message == "button_clicked") {
    console.log("Inversion Requested")
    //if user is on the Futures page
    if (window.location.href.includes("/futures")) {

      // select the relevant elements
      buy_button = document.querySelector(".buy-form>button")
      sell_button = document.querySelector(".sell-form>button")
      buy_form = document.querySelector(".buy-form")
      sell_form = document.querySelector(".sell-form")
      buy_text = buy_button.innerText
      sell_text = sell_button.innerText

      //do some css magic
      buy_button.style = "background-color:#f6465d;"
      buy_button.innerText = sell_text
      sell_button.style = "background-color:#0ecb81;"
      sell_button.innerText = buy_text
      buy_form.style = "position:relative; left:53%"
      sell_form.style = "position:relative; right:53%"
    }
    
    // Any other page
    else {
    // select the relevant elements
    buy_button = document.querySelector("#orderformBuyBtn")
    sell_button = document.querySelector("#orderformSellBtn")
    buy_form = document.querySelector("#autoFormBUY")
    sell_form = document.querySelector("#autoFormSELL")
    buy_text = buy_button.innerText
    sell_text = sell_button.innerText

    // do some css magic
    buy_button.style = "background-color:#f6465d;"
    buy_button.innerText = sell_text
    sell_button.style = "background-color:#0ecb81;"
    sell_button.innerText = buy_text
    buy_form.style = "position:relative; left:108%"
    sell_form.style = "position:relative; right: 108%"
    }
  }

  if (message == "disable_inversion") {
    location.reload();
  }
});
