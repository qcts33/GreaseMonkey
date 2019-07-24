// ==UserScript==
// @name CNKI PDF
// @namespace cnki-pdf
// @match *://kns.cnki.net/kcms/detail/detail.aspx*
// @downloadURL https://github.com/qcts33/GreaseMonkey/raw/master/cnki_pdf.user.js
// @version 0.1.1
// ==/UserScript==

element = document.querySelector("#DownLoadParts > a:nth-child(1)");
var pdf_url = new URL(element.href);
pdf_url.hostname = pdf_url.hostname.replace("kns", "gb.oversea");
pdf_url.pathname = pdf_url.pathname.replace("kns", "kcms");
pdf_url.searchParams.set("dflag", "pdfdown");
pdf_url.protocol = "http:";
console.log(pdf_url.href);
element.href = pdf_url.href