import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'dart:core';
import 'package:csslib/parser.dart';

const MAX_W = 890;
const MAX_H = 500;
const CENTER_X = 445;
const CENTER_Y = 250;
const SCALE_X = 150;
const SCALE_Y = 150;


BezierCanvas bezierCanvas;
KeyboardController keyboardController;
DivElement colorpicker;
ImageElement hslpicker;
CanvasElement hsllum;
ImageElement lumpicker;
Timer colorpickerTimer;

Element notes = querySelector("#fps");
Element notes2 = querySelector("#keyP");
num fpsAverage = 60;

void main() {
  colorpicker = querySelector("#colorpicker") as DivElement;
  hslpicker = querySelector("#hslpicker") as ImageElement;
  hsllum = querySelector("#hsllum") as CanvasElement;
  lumpicker = querySelector("#lumpicker") as ImageElement;
  
  CanvasElement canvas = querySelector("#canvas");
  bezierCanvas = new BezierCanvas(canvas);
  
  keyboardController = new KeyboardController();
  
  bindControls();
  
  scheduleMicrotask(bezierCanvas.start);
}




/// Display the animation's FPS in a div.
void showFps(num fps) {
  if (fpsAverage == null) fpsAverage = fps;
  fpsAverage = fps * 0.05 + fpsAverage * 0.95;
  notes.text = "${fpsAverage.round()} fps";
}

void bindControls() {
  
  window.on['lw1Up'].listen((e) {
    if (e.detail) bezierCanvas.lw1.play(AnimateDouble.LINEAR_UP);
    else bezierCanvas.lw1.stop();
    });
  
  window.on['lw1Down'].listen((e) {
      if (e.detail) bezierCanvas.lw1.play(AnimateDouble.LINEAR_DOWN);
      else bezierCanvas.lw1.stop();
      });
  
  window.on['lw2Up'].listen((e) {
    if (e.detail) bezierCanvas.lw2.play(AnimateDouble.LINEAR_UP);
    else bezierCanvas.lw2.stop();
    });
  
  window.on['lw2Down'].listen((e) {
      if (e.detail) bezierCanvas.lw2.play(AnimateDouble.LINEAR_DOWN);
      else bezierCanvas.lw2.stop();
      });
  
  window.on['lw3Up'].listen((e) {
    if (e.detail) bezierCanvas.lw3.play(AnimateDouble.LINEAR_UP);
    else bezierCanvas.lw3.stop();
    });
  
  window.on['lw3Down'].listen((e) {
      if (e.detail) bezierCanvas.lw3.play(AnimateDouble.LINEAR_DOWN);
      else bezierCanvas.lw3.stop();
      });

  window.on['maxTUp'].listen((e) {
      if ((e.detail) && (fpsAverage > 50)) bezierCanvas.maxT.play(AnimateDouble.LINEAR_UP);
      else bezierCanvas.maxT.stop();
      });
    
  window.on['maxTDown'].listen((e) {
      if (e.detail) bezierCanvas.maxT.play(AnimateDouble.LINEAR_DOWN);
      else bezierCanvas.maxT.stop();
      });
  
  window.on['stpParamUp'].listen((e) {
      if (e.detail) bezierCanvas.stp.play(AnimateDouble.EXP_UP);
      else bezierCanvas.stp.stop();
      });
    
  window.on['stpParamDown'].listen((e) {
      if ((e.detail) && (fpsAverage > 50)) bezierCanvas.stp.play(AnimateDouble.EXP_DOWN);
      else bezierCanvas.stp.stop();
      });
  
  window.on['aParamUp'].listen((e) {
      if (e.detail) bezierCanvas.aParam.play(AnimateDouble.EXP_UP);
      else bezierCanvas.aParam.stop();
      });
    
  window.on['aParamDown'].listen((e) {
      if (e.detail) bezierCanvas.aParam.play(AnimateDouble.EXP_DOWN);
      else bezierCanvas.aParam.stop();
      });
  
  window.on['bParamUp'].listen((e) {
      if (e.detail) bezierCanvas.bParam.play(AnimateDouble.EXP_UP);
      else bezierCanvas.bParam.stop();
      });
    
  window.on['bParamDown'].listen((e) {
      if (e.detail) bezierCanvas.bParam.play(AnimateDouble.EXP_DOWN);
      else bezierCanvas.bParam.stop();
      });
  
  window.on["toggleColorControlled"].listen((e) {
      if (e.detail) {
        if (bezierCanvas.colorControlled == "c1") {
          bezierCanvas.colorControlled = "c2";
          updateColorPicker(bezierCanvas.c2.h, bezierCanvas.c2.s, bezierCanvas.c2.l);
        }
        else if (bezierCanvas.colorControlled == "c2") {
          bezierCanvas.colorControlled = "c3";
          updateColorPicker(bezierCanvas.c3.h, bezierCanvas.c3.s, bezierCanvas.c3.l);
        }
        else if (bezierCanvas.colorControlled == "c3") {
          bezierCanvas.colorControlled = "c1";
          updateColorPicker(bezierCanvas.c1.h, bezierCanvas.c1.s, bezierCanvas.c1.l);
        }
        displayColorPicker(true);
      } else {
        displayColorPicker(false);
      }
    });
    
  
  window.on['colorHueUp'].listen((e) {
      if (e.detail) {
        switch (bezierCanvas.colorControlled)
              {
                case "c1": bezierCanvas.c1.mode = ColorController.HUE_UP; break;
                case "c2": bezierCanvas.c2.mode = ColorController.HUE_UP; break;
                case "c3": bezierCanvas.c3.mode = ColorController.HUE_UP; break;
              }
        displayColorPicker(true);
      }
      else {
        bezierCanvas.c1.mode = "";
        bezierCanvas.c2.mode = "";
        bezierCanvas.c3.mode = "";
        displayColorPicker(false);
      }
      });
    
  window.on['colorHueDown'].listen((e) {
      if (e.detail) {
        switch (bezierCanvas.colorControlled) {
          case "c1" : bezierCanvas.c1.mode = ColorController.HUE_DOWN; break;
          case "c2" : bezierCanvas.c2.mode = ColorController.HUE_DOWN; break;
          case "c3" : bezierCanvas.c3.mode = ColorController.HUE_DOWN; break;
        }
        displayColorPicker(true);
      }
      else {
        bezierCanvas.c1.mode = "";
        bezierCanvas.c2.mode = "";
        bezierCanvas.c3.mode = "";
        displayColorPicker(false);
      }
      });
  
  window.on['colorSatUp'].listen((e) {
        if (e.detail) {
          switch (bezierCanvas.colorControlled)
                {
                  case "c1": bezierCanvas.c1.mode = ColorController.SATURATION_UP; break;
                  case "c2": bezierCanvas.c2.mode = ColorController.SATURATION_UP; break;
                  case "c3": bezierCanvas.c3.mode = ColorController.SATURATION_UP; break;
                }
          displayColorPicker(true);
        }
        else {
          bezierCanvas.c1.mode = "";
          bezierCanvas.c2.mode = "";
          bezierCanvas.c3.mode = "";
          displayColorPicker(false);
        }
        });
      
  window.on['colorSatDown'].listen((e) {
      if (e.detail) {
        switch (bezierCanvas.colorControlled)
              {
                case "c1": bezierCanvas.c1.mode = ColorController.SATURATION_DOWN; break;
                case "c2": bezierCanvas.c2.mode = ColorController.SATURATION_DOWN; break;
                case "c3": bezierCanvas.c3.mode = ColorController.SATURATION_DOWN; break;
              }
        displayColorPicker(true);
      }
      else {
        bezierCanvas.c1.mode = "";
        bezierCanvas.c2.mode = "";
        bezierCanvas.c3.mode = "";
        displayColorPicker(false);
      }
      });
  
  window.on['colorLightUp'].listen((e) {
          if (e.detail) {
            switch (bezierCanvas.colorControlled)
                  {
                    case "c1": bezierCanvas.c1.mode = ColorController.LIGHTNESS_UP; break;
                    case "c2": bezierCanvas.c2.mode = ColorController.LIGHTNESS_UP; break;
                    case "c3": bezierCanvas.c3.mode = ColorController.LIGHTNESS_UP; break;
                  }
            displayColorPicker(true);
          }
          else {
            bezierCanvas.c1.mode = "";
            bezierCanvas.c2.mode = "";
            bezierCanvas.c3.mode = "";
            displayColorPicker(false);
          }
          });
        
  window.on['colorLightDown'].listen((e) {
      if (e.detail) {
        switch (bezierCanvas.colorControlled)
              {
                case "c1": bezierCanvas.c1.mode = ColorController.LIGHTNESS_DOWN; break;
                case "c2": bezierCanvas.c2.mode = ColorController.LIGHTNESS_DOWN; break;
                case "c3": bezierCanvas.c3.mode = ColorController.LIGHTNESS_DOWN; break;
              }
        displayColorPicker(true);
      }
      else {
        bezierCanvas.c1.mode = "";
        bezierCanvas.c2.mode = "";
        bezierCanvas.c3.mode = "";
        displayColorPicker(false);
      }
      });
  
  window.on['obliqCurves'].listen((e) {
      if (e.detail) {
        bezierCanvas.bzrParam.tween(AnimateDouble.EASE_IN_OUT, 0.0, 30);
      }
  });
  
  window.on['bezierCurves'].listen((e) {
        if (e.detail) {
          bezierCanvas.bzrParam.tween(AnimateDouble.EASE_IN_OUT, 0.65, 30);
        }
  });
  
  window.on['colorAlternate'].listen((e) {
      if (e.detail) {
        bezierCanvas.colorDistribution = "alternate";
      }
  });
  
  window.on['colorInterpol'].listen((e) {
        if (e.detail) {
          bezierCanvas.colorDistribution = "interpol";
        }
  });
  
}

void displayColorPicker(bool d) {
    if (d) colorpicker.style.display = "block";
    else {
      if ((colorpickerTimer != null) && (colorpickerTimer.isActive)) colorpickerTimer.cancel();
      colorpickerTimer = new Timer(const Duration(seconds: 2), () => colorpicker.style.display = "none");
    }
}

void updateColorPicker(int h, int s, int l) {
    var hsllumctx = hsllum.context2D;
    hslpicker.style.left = (h/2).round().toString() + "px";
    hslpicker.style.top = (100-s).round().toString() + "px";
    
    hsllumctx.clearRect(0, 0, 30, 100);
    var gradient = hsllumctx.createLinearGradient(0, 0, 0, 150);
    var color = new Color.createHsla(h, s, 50, 1);
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(0.5, color.rgba.cssExpression);
    gradient.addColorStop(1, "#000");
    hsllumctx.fillStyle = gradient;
    hsllumctx.fillRect(0, 0, 300, 150);
    
    lumpicker.style.left = "205px";
    lumpicker.style.top = (100-l).round().toString() + "px";
}

class BezierCanvas
{
  CanvasElement canvas;
  CanvasRenderingContext2D ctx2d;
  
  int nbCurves;

  AnimateDouble aParam;
  AnimateDouble bParam;
  AnimateDouble stp;
  AnimateDouble maxT;
  AnimateDouble bzrParam;
  
  ColorController c1;
  AnimateDouble c1r;
  AnimateDouble c1g;
  AnimateDouble c1b;
  double c1a = 1.0;
  
  ColorController c2;
  AnimateDouble c2r;
  AnimateDouble c2g;
  AnimateDouble c2b;
  double c2a = 1.0;
  
  ColorController c3;
  AnimateDouble c3r;
  AnimateDouble c3g;
  AnimateDouble c3b;
  double c3a = 1.0;
  
  String colorControlled;
  String colorDistribution;
  
  AnimateDouble lw1;
  AnimateDouble lw2;
  AnimateDouble lw3;
  
  num renderTime;
  
  BezierCanvas(this.canvas) {
    ctx2d = canvas.context2D;
    
    aParam = new AnimateDouble(0.0, 0.0, 10.0);
    bParam = new AnimateDouble(1.0, 0.0, 10.0);
    
    lw1 = new AnimateDouble(20.0, 1.0, 400.0);
    lw2 = new AnimateDouble(20.0, 1.0, 400.0);
    lw3 = new AnimateDouble(20.0, 1.0, 400.0);
    
    stp = new AnimateDouble(1.0, 0.2, 20.0);
    maxT = new AnimateDouble(70.0, 0.0, 1000.0);
    bzrParam = new AnimateDouble(0.65, 0.0, 0.65);
    
    c1r = new AnimateDouble(23.0, 0.0, 255.0);
    c1g = new AnimateDouble(110.0, 0.0, 255.0);
    c1b = new AnimateDouble(239.0, 0.0, 255.0);
    c1 = new ColorController(c1r.valueInt, c1g.valueInt, c1b.valueInt);
    
    c2r = new AnimateDouble(211.0, 0.0, 255.0);
    c2g = new AnimateDouble(62.0, 0.0, 255.0);
    c2b = new AnimateDouble(42.0, 0.0, 255.0);
    c2 = new ColorController(c2r.valueInt, c2g.valueInt, c2b.valueInt);
    
    c3r = new AnimateDouble(255.0, 0.0, 255.0);
    c3g = new AnimateDouble(187.0, 0.0, 255.0);
    c3b = new AnimateDouble(3.0, 0.0, 255.0);
    c3 = new ColorController(c3r.valueInt, c3g.valueInt, c3b.valueInt);
    
    colorControlled = "c1";
    colorDistribution = "interpol";
  }
  
  
  void start() {
    requestRedraw();
  }
  

  
  void draw(num _) {
    double xa, ya, xm, ym, xb, yb, xcpa, ycpa, xcpb, ycpb, t, interpolR, interpolG, interpolB, interpolA, interpolPos;
    t = 0.0;
    
    
    num time = new DateTime.now().millisecondsSinceEpoch;
    if (renderTime != null) showFps(1000 / (time - renderTime));
    renderTime = time;
    
    
 
    updateVariables();
    
    
    ctx2d.clearRect(0, 0, MAX_W, MAX_H);
    ctx2d.setFillColorRgb(0, 0, 0, 1);
    ctx2d.rect(0, 0, MAX_W, MAX_H);
    ctx2d.fill();
    ctx2d.globalCompositeOperation = "screen";
    ctx2d.lineWidth = lw1.valueInt;
    ctx2d.setStrokeColorHsl(0, 0, 50, 1);
    nbCurves = 0;
    
    while (t < maxT.value) {
      xa = xFormula(t);
      ya = yFormula(t);
      t += stp.value / 2;
      xm = xFormula(t);
      ym = yFormula(t);
      t += stp.value / 2;
      xb = xFormula(t);
      yb = yFormula(t);
      
      xcpa = xa + (((xa+xb)/2 + 2.2*(xm-(xa+xb)/2)) - xa)*bzrParam.value;
      ycpa = ya + (((ya+yb)/2 + 2.2*(ym-(ya+yb)/2)) - ya)*bzrParam.value;
      
      xcpb = xb - (xb - ((xa+xb)/2 + 2.2*(xm-(xa+xb)/2)))*bzrParam.value;
      ycpb = yb - (yb - ((ya+yb)/2 + 2.2*(ym-(ya+yb)/2)))*bzrParam.value;
      
      if (t < maxT.value / 2) {
        interpolPos = 2 *t /maxT.value;
        ctx2d.lineWidth = lw1.value + (lw2.value - lw1.value) *interpolPos;
      } else {
        interpolPos = (2 *t /maxT.value) -1;
        ctx2d.lineWidth = lw2.value + (lw3.value - lw2.value) *interpolPos;
      }
      
      if (colorDistribution == "alternate") {
        if (nbCurves % 3 == 0) ctx2d.setStrokeColorRgb(c1r.valueInt, c1g.valueInt, c1b.valueInt, c1a);
        else if (nbCurves % 3 == 1) ctx2d.setStrokeColorRgb(c2r.valueInt, c2g.valueInt, c2b.valueInt, c2a);
        else ctx2d.setStrokeColorRgb(c3r.valueInt, c3g.valueInt, c3b.valueInt, c3a);
      }
      else {
        if (t < maxT.value / 2) {
          interpolR = c1r.value +(c2r.value-c1r.value) *interpolPos;
          interpolG = c1g.value +(c2g.value-c1g.value) *interpolPos;
          interpolB = c1b.value +(c2b.value-c1b.value) *interpolPos;
        } else {
          interpolR = c2r.value +(c3r.value-c2r.value) *interpolPos;
          interpolG = c2g.value +(c3g.value-c2g.value) *interpolPos;
          interpolB = c2b.value +(c3b.value-c2b.value) *interpolPos;
        }
        ctx2d.setStrokeColorRgb(interpolR.toInt(), interpolG.toInt(), interpolB.toInt(), 1.0);
      }
      
      ctx2d.beginPath();
      ctx2d.moveTo(xScreen(xa), yScreen(ya));
      ctx2d.bezierCurveTo(xScreen(xcpa), yScreen(ycpa), xScreen(xcpb), yScreen(ycpb), xScreen(xb), yScreen(yb));
      ctx2d.stroke();
      nbCurves++;
    }
    
    requestRedraw();
  }
  
  void requestRedraw() {
      window.requestAnimationFrame(draw);
  }
  
  
  
  
  
  
  
  void updateVariables() {
    if (fpsAverage < 50) {
      // increase stp and then there are less curves
      //stp.value = stp.value*1.1;
      stp.stop();
      maxT.stop();
    }
    
    if (lw1.mode != "") lw1.update();
    if (lw2.mode != "") lw2.update();
    if (lw3.mode != "") lw3.update();
    
    if (maxT.mode != "") maxT.update(); 
    if (stp.mode != "") stp.update(); 
    if (bzrParam.mode != "") bzrParam.update();
    
    if (aParam.mode != "") aParam.update();
    if (bParam.mode != "") bParam.update();
    
    if (c1.mode != "") {
      c1.update();
      c1r.value = c1.r.toDouble();
      c1g.value = c1.g.toDouble();
      c1b.value = c1.b.toDouble();
      updateColorPicker(c1.h, c1.s, c1.l);
    }
    
    if (c2.mode != "") {
      c2.update();
      c2r.value = c2.r.toDouble();
      c2g.value = c2.g.toDouble();
      c2b.value = c2.b.toDouble();
      updateColorPicker(c2.h, c2.s, c2.l);
    }
    
    if (c3.mode != "") {
      c3.update();
      c3r.value = c3.r.toDouble();
      c3g.value = c3.g.toDouble();
      c3b.value = c3.b.toDouble();
      updateColorPicker(c3.h, c3.s, c3.l);
    }
    
  }
  
  
  
  
  
  
  
  
  double xFormula(double t) {
    return cos(t) + aParam.value*cos(bParam.value*t);
  }

  double yFormula(double t) {
    return sin(t) + aParam.value*sin(bParam.value*t);
  }

  double xScreen(double x) {
    return x*SCALE_X + CENTER_X;
  }

  double yScreen(double y) {
    return y*SCALE_Y + CENTER_Y;
  }
  
  
  ease(dynamic t) {
    
  }
}

class KeyboardController
{
  Map keyCodesNormal; 
  
  KeyboardController() {
      keyCodesNormal = new Map();
      for (var i = 0; i < 300; i++) {
        keyCodesNormal[i] = "nothing";
      }
      
      initialiseKeyCodesBinding();
      
      document.onKeyDown.listen(keydown);
      document.onKeyUp.listen(keyup);
  }
  
  void initialiseKeyCodesBinding()
  {
    keyCodesNormal[87] = "lw1Up"; //w
    keyCodesNormal[88] = "lw1Down"; //x
    keyCodesNormal[67] = "lw2Up"; //c
    keyCodesNormal[86] = "lw2Down"; //v
    keyCodesNormal[66] = "lw3Up"; //b
    keyCodesNormal[78] = "lw3Down"; //n
    
    keyCodesNormal[65] = "maxTUp"; //a
    keyCodesNormal[81] = "maxTDown"; //q
    keyCodesNormal[90] = "stpParamUp"; //z
    keyCodesNormal[83] = "stpParamDown"; //s
    keyCodesNormal[69] = "aParamUp"; //e
    keyCodesNormal[68] = "aParamDown"; //d
    keyCodesNormal[82] = "bParamUp"; //r
    keyCodesNormal[70] = "bParamDown"; //f
    
    keyCodesNormal[85] = "colorHueUp"; //u
    keyCodesNormal[74] = "colorHueDown"; //j
    keyCodesNormal[73] = "colorSatUp"; //i
    keyCodesNormal[75] = "colorSatDown"; //k
    keyCodesNormal[79] = "colorLightUp"; //o
    keyCodesNormal[76] = "colorLightDown"; //l
    keyCodesNormal[80] = "toggleColorControlled"; //p
    
    keyCodesNormal[84] = "bezierCurves"; //r
    keyCodesNormal[71] = "obliqCurves"; //f
    keyCodesNormal[89] = "colorAlternate"; //t
    keyCodesNormal[72] = "colorInterpol"; //g
  }
  
  void keydown(KeyboardEvent event) {
      notes2.text = "key pressed : " + event.keyCode.toString();
      window.dispatchEvent(new CustomEvent(keyCodesNormal[event.keyCode], detail:true));
  }

  void keyup(KeyboardEvent event) {
      notes2.text = "key pressed : ";
      window.dispatchEvent(new CustomEvent(keyCodesNormal[event.keyCode], detail:false));
  }
}

class AnimateDouble {
  double value;
  double valueTarget;
  double valueGap;
  double mini;
  double maxi;
  double step;
  String mode = "";
  static const LINEAR_UP = "linearUp";
  static const LINEAR_DOWN = "linearDown";
  static const EXP_UP = "expUp";
  static const EXP_DOWN = "expDown";
  static const BREAK_DOWN = "breakDown";
  static const BREAK_UP = "breakUp";
  static const EASE_IN_OUT = "easeInOut";
  static const LINEAR_FACT = 0.1;
  static const EXP_FACT = 0.001;
  Timer timer;
  int t;
  int tFinal;
  
  AnimateDouble(this.value, this.mini, this.maxi);
  
  void update() {
    switch (mode) {
      case LINEAR_UP :   value = min(maxi, value + step); 
                              step = min(step, 0.05*(maxi - value));
                              break;
      case LINEAR_DOWN : value = max(mini, value - step); 
                              step = min(step, 0.05*(value - mini));
                              break;
      case EXP_UP :   value = min(maxi, value + step); 
                                    step = min(1.1*step, 0.05*(maxi - value));
                                    break;
      case EXP_DOWN : value = max(mini, value - step); 
                                    step = min(1.1*step, 0.05*(value - mini));
                                    break;
      case BREAK_UP : value = min(maxi, value + step);
                                    step *= 0.9;
                                    break;
      case BREAK_DOWN : value = max(mini, value - step);
                              step *= 0.9;
                              break;
      case EASE_IN_OUT : value = valueTarget - (valueGap *(1-easeInOut(t/tFinal)));
                              t++;
                              if (t > tFinal) {
                                mode = "";
                                value = valueTarget;
                              }
                              break;
    }
  }

  void play(String m) {
    if (m != mode) {
      mode = m;
      switch (mode) {
        case LINEAR_UP : case LINEAR_DOWN : step = max(value * LINEAR_FACT, LINEAR_FACT); break;
        case EXP_UP : case EXP_DOWN : step = max(value * EXP_FACT, EXP_FACT); break;
      }
      
    }
    if ((timer != null) && (timer.isActive)) timer.cancel();
  }
  
  void tween(String m, double v, int f) {
    mode = m;
    valueTarget = v;
    valueGap = valueTarget - value;
    t = 0;
    tFinal = f;
  }
  
  void stop() {
    switch (mode) {
          case LINEAR_UP : case EXP_UP : mode = BREAK_UP; break;
          case LINEAR_DOWN : case EXP_DOWN : mode = BREAK_DOWN; break;
    }
    
    if ((timer != null) && (timer.isActive)) timer.cancel();
    timer = new Timer(const Duration(milliseconds: 500), () => mode = "");
  }
  
  double easeInOut(double a) {
    return (atan(6*a -3) +1.25) /2.5;
  }
  
  int get valueInt => value.floor();
  double get valueHalf => value/2;
}


class ColorController {
  Color color;
  int r;
  int g;
  int b;
  int h;
  int s;
  int l;
  static const HUE_UP = "hueUp";
  static const HUE_DOWN = "hueDown";
  static const SATURATION_UP = "saturationUp";
  static const SATURATION_DOWN = "saturationDown";
  static const LIGHTNESS_UP = "lightnessUp";
  static const LIGHTNESS_DOWN = "lightnessDown";
  String mode;
  
  ColorController(this.r, this.g, this.b) {
    color = new Color.createRgba(r, g, b, 1.0);
    h = color.hsla.hueDegrees;
    s = color.hsla.saturationPercentage;
    l = color.hsla.lightnessPercentage;
    mode = "";
  }
  
  void hueUp() {
    h = min(360, h +1);
    synchroniseFromHsl();
  }
  
  void hueDown() {
     h = max(0, h -1);
     synchroniseFromHsl();
  }
  
  void saturationUp() {
    s = min(100, s +1);
    synchroniseFromHsl();
  }
  
  void saturationDown() {
    s = max(0, s -1);
    synchroniseFromHsl();
  }
  
  void lightnessUp() {
    l = min(100, l +1);
    synchroniseFromHsl();
  }
  
  void lightnessDown() {
    l = max(0, l -1);
    synchroniseFromHsl();
  }
  
  void update() {
    switch (mode)
    {
      case HUE_UP : hueUp(); break;
      case HUE_DOWN : hueDown(); break;
      case SATURATION_UP : saturationUp(); break;
      case SATURATION_DOWN : saturationDown(); break;
      case LIGHTNESS_UP : lightnessUp(); break;
      case LIGHTNESS_DOWN : lightnessDown(); break;
    }
  }
  
  void synchroniseFromHsl() {
    color = new Color.createHsla(h, s, l, 1.0);
     r = color.rgba.r;
     g = color.rgba.g;
     b = color.rgba.b;
  }
}
