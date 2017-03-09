sap.ui.jsview("firstapp.FirstView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf firstapp.FirstView
	*/ 
	getControllerName : function() {
		return "firstapp.FirstView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf firstapp.FirstView
	*/ 
	createContent : function(oController) {
		var aControls = [];
		var oButton = new sap.ui.commons.Button(
				{
					id : this.createId("Mybutton"),
					text : "Hello JS view"
				}); 
		aControls.push(oButton.attachPress(oConroller.doIt));
		return aControls;

		return new sap.m.Page({
			title: "Title",
			content: [
						
			]
		});
	}

});