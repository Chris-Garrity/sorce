/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-envelop' : '&#xe000;',
			'icon-pushpin' : '&#xe001;',
			'icon-location' : '&#xe002;',
			'icon-location-2' : '&#xe003;',
			'icon-screen' : '&#xe004;',
			'icon-keyboard' : '&#xe005;',
			'icon-print' : '&#xe006;',
			'icon-stopwatch' : '&#xe007;',
			'icon-phone' : '&#xe008;',
			'icon-alarm' : '&#xe009;',
			'icon-clock' : '&#xe00a;',
			'icon-clock-2' : '&#xe00b;',
			'icon-history' : '&#xe00c;',
			'icon-alarm-2' : '&#xe00d;',
			'icon-disk' : '&#xe00e;',
			'icon-box-remove' : '&#xe00f;',
			'icon-tags' : '&#xe010;',
			'icon-zoom-in' : '&#xe011;',
			'icon-cog' : '&#xe012;',
			'icon-cog-2' : '&#xe013;',
			'icon-laptop' : '&#xe014;',
			'icon-mobile' : '&#xe015;',
			'icon-mobile-2' : '&#xe016;',
			'icon-tablet' : '&#xe017;',
			'icon-tv' : '&#xe018;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};