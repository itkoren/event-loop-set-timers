var Histogram = function() {
    var samples = {};
    var count = 0;
    var total = 0;
    var start = new Date();
    var recent = 0;

    this.AddSample = function(sample) {
        if (samples[sample] == undefined) {
            samples[sample] = 1;
        } else {
            samples[sample]++;
        }
        count++;
        total += sample;
        recent = sample
    }

    this.Clear = function() {
        samples = {};
        count = 0;
        total = 0;
        start = new Date();
        recent = 0;
    }

    this.Draw = function(div) {
        var output = document.getElementById(div);
        var html = "";
        var maxWidth = 400;

        var now = new Date();
        var average = total / count;
        var samples_per_sec = count / (now - start) * 1000;
        var overhead = (1000 - (samples_per_sec * recent)) / 1000 * 100;

        html += "<br><span class='avg'>Average: " + average.toFixed(2) + "</span>";
        html += "<br>Samples: " + count;
        html += "<br>Samples/sec: " + samples_per_sec.toFixed(2) ;
        //html += "<br><span class='overhead'>Browser Overhead: " + overhead.toFixed(2)  + "%</span>";


        html += "<hr>Histogram:";

        var buckets = [];
        for (i in samples) {
            buckets.push(i);
        }
        buckets = buckets.sort(function(a, b){return a - b;});

        for (i in buckets) {
            var bucket = buckets[i];
            var value = samples[bucket];
            html += "<div class=hbar style='width: " + (value / count * maxWidth) + "px'>" + bucket + "ms&nbsp;(" + value + "&nbsp;samples)</div>";
        }
        output.innerHTML = html;
    }
}

var last = new Date();    // The last time we sampled the timer
var total_value = 0;      // The sum of the intervals measured
var total_count = 0;      // The count of the intervals measured
var last_interval = 1;
var data = new Histogram();

function fire() {
    var current = new Date();
    var ms = current - last;

    data.AddSample(ms);
    data.Draw("histogram");

    // Get the new interval from the input.
    var input = document.getElementById('input');

    // If the interval has changed, reset our averages.
    if (input.value != last_interval) {
        total_value = 0;
        total_count = 0;
        data.Clear();
    }
    last_interval = input.value;

    last = new Date();
    setTimeout(fire, last_interval);

}

// Test Infrastructure
function InitializePage() {
    setTimeout(fire, 1);
}