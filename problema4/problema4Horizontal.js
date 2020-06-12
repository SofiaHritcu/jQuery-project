$(document).ready(function () {
    function OrderBy(a,b,n) {
        if (n) return a-b;
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }

    $('th').click(function(){
        var $th = $(this).closest('th');
        $th.toggleClass('selected');
        var isSelected = $th.hasClass('selected');
        var column = $th.index();
        var $table = $th.closest('table');
        var isNum= $.isNumeric($table.find('tbody > tr').children('td').eq(column).text());
        var rows = $table.find('tbody > tr').get();

        rows.sort(function(rowA,rowB) {
            var keyA = $(rowA).children('td').eq(column).text().toUpperCase();
            var keyB = $(rowB).children('td').eq(column).text().toUpperCase();

            if (isSelected) return OrderBy(keyA,keyB,isNum);
            return OrderBy(keyB,keyA,isNum);
        });
        $.each(rows, function(index,row) {
            $table.children('tbody').append(row);
        });
        return false;
    });
});