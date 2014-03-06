# ADDING KEYBOARD CONTROLLER
I have in mind to hack some keyboard interface in order to build my final panel for user control, with custom joysticks and buttons. At first I have to make sure that's possible to handle the parametric equation with keyboard events. I want to add many controls, and therefore my source code must stay clear... I thought of adding a new class for keyboard events. I built this one :

```
class KeyboardController
{
  Map keyCodesNormal; 
  
  KeyboardController() {
      keyCodesNormal = new Map();
      for (var i = 0; i < 300; i++) {
        keyCodesNormal[i] = "nothing";
      }
      
      initialiseKeyCodesBinding();
      
      document.onKeyDown.listen(keydown);
      document.onKeyUp.listen(keyup);
  }
  
  void initialiseKeyCodesBinding() {
    keyCodesNormal[65] = "lineWidthUp";
    keyCodesNormal[81] = "lineWidthDown";
    keyCodesNormal[90] = "stpParamUp";
    keyCodesNormal[83] = "stpParamDown";
    
    keyCodesNormal[85] = "colorHueUp";
    keyCodesNormal[74] = "colorHueDown";
    keyCodesNormal[73] = "colorSatUp";
    keyCodesNormal[75] = "colorSatDown";
    keyCodesNormal[79] = "colorLumUp";
    keyCodesNormal[76] = "colorLumDown";
  }
  
  void keydown(KeyboardEvent event) {
      window.dispatchEvent(new CustomEvent(keyCodesNormal[event.keyCode], detail:true));
  }

  void keyup(KeyboardEvent event) {
      window.dispatchEvent(new CustomEvent(keyCodesNormal[event.keyCode], detail:false));
  }
}
```

For example, when you press A letter in keyboard, it brings an event with keyCode 65. Then a new event is dispatched, with a clearer message = "lineWidthUp". It means that I want to increase the width of lines. Next, in the window the code has to listen at this message :

```
window.on['lineWidthUp'].listen((e) {
    if (e.detail) bezierCanvas.dLineWidth = 1;
    else bezierCanvas.dLineWidth = 0;
    });
```

dLineWidth is the growth of line width every frames.

I have completed the source code with a colorPicker driven by keyboard.

This is what I've got today :

![Curve 03](../project_images/curve03.jpg?raw=true "Curve 03")


That's all for my post number 4. :->