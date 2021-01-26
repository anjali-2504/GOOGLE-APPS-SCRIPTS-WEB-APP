var url="https://docs.google.com/spreadsheets/d/1h7fKOIHI3osQCfsQMIbn-vyUYR5uUNhjsVpluerznwI/edit#gid=0";
function doGet(e) 
{
 return HtmlService.createTemplateFromFile("page").evaluate();
}
//var ts=SpreadsheetApp.openByUrl(url).appendRow(["First_Name","Last_Name","Task","Date"]);
function onClick(userInfo1,userInfo2,userInfo3)
{
 var ss=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("NAME");
 ss.getRange(1,1).setValue("S-NO");
   ss.getRange(1,2).setValue("FIRST NAME");
    ss.getRange(1,3).setValue("LAST NAME");
     ss.getRange(1,4).setValue("ACTIVITY");
      ss.getRange(1,5).setValue(" DATE");
   var lr=ss.getLastRow();
   ss.getRange(lr,1).setValue(lr-1);
   ss.getRange(lr,2).setValue(userInfo1);
    ss.getRange(lr,3).setValue(userInfo2);
     ss.getRange(lr,4).setValue(userInfo3);
      ss.getRange(lr,5).setValue(new Date());
      ++lr;
       ss.getRange(lr,1).setValue(lr-1);


//var ws=ss.appendRow([userInfo.firstname, userInfo.lastname,userInfo.task,new Date()]);
//Logger.log(userInfo.firstname);

}

/*function include(filename)
{
 return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}*/
