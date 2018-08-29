
This website is for junckg.com

I originally made this website by DUX5.0 on wordpress, running on a BTPanel server provided by aliyun lite server(SWAS).

But the domain holder has their ICP bound to another static server, I used simply-static to export this to static html and then did a little change.

Right now it includes one line change about .sidebar /wp-content/themes/dux/css/main.css

And adding a baidu analysis code in every html:

```html
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?622234b631f86f349aa6929c8e6ecc28";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
```