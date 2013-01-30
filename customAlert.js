/**
  * @author: Brett Michalick
  *
  * 
  * 
  *
  *
  **!!! Code Use Example -- Multiple button Dialog box!!!**
  *This script is made to run on click action. to run this without a click use the .click() function
  * Commented out Options are not required!!!

///////////////////////////  **!!!!! Code Usage Example --  Multiple button Dialog box!!!** ////////////////////////////////////

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="customAlert.js"></script>
<script>
<!--//Code for CustomConfirm/////
$(function()
{////the id of triggering element///
 //      |
 //      |
 //     \ /
 //      v
    $('#confirm').cConfirm(
				{
                   //css options
                   // 'splashcss': {'background-image':'url("allow.bmp")','background-size':'100%',},
                   // 'windowcss':{'background-color':'green'},
                   // 'titlecss':{'color':'purple',},
                   // 'msgcss':{'color':'yellow',},
                   // 'buttoncontainercss':{'background-color':'blue','border':'4px dotted yellow',},
                   // 'cancelbuttoncss': {'color':'red',},
                   // 'cancelbuttonovercss': {'color':'gray',},
                   // 'cancelbuttondowncss': {'color':'yellow',},
                   // 'confirmbuttoncss': {'color':'green',}, 
                   // 'confirmbuttonovercss': {'color':'black',},
                   // 'confirmbuttondowncss': {'color':'orange',},


                    //options
                    'title': 'Delete Record?', 
                    'message': 'Are You Sure?',
                    'cancelbutton':'No',
                  //  'oncancel': function(){canceled();},
                  //  'confirmbutton':'Yes',         //not required defaults to Ok
                  //  'confirmbuttonfocus': true,    //default is cancel button
                  //  'onconfirm': function(){confirmed();},

                 });
//                                               ^  
//                                               |
//            ___________________________________|
//           |  Do Fuction if confirm is clicked
//           v
function confirmed()
{
    //code if person pressed the confirmed button
}

function canceled()
{
    //code if person pressed the cancel button
}

});
  //end code for customConfirm///-->
</script>
///////////////////////////  **!!!!! END Code Usage Example -- Multi button Dialog box!!!** /////////////////////////////////

  **!!! Code Use Example -- Single button Dialog box!!!**
  * Commented out Options are not required

///////////////////////////  **!!!!! Code Usage Example -- Single button Dialog box!!!** ////////////////////////////////////


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="customAlert.js"></script>
<script>


<!--//Code for CustomConfirm/////
$(function()
{ ////the id of triggering element///
//         |
//        \ /
//         v
    $('#confirm').cConfirm(
				{
                    'title': 'Delete Record?',
                    'message': 'Are You Sure?',
                    'confirmbutton':'OK',        //only required to change text default is Yes
                    //'onconfirm': function(){confirmed();},
                    //'confirmbuttonfocus': true,  //default is cancel button
                    //'splashcss': {'background-image':'url("allow.bmp")'),
                    //'windowcss':{'background-color':'green'},
                    //'titlecss':{'color':'purple',},
                    //'msgcss':{'color':'yellow',},
                    //'buttoncontainercss':{'background-color':'blue','border':'4px dotted yellow',},
                    //'confirmbuttoncss': {'color':'green',}, 
                    //'confirmbuttonovercss': {'color':'black',},
                    //'confirmbuttondowncss': {'color':'orange',},
                 });

    function confirmed()
    {
        //code if person pressed the confirmed button
    }

});
  //end code for customConfirm///-->
</script>

///////////////////////////  **!!!!! END Code Usage Example -- single button Dialog box!!!** /////////////////////////////////



///////////////////////////  **!!!!! Code Usage Example -- Alert Info Box box!!!** //////////////////////////////////////////
  * Commented out Options are not required

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="customAlert.js"></script>
<script>
<!--//Code for CustomAlert/////
$(function()
{ ////the id of triggering element///
 //      |
 //      |
 //     \ /
 //      v
    $('#alert').cAlert(
				{
                    'alert': 'Hello Welcome to my Page!!',                  //alert message **REQUIRED***
                    //'location':'top',                                     //Top is default value for location. options  are (top,right,left,bottom)
                    //'alertcss': {'color':'green','left':'20%',},          //add your own css in the format {'Property':'Value',}
                    //'msgcss': {'font-style':'italic',},                   //add your own css in the format {'Property':'Value',}
                    //'msgcontaincss': {'overflow':'visible'},              ///add your own css in the format {'Property':'Value',}
                    //'slide': false,                                       //slide speed false means use fade in,  default = 100.
                    //'bounce': false,                                      //bounce speed false = off default = 100.
                    //'clickclose': false,                                  //click to close box default on, false = off; 
                    //'closetime': false,                                   //alert duration in  seconds, false = off;
                    //'button': 'OK',                                       //add button to alert window default ok
                    //'clickbutton': function(){alertaction();},            //action for button default is close window 
                    //'buttonfadeintime': 2000,                             //fadetime in time for button
                    //'buttoncss': {'color':'green','border':'2px solid',}, //add your own css in the format {'Property':'Value',}
                    //'buttonovercss': {'color':'blue',},                   //custom css for alert button:hover
                    //'buttondowncss': {'color':'yellow',},                 //custom css for alert button:active
                    //'minwidth': 50,                                       //number in px
                    //'maxwidth': 30,                                       //number in px
                    //'minheight': 50,                                      //number in px
                    //'maxheight': 50,                                      //number in px 
                 });

    //only needed if clickbutton will be used
    function alertaction()
    {
        document.getElementById('reply').innerHTML='You Pressed Ok';
    }

});
  //end code for customAlert///-->
</script>
///////////////////////////  **!!!!! END Code Usage Example -- Alert Info Box box!!!** //////////////////////////////////////
  **/


(function($)
{ 
	$.fn.cAlert=function(options)
	{
		//Sets parameters
		var defaults=
		{
              /*   Alert Pop-up Options */
            'alert': 'Your Message Here!',          // Alert Message && flag to not do a confirmation window
            'location': 'top',      // position on outside edge of window
            'bounce': 100,          //slide speed false = off default = 100.
            'slide': 100,           //bounce speed false = off default = 100.
            'closetime': 3,         //click to close box
            'clickclose': true,     //how long the pop-up will stay open in milisecons 1000 = 1 sec;
            'button': null,         //add button to alert window default ok
            'clickbutton': null,    //default close window    
            'buttonfadeintime': 500,//fadetime in time for button
            'minwidth': 150,        // number in px
            'maxwidth': 350,        // number in px
            'minheight': 50,        // number in px
            'maxheight': 150,       // number in px
             
            ////////////add your own css {'Property':'Value',},/////////////////
            'alertcss':{'width':'auto','position':'fixed','height':'auto',}, 
            'msgcss': {'padding-left':'15px','padding-right':'15px','padding-top':'0px','border-color':'#C0C0C0',},
            'msgcontaincss':{'position':'relative','top':"-20px",'padding-left':'15px','padding-right':'15px','padding-top':'0px',
                             'padding-bottom':'0px','border-color':'#C0C0C0','overflow':'hidden','word-wrap':'break-word'},
            'buttoncss': {'background-color':'#C0C0C0','border-color':'black','color':'white','border':'3px outset','border-radius':'10px','display':' table-cell','text-align':'center','vertical-align':' middle','cursor':'pointer',}, //custom css for alert button   
            'buttonovercss':{'color':'#f3f315'},                                        //custom css for alert button:hover
            'buttondowncss':{'border':'inset',},     //custom css for alert button:active
 



		};  
		var parameters=$.extend(defaults, options); 

    ////////////Main////////////////
    return this.each(function()
    {


        var cPopConf=$(this);	    
        
        cPopConf.click(function(clickEvent)
        {

               clickEvent.preventDefault();

            //function to close window alert
            function cAlertClose(action)
            {
				//if there is an action passed execute it
                if(action)
                {
                    action(cPopConf);
                }
                //remove window
                cPopConf.fadeOut('slow',function()
                {
                    $(this).remove();
                });
            }

                //Create the pop-up
                var cPopConf=$('<div>');
                cPopConf.addClass('cAlert').hide().appendTo($('body')).attr('id', 'alertboxopen');
                //add message container
                var messagecontain=$('<div>');
                messagecontain.addClass('cAlertMsgContain').appendTo(cPopConf);
                //add message
                var message=$('<p>');
                message.addClass('cAlertMsg').html("<br>"+parameters.alert+"<br><br>").appendTo(messagecontain);



                 //set location on page top,bottom,left,right
                 switch (parameters.location)
                 {
                    case 'top':
                        cPopConf.css({'width':'auto','position':'fixed','height':'auto','left':'50%','top':'0px','background-color':'#DCDCDC','border':'3px solid','border-color':'#C0C0C0','border-radius':'30px','border-top-right-radius':'0px','border-top-left-radius':'0px','border-top':'0px','text-align':'center','overflow':'visible','word-wrap':'break-word','padding-top':'0px','border-color':'#C0C0C0',});
                        var toggler = {'height' : 'toggle'} ;
                        break;
                    case 'bottom':
                        cPopConf.css({'width':'auto','position':'fixed','height':'auto','left':'50%','bottom':'0px','background-color':'#DCDCDC','border':'3px solid','border-color':'#C0C0C0','border-radius':'30px','border-bottom-right-radius':'0px','border-bottom-left-radius':'0px','border-bottom':'0px','text-align':'center','overflow':'visible','word-wrap':'break-word','padding-bottom':'0px','border-color':'#C0C0C0',});
                        var toggler = {'height' : 'toggle'} ;
                        break;
                       case 'left':
                        cPopConf.css({'width':'auto','position':'fixed','height':'auto','top':'50%','left':'0px','background-color':'#DCDCDC','border':'3px solid','border-color':'#C0C0C0','border-radius':'30px','border-top-left-radius':'0px','border-bottom-left-radius':'0px','border-left':'0px','text-align':'center','overflow':'visible','word-wrap':'break-word','padding-left':'0px','border-color':'#C0C0C0',});
                        var toggler = {'width' : 'toggle'} ;
                        break;
                   case 'right':
                        cPopConf.css({'width':'auto','position':'fixed','height':'auto','top':'50%','right':'0px','background-color':'#DCDCDC','border':'3px solid','border-color':'#C0C0C0','border-radius':'30px','border-top-right-radius':'0px','border-bottom-right-radius':'0px','border-right':'0px','text-align':'center','overflow':'visible','word-wrap':'break-word','padding-right':'0px','border-color':'#C0C0C0',});
                        var toggler = {'width' : 'toggle'} ;
                        break;  
                   case 'topright':
                        cPopConf.css({'width':'auto','position':'fixed','height':'auto','top':'0px','right':'0px','background-color':'#DCDCDC','border':'30px solid','border-color':'#C0C0C0','border-radius':'30px','border-top-right-radius':'0px','border-bottom-right-radius':'90px','border-right':'90px','text-align':'center','overflow':'visible','word-wrap':'break-word','padding-right':'0px','border-color':'#C0C0C0',});
                        var toggler = {'width' : 'toggle','height' : 'toggle'} ;
                        break;                                               
                }
                //set up css
                cPopConf.css(parameters.alertcss);
                message.css(parameters.msgcss);

                //set min/max height width
                if(cPopConf.width() < parameters.minwidth)cPopConf.css({'width':parameters.minwidth});                
                if(cPopConf.width()  > parameters.maxwidth)cPopConf.css({'width':parameters.maxwidth});
                if(cPopConf.height() < parameters.minheight)cPopConf.css({'height':parameters.minheight});
                if(cPopConf.height() > parameters.maxheight)cPopConf.css({'height':parameters.maxheight});
                messagecontain.css({'height':(cPopConf.height()),}).css(parameters.msgcontaincss );   

                //width and height of main window 
                cPopH = cPopConf.height() ;
                cPopW = cPopConf.width() ;
                var topbotborders = parseInt(cPopConf.css("borderTopWidth")) + parseInt(cPopConf.css("borderBottomWidth"));
                var borders = parseInt(cPopConf.css("borderRightWidth")) + parseInt(cPopConf.css("borderLeftWidth"));
                var bordersB = parseInt(cPopConf.css("borderBottomWidth"));
                var bordersT = parseInt(cPopConf.css("borderTopWidth"));
                var bordersR = parseInt(cPopConf.css("borderRightWidth"));
                var bordersL = parseInt(cPopConf.css("borderLeftWidth"));
                //add button if passed
                if(parameters.button)
                { var button=$('<input>');
                    button.addClass('cAlertButton').css({'position':'relative','cursor':'pointer',}).attr('type','button').attr('value',parameters.button).appendTo(cPopConf).hide();};

                if(parameters.slide)
                {
                    cPopConf.animate(toggler,parameters.slide);
                            
                    //Bounce effect top/bottom //
                    if(parameters.location == 'top' || parameters.location == 'bottom')
                        if(parameters.bounce){cPopConf.animate({height : (cPopH-(cPopH/4))},parameters.bounce);cPopConf.animate({height: ( cPopH )},parameters.bounce);cPopConf.animate({height: ( cPopH-(cPopH/6) )},parameters.bounce);cPopConf.animate({height: ( cPopH )},parameters.bounce);};
                    //bounce effect left/right //
                    if(parameters.location == 'left' || parameters.location == 'right')
                        if(parameters.bounce){cPopConf.animate({width : (cPopW-(cPopW/4))},parameters.bounce);cPopConf.animate({width: ( cPopW )},parameters.bounce);cPopConf.animate({width: ( cPopW-(cPopW/6) )},parameters.bounce);cPopConf.animate({width: ( cPopW )},parameters.bounce);};
                    //click to close effect
                    if(parameters.clickclose && parameters.button == null)cPopConf.click(function(){cPopConf.animate(toggler,parameters.slide,function(){cPopConf.remove()})});
                    //close time effect
                    if(parameters.closetime)setTimeout(function(){cPopConf.animate(toggler,parameters.slide,function(){cPopConf.remove()})},(parameters.closetime*1000));



                    //displays the button with style activates the clicking functionality
                    if(parameters.button)
                    { 
                        //set buttons css
                        button.css({'background-color':'#C0C0C0','border-color':'black','color':'white','border':'3px outset','border-radius':'10px','display':' table-cell','text-align':'center','vertical-align':' middle','cursor':'pointer'});
                        button.css(parameters.buttoncss);
                        var buttonBorders = parseInt(button.css("borderRightWidth")) + parseInt(button.css("borderLeftWidth"));
                        var buttonBordersTop = parseInt(button.css("borderTopWidth")) + parseInt(button.css("borderBottomWidth"));

                      switch(parameters.location) 
                     {
                      case 'top':
                          button.css( {'top':(-((button.height()+buttonBordersTop)/2)+bordersB),'left':0,'z-index': 999999, });
                          break;
                      case 'bottom':
                          button.css( {'bottom':(cPopH+((button.height()+buttonBordersTop)/2)+bordersT),'left':0,'z-index': 999999, });
                          break;
                      case 'left':
                          button.css( {'position':'absolute','left':(cPopW-((button.width()+buttonBorders)/2)-5)+bordersR,'top':(((cPopH)-((button.height()+buttonBordersTop)))/2)});
                          break;                          
                      case 'right':
                          button.css( {'position':'absolute','right':(cPopW-((button.width()+buttonBorders)/2)-5)+bordersL,'top':(((cPopH)-((button.height()+buttonBordersTop)))/2)});
                          break;                           
                    }
                        //set all button css properties
                        button.css(parameters.buttoncss)
                        .mouseover(function (){$(this).css(parameters.buttonovercss)})
                        .mouseleave(function (){$(this).css(parameters.buttoncss)})
                        .mouseup(function (){$(this).css(parameters.buttoncss)})
                        .mousedown(function (){$(this).css(parameters.buttondowncss)})
                        .hide();                  

                       //button click if function passed call it on close//
                       if(parameters.clickbutton )
                       {
                           button.click(function (){cPopConf.animate(toggler,parameters.slide,function (){cAlertClose(parameters.clickbutton)})});
                       }
                       //else just close window
                       else
                       {
                           button.click(function (){cPopConf.animate(toggler,parameters.slide,function (){cAlertClose()})});
                       }
                       //display the button after a short delay
                       setTimeout(function () {button.fadeIn('slow')},(parameters.buttonfadeintime));
                    }
                    
                }
                else
                {
                    cPopConf.fadeIn('slow').css({'height':cPopH,});

                    if(parameters.clickclose)
                        cPopConf.click(function(){cPopConf.fadeOut('fast',function(){cPopConf.remove()})});
                    if(parameters.closetime)
                        setTimeout(function(){cPopConf.fadeOut('fast',function(){cPopConf.remove()})},(parameters.closetime*1000));
                    
                    //displays the button with style activates the clicking functionality
                    if(parameters.button)
                    { 
                        //set buttons css
                        button.css(parameters.buttoncss);
                        var buttonBorders = parseInt(button.css("borderRightWidth")) + parseInt(button.css("borderLeftWidth"));
                        var buttonBordersTop = parseInt(button.css("borderTopWidth")) + parseInt(button.css("borderBottomWidth"));
    
                         // Set alert Location//
                          switch(parameters.location) 
                         {
                          case 'top':
                              button.css( {'top':(-((button.height()+buttonBordersTop)/2)+bordersB),'left':0,'z-index': 999999, });
                              break;
                          case 'bottom':
                              button.css( {'bottom':(cPopH+((button.height()+buttonBordersTop)/2)+bordersT),'left':0,'z-index': 999999, });
                              break;
                          case 'left':
                              button.css( {'position':'absolute','left':(cPopW-((button.width()+buttonBorders)/2)-5)+bordersR,'top':(((cPopH)-((button.height()+buttonBordersTop)))/2)});
                              break;                          
                          case 'right':
                              button.css( {'position':'absolute','right':(cPopW-((button.width()+buttonBorders)/2)-5)+bordersL,'top':(((cPopH)-((button.height()+buttonBordersTop)))/2)});
                              break;                           
                          case 'topright':
                              button.css( {'position':'absolute','right':(cPopW-($(this).width()/2)),'top':(((cPopH)-($(this).height()))/2)});
                              break;           
                        }
                    
                        button.css(parameters.buttoncss)
                        .mouseover(function (){$(this).css(parameters.buttonovercss)})
                        .mouseleave(function (){$(this).css(parameters.buttoncss)})
                        .mouseup(function (){$(this).css(parameters.buttoncss)})
                        .mousedown(function (){$(this).css(parameters.buttondowncss)})
                        .hide();

                       //button click if function passed call it on close//
                       if(parameters.clickbutton )
                       {
                           button.click(function (){cPopConf.fadeOut('fast',function (){cAlertClose(parameters.clickbutton)})});
                       }
                       //else just close window//
                       else
                       {
                           button.click(function (){cPopConf.fadeOut('fast',function (){cAlertClose()})});
                       }
                       setTimeout(function () {button.fadeIn('slow')},(parameters.buttonfadeintime));
                    }


          
                }////end slide///
               //sets popup to centered
                var cPopUpw = ((cPopConf.width()+borders)/2);
                var cPopUph = ((cPopConf.height()+topbotborders)/2);
                if(parameters.location == 'top' || parameters.location == 'bottom')
                    cPopConf.css({'margin-left':-cPopUpw,'z-index': 999999,});                
                if(parameters.location == 'left' || parameters.location == 'right')
                {
                     cPopConf.css({'margin-top':-100,'z-index': 999999,});                
                }
                
       });////////End Click///////////////
    });  /////////END Main////////////////
}//////////////////////////////END ALERT Class///////////////////////////////////////////

   
///////////////////////Confirm Box Plugin//////////////////////////////////
	$.fn.cConfirm=function(options)
	{
		//Sets parameters
		var defaults=
		{
       /*   Confirm Window Options */
            'title': 'Title of box',
            'message': 'Alert Message Here!!!',
            'splash': true,
            'confirmbutton': 'Ok',
            'cancelbutton': null,
            'onconfirm': null,
            'oncancel': null,
            'confirmbuttonfocus': null,

        /*  Css Options */
            'splashcss':{'background-color':'black',},
            'windowcss':{'color':'white',},
            'titlecss':{'color':'red',},
            'msgcss':{'color':'black',},
            'buttoncontainercss':{},
            'confirmbuttoncss': {'background-color':'#C0C0C0','border-color':'black','color':'white','border':'3px outset','border-radius':'10px','display':' table-cell','text-align':'center','vertical-align':' middle','cursor':'pointer',}, //custom css for alert button   
            'confirmbuttonovercss':{'color':'#f3f315'},                                        //custom css for alert button:hover
            'confirmbuttondowncss':{'border':'inset',},     //custom css for alert button:active 
            'cancelbuttoncss': {'background-color':'#C0C0C0','border-color':'black','color':'white','border':'3px outset','border-radius':'10px','display':' table-cell','text-align':'center','vertical-align':' middle','cursor':'pointer',}, //custom css for alert button   
            'cancelbuttonovercss':{'color':'#f3f315'},                                        //custom css for alert button:hover
            'cancelbuttondowncss':{'border':'inset',},     //custom css for alert button:active 
 		};  
		var parameters=$.extend(defaults, options); 

    ////////////Main////////////////
    return this.each(function()
    {


        var cPopConf=$(this);	    
        
        cPopConf.click(function(clickEvent)
        {

               clickEvent.preventDefault();

            //function to close window
            function cPopClose(action)
            {
				//if there is an action passed execute it
                if(action)
                {
                    action(cPopConf);
                }                  
                //remove splash if it is passed
                if(parameters.splash)
                {
                    cPopSplash.fadeOut('slow');
                }              
                //remove window
                cPopConf.fadeOut('slow',function()
                {
                    $(this).remove();
                });
            }
                if(parameters.splash)
                {
                    var cPopSplash=$('<div></div>');
                    cPopSplash.addClass('cPopSplash').css({'opacity':'0.6','height':'100%','width':'100%','position':'fixed','left':'0','top':'0','z-index': 999999,}).css(parameters.splashcss).appendTo($('body'));
                 }

                //Create the pop-up
                var cPopConf=$('<div>');
                cPopConf.addClass('cPopAlertWindow').hide().css({'position':'fixed','left':'50%','top':'50%','background-color':'#DCDCDC','border':'9px solid','border-color':'#C0C0C0','border-radius':'10px',}).css(parameters.windowcss).appendTo($('body'));


                //add title
                var title=$('<h1>');
                title.addClass('cPopTitle').html(parameters.title).css({'padding-right':'50px','height':'100%','width':'100%','color':'#8C1717','text-align':'center','vertical-align':' middle',}).css(parameters.titlecss).appendTo(cPopConf);
                //add message
                var message=$('<div>');
                message.addClass('cPopMsg').html(parameters.message).css({'text-align':'center','word-wrap':'break-word','padding':'20px','color':'black',}).css(parameters.msgcss).appendTo(cPopConf);
                
                    
                 //footer to hold button(s)   
                var footer=$('<div>');
                footer.addClass('cPopFooter').css({'width':'auto','position':'relative','text-align':'center','z-index': 1000000,}).css(parameters.buttoncontainercss).appendTo(cPopConf);



                if(parameters.cancelbutton)
                {
                    //move buttons to right side
                    //add cancel Button
                    var cancelButton=$('<input>');
                    cancelButton.addClass('cPopcancelButton').attr('type','button').attr('value',parameters.cancelbutton).click(function()
                    {
                        cPopClose(parameters.oncancel);
                    }).appendTo(footer);
                    
                    cancelButton.css({'cursor':'pointer',}).css(parameters.cancelbuttoncss)
                    .mouseover(function (){$(this).css(parameters.cancelbuttonovercss)})
                    .mouseleave(function (){$(this).css(parameters.cancelbuttoncss)})
                    .mouseup(function (){$(this).css(parameters.cancelbuttoncss)})
                    .mousedown(function (){$(this).css({'border-style':'inset'}).css(parameters.cancelbuttondowncss)});                             
                }
                //add confirm Button
                var confirmButton=$('<input>');
                confirmButton.addClass('cPopconfirmButton').attr('type','button').attr('value',parameters.confirmbutton).click(function()
                {
                    cPopClose(parameters.onconfirm);
                }).appendTo(footer);  
                    confirmButton.css({'cursor':'pointer',}).css(parameters.confirmbuttoncss)
                    .mouseover(function (){$(this).css(parameters.confirmbuttonovercss)})
                    .mouseleave(function (){$(this).css(parameters.confirmbuttoncss)})
                    .mouseup(function (){$(this).css(parameters.confirmbuttoncss)})
                    .mousedown(function (){$(this).css({'border-style':'inset'}).css(parameters.confirmbuttondowncss)});  


		        cPopConf.fadeIn('slow');//display box
                
                

                //if canacel button active center's both buttons
                if(parameters.cancelbutton)
                {var cButtonw = 50;confirmButton.css({'margin-left':cButtonw,'z-index': 1000000,});};
                ///////////////////End Center Confirm Button//////////////////                
                
                
               //sets popup to centered
                var bordersside = parseInt(cPopConf.css("borderRightWidth")) + parseInt(cPopConf.css("borderLeftWidth"));
                var borderstop = parseInt(cPopConf.css("borderTopWidth")) + parseInt(cPopConf.css("borderBottomWidth"));
                var cPopUph = ((cPopConf.height()+borderstop)/2)
                var cPopUpw = ((cPopConf.width()+bordersside)/2)
                cPopConf.css(
                {
                    'margin-left':-cPopUpw,
                    'margin-top':-cPopUph,
                    'z-index': 1000000,
                })

                if(parameters.cancelbutton){cancelButton.focus();};
                if(parameters.confirmbuttonfocus){confirmButton.focus();};
            


       });////////END CLICK///////////////
    });  /////////END Main////////////////
    
    }////////////////////////////////END CONFERMATION BOX CODE/////////////////////////////////
})(jQuery);
