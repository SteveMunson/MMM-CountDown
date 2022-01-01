# Module: MMM-Countdown
The module allows you to display a countdown to a date.
## Installation
In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/stevemunson/MMM-Countdown.git
````

Install the module dependencies:
````
cd MMM-Countdown
npm install
````

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
  {
    module: "MMM-Countdown",
    position: "top-left",
    config: {
      date: "2023-01-01",
      event: "Countdown to new year"
    }
  }
]
````
## Configuration options

The following properties can be configured:

|Option|Default|Description|
|---|---|---|
|`date`|`"3000-01-01"`|The date to countdown to.|
|`event`|`Countdown`|The title of the countdown timer.|
