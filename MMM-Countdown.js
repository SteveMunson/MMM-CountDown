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
	
    // Override dom generator
	getDom: function() {
        var today = new Date(Date.now());
		var target = new Date(this.config.date);
		var timeDiff = target - today;
        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

		var wrapper = document.createElement("div");

		const number = document.createElement("span");
		const interval = document.createElement("span");

		number.className = "bright xlarge regular";
		interval.className = "dimmed medium thin";

        number.innerHTML = days
        interval.innerHTML = ' days'
		
		wrapper.appendChild(number)
		wrapper.appendChild(interval)

		return wrapper;
	}
});