'use strict';
(function(){
  const maxWords=10, maxCharacters=60, hardBreak='\u0000';

  // Ranges use text offsets so inline links and emphasis stay intact.
  function lineRanges(text, fits=()=>true){
    const lines=[];
    let start=0, end=0, words=0;
    function finish(){
      if(words)lines.push({start,end});
      words=0;
    }
    for(const match of text.matchAll(/[^\s\u0000]+/gu)){
      const characters=Array.from(match[0]);
      let offset=match.index;
      for(let i=0;i<characters.length;i+=maxCharacters){
        const part=characters.slice(i,i+maxCharacters).join('');
        const nextEnd=offset+part.length;
        if(words && (text.slice(end,offset).includes(hardBreak)
          || words===maxWords
          || Array.from(text.slice(start,nextEnd)).length>maxCharacters
          || !fits(text.slice(start,nextEnd))))finish();
        if(!words)start=offset;
        end=nextEnd;
        words++;
        offset=nextEnd;
      }
    }
    finish();
    return lines;
  }

  if(typeof module!=='undefined')module.exports={lineRanges};
  if(typeof document==='undefined')return;

  function limitLines(element){
    for(const br of element.querySelectorAll?.('br.text-limit-break')||[])br.remove();
    element.normalize?.();
    let text='';
    const segments=[];
    function collect(node){
      if(node.nodeType===3){
        segments.push({node,start:text.length,end:text.length+node.length});
        text+=node.data;
      }else if(node.nodeName==='BR'){
        text+=hardBreak;
      }else{
        for(const child of node.childNodes)collect(child);
      }
    }
    collect(element);
    let fits=()=>true;
    if(typeof getComputedStyle==='function' && element.getBoundingClientRect){
      const style=getComputedStyle(element);
      const context=document.createElement('canvas').getContext('2d');
      context.font=style.font || `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const available=element.getBoundingClientRect().width*0.96;
      fits=line=>context.measureText(line).width<=available;
    }
    const lines=lineRanges(text,fits);
    // Work backwards: splitting a text node preserves earlier offsets.
    for(let i=lines.length-1;i>0;i--){
      const position=lines[i].start;
      if(text.slice(lines[i-1].end,position).includes(hardBreak))continue;
      const segment=segments.find(s=>position>=s.start && position<s.end);
      const range=document.createRange();
      range.setStart(segment.node,position-segment.start);
      range.collapse(true);
      const br=document.createElement('br');
      br.className='text-limit-break';
      range.insertNode(br);
    }
    element.dataset.lineLimits='10-words-60-characters';
  }

  function wrap(){
    const selector='h1,h2,h3,p,footer>div>span';
    for(const element of document.querySelectorAll(selector)){
      if(!element.closest('.chart,svg,noscript,.sources'))limitLines(element);
    }
  }
  if(typeof window!=='undefined')window.horticultureTextLayout={wrap};
  wrap();
})();
