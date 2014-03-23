library beziercurvesbigcircus;

import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'dart:core';
import 'package:csslib/parser.dart';

part 'beziercanvas.dart';
part 'keyboardcontroler.dart';
part 'animatedouble.dart';
part 'colorcontroller.dart';


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
DivElement varprompt;
LabelElement labelprompt;
Timer varpromptTimer;
String varToPrompt;

Element notes = querySelector("#fps");
Element notes2 = querySelector("#keyP");
num fpsAverage = 60;

void main() {
  colorpicker = querySelector("#colorpicker") as DivElement;
  hslpicker = querySelector("#hslpicker") as ImageElement;
  hsllum = querySelector("#hsllum") as CanvasElement;
  lumpicker = querySelector("#lumpicker") as ImageElement;
  varprompt = querySelector("#varprompt") as DivElement;
  labelprompt = querySelector("#labelprompt") as LabelElement;
  
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
      if ((e.detail) && (fpsAverage > 50)) {
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
  
  window.on['stpParamUp'].listen((e) {
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
    
  window.on['stpParamDown'].listen((e) {
      if ((e.detail) && (fpsAverage > 50)) {
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
        bezierCanvas.bzr.tween(AnimateDouble.EASE_IN_OUT, 0.0, 30);
      }
  });
  
  window.on['bezierCurves'].listen((e) {
        if (e.detail) {
          bezierCanvas.bzr.tween(AnimateDouble.EASE_IN_OUT, 0.65, 30);
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








