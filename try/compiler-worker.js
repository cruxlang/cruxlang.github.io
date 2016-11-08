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
  var $types_True;
  var $types_False;
  var $types_Void;
  (function() {
    var True = true;
    var False = false;
    var Void = (void 0);
    $types_True = True;
    $types_False = False;
    $types_Void = Void;
  })();
  var $js$unsafe_typeof;
  var $js$unsafe_not;
  var $js$unsafe_truthy;
  var $js$unsafe_eqNonstrict;
  var $js$unsafe_neqNonstrict;
  var $js$unsafe_eq;
  var $js$unsafe_neq;
  var $js$unsafe_lt;
  var $js$unsafe_lte;
  var $js$unsafe_gt;
  var $js$unsafe_gte;
  var $js$unsafe_setProperty;
  var $js$unsafe_getProperty;
  (function() {
    var $0 = function typeof_(x) { return typeof x; };
    var typeof$ = $0;
    var $1 = function not(b) { return !b; };
    var not = $1;
    var $2 = function truthy(b) { return !!b; };
    var truthy = $2;
    var $3 = function eqNonstrict(lhs, rhs) { return lhs == rhs; };
    var eqNonstrict = $3;
    var $4 = function neqNonstrict(lhs, rhs) { return lhs != rhs; };
    var neqNonstrict = $4;
    var $5 = function eq(lhs, rhs) { return lhs === rhs; };
    var eq = $5;
    var $6 = function neq(lhs, rhs) { return lhs !== rhs; };
    var neq = $6;
    var $7 = function lt(lhs, rhs) { return lhs < rhs; };
    var lt = $7;
    var $8 = function lte(lhs, rhs) { return lhs <= rhs; };
    var lte = $8;
    var $9 = function gt(lhs, rhs) { return lhs > rhs; };
    var gt = $9;
    var $10 = function gte(lhs, rhs) { return lhs >= rhs; };
    var gte = $10;
    var $11 = function setProperty(o, k, v) { return o[k] = v; };
    var setProperty = $11;
    var $12 = function getProperty(o, k) { return o[k]; };
    var getProperty = $12;
    $js$unsafe_typeof = typeof$;
    $js$unsafe_not = not;
    $js$unsafe_truthy = truthy;
    $js$unsafe_eqNonstrict = eqNonstrict;
    $js$unsafe_neqNonstrict = neqNonstrict;
    $js$unsafe_eq = eq;
    $js$unsafe_neq = neq;
    $js$unsafe_lt = lt;
    $js$unsafe_lte = lte;
    $js$unsafe_gt = gt;
    $js$unsafe_gte = gte;
    $js$unsafe_setProperty = setProperty;
    $js$unsafe_getProperty = getProperty;
  })();
  var $boolean_not;
  (function() {
    var not = $js$unsafe_not;
    $boolean_not = not;
  })();
  var $cmp_eq;
  var $cmp_neq;
  var $$Boolean$Eq$$$types$$$cmp;
  var $cmp_lt;
  var $$Void$Ordered$$$types$$$cmp;
  var $cmp_gte;
  var $cmp_lte;
  var $cmp_gt;
  var $cmp_min;
  var $cmp_max;
  var $cmp_LessThan;
  var $cmp_EqualTo;
  var $cmp_GreaterThan;
  var $$Ordering$Eq$$$cmp$$$cmp;
  var $cmp_compare;
  (function() {
    function eq(dict) {
      return (dict).eq;
    }
    function neq($cmp$Eq$13) {
      return (function(lhs, rhs) {
        var $0 = eq($cmp$Eq$13);
        var $1 = $0(lhs, rhs);
        var $2 = $boolean_not($1);
        return $2;
      });
    }
    $$Boolean$Eq$$$types$$$cmp = {eq:$js$unsafe_eq};
    function lt(dict) {
      return (dict).lt;
    }
    $$Void$Ordered$$$types$$$cmp = {lt:(function($_0, $_1) {
      return $types_False;
    })};
    function gte($cmp$Ordered$30) {
      return (function(lhs, rhs) {
        var $3 = lt($cmp$Ordered$30);
        var $4 = $3(lhs, rhs);
        var $5 = $boolean_not($4);
        return $5;
      });
    }
    function lte($cmp$Eq$44, $cmp$Ordered$44) {
      return (function(lhs, rhs) {
        var $6 = lt($cmp$Ordered$44);
        var $7 = $6(lhs, rhs);
        var $8 = eq($cmp$Eq$44);
        var $9 = $8(lhs, rhs);
        var $10 = ($7||$9);
        return $10;
      });
    }
    function gt($cmp$Eq$58, $cmp$Ordered$58) {
      return (function(lhs, rhs) {
        var $11 = lt($cmp$Ordered$58);
        var $12 = $11(rhs, lhs);
        var $13 = neq($cmp$Eq$58);
        var $14 = $13(lhs, rhs);
        var $15 = ($12&&$14);
        return $15;
      });
    }
    function min($cmp$Ordered$64) {
      return (function(lhs, rhs) {
        var $16 = lt($cmp$Ordered$64);
        var $17 = $16(lhs, rhs);
        var $18;
        if ($17) {
          $18 = lhs;
        }
        else {
          $18 = rhs;
        }
        return $18;
      });
    }
    function max($cmp$Ordered$76) {
      return (function(lhs, rhs) {
        var $19 = lt($cmp$Ordered$76);
        var $20 = $19(rhs, lhs);
        var $21;
        if ($20) {
          $21 = lhs;
        }
        else {
          $21 = rhs;
        }
        return $21;
      });
    }
    var LessThan = "negative-one-todo";
    var EqualTo = 0;
    var GreaterThan = 1;
    $$Ordering$Eq$$$cmp$$$cmp = {eq:$js$unsafe_eq};
    function compare($cmp$Ordered$102) {
      return (function(lhs, rhs) {
        var $22 = lt($cmp$Ordered$102);
        var $23 = $22(lhs, rhs);
        var $24;
        if ($23) {
          $24 = LessThan;
        }
        else {
          var $25 = lt($cmp$Ordered$102);
          var $26 = $25(rhs, lhs);
          var $27;
          if ($26) {
            $27 = GreaterThan;
          }
          else {
            $27 = EqualTo;
          }
          $24 = $27;
        }
        return $24;
      });
    }
    $cmp_eq = eq;
    $cmp_neq = neq;
    $$Boolean$Eq$$$types$$$cmp = $$Boolean$Eq$$$types$$$cmp;
    $cmp_lt = lt;
    $$Void$Ordered$$$types$$$cmp = $$Void$Ordered$$$types$$$cmp;
    $cmp_gte = gte;
    $cmp_lte = lte;
    $cmp_gt = gt;
    $cmp_min = min;
    $cmp_max = max;
    $cmp_LessThan = LessThan;
    $cmp_EqualTo = EqualTo;
    $cmp_GreaterThan = GreaterThan;
    $$Ordering$Eq$$$cmp$$$cmp = $$Ordering$Eq$$$cmp$$$cmp;
    $cmp_compare = compare;
  })();
  var $$Number$Eq$$$number$$$cmp;
  var $$Number$Ordered$$$number$$$cmp;
  (function() {
    $$Number$Eq$$$number$$$cmp = {eq:$js$unsafe_eq};
    $$Number$Ordered$$$number$$$cmp = {lt:$js$unsafe_lt};
    $$Number$Eq$$$number$$$cmp = $$Number$Eq$$$number$$$cmp;
    $$Number$Ordered$$$number$$$cmp = $$Number$Ordered$$$number$$$cmp;
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
  var $array_map;
  (function() {
    var $0 = function (len) { return new Array(len); };
    var _unsafe_new = $0;
    function get(a, idx) {
      var $1 = $js$unsafe_getProperty(a, idx);
      return $1;
    }
    $$Array$HasLength$$$array$$$length = {len:(function(a) {
      var $2 = a;
      var $3 = ($2).length;
      return $3;
    })};
    $$Array$Eq$$$array$$$cmp = (function($cmp$Eq$32) {
      return {eq:(function(lhs, rhs) {
        var $4 = $length_len($$Array$HasLength$$$array$$$length);
        var $5 = $4(lhs);
        {
          var lhs_length = $5;
        }
        var $6 = $length_len($$Array$HasLength$$$array$$$length);
        var $7 = $6(rhs);
        {
          var rhs_length = $7;
        }
        var $8 = $cmp_neq($$Number$Eq$$$number$$$cmp);
        var $9 = $8(lhs_length, rhs_length);
        var $10;
        if ($9) {
          return $types_False;
        }
        else {
          $10 = (void 0);
        }
        {
          var i = 0;
        }
        while (true)
        {
          var $11 = $cmp_lt($$Number$Ordered$$$number$$$cmp);
          var $12 = $11(i, lhs_length);
          var $13 = (!$12);
          var $14;
          if ($13) {
            break;
          }
          else {
            $14 = (void 0);
          }
          var $15 = $cmp_neq($cmp$Eq$32);
          var $16 = get(lhs, i);
          var $17 = get(rhs, i);
          var $18 = $15($16, $17);
          var $19;
          if ($18) {
            return $types_False;
          }
          else {
            $19 = (void 0);
          }
          var $20 = (i+1);
          i = $20;
        }
        return $types_True;
      })};
    });
    function replicate(element, n) {
      var $21 = _unsafe_new(n);
      {
        var arr = $21;
      }
      {
        var i = 0;
      }
      while (true)
      {
        var $22 = $cmp_lt($$Number$Ordered$$$number$$$cmp);
        var $23 = $22(i, n);
        var $24 = (!$23);
        var $25;
        if ($24) {
          break;
        }
        else {
          $25 = (void 0);
        }
        var $26 = $js$unsafe_setProperty(arr, i, element);
        var $27 = (i+1);
        i = $27;
      }
      return arr;
    }
    function each(arr, f) {
      {
        var i = 0;
      }
      var $28 = $length_len($$Array$HasLength$$$array$$$length);
      var $29 = $28(arr);
      {
        var n = $29;
      }
      while (true)
      {
        var $30 = $cmp_lt($$Number$Ordered$$$number$$$cmp);
        var $31 = $30(i, n);
        var $32 = (!$31);
        var $33;
        if ($32) {
          break;
        }
        else {
          $33 = (void 0);
        }
        var $34 = $js$unsafe_getProperty(arr, i);
        var $35 = f($34);
        var $36 = (i+1);
        i = $36;
      }
      return (void 0);
    }
    function sliceFrom(arr, start) {
      var $37 = arr;
      var $38 = ($37).slice(start);
      return $38;
    }
    function sliceTo(arr, end) {
      var $39 = arr;
      var $40 = ($39).slice(0, end);
      return $40;
    }
    function slice(arr, start, end) {
      var $41 = arr;
      var $42 = ($41).slice(start, end);
      return $42;
    }
    function map(array, fn) {
      var $43 = array;
      var $44 = ($43).map(fn);
      return $44;
    }
    $array_get = get;
    $$Array$HasLength$$$array$$$length = $$Array$HasLength$$$array$$$length;
    $$Array$Eq$$$array$$$cmp = $$Array$Eq$$$array$$$cmp;
    $array_replicate = replicate;
    $array_each = each;
    $array_sliceFrom = sliceFrom;
    $array_sliceTo = sliceTo;
    $array_slice = slice;
    $array_map = map;
  })();
  var $option_Some;
  var $option_None;
  var $$Option$Eq$$$option$$$cmp;
  (function() {
    function Some(a0) {
      return ["Some", a0];
    }
    var None = ["None"];
    $$Option$Eq$$$option$$$cmp = (function($cmp$Eq$3) {
      return {eq:(function(lhs, rhs) {
        var $0 = $tuple_Tuple2(lhs, rhs);
        var $1;
        if (((("Tuple2"===$0[0])&&("None"===$0[1][0]))&&("None"===$0[2][0]))) {
          {
          }
          $1 = $types_True;
        }
        else {
          if (((("Tuple2"===$0[0])&&("Some"===$0[1][0]))&&("Some"===$0[2][0]))) {
            {
              var x = $0[1][1];
              var y = $0[2][1];
            }
            var $2 = $cmp_eq($cmp$Eq$3);
            var $3 = $2(x, y);
            $1 = $3;
          }
          else {
            {
            }
            $1 = $types_False;
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
  var $$String$Ordered$$$string$$$cmp;
  var $$String$HasLength$$$string$$$length;
  var $string_startsWith;
  var $string_endsWith;
  var $string_join;
  var $string_sliceFrom;
  var $string_trim;
  (function() {
    $$String$Eq$$$string$$$cmp = {eq:$js$unsafe_eq};
    $$String$Ordered$$$string$$$cmp = {lt:$js$unsafe_lt};
    $$String$HasLength$$$string$$$length = {len:(function(s) {
      var $0 = s;
      var $1 = ($0).length;
      return $1;
    })};
    function startsWith(haystack, needle) {
      var $2 = haystack;
      {
        var h = $2;
      }
      var $3 = needle;
      {
        var n = $3;
      }
      var $4 = $cmp_gt($$Number$Eq$$$number$$$cmp, $$Number$Ordered$$$number$$$cmp);
      var $5 = (n).length;
      var $6 = (h).length;
      var $7 = $4($5, $6);
      var $8;
      if ($7) {
        return $types_False;
      }
      else {
        $8 = (void 0);
      }
      var $9 = $cmp_eq($$Number$Eq$$$number$$$cmp);
      var $10 = (h).indexOf(needle, 0);
      var $11 = $9($10, 0);
      return $11;
    }
    function endsWith(haystack, needle) {
      var $12 = haystack;
      {
        var h = $12;
      }
      var $13 = needle;
      {
        var n = $13;
      }
      var $14 = $cmp_gt($$Number$Eq$$$number$$$cmp, $$Number$Ordered$$$number$$$cmp);
      var $15 = (n).length;
      var $16 = (h).length;
      var $17 = $14($15, $16);
      var $18;
      if ($17) {
        return $types_False;
      }
      else {
        $18 = (void 0);
      }
      var $19 = $cmp_neq($$Number$Eq$$$number$$$cmp);
      var $20 = (h).length;
      var $21 = (n).length;
      var $22 = ($20-$21);
      var $23 = (h).indexOf(needle, $22);
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
    $$String$Ordered$$$string$$$cmp = $$String$Ordered$$$string$$$cmp;
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
  var $mutarray_unsafeFreeze;
  var $mutarray_sort;
  var $mutarray_filter;
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
        var $9 = $cmp_lt($$Number$Ordered$$$number$$$cmp);
        var $10 = $9(i, n);
        var $11 = (!$10);
        var $12;
        if ($11) {
          break;
        }
        else {
          $12 = (void 0);
        }
        var $13 = _unsafe_set(arr, i, element);
        var $14 = (i+1);
        i = $14;
      }
      return arr;
    }
    function each(arr, f) {
      {
        var i = 0;
      }
      var $15 = $length_len($$MutableArray$HasLength$$$mutarray$$$length);
      var $16 = $15(arr);
      {
        var n = $16;
      }
      while (true)
      {
        var $17 = $cmp_lt($$Number$Ordered$$$number$$$cmp);
        var $18 = $17(i, n);
        var $19 = (!$18);
        var $20;
        if ($19) {
          break;
        }
        else {
          $20 = (void 0);
        }
        var $21 = _unsafe_get(arr, i);
        var $22 = f($21);
        var $23 = (i+1);
        i = $23;
      }
      return (void 0);
    }
    function sliceFrom(arr, start) {
      var $24 = arr;
      var $25 = ($24).slice(start);
      return $25;
    }
    function sliceTo(arr, end) {
      var $26 = arr;
      var $27 = ($26).slice(0, end);
      return $27;
    }
    function slice(arr, start, end) {
      var $28 = arr;
      var $29 = ($28).slice(start, end);
      return $29;
    }
    function freeze(arr) {
      var $30 = arr;
      var $31 = ($30).slice();
      return $31;
    }
    function unsafeFreeze(arr) {
      var $32 = arr;
      return $32;
    }
    function sort(arr) {
      var $33 = arr;
      var $34 = ($33).sort();
      return $34;
    }
    function filter(arr, pred) {
      var $35 = arr;
      var $36 = ($35).filter(pred);
      return $36;
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
    $mutarray_unsafeFreeze = unsafeFreeze;
    $mutarray_sort = sort;
    $mutarray_filter = filter;
  })();
  var $tuple_Tuple2;
  var $tuple_Tuple3;
  var $tuple_Tuple4;
  var $tuple_Tuple5;
  var $tuple_Tuple6;
  var $tuple_Tuple7;
  var $tuple_Tuple8;
  var $$Tuple2$Eq$$$tuple$$$cmp;
  var $$Tuple2$Ordered$$$tuple$$$cmp;
  (function() {
    function Tuple2(a0, a1) {
      return ["Tuple2", a0, a1];
    }
    function Tuple3(a0, a1, a2) {
      return ["Tuple3", a0, a1, a2];
    }
    function Tuple4(a0, a1, a2, a3) {
      return ["Tuple4", a0, a1, a2, a3];
    }
    function Tuple5(a0, a1, a2, a3, a4) {
      return ["Tuple5", a0, a1, a2, a3, a4];
    }
    function Tuple6(a0, a1, a2, a3, a4, a5) {
      return ["Tuple6", a0, a1, a2, a3, a4, a5];
    }
    function Tuple7(a0, a1, a2, a3, a4, a5, a6) {
      return ["Tuple7", a0, a1, a2, a3, a4, a5, a6];
    }
    function Tuple8(a0, a1, a2, a3, a4, a5, a6, a7) {
      return ["Tuple8", a0, a1, a2, a3, a4, a5, a6, a7];
    }
    $$Tuple2$Eq$$$tuple$$$cmp = (function($cmp$Eq$71, $cmp$Eq$72) {
      return {eq:(function($_2, $_3) {
        var a1 = $_2[1];
        var a2 = $_2[2];
        var b1 = $_3[1];
        var b2 = $_3[2];
        var $0 = $cmp_eq($cmp$Eq$71);
        var $1 = $0(a1, b1);
        var $2 = $cmp_eq($cmp$Eq$72);
        var $3 = $2(a2, b2);
        var $4 = ($1&&$3);
        return $4;
      })};
    });
    $$Tuple2$Ordered$$$tuple$$$cmp = (function($cmp$Ordered$93, $cmp$Ordered$94) {
      return {lt:(function($_4, $_5) {
        var a1 = $_4[1];
        var a2 = $_4[2];
        var b1 = $_5[1];
        var b2 = $_5[2];
        var $5 = $cmp_lt($cmp$Ordered$93);
        var $6 = $5(a1, b1);
        var $7;
        if ($6) {
          $7 = $types_True;
        }
        else {
          var $8 = $cmp_lt($cmp$Ordered$93);
          var $9 = $8(b1, a1);
          var $10;
          if ($9) {
            $10 = $types_False;
          }
          else {
            var $11 = $cmp_lt($cmp$Ordered$94);
            var $12 = $11(a2, b2);
            $10 = $12;
          }
          $7 = $10;
        }
        return $7;
      })};
    });
    $tuple_Tuple2 = Tuple2;
    $tuple_Tuple3 = Tuple3;
    $tuple_Tuple4 = Tuple4;
    $tuple_Tuple5 = Tuple5;
    $tuple_Tuple6 = Tuple6;
    $tuple_Tuple7 = Tuple7;
    $tuple_Tuple8 = Tuple8;
    $$Tuple2$Eq$$$tuple$$$cmp = $$Tuple2$Eq$$$tuple$$$cmp;
    $$Tuple2$Ordered$$$tuple$$$cmp = $$Tuple2$Ordered$$$tuple$$$cmp;
  })();
  var $builtin_replicate;
  var $builtin_each;
  var $builtin_print;
  var $builtin_toString;
  var $builtin_emptyArray;
  var $builtin_sorted;
  (function() {
    var replicate = $array_replicate;
    var each = $array_each;
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
    function sorted($cmp$Ordered$37) {
      return (function(arr) {
        var $4 = arr;
        var $5 = ($4).slice();
        var $13 = ($5).sort((function(lhs, rhs) {
          var $6 = $cmp_lt($cmp$Ordered$37);
          var $7 = $6(lhs, rhs);
          var $8;
          if ($7) {
            var $9 = (0-1);
            $8 = $9;
          }
          else {
            var $10 = $cmp_lt($cmp$Ordered$37);
            var $11 = $10(rhs, lhs);
            var $12;
            if ($11) {
              $12 = 1;
            }
            else {
              $12 = 0;
            }
            $8 = $12;
          }
          return $8;
        }));
        return $13;
      });
    }
    $builtin_replicate = replicate;
    $builtin_each = each;
    $builtin_print = print;
    $builtin_toString = toString;
    $builtin_emptyArray = emptyArray;
    $builtin_sorted = sorted;
  })();
  var $js_Null;
  var $js_Undefined;
  var $js_fromValue;
  var $$String$FromValue$$$string$$$js;
  var $$Number$FromValue$$$number$$$js;
  var $$Boolean$FromValue$$$types$$$js;
  var $$Value$FromValue$$$js$$$js;
  var $js_toValue;
  var $$String$ToValue$$$string$$$js;
  var $$Number$ToValue$$$number$$$js;
  var $$Boolean$ToValue$$$types$$$js;
  var $$Value$ToValue$$$js$$$js;
  (function() {
    var Null = null;
    var Undefined = (void 0);
    function fromValue(dict) {
      return (dict).fromValue;
    }
    var checkAndCast = (function($cmp$Eq$19) {
      return (function(typeString) {
        return (function(value) {
          var $0 = $cmp_eq($cmp$Eq$19);
          var $1 = $js$unsafe_typeof(value);
          var $2 = $0($1, typeString);
          var $3;
          if ($2) {
            var $4 = value;
            var $5 = $option_Some($4);
            return $5;
          }
          else {
            return $option_None;
          }
          return $3;
        });
      });
    });
    var $6 = checkAndCast($$String$Eq$$$string$$$cmp);
    var $7 = $6("string");
    $$String$FromValue$$$string$$$js = {fromValue:$7};
    var $8 = checkAndCast($$String$Eq$$$string$$$cmp);
    var $9 = $8("number");
    $$Number$FromValue$$$number$$$js = {fromValue:$9};
    var $10 = checkAndCast($$String$Eq$$$string$$$cmp);
    var $11 = $10("boolean");
    $$Boolean$FromValue$$$types$$$js = {fromValue:$11};
    $$Value$FromValue$$$js$$$js = {fromValue:$option_Some};
    function toValue(dict) {
      return (dict).toValue;
    }
    $$String$ToValue$$$string$$$js = {toValue:(function(value) {
      var $12 = value;
      return $12;
    })};
    $$Number$ToValue$$$number$$$js = {toValue:(function(value) {
      var $13 = value;
      return $13;
    })};
    $$Boolean$ToValue$$$types$$$js = {toValue:(function(value) {
      var $14 = value;
      return $14;
    })};
    $$Value$ToValue$$$js$$$js = {toValue:(function(value) {
      return value;
    })};
    $js_Null = Null;
    $js_Undefined = Undefined;
    $js_fromValue = fromValue;
    $$String$FromValue$$$string$$$js = $$String$FromValue$$$string$$$js;
    $$Number$FromValue$$$number$$$js = $$Number$FromValue$$$number$$$js;
    $$Boolean$FromValue$$$types$$$js = $$Boolean$FromValue$$$types$$$js;
    $$Value$FromValue$$$js$$$js = $$Value$FromValue$$$js$$$js;
    $js_toValue = toValue;
    $$String$ToValue$$$string$$$js = $$String$ToValue$$$string$$$js;
    $$Number$ToValue$$$number$$$js = $$Number$ToValue$$$number$$$js;
    $$Boolean$ToValue$$$types$$$js = $$Boolean$ToValue$$$types$$$js;
    $$Value$ToValue$$$js$$$js = $$Value$ToValue$$$js$$$js;
  })();
  var $crux_compile;
  (function() {
    function compile(source) {
      var $0 = self;
      var $1 = ($0).compileCrux(source);
      {
        var rawRes = $1;
      }
      var $2 = $js_fromValue($$String$FromValue$$$string$$$js);
      var $3 = (rawRes).error;
      var $4 = $2($3);
      var $5;
      if (("Some"===$4[0])) {
        {
          var err = $4[1];
        }
        var $6 = $result_Err(err);
        $5 = $6;
      }
      else {
        if (("None"===$4[0])) {
          {
          }
          var $7 = (rawRes).result;
          var $8 = $result_Ok($7);
          $5 = $8;
        }
        else {
        }
      }
      return $5;
    }
    $crux_compile = compile;
  })();
  var $dom$workerself_close;
  var $dom$workerself_importScripts;
  var $dom$workerself_setHandler;
  var $dom$workerself_postMessage;
  (function() {
    function close() {
      var $0 = (self).close();
      return $0;
    }
    function importScripts(scripts) {
      var $1 = (self).importScripts;
      var $2 = ($1).apply($js_Null, scripts);
      return $2;
    }
    var $3 = function(e) { return e.data; };
    var getData = $3;
    function setHandler(handler) {
      (self).onmessage = (function(event) {
        var $4 = getData(event);
        var $5 = handler($4);
        return $5;
      });
      return (void 0);
    }
    function postMessage($js$ToValue$55) {
      return (function(value) {
        var $6 = (self).postMessage(value);
        return $6;
      });
    }
    $dom$workerself_close = close;
    $dom$workerself_importScripts = importScripts;
    $dom$workerself_setHandler = setHandler;
    $dom$workerself_postMessage = postMessage;
  })();
  (function() {
    function main() {
      var $0 = $dom$workerself_importScripts(["crux.js"]);
      var $10 = $dom$workerself_setHandler((function(message) {
        var $1 = message;
        {
          var compileRequest = $1;
        }
        var $2 = (compileRequest).source;
        var $3 = $crux_compile($2);
        var $4;
        if (("Err"===$3[0])) {
          {
            var err = $3[1];
          }
          var $5 = (compileRequest).compileID;
          $4 = {compileID:$5, success:$types_False, result:err};
        }
        else {
          if (("Ok"===$3[0])) {
            {
              var result = $3[1];
            }
            var $6 = (compileRequest).compileID;
            $4 = {compileID:$6, success:$types_True, result:result};
          }
          else {
          }
        }
        {
          var result = $4;
        }
        var $7 = result;
        {
          var postedResult = $7;
        }
        var $8 = $dom$workerself_postMessage($$Value$ToValue$$$js$$$js);
        var $9 = $8(postedResult);
        return $9;
      }));
      return $10;
    }
    var $11 = main();
    var $12 = main();
  })();
})();
