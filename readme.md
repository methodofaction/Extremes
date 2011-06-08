# Extremes - a jQuery plug-in to put lists around a circle

* Author: Mark MacKay [http://duopixel.ca/](http://duopixel.ca)
* License: GPLv2/MIT
* Meaning: Use anywhere you'd like. Credits appreciated, not required.

## 1. Why?

When ordering lists you will often find that topics come to a full circle; the first item is very similar to the last one. In these cases a better visual representation would be ordering them around a circle, instead top to bottom.

I'm aware this is extremely limited in scope, but have you ever tried doing it in a drawing program? I'd rather stick my head in the oven and go full throttle on the gas.

## 2. How?

	<script src="jquery.js"></script>
	<script src="extremes.js"></script>
	
**Just give me the defaults**

	$('.selector').extremes();

**Let me configure to my liking**

	$('.selector').extremes({
		diameter: 200,
		rotation: 90 //change the initial rotation of everything
	});
	
## 3. Browser support

Should work in modern browsers (Firefox, Safari, Chrome, Opera, Internet Explorer 9).

## 4. History

Version 0.1 - Initial release

