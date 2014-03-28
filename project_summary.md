# BEZIER CURVES BIG CIRCUS

## Authors
- Philippe Brouard, https://github.com/phbroc

## Description
[Parametric equation](http://en.wikipedia.org/wiki/Parametric_equation) is a branch of mathematics. With these equations there is immediately something to look at, that's what I like, and then mathematics get real ! It's possible to reveal good surprises when drawing the path from one point to another. To do so, I will use [Bezier curves](http://en.wikipedia.org/wiki/Bézier_curve). 

At the beginning, BIG CIRCUS came in the title for alliteration purpose. But finally these word are true components of my project. BIG for a big amount of curves on a big screen. That's where I deal with computer performances. CIRCUS for the sideshow : it's a story about a ring, the ring in the circus tent. Circus is Art. Sometimes there is Art when you see a simple line, and this line becomes amazing under the fingers of the digital acrobats.

I want to bring fun in this installation with many buttons and triggers. Handling them will update the curve live!

![Installation](project_images/installation.jpg?raw=true "Installation")

No sound : I didn't wanted to add sound. My project is a live visual experience and I wish it could be a good fellow-creature with live musicians and video projection.

## Link to Prototype
This prototype works online. With a good CPU processor on your computer, you should draw many lines before FPS shut down.

[Bezier curves big circus prototype](http://www.phbroc.fr/devart/web/beziercurvesbigcircus.html "Bezier curves big circus prototype")

## Example Code
In this project, the parametric equation for drawing curved lines from points to points is calculated with three parameters aParam, bParam, cParam. When changing this parameters, the line path is moving. beginT is the beginning value of t parameter (usually start from 0) :
```
// x coordinate in plan
double xFormula(double t) {
    var retValue = cos(beginT.value +t) + aParam.value*cos(bParam.value*(beginT.value +t));
    return retValue;
}
// y coordinate in plan
double yFormula(double t) {
    var retValue = sin(beginT.value +cParam.value *t) + aParam.value*sin(bParam.value*(beginT.value +t));
    return retValue;
}
```

## Images & Videos
One of my latest live capture :

https://www.youtube.com/watch?v=e3ot0oZ4T4c