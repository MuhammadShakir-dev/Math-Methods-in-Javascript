   /*
                  round() is used to round the number.
                if your value is 0.5 then it will round up.
                if your value is -0.5 then it will round down.

                for example : 
                3.142 is rounded up to 3
                3.172 is rounded down 4


                trunc() is used to truncate the number.
                if your value is 0.5 then it will truncate to 0.
                if your value is -0.5 then it will truncate to -0.

                it always return the integer value.
                and remove the decimal point.

          */
                  document.write("<h1>round()</h1>");
                  var a = Math.round(3.42);
                  document.write(a + "<br>");

                  var b = Math.round(3.72);
                  document.write(b + "<br>");
                
                  document.write("<h1>trunc()</h1>");
                  var c = Math.trunc(3.111111111);
                  document.write(c + "<br>");
             
                  var d = Math.trunc(6.911111111);
                  document.write(d + "<br>");
