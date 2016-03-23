var myHooks = function () {
  var login = true;
  this.Before(function (scenario) {    
    
    if(login){
      browser.url('http://localhost:8080/');    
      browser.waitForExist('#login-button');
      browser.click('#login-button');      
      login = false;
    }

    // var logo = browser.isExisting('img[alt="中華電信"]');  
    // if(!logo){
    //   browser.url('http://localhost:8080/');    
    // }           
  });
};

module.exports = myHooks;