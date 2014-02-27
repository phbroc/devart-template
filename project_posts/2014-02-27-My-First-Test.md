# GETTING IN TOUCH WITH DART...
I've chosen to use [DART](https://www.dartlang.org) language for my project. This is my Google tool, at first. In DART API, I will focus on [CanvasRenderingContext2D](https://api.dartlang.org/apidocs/channels/stable/#dart-dom-html.CanvasRenderingContext2D) because I want to draw on Canvas html5. 

## Finding a new formula
I want to find a formula for smoothing [Parametric equation](http://en.wikipedia.org/wiki/Parametric_equation) with [Bezier curves](http://en.wikipedia.org/wiki/Bézier_curve). My drawing as to be calculated from point to point, and I want to stroke a smooth curve between points. I found a solution, let's have a look below. In this drawing I want to calculate a cubic curve from A to B. The middle point is m. The two equations are for control point A, xcpa means x coordinate of Control point A, ycpa means y coordinate of Control point A : 

![Equation for cubic control points](../project_images/cubicControlPoints.jpg?raw=true "Cubic control points")

## Testing this in my first DART project
I'm happy to get first running results with DART. My formula for bezier drawing seems to work. Here are two pictures of what I'm getting now :

![Curve 01](../project_images/curve01.jpg?raw=true "Curve 01")

![Curve 01 parameters](../project_images/curve01param.jpg?raw=true "Curve 01 parameters")

You can find the code here [project_code/myfirsttest](https://github.com/phbroc/devart-template/tree/master/project_code/myfirsttest).

That's all for my second post. :->
