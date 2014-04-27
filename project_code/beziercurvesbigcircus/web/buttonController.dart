part of beziercurvesbigcircus;

class ButtonController
{
  ButtonElement aParamUp;
  ButtonElement aParamDown;
  ButtonElement bParamUp;
  ButtonElement bParamDown;
  ButtonElement cParamUp;
  ButtonElement cParamDown;
  
  ButtonElement beginTUp;
  ButtonElement beginTDown;
  ButtonElement maxTUp;
  ButtonElement maxTDown;
  ButtonElement stpUp;
  ButtonElement stpDown;
  
  ButtonElement lw1Up;
  ButtonElement lw1Down;
  ButtonElement lw2Up;
  ButtonElement lw2Down;
  ButtonElement lw3Up;
  ButtonElement lw3Down;
  
  ButtonElement switchColorControlled;
  ButtonElement colorHueLeft;
  ButtonElement colorHueRight;
  ButtonElement colorSatUp;
  ButtonElement colorSatDown;
  ButtonElement colorLightUp;
  ButtonElement colorLightDown;
  
  ButtonElement splitHorzUp;
  ButtonElement splitHorzDown;
  ButtonElement splitVertUp;
  ButtonElement splitVertDown;
  ButtonElement splitWidthUp;
  ButtonElement splitWidthDown;
  ButtonElement splitHeightUp;
  ButtonElement splitHeightDown;
  
  ButtonElement switchColorDistribution;
  ButtonElement switchCurvesStyle;
  ButtonElement dashedRatioUp;
  ButtonElement dashedRatioDown;
  
  ButtonElement zoomUp;
  ButtonElement zoomDown;
  ButtonElement panLeft;
  ButtonElement panRight;
  ButtonElement panUp;
  ButtonElement panDown;
  
  ButtonController() {
    aParamUp = querySelector("#aParamUp") as ButtonElement;
    aParamDown = querySelector("#aParamDown") as ButtonElement;
    bParamUp = querySelector("#bParamUp") as ButtonElement;
    bParamDown = querySelector("#bParamDown") as ButtonElement;
    cParamUp = querySelector("#cParamUp") as ButtonElement;
    cParamDown = querySelector("#cParamDown") as ButtonElement;
    
    beginTUp = querySelector("#beginTUp") as ButtonElement;
    beginTDown = querySelector("#beginTDown") as ButtonElement;
    maxTUp = querySelector("#maxTUp") as ButtonElement;
    maxTDown = querySelector("#maxTDown") as ButtonElement;
    stpUp = querySelector("#stpUp") as ButtonElement;
    stpDown = querySelector("#stpDown") as ButtonElement;
    
    lw1Up = querySelector("#lw1Up") as ButtonElement;
    lw1Down = querySelector("#lw1Down") as ButtonElement;
    lw2Up = querySelector("#lw2Up") as ButtonElement;
    lw2Down = querySelector("#lw2Down") as ButtonElement;
    lw3Up = querySelector("#lw3Up") as ButtonElement;
    lw3Down = querySelector("#lw3Down") as ButtonElement;
    
    switchColorControlled = querySelector("#switchColorControlled") as ButtonElement;
    colorHueLeft = querySelector("#colorHueLeft") as ButtonElement;
    colorHueRight = querySelector("#colorHueRight") as ButtonElement;
    colorSatUp = querySelector("#colorSatUp") as ButtonElement;
    colorSatDown = querySelector("#colorSatDown") as ButtonElement;
    colorLightUp = querySelector("#colorLightUp") as ButtonElement;
    colorLightDown = querySelector("#colorLightDown") as ButtonElement;
    
    
    splitHorzUp = querySelector("#splitHorzUp") as ButtonElement;
    splitHorzDown = querySelector("#splitHorzDown") as ButtonElement;
    splitVertUp = querySelector("#splitVertUp") as ButtonElement;
    splitVertDown = querySelector("#splitVertDown") as ButtonElement;
    splitWidthUp = querySelector("#splitWidthUp") as ButtonElement;
    splitWidthDown = querySelector("#splitWidthDown") as ButtonElement;
    splitHeightUp = querySelector("#splitHeightUp") as ButtonElement;
    splitHeightDown = querySelector("#splitHeightDown") as ButtonElement;
    
    switchColorDistribution = querySelector("#switchColorDistribution") as ButtonElement;
    switchCurvesStyle = querySelector("#switchCurvesStyle") as ButtonElement;
    dashedRatioUp = querySelector("#dashedRatioUp") as ButtonElement;
    dashedRatioDown = querySelector("#dashedRatioDown") as ButtonElement;
    
    zoomUp = querySelector("#zoomUp") as ButtonElement;
    zoomDown = querySelector("#zoomDown") as ButtonElement;
    panLeft = querySelector("#panLeft") as ButtonElement;
    panRight = querySelector("#panRight") as ButtonElement;
    panUp = querySelector("#panUp") as ButtonElement;
    panDown = querySelector("#panDown") as ButtonElement;
    
    setupButton(aParamUp, "aParamUp");
    setupButton(aParamDown, "aParamDown");
    setupButton(bParamUp, "bParamUp");
    setupButton(bParamDown, "bParamDown");
    setupButton(cParamUp, "cParamUp");
    setupButton(cParamDown, "cParamDown");
    
    setupButton(beginTUp, "beginTUp");
    setupButton(beginTDown, "beginTDown");
    setupButton(maxTUp, "maxTUp");
    setupButton(maxTDown, "maxTDown");
    setupButton(stpUp, "stpUp");
    setupButton(stpDown, "stpDown");
    
    setupButton(lw1Up, "lw1Up");
    setupButton(lw1Down, "lw1Down");
    setupButton(lw2Up, "lw2Up");
    setupButton(lw2Down, "lw2Down");
    setupButton(lw3Up, "lw3Up");
    setupButton(lw3Down, "lw3Down");
    
    setupSimpleButton(switchColorControlled, "switchColorControlled");
    setupButton(colorHueLeft, "colorHueLeft");
    setupButton(colorHueRight, "colorHueRight");
    setupButton(colorSatUp, "colorSatUp");
    setupButton(colorSatDown, "colorSatDown");
    setupButton(colorLightUp, "colorLightUp");
    setupButton(colorLightDown, "colorLightDown");
    
    setupSimpleButton(splitHorzUp ,"splitHorzUp");
    setupSimpleButton(splitHorzDown ,"splitHorzDown");
    setupSimpleButton(splitVertUp ,"splitVertUp");
    setupSimpleButton(splitVertDown ,"splitVertDown");
    setupButton(splitWidthUp ,"splitWidthUp");
    setupButton(splitWidthDown ,"splitWidthDown");
    setupButton(splitHeightUp ,"splitHeightUp");
    setupButton(splitHeightDown ,"splitHeightDown");
    
    setupSimpleButton(switchColorDistribution, "switchColorDistribution");
    setupSimpleButton(switchCurvesStyle, "switchCurvesStyle");
    setupButton(dashedRatioUp, "dashedRatioUp");
    setupButton(dashedRatioDown, "dashedRatioDown");
    
    setupButton(zoomUp, "zoomUp");
    setupButton(zoomDown, "zoomDown");
    setupButton(panUp, "panUp");
    setupButton(panDown, "panDown");
    setupButton(panLeft, "panLeft");
    setupButton(panRight, "panRight");
  }
  
  void setupButton(ButtonElement btn, String strEvent) {
    btn.onMouseDown.listen((e) => window.dispatchEvent(new CustomEvent(strEvent, detail:true)));
    btn.onMouseUp.listen((e) => window.dispatchEvent(new CustomEvent(strEvent, detail:false)));
    btn.onTouchStart.listen((e) => window.dispatchEvent(new CustomEvent(strEvent, detail:true)));
    btn.onTouchEnd.listen((e) => window.dispatchEvent(new CustomEvent(strEvent, detail:false)));
  }
  
  void setupSimpleButton(ButtonElement btn, String strEvent) {
    btn.onClick.listen((e) => window.dispatchEvent(new CustomEvent(strEvent, detail:true)));
  }
}