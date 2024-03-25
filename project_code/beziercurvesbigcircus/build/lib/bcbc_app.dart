import 'package:bcbc2/bcbc_screen.dart';
import 'package:bcbc2/button_controller.dart';
import 'package:bcbc2/animate_double.dart';
import 'dart:html';
import 'dart:math';

class BcbcApp {
  late BcbcScreen screen;

  late ButtonController aParamUp;
  late ButtonController aParamDown;
  late ButtonController bParamUp;
  late ButtonController bParamDown;
  late ButtonController cParamUp;
  late ButtonController cParamDown;

  late ButtonController beginTUp;
  late ButtonController beginTDown;
  late ButtonController maxTUp;
  late ButtonController maxTDown;
  late ButtonController stepTUp;
  late ButtonController stepTDown;

  late ButtonController switchLineControlled;
  late ButtonController lwUp;
  late ButtonController lwDown;
  late ButtonController lw2Up;
  late ButtonController dashedUp;
  late ButtonController dashedDown;

  late LabelElement labelLineNum;

  late ButtonController switchColorControlled;
  late ButtonController colorHueLeft;
  late ButtonController colorHueRight;
  late ButtonController colorSatUp;
  late ButtonController colorSatDown;
  late ButtonController colorLightUp;
  late ButtonController colorLightDown;

  late LabelElement labelColorSample;
  late LabelElement labelColorNum;

  late ButtonController pivotLeft;
  late ButtonController pivotRight;
  late ButtonController gradientUp;
  late ButtonController gradientDown;
  late ButtonController distribUp;
  late ButtonController distribDown;

  late ButtonController lineCurve;
  late ButtonController lineStrait;
  late ButtonController capsRound;
  late ButtonController capsSquare;
  late ButtonController capsButt;
  late ButtonController gapsMore;
  late ButtonController gapsLess;

  late ButtonController splitHorzUp;
  late ButtonController splitHorzDown;
  late ButtonController splitVertUp;
  late ButtonController splitVertDown;
  late ButtonController splitWidthUp;
  late ButtonController splitWidthDown;
  late ButtonController splitHeightUp;
  late ButtonController splitHeightDown;
  late ButtonController splitQuincSet;

  late ButtonController zoomUp;
  late ButtonController zoomDown;
  late ButtonController panLeft;
  late ButtonController panUp;
  late ButtonController panRight;
  late ButtonController panDown;
  late ButtonController rotLeft;
  late ButtonController rotRight;

  late ButtonController flipH;
  late ButtonController flipV;
  late ButtonController explodeUp;
  late ButtonController explodeDown;
  late ButtonController center;

  ButtonElement saveBtn = querySelector("#saveBtn") as ButtonElement;
  ButtonElement cancelBtn = querySelector("#cancelBtn") as ButtonElement;
  RadioButtonInputElement sizeSD = querySelector("#sizeSD") as RadioButtonInputElement;
  RadioButtonInputElement sizeHD = querySelector("#sizeHD") as RadioButtonInputElement;
  RadioButtonInputElement sizeFHD = querySelector("#sizeFHD") as RadioButtonInputElement;
  RadioButtonInputElement sizeUHD = querySelector("#sizeUHD") as RadioButtonInputElement;

  ButtonElement resumeBtn = querySelector("#resumeBtn") as ButtonElement;
  ButtonElement exportBtn = querySelector("#exportBtn") as ButtonElement;
  ButtonElement importBtn = querySelector("#importBtn") as ButtonElement;

  TextAreaElement exportArea = querySelector("#exportArea") as TextAreaElement;
  TextAreaElement importArea = querySelector("#importArea") as TextAreaElement;

  ButtonElement toPanel1 = querySelector("#toPanel1") as ButtonElement;
  ButtonElement toPanel2 = querySelector("#toPanel2") as ButtonElement;
  ButtonElement toPanel3 = querySelector("#toPanel3") as ButtonElement;
  ButtonElement toPanel4 = querySelector("#toPanel4") as ButtonElement;
  RadioButtonInputElement speed1 = querySelector("#speed1") as RadioButtonInputElement;
  RadioButtonInputElement speed2 = querySelector("#speed2") as RadioButtonInputElement;
  RadioButtonInputElement speed3 = querySelector("#speed3") as RadioButtonInputElement;
  RadioButtonInputElement speed4 = querySelector("#speed4") as RadioButtonInputElement;
  LabelElement promptVar = querySelector("#promptVar") as LabelElement;
  SpanElement promptFps = querySelector("#promptFps") as SpanElement;

  DivElement panel1 = querySelector("#panel1") as DivElement;
  DivElement panel2 = querySelector("#panel2") as DivElement;
  DivElement panel3 = querySelector("#panel3") as DivElement;
  DivElement panel4 = querySelector("#panel4") as DivElement;

  ImageElement theSnap = querySelector("#theSnap") as ImageElement;

  num _renderTime = DateTime.now().millisecondsSinceEpoch;
  static final BcbcApp _singleton = BcbcApp._internal();

  factory BcbcApp()
  {
    return _singleton;
  }

  BcbcApp._internal();

  void init() {
    panel1.style.display = "block";
    toPanel1.className = "panelBtn panelBtnOn";
    panel2.style.display = "none";
    panel3.style.display = "none";
    panel4.style.display = "none";

    toPanel1.onClick.listen((event) {
      panel1.style.display = "block";
      panel2.style.display = "none";
      panel3.style.display = "none";
      panel4.style.display = "none";
      toPanel1.className = "panelBtn panelBtnOn";
      toPanel2.className = "panelBtn panelBtnOff";
      toPanel3.className = "panelBtn panelBtnOff";
      toPanel4.className = "panelBtn panelBtnOff";
    });

    toPanel2.onClick.listen((event) {
      panel1.style.display = "none";
      panel2.style.display = "block";
      panel3.style.display = "none";
      panel4.style.display = "none";
      toPanel1.className = "panelBtn panelBtnOff";
      toPanel2.className = "panelBtn panelBtnOn";
      toPanel3.className = "panelBtn panelBtnOff";
      toPanel4.className = "panelBtn panelBtnOff";
    });

    toPanel3.onClick.listen((event) {
      panel1.style.display = "none";
      panel2.style.display = "none";
      panel3.style.display = "block";
      panel4.style.display = "none";
      toPanel1.className = "panelBtn panelBtnOff";
      toPanel2.className = "panelBtn panelBtnOff";
      toPanel3.className = "panelBtn panelBtnOn";
      toPanel4.className = "panelBtn panelBtnOff";
    });

    toPanel4.onClick.listen((event) {
      panel1.style.display = "none";
      panel2.style.display = "none";
      panel3.style.display = "none";
      panel4.style.display = "block";
      toPanel1.className = "panelBtn panelBtnOff";
      toPanel2.className = "panelBtn panelBtnOff";
      toPanel3.className = "panelBtn panelBtnOff";
      toPanel4.className = "panelBtn panelBtnOn";
    });

    speed1.checked = true;
    speed2.checked = true;
    speed3.checked = true;
    speed4.checked = false;
    AnimateDouble.velocityExp = 1;
    AnimateDouble.velocityLin = 1;

    speed1.onClick.listen((event) {
      speed1.checked = true;
      speed2.checked = false;
      speed3.checked = false;
      speed4.checked = false;
      AnimateDouble.velocityExp = 0.1;
      AnimateDouble.velocityLin = 0.1;
    });

    speed2.onClick.listen((event) {
      speed1.checked = true;
      speed2.checked = true;
      speed3.checked = false;
      speed4.checked = false;
      AnimateDouble.velocityExp = 0.5;
      AnimateDouble.velocityLin = 0.5;
    });

    speed3.onClick.listen((event) {
      speed1.checked = true;
      speed2.checked = true;
      speed3.checked = true;
      speed4.checked = false;
      AnimateDouble.velocityExp = 1;
      AnimateDouble.velocityLin = 1;
    });

    speed4.onClick.listen((event) {
      speed1.checked = true;
      speed2.checked = true;
      speed3.checked = true;
      speed4.checked = true;
      AnimateDouble.velocityExp = 3;
      AnimateDouble.velocityLin = 3;
    });

    int ww = 0;
    int cw = 0;
    int ch = 0;
    double cm = 0.0;

    if (window.innerWidth != null) ww = window.innerWidth!;
    if (ww < 640) { cw = 427; ch = 240; cm = 0.5; }
    else if (ww < 854) { cw = 640; ch = 360; cm = 0.75; }
    else { cw = 854; ch = 480; cm = 1.0; }

    screen = BcbcScreen(cw, ch, cm, "#bcbccanvas");

    aParamUp = ButtonController("#aParamUp","aParamUp", false);
    aParamDown = ButtonController("#aParamDown","aParamDown", false);
    bParamUp = ButtonController("#bParamUp","bParamUp", false);
    bParamDown = ButtonController("#bParamDown","bParamDown", false);
    cParamUp = ButtonController("#cParamUp","cParamUp", false);
    cParamDown = ButtonController("#cParamDown","cParamDown", false);

    beginTUp = ButtonController("#beginTUp","beginTUp", false);
    beginTDown = ButtonController("#beginTDown","beginTDown", false);
    maxTUp = ButtonController("#maxTUp","maxTUp", false);
    maxTDown = ButtonController("#maxTDown","maxTDown", false);
    stepTUp = ButtonController("#stepTUp","stepTUp", false);
    stepTDown = ButtonController("#stepTDown","stepTDown", false);

    switchLineControlled = ButtonController("#switchLineControlled", "switchLineControlled", true);
    lwUp = ButtonController("#lwUp", "lwUp", false);
    lwDown = ButtonController("#lwDown", "lwDown", false);
    dashedUp = ButtonController("#dashedUp", "dashedUp", false);
    dashedDown = ButtonController("#dashedDown", "dashedDown", false);

    labelLineNum = querySelector("#labelLineNum") as LabelElement;
    labelLineNum.innerHtml = "1";

    switchColorControlled = ButtonController("#switchColorControlled", "switchColorControlled", true);
    colorHueLeft = ButtonController("#colorHueLeft", "colorHueLeft", false);
    colorHueRight = ButtonController("#colorHueRight", "colorHueRight", false);
    colorSatUp = ButtonController("#colorSatUp", "colorSatUp", false);
    colorSatDown = ButtonController("#colorSatDown", "colorSatDown", false);
    colorLightUp = ButtonController("#colorLightUp", "colorLightUp", false);
    colorLightDown = ButtonController("#colorLightDown", "colorLightDown", false);

    labelColorSample = querySelector("#labelColorSample") as LabelElement;
    labelColorNum = querySelector("#labelColorNum") as LabelElement;
    labelColorNum.innerHtml = "1";
    labelColorSample.style.backgroundColor = screen.c1.color.toRgbColor().toCssString();

    pivotLeft = ButtonController("#pivotLeft", "pivotLeft", false);
    pivotRight = ButtonController("#pivotRight", "pivotRight", false);
    gradientUp = ButtonController("#gradientUp", "gradientUp", false);
    gradientDown = ButtonController("#gradientDown", "gradientDown", false);
    distribUp = ButtonController("#distribUp", "distribUp", false);
    distribDown = ButtonController("#distribDown", "distribDown", false);

    lineCurve = ButtonController("#lineCurve", "lineCurve", true);
    lineStrait = ButtonController("#lineStrait", "lineStrait", true);
    capsRound = ButtonController("#capsRound", "capsRound", true);
    capsSquare = ButtonController("#capsSquare", "capsSquare", true);
    capsButt = ButtonController("#capsButt", "capsButt", true);
    gapsMore = ButtonController("#gapsMore", "gapsMore", false);
    gapsLess = ButtonController("#gapsLess", "gapsLess", false);

    splitHorzUp = ButtonController("#splitHorzUp", "splitHorzUp", true);
    splitHorzDown = ButtonController("#splitHorzDown", "splitHorzDown", true);
    splitVertUp = ButtonController("#splitVertUp", "splitVertUp", true);
    splitVertDown = ButtonController("#splitVertDown", "splitVertDown", true);
    splitWidthUp = ButtonController("#splitWidthUp", "splitWidthUp", false);
    splitWidthDown = ButtonController("#splitWidthDown", "splitWidthDown", false);
    splitHeightUp = ButtonController("#splitHeightUp", "splitHeightUp", false);
    splitHeightDown = ButtonController("#splitHeightDown", "splitHeightDown", false);
    splitQuincSet = ButtonController("#splitQuincSet", "splitQuincSet", true);

    zoomUp = ButtonController("#zoomUp", "zoomUp", false);
    zoomDown = ButtonController("#zoomDown", "zoomDown", false);
    panLeft = ButtonController("#panLeft", "panLeft", false);
    panUp = ButtonController("#panUp", "panUp", false);
    panRight = ButtonController("#panRight", "panRight", false);
    panDown = ButtonController("#panDown", "panDown", false);
    rotLeft = ButtonController("#rotLeft", "rotLeft", false);
    rotRight = ButtonController("#rotRight", "rotRight", false);

    flipH = ButtonController("#flipH", "flipH", true);
    flipV = ButtonController("#flipV", "flipV", true);
    explodeUp = ButtonController("#explodeUp", "explodeUp", false);
    explodeDown = ButtonController("#explodeDown", "explodeDown", false);
    center = ButtonController("#center", "center", true);

    sizeSD.checked = true;
    saveBtn.onClick.listen(saveImg);
    cancelBtn.onClick.listen(cancelImg);
    exportBtn.onClick.listen(exportImg);
    importBtn.onClick.listen(importImg);
    resumeBtn.onClick.listen((event) {
      screen.backToInit();
    });

    screen.draw();
    window.animationFrame.then(refreshScreen);
    window.onResize.listen((event) {
      int w = 0;
      if (window.innerWidth != null) w = window.innerWidth!;
      if (w < 640) { screen.setDimensions("LD"); screen.draw(); }
      else if (w < 854) { screen.setDimensions("MD"); screen.draw(); }
      else { screen.setDimensions("SD"); screen.draw(); }
    });
  }

  void refreshScreen(num delta) {
    num fps = 60;
    num time = DateTime.now().millisecondsSinceEpoch;
    if (_renderTime >= 0) {
      fps = (1000 / (time - _renderTime));
    }
    _renderTime = time;

    if (screen.updateControllers()) {
      // savoir quelle est la couleur en cours et rafraichir le label de couleur.
      switch (screen.colorControlled) {
        case "C1" : labelColorNum.innerHtml = "1"; labelColorSample.style.backgroundColor = screen.c1.color.toRgbColor().toCssString(); break;
        case "C2" : labelColorNum.innerHtml = "2"; labelColorSample.style.backgroundColor = screen.c2.color.toRgbColor().toCssString(); break;
        case "C3" : labelColorNum.innerHtml = "3"; labelColorSample.style.backgroundColor = screen.c3.color.toRgbColor().toCssString(); break;
        case "C_" : labelColorNum.innerHtml = "_"; labelColorSample.style.backgroundColor = "transparent"; break;
        default : labelColorNum.innerHtml = "."; labelColorSample.style.backgroundColor = "transparent";
      }

      switch (screen.lineControlled) {
        case "L1" : labelLineNum.innerHtml = "1"; break;
        case "L2" : labelLineNum.innerHtml = "2"; break;
        case "L3" : labelLineNum.innerHtml = "3"; break;
        case "L_" : labelLineNum.innerHtml = "_"; break;
        default : labelLineNum.innerHtml = ".";
      }
    }
    if (screen.updateVars()) {
      switch (screen.varToPrompt) {
        case "aParam" : promptVar.innerHtml = "a param: ${screen.aParam.prompt}"; break;
        case "bParam" : promptVar.innerHtml = "b param: ${screen.bParam.prompt}"; break;
        case "cParam" : promptVar.innerHtml = "c param: ${screen.cParam.prompt}"; break;
        case "beginT" : promptVar.innerHtml = "t begin: ${screen.beginT.prompt}"; break;
        case "maxT" : promptVar.innerHtml = "t interval: ${screen.maxT.prompt}"; break;
        case "stepT" : promptVar.innerHtml = "t step: ${screen.stepT.prompt}"; break;
        case "lw1" : promptVar.innerHtml = "L1 width: ${screen.lw1.prompt}"; break;
        case "lw2" : promptVar.innerHtml = "L2 width: ${screen.lw2.prompt}"; break;
        case "lw3" : promptVar.innerHtml = "L3 width: ${screen.lw3.prompt}"; break;
        case "dash1" : promptVar.innerHtml = "L1 dash: ${screen.dash1.prompt}"; break;
        case "dash2" : promptVar.innerHtml = "L2 dash: ${screen.dash2.prompt}"; break;
        case "dash3" : promptVar.innerHtml = "L3 dash: ${screen.dash3.prompt}"; break;
        case "gradient" : promptVar.innerHtml = "gradient: ${screen.gradient.prompt}"; break;
        case "pivot" : promptVar.innerHtml = "pivot: ${screen.pivot.prompt}"; break;
        case "distrib" : promptVar.innerHtml = "distribp: ${screen.distrib.prompt}"; break;
        case "gapsRatio" : promptVar.innerHtml = "gaps: ${screen.gapsRatio.prompt}"; break;
        case "Hnum" : promptVar.innerHtml = "H_num: ${screen.splitHnumber.prompt}"; break;
        case "Vnum" : promptVar.innerHtml = "V_num: ${screen.splitVnumber.prompt}"; break;
        case "Hwidth" : promptVar.innerHtml = "H_width: ${screen.splitHwidth.prompt}"; break;
        case "Vheight" : promptVar.innerHtml = "V_height: ${screen.splitVheight.prompt}"; break;
        case "explode" : promptVar.innerHtml = "explode: ${screen.explode.prompt}"; break;
        case "zoom" : promptVar.innerHtml = "zoom: ${screen.zoom.prompt}"; break;
        case "rotation" : promptVar.innerHtml = "rotation: ${screen.rotation.prompt}"; break;
        default : promptVar.innerHtml = "";
      }
      screen.draw();
      if (fps <= 20) promptFps.innerHtml = "${fps.round()} fps";
    }
    else { promptFps.innerHtml = ""; }

    window.animationFrame.then(refreshScreen);
  }

  void saveImg(MouseEvent event) {
    String actualDimension = screen.dimension;
    String newDimension = "";

    if ((sizeUHD.checked != null) && (sizeUHD.checked != false)) {
      newDimension = "UHD";
    }
    else if ((sizeFHD.checked != null) && (sizeFHD.checked != false)) {
      newDimension = "FHD";
    }
    else if ((sizeHD.checked != null) && (sizeHD.checked != false)) {
      newDimension = "HD";
    }
    else {
      newDimension = "SD";
    }

    String dataStr = "";
    if (newDimension != actualDimension) {
      screen.setDimensions(newDimension);
      screen.draw();
    }
    dataStr = screen.stringify;
    theSnap.width = screen.width;
    theSnap.height = screen.height;
    theSnap.src = dataStr;
    if (actualDimension != newDimension) {
      screen.setDimensions(actualDimension);
      screen.draw();
    }
  }

  void cancelImg(MouseEvent event) {
    // il faut commencer par tout rétrécir.
    screen.setDimensions("LD");
    theSnap.width = 100;
    theSnap.height = 100;
    theSnap.src = "BCBCdefaultSnap.png";
    int w = 0;
    if (window.innerWidth != null) w = window.innerWidth!;
    if (w < 640) { screen.setDimensions("LD"); screen.draw(); }
    else if (w < 854) { screen.setDimensions("MD"); screen.draw(); }
    else { screen.setDimensions("SD"); screen.draw(); }
  }

  void exportImg(MouseEvent event) {
    String export = screen.exportVars();
    exportArea.value = export;
  }

  void importImg(MouseEvent event) {
    String import = "";
    if (importArea.value != null) {
      import = importArea.value!;
      String result = screen.importVars(import);
      if (result != "") importArea.value = result;
    }
    else importArea.value = "nothing to import";
  }
}