///////////////////////////////////////////////////////////////
var dateInformation = 
{
   "JSONComparisonToolTests-->testOne": "6/5/2015 11:34",
   "JSONComparisonToolTests-->testTwo": "6/5/2015 11:34",
   "JSONComparisonToolTests-->testThree": "6/5/2015 11:34",
   "RestaurantTests-->testFour": "6/5/2015 11:34"
}

//update this variable with dates when gold files are created
//you can generate a formatted sample in the formatter tools tab of 
//index.html, which will give the sample for failed tests
//this variable should contain an entry for each maintained
//gold file



///////////////// formatter functions ////////////////////////
function copyToFormatter()
{
    var selectIdx = $('#testList').val();
    var actualStr =
            JSON3.stringify(failedData["comparisons"][selectIdx].actual);
    $('#formatArea').val(actualStr);
    $('#navTabs a:last').tab('show') // Select last tab

}

function prettyPrintFormatter()
{
    var json = getToolTextASJSON();
    if (json != null)
    {
        $('#formatArea').val(JSON3.stringify(json, null, 3));
        reportParseProblem(false);
    }
    else
    {
        reportParseProblem(true);
    }

}
function unFormatFormatter()
{
    var json = getToolTextASJSON();
    if (json != null)
    {
        $('#formatArea').val(JSON3.stringify(json));
        reportParseProblem(false);
    }
    else
    {
        reportParseProblem(true);
    }

}


function reportParseProblem(show)
{
    if (show == true)
    {
        $("#parseWarning").text("Problem parsing JSON");
    }
    else
    {
         $("#parseWarning").text("");
    }
}

function getToolTextASJSON()
{
    var t = $('#formatArea').val();
    if (t != null)
    {
        t = t.trim();
    }
    else
    {
        t = "";
    }
    var jsonInfo = null;
    try
    {
        jsonInfo = $.parseJSON(t);
    }
    catch (e)
    {

    }
    return jsonInfo;
}

function composeDateSample()
{
    var sample = {};
    var date = new Date();
    var strDate = date.getMonth()+"/"+date.getDay()+"/"+date.getFullYear() +" ";
    strDate = strDate + date.getHours()+":"+date.getMinutes();
    failedData["comparisons"].forEach(function (d, i)
    {
        
        sample[getDescription(d)] = strDate;
    });
    var text = "var dateInformation = \n" +JSON3.stringify(sample,null,3);
    text = text +"\n\nPaste this into comparision_code.js to place date\n"+
    "information about when gold files where generated";
    
    $('#formatArea').val(text);
    
}

/////////////////////////////////////////////////////////////


function doCompare()

{
    var selectIdx = $('#testList').val();
    var testItem = failedData["comparisons"][selectIdx];
    var expectedStr =
            JSON3.stringify(testItem.expected, null, 2);
    var actualStr =
            JSON3.stringify(testItem.actual, null, 2);
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
    //handle the date information
    var dateText = dateInformation[getDescription(testItem)];
    if (typeof dateText =='undefined'){
        dateText = "";
    }
    else
    {
        dateText = "<br/>("+dateText+")";
    }
    $('#dateText').html(dateText);
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
    $('#envInfo').text(failedData.date + " (" + failedData.env + ")");
}

function getDescription(testItem)
{
    return testItem.testName + "-->" + testItem.methodName;
}





