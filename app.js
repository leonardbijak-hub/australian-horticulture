'use strict';
(async function(){
  const fileNames=['01.vl.json','02.vg.json','03.vl.json','04.vl.json','05.vl.json','06.vl.json','07.vg.json','08.vl.json','09.vl.json','10.vl.json','11.vg.json','12.vl.json','13.vl.json'];
  const cache=new Map(),loader=vega.loader({baseURL:document.baseURI});
  const originalLoad=loader.load.bind(loader);
  loader.load=(url,options)=>{if(!cache.has(url))cache.set(url,originalLoad(url,options));return cache.get(url)};
  const results=[];
  for(let i=0;i<fileNames.length;i++){
    const el=document.getElementById('c'+String(i+1).padStart(2,'0'));
    el.innerHTML='<p class="chart-loading">Loading the published data…</p>';
    try{
      const response=await fetch(fileNames[i]);if(!response.ok)throw new Error('Specification unavailable');
      const spec=await response.json();
      const native=fileNames[i].includes('.vg.');
      const margins=i===3?155:(i===7?130:80);
      spec.width=Math.max(185,el.clientWidth-(native?20:margins));
      if(i===6)spec.height=Math.round(spec.width*.78);
      if(i===4)spec.height=Math.min(440,Math.round(spec.width*.51));
      const result=await vegaEmbed(el,spec,{actions:false,renderer:'svg',loader,tooltip:{theme:'light'},defaultStyle:true});
      results.push({el,view:result.view,native,index:i,margins});
      el.dataset.loaded='true';
    }catch(error){
      el.innerHTML='<p class="chart-error">This chart could not load. Please refresh, or use the linked specification and data files.</p>';
      console.error(fileNames[i],error);
    }
  }
  window.horticultureCharts=results;
  let timer;
  window.addEventListener('resize',()=>{
    clearTimeout(timer);timer=setTimeout(()=>{
      for(const r of results){
        const width=Math.max(185,r.el.clientWidth-(r.native?20:r.margins));
        r.view.width(width);
        if(r.index===6)r.view.height(Math.round(width*.78));
        if(r.index===4)r.view.height(Math.min(440,Math.round(width*.51)));
        r.view.resize().runAsync();
      }
    },150);
  });
})();
