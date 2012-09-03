enyo.kind({
	name: "App",
	kind: enyo.Control,
	style: "",
	classes: "onyx",
	components: [
		{kind: "onyx.InputDecorator", components: [
			{kind: "onyx.Input", name: "sumControl", placeholder: "Enter sum"}
		]},
		{kind: "onyx.InputDecorator", components: [
			{kind: "onyx.Input", name: "percentControl", placeholder: "Enter percent"}
		]},
		{kind: "onyx.Button", content: "Calculate tip", ontap: "calculate"},
		{tag: "div", name: "tipAmount"}
	],
	create: function() {
		this.inherited(arguments);
	},
	calculate: function(inSource, inEvent) {
		var sum = this.$.sumControl.hasNode().value;
		var percent = this.$.percentControl.hasNode().value;

		var result = (sum * percent) / 100;
		this.$.tipAmount.setContent(result);

		return true; // stop bubbling
	}
});