# framer.makeGradient
This is a module for framer that makes it easy to create static linear/radial gradients. Want them to animate? I welcome pull requests.

![fun gradient because crazy](http://media.giphy.com/media/aIl2nCX9YtTI4/giphy.gif)

## Usage
First, require the module.
````
# Require our module
makeGradientModule = require("makeGradient")
````

Then decide if you want to do a radial or linear gradient
````
makeGradientModule.radial( radialLayer, ["yellow", "red", "blue"], "circle" )
# OR
makeGradientModule.linear( linearLayer, ["red", "blue", "yellow"], "90deg" )
````

### radial
The radial function takes three arguments. The target layer, a color array and a shape argument. The shape argument is optional and behaves like css.

````
makeGradientModule.radial( layerObj, colorArr, shape(optional) )
````
### linear
The linear function takes three arguments. The target layer, a color array and the angle. The angle is optional and behaves like ordinary css.

````
makeGradientModule.linear( layerObj, colorArr, angle(optional) )
````

## Generous License, because this is like 15 lines of code.
The MIT License (MIT)
Copyright (c) 2015 Joakim Wimmerstedt
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
