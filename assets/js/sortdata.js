function sortTable(n) {
    let table;
    table = document.getElementById("table");
    var rows, i, x, y, count = 0;
    var switching = true;

   
    var direction = "ascending";
    while (switching) {
        switching = false;
        var rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            var Switch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            // Check the direction of order
            if (direction == "ascending") {

                // Check if 2 rows need to be switched
                if (x.innerHTML.toLowerCase() >
                y.innerHTML.toLowerCase()) {
                    Switch = true;
                    break;
                }
            } else if (direction == "descending") {
                if (x.innerHTML.toLowerCase() <
                y.innerHTML.toLowerCase()) {
                    Switch = true;
                    break;
                }
            }
        }
        if (Switch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            count++;
        } else {

            if (count == 0 && direction == "ascending") {
                direction = "descending";
                switching = true;
            }
        }
    }
}
sortTable();