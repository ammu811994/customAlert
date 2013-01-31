customAlert
===========

Custom alert/popup jquery plug-in.

This plug-in uses the id attribute of an element and waits for it to be clicked. Set up of the dialog box for the 
example page is located customAlertCode.js the first two calls there display all avaliable options. 

This required jquery to run!!

https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js is the version the Plugin was build on.

Usage in \<script\>
========
For a full list of options including passing custom CSS see <a href='https://github.com/bmmage/customAlert/edit/master/README.md#full-options'>This</a>.
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


Full Options
===============
cConfirm
---------
```javascript
Option : Command					Description
-----------------------------------------------------------------------------------
'title': 'Error!!',                                     //Title text for window
'message': 'You must agree to terms of service!',       //Text of message to user
'confirmbutton':'Ok',                                   //Text for confirm button
'onconfirm': function(){confirmed();},                  //this calls another javascript function. replace canceled(); with your function
'cancelbutton' : 'No',                                  //Text for cancel button		
'oncancel': function(){canceled();},                    //this calls another javascript function. replace canceled(); with your function
'confirmbuttonfocus': true,                             //default is cancel button
'splashcss':{'background-color':'white',} ,             //add your own css in the format {'Property':'Value',}
'windowcss': {'background-color':'white',},             // add your own css in the format {'Property':'Value',}
'titlecss':{'color':'purple',},                         //add your own css in the format {'Property':'Value',}
'msgcss':{'color':'yellow',},                           //add your own css in the format {'Property':'Value',}
'buttoncontainercss':{'outline-top-right-radius':30,},  //add your own css in the format {'Property':'Value',}
'confirmbuttoncss': {'color':'green',}, 		        //add your own css in the format {'Property':'Value',}
'confirmbuttonovercss': {'color':'black',},             //custom css for alert button:hover
'confirmbuttondowncss': {'color':'orange',},            //custom css for alert button:active  
'cancelbuttoncss': {'color':'green',},                  //add your own css in the format {'Property':'Value',}
'cancelbuttonovercss': {'color':'black',},              //custom css for alert button:hover
'cancelbuttondowncss': {'color':'orange',},             //custom css for alert button:active  
```
cAlert
--------------
```javascript

Option : Command							Description
-----------------------------------------------------------------------------------
'alert': 'Hello Welcome to my Page!!',                //alert message **REQUIRED***
'location':'top',                                     //Top is default value for location. options  are (top,right,left,bottom)
'alertcss': {'color':'green','left':'20%',},          //add your own css in the format {'Property':'Value',}
'msgcss': {'font-style':'italic',},                   //add your own css in the format {'Property':'Value',}
'msgcontaincss': {'overflow':'visible'},              ///add your own css in the format {'Property':'Value',}
'slide': false,                                       //slide speed false means use fade in,  default = 100.
'bounce': false,                                      //bounce speed false = off default = 100.
'clickclose': false,                                  //click to close box default on, false = off; 
'closetime': false,                                   //alert duration in  seconds, false = off;
'button': 'OK',                                       //add button to alert window default ok
'clickbutton': function(){alertaction();},            //action for button default is close window 
'buttonfadeintime': 2000,                             //fadetime in time for button
'buttoncss': {'color':'green','border':'2px solid',}, //add your own css in the format {'Property':'Value',}
'buttonovercss': {'color':'blue',},                   //custom css for alert button:hover
'buttondowncss': {'color':'yellow',},                 //custom css for alert button:active
'minwidth': 50,                                       //number in px
'maxwidth': 30,                                       //number in px
'minheight': 50,                                      //number in px
'maxheight': 50,                                      //number in px 
```
