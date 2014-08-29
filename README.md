## Event Loop, Starvation, Timers & setImmediate API Shim Demo

This is the source code of the [Event Loop, Starvation, Timers & setImmediate API Shim Demo](http://itkoren.github.com/event-loop-set-timers/) and [setTimeout Frequency Demo](http://itkoren.github.com/event-loop-set-timers/timers).

The goal of those demos is to demonstrate the importance of using timers for yielding execution of long running operations (and not starving the event loop) and the efficiency of the setImmediate API (demonstrated here by usage of the setImmediate.js cross browser shim). For more info on the shim see the [setImmediate.js project on GitHub](https://github.com/NobleJS/setImmediate).

The demos were originally created by [Jason Weber](http://www.jasonweber.com) as part of the [IE Test Drive demos](http://ie.microsoft.com/testdrive/Performance/setImmediateSorting/Default.html) and by [Mike Belshe](https://www.belshe.com) as part of a demo he made for browser timers.
