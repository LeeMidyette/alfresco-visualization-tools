/**
* DevCon root namespace.
* 
* @namespace DevCon
*/
if (typeof DevCon == "undefined" || !DevCon)
{
   var DevCon = {};
}

/**
* DevCon dashlet namespace.
* 
* @namespace DevCon.dashlet
*/
if (typeof DevCon.dashlet == "undefined" || !DevCon.dashlet)
{
   DevCon.dashlet = {};
}

/**
 * Sample Hello World dashboard component.
 * 
 * @namespace DevCon.dashlet
 * @class DevCon.dashlet.Timeline
 * @author 
 */
(function()
{
   /**
    * YUI Library aliases
    */
   var Dom = YAHOO.util.Dom,
      Event = YAHOO.util.Event;

   /**
    * Alfresco Slingshot aliases
    */
   var $html = Alfresco.util.encodeHTML,
      $combine = Alfresco.util.combinePaths;


   /**
    * Dashboard Timeline constructor.
    * 
    * @param {String} htmlId The HTML id of the parent element
    * @return {DevCon.dashlet.Timeline} The new component instance
    * @constructor
    */
   DevCon.dashlet.Timeline = function Timeline_constructor(htmlId)
   {
      return DevCon.dashlet.Timeline.superclass.constructor.call(this, "DevCon.dashlet.Timeline", htmlId);
   };

   /**
    * Extend from Alfresco.component.Base and add class implementation
    */
   YAHOO.extend(DevCon.dashlet.Timeline, Alfresco.component.Base,
   {
      /**
       * Object container for initialization options
       *
       * @property options
       * @type object
       */
      options:
      {
      },
      
      tl : null,
      resizeTimerID : null,
      /**
       * Fired by YUI when parent element is available for scripting
       * 
       * @method onReady
       */
      onReady: function Timeline_onReady()
      {
    	  var eventSource = new Timeline.DefaultEventSource();
    	  var bandInfos = [
    	    Timeline.createHotZoneBandInfo({
    	        zones: [
    	            {   start:    new Date(),
    	                end:      new Date(),
    	                magnify:  10,
    	                unit:     Timeline.DateTime.WEEK
    	            },
    	            {   start:    new Date(),
    	                end:      new Date(),
    	                magnify:  7,
    	                unit:     Timeline.DateTime.DAY
    	            },
    	            {   start:    new Date(),
    	                end:      new Date(),
    	                magnify:  5,
    	                unit:     Timeline.DateTime.HOUR
    	            }
    	        ],
    	        //timeZone:       -5,
    	        eventSource:    eventSource,
    	        date:           new Date(),
    	        width:          "70%", 
    	        intervalUnit:   Timeline.DateTime.HOUR, 
    	        intervalPixels: 200
    	    }),
    	    Timeline.createBandInfo({
    	        //timeZone:       -5,
    	        eventSource:    eventSource,
    	        date:           new Date(),
    	        width:          "30%", 
    	        intervalUnit:   Timeline.DateTime.DAY, 
    	        intervalPixels: 200,
    	        showEventText:  false,
    	        trackHeight:    0.5,
    	        trackGap:       0.2,
    	    })
    	  ];
    	  bandInfos[1].syncWith = 0;
    	  bandInfos[1].highlight = true;
    	  bandInfos[1].eventPainter.setLayout(bandInfos[0].eventPainter.getLayout());
    	  
    	  tl = Timeline.create(document.getElementById("alfresco-timeline"), bandInfos);
    	  Timeline.loadXML(Alfresco.constants.PROXY_URI + "api/visualization/timeline", function(xml, url) { eventSource.loadXML(xml, url); });
      },
      
      onResize: function Timeline_onResize()
      {

    	  if (this.resizeTimerID == null) {
    	        this.resizeTimerID = window.setTimeout(function() {
    	            this.resizeTimerID = null;
    	            tl.layout();
    	        }, 500);
    	    }
      }
      
   });
})();
