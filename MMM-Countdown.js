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
		var wrapper = document.createElement("div");

		const line = document.createElement("table");
		line.className = this.config.tableClass;

		const row = document.createElement("tr");
		const numberCell = document.createElement("td");
		const intervalCell = document.createElement("td");

		numberCell.className = "bright xlarge regular";
		intervalCell.className = "normal large dimmed";

        var today = new Date(Date.now());
		var target = new Date(this.config.date);
		var timeDiff = target - today;

        var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        var days = diffDays

        numberCell.innerHTML = days
        intervalCell.innerHTML = ' days'
		
		line.appendChild(numberCell)
		line.appendChild(intervalCell)
		wrapper.appendChild(line);

		return wrapper;
	}
});