import 'dart:async';
import 'dart:html';
import 'dart:math';

const MAX_W = 800;
const MAX_H = 600;
const CENTER_X = 400;
const CENTER_Y = 300;
const SCALE_X = 250;
const SCALE_Y = 150;

var keyPressedCode = 0;

BezierCanvas bezierCanvas;

void main() {
  document.onKeyDown.listen(keydown);
  document.onKeyUp.listen(keyup);
  
  
  CanvasElement canvas = querySelector("#canvas");
  bezierCanvas = new BezierCanvas(canvas);
  scheduleMicrotask(bezierCanvas.start);
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

class BezierCanvas
{
  CanvasElement canvas;
  CanvasRenderingContext2D ctx2d;
  

  var aParam = 1.1;
  var bParam = 0.1;
  var stpParam = 1.0;
  var bzrParam = 0.65;
  
  var lineWidth = 20;
  
  num renderTime;
  
  BezierCanvas(this.canvas) {
    ctx2d = canvas.context2D;
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
    
    notes2.text = "key pressed : " + keyPressedCode.toString();
    
    if (keyPressedCode == 65) lineWidth++;
    else if ((keyPressedCode == 90) && (lineWidth > 1)) lineWidth--;
    else if (keyPressedCode == 81) aParam += 0.001;
    else if (keyPressedCode == 83) aParam -= 0.001;
    else if (keyPressedCode == 87) bParam += 0.001;
    else if (keyPressedCode == 88) bParam -= 0.001;
    else if (keyPressedCode == 69) stpParam += 0.1;
    else if ((keyPressedCode == 82) && (stpParam > 0.2)) stpParam -= 0.1;
    
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
      
      if (i % 2 == 0) ctx2d.setStrokeColorRgb(90, 200, 220, 1);
      else ctx2d.setStrokeColorRgb(220, 90, 200, 1);
      
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

void keydown(KeyboardEvent event) {
    keyPressedCode = event.keyCode;
}

void keyup(KeyboardEvent event) {
    keyPressedCode = 0;
}