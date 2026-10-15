'use strict';
(async function(){
  const assetVersion='20261015-nursery-background';
  const fileNames=['01.vl.json','02.vg.json','03.vl.json','04.vl.json','05.vl.json','06.vl.json','07.vg.json','08.vl.json','09.vl.json','10.vl.json','11.vg.json','12.vl.json','13.vl.json'];
  const cache=new Map(),loader=vega.loader({baseURL:new URL('.',document.baseURI).href});
  const originalLoad=loader.load.bind(loader);
  loader.load=(url,options)=>{if(!cache.has(url))cache.set(url,originalLoad(url,options));return cache.get(url)};
  const results=[];
  function dimensions(el,native,index){
    const width=Math.max(180,el.clientWidth-(native?16:0));
    let height;
    if(index===6)height=Math.round(width*.78);
    if(index===4)height=Math.min(440,Math.round(width*.51));
    if(index===11)height=Math.round((width-10)/2);
    return {width,height};
  }
  for(let i=0;i<fileNames.length;i++){
    const el=document.getElementById('c'+String(i+1).padStart(2,'0'));
    el.innerHTML='<p class="chart-loading">Loading the published data…</p>';
    try{
      const response=await fetch(fileNames[i]+'?v='+assetVersion);if(!response.ok)throw new Error('Specification unavailable');
      const spec=await response.json();
      const native=fileNames[i].includes('.vg.');
      const size=dimensions(el,native,i);
      spec.width=size.width;
      if(size.height!==undefined)spec.height=size.height;
      const result=await vegaEmbed(el,spec,{actions:false,renderer:'svg',loader,tooltip:{theme:'light'},defaultStyle:true});
      results.push({el,view:result.view,native,index:i});
      el.dataset.loaded='true';
    }catch(error){
      el.innerHTML='<p class="chart-error">This chart could not load. Please refresh the page. The data and specifications are available in the GitHub repository.</p>';
      console.error(fileNames[i],error);
    }
  }
  window.horticultureCharts=results;
  let timer;
  window.addEventListener('resize',()=>{
    clearTimeout(timer);timer=setTimeout(()=>{
      for(const r of results){
        const size=dimensions(r.el,r.native,r.index);
        r.view.width(size.width);
        if(size.height!==undefined)r.view.height(size.height);
        r.view.resize().runAsync();
      }
    },150);
  });
})();
