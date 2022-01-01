Module.register("MMM-Countdown",{
	// Default module config.
	defaults: {
        date: "3000-01-01",
        event: "Countdown"
	},

    // Define required scripts.
	getScripts: function () {
		return ["moment.js"];
	},

    // set update interval
	start: function() {
        Log.info("Starting module: " + this.name);
		var self = this;
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, this.config.customInterval); 
        this.data.header = this.config.event;
	},
	
    // Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");

        var timeWrapper = document.createElement("div");
        var intervalWrapper = document.createElement("div");

		timeWrapper.className = "time bright xlarge light";
        intervalWrapper.className = "normal large";

        var today = new Date(Date.now());
		var target = new Date(this.config.date);
		var timeDiff = target - today;

        var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        var days = diffDays

        timeWrapper.innerHTML = days
        intervalWrapper.innerHTML = ' days'

        wrapper.appendChild(timeWrapper);
        wrapper.appendChild(intervalWrapper);

		return wrapper;
	}
});