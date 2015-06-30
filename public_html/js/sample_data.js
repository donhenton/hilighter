var expected = {
    "name": "Bellefleur Winery & Restaurant",
    "zipCode": "92008",
    "city": "Carlsbad",
    "state": "CA",
    "version": 1,
    "id": 5,
    "reviewDTOs": [
        {
            "starRating": 8,
            "reviewListing": "Impeccable service!",
            "stampDate": 1422964478318,
            "id": 9
        }
    ]
};
var actual = {
    "name": "Martin's Chuzzlewit",
    "zipCode": "92008",
    "city": "Hannibal",
    "state": "KY",
    "version": 1,
    "id": 5,
    "reviewDTOs": [
        {
            "starRating": 8,
            "reviewListing": "Impeccable service!",
            "stampDate": 1422964478318,
            "id": 9
        },
        {
            "starRating": 2,
            "reviewListing": "Yuk!!",
            "stampDate": 1422342278318,
            "id": 21
        }
    ]
};

function doCompare()
{
    var wikEdDiff = new WikEdDiff();
//    wikEdDiffConfig.fullDiff = true;
//    wikEdDiffConfig.showBlockMoves = false;
    var expectedStr = $('#expected').val().trim();
    var actualStr = $('#actual').val().trim();
    
    var diffHtml = wikEdDiff.diff(expectedStr, actualStr);
    $('#compare').empty();
    $('#compare').html(diffHtml);
}


