## Javascript Internals - Execution Stack, Event Loop, Starvation, Timers & setImmediate API Shim Demo

A [session](http://itkoren.github.com/event-loop-set-timers/) I've created in order to demonstrate some of javascript internals, the importance of using timers for yielding execution of long running operations (and not starving the event loop) and the efficiency of the setImmediate API (demonstrated here by usage of the setImmediate.js cross browser shim).

You can also find here, the source code of the [Event Loop, Starvation, Timers & setImmediate API Shim Demo](http://itkoren.github.com/event-loop-set-timers/immediate.html) and [setTimeout Frequency Demo](http://itkoren.github.com/event-loop-set-timers/timers.html).

For more info on the setImmediate API shim see the [setImmediate.js project on GitHub](https://github.com/NobleJS/setImmediate).

The demos were originally created by [Jason Weber](http://www.jasonweber.com) as part of the [IE Test Drive demos](http://ie.microsoft.com/testdrive/Performance/setImmediateSorting/Default.html), by [JP Castro](http://blog.jphpsf.com/) as part of the [setImmediate.js cross browser shim demo](http://jphpsf.github.io/setImmediate-shim-demo/), and by [Mike Belshe](https://www.belshe.com) as part of a demo he made for browser timers.