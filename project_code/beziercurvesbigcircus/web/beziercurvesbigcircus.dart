import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'dart:core';
import 'package:csslib/parser.dart';

const MAX_W = 800;
const MAX_H = 600;
const CENTER_X = 400;
const CENTER_Y = 300;
const SCALE_X = 250;
const SCALE_Y = 150;


BezierCanvas bezierCanvas;
KeyboardController keyboardController;

void main() {
  keyboardController = new KeyboardController();
  CanvasElement canvas = querySelector("#canvas");
  bezierCanvas = new BezierCanvas(canvas);
  scheduleMicrotask(bezierCanvas.start);
  bindControls();
}


Element notes = querySelector("#fps");
Element notes2 = querySelector("#keyP");
num fpsAverage;

/// Display the animation's FPS in a div.
void showFps(num fps) {
  if (fpsAverage == null) fpsAverage = fps;
  fpsAverage = fps * 0.05 + fpsAverage * 0.95;
  notes.text = "${fpsAverage.round()} fps";
}

void bindControls() {
  
  window.on['lineWidthUp'].listen((e) {
    if (e.detail) bezierCanvas.dLineWidth = 1;
    else bezierCanvas.dLineWidth = 0;
    });
  
  window.on['lineWidthDown'].listen((e) {
      if (e.detail) bezierCanvas.dLineWidth = -1;
      else bezierCanvas.dLineWidth = 0;
      });
  
  window.on['stpParamUp'].listen((e) {
      if (e.detail) bezierCanvas.dStpParam = 0.05;
      else bezierCanvas.dStpParam = 0.0;
      });
    
  window.on['stpParamDown'].listen((e) {
      if (e.detail) bezierCanvas.dStpParam = -0.05;
      else bezierCanvas.dStpParam = 0.0;
      });
  
  window.on['colorHueUp'].listen((e) {
      if (e.detail) bezierCanvas.dC1h = 1;
      else bezierCanvas.dC1h = 0;
      });
    
  window.on['colorHueDown'].listen((e) {
      if (e.detail) bezierCanvas.dC1h = -1;
      else bezierCanvas.dC1h = 0;
      });
  
  window.on['colorSatUp'].listen((e) {
        if (e.detail) bezierCanvas.dC1s = 1;
        else bezierCanvas.dC1s = 0;
        });
      
  window.on['colorSatDown'].listen((e) {
      if (e.detail) bezierCanvas.dC1s = -1;
      else bezierCanvas.dC1s = 0;
      });
  
  window.on['colorLumUp'].listen((e) {
          if (e.detail) bezierCanvas.dC1l = 1;
          else bezierCanvas.dC1l = 0;
          });
        
  window.on['colorLumDown'].listen((e) {
      if (e.detail) bezierCanvas.dC1l = -1;
      else bezierCanvas.dC1l = 0;
      });
  
}

class BezierCanvas
{
  CanvasElement canvas;
  CanvasRenderingContext2D ctx2d;
  ImageElement hslpicker;
  CanvasElement hsllum;
  ImageElement lumpicker;

  double aParam = 1.1;
  double bParam = 0.1;
  double stpParam = 1.0;
  double dStpParam = 0.0;
  double bzrParam = 0.65;
  
  int c1h = 0;
  int dC1h = 0;
  int c1s = 100;
  int dC1s = 0;
  int c1l = 50;
  int dC1l = 0;
  double c1a = 1.0;
  double dC1a = 0.0;
  
  int lineWidth = 20;
  int dLineWidth = 0;
  
  num renderTime;
  
  BezierCanvas(this.canvas) {
    ctx2d = canvas.context2D;
    hslpicker = querySelector("#hslpicker") as ImageElement;
    hsllum = querySelector("#hsllum") as CanvasElement;
    lumpicker = querySelector("#lumpicker") as ImageElement;
  }
  
  
  void start() {
    requestRedraw();
  }
  

  
  void draw(num _) {
    double xa, ya, xm, ym, xb, yb, xcpa, ycpa, xcpb, ycpb, t;
    int i;
    t = 0.0;
    
    
    num time = new DateTime.now().millisecondsSinceEpoch;
    if (renderTime != null) showFps(1000 / (time - renderTime));
    renderTime = time;
    
    
 
    updateVariables();
    
    
    ctx2d.clearRect(0, 0, MAX_W, MAX_H);
    ctx2d.setFillColorRgb(240, 240, 240, 1);
    ctx2d.rect(0, 0, MAX_W, MAX_H);
    ctx2d.fill();
    ctx2d.globalCompositeOperation = "multiply";
    ctx2d.lineWidth = lineWidth;
    ctx2d.setStrokeColorRgb(90, 200, 220, 1);
    i = 0;
    while (t < 70) {
      xa = xFormula(t);
      ya = yFormula(t);
      t += stpParam/2;
      xm = xFormula(t);
      ym = yFormula(t);
      t += stpParam/2;
      xb = xFormula(t);
      yb = yFormula(t);
      
      xcpa = xa + (((xa+xb)/2 + 2.2*(xm-(xa+xb)/2)) - xa)*bzrParam;
      ycpa = ya + (((ya+yb)/2 + 2.2*(ym-(ya+yb)/2)) - ya)*bzrParam;
      
      xcpb = xb - (xb - ((xa+xb)/2 + 2.2*(xm-(xa+xb)/2)))*bzrParam;
      ycpb = yb - (yb - ((ya+yb)/2 + 2.2*(ym-(ya+yb)/2)))*bzrParam;
      
      if (i % 2 == 0) ctx2d.setStrokeColorHsl(c1h, c1s, c1l, c1a);
      else ctx2d.setStrokeColorRgb(170, 170, 170, 1);
      
      ctx2d.beginPath();
      ctx2d.moveTo(xScreen(xa), yScreen(ya));
      ctx2d.bezierCurveTo(xScreen(xcpa), yScreen(ycpa), xScreen(xcpb), yScreen(ycpb), xScreen(xb), yScreen(yb));
      ctx2d.stroke();
      i++;
    }
    
    requestRedraw();
  }
  
  void requestRedraw() {
      window.requestAnimationFrame(draw);
  }
  
  
  
  
  
  
  
  void updateVariables() {
    lineWidth = max(1, min(255, lineWidth + dLineWidth));
    stpParam = max(0.04, stpParam + dStpParam);
    
    c1h = max(0, min(360, c1h + dC1h));
    c1s = max(0, min(100, c1s + dC1s));
    c1l = max(0, min(100, c1l + dC1l));
    
    updateColorPicker();
    
    
    
  }
  
  
  void updateColorPicker() {
    var hsllumctx = hsllum.context2D;
    hslpicker.style.left = (c1h/2).round().toString() + "px";
    hslpicker.style.top = (100-c1s).round().toString() + "px";
    
    hsllumctx.clearRect(0, 0, 30, 100);
    var gradient = hsllumctx.createLinearGradient(0, 0, 0, 150);
    var color = new Color.createHsla(c1h, c1s, 50, 1);
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(0.5, color.rgba.cssExpression);
    gradient.addColorStop(1, "#000");
    hsllumctx.fillStyle = gradient;
    hsllumctx.fillRect(0, 0, 300, 150);
    
    lumpicker.style.left = "205px";
    lumpicker.style.top = (100-c1l).round().toString() + "px";
  }
  
  
  
  
  
  double xFormula(double t) {
    return cos(t) + aParam*cos(bParam*t);
  }

  double yFormula(double t) {
    return sin(t) + aParam*sin(bParam*t);
  }

  double xScreen(double x) {
    return x*SCALE_X + CENTER_X;
  }

  double yScreen(double y) {
    return y*SCALE_Y + CENTER_Y;
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
    keyCodesNormal[65] = "lineWidthUp";
    keyCodesNormal[81] = "lineWidthDown";
    keyCodesNormal[90] = "stpParamUp";
    keyCodesNormal[83] = "stpParamDown";
    
    keyCodesNormal[85] = "colorHueUp";
    keyCodesNormal[74] = "colorHueDown";
    keyCodesNormal[73] = "colorSatUp";
    keyCodesNormal[75] = "colorSatDown";
    keyCodesNormal[79] = "colorLumUp";
    keyCodesNormal[76] = "colorLumDown";
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

