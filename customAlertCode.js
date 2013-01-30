$(function()
{   //ID of Element being Clicked
    //    | 
    //    v
    $('#DialogBox').cConfirm(
				{   //List of all Options//
                    //'title': 'Delete Record?',
                    //'message': 'Are You Sure?',
                    //'confirmbutton':'Ok',
                    'onconfirm': function(){confirmed();},
                    //'cancelbutton' : 'NEVER!',
                    //'oncancel': function(){canceled();},
                    //'confirmbuttonfocus': true,  //default is cancel button
                    //'splashcss':{'background-color':'white','background-image':'url("alerticon.bmp")','background-size':'100%',} ,
                    //'windowcss': {},
                    //'titlecss':{'color':'purple',},
                    //'msgcss':{'color':'yellow',},
                    //'buttoncontainercss':{'left':'35%','width':'30%','background-color':'blue','border':'4px dotted yellow',
                    //                     'border-top-left-radius':30,'border-top-right-radius':30,'outline':'dotted','outline-top-right-radius':30,},
                    //'confirmbuttoncss': {'color':'green',}, //add your own css in the format {'Property':'Value',}
                    //'confirmbuttonovercss': {'color':'black',},                   //custom css for alert button:hover
                    //'confirmbuttondowncss': {'color':'orange',},                 //custom css for alert button:active  
                    //'cancelbuttoncss': {'color':'green',}, //add your own css in the format {'Property':'Value',}
                    //'cancelbuttonovercss': {'color':'black',},                   //custom css for alert button:hover
                    //'cancelbuttondowncss': {'color':'orange',},                 //custom css for alert button:active                 
                    });

    $('#alert').cAlert(
				{   //List of all Options//
                    'alert': 'This is a Timed Alert',                     //alert message
                    //'alertcss': {'color':'blue'},                       //add your own css in the format {'Property':'Value',}
                    //'location':'bottom',                                // Top is default value for location. options (right,left,bottom)
                    //'msgcss': {'font-style':'italic',},                 //add your own css in the format {'Property':'Value',}
                    //'msgcontaincss': {'overflow':'visible'},            ///add your own css in the format {'Property':'Value',}
                    //'slide': false,                                     //slide speed false means use fade in,  default = 100.
                    //'bounce': false,                                    //bounce speed false = off default = 100.
                    //'clickclose': false,                                //click to close box
                    //'closetime': false,                                 //how long the pop-up will stay open in seconds;
                    //'button': '/\\',                                    //add button to alert window default ok
                    //'clickbutton': function(){alertaction();},          //action for button default is close window 
                    //'buttonfadeintime': 1000,                           //fadetime in time for button
                    //'buttoncss': {'left':'-50%','border':'0px'},        //add your own css in the format {'Property':'Value',}
                    //'buttonovercss': {'color':'blue',},                 //custom css for alert button:hover
                    //'buttondowncss': {'color':'yellow',},               //custom css for alert button:active
                    //'minwidth': 900,                                    // number in px
                    //'maxwidth': 900,                                    // number in px
                    //'minheight': 50,                                    // number in px
                    //'maxheight': 50,                                    // number in px 
                 });


    $('#DialogBoxMulti').cConfirm(
				{   
                    'onconfirm': function(){confirmed();},
                    'oncancel': function(){canceled();},
                    'cancelbutton' : 'Not Ok',
                 });

    $('#DialogBoxMultiSplash').cConfirm(
				{   
                    'onconfirm': function(){confirmed();},
                    'splashcss':{'background-color':'white','background-image':'url("allow.bmp")','background-size':'100%',} ,
                 });

    $('#DialogBoxCustomCss').cConfirm(
				{   
                    'onconfirm': function(){confirmed();},
                    'windowcss': {'background-color':'gray','border':'4px solid orange'},
                    'titlecss':{'color':'brown',},
                    'msgcss':{'color':'purple',},
                    'buttoncontainercss':{'left':'35%','width':'30%','background-color':'blue','border':'4px dotted yellow',},
                    'confirmbuttoncss': {'color':'green',}, //add your own css in the format {'Property':'Value',}
                    'confirmbuttonovercss': {'color':'black',},                   //custom css for alert button:hover
                    'confirmbuttondowncss': {'color':'orange',},                 //custom css for alert button:active  
                 });

    $('#alertCloseButton').cAlert(
				{   
                    'alert': 'This Alert has a button to close',          //alert message
                    'closetime': false,                                 //how long the pop-up will stay open in seconds;
                    'button': '/\\',                                      //add button to alert window default ok
                    'clickbutton': function(){alertaction();},          //action for button default is close window 
                 });

    $('#alertBottom').cAlert(
				{   
                    'alert': 'This Alert comes from the bottom!',          //alert message
                    'location':'bottom',                                // Top is default value for location. options (right,left,bottom)
                });

//only needed if clicked button will be used
function alertaction()
{
    document.getElementById('reply').innerHTML='You pressed the alert button';
}
function confirmed()
{
    document.getElementById('reply').innerHTML='You pressed `ok` on the PopUp!';
}
function canceled()
{
    document.getElementById('reply').innerHTML='You Pressed `Not ok` on the PopUp!';
}



});
