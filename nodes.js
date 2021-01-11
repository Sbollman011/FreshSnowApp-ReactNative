
const request = require("request")
const axios = require("axios")
const cheerio = require("cheerio")
const fetch = require("node-fetch")
let url = 'https://pnwsnowapi.herokuapp.com/';



function c(){




const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams#/';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $('#snowbase-cm-imperial', html).each(function() {
      console.log($(this).text());
    });
  })
  .catch(function(err) {
    //handle error
  });
}
c();
/*
function h(req, res){
  // The scraping magic will happen here
  let url = "https://www.stevenspass.com/";



 request(url, function(error, response, html) {

      var $ = cheerio.load(html);
      var whiteSnow24API = $("");
      console.log($.text());
       

      

  });

};
h();
/*function fun(){
  return fetchHTML('https://skiwhitepass.com/snow-report')
.then(response => response.html())
.then(data => console.log(data));
} 
 fun();
 
request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.snoqSnowDepth24);
});

fetchHTML = async(url)  => {
  const { data } = await axios.get(url)
  return cheerio.load(data);
};
/*

setMeasurements = async() => {
  const $ =  fetchHTML("https://summitatsnoqualmie.com/conditions")
  return $($('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > div > span'))
  .text().trim();
};

parseScrape = async() => {
  var text =  setMeasurements();
  var textList = text.split(" ");
  var textString = textList[0];
  return textString
};


  function printIt(){
      var final =  parseScrape();
      console.log(final);
    }
   
 printIt();

/* function tr() {
const axios = require("axios")
const cheerio = require("cheerio")

axios.get('https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams#/').then((response) => {
      // Load the web page source code into a cheerio instance
      const $ = cheerio.load(response.data)

    var text = $('#snowbase-cm-imperial')
    .text().trim();

 
    console.log(text);
    console.log("lol");

})}
tr();

*/
/*
const rp = require('request-promise');
const url = 'https://summitatsnoqualmie.com/conditions';

rp(url)
  .then(function(html){
    //success!
    console.log($('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > div > span', html).text());
    //console.log($('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > span > span',html).text());
  })
  .catch(function(err){
    //handle error
    console.log("error");
  });
*/
  
/*
  const searchUrl = `https://summitatsnoqualmie.com/conditions`;
  const response = await fetch(searchUrl);   // fetch page

  const htmlString = await response.text();  // get response text
  const $ = cheerio.load(htmlString);           // parse HTML string

  return $("#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(1) > div:nth-child(2) > ul > li:nth-child(4) > div > span > span").text();
  */

