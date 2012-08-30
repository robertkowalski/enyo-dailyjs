enyo.kind({
	name: "App",
	kind: enyo.FittableRows,
	style: "",
	classes: "onyx",
	components: [
		{kind: "onyx.Toolbar", classes: 'center', content: 'Tip calculator'},
		{kind: enyo.Scroller, classes: 'center', fit: true, components: [
			{kind: "onyx.InputDecorator", classes: "inputDecorator", style: "margin-top: 50px;", components: [
				{kind: "onyx.Input", classes: "center", name: "sumControl", placeholder: "Enter sum"}
			]},
			{kind: "onyx.InputDecorator", classes: "inputDecorator", components: [
				{kind: "onyx.Input", classes: "center", name: "percentControl", placeholder: "Enter percent"}
			]},
			{tag: "div", name: "tipAmount"}
		]},
		{kind: "onyx.Toolbar", style: 'text-align: right;', components: [
			{kind: "onyx.Button", content: "Calculate tip", ontap: "calculateWithComponent"}
		]},
		{kind: "PercentCalculator", name: "percentCalculator", onCalculated: "updateControls"}
	],
	create: function() {
		this.inherited(arguments);
	},
	updateControls: function(inSource, inEvent) {
		this.$.tipAmount.setContent("The tip is: " + inEvent.percentValue);

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