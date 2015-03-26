# Require our module
makeGradientModule = require("makeGradient")

# Let's create two sample layers
radialLayer = new Layer width: Framer.Device.screen.width, height: Framer.Device.screen.height / 2
linearLayer = new Layer width: Framer.Device.screen.width, height: Framer.Device.screen.height / 2, y: Framer.Device.screen.height / 2

# Let's make the first one radial.
makeGradientModule.radial( radialLayer, ["yellow", "red", "blue"], "circle" )

# And let's make the second one linear.
makeGradientModule.linear( linearLayer, ["red", "blue", "yellow"], "90deg" )