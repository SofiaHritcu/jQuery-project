$(document).ready(function () {
    $('tr > th').click(function () {
        var table = $(this).parents('table');
        var indexTable = table.attr('name');
        var row = $(this).parent();
        var indexRow = $(this).parent().index()+1;
        var tableId = table.attr('id');
        var numberOfColumns = row.children('td').size()+1;
        var numberOfRows = row.parent().children('tr').size();
        var rowValues = [];
        var rowSortedValues =[];
        for (var i = 1;i < numberOfColumns;i++){
            var valueString = "#t"+indexTable.toString()+"_th"+indexRow.toString()+"_"+i.toString();
            var value = $(valueString).text();
            rowValues.push(value);
            rowSortedValues.push(value);
        }
        var orderString = indexTable.toString()+"_"+indexRow.toString();
        var order = $('#'+orderString).attr('name');

        if(order.toString() === 'asc') {
            if (!isNaN(rowSortedValues[0])) {
                rowSortedValues.sort(function (a, b) {
                    return a - b
                });
            } else {
                rowSortedValues.sort();
            }
            $('#'+orderString).attr('name','desc') ;
        }else{
            if (!isNaN(rowSortedValues[0])) {
                rowSortedValues.sort(function (a, b) {
                    return b-a
                });
            } else {
                rowSortedValues.sort().reverse();
            }
            $('#'+orderString).attr('name','asc');
        }
        var afterSortedPosition = [];
        for (i=0;i<numberOfColumns-1;i++){
            afterSortedPosition.push(rowSortedValues.indexOf(rowValues[i])+1);
        }

        for ( var j = 1;j<=numberOfRows;j++){
            var rowInitValues=[];
            for (var i = 0;i < numberOfColumns-1;i++){
                var elemId = "#t"+indexTable.toString()+"_th"+j.toString()+"_"+(i+1).toString();
                rowInitValues.push($(elemId).html());
                //rowInitValues.push(document.getElementById("t"+indexTable.toString()+"_th"+j.toString()+"_"+(i+1).toString()).innerHTML);
            }
            for (var i = 0;i < numberOfColumns-1;i++){
                var elemId = "#t"+indexTable.toString()+"_th"+j.toString()+"_"+(afterSortedPosition[i]);
                $(elemId).text(rowInitValues[i]);
                //var sortedValues = document.getElementById("t"+indexTable.toString()+"_th"+j.toString()+"_"+(afterSortedPosition[i]).toString());
                //sortedValues.innerText = rowInitValues[i];
            }
            //alert(rowInitValues.toString());
        }

    })
});



// function sortTable(indexTable,indexRow) {
//     var table = document.getElementById("t"+indexTable.toString());
//     var tableId = table.id;
//     var numberOfColumns = (document.getElementById("t"+indexTable.toString()+"_r"+indexRow.toString()).childNodes.length - 1)/2 ;
//     var numberOfRows =  document.getElementById("t"+indexTable.toString()).getElementsByTagName("tr").length;
//     var rowValues = [];
//     var rowSortedValues =[];
//     for (var i = 1;i < numberOfColumns;i++){
//         var value = document.getElementById("t"+indexTable.toString()+"_th"+indexRow.toString()+"_"+i.toString()).innerText
//         rowValues.push(value);
//         rowSortedValues.push(value);
//     }
//     var order = document.getElementById(indexTable.toString()+"_"+indexRow.toString());
//     if(order.innerHTML.toString() === 'asc') {
//         if (!isNaN(rowSortedValues[0])) {
//             rowSortedValues.sort(function (a, b) {
//                 return a - b
//             });
//         } else {
//             rowSortedValues.sort();
//         }
//         order.innerHTML = 'desc';
//     }else{
//         if (!isNaN(rowSortedValues[0])) {
//             rowSortedValues.sort(function (a, b) {
//                 return b-a
//             });
//         } else {
//             rowSortedValues.sort().reverse();
//         }
//         order.innerHTML = 'asc';
//     }
//
//
//     var afterSortedPosition = [];
//     for (i=0;i<numberOfColumns-1;i++){
//         afterSortedPosition.push(rowSortedValues.indexOf(rowValues[i])+1);
//     }
//
//     for ( var j = 1;j<=numberOfRows;j++){
//         var rowInitValues=[];
//         for (var i = 0;i < numberOfColumns-1;i++){
//             rowInitValues.push(document.getElementById("t"+indexTable.toString()+"_th"+j.toString()+"_"+(i+1).toString()).innerHTML);
//         }
//         for (var i = 0;i < numberOfColumns-1;i++){
//             var sortedValues = document.getElementById("t"+indexTable.toString()+"_th"+j.toString()+"_"+(afterSortedPosition[i]).toString());
//             sortedValues.innerText = rowInitValues[i];
//         }
//     }
//     //alert(rowValues.toString());
//     //alert(rowSortedValues.toString());
// }
