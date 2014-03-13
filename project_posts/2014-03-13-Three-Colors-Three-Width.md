# THREE COLORS THREE WIDTH
In the past days, I've been working on adding more interaction on my project. 

## Easing effects for animation
Everything in drawn on html5 canvas is calculated with numbers (doubles). I've been searching for a native support of [easing functions](http://www.timotheegroleau.com/Flash/experiments/easing_function_generator.htm) in Dart, but I didn't found really what I needed. Never mind, I built a new class for this in my project. This class will handle [double numbers](https://api.dartlang.org/apidocs/channels/stable/#dart:core.double) for animation. For instance when the method update() will be called, the number will change value slightly. Evolution of the number is calculated with new equations which look like ease functions :

![ease functions](../project_images/easeFunctions.jpg?raw=true "Ease functions")

The yellow one is my favorite. For number a between 0 and 1 :
```
double easeInOut(double a) {
    return (atan(6*a -3) +1.25) /2.5;
}
```

My new class is something like this : 

```
class AnimateDouble {
  double value;
  double valueTarget;
  double valueGap;
  double mini;
  double maxi;
  double step;
  String mode = "";
  static const EASE_IN_OUT = "easeInOut";
  Timer timer;
  int t;
  int tFinal;
  
  AnimateDouble(this.value, this.mini, this.maxi);
  
  // called each time to animate the value. Every frames.
  void update() {
    switch (mode) {
      case EASE_IN_OUT : value = valueTarget - (valueGap *(1-easeInOut(t/tFinal)));
                              t++;
                              if (t > tFinal) {
                                mode = "";
                                value = valueTarget;
                              }
                              break;
    }
  }

  // called for launching the animation of the value, m is mode, v is the value to reach, f is the number of update() calls to reach the target value.
  void tween(String m, double v, int f) {
    mode = m;
    valueTarget = v;
    valueGap = valueTarget - value;
    t = 0;
    tFinal = f;
  }
  
  
  // easing effect : non linear animation, begin slowly and end slowly.
  double easeInOut(double a) {
    return (atan(6*a -3) +1.25) /2.5;
  }
  
}
```

## New colors and new line width controls
The curve is still drawn with this parametric equations :
```
  double xFormula(double t) {
    return cos(t) + aParam.value*cos(bParam.value*t);
  }

  double yFormula(double t) {
    return sin(t) + aParam.value*sin(bParam.value*t);
  }
```

There are now three markers along the path :
1. beginning color & beginning line width
2. middle color & middle line width
3. ending color & ending line width

Between this markers, colors and line width can be calculated as interpolation with the nearest values.

## A second live action with the ring
Work is in progress. I can reach some surprising effects now ! It becomes harder to really understand what key press will trigger on the screen. I made this video today :

https://www.youtube.com/watch?v=Wm8W3jU6sy4


## Hacking keyboard has began...
I began to teardown a keyboard and I extracted the microcircuit. There is next a piece of fun, with matching contacts to their behaviors with keys... I'm slightly afraid. 

![Keyboard circuit on the air](../project_images/keyboardHack01.jpg?raw=true "Keyboard circuit on the air")

That's all for my post number 6. :->