import 'dart:html';
import 'dart:math';

const int MAX_W = 900;
const int MAX_H = 400;
const int CENTER_X = 450;
const int CENTER_Y = 200;
const int SCALE = 150;

var aParam = 1.0;
var bParam = 0.1;
var stpParam = 1.0;
var bzrParam = 0.5;

final CanvasRenderingContext2D context = (querySelector("#canvas") as CanvasElement).context2D;

//final ButtonElement button01 = querySelector("#button01") as ButtonElement;
final InputElement aParamInput = querySelector("#aParamInput") as InputElement;
final InputElement bParamInput = querySelector("#bParamInput") as InputElement;
final InputElement stpParamInput = querySelector("#stpParamInput") as InputElement;
final InputElement bzrParamInput = querySelector("#bzrParamInput") as InputElement;

void main() {
  //button01.onClick.listen(_onButton01Click); 
  aParamInput.onChange.listen((e) => _onAParamClick(e));
  bParamInput.onChange.listen((e) => _onBParamClick(e));
  stpParamInput.onChange.listen((e) => _onStpParamClick(e));
  bzrParamInput.onChange.listen((e) => _onBzrParamClick(e));
  draw();
}



_onAParamClick(Event e) {
  aParam = aParamInput.valueAsNumber;
  draw();
}

_onBParamClick(Event e) {
  bParam = bParamInput.valueAsNumber;
  draw();
}

_onStpParamClick(Event e) {
  stpParam = stpParamInput.valueAsNumber;
  draw();
}

_onBzrParamClick(Event e) {
  bzrParam = bzrParamInput.valueAsNumber;
  draw();
}

void _onButton01Click(MouseEvent args) {
  myConsole("button 01 clicked");
}

void myConsole(String myText) {
  myText = " " + myText;
  final LabelElement consoleLbl = querySelector("#consoleLbl") as LabelElement;
  consoleLbl.appendHtml(myText);
}

/// Draw the complete figure for the current number of seeds.
void draw() {
  double xa, ya, xm, ym, xb, yb, xcpa, ycpa, xcpb, ycpb, t;
  t = 0.0;
  context.clearRect(0, 0, MAX_W, MAX_H);
  context.beginPath();
  context.moveTo(cos(0)*SCALE + CENTER_X, sin(bParam)*SCALE + CENTER_Y);
  for (var i = 0.0; i < 25; i++) {
    t = i*stpParam;
    xa = xFormula(t);
    ya = yFormula(t);
    t += stpParam/2;
    xm = xFormula(t);
    ym = yFormula(t);
    t += stpParam/2;
    xb = xFormula(t);
    yb = yFormula(t);
    
    xcpa = xa + (((xa+xb)/2 + 2*(xm-(xa+xb)/2)) - xa)*bzrParam;
    ycpa = ya + (((ya+yb)/2 + 2*(ym-(ya+yb)/2)) - ya)*bzrParam;
    
    xcpb = xb - (xb - ((xa+xb)/2 + 2*(xm-(xa+xb)/2)))*bzrParam;
    ycpb = yb - (yb - ((ya+yb)/2 + 2*(ym-(ya+yb)/2)))*bzrParam;
    
    //context.lineTo(xScreen(xa), yScreen(ya));
    context.bezierCurveTo(xScreen(xcpa), yScreen(ycpa), xScreen(xcpb), yScreen(ycpb), xScreen(xb), yScreen(yb));
  }
  context.lineWidth = 1;
  context.setStrokeColorRgb(255, 0, 0, 1);
  //context.closePath(); do not close to avoid the last line to get back at the beginning
  context.stroke();
}

double xFormula(double t) {
  return cos(t);
}

double yFormula(double t) {
  return sin(aParam*t + bParam);
}

double xScreen(double x) {
  return x*SCALE + CENTER_X;
}

double yScreen(double y) {
  return y*SCALE + CENTER_Y;
}