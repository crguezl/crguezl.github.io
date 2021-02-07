---
layout: single
permalink: /search/
title: Search
---

{% capture initSearch %}

<form id="search-form" action="">
  <label class="label" for="search">Search term (accepts a regex):</label>
  <br/>
  <input class="input" id="search" type="text" name="search" autofocus placeholder="e.g. Promise" autocomplete="off">
  
  <ul class="list  list--results" id="list">
  </ul>
</form>

<script type="text/javascript" src="{{site.baseurl}}/assets/js/search/fetch.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/search/search.js"></script>

<script type="text/javascript">

  const search = new JekyllSearch(
    '{{site.baseurl}}/assets/js/search/search.json',
    '#search',
    '#list',
    '{{site.baseurl}}'
  );
  search.init(); 
  
</script>

<noscript>Please enable JavaScript to use the search form.</noscript>

{% endcapture %}

{{ initSearch | lstrip }}
