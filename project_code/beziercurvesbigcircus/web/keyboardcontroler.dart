part of beziercurvesbigcircus;

class KeyboardController
{
  Map keyCodesNormal; 
  Map keyCodesShift;
  
  List<int> currentKeyCodePressed;
  
  KeyboardController() {
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
    keyCodesNormal[87] = "lw1Up"; //w
    keyCodesNormal[88] = "lw1Down"; //x
    keyCodesNormal[67] = "lw2Up"; //c
    keyCodesNormal[86] = "lw2Down"; //v
    keyCodesNormal[66] = "lw3Up"; //b
    keyCodesNormal[78] = "lw3Down"; //n
    
    keyCodesNormal[65] = "maxTUp"; //a
    keyCodesNormal[81] = "maxTDown"; //q
    keyCodesNormal[90] = "stpParamUp"; //z
    keyCodesNormal[83] = "stpParamDown"; //s
    keyCodesNormal[69] = "aParamUp"; //e
    keyCodesNormal[68] = "aParamDown"; //d
    keyCodesNormal[82] = "bParamUp"; //r
    keyCodesNormal[70] = "bParamDown"; //f
    
    keyCodesNormal[85] = "colorHueUp"; //u
    keyCodesNormal[74] = "colorHueDown"; //j
    keyCodesNormal[73] = "colorSatUp"; //i
    keyCodesNormal[75] = "colorSatDown"; //k
    keyCodesNormal[79] = "colorLightUp"; //o
    keyCodesNormal[76] = "colorLightDown"; //l
    keyCodesNormal[80] = "toggleColorControlled"; //p
    
    keyCodesNormal[84] = "bezierCurves"; //t
    keyCodesNormal[71] = "obliqCurves"; //g
    keyCodesNormal[89] = "colorAlternate"; //y
    keyCodesNormal[72] = "colorInterpol"; //h
    
    keyCodesNormal[33] = ""; // pageUp
    keyCodesNormal[34] = ""; // pageDown
    
    /* ------------------ */
    
    keyCodesShift[65] = "zoomUp"; //a
    keyCodesShift[81] = "zoomDown"; //q
    keyCodesShift[90] = "splitHorzUp"; //z
    keyCodesShift[83] = "splitHorzDown"; //s
    keyCodesShift[69] = "splitWidthUp"; //e
    keyCodesShift[68] = "splitWidthDown"; //d
    keyCodesShift[82] = "splitVertUp"; //r
    keyCodesShift[70] = "splitVertDown"; //f
    keyCodesShift[84] = "splitHeightUp"; //t
    keyCodesShift[71] = "splitHeightDown"; //g
  }
  
  void keydown(KeyboardEvent event) {
      //print("key pressed : " + event.keyCode.toString() + " shift : " + event.shiftKey.toString());
      
      currentKeyCodePressed.removeWhere((item) => item == event.keyCode);
      if (event.keyCode != 16) currentKeyCodePressed.add(event.keyCode);
      
      if (event.shiftKey) {
        currentKeyCodePressed.forEach((item) => window.dispatchEvent(new CustomEvent(keyCodesNormal[item], detail:false)));
        
        if (event.keyCode == 16) {
          // shift key is pressed
          //print("shift... " + currentKeyCodePressed.length.toString());
          if (currentKeyCodePressed.length > 0) {
            //print("last : " + currentKeyCodePressed.last.toString());
            window.dispatchEvent(new CustomEvent(keyCodesShift[currentKeyCodePressed.last], detail:true));
          }
        } else {
          window.dispatchEvent(new CustomEvent(keyCodesShift[event.keyCode], detail:true));
        }
      } else {
        window.dispatchEvent(new CustomEvent(keyCodesNormal[event.keyCode], detail:true));
      }
  }

  void keyup(KeyboardEvent event) {
    currentKeyCodePressed.removeWhere((item) => item == event.keyCode);

    window.dispatchEvent(new CustomEvent(keyCodesShift[event.keyCode], detail:false));      
    window.dispatchEvent(new CustomEvent(keyCodesNormal[event.keyCode], detail:false));

  }
}