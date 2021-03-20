(function() {var implementors = {};
implementors["extendr_api"] = [{"text":"impl TryFrom&lt;Robj&gt; for u8","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for u16","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for u32","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for u64","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for i8","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for i16","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for i32","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for i64","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for f32","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for f64","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Bool","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for bool","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for &amp;str","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for String","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Vec&lt;i32&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Vec&lt;f64&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Vec&lt;String&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Option&lt;i32&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Option&lt;f64&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Option&lt;Bool&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Option&lt;bool&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Option&lt;&amp;str&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Option&lt;String&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Option&lt;Vec&lt;i32&gt;&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Option&lt;Vec&lt;f64&gt;&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Option&lt;Vec&lt;String&gt;&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for HashMap&lt;String, Robj&gt;","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for HashMap&lt;&amp;str, Robj&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; TryFrom&lt;Robj&gt; for FromList&lt;Vec&lt;T&gt;&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: TryFrom&lt;Robj&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as TryFrom&lt;Robj&gt;&gt;::Error: Into&lt;Error&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for ListIter","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;'a&gt; TryFrom&lt;Robj&gt; for RColumn&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Robj: AsTypedSlice&lt;'a, T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;'a&gt; TryFrom&lt;Robj&gt; for RMatrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Robj: AsTypedSlice&lt;'a, T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;'a&gt; TryFrom&lt;Robj&gt; for RMatrix3D&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Robj: AsTypedSlice&lt;'a, T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for PairlistIter","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Pairlist","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Function","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Raw","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Character","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Environment","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for List","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Expression","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Language","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Symbol","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Primitive","synthetic":false,"types":[]},{"text":"impl TryFrom&lt;Robj&gt; for Promise","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()