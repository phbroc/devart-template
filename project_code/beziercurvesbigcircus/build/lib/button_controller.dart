import 'dart:html';

class ButtonController {
  late ButtonElement _btn;

  ButtonController(String idButton, String strEvent, bool click) {
    _btn = querySelector(idButton) as ButtonElement;
    if (click) {
      _btn.onClick.listen((e) => window.dispatchEvent(CustomEvent(strEvent, detail:true)));
    }
    else {
      _btn.onMouseDown.listen((e) => window.dispatchEvent(CustomEvent(strEvent, detail:true)));
      _btn.onMouseUp.listen((e) => window.dispatchEvent(CustomEvent(strEvent, detail:false)));
      _btn.onTouchStart.listen((e) => window.dispatchEvent(CustomEvent(strEvent, detail:true)));
      _btn.onTouchEnd.listen((e) => window.dispatchEvent(CustomEvent(strEvent, detail:false)));
    }
  }
}