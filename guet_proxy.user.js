// ==UserScript==
// @name GUET-Proxy
// @namespace guet-proxy
// @match *://ieeexplore.ieee.org/*
// @downloadURL https://github.com/qcts33/GreaseMonkey/raw/master/guet_proxy.user.js
// @run-at document-start
// @version 0.1
// ==/UserScript==

var bupt_url = 'webvpn.guet.edu.cn';
var bupt_path = '/https/77726476706e69737468656265737421f9f244993f20645f6c0dc7a59d50267b1ab4a9';
var url = new URL(href);
url.hostname = bupt_url;
url.pathname = bupt_path + url.pathname;

location.href = url.href