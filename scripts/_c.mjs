import { chromium } from 'playwright-core';
const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1243/chrome-linux64/chrome'});
const p = await b.newPage({viewport:{width:1440,height:900}});
await p.route('**donorbox.org/**', r=>r.abort());
await p.goto('http://localhost:4321'+(process.argv[2]||'/'));
await p.evaluate(()=>document.querySelectorAll('.reveal').forEach(e=>{e.classList.add('visible');e.style.transition='none';e.style.opacity='1';e.style.transform='none'}));
await p.waitForTimeout(300);
const res = await p.evaluate(() => {
  const parse = c => { const m=c.match(/[\d.]+/g); if(!m) return null; return {r:+m[0],g:+m[1],b:+m[2],a:m[3]===undefined?1:+m[3]}; };
  const blend=(f,bg)=>({r:f.r*f.a+bg.r*(1-f.a),g:f.g*f.a+bg.g*(1-f.a),b:f.b*f.a+bg.b*(1-f.a),a:1});
  const lum=c=>{const t=[c.r,c.g,c.b].map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*t[0]+.7152*t[1]+.0722*t[2]};
  const bgOf=el=>{const stack=[];let e=el;while(e){const c=parse(getComputedStyle(e).backgroundColor);if(c&&c.a>0)stack.push(c);if(c&&c.a===1)break;e=e.parentElement;}let bg={r:255,g:255,b:255,a:1};for(let i=stack.length-1;i>=0;i--)bg=blend(stack[i],bg);return bg;};
  const out=[]; const seen=new Set();
  for (const el of document.querySelectorAll('main *')) {
    const own=[...el.childNodes].some(n=>n.nodeType===3&&n.textContent.trim().length>1); if(!own) continue;
    const cs=getComputedStyle(el); if(cs.visibility==='hidden'||cs.display==='none'||el.offsetParent===null) continue;
    if (el.closest('[aria-hidden=true]')) continue;
    let fg=parse(cs.color); let op=1; let e=el; while(e){op*=+getComputedStyle(e).opacity;e=e.parentElement;}
    fg={...fg,a:fg.a*op};
    const bg=bgOf(el); const f=blend(fg,bg);
    const L1=lum(f),L2=lum(bg); const cr=(Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05);
    const size=parseFloat(cs.fontSize), bold=+cs.fontWeight>=700; const large=size>=24||(size>=18.66&&bold);
    const need=large?3:4.5;
    if (cr<need) { const cls=(el.className&&typeof el.className==='string')?'.'+el.className.trim().split(/\s+/).join('.'):''; const sec=el.closest('section,div[id],div[class]'); const key=el.tagName+cls+'|'+cs.color;
      if(seen.has(key)) continue; seen.add(key);
      out.push(`${cr.toFixed(2)} need ${need} | ${el.tagName.toLowerCase()}${cls} | color ${cs.color} op ${op.toFixed(2)} | ${size}px | "${el.textContent.trim().slice(0,40)}"`); }
  }
  return out;
});
console.log(res.join('\n')); await b.close();
