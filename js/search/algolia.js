window.addEventListener("load",()=>{const e=()=>{const e=document.body.style;e.width="100%",e.overflow="hidden",btf.animateIn(document.getElementById("search-mask"),"to_show 0.5s"),btf.animateIn(document.querySelector("#algolia-search .search-dialog"),"titleScale 0.5s"),setTimeout(()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()},100),document.addEventListener("keydown",function e(a){"Escape"===a.code&&(t(),document.removeEventListener("keydown",e))})},t=()=>{const e=document.body.style;e.width="",e.overflow="",btf.animateOut(document.querySelector("#algolia-search .search-dialog"),"search_close .5s"),btf.animateOut(document.getElementById("search-mask"),"to_hide 0.5s")},a=()=>{document.querySelector("#search-button > .search").addEventListener("click",e)},n=e=>{if(""===e)return"";const t=e.indexOf("<mark>");let a=t-30,n=t+120,i="",s="";return a<=0?(a=0,n=140):i="...",n>e.length?n=e.length:s="...",i+e.substring(a,n)+s},i=GLOBAL_CONFIG.algolia;if(!(i.appId&&i.apiKey&&i.indexName))return console.error("Algolia setting is invalid!");const s=instantsearch({indexName:i.indexName,searchClient:algoliasearch(i.appId,i.apiKey),searchFunction(e){e.state.query&&e.search()}}),o=instantsearch.widgets.configure({hitsPerPage:5}),l=instantsearch.widgets.searchBox({container:"#algolia-search-input",showReset:!1,showSubmit:!1,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder,showLoadingIndicator:!0}),r=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item(e){const t=e.permalink?e.permalink:GLOBAL_CONFIG.root+e.path,a=e._highlightResult,i=a.contentStripTruncate?n(a.contentStripTruncate.value):a.contentStrip?n(a.contentStrip.value):a.content?n(a.content.value):"";return`\n          <a href="${t}" class="algolia-hit-item-link">\n          ${a.title.value||"no-title"}\n          </a>\n          <p class="algolia-hit-item-content">${i}</p>`},empty:function(e){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}}}),c=instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:function(e){return`<hr>${GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)}`}}}),d=instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy"}),g=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'}});s.addWidgets([o,l,r,c,d,g]),s.start(),a(),document.getElementById("search-mask").addEventListener("click",t),document.querySelector("#algolia-search .search-close-button").addEventListener("click",t),window.addEventListener("pjax:complete",()=>{"block"===getComputedStyle(document.querySelector("#algolia-search .search-dialog")).display&&t(),a()}),window.pjax&&s.on("render",()=>{window.pjax.refresh(document.getElementById("algolia-hits"))})});