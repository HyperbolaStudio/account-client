"use strict";
var form = document.createElement('form');
form.method = 'POST';
form.enctype = 'multipart/form-data';
form.action = '/api/avatar/update';
var input = document.createElement('input');
input.type = 'file';
input.name = 'avatar';
var ext = document.createElement('input');
ext.type = 'text';
ext.name = 'ext';
var submit = document.createElement('input');
submit.type = 'submit';
form.appendChild(input);
form.appendChild(ext);
form.appendChild(submit);
document.body.appendChild(form);
form.style.paddingTop = '100px';
