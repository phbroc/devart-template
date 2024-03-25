import 'dart:html';
import 'package:bcbc2/bcbc_app.dart';

late BcbcApp bcbc;

void main() {
  querySelector('#title')?.text = 'Bezier Curves Big Circus';
  bcbc = BcbcApp();
  bcbc.init();
}
