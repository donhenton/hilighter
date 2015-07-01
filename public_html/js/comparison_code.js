


function doCompare()

{
    var selectIdx = $('#testList').val();
    var expectedStr = 
    JSON3.stringify(failedData["comparisons"][selectIdx].expected,null,2);
    var actualStr = 
    JSON3.stringify(failedData["comparisons"][selectIdx].actual,null,2);
    var wikEdDiff = new WikEdDiff();
//    wikEdDiffConfig.fullDiff = true;
//    wikEdDiffConfig.showBlockMoves = false;
    $('#expected').val(expectedStr);
    $('#actual').val(actualStr);
    
    var diffHtml = wikEdDiff.diff(expectedStr, actualStr);
    $('#compare').empty();
    $('#compare').html(diffHtml);
    if (!$('#legend').is(":visible"))
    {
        $('#legend').show();
        $('#copy-button').css("visibility", "visible");
    }
    
}


function loadSelections()
{
    
    var listObj = $('#testList');
    var firstChoice = false;
     
    failedData["comparisons"].forEach(function (d, i)
    {
        var t = "";
        if (firstChoice === false)
        {
            t = "<option selected value=\"" + i + "\">" + getDescription(d) + "</option>";
            firstChoice = true;
        }
        else
        {
            t = "<option value=\"" + i + "\">" + getDescription(d) + "</option>";
        }

        listObj.append(t);

    });
    

    $('#envInfo').text(failedData.date+" ("+failedData.env+")");
   
    
}

function getDescription(testItem)
{
    return testItem.testName+"-->"+testItem.methodName;
}
