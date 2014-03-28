part of beziercurvesbigcircus;

class KeyboardController
{
  BcbcApp bcbcApp;
  Map keyCodesNormal; 
  Map keyCodesShift;
  
  List<int> currentKeyCodePressed;
  
  KeyboardController(this.bcbcApp) {
      keyCodesNormal = new Map();
      for (var i = 0; i < 300; i++) {
        keyCodesNormal[i] = "nothing";
      }
      
      keyCodesShift = new Map();
      for (var i = 0; i < 300; i++) {
        keyCodesShift[i] = "nothing";
      }
      
      currentKeyCodePressed = new List();
      
      initialiseKeyCodesBinding();
      
      document.onKeyDown.listen(keydown);
      document.onKeyUp.listen(keyup);
  }
  
  void initialiseKeyCodesBinding()
  {
    keyCodesNormal[65] = "colorHueLeft"; //a
    keyCodesNormal[90] = "colorHueRight"; //z
    keyCodesNormal[69] = "colorSatUp"; //e
    keyCodesNormal[82] = "colorSatDown"; //r
    keyCodesNormal[84] = "colorLightUp"; //t
    keyCodesNormal[89] = "colorLightDown"; //y
    keyCodesNormal[85] = "panLeft"; //u
    keyCodesNormal[73] = "panRight"; //i
    keyCodesNormal[79] = "panUp"; //o
    keyCodesNormal[80] = "panDown"; //p
    
    keyCodesNormal[81] = "splitWidthUp"; //q
    keyCodesNormal[83] = "splitWidthDown"; //s
    keyCodesNormal[68] = "splitHeightUp"; //d
    keyCodesNormal[70] = "splitHeightDown"; //f
    keyCodesNormal[71] = "zoomUp"; //g
    keyCodesNormal[72] = "zoomDown"; //h
    keyCodesNormal[74] = "splitHorzUp"; //j
    keyCodesNormal[75] = "splitHorzDown"; //k
    keyCodesNormal[76] = "splitVertUp"; //l
    keyCodesNormal[77] = "splitVertDown"; //m
    
    keyCodesNormal[87] = "dashedRatioUp"; //w
    keyCodesNormal[88] = "dashedRatioDown"; //x
    keyCodesNormal[67] = "switchColorDistribution"; // c
    keyCodesNormal[86] = "switchCurvesStyle"; //v
    keyCodesNormal[66] = "switchColorControlled"; //b
    
    /* ------------------ */
    
    keyCodesShift[65] = "lw1Up"; //a
    keyCodesShift[90] = "lw1Down"; //z
    keyCodesShift[69] = "lw2Up"; //e
    keyCodesShift[82] = "lw2Down"; //r
    keyCodesShift[84] = "lw3Up"; //t
    keyCodesShift[89] = "lw3Down"; //y
    keyCodesShift[85] = "maxTUp"; //u
    keyCodesShift[73] = "maxTDown"; //i
    keyCodesShift[79] = "stpUp"; //o
    keyCodesShift[80] = "stpDown"; //p
    
    keyCodesShift[81] = "aParamUp"; //q
    keyCodesShift[83] = "aParamDown"; //s
    keyCodesShift[68] = "bParamUp"; //d
    keyCodesShift[70] = "bParamDown"; //f
    keyCodesShift[71] = "cParamUp"; //g
    keyCodesShift[72] = "cParamDown"; //h
    keyCodesShift[74] = "beginTUp"; //j
    keyCodesShift[75] = "beginTDown"; //k
    
    keyCodesShift[76] = "toggleFullScreen"; //l
  }
  
  void keydown(KeyboardEvent event) {
      //print("key pressed : " + event.keyCode.toString() + " ctrl : " + event.ctrlKey.toString());
      
      currentKeyCodePressed.removeWhere((item) => item == event.keyCode);
      if (event.keyCode != 16) currentKeyCodePressed.add(event.keyCode);
      
      if (event.shiftKey) {
        currentKeyCodePressed.forEach((item) => window.dispatchEvent(new CustomEvent(keyCodesNormal[item], detail:false)));
        
        if (event.keyCode == 16) {
          // ctrl key is pressed
          if (currentKeyCodePressed.length > 0) {
            //print("last : " + currentKeyCodePressed.last.toString());
            window.dispatchEvent(new CustomEvent(keyCodesShift[currentKeyCodePressed.last], detail:true));
          }
        } else {
          if (bcbcApp.ownMouse) window.dispatchEvent(new CustomEvent(keyCodesShift[event.keyCode], detail:true));
        }
      } else {
        if (bcbcApp.ownMouse) window.dispatchEvent(new CustomEvent(keyCodesNormal[event.keyCode], detail:true));
        else if (recordingKeys) {
          //keyCodesNormal[event.keyCode] = actionSelect.value.toString();
          notes2.innerHtml = " key recorded"; //new String.fromCharCode(event.keyCode) + ;
        }
      }
  }

  void keyup(KeyboardEvent event) {
    currentKeyCodePressed.removeWhere((item) => item == event.keyCode);

    window.dispatchEvent(new CustomEvent(keyCodesShift[event.keyCode], detail:false));      
    window.dispatchEvent(new CustomEvent(keyCodesNormal[event.keyCode], detail:false));

  }
}