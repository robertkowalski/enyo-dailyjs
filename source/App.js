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
		{kind: "onyx.Button", content: "Calculate tip", ontap: "calculateWithComponent"},
		{tag: "div", name: "tipAmount"},
		{kind: "PercentCalculator", name: "percentCalculator", onCalculated: "updateControls"}
	],
	create: function() {
		this.inherited(arguments);
	},
	updateControls: function(inSource, inEvent) {
		this.$.tipAmount.setContent(inEvent.percentValue);

		return true; // stop bubbling
	},
	calculateWithComponent: function(inSource, inEvent) {
		var sum = this.$.sumControl.hasNode().value;
		var percent = this.$.percentControl.hasNode().value;

		this.$.percentCalculator.setSum(sum);
		this.$.percentCalculator.setPercent(percent);

		this.$.percentCalculator.calculate();
	}
});