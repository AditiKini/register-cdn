!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.RegistrationSDK=n():e.RegistrationSDK=n()}(self,(()=>(window.initRegistrationSDK=function(){var e=document.getElementById("registration-form-container");e&&(e.innerHTML='\n        <div id="registration-form">\n          <div class="form-group">\n            <label for="username">Username</label>\n            <input type="text" id="username" name="username" />\n          </div>\n          <div class="form-group">\n            <label for="email">Email</label>\n            <input type="email" id="email" name="email" />\n          </div>\n          <div class="form-group">\n            <label for="password">Password</label>\n            <input type="password" id="password" name="password" />\n          </div>\n          <div class="form-group">\n            <button id="register-button">Register</button>\n          </div>\n          <div id="response-message"></div>\n        </div>\n      ',document.getElementById("register-button").addEventListener("click",(function(){var e=document.getElementById("username").value,n=document.getElementById("email").value,t=document.getElementById("password").value;document.getElementById("response-message").textContent=e&&n&&t?"Registration successful!":"All fields are required!"})))},{})));