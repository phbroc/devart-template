import 'dart:convert';
import 'dart:html';
import 'dart:math';
import 'package:bcbc2/animate_double.dart';
import 'package:bcbc2/color_controller.dart';

class BcbcScreen {
  int _width = 0;
  int _height = 0;
  int _centerX = 0;
  int _centerY = 0;
  int _scaleX = 0;
  int _scaleY = 0;

  double _multiplyDimension = 1.0;

  late CanvasElement _canvas;
  late CanvasRenderingContext2D _ctx2d;

  final double aParamInit = 0.0;
  final double bParamInit = 1.0;
  final double cParamInit = 1.0;
  final double lwInit = 20.0;
  final double dashInit = 0.0;
  final double stepTInit = 1.0;
  final double maxTInit = 70.0;
  final double beginTInit = 0.0;
  final double bzrInit = 2.025;
  final double gapsRatioInit = 1.0;
  final String capsStyleInit = "butt";
  final int c1rInit = 203;
  final int c1gInit = 56;
  final int c1bInit = 28;
  final int c1a = 1;
  final int c2rInit = 203;
  final int c2gInit = 28;
  final int c2bInit = 174;
  final int c2a = 1;
  final int c3rInit = 174;
  final int c3gInit = 203;
  final int c3bInit = 28;
  final int c3a = 1;
  final double distribInit = 1.0;
  final double pivotInit = 0.5;
  final double gradientInit = 200.0;
  final double zoomInit = 1.0;
  final double xOrigineInit = 0.0;
  final double yOrigineInit = 0.0;
  final double rotationInit = 0.0;
  final double splitHnumberInit = 1.0;
  final double splitHwidthInit = 1.0;
  final double splitVnumberInit = 1.0;
  final double splitVheightInit = 1.0;
  final double splitQuincInit = 0.0;
  final double flipHInit = 1.0;
  final double flipVInit = 1.0;
  final double explodeInit = 0.0;

  AnimateDouble aParam = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble bParam = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble cParam = AnimateDouble(0.0, 0.0, 0.0);

  AnimateDouble lw1 = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble lw2 = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble lw3 = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble dash1 = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble dash2 = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble dash3 = AnimateDouble(0.0, 0.0, 0.0);

  AnimateDouble stepT = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble maxT = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble beginT = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble bzr = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble gapsRatio = AnimateDouble(0.0, 0.0, 0.0);
  String capsStyle = "butt";

  ColorController c1 = ColorController(0, 0, 0);
  ColorController c2 = ColorController(0, 0, 0);
  ColorController c3 = ColorController(0, 0, 0);

  AnimateDouble distrib = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble pivot = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble gradient = AnimateDouble(0.0, 0.0, 0.0);

  AnimateDouble zoom = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble xOrigine = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble yOrigine = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble rotation = AnimateDouble(0.0, 0.0, 0.0);

  AnimateDouble splitHnumber = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble splitHwidth = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble splitVnumber = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble splitVheight = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble splitQuinc = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble flipH = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble flipV = AnimateDouble(0.0, 0.0, 0.0);
  AnimateDouble explode = AnimateDouble(0.0, 0.0, 0.0);
  List<double> explodeX = [];
  List<double> explodeY = [];

  int nbCurves = 0;

  String colorControlled = "C1";
  String lineControlled = "L1";

  String varToPrompt = "";

  BcbcScreen(int maxW, int maxH, double multiply, String idCanvas) {
    _canvas = querySelector(idCanvas) as CanvasElement;
    _width = maxW;
    _height = maxH;
    _multiplyDimension = multiply;
    _centerX = (maxW/2).round();
    _centerY = (maxH/2).round();
    _scaleX = 100; //(_width/8).round();
    _scaleY = _scaleX;
    _canvas.width = _width;
    _canvas.height = _height;
    _ctx2d = _canvas.context2D;
    _ctx2d.lineCap = capsStyleInit;
    _ctx2d.lineJoin = "miter";
    _ctx2d.miterLimit = 5;

    aParam = AnimateDouble(aParamInit, 0.0, 20.0);
    bParam = AnimateDouble(bParamInit, 0.0, 500.0);
    cParam = AnimateDouble(cParamInit, -10.0, 10.0);

    lw1 = AnimateDouble(lwInit, 1.0, 2000.0);
    lw2 = AnimateDouble(lwInit, 1.0, 2000.0);
    lw3 = AnimateDouble(lwInit, 1.0, 2000.0);
    dash1 = AnimateDouble(dashInit, 0.0, 500);
    dash2 = AnimateDouble(dashInit, 0.0, 500);
    dash3 = AnimateDouble(dashInit, 0.0, 500);

    stepT = AnimateDouble(stepTInit, 0.0001, 20.0);
    maxT = AnimateDouble(maxTInit, 0.0, 100000.0);
    beginT = AnimateDouble(beginTInit, 0.0, 100.0);
    bzr = AnimateDouble(bzrInit, 0.0, bzrInit);
    gapsRatio = AnimateDouble(gapsRatioInit, 0.0, 2.0);
    capsStyle = capsStyleInit;

    // initialisation des trois couleurs
    c1.r = c1rInit;
    c1.g = c1gInit;
    c1.b = c1bInit;
    c1.synchroniseFromRgb();
    c2.r = c2rInit;
    c2.g = c2gInit;
    c2.b = c2bInit;
    c2.synchroniseFromRgb();
    c3.r = c3rInit;
    c3.g = c3gInit;
    c3.b = c3bInit;
    c3.synchroniseFromRgb();

    distrib = AnimateDouble(distribInit, 0.0, 1000.0);
    pivot = AnimateDouble(pivotInit, 0.01, 0.99);
    gradient = AnimateDouble(gradientInit, 1.0, 200.0);

    zoom = AnimateDouble(zoomInit, 0.01, 15.0);
    xOrigine = AnimateDouble(xOrigineInit, -20.8, 20.8);
    yOrigine = AnimateDouble(yOrigineInit, -20.8, 20.8);
    rotation = AnimateDouble(rotationInit, -pi, pi);

    splitHnumber = AnimateDouble(splitHnumberInit, 1.0, 1000.0);
    splitHwidth = AnimateDouble(splitHwidthInit, 0.0, 10.0);
    splitVnumber = AnimateDouble(splitVnumberInit, 1.0, 1000.0);
    splitVheight = AnimateDouble(splitVheightInit, 0.0, 10.0);
    splitQuinc = AnimateDouble(splitQuincInit, 0.0, 1.0);
    flipH = AnimateDouble(flipHInit, -1.0, 1.0);
    flipV = AnimateDouble(flipHInit, -1.0, 1.0);
    explode = AnimateDouble(explodeInit, 0.0, 5.0);
    explodeX.add(2*(Random().nextDouble()-0.5));
    explodeY.add(2*(Random().nextDouble()-0.5));

    setEventListener();
  }

  void setDimensions (String newDimension) {
    switch (newDimension) {
      case "LD" : _width = 427; _height = 240; _multiplyDimension = 0.5; break;
      case "MD" : _width = 640; _height = 360; _multiplyDimension = 0.75; break;
      case "SD" : _width = 854; _height = 480; _multiplyDimension = 1.0; break;
      case "HD" : _width = 1280; _height = 720; _multiplyDimension = 1.5; break;
      case "FHD" : _width = 1920; _height = 1080; _multiplyDimension = 2.25; break;
      case "UHD" : _width = 3840; _height = 2160; _multiplyDimension = 4.5; break;
      default: _width = 854; _height = 480; _multiplyDimension = 1.0; break;
    }
    _centerX = (_width/2).round();
    _centerY = (_height/2).round();
    _canvas.width = _width;
    _canvas.height = _height;
    // après le redimentionnement il faut reappliquer certaines valeurs au contexte.
    _ctx2d.lineCap = capsStyle;
  }

  double xFormula(double t) {
    double retValue = cos(beginT.value +t) + aParam.value*cos(bParam.value*(beginT.value +t));
    double splitItem = max(0,((splitHnumber.value *splitVnumber.value *t *0.999) / maxT.value).floorToDouble());
    double splitLine = ((splitVnumber.value *t *0.999) / maxT.value).floorToDouble();
    retValue += splitHwidth.value * (splitItem - 0.5*(splitHnumber.value - 1)) * flipH.value;
    retValue -= splitHwidth.value * splitLine * splitHnumber.value * flipH.value;
    // retrait pour les lignes en quinconce
    retValue +=  (((splitLine)%2) * splitHwidth.value) * 0.5 * splitQuinc.value;
    if ((explode.value > 0.0) && (explodeX.isNotEmpty)) {
      retValue += explodeX.elementAt(min(splitItem.toInt(),explodeX.length -1)) * splitHwidth.value * explode.value;
    }
    return retValue;
  }

  double yFormula(double t) {
    double retValue = sin(beginT.value +cParam.value *t) + aParam.value*sin(bParam.value*(beginT.value +t));
    retValue += (splitVheight.value *(((splitVnumber.value *t *0.999) / maxT.value).floorToDouble() - 0.5*(splitVnumber.value - 1))) * flipV.value;
    if ((explode.value > 0.0) && (explodeY.isNotEmpty)) {
      double splitItem = max(0,((splitHnumber.value *splitVnumber.value *t *0.999) / maxT.value).floorToDouble());
      retValue += explodeY.elementAt(min(splitItem.toInt(),explodeY.length -1)) * splitVheight.value * explode.value;
    }
    return retValue;
  }

  double xScreen(double x) {
    return (x* _scaleX *_multiplyDimension *zoom.value) + _centerX + (xOrigine.value *_scaleX *_multiplyDimension *zoom.value);
  }

  double yScreen(double y) {
    return (y* _scaleY *_multiplyDimension *zoom.value) + _centerY + (yOrigine.value *_scaleY *_multiplyDimension *zoom.value);
  }

  bool updateVars() {
    bool isUpdating = false;
    varToPrompt = "";

    if (aParam.moving) { aParam.update(); isUpdating = true; varToPrompt = "aParam"; }
    if (bParam.moving) { bParam.update(); isUpdating = true; varToPrompt = "bParam"; }
    if (cParam.moving) { cParam.update(); isUpdating = true; varToPrompt = "cParam"; }

    if (beginT.moving) { beginT.update(); isUpdating = true; varToPrompt = "beginT"; }
    if (maxT.moving) { maxT.update(); isUpdating = true; varToPrompt = "maxT"; }
    if (stepT.moving) { stepT.update(); isUpdating = true; varToPrompt = "stepT"; }

    if (lw1.moving) { lw1.update(); isUpdating = true; varToPrompt = "lw1"; }
    if (lw2.moving) { lw2.update(); isUpdating = true; varToPrompt = "lw2"; }
    if (lw3.moving) { lw3.update(); isUpdating = true; varToPrompt = "lw3"; }
    if (dash1.moving) { dash1.update(); isUpdating = true; varToPrompt = "dash1"; }
    if (dash2.moving) { dash2.update(); isUpdating = true; varToPrompt = "dash2"; }
    if (dash3.moving) { dash3.update(); isUpdating = true; varToPrompt = "dash3"; }

    if (c1.moving) { c1.update(); isUpdating = true; }
    if (c2.moving) { c2.update(); isUpdating = true; }
    if (c3.moving) { c3.update(); isUpdating = true; }

    if (gradient.moving) { gradient.update(); isUpdating = true; varToPrompt = "gradient"; }
    if (pivot.moving) { pivot.update(); isUpdating = true; varToPrompt = "pivot"; }
    if (distrib.moving) { distrib.update(); isUpdating = true; varToPrompt = "distrib"; }

    if (bzr.moving) { bzr.update(); isUpdating = true; };
    if (capsStyle == "selected") { capsStyle = _ctx2d.lineCap; isUpdating = true; }
    if (gapsRatio.moving) { gapsRatio.update(); isUpdating = true; varToPrompt = "gapsRatio"; }

    if (splitHnumber.moving) { splitHnumber.update(); isUpdating = true; varToPrompt = "Hnum"; }
    if (splitVnumber.moving) { splitVnumber.update(); isUpdating = true; varToPrompt = "Vnum"; }
    if (splitHwidth.moving) { splitHwidth.update(); isUpdating = true; varToPrompt = "Hwidth"; }
    if (splitVheight.moving) { splitVheight.update(); isUpdating = true; varToPrompt = "Vheight"; }
    if (splitQuinc.moving) { splitQuinc.update(); isUpdating = true; }
    if (flipH.moving) { flipH.update(); isUpdating = true; }
    if (flipV.moving) { flipV.update(); isUpdating = true; }
    if (explode.moving) { explode.update(); isUpdating = true; varToPrompt = "explode"; }

    if (zoom.moving) { zoom.update(); isUpdating = true; varToPrompt = "zoom"; }
    if (xOrigine.moving) { xOrigine.update(); isUpdating = true; }
    if (yOrigine.moving) { yOrigine.update(); isUpdating = true; }
    if (rotation.moving) { rotation.update(); isUpdating = true; varToPrompt = "rotation"; }

    return isUpdating;
  }

  bool updateControllers() {
    bool isUpdating = false;

    if (c1.mode == ColorController.SELECTED) { c1.mode = ""; isUpdating = true; }
    else if (c1.mode != "") { isUpdating = true; }
    if (c2.mode == ColorController.SELECTED) { c2.mode = ""; isUpdating = true; }
    else if (c2.mode != "") { isUpdating = true; }
    if (c3.mode == ColorController.SELECTED) { c3.mode = ""; isUpdating = true; }
    else if (c3.mode != "") { isUpdating = true; }

    if (lw1.selected) { lw1.stop(); isUpdating = true; }
    if (lw2.selected) { lw2.stop(); isUpdating = true; }
    if (lw3.selected) { lw3.stop(); isUpdating = true; }



    return isUpdating;
  }

  double colorPosition(double position) {
    double cp = 0;
    double positionDistrib = position * distrib.value;
    double basePosition = (positionDistrib/2).floorToDouble();
    double basePositionFWD = positionDistrib - (basePosition*2);
    if (basePositionFWD <= 1)
    {
      cp = basePositionFWD;
    }
    else
    {
      cp = 2.0 - basePositionFWD;
    }
    return cp;
  }

  String exportVars() {
    String export = "BCBC2" + String.fromCharCode(13);
    export += aParam.prompt + String.fromCharCode(13);
    export += bParam.prompt + String.fromCharCode(13);
    export += cParam.prompt + String.fromCharCode(13);
    export += beginT.prompt + String.fromCharCode(13);
    export += maxT.prompt + String.fromCharCode(13);
    export += stepT.prompt + String.fromCharCode(13);
    export += lw1.prompt + String.fromCharCode(13);
    export += lw2.prompt + String.fromCharCode(13);
    export += lw3.prompt + String.fromCharCode(13);
    export += dash1.prompt + String.fromCharCode(13);
    export += dash2.prompt + String.fromCharCode(13);
    export += dash3.prompt + String.fromCharCode(13);
    export += c1.prompt + String.fromCharCode(13);
    export += c2.prompt + String.fromCharCode(13);
    export += c3.prompt + String.fromCharCode(13);
    export += gradient.prompt + String.fromCharCode(13);
    export += pivot.prompt + String.fromCharCode(13);
    export += distrib.prompt + String.fromCharCode(13);
    export += bzr.prompt + String.fromCharCode(13);

    export += capsStyle + String.fromCharCode(13);

    export += gapsRatio.prompt + String.fromCharCode(13);
    export += splitHnumber.prompt + String.fromCharCode(13);
    export += splitHwidth.prompt + String.fromCharCode(13);
    export += splitVnumber.prompt + String.fromCharCode(13);
    export += splitVheight.prompt + String.fromCharCode(13);
    export += splitQuinc.prompt + String.fromCharCode(13);
    export += flipH.prompt + String.fromCharCode(13);
    export += flipV.prompt + String.fromCharCode(13);
    export += explode.prompt + String.fromCharCode(13);
    export += zoom.prompt + String.fromCharCode(13);
    export += xOrigine.prompt + String.fromCharCode(13);
    export += yOrigine.prompt + String.fromCharCode(13);
    export += rotation.prompt + String.fromCharCode(13);
    export += "***";

    //export += .prompt + String.fromCharCode(13);

    return export;
  }

  void draw() {
    double x, y, a, xa, ya, xm, ym, xb, yb, xcp, ycp, t, xscreena, yscreena, xscreenb, yscreenb,
        interpolR, interpolG, interpolB, interpolA, interpolPos, dAM, dMB, decalAMB, colorPos, mixratio, prevmix, od, oa;
    int lineWidth, dash;
    bool inCanvas = true;
    bool nextLine = true;
    bool lineInProgress = false;
    bool dashed = false;
    t = 0.0;
    od = 0.0;
    oa = 0.0;
    prevmix = -1.0;

    _ctx2d.clearRect(0, 0, _width, _height);
    _ctx2d.setFillColorRgb(0, 0, 0, 1);
    _ctx2d.rect(0, 0, _width, _height);
    _ctx2d.fill();
    _ctx2d.globalCompositeOperation = "screen";
    // _ctx2d.setLineDash(<int>[0,0]); n'initialiser ce tableau qu'en cas de besoin.

    nbCurves = 0;

    while (t < maxT.value) {
      t += stepT.value *0.5 *(1.0 -gapsRatio.value);
      x = xFormula(t);
      y = yFormula(t);
      if (rotation.value != 0.0) {
        a = atan2(y, x);
        xa = sqrt(x * x + y * y) * cos(a + rotation.value);
        ya = sqrt(x * x + y * y) * sin(a + rotation.value);
      }
      else {
        xa = x;
        ya = y;
      }

      t += stepT.value *0.5 *(gapsRatio.value);
      x = xFormula(t);
      y = yFormula(t);
      if (rotation.value != 0.0) {
        a = atan2(y, x);
        xm = sqrt(x * x + y * y) * cos(a + rotation.value);
        ym = sqrt(x * x + y * y) * sin(a + rotation.value);
      }
      else {
        xm = x;
        ym = y;
      }

      t += stepT.value *0.5 *(gapsRatio.value);
      x = xFormula(t);
      y = yFormula(t);
      if (rotation.value != 0.0) {
        a = atan2(y, x);
        xb = sqrt(x * x + y * y) * cos(a + rotation.value);
        yb = sqrt(x * x + y * y) * sin(a + rotation.value);
      }
      else {
        xb = x;
        yb = y;
      }

      t += stepT.value *0.5 *(1.0 -gapsRatio.value);

      xcp = ((xa+xb)/2) + ((xm-(xa+xb)/2)*bzr.value);
      ycp = ((ya+yb)/2) + ((ym-(ya+yb)/2)*bzr.value);

      dAM = pow(xm-xa, 2).toDouble() + pow(ym-ya, 2).toDouble();
      dMB = pow(xb-xm, 2).toDouble() + pow(yb-ym, 2).toDouble();
      decalAMB = pow(dAM/dMB, 2).toDouble() + pow(dMB/dAM, 2).toDouble(); // this number should be not very different from 2.0, and gets big if split

      xscreena = xScreen(xa);
      yscreena = yScreen(ya);
      xscreenb = xScreen(xb);
      yscreenb = yScreen(yb);

      // the first test is necessary for splitting (decalAMB > 3); but the other tests are not necessary, it's for performance optimisation if many lines are outside the canvas.
      if ((decalAMB > 3.4) || ((xscreena < -_width/2) && (xscreenb < -_width/2))
          || ((xscreena > 3*_width/2) && (xscreenb > 3*_width/2))
          || ((yscreena < -_height/2) && (yscreenb < -_height/2))
          || ((yscreena > 3*_height/2) && (yscreenb > 3*_height/2))) {
        inCanvas = false;
        if (lineInProgress) _ctx2d.stroke();
        nextLine = true;
        lineInProgress = false;
      } else {
        if (t < maxT.value / 2) {
          interpolPos = 2 *t /maxT.value;
          lineWidth = ((lw1.value + (lw2.value - lw1.value) *interpolPos) *_multiplyDimension).ceil();
          dash = ((dash1.value + (dash2.value - dash1.value) *interpolPos) *_multiplyDimension).floor();
        } else {
          interpolPos = (2 *t /maxT.value) -1;
          lineWidth = ((lw2.value + (lw3.value - lw2.value) *interpolPos) *_multiplyDimension).ceil();
          dash = ((dash2.value + (dash3.value - dash2.value) *interpolPos) *_multiplyDimension).floor();
        }

        colorPos = colorPosition(t/maxT.value);

        if (colorPos < pivot.value) {
            mixratio = (gradient.value * colorPos).floorToDouble() / (pivot.value * gradient.value);
            interpolR = c1.r +(c2.r-c1.r) * mixratio;
            interpolG = c1.g +(c2.g-c1.g) * mixratio;
            interpolB = c1.b +(c2.b-c1.b) * mixratio;
        } else {
            mixratio = ((colorPos - pivot.value) * gradient.value).floorToDouble() / ((1.0 - pivot.value) * gradient.value);
            interpolR = c2.r +(c3.r-c2.r) * mixratio;
            interpolG = c2.g +(c3.g-c2.g) * mixratio;
            interpolB = c2.b +(c3.b-c2.b) * mixratio;
        }
        if (dash > 0.0) dashed = true;

        if ((mixratio != prevmix) || (nextLine) || (gapsRatio.value < 0.95) || (gapsRatio.value > 1.1)) {
          if (lineInProgress) _ctx2d.stroke();
          _ctx2d.setStrokeColorRgb(interpolR.toInt(), interpolG.toInt(), interpolB.toInt(), 1.0);
          _ctx2d.lineWidth = lineWidth;
          if (dashed) _ctx2d.setLineDash(<int>[dash,3*dash]);
          prevmix = mixratio;
          nextLine = false;
          _ctx2d.beginPath();
          _ctx2d.moveTo(xscreena, yscreena);
        }
        if (bzr.value == 0.0) _ctx2d.lineTo(xscreenb, yscreenb);
        _ctx2d.quadraticCurveTo(xScreen(xcp), yScreen(ycp), xscreenb, yscreenb);
        lineInProgress = true;
      }
      nbCurves++;
    }
    if (lineInProgress) _ctx2d.stroke();
  }

  void backToInit() {
    int frames = 600;
    if (aParam.value != aParamInit) aParam.tween(AnimateDouble.EASE_IN_OUT, aParamInit, frames);
    if (bParam.value != bParamInit) bParam.tween(AnimateDouble.EASE_IN_OUT, bParamInit, frames);
    if (cParam.value != cParamInit) cParam.tween(AnimateDouble.EASE_IN_OUT, cParamInit, frames);
    if (lw1.value != lwInit) lw1.tween(AnimateDouble.EASE_IN_OUT, lwInit, frames);
    if (lw2.value != lwInit) lw2.tween(AnimateDouble.EASE_IN_OUT, lwInit, frames);
    if (lw3.value != lwInit) lw3.tween(AnimateDouble.EASE_IN_OUT, lwInit, frames);
    if (dash1.value != dashInit) dash1.tween(AnimateDouble.EASE_IN_OUT, dashInit, frames);
    if (dash2.value != dashInit) dash2.tween(AnimateDouble.EASE_IN_OUT, dashInit, frames);
    if (dash3.value != dashInit) dash3.tween(AnimateDouble.EASE_IN_OUT, dashInit, frames);
    if (stepT.value != stepTInit) stepT.tween(AnimateDouble.EASE_IN_OUT, stepTInit, frames);
    if (maxT.value != maxTInit) maxT.tween(AnimateDouble.EASE_IN_OUT, maxTInit, frames);
    if (beginT.value != beginTInit) beginT.tween(AnimateDouble.EASE_IN_OUT, beginTInit, frames);
    if (bzr.value != bzrInit) bzr.tween(AnimateDouble.EASE_IN_OUT, bzrInit, frames);
    if (gapsRatio.value != gapsRatioInit) gapsRatio.tween(AnimateDouble.EASE_IN_OUT, gapsRatioInit, frames);

    if (capsStyle != capsStyleInit) {
      _ctx2d.lineCap = capsStyleInit;
      capsStyle = "selected";
    }

    if ((c1.r != c1rInit) || (c1.g != c1gInit) || (c1.b != c1bInit)) c1.tween(ColorController.EASE_IN_OUT, c1rInit, c1gInit, c1bInit, frames);
    if ((c2.r != c2rInit) || (c2.g != c2gInit) || (c2.b != c2bInit)) c2.tween(ColorController.EASE_IN_OUT, c2rInit, c2gInit, c2bInit, frames);
    if ((c3.r != c3rInit) || (c3.g != c3gInit) || (c3.b != c3bInit)) c3.tween(ColorController.EASE_IN_OUT, c3rInit, c3gInit, c3bInit, frames);

    if (distrib.value != distribInit) distrib.tween(AnimateDouble.EASE_IN_OUT, distribInit, frames);
    if (pivot.value != pivotInit) pivot.tween(AnimateDouble.EASE_IN_OUT, pivotInit, frames);
    if (gradient.value != gradientInit) gradient.tween(AnimateDouble.EASE_IN_OUT, gradientInit, frames);
    if (zoom.value != zoomInit) zoom.tween(AnimateDouble.EASE_IN_OUT, zoomInit, frames);
    if (xOrigine.value != xOrigineInit) xOrigine.tween(AnimateDouble.EASE_IN_OUT, xOrigineInit, frames);
    if (yOrigine.value != yOrigineInit) yOrigine.tween(AnimateDouble.EASE_IN_OUT, yOrigineInit, frames);
    if (rotation.value != rotationInit) rotation.tween(AnimateDouble.EASE_IN_OUT, rotationInit, frames);
    if (splitHnumber.value != splitHnumberInit) splitHnumber.tween(AnimateDouble.EASE_IN_OUT, splitHnumberInit, frames);
    if (splitHwidth.value != splitHwidthInit) splitHwidth.tween(AnimateDouble.EASE_IN_OUT, splitHwidthInit, frames);
    if (splitVnumber.value != splitVnumberInit) splitVnumber.tween(AnimateDouble.EASE_IN_OUT, splitVnumberInit, frames);
    if (splitVheight.value != splitVheightInit) splitVheight.tween(AnimateDouble.EASE_IN_OUT, splitVheightInit, frames);
    if (splitQuinc.value != splitQuincInit) splitQuinc.tween(AnimateDouble.EASE_IN_OUT, splitQuincInit, frames);
    if (flipH.value != flipHInit) flipH.tween(AnimateDouble.EASE_IN_OUT, flipHInit, frames);
    if (flipV.value != flipVInit) flipV.tween(AnimateDouble.EASE_IN_OUT, flipVInit, frames);
    if (explode.value != explodeInit) explode.tween(AnimateDouble.EASE_IN_OUT, explodeInit, frames);

    // if (.value != Init) .tween(AnimateDouble.EASE_IN_OUT, Init, frames);
  }

  String importVars(String impStr) {
    String retMessage = "";
    const splitter = LineSplitter();
    int frames = 600;
    final vars = splitter.convert(impStr);
    if (vars.length == 35) {
      double? aParamTarget = double.tryParse(vars[1]);
      if ((aParamTarget! < aParam.mini) || (aParamTarget > aParam.maxi)) retMessage = "aParam out of range";
      double? bParamTarget = double.tryParse(vars[2]);
      if ((bParamTarget! < bParam.mini) || (bParamTarget > bParam.maxi)) retMessage = "bParam out of range";
      double? cParamTarget = double.tryParse(vars[3]);
      if ((cParamTarget! < cParam.mini) || (cParamTarget > cParam.maxi)) retMessage = "cParam out of range";

      double? beginTTarget = double.tryParse(vars[4]);
      if ((beginTTarget! < beginT.mini) || (beginTTarget > beginT.maxi)) retMessage = "beginT out of range";
      double? maxTTarget = double.tryParse(vars[5]);
      if ((maxTTarget! < maxT.mini) || (maxTTarget > maxT.maxi)) retMessage = "maxT out of range";
      double? stepTTarget = double.tryParse(vars[6]);
      if ((stepTTarget! < stepT.mini) || (stepTTarget > stepT.maxi)) retMessage = "stepT out of range";

      double? lw1Target = double.tryParse(vars[7]);
      if ((lw1Target! < lw1.mini) || (lw1Target > lw1.maxi)) retMessage = "lw1 out of range";
      double? lw2Target = double.tryParse(vars[8]);
      if ((lw2Target! < lw2.mini) || (lw2Target > lw2.maxi)) retMessage = "lw2 out of range";
      double? lw3Target = double.tryParse(vars[9]);
      if ((lw3Target! < lw3.mini) || (lw3Target > lw3.maxi)) retMessage = "lw3 out of range";
      double? dash1Target = double.tryParse(vars[10]);
      if ((dash1Target! < dash1.mini) || (dash1Target > dash1.maxi)) retMessage = "dash1 out of range";
      double? dash2Target = double.tryParse(vars[11]);
      if ((dash2Target! < dash2.mini) || (dash2Target > dash2.maxi)) retMessage = "dash2 out of range";
      double? dash3Target = double.tryParse(vars[12]);
      if ((dash3Target! < dash3.mini) || (dash3Target > dash3.maxi)) retMessage = "dash3 out of range";
      int? c1Target = int.tryParse(vars[13]);
      if ((c1Target! < 0) || (c1Target > 16777216)) retMessage = "c1 out of range";
      int? c2Target = int.tryParse(vars[14]);
      if ((c2Target! < 0) || (c2Target > 16777216)) retMessage = "c2 out of range";
      int? c3Target = int.tryParse(vars[15]);
      if ((c3Target! < 0) || (c3Target > 16777216)) retMessage = "c3 out of range";

      double? gradientTarget = double.tryParse(vars[16]);
      if ((gradientTarget! < gradient.mini) || (gradientTarget > gradient.maxi)) retMessage = "gradient out of range";
      double? pivotTarget = double.tryParse(vars[17]);
      if ((pivotTarget! < pivot.mini) || (pivotTarget > pivot.maxi)) retMessage = "pivot out of range";
      double? distribTarget = double.tryParse(vars[18]);
      if ((distribTarget! < distrib.mini) || (distribTarget > distrib.maxi)) retMessage = "distrib out of range";
      double? bzrTarget = double.tryParse(vars[19]);
      if ((bzrTarget! < bzr.mini) || (bzrTarget > bzr.maxi)) retMessage = "bzr out of range";

      String capsStyleTarget = vars[20];
      if ((capsStyleTarget != "butt") && (capsStyleTarget != "round") && (capsStyleTarget != "square")) retMessage = "capsStyle out of range";

      double? gapsRatioTarget = double.tryParse(vars[21]);
      if ((gapsRatioTarget! < gapsRatio.mini) || (gapsRatioTarget > gapsRatio.maxi)) retMessage = "gapsRatio out of range";
      double? splitHnumberTarget = double.tryParse(vars[22]);
      if ((splitHnumberTarget! < splitHnumber.mini) || (splitHnumberTarget > splitHnumber.maxi)) retMessage = "splitHnumber out of range";
      double? splitHwidthTarget = double.tryParse(vars[23]);
      if ((splitHwidthTarget! < splitHwidth.mini) || (splitHwidthTarget > splitHwidth.maxi)) retMessage = "splitHwidth out of range";
      double? splitVnumberTarget = double.tryParse(vars[24]);
      if ((splitVnumberTarget! < splitVnumber.mini) || (splitVnumberTarget > splitVnumber.maxi)) retMessage = "splitVnumber out of range";
      double? splitVheightTarget = double.tryParse(vars[25]);
      if ((splitVheightTarget! < splitVheight.mini) || (splitVheightTarget > splitVheight.maxi)) retMessage = "splitVheight out of range";
      double? splitQuincTarget = double.tryParse(vars[26]);
      if ((splitQuincTarget! < splitQuinc.mini) || (splitQuincTarget > splitQuinc.maxi)) retMessage = "splitQuinc out of range";
      double? flipHTarget = double.tryParse(vars[27]);
      if ((flipHTarget! < flipH.mini) || (flipHTarget > flipH.maxi)) retMessage = "flipH out of range";
      double? flipVTarget = double.tryParse(vars[28]);
      if ((flipVTarget! < flipV.mini) || (flipVTarget > flipV.maxi)) retMessage = "flipV out of range";
      double? explodeTarget = double.tryParse(vars[29]);
      if ((explodeTarget! < explode.mini) || (explodeTarget > explode.maxi)) retMessage = "explode out of range";

      double? zoomTarget = double.tryParse(vars[30]);
      if ((zoomTarget! < zoom.mini) || (zoomTarget > zoom.maxi)) retMessage = "zoom out of range";
      double? xOrigineTarget = double.tryParse(vars[31]);
      if ((xOrigineTarget! < xOrigine.mini) || (xOrigineTarget > xOrigine.maxi)) retMessage = "xOrigine out of range";
      double? yOrigineTarget = double.tryParse(vars[32]);
      if ((yOrigineTarget! < yOrigine.mini) || (yOrigineTarget > yOrigine.maxi)) retMessage = "yOrigine out of range";
      double? rotationTarget = double.tryParse(vars[33]);
      if ((rotationTarget! < rotation.mini) || (rotationTarget > rotation.maxi)) retMessage = "rotation out of range";

      if (retMessage == "") {
        int l = ((splitHnumberTarget + 1) * splitVnumberTarget).round();
        if (explodeX.length < l) {
          for (int i=explodeX.length; i<l; i++) {
            explodeX.add(2*(Random().nextDouble()-0.5));
            explodeY.add(2*(Random().nextDouble()-0.5));
          }
        }

        if (aParam.value != aParamTarget) aParam.tween(AnimateDouble.EASE_IN_OUT, aParamTarget, frames);
        if (bParam.value != bParamTarget) bParam.tween(AnimateDouble.EASE_IN_OUT, bParamTarget, frames);
        if (cParam.value != cParamTarget) cParam.tween(AnimateDouble.EASE_IN_OUT, cParamTarget, frames);
        if (lw1.value != lw1Target) lw1.tween(AnimateDouble.EASE_IN_OUT, lw1Target, frames);
        if (lw2.value != lw2Target) lw2.tween(AnimateDouble.EASE_IN_OUT, lw2Target, frames);
        if (lw3.value != lw3Target) lw3.tween(AnimateDouble.EASE_IN_OUT, lw3Target, frames);
        if (dash1.value != dash1Target) dash1.tween(AnimateDouble.EASE_IN_OUT, dash1Target, frames);
        if (dash2.value != dash2Target) dash2.tween(AnimateDouble.EASE_IN_OUT, dash2Target, frames);
        if (dash3.value != dash3Target) dash3.tween(AnimateDouble.EASE_IN_OUT, dash3Target, frames);
        if (stepT.value != stepTTarget) stepT.tween(AnimateDouble.EASE_IN_OUT, stepTTarget, frames);
        if (maxT.value != maxTTarget) maxT.tween(AnimateDouble.EASE_IN_OUT, maxTTarget, frames);
        if (beginT.value != beginTTarget) beginT.tween(AnimateDouble.EASE_IN_OUT, beginTTarget, frames);
        if (bzr.value != bzrTarget) bzr.tween(AnimateDouble.EASE_IN_OUT, bzrTarget, frames);
        if (gapsRatio.value != gapsRatioTarget) gapsRatio.tween(AnimateDouble.EASE_IN_OUT, gapsRatioTarget, frames);

        if (capsStyle != capsStyleTarget) {
          _ctx2d.lineCap = capsStyleTarget;
          capsStyle = "selected";
        }

        int c1rTarget = (c1Target >> 16) & 0xFF;
        int c1gTarget = (c1Target >>  8) & 0xFF;
        int c1bTarget = (c1Target >>  0) & 0xFF;
        int c2rTarget = (c2Target >> 16) & 0xFF;
        int c2gTarget = (c2Target >>  8) & 0xFF;
        int c2bTarget = (c2Target >>  0) & 0xFF;
        int c3rTarget = (c3Target >> 16) & 0xFF;
        int c3gTarget = (c3Target >>  8) & 0xFF;
        int c3bTarget = (c3Target >>  0) & 0xFF;

        if ((c1.r != c1rTarget) || (c1.g != c1gTarget) || (c1.b != c1bTarget)) c1.tween(ColorController.EASE_IN_OUT, c1rTarget, c1gTarget, c1bTarget, frames);
        if ((c2.r != c2rTarget) || (c2.g != c2gTarget) || (c2.b != c2bTarget)) c2.tween(ColorController.EASE_IN_OUT, c2rTarget, c2gTarget, c2bTarget, frames);
        if ((c3.r != c3rTarget) || (c3.g != c3gTarget) || (c3.b != c3bTarget)) c3.tween(ColorController.EASE_IN_OUT, c3rTarget, c3gTarget, c3bTarget, frames);

        if (distrib.value != distribTarget) distrib.tween(AnimateDouble.EASE_IN_OUT, distribTarget, frames);
        if (pivot.value != pivotTarget) pivot.tween(AnimateDouble.EASE_IN_OUT, pivotTarget, frames);
        if (gradient.value != gradientTarget) gradient.tween(AnimateDouble.EASE_IN_OUT, gradientTarget, frames);
        if (zoom.value != zoomTarget) zoom.tween(AnimateDouble.EASE_IN_OUT, zoomTarget, frames);
        if (xOrigine.value != xOrigineTarget) xOrigine.tween(AnimateDouble.EASE_IN_OUT, xOrigineTarget, frames);
        if (yOrigine.value != yOrigineTarget) yOrigine.tween(AnimateDouble.EASE_IN_OUT, yOrigineTarget, frames);
        if (rotation.value != rotationTarget) rotation.tween(AnimateDouble.EASE_IN_OUT, rotationTarget, frames);
        if (splitHnumber.value != splitHnumberTarget) splitHnumber.tween(AnimateDouble.EASE_IN_OUT, splitHnumberTarget, frames);
        if (splitHwidth.value != splitHwidthTarget) splitHwidth.tween(AnimateDouble.EASE_IN_OUT, splitHwidthTarget, frames);
        if (splitVnumber.value != splitVnumberTarget) splitVnumber.tween(AnimateDouble.EASE_IN_OUT, splitVnumberTarget, frames);
        if (splitVheight.value != splitVheightTarget) splitVheight.tween(AnimateDouble.EASE_IN_OUT, splitVheightTarget, frames);
        if (splitQuinc.value != splitQuincTarget) splitQuinc.tween(AnimateDouble.EASE_IN_OUT, splitQuincTarget, frames);
        if (flipH.value != flipHTarget) flipH.tween(AnimateDouble.EASE_IN_OUT, flipHTarget, frames);
        if (flipV.value != flipVTarget) flipV.tween(AnimateDouble.EASE_IN_OUT, flipVTarget, frames);
        if (explode.value != explodeTarget) explode.tween(AnimateDouble.EASE_IN_OUT, explodeTarget, frames);

        retMessage = "";
      }
    }
    else retMessage = "wrong import length";
    return retMessage;
  }

  void setEventListener() {
    window.on['aParamUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { aParam.play(AnimateDouble.EXP_UP); } else { aParam.stop(); }
    });
    window.on['aParamDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { aParam.play(AnimateDouble.EXP_DOWN); } else { aParam.stop(); }
    });
    window.on['bParamUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { bParam.play(AnimateDouble.EXP_UP); } else { bParam.stop(); }
    });
    window.on['bParamDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { bParam.play(AnimateDouble.EXP_DOWN); } else { bParam.stop(); }
    });
    window.on['cParamUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { cParam.play(AnimateDouble.EXP_UP); } else { cParam.stop(); }
    });
    window.on['cParamDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { cParam.play(AnimateDouble.EXP_DOWN); } else { cParam.stop(); }
    });

    window.on['beginTUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { beginT.play(AnimateDouble.EXP_UP); } else { beginT.stop(); }
    });
    window.on['beginTDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { beginT.play(AnimateDouble.EXP_DOWN); } else { beginT.stop(); }
    });
    window.on['maxTUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { maxT.play(AnimateDouble.LINEAR_UP); } else { maxT.stop(); }
    });
    window.on['maxTDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { maxT.play(AnimateDouble.LINEAR_DOWN); } else { maxT.stop(); }
    });
    window.on['stepTUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { stepT.play(AnimateDouble.EXP_UP); } else { stepT.stop(); }
    });
    window.on['stepTDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { stepT.play(AnimateDouble.EXP_DOWN); } else { stepT.stop(); }
    });

    window.on['switchLineControlled'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        if (lineControlled == "L1") {
          lineControlled = "L2";
          lw2.play(AnimateDouble.SELECTED);
          lw1.stop();
          lw3.stop(); "";
          dash2.play(AnimateDouble.SELECTED);
          dash1.stop();
          dash3.stop(); "";
        }
        else if (lineControlled == "L2") {
          lineControlled = "L3";
          lw3.play(AnimateDouble.SELECTED);
          lw1.stop();;
          lw2.stop();
          dash3.play(AnimateDouble.SELECTED);
          dash1.stop();;
          dash2.stop();
        }
        else if (lineControlled == "L3") {
          lineControlled = "L_";
          lw1.play(AnimateDouble.SELECTED);
          lw2.play(AnimateDouble.SELECTED);
          lw3.play(AnimateDouble.SELECTED);
          dash1.play(AnimateDouble.SELECTED);
          dash2.play(AnimateDouble.SELECTED);
          dash3.play(AnimateDouble.SELECTED);
        }
        else if (lineControlled == "L_") {
          lineControlled = "L1";
          lw1.play(AnimateDouble.SELECTED);
          lw2.stop();
          lw3.stop();
          dash1.play(AnimateDouble.SELECTED);
          dash2.stop();
          dash3.stop();
        }
      }
      // else {  }
    });
    window.on['lwUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (lineControlled) {
          case "L1" : lw1.play(AnimateDouble.LINEAR_UP); break;
          case "L2" : lw2.play(AnimateDouble.LINEAR_UP); break;
          case "L3" : lw3.play(AnimateDouble.LINEAR_UP); break;
          case "L_" : lw1.play(AnimateDouble.LINEAR_UP);
                      lw2.play(AnimateDouble.LINEAR_UP);
                      lw3.play(AnimateDouble.LINEAR_UP);
                      break;
        }
      }
      else {
        switch (lineControlled) {
          case "L1": lw1.stop(); break;
          case "L2": lw2.stop(); break;
          case "L3": lw3.stop(); break;
          case "L_": lw1.stop();
                    lw2.stop();
                    lw3.stop();
                    break;
        }
      }
    });
    window.on['lwDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (lineControlled) {
          case "L1" : lw1.play(AnimateDouble.LINEAR_DOWN); break;
          case "L2" : lw2.play(AnimateDouble.LINEAR_DOWN); break;
          case "L3" : lw3.play(AnimateDouble.LINEAR_DOWN); break;
          case "L_" : lw1.play(AnimateDouble.LINEAR_DOWN);
          lw2.play(AnimateDouble.LINEAR_DOWN);
          lw3.play(AnimateDouble.LINEAR_DOWN);
          break;
        }
      }
      else {
        switch (lineControlled) {
          case "L1": lw1.stop(); break;
          case "L2": lw2.stop(); break;
          case "L3": lw3.stop(); break;
          case "L_": lw1.stop();
          lw2.stop();
          lw3.stop();
          break;
        }
      }
    });
    window.on['dashedUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (lineControlled) {
          case "L1" : dash1.play(AnimateDouble.LINEAR_UP); break;
          case "L2" : dash2.play(AnimateDouble.LINEAR_UP); break;
          case "L3" : dash3.play(AnimateDouble.LINEAR_UP); break;
          case "L_" : dash1.play(AnimateDouble.LINEAR_UP);
          dash2.play(AnimateDouble.LINEAR_UP);
          dash3.play(AnimateDouble.LINEAR_UP);
          break;
        }
      }
      else {
        switch (lineControlled) {
          case "L1": dash1.stop(); break;
          case "L2": dash2.stop(); break;
          case "L3": dash3.stop(); break;
          case "L_": dash1.stop();
          dash2.stop();
          dash3.stop();
          break;
        }
      }
    });
    window.on['dashedDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (lineControlled) {
          case "L1" : dash1.play(AnimateDouble.LINEAR_DOWN); break;
          case "L2" : dash2.play(AnimateDouble.LINEAR_DOWN); break;
          case "L3" : dash3.play(AnimateDouble.LINEAR_DOWN); break;
          case "L_" : dash1.play(AnimateDouble.LINEAR_DOWN);
          dash2.play(AnimateDouble.LINEAR_DOWN);
          dash3.play(AnimateDouble.LINEAR_DOWN);
          break;
        }
      }
      else {
        switch (lineControlled) {
          case "L1": dash1.stop(); break;
          case "L2": dash2.stop(); break;
          case "L3": dash3.stop(); break;
          case "L_": dash1.stop();
          dash2.stop();
          dash3.stop();
          break;
        }
      }
    });

    window.on['switchColorControlled'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        if (colorControlled == "C1") {
          colorControlled = "C2";
          c2.mode = ColorController.SELECTED;
          c1.mode = "";
          c3.mode = "";
        }
        else if (colorControlled == "C2") {
          colorControlled = "C3";
          c3.mode = ColorController.SELECTED;
          c1.mode = "";
          c2.mode = "";
        }
        else if (colorControlled == "C3") {
          colorControlled = "C_";
          c1.mode = ColorController.SELECTED;
          c2.mode = ColorController.SELECTED;
          c3.mode = ColorController.SELECTED;
        }
        else if (colorControlled == "C_") {
          colorControlled = "C1";
          c1.mode = ColorController.SELECTED;
          c2.mode = "";
          c3.mode = "";
        }
      }
      // else {  }
    });
    window.on['colorHueLeft'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (colorControlled) {
          case "C1" : c1.mode = ColorController.HUE_UP; break;
          case "C2" : c2.mode = ColorController.HUE_UP; break;
          case "C3" : c3.mode = ColorController.HUE_UP; break;
          case "C_" : c3.mode = ColorController.HUE_UP;
                      c2.mode = ColorController.HUE_UP;
                      c1.mode = ColorController.HUE_UP;
                      break;
        }
      }
      else {
        switch (colorControlled) {
          case "C1" : c1.mode = ""; break;
          case "C2" : c2.mode = ""; break;
          case "C3" : c3.mode = ""; break;
          case "C_" : c3.mode = ""; c2.mode = ""; c1.mode = ""; break;
        }
      }
    });
    window.on['colorHueRight'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (colorControlled) {
          case "C1" : c1.mode = ColorController.HUE_DOWN; break;
          case "C2" : c2.mode = ColorController.HUE_DOWN; break;
          case "C3" : c3.mode = ColorController.HUE_DOWN; break;
          case "C_" : c3.mode = ColorController.HUE_DOWN;
          c2.mode = ColorController.HUE_DOWN;
          c1.mode = ColorController.HUE_DOWN;
          break;
        }
      }
      else {
        switch (colorControlled) {
          case "C1" : c1.mode = ""; break;
          case "C2" : c2.mode = ""; break;
          case "C3" : c3.mode = ""; break;
          case "C_" : c3.mode = ""; c2.mode = ""; c1.mode = ""; break;
        }
      }
    });
    window.on['colorSatUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (colorControlled) {
          case "C1" : c1.mode = ColorController.SATURATION_UP; break;
          case "C2" : c2.mode = ColorController.SATURATION_UP; break;
          case "C3" : c3.mode = ColorController.SATURATION_UP; break;
          case "C_" : c3.mode = ColorController.SATURATION_UP;
          c2.mode = ColorController.SATURATION_UP;
          c1.mode = ColorController.SATURATION_UP;
          break;
        }
      }
      else {
        switch (colorControlled) {
          case "C1" : c1.mode = ""; break;
          case "C2" : c2.mode = ""; break;
          case "C3" : c3.mode = ""; break;
          case "C_" : c3.mode = ""; c2.mode = ""; c1.mode = ""; break;
        }
      }
    });
    window.on['colorSatDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (colorControlled) {
          case "C1" : c1.mode = ColorController.SATURATION_DOWN; break;
          case "C2" : c2.mode = ColorController.SATURATION_DOWN; break;
          case "C3" : c3.mode = ColorController.SATURATION_DOWN; break;
          case "C_" : c3.mode = ColorController.SATURATION_DOWN;
          c2.mode = ColorController.SATURATION_DOWN;
          c1.mode = ColorController.SATURATION_DOWN;
          break;
        }
      }
      else {
        switch (colorControlled) {
          case "C1" : c1.mode = ""; break;
          case "C2" : c2.mode = ""; break;
          case "C3" : c3.mode = ""; break;
          case "C_" : c3.mode = ""; c2.mode = ""; c1.mode = ""; break;
        }
      }
    });
    window.on['colorLightUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (colorControlled) {
          case "C1" : c1.mode = ColorController.LIGHTNESS_UP; break;
          case "C2" : c2.mode = ColorController.LIGHTNESS_UP; break;
          case "C3" : c3.mode = ColorController.LIGHTNESS_UP; break;
          case "C_" : c3.mode = ColorController.LIGHTNESS_UP;
          c2.mode = ColorController.LIGHTNESS_UP;
          c1.mode = ColorController.LIGHTNESS_UP;
          break;
        }
      }
      else {
        switch (colorControlled) {
          case "C1" : c1.mode = ""; break;
          case "C2" : c2.mode = ""; break;
          case "C3" : c3.mode = ""; break;
          case "C_" : c3.mode = ""; c2.mode = ""; c1.mode = ""; break;
        }
      }
    });
    window.on['colorLightDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        switch (colorControlled) {
          case "C1" : c1.mode = ColorController.LIGHTNESS_DOWN; break;
          case "C2" : c2.mode = ColorController.LIGHTNESS_DOWN; break;
          case "C3" : c3.mode = ColorController.LIGHTNESS_DOWN; break;
          case "C_" : c3.mode = ColorController.LIGHTNESS_DOWN;
          c2.mode = ColorController.LIGHTNESS_DOWN;
          c1.mode = ColorController.LIGHTNESS_DOWN;
          break;
        }
      }
      else {
        switch (colorControlled) {
          case "C1" : c1.mode = ""; break;
          case "C2" : c2.mode = ""; break;
          case "C3" : c3.mode = ""; break;
          case "C_" : c3.mode = ""; c2.mode = ""; c1.mode = ""; break;
        }
      }
    });

    window.on['pivotRight'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { pivot.play(AnimateDouble.LINEAR_UP); } else { pivot.stop(); }
    });
    window.on['pivotLeft'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { pivot.play(AnimateDouble.LINEAR_DOWN); } else { pivot.stop(); }
    });
    window.on['gradientUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { gradient.play(AnimateDouble.LINEAR_UP); } else { gradient.stop(); }
    });
    window.on['gradientDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { gradient.play(AnimateDouble.LINEAR_DOWN); } else { gradient.stop(); }
    });
    window.on['distribUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { distrib.play(AnimateDouble.EXP_UP); } else { distrib.stop(); }
    });
    window.on['distribDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { distrib.play(AnimateDouble.EXP_DOWN); } else { distrib.stop(); }
    });

    window.on['lineCurve'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { bzr.tween(AnimateDouble.EASE_IN_OUT, bzrInit, 30); }
    });
    window.on['lineStrait'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { bzr.tween(AnimateDouble.EASE_IN_OUT, 0.0, 30); }
    });
    window.on['capsRound'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { _ctx2d.lineCap = "round"; capsStyle = "selected"; }
    });
    window.on['capsSquare'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { _ctx2d.lineCap = "square"; capsStyle = "selected"; }
    });
    window.on['capsButt'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { _ctx2d.lineCap = "butt"; capsStyle = "selected"; }
    });
    window.on['gapsLess'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { gapsRatio.play(AnimateDouble.LINEAR_UP); } else { gapsRatio.stop(); }
    });
    window.on['gapsMore'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { gapsRatio.play(AnimateDouble.LINEAR_DOWN); } else { gapsRatio.stop(); }
    });

    window.on['splitHorzUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        int l = ((splitHnumber.value + 1) * splitVnumber.value).round();
        if (explodeX.length < l) {
            for (int i=explodeX.length+1; i<=l; i++) {
                explodeX.add(2*(Random().nextDouble()-0.5));
                explodeY.add(2*(Random().nextDouble()-0.5));
            }
        }
        splitHnumber.tween(AnimateDouble.EASE_IN_OUT, splitHnumber.value + 1, 30);
      }
    });
    window.on['splitHorzDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { splitHnumber.tween(AnimateDouble.EASE_IN_OUT, splitHnumber.value - 1, 30); }
    });
    window.on['splitVertUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        int l = (splitHnumber.value * (splitVnumber.value +1)).round();
        if (explodeX.length < l) {
          for (int i=explodeX.length+1; i<=l; i++) {
            explodeX.add(2*(Random().nextDouble()-0.5));
            explodeY.add(2*(Random().nextDouble()-0.5));
          }
        }
        splitVnumber.tween(AnimateDouble.EASE_IN_OUT, splitVnumber.value + 1, 30);
      }
    });
    window.on['splitVertDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { splitVnumber.tween(AnimateDouble.EASE_IN_OUT, splitVnumber.value - 1, 30); }
    });
    window.on['splitWidthUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if ((e.detail) && (splitHnumber.value > 1.0)) { splitHwidth.play(AnimateDouble.LINEAR_UP); } else { splitHwidth.stop(); }
    });
    window.on['splitWidthDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if ((e.detail) && (splitHnumber.value > 1.0)) { splitHwidth.play(AnimateDouble.LINEAR_DOWN); } else { splitHwidth.stop(); }
    });
    window.on['splitHeightUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if ((e.detail) && (splitVnumber.value > 1.0)) { splitVheight.play(AnimateDouble.LINEAR_UP); } else { splitVheight.stop(); }
    });
    window.on['splitHeightDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if ((e.detail)  && (splitVnumber.value > 1.0)) { splitVheight.play(AnimateDouble.LINEAR_DOWN); } else { splitVheight.stop(); }
    });
    window.on['splitQuincSet'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        if (splitQuinc.value != splitQuincInit) { splitQuinc.tween(AnimateDouble.EASE_IN_OUT, splitQuincInit, 30); }
        else { splitQuinc.tween(AnimateDouble.EASE_IN_OUT, 1.0, 30); }
      }
    });

    window.on['zoomUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { zoom.play(AnimateDouble.LINEAR_UP); } else { zoom.stop(); }
    });
    window.on['zoomDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { zoom.play(AnimateDouble.LINEAR_DOWN); } else { zoom.stop(); }
    });
    window.on['panLeft'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        xOrigine.play(AnimateDouble.EXP_UP);
      }
      else {
        xOrigine.stop();
        yOrigine.stop();
      }
    });
    window.on['panUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        yOrigine.play(AnimateDouble.EXP_UP);
      }
      else {
        xOrigine.stop();
        yOrigine.stop();
      }
    });
    window.on['panRight'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        xOrigine.play(AnimateDouble.EXP_DOWN);
      }
      else {
        xOrigine.stop();
        yOrigine.stop();
      }
    });
    window.on['panDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        yOrigine.play(AnimateDouble.EXP_DOWN);
      }
      else {
        xOrigine.stop();
        yOrigine.stop();
      }
    });
    window.on['rotLeft'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { rotation.play(AnimateDouble.LINEAR_DOWN); } else { rotation.stop(); }
    });
    window.on['rotRight'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { rotation.play(AnimateDouble.LINEAR_UP); } else { rotation.stop(); }
    });

    window.on['flipH'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        if (flipH.value == 1.0) { flipH.tween(AnimateDouble.EASE_IN_OUT, -1.0, 30); }
        else { flipH.tween(AnimateDouble.EASE_IN_OUT, 1.0, 30); }
      }
    });
    window.on['flipV'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        if (flipV.value == 1.0) { flipV.tween(AnimateDouble.EASE_IN_OUT, -1.0, 30); }
        else { flipV.tween(AnimateDouble.EASE_IN_OUT, 1.0, 30); }
      }
    });
    window.on['explodeUp'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { explode.play(AnimateDouble.EXP_UP); } else { explode.stop(); }
    });
    window.on['explodeDown'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) { explode.play(AnimateDouble.EXP_DOWN); } else { explode.stop(); }
    });
    window.on['center'].listen((event) {
      CustomEvent e = event as CustomEvent;
      if (e.detail) {
        xOrigine.tween(AnimateDouble.EASE_IN_OUT, xOrigineInit, 30);
        yOrigine.tween(AnimateDouble.EASE_IN_OUT, yOrigineInit, 30);
      }
    });
  }



  String get stringify => _canvas.toDataUrl('image/jpeg', 0.92);
  int get width => _width;
  int get height => _height;
  String get dimension {
    String dim = "";
    switch (_width) {
      case 427: dim = "LD"; break;
      case 640: dim = "MD"; break;
      case 854: dim = "SD"; break;
      case 1280: dim = "HD"; break;
      case 1920: dim = "FHD"; break;
      case 3840: dim = "UHD"; break;
      default: dim = "?";
    }
    return dim;
  }
}