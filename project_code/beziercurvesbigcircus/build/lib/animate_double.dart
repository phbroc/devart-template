import 'dart:async';
import 'dart:math';

class AnimateDouble {
  double _value = 0;
  double _valueTarget = 0;
  double _valueGap = 0;
  double _mini = 0;
  double _maxi = 0;
  double _step = 1;
  String _mode = "";
  static const LINEAR_UP = "linearUp";
  static const LINEAR_DOWN = "linearDown";
  static const EXP_UP = "expUp";
  static const EXP_DOWN = "expDown";
  static const BREAK_DOWN = "breakDown";
  static const BREAK_UP = "breakUp";
  static const EASE_IN_OUT = "easeInOut";
  static const LINEAR_FACT = 0.001;
  static const EXP_FACT = 0.0001;
  static const CONSTANT_UP = "constantUp";
  static const CONSTANT_DOWN = "constantDown";
  static const SELECTED = "selected";
  static double velocityExp = 1;
  static double velocityLin = 1;
  late Timer _timer;
  int _t = 0;
  int _tFinal = 1;
  bool _cyclic = false;

  AnimateDouble(this._value, this._mini, this._maxi) {
    _timer = Timer(const Duration(milliseconds: 100), () => _mode = "");
  }

  void update() {
    switch (_mode) {
      case LINEAR_UP :   _value = min(_maxi, _value + _step);
      _step = min((1+(velocityLin/10)) *_step, 0.05*(_maxi - _value));
      break;
      case LINEAR_DOWN : _value = max(_mini, _value - _step);
      _step = min((1+(velocityLin/10)) *_step, 0.05*(_value - _mini));
      break;
      case EXP_UP :   _value = min(_maxi, _value + _step);
      _step = min((1+(velocityExp/10)) *_step, 0.05*(_maxi - _value));
      break;
      case EXP_DOWN : _value = max(_mini, _value - _step);
      _step = min((1+(velocityExp/10))*_step, 0.05*(_value - _mini));
      break;
      case CONSTANT_UP : if ((_cyclic) && (_value > _maxi -_step)) _value -= _maxi -_mini;
      _value = min(_maxi, _value + _step);
      break;
      case CONSTANT_DOWN : if ((_cyclic) && (_value < _mini +_step)) _value += _maxi -_mini;
      _value = max(_mini, _value - _step);
      break;
      case BREAK_UP : _value = min(_maxi, _value + _step);
      _step *= 0.9;
      break;
      case BREAK_DOWN : _value = max(_mini, _value - _step);
      _step *= 0.9;
      break;
      case EASE_IN_OUT : _value = _valueTarget - (_valueGap *(1-easeInOut(_t/_tFinal)));
      _t++;
      if (_t > _tFinal) {
        _mode = "";
        _value = _valueTarget;
      }
      break;
    }
  }

  void play(String m) {
    if (m != _mode) {
      _mode = m;
      switch (_mode) {
        case LINEAR_UP : case LINEAR_DOWN : _step = max(_value * LINEAR_FACT * velocityLin, LINEAR_FACT); break;
        case EXP_UP : case EXP_DOWN : _step = max(_value * EXP_FACT * velocityExp, EXP_FACT); break;
        case CONSTANT_UP : case CONSTANT_DOWN : _step = 0.002 *(_maxi - _mini) * velocityLin; break;
        case SELECTED : _step = 0.0; break;
      }

    }
    if (_timer.isActive) _timer.cancel();
    // _valueTarget = null; on ne peut pas mettre _valueTarget à null
    //print("play "+_value.toString());
  }

  void tween(String m, double v, int f) {
    _mode = m;
    _valueTarget = max(_mini, min(_maxi, v));
    _valueGap = _valueTarget - _value;
    _t = 0;
    _tFinal = f;
  }

  void stop() {
    switch (_mode) {
      case LINEAR_UP : case EXP_UP : case CONSTANT_UP : _mode = BREAK_UP; break;
      case LINEAR_DOWN : case EXP_DOWN : case CONSTANT_DOWN : _mode = BREAK_DOWN; break;
    }

    if (_timer.isActive) _timer.cancel();
    _timer = Timer(const Duration(milliseconds: 500), () => _mode = "");
    //print("stop "+_value.toString());
  }

  double easeInOut(double a) {
    return (atan(6*a -3) +1.25) /2.5;
  }

  String get prompt => ((_value*1000).round()/1000).toString();
  double get value => _value;
  set value(double v) {_value = v;}
  int get valueInt => _value.floor();
  double get valueHalf => _value/2;
  double get valueDigit2 => (_value*100).round()/100;
  double get mini => _mini;
  double get maxi => _maxi;
  bool get moving => ((_mode != "") && (_mode != SELECTED));
  bool get selected => (_mode == SELECTED);
}