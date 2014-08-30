
enquire.register("screen and (min-width:45em)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
        console.log( "MATCH",this );
    },      
                                
    // OPTIONAL
    // If supplied, triggered when the media query transitions 
    // *from a matched state to an unmatched state*.
    unmatch : function() {
        console.log( "UNMATCH",this );
    },    
    
    // OPTIONAL
    // If supplied, triggered once, when the handler is registered.
    setup : function() {
         console.log( "SETUP",this );       
         // Use jQuery/AJAX to load HTML into a DIV.
         // make our AJAX request just once, the first time the media query is matched

        $("img").each( function() {
            $(this).attr( "src" , $(this).attr("data-src"));
        });

        $("#extra").css( { display : "block"});

        //$("#extra").load( "extra.html" );
    },    
                                
    // OPTIONAL, defaults to false
    // If set to true, defers execution of the setup function 
    // until the first time the media query is matched
    deferSetup : true,
                                
    // OPTIONAL
    // If supplied, triggered when handler is unregistered. 
    // Place cleanup code here
    destroy : function() {
        console.log( "DESTROY",this );
    }
      
});