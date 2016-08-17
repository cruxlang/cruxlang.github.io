(function() {
  "use strict";
  var _rts_current_exception = null;

function _rts_set_exception(e) {
    _rts_current_exception = e;
}

function _rts_clear_exception() {
    _rts_current_exception = null;
}

function _rts_new_exception(name, baseException) {
    // TODO: validate the name is a valid js identifier
    // TODO: catch the eval exception in CSP contexts and try something simpler in that case
    var ctor = new Function("name", "return function " + name + "(message, e) {\n  this.message = message;\n  this.buildStack(e || new Error);\n}\n")(name);

    ctor.prototype.name = name;
    ctor.prototype.toString = function() {
        if (this.message === undefined) {
            return this.name;
        } else {
            return this.name + ": " + this.message;
        }
    };
    ctor.prototype.buildStack = function(e) {
        var stack = e.stack;
        if (stack !== undefined) {
            this.stack = this.toString() + '\n' +
                stack.replace(/^Error(:[^\n]*)?\n/, '');
        }
    };

    ctor.throw = function(message, e) {
        throw new ctor(message, e);
    };

    ctor.check = function(e) {
        return e instanceof ctor;
    };

    return ctor;
}
;
  var $boolean_True;
  var $boolean_False;
  var $boolean_not;
  (function() {
    var True = true;
    var False = false;
    function not(b) {
      var $0;
      if ((true===b)) {
        {
        }
        $0 = False;
      }
      else {
        if ((false===b)) {
          {
          }
          $0 = True;
        }
        else {
        }
      }
      return $0;
    }
    $boolean_True = True;
    $boolean_False = False;
    $boolean_not = not;
  })();
  var $cmp_eq;
  var $cmp_neq;
  var $$Boolean$Eq$$$boolean$$$cmp;
  (function() {
    function eq(dict) {
      return (dict).eq;
    }
    function neq(dict) {
      return (dict).neq;
    }
    var $0 = function eq(x, y) { return x === y; };
    var $1 = function neq(x, y) { return x !== y; };
    $$Boolean$Eq$$$boolean$$$cmp = {eq:$0, neq:$1};
    $cmp_eq = eq;
    $cmp_neq = neq;
    $$Boolean$Eq$$$boolean$$$cmp = $$Boolean$Eq$$$boolean$$$cmp;
  })();
  var $$Number$Eq$$$number$$$cmp;
  (function() {
    var $0 = function(x, y) { return x === y; };
    var $1 = function(x, y) { return x !== y; };
    $$Number$Eq$$$number$$$cmp = {eq:$0, neq:$1};
    $$Number$Eq$$$number$$$cmp = $$Number$Eq$$$number$$$cmp;
  })();
  var $length_len;
  (function() {
    function len(dict) {
      return (dict).len;
    }
    $length_len = len;
  })();
  var $array_get;
  var $$Array$HasLength$$$array$$$length;
  var $$Array$Eq$$$array$$$cmp;
  var $array_replicate;
  var $array_each;
  var $array_sliceFrom;
  var $array_sliceTo;
  var $array_slice;
  (function() {
    var $0 = function (len) { return new Array(len); };
    var _unsafe_new = $0;
    var $1 = function (arr, idx, el) { arr[idx] = el; };
    var _unsafe_set = $1;
    var $2 = function (arr, idx) { return arr[idx]; };
    var _unsafe_get = $2;
    function get(a, idx) {
      var $3 = _unsafe_get(a, idx);
      return $3;
    }
    $$Array$HasLength$$$array$$$length = {len:(function(a) {
      var $4 = a;
      var $5 = ($4).length;
      return $5;
    })};
    $$Array$Eq$$$array$$$cmp = (function($cmp$Eq$43) {
      return {eq:(function(lhs, rhs) {
        var $6 = $length_len($$Array$HasLength$$$array$$$length);
        var $7 = $6(lhs);
        {
          var lhs_length = $7;
        }
        var $8 = $length_len($$Array$HasLength$$$array$$$length);
        var $9 = $8(rhs);
        {
          var rhs_length = $9;
        }
        var $10 = $cmp_neq($$Number$Eq$$$number$$$cmp);
        var $11 = $10(lhs_length, rhs_length);
        var $12;
        if ($11) {
          return $boolean_False;
        }
        else {
          $12 = (void 0);
        }
        {
          var i = 0;
        }
        while (true)
        {
          var $13 = (i<lhs_length);
          var $14 = (!$13);
          var $15;
          if ($14) {
            break;
          }
          else {
            $15 = (void 0);
          }
          var $16 = $cmp_neq($cmp$Eq$43);
          var $17 = get(lhs, i);
          var $18 = get(rhs, i);
          var $19 = $16($17, $18);
          var $20;
          if ($19) {
            return $boolean_False;
          }
          else {
            $20 = (void 0);
          }
          var $21 = (i+1);
          i = $21;
        }
        return $boolean_True;
      }), neq:(function(lhs, rhs) {
        var $22 = $$Array$Eq$$$array$$$cmp($cmp$Eq$43);
        var $23 = $cmp_eq($22);
        var $24 = $23(lhs, rhs);
        var $25 = $boolean_not($24);
        return $25;
      })};
    });
    function replicate(element, n) {
      var $26 = _unsafe_new(n);
      {
        var arr = $26;
      }
      {
        var i = 0;
      }
      while (true)
      {
        var $27 = (i<n);
        var $28 = (!$27);
        var $29;
        if ($28) {
          break;
        }
        else {
          $29 = (void 0);
        }
        var $30 = _unsafe_set(arr, i, element);
        var $31 = (i+1);
        i = $31;
      }
      return arr;
    }
    function each(arr, f) {
      {
        var i = 0;
      }
      var $32 = $length_len($$Array$HasLength$$$array$$$length);
      var $33 = $32(arr);
      {
        var n = $33;
      }
      while (true)
      {
        var $34 = (i<n);
        var $35 = (!$34);
        var $36;
        if ($35) {
          break;
        }
        else {
          $36 = (void 0);
        }
        var $37 = _unsafe_get(arr, i);
        var $38 = f($37);
        var $39 = (i+1);
        i = $39;
      }
      return (void 0);
    }
    function sliceFrom(arr, start) {
      var $40 = arr;
      var $41 = ($40).slice(start);
      return $41;
    }
    function sliceTo(arr, end) {
      var $42 = arr;
      var $43 = ($42).slice(0, end);
      return $43;
    }
    function slice(arr, start, end) {
      var $44 = arr;
      var $45 = ($44).slice(start, end);
      return $45;
    }
    $array_get = get;
    $$Array$HasLength$$$array$$$length = $$Array$HasLength$$$array$$$length;
    $$Array$Eq$$$array$$$cmp = $$Array$Eq$$$array$$$cmp;
    $array_replicate = replicate;
    $array_each = each;
    $array_sliceFrom = sliceFrom;
    $array_sliceTo = sliceTo;
    $array_slice = slice;
  })();
  var $pair_Pair;
  var $$Pair$Eq$$$pair$$$cmp;
  (function() {
    function Pair(a0, a1) {
      return ["Pair", a0, a1];
    }
    $$Pair$Eq$$$pair$$$cmp = (function($cmp$Eq$9, $cmp$Eq$10) {
      return {eq:(function($_0, $_1) {
        var a = $_0[1];
        var b = $_0[2];
        var c = $_1[1];
        var d = $_1[2];
        var $0 = $cmp_eq($cmp$Eq$9);
        var $1 = $0(a, c);
        var $2 = $cmp_eq($cmp$Eq$10);
        var $3 = $2(b, d);
        var $4 = ($1&&$3);
        return $4;
      }), neq:(function($_2, $_3) {
        var a = $_2[1];
        var b = $_2[2];
        var c = $_3[1];
        var d = $_3[2];
        var $5 = $cmp_neq($cmp$Eq$9);
        var $6 = $5(a, c);
        var $7 = $cmp_neq($cmp$Eq$10);
        var $8 = $7(b, d);
        var $9 = ($6||$8);
        return $9;
      })};
    });
    $pair_Pair = Pair;
    $$Pair$Eq$$$pair$$$cmp = $$Pair$Eq$$$pair$$$cmp;
  })();
  var $option_Some;
  var $option_None;
  var $$Option$Eq$$$option$$$cmp;
  (function() {
    function Some(a0) {
      return ["Some", a0];
    }
    var None = ["None"];
    $$Option$Eq$$$option$$$cmp = (function($cmp$Eq$5) {
      return {eq:(function(lhs, rhs) {
        var $0 = $pair_Pair(lhs, rhs);
        var $1;
        if (((("Pair"===$0[0])&&("None"===$0[1][0]))&&("None"===$0[2][0]))) {
          {
          }
          $1 = $boolean_True;
        }
        else {
          if (((("Pair"===$0[0])&&("Some"===$0[1][0]))&&("Some"===$0[2][0]))) {
            {
              var x = $0[1][1];
              var y = $0[2][1];
            }
            var $2 = $cmp_eq($cmp$Eq$5);
            var $3 = $2(x, y);
            $1 = $3;
          }
          else {
            {
            }
            $1 = $boolean_False;
          }
        }
        return $1;
      })};
    });
    $option_Some = Some;
    $option_None = None;
    $$Option$Eq$$$option$$$cmp = $$Option$Eq$$$option$$$cmp;
  })();
  var $result_Ok;
  var $result_Err;
  (function() {
    function Ok(a0) {
      return ["Ok", a0];
    }
    function Err(a0) {
      return ["Err", a0];
    }
    $result_Ok = Ok;
    $result_Err = Err;
  })();
  var $$String$Eq$$$string$$$cmp;
  var $$String$HasLength$$$string$$$length;
  var $string_startsWith;
  var $string_endsWith;
  var $string_join;
  var $string_sliceFrom;
  var $string_trim;
  (function() {
    var $0 = function eq(x, y) { return x === y; };
    var $1 = function neq(x, y) { return x !== y; };
    $$String$Eq$$$string$$$cmp = {eq:$0, neq:$1};
    $$String$HasLength$$$string$$$length = {len:(function(s) {
      var $2 = s;
      var $3 = ($2).length;
      return $3;
    })};
    function startsWith(haystack, needle) {
      var $4 = haystack;
      {
        var h = $4;
      }
      var $5 = needle;
      {
        var n = $5;
      }
      var $6 = (n).length;
      var $7 = (h).length;
      var $8 = ($6>$7);
      var $9;
      if ($8) {
        return $boolean_False;
      }
      else {
        $9 = (void 0);
      }
      var $10 = $cmp_eq($$Number$Eq$$$number$$$cmp);
      var $11 = (h).indexOf(n, 0);
      var $12 = $10($11, 0);
      return $12;
    }
    function endsWith(haystack, needle) {
      var $13 = haystack;
      {
        var h = $13;
      }
      var $14 = needle;
      {
        var n = $14;
      }
      var $15 = (n).length;
      var $16 = (h).length;
      var $17 = ($15>$16);
      var $18;
      if ($17) {
        return $boolean_False;
      }
      else {
        $18 = (void 0);
      }
      var $19 = $cmp_neq($$Number$Eq$$$number$$$cmp);
      var $20 = (h).length;
      var $21 = (n).length;
      var $22 = ($20-$21);
      var $23 = (h).indexOf(n, $22);
      var $24 = (0-1);
      var $25 = $19($23, $24);
      return $25;
    }
    function join(sep, elements) {
      var $26 = elements;
      var $27 = ($26).join(sep);
      return $27;
    }
    function sliceFrom(s, start) {
      var $28 = s;
      var $29 = ($28).slice(start);
      return $29;
    }
    function trim(s) {
      var $30 = s;
      var $31 = ($30).trim();
      return $31;
    }
    $$String$Eq$$$string$$$cmp = $$String$Eq$$$string$$$cmp;
    $$String$HasLength$$$string$$$length = $$String$HasLength$$$string$$$length;
    $string_startsWith = startsWith;
    $string_endsWith = endsWith;
    $string_join = join;
    $string_sliceFrom = sliceFrom;
    $string_trim = trim;
  })();
  var $mutarray_append;
  var $mutarray_get;
  var $$MutableArray$HasLength$$$mutarray$$$length;
  var $mutarray_replicate;
  var $mutarray_each;
  var $mutarray_sliceFrom;
  var $mutarray_sliceTo;
  var $mutarray_slice;
  var $mutarray_freeze;
  var $mutarray_sort;
  (function() {
    var $0 = function (len) { return new Array(len); };
    var _unsafe_new = $0;
    var $1 = function (arr, idx, el) { arr[idx] = el; };
    var _unsafe_set = $1;
    var $2 = function (arr, idx) { return arr[idx]; };
    var _unsafe_get = $2;
    function append(a, v) {
      var $3 = a;
      var $4 = ($3).push(v);
      return $4;
    }
    function get(a, idx) {
      var $5 = _unsafe_get(a, idx);
      return $5;
    }
    $$MutableArray$HasLength$$$mutarray$$$length = {len:(function(arr) {
      var $6 = arr;
      var $7 = ($6).length;
      return $7;
    })};
    function replicate(element, n) {
      var $8 = _unsafe_new(n);
      {
        var arr = $8;
      }
      {
        var i = 0;
      }
      while (true)
      {
        var $9 = (i<n);
        var $10 = (!$9);
        var $11;
        if ($10) {
          break;
        }
        else {
          $11 = (void 0);
        }
        var $12 = _unsafe_set(arr, i, element);
        var $13 = (i+1);
        i = $13;
      }
      return arr;
    }
    function each(arr, f) {
      {
        var i = 0;
      }
      var $14 = $length_len($$MutableArray$HasLength$$$mutarray$$$length);
      var $15 = $14(arr);
      {
        var n = $15;
      }
      while (true)
      {
        var $16 = (i<n);
        var $17 = (!$16);
        var $18;
        if ($17) {
          break;
        }
        else {
          $18 = (void 0);
        }
        var $19 = _unsafe_get(arr, i);
        var $20 = f($19);
        var $21 = (i+1);
        i = $21;
      }
      return (void 0);
    }
    function sliceFrom(arr, start) {
      var $22 = arr;
      var $23 = ($22).slice(start);
      return $23;
    }
    function sliceTo(arr, end) {
      var $24 = arr;
      var $25 = ($24).slice(0, end);
      return $25;
    }
    function slice(arr, start, end) {
      var $26 = arr;
      var $27 = ($26).slice(start, end);
      return $27;
    }
    function freeze(arr) {
      var $28 = arr;
      var $29 = ($28).slice();
      return $29;
    }
    function sort(arr) {
      var $30 = arr;
      var $31 = ($30).sort();
      return $31;
    }
    $mutarray_append = append;
    $mutarray_get = get;
    $$MutableArray$HasLength$$$mutarray$$$length = $$MutableArray$HasLength$$$mutarray$$$length;
    $mutarray_replicate = replicate;
    $mutarray_each = each;
    $mutarray_sliceFrom = sliceFrom;
    $mutarray_sliceTo = sliceTo;
    $mutarray_slice = slice;
    $mutarray_freeze = freeze;
    $mutarray_sort = sort;
  })();
  var $builtin_print;
  var $builtin_toString;
  var $builtin_emptyArray;
  (function() {
    function print(a) {
      var $0 = console;
      var $1 = ($0).log(a);
      return $1;
    }
    var $2 = function toString(v) { return '' + v; };
    var toString = $2;
    function emptyArray() {
      var $3 = [];
      return $3;
    }
    $builtin_print = print;
    $builtin_toString = toString;
    $builtin_emptyArray = emptyArray;
  })();
  var $$LastCompile$Eq$$$main$$$cmp;
  (function() {
    function TimerId(a0) {
      return ["TimerId", a0];
    }
    function unTimerId($_4) {
      var t = $_4[1];
      return t;
    }
    var COMPILE_DELAY = 1000;
    function as_bool(a) {
      var $0 = function (x) { return !!x; };
      {
        var to_bool = $0;
      }
      var $1 = a;
      var $2 = to_bool($1);
      return $2;
    }
    function querySelector(sel) {
      var $3 = document;
      var $4 = ($3).querySelector(sel);
      return $4;
    }
    function getElementById(id) {
      var $5 = document;
      var $6 = ($5).getElementById(id);
      return $6;
    }
    function setTimeout(f, delay) {
      var $7 = window;
      var $8 = ($7).setTimeout(f, delay);
      var $9 = TimerId($8);
      return $9;
    }
    function clearTimeout(tid) {
      var $10 = window;
      var $11 = unTimerId(tid);
      var $12 = ($10).clearTimeout($11);
      return $12;
    }
    function compileCrux(source) {
      var $13 = window;
      var $14 = ($13).compileCrux(source);
      {
        var rawRes = $14;
      }
      var $15 = (rawRes).error;
      var $16 = as_bool($15);
      var $17;
      if ($16) {
        var $18 = (rawRes).error;
        var $19 = $result_Err($18);
        $17 = $19;
      }
      else {
        var $20 = (rawRes).result;
        var $21 = $result_Ok($20);
        $17 = $21;
      }
      return $17;
    }
    function newXmlHttpRequest() {
      var $22 = new XMLHttpRequest;
      return $22;
    }
    function toJson(o) {
      var $23 = JSON.stringify;
      var $24 = $23(o);
      return $24;
    }
    function parseJson(s) {
      var $25 = JSON.parse;
      var $26 = $25(s);
      return $26;
    }
    var Idle = ["Idle"];
    function Waiting(a0) {
      return ["Waiting", a0];
    }
    function Optimizing(a0) {
      return ["Optimizing", a0];
    }
    function LastCompile(a0, a1) {
      return ["LastCompile", a0, a1];
    }
    $$LastCompile$Eq$$$main$$$cmp = {eq:(function($_5, $_6) {
      var a = $_5[1];
      var b = $_5[2];
      var c = $_6[1];
      var d = $_6[2];
      var $27 = $cmp_eq($$String$Eq$$$string$$$cmp);
      var $28 = $27(a, c);
      var $29 = $cmp_eq($$Boolean$Eq$$$boolean$$$cmp);
      var $30 = $29(b, d);
      var $31 = ($28&&$30);
      return $31;
    }), neq:(function(x, y) {
      var $32 = $cmp_eq($$LastCompile$Eq$$$main$$$cmp);
      var $33 = $32(x, y);
      var $34 = $boolean_not($33);
      return $34;
    })};
    function Compiler(a0) {
      return ["Compiler", a0];
    }
    function newCompiler(onresult) {
      var $35 = Compiler({state:Idle, lastCompile:$option_None, onresult:onresult});
      return $35;
    }
    function compile($_7, source, optimize) {
      var this$ = $_7[1];
      var $36 = (this$).state;
      var $37;
      if (("Idle"===$36[0])) {
        {
        }
        $37 = (void 0);
      }
      else {
        if (("Waiting"===$36[0])) {
          {
            var tid = $36[1];
          }
          var $38 = clearTimeout(tid);
          $37 = $38;
        }
        else {
          if (("Optimizing"===$36[0])) {
            {
              var xhr = $36[1];
            }
            var $39 = (xhr).abort();
            $37 = $39;
          }
          else {
          }
        }
      }
      (this$).state = Idle;
      var $40 = $$Option$Eq$$$option$$$cmp($$LastCompile$Eq$$$main$$$cmp);
      var $41 = $cmp_eq($40);
      var $42 = (this$).lastCompile;
      var $43 = LastCompile(source, optimize);
      var $44 = $option_Some($43);
      var $45 = $41($42, $44);
      var $46;
      if ($45) {
        return (void 0);
      }
      else {
        $46 = (void 0);
      }
      var $78 = setTimeout((function() {
        var $47 = compileCrux(source);
        var $48;
        if (("Err"===$47[0])) {
          {
            var error = $47[1];
          }
          (this$).state = Idle;
          var $49 = LastCompile(source, optimize);
          var $50 = $option_Some($49);
          (this$).lastCompile = $50;
          var $51 = ("Compile error:\n"+error);
          var $52 = $result_Err($51);
          var $53 = (this$).onresult($52);
          return (void 0);
        }
        else {
          if (("Ok"===$47[0])) {
            {
              var res = $47[1];
            }
            var $54 = $boolean_not(optimize);
            var $55;
            if ($54) {
              (this$).state = Idle;
              var $56 = LastCompile(source, optimize);
              var $57 = $option_Some($56);
              (this$).lastCompile = $57;
              var $58 = $result_Ok(res);
              var $59 = (this$).onresult($58);
              return (void 0);
            }
            else {
              $55 = res;
            }
            $48 = $55;
          }
          else {
          }
        }
        {
          var result = $48;
        }
        var $60 = newXmlHttpRequest();
        {
          var xhr = $60;
        }
        var $61 = (xhr).open("POST", "https://crux-closure-service.herokuapp.com/compile");
        var $62 = (xhr).setRequestHeader("content-type", "application/json");
        (xhr).timeout = 60000;
        var $63 = toJson({source:result});
        var $64 = (xhr).send($63);
        var $65 = Optimizing(xhr);
        (this$).state = $65;
        (xhr).onload = (function() {
          var $66 = (xhr).response;
          var $67 = parseJson($66);
          {
            var result2 = $67;
          }
          (this$).state = Idle;
          var $68 = LastCompile(source, optimize);
          var $69 = $option_Some($68);
          (this$).lastCompile = $69;
          var $70 = (result2).source;
          var $71 = $result_Ok($70);
          var $72 = (this$).onresult($71);
          return $72;
        });
        (xhr).onerror = (function(e) {
          (this$).lastCompile = $option_None;
          var $73 = ("Network error:\n"+e);
          var $74 = $result_Err($73);
          var $75 = (this$).onresult($74);
          return $75;
        });
        (xhr).ontimeout = (function() {
          (this$).lastCompile = $option_None;
          var $76 = $result_Err("Network timeout");
          var $77 = (this$).onresult($76);
          return $77;
        });
        return (void 0);
      }), COMPILE_DELAY);
      var $79 = Waiting($78);
      (this$).state = $79;
      return (void 0);
    }
    function main() {
      var $80 = querySelector(".crux-playground .source");
      {
        var sourceTextArea = $80;
      }
      var $81 = querySelector(".crux-playground .output");
      {
        var outputTextArea = $81;
      }
      var $82 = querySelector(".crux-playground .optimize");
      {
        var optimizeCheckbox = $82;
      }
      var $83 = querySelector(".crux-playground .run");
      {
        var runButton = $83;
      }
      {
        var loadExampleSource = (function() {
          var $84 = getElementById("initial_example");
          var $85 = ($84).text;
          {
            var source = $85;
          }
          var $86 = $string_trim(source);
          source = $86;
          (sourceTextArea).value = source;
          return (void 0);
        });
      }
      var $92 = newCompiler((function(result) {
        var $87;
        if (("Ok"===result[0])) {
          {
            var res = result[1];
          }
          var $88 = (outputTextArea).classList;
          var $89 = ($88).remove("has-errors");
          (outputTextArea).value = res;
          $87 = (void 0);
        }
        else {
          if (("Err"===result[0])) {
            {
              var err = result[1];
            }
            var $90 = (outputTextArea).classList;
            var $91 = ($90).add("has-errors");
            (outputTextArea).value = err;
            $87 = (void 0);
          }
          else {
          }
        }
        return $87;
      }));
      {
        var compiler = $92;
      }
      {
        var recompile = (function() {
          var $93 = (sourceTextArea).value;
          {
            var content = $93;
          }
          var $94 = (optimizeCheckbox).checked;
          {
            var optimize = $94;
          }
          var $95 = compile(compiler, content, optimize);
          return $95;
        });
      }
      {
        var registerCompileListener = (function() {
          var $96 = (sourceTextArea).addEventListener("input", recompile);
          var $97 = (optimizeCheckbox).addEventListener("change", recompile);
          return $97;
        });
      }
      var $98 = loadExampleSource();
      var $99 = registerCompileListener();
      var $100 = recompile();
      (sourceTextArea).disabled = $boolean_False;
      var $101 = (sourceTextArea).setSelectionRange(0, 0);
      var $102 = (sourceTextArea).focus();
      var $104 = (runButton).addEventListener("click", (function() {
        var $103 = $builtin_print("run button temporarily disabled");
        return $103;
      }));
      return $104;
    }
    var $105 = main();
    $$LastCompile$Eq$$$main$$$cmp = $$LastCompile$Eq$$$main$$$cmp;
  })();
  (function() {
  })();
})();
