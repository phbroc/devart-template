// Copyright (c) 2015, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library beziercurvesbigcircus;

import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'dart:core';
import 'package:csslib/parser.dart';

part 'beziercanvas.dart';
part 'keyboardcontroler.dart';
part 'buttonController.dart';
part 'animatedouble.dart';
part 'colorcontroller.dart';

Element notes = querySelector("#fps");
//Element notes2 = querySelector("#keyP");
num fpsAverage = 60;
//SelectElement actionSelect = querySelector("#actionSelect") as SelectElement;
//ButtonElement recordKeysBtn = querySelector("#recordKeysBtn") as ButtonElement;
bool recordingKeys = false;

ButtonElement saveBtn = querySelector("#saveBtn") as ButtonElement;

BcbcApp bcbcApp;

/// Display the animation's FPS in a div.
void showFps(num fps) {
  if (fpsAverage == null) fpsAverage = fps;
  fpsAverage = fps * 0.05 + fpsAverage * 0.95;
  notes.text = "${fpsAverage.round()} fps";
}

class BcbcApp {
  int maxWidth;
  int maxHeight;
  int centerX;
  int centerY;
  int scaleX;
  int scaleY;


  BezierCanvas bezierCanvas;
  KeyboardController keyboardController;
  ButtonController buttonController;
  DivElement colorpicker;
  ImageElement hslpicker;
  CanvasElement hsllum;
  ImageElement lumpicker;
  Timer colorpickerTimer;
  DivElement varprompt;
  LabelElement labelprompt;
  LabelElement labelColor;
  Timer varpromptTimer;
  String varToPrompt;
  DivElement customsetup;
  DivElement container;

  bool ownMouse = false;

  BcbcApp(int maxW, int maxH) {
    maxWidth = maxW;
    maxHeight = maxH;
    centerX = (maxW/2).round();
    centerY = (maxH/2).round();
    scaleX = (maxWidth/8).round();
    scaleY = scaleX;
    colorpicker = querySelector("#colorpicker") as DivElement;
    hslpicker = querySelector("#hslpicker") as ImageElement;
    hsllum = querySelector("#hsllum") as CanvasElement;
    lumpicker = querySelector("#lumpicker") as ImageElement;
    varprompt = querySelector("#varprompt") as DivElement;
    labelprompt = querySelector("#labelprompt") as LabelElement;
    labelColor = querySelector("#labelColor") as LabelElement;
    customsetup = querySelector("#customSetup") as DivElement;
    container = querySelector("#container") as DivElement;

    CanvasElement canvas = querySelector("#canvas");
    canvas.width = maxWidth;
    canvas.height = maxHeight;
    // with buttons on screen it's less interessant to have keyboard shortcuts
    // canvas.onClick.listen(clicked);

    bezierCanvas = new BezierCanvas(canvas, this);

    keyboardController = new KeyboardController(this);
    buttonController = new ButtonController();

    bindControls();
    setDimensions(window.innerWidth, window.innerHeight);

    scheduleMicrotask(bezierCanvas.start);
  }


  void clicked(Event event) {
    if (!ownMouse) {
      ownMouse = true;
      //notes2.innerHtml = " OK for keyboard shotcuts on canvas.";
      recordingKeys = false;
      //recordKeysBtn.innerHtml = "Record keys OFF";
    } else {
      ownMouse = false;
      //notes2.innerHtml = " No keyboard shortcuts. Click on canvas.";
    }
  }

  void setDimensions(int w, int h) {
    maxWidth = min(w,(h*16/9)-250).round();
    maxHeight = (maxWidth*9/16).round();



    centerX = (maxWidth/2).round();
    centerY = (maxHeight/2).round();
    bezierCanvas.maxWidth = maxWidth;
    bezierCanvas.maxHeight = maxHeight;
    bezierCanvas.centerX = centerX;
    bezierCanvas.centerY = centerY;
    bezierCanvas.scaleX = (maxWidth/8).round();
    bezierCanvas.scaleY = bezierCanvas.scaleX;
    bezierCanvas.canvas.width = maxWidth;
    bezierCanvas.canvas.height = maxHeight;

    customsetup.style.setProperty("top", (maxHeight+15).toString() + "px");
    container.style.setProperty("width", (w).toString() + "px");
    }

  void bindControls() {
    window.onResize.listen((e) {
      setDimensions(window.innerWidth, window.innerHeight);
    });

    window.onScroll.listen((e) {
      var y = window.scrollY;
      container.style.setProperty("top", (min(y,((y/2)+(window.innerHeight/2)).round())).toString() + "px");
    });

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

    window.on['dashedRatioUp'].listen((e) {
      if (e.detail) bezierCanvas.dashedRatio.play(AnimateDouble.LINEAR_UP);
      else bezierCanvas.dashedRatio.stop();
    });

    window.on['dashedRatioDown'].listen((e) {
      if (e.detail) bezierCanvas.dashedRatio.play(AnimateDouble.LINEAR_DOWN);
      else bezierCanvas.dashedRatio.stop();
    });

    window.on['beginTUp'].listen((e) {
      if (e.detail) bezierCanvas.beginT.play(AnimateDouble.EXP_UP);
      else bezierCanvas.beginT.stop();
    });

    window.on['beginTDown'].listen((e) {
      if (e.detail) bezierCanvas.beginT.play(AnimateDouble.EXP_DOWN);
      else bezierCanvas.beginT.stop();
    });

    window.on['maxTUp'].listen((e) {
      if ((e.detail) && (fpsAverage > 12)) {
        bezierCanvas.maxT.play(AnimateDouble.LINEAR_UP);
        varToPrompt = "maxT";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.maxT.stop();
        displayVarprompt(false);
      }
    });

    window.on['maxTDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.maxT.play(AnimateDouble.LINEAR_DOWN);
        varToPrompt = "maxT";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.maxT.stop();
        displayVarprompt(false);
      }
    });

    window.on['stpUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.stp.play(AnimateDouble.EXP_UP);
        varToPrompt = "stp";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.stp.stop();
        displayVarprompt(false);
      }
    });

    window.on['stpDown'].listen((e) {
      if ((e.detail) && (fpsAverage > 12)) {
        bezierCanvas.stp.play(AnimateDouble.EXP_DOWN);
        varToPrompt = "stp";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.stp.stop();
        displayVarprompt(false);
      }
    });

    window.on['aParamUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.aParam.play(AnimateDouble.EXP_UP);
        varToPrompt = "aParam";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.aParam.stop();
        displayVarprompt(false);
      }
    });

    window.on['aParamDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.aParam.play(AnimateDouble.EXP_DOWN);
        varToPrompt = "aParam";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.aParam.stop();
        displayVarprompt(false);
      }
    });

    window.on['bParamUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.bParam.play(AnimateDouble.EXP_UP);
        varToPrompt = "bParam";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.bParam.stop();
        displayVarprompt(false);
      }
    });

    window.on['bParamDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.bParam.play(AnimateDouble.EXP_DOWN);
        varToPrompt = "bParam";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.bParam.stop();
        displayVarprompt(false);
      }
    });

    window.on['cParamUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.cParam.play(AnimateDouble.EXP_UP);
        varToPrompt = "cParam";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.cParam.stop();
        displayVarprompt(false);
      }
    });

    window.on['cParamDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.cParam.play(AnimateDouble.EXP_DOWN);
        varToPrompt = "cParam";
        displayVarprompt(true);
      }
      else {
        bezierCanvas.cParam.stop();
        displayVarprompt(false);
      }
    });

    window.on["switchColorControlled"].listen((e) {
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


    window.on['colorHueRight'].listen((e) {
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

    window.on['colorHueLeft'].listen((e) {
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

    window.on['switchCurvesStyle'].listen((e) {
      if (e.detail) {
        if (bezierCanvas.bzr.value == 0.0) bezierCanvas.bzr.tween(AnimateDouble.EASE_IN_OUT, 0.65, 30);
        else bezierCanvas.bzr.tween(AnimateDouble.EASE_IN_OUT, 0.0, 30);
      }
    });

    window.on['switchColorDistribution'].listen((e) {
      if (e.detail) {
        switch (bezierCanvas.colorDistribution) {
          case "max1min3" : bezierCanvas.colorDistribution = "alternate"; break;
          case "alternate" : bezierCanvas.colorDistribution = "interpol"; break;
          case "interpol" : bezierCanvas.colorDistribution = "max1min3"; break;
        }
      }
    });




    window.on['zoomUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.zoom.play(AnimateDouble.LINEAR_UP);
      }
      else {
        bezierCanvas.zoom.stop();
      }
    });

    window.on['zoomDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.zoom.play(AnimateDouble.LINEAR_DOWN);
      }
      else {
        bezierCanvas.zoom.stop();
      }
    });

    window.on['panUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.yOrigine.play(AnimateDouble.CONSTANT_UP);
      }
      else {
        bezierCanvas.yOrigine.stop();
      }
    });

    window.on['panDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.yOrigine.play(AnimateDouble.CONSTANT_DOWN);
      }
      else {
        bezierCanvas.yOrigine.stop();
      }
    });

    window.on['panLeft'].listen((e) {
      if (e.detail) {
        bezierCanvas.xOrigine.play(AnimateDouble.CONSTANT_UP);
      }
      else {
        bezierCanvas.xOrigine.stop();
      }
    });

    window.on['panRight'].listen((e) {
      if (e.detail) {
        bezierCanvas.xOrigine.play(AnimateDouble.CONSTANT_DOWN);
      }
      else {
        bezierCanvas.xOrigine.stop();
      }
    });

    window.on['splitHorzUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.splitHnumber.tween(AnimateDouble.EASE_IN_OUT, bezierCanvas.splitHnumber.value + 1.0, 30);
      }
    });

    window.on['splitHorzDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.splitHnumber.tween(AnimateDouble.EASE_IN_OUT, bezierCanvas.splitHnumber.value - 1.0, 30);
      }
    });

    window.on['splitWidthUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.splitHwidth.play(AnimateDouble.LINEAR_UP);
      }
      else
      {
        bezierCanvas.splitHwidth.stop();
      }
    });

    window.on['splitWidthDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.splitHwidth.play(AnimateDouble.LINEAR_DOWN);
      }
      else
      {
        bezierCanvas.splitHwidth.stop();
      }
    });

    window.on['splitVertUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.splitVnumber.tween(AnimateDouble.EASE_IN_OUT, bezierCanvas.splitVnumber.value + 1.0, 30);
      }
    });

    window.on['splitVertDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.splitVnumber.tween(AnimateDouble.EASE_IN_OUT, bezierCanvas.splitVnumber.value - 1.0, 30);
      }
    });

    window.on['splitHeightUp'].listen((e) {
      if (e.detail) {
        bezierCanvas.splitVheight.play(AnimateDouble.LINEAR_UP);
      }
      else
      {
        bezierCanvas.splitVheight.stop();
      }
    });

    window.on['splitHeightDown'].listen((e) {
      if (e.detail) {
        bezierCanvas.splitVheight.play(AnimateDouble.LINEAR_DOWN);
      }
      else
      {
        bezierCanvas.splitVheight.stop();
      }
    });

    window.on['toggleFullScreen'].listen((e) {
      if (e.detail) {
        CanvasElement cv = querySelector("#canvas");
        if (document.fullscreenElement == null) {
          cv.requestFullscreen();
          print(document.fullscreenElement == cv); // true
        } else {
          document.exitFullscreen();
        }
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

    color = new Color.createHsla(h, s, l, 1);
    labelColor.style.backgroundColor = color.rgba.cssExpression;
  }

  void displayVarprompt(bool d) {
    if (d) varprompt.style.display = "block";
    else {
      if ((varpromptTimer != null) && (varpromptTimer.isActive)) varpromptTimer.cancel();
      varpromptTimer = new Timer(const Duration(seconds: 2), () => varprompt.style.display = "none");
    }
  }

  void updateVarprompt(String s) {
    labelprompt.innerHtml = s;
  }


}

void main() {
  bcbcApp = new BcbcApp(window.innerWidth, (window.innerWidth*9/16).round());

  //actionSelect.onChange.listen((e) => setupAction());
  //recordKeysBtn.onClick.listen((e) => updateRecordingKeys());

  saveBtn.onClick.listen(saveImg);
}

void updateRecordingKeys() {
  if (!recordingKeys) {
    //recordKeysBtn.innerHtml = "Record keys ON";
    recordingKeys = true;
    bcbcApp.ownMouse = false;
    //notes2.innerHtml = " No keyboard on canvas.";
  }
  else {
    //recordKeysBtn.innerHtml = "Record keys OFF";
    recordingKeys = false;
  }
}

void setupAction() {
  //print(actionSelect.value.toString());
  //notes2.innerHtml = "";
}






void saveImg(MouseEvent event) {
  var sizeW = 1920;
  RadioButtonInputElement rdSize = querySelector("#size2160p") as RadioButtonInputElement;
  if (rdSize.checked) sizeW = 3840;
  else {
    rdSize = querySelector("#size480p") as RadioButtonInputElement;
    if (rdSize.checked) sizeW = 854;
    else {
      rdSize = querySelector("#size720p") as RadioButtonInputElement;
      if (rdSize.checked) sizeW = 1280;
      else {
        rdSize = querySelector("#size1080p") as RadioButtonInputElement;
        if (rdSize.checked) sizeW = 1920;
        else {
          rdSize = querySelector("#size1440p") as RadioButtonInputElement;
          if (rdSize.checked) sizeW = 2560;
        }
      }
    }
  }

  bcbcApp.setDimensions(sizeW, sizeW + 100);
  bcbcApp.bezierCanvas.doDraw();
  var dataUrl = bcbcApp.bezierCanvas.canvas.toDataUrl("image/jpeg", 0.95);
  window.open(dataUrl, "image", "_blank");
  bcbcApp.setDimensions(window.innerWidth, window.innerHeight);
}

