# ADDING BLENDING MODE
Since 20 February 2014 blending modes are in Candidate Recommendation in W3C : [W3C Compositing and Blending Level 1](http://www.w3.org/TR/compositing-1/). Ouf, it's a required feature for my project. It's already available in modern browser. I've updated my source code for trying to play with "multiply" in Dart :

```
ctx2d.globalCompositeOperation = "multiply";
```

## Better explanation of finding control points
I my last post, there was a picture of my way to calculate control points. I made it quickly. This time I'm adding a cleaver drawing.

![Equation for cubic control points 2](../project_images/cubicControlPoints2.jpg?raw=true "Cubic control points 2")

## New parametric equation 
OK, now Bezier curves are beginning to look great. I've got "multiply" blending mode, so I've updated the parametric equation to sketch something new...

```
double xFormula(double t) {
    return cos(t) + aParam*cos(bParam*t);
  }

double yFormula(double t) {
    return sin(t) + aParam*sin(bParam*t);
  }
```

This is what I've got today :

![Curve 02](../project_images/curve02.jpg?raw=true "Curve 02")

## Project code files
I began to build the project files, it's here : [project_code/beziercurvesbigcircus](https://github.com/phbroc/devart-template/tree/master/project_code/beziercurvesbigcircus).

That's all for my third post. :->
