/*
 * this file is sample that would be stored in the 
 * src/main/resources/website folder
 * this is for image comparisions
 * 
 * 
 * the empty json file looks like this: {"date": null, "testData": []}
 * this file empty looks like this: var testData = null;
 * 
 * both of these files are located in the src/main/resources/website
 * 
 */

var testData = 
{
  "date" : "07/14/2015 08:13:19",
  "testData" : [ {
    "testDescription" : "Test",
    "goldFile" : "target/classes/gold_files/alpha.png",
    "newImageFile" : "target/classes/public_html/test_viewer/newimages/alphanew.png",
    "compareFile" : "target/classes/public_html/test_viewer/comp/alpha.png"
  } ]
}


