require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"makeGradient":[function(require,module,exports){
var makeStr;

makeStr = function(obj) {
  var gradString, i, j, ref;
  gradString = obj.type + "-gradient(";
  if (obj.type === "radial" && obj.shape) {
    gradString += obj.shape + ", ";
  }
  if (obj.type === "linear" && obj.angle) {
    gradString += obj.angle + ", ";
  }
  for (i = j = 0, ref = obj.colors.length - 1; j <= ref; i = j += 1) {
    if (i === obj.colors.length - 1) {
      gradString += obj.colors[i] + "";
    } else {
      gradString += obj.colors[i] + ", ";
    }
  }
  gradString += ")";
  return gradString;
};

exports.radial = function(layer, colorArr, shape) {
  var obj;
  obj = {
    shape: shape,
    colors: colorArr,
    type: "radial"
  };
  return layer.style["background-image"] = makeStr(obj);
};

exports.linear = function(layer, colorArr, angle) {
  var obj;
  obj = {
    angle: angle,
    colors: colorArr,
    type: "linear"
  };
  return layer.style["background-image"] = makeStr(obj);
};



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvd2ltbWVyc3RlZHQvZGV2LzAxLXJlcG9zLzE1LWZyYW1lci5tYWtlR3JhZGllbnQvZnJhbWVyLm1ha2VHcmFkaWVudC9mcmFtZXIubWFrZUdyYWRpZW50L2V4YW1wbGUuZnJhbWVyL21vZHVsZXMvbWFrZUdyYWRpZW50LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsT0FBQTs7QUFBQSxPQUFBLEdBQVUsU0FBQyxHQUFELEdBQUE7QUFDTixNQUFBLHFCQUFBO0FBQUEsRUFBQSxVQUFBLEdBQWEsR0FBRyxDQUFDLElBQUosR0FBVyxZQUF4QixDQUFBO0FBRUEsRUFBQSxJQUFHLEdBQUcsQ0FBQyxJQUFKLEtBQVksUUFBWixJQUF3QixHQUFHLENBQUMsS0FBL0I7QUFDSSxJQUFBLFVBQUEsSUFBYyxHQUFHLENBQUMsS0FBSixHQUFZLElBQTFCLENBREo7R0FGQTtBQUtBLEVBQUEsSUFBRyxHQUFHLENBQUMsSUFBSixLQUFZLFFBQVosSUFBd0IsR0FBRyxDQUFDLEtBQS9CO0FBQ0ksSUFBQSxVQUFBLElBQWMsR0FBRyxDQUFDLEtBQUosR0FBWSxJQUExQixDQURKO0dBTEE7QUFRQSxPQUFTLDREQUFULEdBQUE7QUFDSSxJQUFBLElBQUcsQ0FBQSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBWCxHQUFrQixDQUExQjtBQUNJLE1BQUEsVUFBQSxJQUFjLEdBQUcsQ0FBQyxNQUFPLENBQUEsQ0FBQSxDQUFYLEdBQWdCLEVBQTlCLENBREo7S0FBQSxNQUFBO0FBR0ksTUFBQSxVQUFBLElBQWMsR0FBRyxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBQVgsR0FBZ0IsSUFBOUIsQ0FISjtLQURKO0FBQUEsR0FSQTtBQUFBLEVBY0EsVUFBQSxJQUFjLEdBZGQsQ0FBQTtBQWdCQSxTQUFPLFVBQVAsQ0FqQk07QUFBQSxDQUFWLENBQUE7O0FBQUEsT0FvQk8sQ0FBQyxNQUFSLEdBQWlCLFNBQUUsS0FBRixFQUFTLFFBQVQsRUFBbUIsS0FBbkIsR0FBQTtBQUNiLE1BQUEsR0FBQTtBQUFBLEVBQUEsR0FBQSxHQUFNO0FBQUEsSUFDRixLQUFBLEVBQU8sS0FETDtBQUFBLElBRUYsTUFBQSxFQUFRLFFBRk47QUFBQSxJQUdGLElBQUEsRUFBTSxRQUhKO0dBQU4sQ0FBQTtTQU1BLEtBQUssQ0FBQyxLQUFNLENBQUEsa0JBQUEsQ0FBWixHQUFrQyxPQUFBLENBQVEsR0FBUixFQVByQjtBQUFBLENBcEJqQixDQUFBOztBQUFBLE9BNkJPLENBQUMsTUFBUixHQUFpQixTQUFFLEtBQUYsRUFBUyxRQUFULEVBQW1CLEtBQW5CLEdBQUE7QUFDYixNQUFBLEdBQUE7QUFBQSxFQUFBLEdBQUEsR0FBTTtBQUFBLElBQ0YsS0FBQSxFQUFPLEtBREw7QUFBQSxJQUVGLE1BQUEsRUFBUSxRQUZOO0FBQUEsSUFHRixJQUFBLEVBQU0sUUFISjtHQUFOLENBQUE7U0FNQSxLQUFLLENBQUMsS0FBTSxDQUFBLGtCQUFBLENBQVosR0FBa0MsT0FBQSxDQUFRLEdBQVIsRUFQckI7QUFBQSxDQTdCakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtYWtlU3RyID0gKG9iaikgLT5cbiAgICBncmFkU3RyaW5nID0gb2JqLnR5cGUgKyBcIi1ncmFkaWVudChcIlxuXG4gICAgaWYgb2JqLnR5cGUgPT0gXCJyYWRpYWxcIiAmJiBvYmouc2hhcGVcbiAgICAgICAgZ3JhZFN0cmluZyArPSBvYmouc2hhcGUgKyBcIiwgXCIgIFxuICAgICAgICBcbiAgICBpZiBvYmoudHlwZSA9PSBcImxpbmVhclwiICYmIG9iai5hbmdsZVxuICAgICAgICBncmFkU3RyaW5nICs9IG9iai5hbmdsZSArIFwiLCBcIlxuXG4gICAgZm9yIGkgaW4gWzAuLm9iai5jb2xvcnMubGVuZ3RoLTFdIGJ5IDFcbiAgICAgICAgaWYgaSA9PSBvYmouY29sb3JzLmxlbmd0aC0xXG4gICAgICAgICAgICBncmFkU3RyaW5nICs9IG9iai5jb2xvcnNbaV0gKyBcIlwiXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGdyYWRTdHJpbmcgKz0gb2JqLmNvbG9yc1tpXSArIFwiLCBcIlxuXG4gICAgZ3JhZFN0cmluZyArPSBcIilcIlxuICAgIFxuICAgIHJldHVybiBncmFkU3RyaW5nXG5cblxuZXhwb3J0cy5yYWRpYWwgPSAoIGxheWVyLCBjb2xvckFyciwgc2hhcGUgKSAtPlxuICAgIG9iaiA9IHtcbiAgICAgICAgc2hhcGU6IHNoYXBlLFxuICAgICAgICBjb2xvcnM6IGNvbG9yQXJyLFxuICAgICAgICB0eXBlOiBcInJhZGlhbFwiXG4gICAgfVxuXG4gICAgbGF5ZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gbWFrZVN0cihvYmopXG5cbmV4cG9ydHMubGluZWFyID0gKCBsYXllciwgY29sb3JBcnIsIGFuZ2xlICkgLT5cbiAgICBvYmogPSB7XG4gICAgICAgIGFuZ2xlOiBhbmdsZSxcbiAgICAgICAgY29sb3JzOiBjb2xvckFycixcbiAgICAgICAgdHlwZTogXCJsaW5lYXJcIlxuICAgIH1cblxuICAgIGxheWVyLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IG1ha2VTdHIob2JqKSJdfQ==
