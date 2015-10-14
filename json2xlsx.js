'use strict';

/**
 * 命令行工具说明:将json文件中的内嵌数组转换excel表格的一个sheet,
 * json内嵌对象先转换为数组再写入excel的sheet中
 * 
 */
var fs =require('fs');
var json2xlsx = require('json2xlsx');

//获取json文件
var jsonObj = JSON.parse(fs.readFileSync('./failingA.json','utf8'));

//输出成xlsx文件
var tmpArr = [];
for(var sheet in jsonObj){
  if(jsonObj.hasOwnProperty(sheet)){
    if(jsonObj[sheet] instanceof Array){
      json2xlsx.write('file.xlsx', sheet, jsonObj[sheet]);
    }else{
      tmpArr.push(jsonObj[sheet]);
      json2xlsx.write('file.xlsx', sheet, tmpArr);
      tmpArr.pop();
    }
  }
}