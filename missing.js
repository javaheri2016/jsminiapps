        var myArray = [2, 3, 7, 4, 9];
        var sortedArray = myArray.sort(function(a, b)
            {
                return a - b;
            });
        var missing = [];
        var x = 1;

        while (x < 11) {
            var found = false;
            for (var i = 0; i < sortedArray.length; i++) {
                if (sortedArray[i] == x) {
                    found = true;
                }
            }

            if (found == false) {
                missing.push(x);
            }
            x++;
        }

    var div = document.getElementById("missing");
    div.textContent = missing;
