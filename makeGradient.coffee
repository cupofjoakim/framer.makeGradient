makeStr = (obj) ->
    gradString = obj.type + "-gradient("

    if obj.type == "radial" && obj.shape
        gradString += obj.shape + ", "  
        
    if obj.type == "linear" && obj.angle
        gradString += obj.angle + ", "

    for i in [0..obj.colors.length-1] by 1
        if i == obj.colors.length-1
            gradString += obj.colors[i] + ""
        else
            gradString += obj.colors[i] + ", "

    gradString += ")"
    
    return gradString


exports.radial = ( layer, colorArr, shape ) ->
    obj = {
        shape: shape,
        colors: colorArr,
        type: "radial"
    }

    layer.style["background-image"] = makeStr(obj)

exports.linear = ( layer, colorArr, angle ) ->
    obj = {
        angle: angle,
        colors: colorArr,
        type: "linear"
    }

    layer.style["background-image"] = makeStr(obj)