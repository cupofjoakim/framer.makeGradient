# Require our module
makeGradientModule = require("makeGradient")

# Let's create two sample layers
radialLayer = new Layer width: Framer.Device.screen.width, height: Framer.Device.screen.height / 2
linearLayer = new Layer width: Framer.Device.screen.width, height: Framer.Device.screen.height / 2, y: Framer.Device.screen.height / 2

# Let's make the first one radial.
# By calling the module.radial() function and passing the target layer and a color array we're all set. You can also pass a shape argument. It behaves like css.
makeGradientModule.radial( radialLayer, ["yellow", "red", "blue"], "circle" )

# Let's make the second one linear.
# By calling the module.linear() function and passing the target layer and a color array we're all set. You can also pass an angle argument. It behaves like css.
makeGradientModule.linear( linearLayer, ["red", "blue", "yellow"], "90deg" )