customAlert
===========

Custom alert/popup jquery plug-in.

This plug-in uses the id attribute of an element and waits for it to be clicked. Set up of the dialog box for the 
example page is located customAlertCode.js the first two calls there display all avaliable options. 

This required jquery to run!!

https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js is the version the Plugin was build on.

Usage in \<script\>
========
For a full list of options including passing custom CSS see (customAlertCode.js)
```javascript
$(function()
{   
    //ID of Element being Clicked
    //    |         Plugin Type (cConfirm or cAlert)
    //    |           |
    //    v           v
    $('#DialogBox').cConfirm(
          {
              'title': 'Error!!',             //Dialog Box Title
              'message': 'You must agree to terms of service!', //DialogBox Name
              'confirmbutton':'Ok',           //Dialog Box Button Text
          });
          
    $('#alert').cAlert(
          {
              'alert': 'This is a Timed Alert',   //alert message
          });
          
}
```
Usage in html
========
```html
<body>
	<input id="DialogBox" type='button' value="PopUp" />
  <input id="alert" type='button' value="Alert" />
</body>
```
