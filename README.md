# Sigyan

Sigyan is a small utility to change levels of [Bunyan](https://github.com/trentm/node-bunyan)
logger instances using SIGUSR1/SIGUSR2 POSIX signals. (See `sigaction(2)` for
more information on POSIX signals).

# Usage

1. Include in your node program and indicate which loggers to modify when a
   signal is received:

        var sigyan = require('sigyan');
        sigyan.signal([LOG, backend.log]);

2. Send SIGUSR1 signal to your running node program to decrease log level:

        kill -s SIGUSR1 <PID>

3. Send SIGUSR2 signal to your running node program to increase log level:

        kill -s SIGUSR2 <PID>


# LICENSE

The MIT License (MIT) Copyright (c) 2012 Pedro Palazón Candel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
