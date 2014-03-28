part of beziercurvesbigcircus;

class BezierCanvas
{
  BcbcApp bcbcApp;
  CanvasElement canvas;
  CanvasRenderingContext2D ctx2d;
  int maxWidth;
  int maxHeight;
  int centerX;
  int centerY;
  int scaleX;
  int scaleY;
  
  int nbCurves;
  bool isUpdatingSomething;

  AnimateDouble aParam;
  AnimateDouble bParam;
  AnimateDouble cParam;
  AnimateDouble stp;
  AnimateDouble maxT;
  AnimateDouble beginT;
  AnimateDouble bzr;
  AnimateDouble dashedRatio;
  
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
  
  AnimateDouble zoom;
  AnimateDouble xOrigine;
  AnimateDouble yOrigine;
  
  AnimateDouble splitHnumber;
  AnimateDouble splitHwidth;
  AnimateDouble splitVnumber;
  AnimateDouble splitVheight;
  
  final aParamInit = 0.0;
  final bParamInit = 1.0;
  final cParamInit = 1.0;
  final lw1Init = 20.0;
  final lw2Init = 20.0;
  final lw3Init = 20.0;
  final stpInit = 1.0;
  final maxTInit = 70.0;
  final beginTInit = 0.0;
  final bzrInit = 0.65;
  final dashedRatioInit = 1.0;
  final c1rInit = 23.0;
  final c1gInit = 110.0;
  final c1bInit = 239.0;
  final c2rInit = 211.0;
  final c2gInit = 62.0;
  final c2bInit = 42.0;
  final c3rInit = 255.0;
  final c3gInit = 187.0;
  final c3bInit = 3.0;
  final colorDistributionInit = "interpol";
  final zoomInit = 1.0;
  final xOrigineInit = 0.0;
  final yOrigineInit = 0.0;
  final splitHnumberInit = 1.0;
  final splitHwidthInit = 1.0;
  final splitVnumberInit = 1.0;
  final splitVheightInit = 1.0;
  
  num renderTime;
  
  
  
  Timer backToInitTimer;
  
  BezierCanvas(this.canvas, this.bcbcApp) {
    ctx2d = canvas.context2D;
    
    maxWidth = bcbcApp.maxWidth;
    maxHeight = bcbcApp.maxHeight;
    centerX = bcbcApp.centerX;
    centerY = bcbcApp.centerY;
    scaleX = bcbcApp.scaleX;
    scaleY = bcbcApp.scaleY;
    
    aParam = new AnimateDouble(aParamInit, 0.0, 10.0);
    bParam = new AnimateDouble(bParamInit, 0.0, 10.0);
    cParam = new AnimateDouble(cParamInit, 0.0, 2.0);
    
    lw1 = new AnimateDouble(lw1Init, 1.0, 500.0);
    lw2 = new AnimateDouble(lw2Init, 1.0, 500.0);
    lw3 = new AnimateDouble(lw3Init, 1.0, 500.0);
    
    stp = new AnimateDouble(stpInit, 0.2, 20.0);
    maxT = new AnimateDouble(maxTInit, 0.0, 1000.0);
    beginT = new AnimateDouble(beginTInit, 0.0, 100.0);
    bzr = new AnimateDouble(bzrInit, 0.0, 0.65);
    dashedRatio = new AnimateDouble(dashedRatioInit, 0.0, 1.0);
    
    c1r = new AnimateDouble(c1rInit, 0.0, 255.0);
    c1g = new AnimateDouble(c1gInit, 0.0, 255.0);
    c1b = new AnimateDouble(c1bInit, 0.0, 255.0);
    c1 = new ColorController(c1r.valueInt, c1g.valueInt, c1b.valueInt);
    
    c2r = new AnimateDouble(c2rInit, 0.0, 255.0);
    c2g = new AnimateDouble(c2gInit, 0.0, 255.0);
    c2b = new AnimateDouble(c2bInit, 0.0, 255.0);
    c2 = new ColorController(c2r.valueInt, c2g.valueInt, c2b.valueInt);
    
    c3r = new AnimateDouble(c3rInit, 0.0, 255.0);
    c3g = new AnimateDouble(c3gInit, 0.0, 255.0);
    c3b = new AnimateDouble(c3bInit, 0.0, 255.0);
    c3 = new ColorController(c3r.valueInt, c3g.valueInt, c3b.valueInt);
    
    colorControlled = "c1";
    colorDistribution = colorDistributionInit;
    
    zoom = new AnimateDouble(zoomInit, 0.0, 15.0);
    xOrigine = new AnimateDouble(xOrigineInit, -1.8*bcbcApp.maxWidth, 1.8*bcbcApp.maxWidth);
    yOrigine = new AnimateDouble(yOrigineInit, -1.8*bcbcApp.maxHeight, 1.8*bcbcApp.maxHeight);
    
    splitHnumber = new AnimateDouble(splitHnumberInit, 1.0, 50.0);
    splitHwidth = new AnimateDouble(splitHwidthInit, 0.0, 50.0);
    splitVnumber = new AnimateDouble(splitVnumberInit, 1.0, 50.0);
    splitVheight = new AnimateDouble(splitVheightInit, 0.0, 50.0);
  }
  
  
  void start() {
    requestRedraw();
  }
  

  
  void draw(num _) {
    double xa, ya, xm, ym, xb, yb, xcpa, ycpa, xcpb, ycpb, t, xscreena, yscreena, xscreenb, yscreenb , interpolR, interpolG, interpolB, interpolA, interpolPos, dAM, dMB, decalAMB;
    t = 0.0;
    var inCanvas = true;
    
    num time = new DateTime.now().millisecondsSinceEpoch;
    if (renderTime != null) showFps(1000 / (time - renderTime));
    renderTime = time;
    
    
 
    updateVariables();
    
    
    ctx2d.clearRect(0, 0, maxWidth, maxHeight);
    ctx2d.setFillColorRgb(0, 0, 0, 1);
    ctx2d.rect(0, 0, maxWidth, maxHeight);
    ctx2d.fill();
    ctx2d.globalCompositeOperation = "screen";
    ctx2d.lineWidth = lw1.valueInt;
    ctx2d.setStrokeColorHsl(0, 0, 50, 1);
    nbCurves = 0;
    
    while (t < maxT.value) {
      t += stp.value *0.5 *(1.0 -dashedRatio.value);
      xa = xFormula(t);
      ya = yFormula(t);
      t += stp.value *0.5 *(dashedRatio.value);
      xm = xFormula(t);
      ym = yFormula(t);
      t += stp.value *0.5 *(dashedRatio.value);
      xb = xFormula(t);
      yb = yFormula(t);
      t += stp.value *0.5 *(1.0 -dashedRatio.value);
      
      xcpa = xa + (((xa+xb)/2 + 2.2*(xm-(xa+xb)/2)) - xa)*bzr.value;
      ycpa = ya + (((ya+yb)/2 + 2.2*(ym-(ya+yb)/2)) - ya)*bzr.value;
      
      xcpb = xb - (xb - ((xa+xb)/2 + 2.2*(xm-(xa+xb)/2)))*bzr.value;
      ycpb = yb - (yb - ((ya+yb)/2 + 2.2*(ym-(ya+yb)/2)))*bzr.value;
      
      dAM = pow(xm-xa, 2) + pow(ym-ya, 2);
      dMB = pow(xb-xm, 2) + pow(yb-ym, 2);
      decalAMB = pow(dAM/dMB, 2) + pow(dMB/dAM, 2); // this number should be not very different from 2.0, and gets big if split
      
      xscreena = xScreen(xa);
      yscreena = yScreen(ya);
      xscreenb = xScreen(xb);
      yscreenb = yScreen(yb);
      
      // the first test is necessary for splitting (decalAMB > 3); but the other tests are not necessary, it's for performance optimisation if many lines are outside the canvas.
      if ((decalAMB > 3) || ((xscreena < 0) && (xscreenb < 0)) || ((xscreena > maxWidth) && (xscreenb > maxWidth)) || ((yscreena < 0) && (yscreenb < 0)) || ((yscreena > maxHeight) && (yscreenb > maxHeight))) {
        inCanvas = false;
      } else {
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
        else if (colorDistribution == "interpol") {
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
        else if (colorDistribution == "max1min3") {
          if ((t + beginT.value).floor() % 18 == 0) ctx2d.setStrokeColorRgb(c3r.valueInt, c3g.valueInt, c3b.valueInt, c3a);
          else if ((t + beginT.value).floor() % 5 == 0) ctx2d.setStrokeColorRgb(c2r.valueInt, c2g.valueInt, c2b.valueInt, c2a);
          else ctx2d.setStrokeColorRgb(c1r.valueInt, c1g.valueInt, c1b.valueInt, c1a);
        }
        
        ctx2d.beginPath();
        ctx2d.moveTo(xscreena, yscreena);
        ctx2d.bezierCurveTo(xScreen(xcpa), yScreen(ycpa), xScreen(xcpb), yScreen(ycpb), xscreenb, yscreenb);
        ctx2d.stroke();
      }
      nbCurves++;
    }
    
    requestRedraw();
  }
  
  void requestRedraw() {
      window.requestAnimationFrame(draw);
  }
  
  
  
  
  
  
  
  void updateVariables() {
    var promptStr = "";
    isUpdatingSomething = false;
    
    if (fpsAverage < 50) {
      //if (maxT.valueTarget != null) print(maxT.valueTarget.toString() + " " + maxT.value.toString() + " " + maxT.mode);
      
      if ((maxT.mode == AnimateDouble.LINEAR_DOWN) || ((maxT.valueTarget != null) && (maxT.value > maxT.valueTarget)))  {
        maxT.update(); 
        isUpdatingSomething = true;
      } 
      
      if ((stp.mode == AnimateDouble.EXP_UP) || ((stp.valueTarget != null) && (stp.value < stp.valueTarget))) {
        stp.update(); 
        isUpdatingSomething = true;
      } 
      
      // with bigger lines it makes more pixel to draw, and then there is a lack of FPS, should minimise lw.
      if ((lw1.mode == AnimateDouble.LINEAR_DOWN) || ((lw1.valueTarget != null) && (lw1.value > lw1.valueTarget))) {
        lw1.update();
        isUpdatingSomething = true;
      }
      
      if ((lw2.mode == AnimateDouble.LINEAR_DOWN) || ((lw2.valueTarget != null) && (lw2.value > lw2.valueTarget))) {
        lw2.update();
        isUpdatingSomething = true;
      }
      
      if ((lw3.mode == AnimateDouble.LINEAR_DOWN) || ((lw3.valueTarget != null) && (lw3.value > lw3.valueTarget))) {
        lw3.update();
        isUpdatingSomething = true;
      }
      
      // with zoom out more curves may appear on the screen, then fps may shut down, so it's necessary to minilise maxT
      if ((zoom.mode == AnimateDouble.LINEAR_DOWN) || ((zoom.valueTarget != null) && (zoom.value > zoom.valueTarget))) {
        maxT.value = maxT.value * 0.8;
      }
      
    } else {
      if (maxT.mode != "") {
        maxT.update(); 
        isUpdatingSomething = true;
      }
      
      if (stp.mode != "") {
        stp.update(); 
        isUpdatingSomething = true;
      }
      
      if (lw1.mode != "") {
        lw1.update();
        isUpdatingSomething = true;
      }
      
      if (lw2.mode != "") {
        lw2.update();
        isUpdatingSomething = true;
      }
      
      if (lw3.mode != "") {
        lw3.update();
        isUpdatingSomething = true;
      }
    }
    
    if (beginT.mode != "") {
      beginT.update(); 
      if (beginT.value > 0.99 * beginT.maxi) beginT.value = 0.04 *beginT.mini;
      else if (beginT.value < 0.03 * beginT.mini) beginT.value = 0.98 *beginT.maxi;
      isUpdatingSomething = true;
    }
    
    
    
    if (bzr.mode != "") {
      bzr.update();
      isUpdatingSomething = true;
    }
    
    
    if (aParam.mode != "") {
      aParam.update();
      isUpdatingSomething = true;
    }
    
    if (bParam.mode != "") {
      bParam.update();
      isUpdatingSomething = true;
    }
    
    if (cParam.mode != "") {
      cParam.update();
      isUpdatingSomething = true;
    }
    
    if (dashedRatio.mode != "") {
      dashedRatio.update();
      isUpdatingSomething = true;
    }
    
    if (c1.mode == ColorController.BACK_TO_INIT) {
      c1r.update();
      c1g.update();
      c1b.update();
      c1.r = c1r.valueInt;
      c1.g = c1g.valueInt;
      c1.b = c1b.valueInt;
      c1.synchroniseFromRgb();
      isUpdatingSomething = true;
    } else if (c1.mode != "") {
      c1.update();
      c1r.value = c1.r.toDouble();
      c1g.value = c1.g.toDouble();
      c1b.value = c1.b.toDouble();
      bcbcApp.updateColorPicker(c1.h, c1.s, c1.l);
      isUpdatingSomething = true;
      bcbcApp.varToPrompt = "";
    }
    
    if (c2.mode == ColorController.BACK_TO_INIT) {
      c2r.update();
      c2g.update();
      c2b.update();
      c2.r = c2r.valueInt;
      c2.g = c2g.valueInt;
      c2.b = c2b.valueInt;
      c2.synchroniseFromRgb();
      isUpdatingSomething = true;
    } else if (c2.mode != "") {
      c2.update();
      c2r.value = c2.r.toDouble();
      c2g.value = c2.g.toDouble();
      c2b.value = c2.b.toDouble();
      bcbcApp.updateColorPicker(c2.h, c2.s, c2.l);
      isUpdatingSomething = true;
      bcbcApp.varToPrompt = "";
    }
    
    if (c3.mode == ColorController.BACK_TO_INIT) {
      c3r.update();
      c3g.update();
      c3b.update();
      c3.r = c3r.valueInt;
      c3.g = c3g.valueInt;
      c3.b = c3b.valueInt;
      c3.synchroniseFromRgb();
      isUpdatingSomething = true;
    } else if (c3.mode != "") {
      c3.update();
      c3r.value = c3.r.toDouble();
      c3g.value = c3.g.toDouble();
      c3b.value = c3.b.toDouble();
      bcbcApp.updateColorPicker(c3.h, c3.s, c3.l);
      isUpdatingSomething = true;
      bcbcApp.varToPrompt = "";
    }
    
    if (zoom.mode != "") {
      var dx = xOrigine.value;
      var dy = yOrigine.value;
      var z = zoom.value;
      zoom.update();
      var dz = zoom.value/z;
      xOrigine.value = xOrigine.value + dx *(dz -1);
      yOrigine.value = yOrigine.value + dy *(dz -1);
      isUpdatingSomething = true;
    }
    
    if (xOrigine.mode != "") {
      xOrigine.update();
      isUpdatingSomething = true;
    }
    
    if (yOrigine.mode != "") {
      yOrigine.update();
      isUpdatingSomething = true;
    }
    
    if (splitHnumber.mode != "") {
      splitHnumber.update();
      isUpdatingSomething = true;
    }
    
    if (splitHwidth.mode != "") {
      splitHwidth.update();
      isUpdatingSomething = true;
    }
    
    if (splitVnumber.mode != "") {
      splitVnumber.update();
      isUpdatingSomething = true;
    }
    
    if (splitVheight.mode != "") {
      splitVheight.update();
      isUpdatingSomething = true;
    }
    
    if (isUpdatingSomething) {
      if ((backToInitTimer != null) && (backToInitTimer.isActive)) backToInitTimer.cancel();
      switch (bcbcApp.varToPrompt) {
        case "maxT" : promptStr = "maxT : ${maxT.valueInt.toString()}";
                      bcbcApp.updateVarprompt(promptStr); break;
        case "stp" : promptStr = "stp : ${stp.valueDigit2.toString()}";
                      bcbcApp.updateVarprompt(promptStr); break;
        case "aParam" : promptStr = "aParam : ${aParam.valueDigit2.toString()}";
                      bcbcApp.updateVarprompt(promptStr); break;
        case "bParam" : promptStr = "bParam : ${bParam.valueDigit2.toString()}";
                      bcbcApp.updateVarprompt(promptStr); break;
        case "cParam" : promptStr = "cParam : ${cParam.valueDigit2.toString()}";
                              bcbcApp.updateVarprompt(promptStr); break;
      }
    } else {
      if ((backToInitTimer == null) || (!backToInitTimer.isActive)) backToInitTimer = new Timer(const Duration(seconds: 60), () => backToInit());
    }
    
  }
  
  
  void backToInit() {
    print("backToInit");
    
    if (aParam.value != aParamInit) aParam.tween(AnimateDouble.EASE_IN_OUT, aParamInit, 600);
    if (bParam.value != bParamInit) bParam.tween(AnimateDouble.EASE_IN_OUT, bParamInit, 600);
    if (cParam.value != cParamInit) cParam.tween(AnimateDouble.EASE_IN_OUT, cParamInit, 600);
    if (lw1.value != lw1Init) lw1.tween(AnimateDouble.EASE_IN_OUT, lw1Init, 600);
    if (lw2.value != lw2Init) lw2.tween(AnimateDouble.EASE_IN_OUT, lw2Init, 600);
    if (lw3.value != lw3Init) lw3.tween(AnimateDouble.EASE_IN_OUT, lw3Init, 600);
    if (stp.value != stpInit) stp.tween(AnimateDouble.EASE_IN_OUT, stpInit, 600);
    if (maxT.value != maxTInit) maxT.tween(AnimateDouble.EASE_IN_OUT, maxTInit, 600);
    if (beginT.value != beginTInit) beginT.tween(AnimateDouble.EASE_IN_OUT, beginTInit, 600);
    if (dashedRatio.value != dashedRatioInit) dashedRatio.tween(AnimateDouble.EASE_IN_OUT,  dashedRatioInit, 600);

    if (c1r.value != c1rInit) {
      c1r.tween(AnimateDouble.EASE_IN_OUT, c1rInit, 600);
      c1.mode = ColorController.BACK_TO_INIT;
    }
    if (c1g.value != c1gInit) {
      c1g.tween(AnimateDouble.EASE_IN_OUT, c1gInit, 600);
      c1.mode = ColorController.BACK_TO_INIT;
    }
    if (c1b.value != c1bInit) {
      c1b.tween(AnimateDouble.EASE_IN_OUT, c1bInit, 600);
      c1.mode = ColorController.BACK_TO_INIT;
    }
    if (c2r.value != c2rInit) {
      c2r.tween(AnimateDouble.EASE_IN_OUT, c2rInit, 600);
      c2.mode = ColorController.BACK_TO_INIT;
    }
    if (c2g.value != c2gInit) {
      c2g.tween(AnimateDouble.EASE_IN_OUT, c2gInit, 600);
      c2.mode = ColorController.BACK_TO_INIT;
    }
    if (c2b.value != c2bInit) {
      c2b.tween(AnimateDouble.EASE_IN_OUT, c2bInit, 600);
      c2.mode = ColorController.BACK_TO_INIT;
    }
    if (c3r.value != c3rInit) {
      c3r.tween(AnimateDouble.EASE_IN_OUT, c3rInit, 600);
      c3.mode = ColorController.BACK_TO_INIT;
    }
    if (c3g.value != c3gInit) {
      c3g.tween(AnimateDouble.EASE_IN_OUT, c3gInit, 600);
      c3.mode = ColorController.BACK_TO_INIT;
    }
    if (c3b.value != c3bInit) {
      c3b.tween(AnimateDouble.EASE_IN_OUT, c3bInit, 600);
      c3.mode = ColorController.BACK_TO_INIT;
    }
    
    if (zoom.value != zoomInit) zoom.tween(AnimateDouble.EASE_IN_OUT, zoomInit, 600);
    if (xOrigine.value != xOrigineInit) xOrigine.tween(AnimateDouble.EASE_IN_OUT, xOrigineInit, 600);
    if (yOrigine.value != yOrigineInit) yOrigine.tween(AnimateDouble.EASE_IN_OUT, yOrigineInit, 600);
    if (splitHnumber.value != splitHnumberInit) splitHnumber.tween(AnimateDouble.EASE_IN_OUT, splitHnumberInit, 600);
    if (splitHwidth.value != splitHwidthInit) splitHwidth.tween(AnimateDouble.EASE_IN_OUT, splitHwidthInit, 600);
    if (splitVnumber.value != splitVnumberInit) splitVnumber.tween(AnimateDouble.EASE_IN_OUT, splitVnumberInit, 600);
    if (splitVheight.value != splitVheightInit) splitVheight.tween(AnimateDouble.EASE_IN_OUT, splitVheightInit, 600);
    
    new Timer(const Duration(seconds: 10), () => initIsBack());
  }
  
  void initIsBack() {
    bzr.value = bzrInit;
    colorDistribution = colorDistributionInit;
    c1.mode = "";
    c2.mode = "";
    c3.mode = "";
  }
  
  
  
  double xFormula(double t) {
    var retValue = cos(beginT.value +t) + aParam.value*cos(bParam.value*(beginT.value +t));
    retValue += splitHwidth.value *(((splitHnumber.value *splitVnumber.value *t *0.99) / maxT.value).floorToDouble() - 0.5*(splitHnumber.value - 1));
    retValue -= splitHwidth.value *(((splitVnumber.value *t *0.99) / maxT.value).floorToDouble()) *(splitHnumber.value);
    return retValue;
  }

  double yFormula(double t) {
    var retValue = sin(beginT.value +cParam.value *t) + aParam.value*sin(bParam.value*(beginT.value +t));
    retValue += splitVheight.value *(((splitVnumber.value *t *0.99) / maxT.value).floorToDouble() - 0.5*(splitVnumber.value - 1));
    return retValue;
  }

  double xScreen(double x) {
    return x* scaleX *zoom.value + centerX + xOrigine.value;
  }

  double yScreen(double y) {
    return y* scaleY *zoom.value + centerY + yOrigine.value;
  }
  
  
}