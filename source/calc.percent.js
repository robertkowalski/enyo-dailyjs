enyo.kind({
	name: 'PercentCalculator',
	kind: enyo.Component,
	published: {
		sum: 0, //optional default values
		percent: 0
	},
	events: {
		onCalculated: ''
	},
	create: function() {
		this.inherited(arguments);
	},
	calculate: function() {
		var result;

		result = (this.sum * this.percent) / 100;

		this.doCalculated({percentValue: result});
	}
});