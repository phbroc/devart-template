part of beziercurvesbigcircus;


class AnimateDouble {
  double value;
  double valueTarget;
  double valueGap;
  double mini;
  double maxi;
  double step;
  String mode = "";
  static const LINEAR_UP = "linearUp";
  static const LINEAR_DOWN = "linearDown";
  static const EXP_UP = "expUp";
  static const EXP_DOWN = "expDown";
  static const BREAK_DOWN = "breakDown";
  static const BREAK_UP = "breakUp";
  static const EASE_IN_OUT = "easeInOut";
  static const LINEAR_FACT = 0.025;
  static const EXP_FACT = 0.001;
  Timer timer;
  int t;
  int tFinal;
  
  AnimateDouble(this.value, this.mini, this.maxi);
  
  void update() {
    switch (mode) {
      case LINEAR_UP :   value = min(maxi, value + step); 
                              step = min(step, 0.05*(maxi - value));
                              break;
      case LINEAR_DOWN : value = max(mini, value - step); 
                              step = min(step, 0.05*(value - mini));
                              break;
      case EXP_UP :   value = min(maxi, value + step); 
                                    step = min(1.1*step, 0.05*(maxi - value));
                                    break;
      case EXP_DOWN : value = max(mini, value - step); 
                                    step = min(1.1*step, 0.05*(value - mini));
                                    break;
      case BREAK_UP : value = min(maxi, value + step);
                                    step *= 0.9;
                                    break;
      case BREAK_DOWN : value = max(mini, value - step);
                              step *= 0.9;
                              break;
      case EASE_IN_OUT : value = valueTarget - (valueGap *(1-easeInOut(t/tFinal)));
                              t++;
                              if (t > tFinal) {
                                mode = "";
                                value = valueTarget;
                              }
                              break;
    }
  }

  void play(String m) {
    if (m != mode) {
      mode = m;
      switch (mode) {
        case LINEAR_UP : case LINEAR_DOWN : step = max(value * LINEAR_FACT, LINEAR_FACT); break;
        case EXP_UP : case EXP_DOWN : step = max(value * EXP_FACT, EXP_FACT); break;
      }
      
    }
    if ((timer != null) && (timer.isActive)) timer.cancel();
    valueTarget = null;
  }
  
  void tween(String m, double v, int f) {
    mode = m;
    valueTarget = max(mini, min(maxi, v));
    valueGap = valueTarget - value;
    t = 0;
    tFinal = f;
  }
  
  void stop() {
    switch (mode) {
          case LINEAR_UP : case EXP_UP : mode = BREAK_UP; break;
          case LINEAR_DOWN : case EXP_DOWN : mode = BREAK_DOWN; break;
    }
    
    if ((timer != null) && (timer.isActive)) timer.cancel();
    timer = new Timer(const Duration(milliseconds: 500), () => mode = "");
  }
  
  double easeInOut(double a) {
    return (atan(6*a -3) +1.25) /2.5;
  }
  
  int get valueInt => value.floor();
  double get valueHalf => value/2;
  double get valueDigit2 => (value*100).round()/100;
}