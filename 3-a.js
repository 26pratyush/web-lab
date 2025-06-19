<!DOCTYPE html>
<html>
<head>
  <title>Month Display</title>
</head>
<body>
  <h2>Month Converter</h2>

  <input type="text" placeholder="Enter a number" id="monthnum" required>
  <button onclick="monthConverter()">Click to Convert</button>

  <p id="res"></p>

  <script>
    function monthConverter() {
      const names = ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"];

      // Closure function that accesses `names`
      const convert = function(month) {
        const num = parseInt(month, 10);
        if (num >= 1 && num <= 12) {
          return names[num - 1];
        } else {
          return "Bad Number";
        }
      };

      const input = document.getElementById("monthnum").value;
      const result = convert(input);
      document.getElementById("res").innerHTML = result;
    }
  </script>
</body>
</html>
