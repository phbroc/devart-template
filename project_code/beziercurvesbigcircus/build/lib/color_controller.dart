import 'package:color/color.dart';
import 'dart:math';

class ColorController {
  late Color color;
  late int r;
  late int _rTarget;
  late int _rGap;
  late int g;
  late int _gTarget;
  late int _gGap;
  late int b;
  late int _bTarget;
  late int _bGap;
  late int h;
  late int s;
  late int l;
  static const HUE_UP = "hueUp";
  static const HUE_DOWN = "hueDown";
  static const SATURATION_UP = "saturationUp";
  static const SATURATION_DOWN = "saturationDown";
  static const LIGHTNESS_UP = "lightnessUp";
  static const LIGHTNESS_DOWN = "lightnessDown";
  static const EASE_IN_OUT = "easeInOut";
  static const SELECTED = "selected";
  String mode = "";
  int _t = 0;
  int _tFinal = 1;

  ColorController(this.r, this.g, this.b) {
    synchroniseFromRgb();
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
      case EASE_IN_OUT :
        r = _rTarget - (_rGap *(1-easeInOut(_t/_tFinal))).round();
        g = _gTarget - (_gGap *(1-easeInOut(_t/_tFinal))).round();
        b = _bTarget - (_bGap *(1-easeInOut(_t/_tFinal))).round();
        synchroniseFromRgb();
        _t++;
        if (_t > _tFinal) {
          mode = "";
          r = _rTarget;
          g = _gTarget;
          b = _bTarget;
          synchroniseFromRgb();
        }
        break;
    }
  }

  double easeInOut(double a) {
    return (atan(6*a -3) +1.25) /2.5;
  }

  void synchroniseFromHsl() {
    color = Color.hsl(h, s, l);
    r = color.toRgbColor().r.toInt();
    g = color.toRgbColor().g.toInt();
    b = color.toRgbColor().b.toInt();
  }

  void synchroniseFromRgb() {
    color = Color.rgb(r, g, b);
    h = color.toHslColor().h.toInt();
    s = color.toHslColor().s.toInt();
    l = color.toHslColor().l.toInt();
  }

  void tween(String m, int rt, int gt, int bt, int f) {
    mode = m;
    _rTarget = rt;
    _rGap = _rTarget - r;
    _gTarget = gt;
    _gGap = _gTarget - g;
    _bTarget = bt;
    _bGap = _bTarget - b;
    _t = 0;
    _tFinal = f;
  }

  bool get moving => mode != "";
  String get prompt => ((r << 16) | (g << 8) | (b)).toString();
}