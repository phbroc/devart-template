part of beziercurvesbigcircus;

class ColorController {
  Color color;
  int r;
  int g;
  int b;
  int h;
  int s;
  int l;
  static const HUE_UP = "hueUp";
  static const HUE_DOWN = "hueDown";
  static const SATURATION_UP = "saturationUp";
  static const SATURATION_DOWN = "saturationDown";
  static const LIGHTNESS_UP = "lightnessUp";
  static const LIGHTNESS_DOWN = "lightnessDown";
  static const BACK_TO_INIT = "backToInit";
  String mode;
  
  ColorController(this.r, this.g, this.b) {
    color = new Color.createRgba(r, g, b, 1.0);
    h = color.hsla.hueDegrees;
    s = color.hsla.saturationPercentage;
    l = color.hsla.lightnessPercentage;
    mode = "";
  }
  
  void hueUp() {
    h++;
    if (h>360) h -= 360;
    synchroniseFromHsl();
  }
  
  void hueDown() {
     h--;
     if (h<0) h += 360;
     synchroniseFromHsl();
  }
  
  void saturationUp() {
    s = min(100, s +1);
    synchroniseFromHsl();
  }
  
  void saturationDown() {
    s = max(0, s -1);
    synchroniseFromHsl();
  }
  
  void lightnessUp() {
    l = min(100, l +1);
    synchroniseFromHsl();
  }
  
  void lightnessDown() {
    l = max(0, l -1);
    synchroniseFromHsl();
  }
  
  void update() {
    switch (mode)
    {
      case HUE_UP : hueUp(); break;
      case HUE_DOWN : hueDown(); break;
      case SATURATION_UP : saturationUp(); break;
      case SATURATION_DOWN : saturationDown(); break;
      case LIGHTNESS_UP : lightnessUp(); break;
      case LIGHTNESS_DOWN : lightnessDown(); break;
    }
  }
  
  void synchroniseFromHsl() {
    color = new Color.createHsla(h, s, l, 1.0);
     r = color.rgba.r;
     g = color.rgba.g;
     b = color.rgba.b;
  }
  
  void synchroniseFromRgb() {
    color = new Color.createRgba(r, g, b, 1.0);
     h = color.hsla.hueDegrees;
     s = color.hsla.saturationPercentage;
     l = color.hsla.lightnessPercentage;
  }
}