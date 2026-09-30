/* Re Create Technologies - site behaviour (routing, animations, chat widget, forms, theme toggle).
   Content lives in data.js. Requires data.js to be loaded first. */
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

function icon(n,cls){return '<svg class="ic'+(cls?' '+cls:'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICONS[n]+'</svg>'}

/* ---------- Brand logo (file set in data.js) ---------- */
function brand(){
  var alt='Re Create Technologies, the key to success';
  return '<img class="brand-logo lg-l" src="'+LOGO+'" width="141" height="48" alt="'+alt+'"><img class="brand-logo lg-d" src="'+LOGO_DARK+'" width="141" height="48" alt="'+alt+'">';
}

/* Add certificate image URLs here when the images are hosted with the site. */

/* ---------- Section builders ---------- */
var FILL={};
FILL['trust']=function(){return '<li>'+icon('check')+'Trusted since 2013</li><li>'+icon('check')+'Serving Pakistan, Oman and the USA</li>'};
FILL['drawer-info']=function(){
  return '<a href="tel:'+C.tel1+'">'+icon('phone')+C.phone1+'</a><a href="mailto:'+C.email+'">'+icon('mail')+C.email+'</a>'
    +'<p class="d-hours">'+icon('clock')+'<span>Mon to Fri, 11 AM to 6 PM PKT</span></p>'
    +'<div class="d-social">'+SOCIAL.map(function(s){return '<a href="'+s[2]+'" target="_blank" rel="noopener" aria-label="'+s[0]+'">'+icon(s[1])+'</a>'}).join('')+'</div>';
};
FILL['about-points']=function(){
  return ['Web, software and IT services under one roof','Clients across Pakistan, Oman and the USA','Support from first idea to launch and beyond'].map(function(t){return '<li>'+icon('check')+'<span>'+esc(t)+'</span></li>'}).join('');
};
FILL['home-work']=function(){return PORTFOLIO_IMG.slice(0,6).map(function(p,i){return workCard(p,'H:'+i)}).join('')};
FILL['timeline']=function(){
  return ACHIEVEMENTS.map(function(a){return '<li class="tl-item"><span class="tl-year">'+esc(a.year)+'</span><h3>'+esc(a.title)+'</h3><p>'+esc(a.text)+'</p></li>'}).join('');
};
function starsHTML(){
  var s='';for(var i=0;i<5;i++)s+='<svg class="star" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  return '<span class="stars" role="img" aria-label="5 out of 5 stars">'+s+'</span>';
}
var AVC=['#1967D2','#C5221F','#B06000','#188038','#8430CE','#0B7285','#B3400A'];
function gLogo(cls){return '<svg class="'+cls+'" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>'}
FILL['reviews-bar']=function(){
  return '<div class="rv-bar reveal"><div class="rv-src"><span class="rv-ic">'+icon('chat')+'</span><div><b>Client stories</b><span>Kind words from businesses we have worked with</span></div></div>'
    +'<div class="rv-actions"><a class="btn btn-ghost btn-sm" href="'+C.reviewsAll+'" target="_blank" rel="noopener">'+gLogo('g-logo')+'Read reviews on Google</a><a class="btn btn-primary btn-sm" href="'+C.reviewsWrite+'" target="_blank" rel="noopener">Rate us on Google</a></div></div>';
};
FILL['stories']=function(){
  return '<div class="stories collapsed" id="stories">'+STORIES.map(function(s,i){
    var ini=s.name.replace(/^Dr\.\s*/,'').split(' ').map(function(w){return w.charAt(0)}).slice(0,2).join('').toUpperCase();
    var ava=s.photo?'<img class="ava" src="'+esc(s.photo)+'" alt="" width="44" height="44" loading="lazy">':'<span class="ava" style="background:'+AVC[i%AVC.length]+'" aria-hidden="true">'+ini+'</span>';
    return '<figure class="story'+(i>=6?' extra':'')+'"><div class="story-top">'+ava+'<div class="who"><b>'+esc(s.name)+'</b><small>Client</small></div></div>'+starsHTML()+'<blockquote>'+esc(s.text)+'</blockquote></figure>';
  }).join('')+'</div><div class="more"><button class="btn btn-ghost" id="storiesMore" type="button" aria-expanded="false" aria-controls="stories">Show all '+STORIES.length+' reviews</button></div>';
};
function postCard(b){
  var href='blogs.html#'+b.slug;
  return '<article class="post"><a class="post-cover" href="'+href+'" tabindex="-1" aria-hidden="true">'+icon(b.icon)+'</a><div class="post-body"><p class="post-meta">'+icon('calendar')+'<span>'+esc(b.date)+'</span><span class="dot"></span><span>'+esc(b.read)+'</span></p><h3><a href="'+href+'">'+esc(b.title)+'</a></h3><p class="post-ex">'+esc(b.excerpt)+'</p><div class="post-foot"><span class="tags">'+b.cats.filter(function(c){return c!=='Blogs'}).map(function(c){return '<span class="tag">'+esc(c)+'</span>'}).join('')+'</span><a class="link-arrow" href="'+href+'" aria-label="Read: '+esc(b.title)+'">Read more'+icon('arrow')+'</a></div></div></article>';
}
FILL['blog-home']=function(){return BLOG.map(postCard).join('')};
FILL['blog-list']=function(){return BLOG.map(postCard).join('')};
function articleHTML(b){
  var body=b.body.map(function(x){
    if(x[0]==='h2')return '<h2>'+esc(x[1])+'</h2>';
    if(x[0]==='quote')return '<blockquote><p>'+esc(x[1])+'</p><cite>'+esc(x[2])+'</cite></blockquote>';
    if(x[0]==='ul')return '<ul>'+x[1].map(function(i){return '<li>'+icon('check')+'<span>'+esc(i)+'</span></li>'}).join('')+'</ul>';
    return '<p>'+esc(x[1])+'</p>';
  }).join('');
  var others=BLOG.filter(function(o){return o.slug!==b.slug}).map(postCard).join('');
  return '<div class="page-hero post-hero"><div class="wrap narrow"><a class="back-link" href="blogs.html">'+icon('chevl')+'All articles</a><h1>'+esc(b.title)+'</h1>'
    +'<p class="post-meta">'+icon('calendar')+'<span>'+esc(b.date)+'</span><span class="dot"></span><span>'+esc(b.read)+'</span><span class="dot"></span><span>By Re Create Team</span></p>'
    +'<div class="tags">'+b.tags.map(function(t){return '<span class="tag">'+esc(t)+'</span>'}).join('')+'</div></div></div>'
    +'<section class="s tight"><div class="wrap narrow prose">'+body+'</div></section>'
    +'<section class="s more-posts"><div class="wrap"><h2>More articles</h2><div class="blog-grid">'+others+'</div></div></section>';
}
function renderBlog(){
  var p=hashParts(),slug=(document.body.getAttribute('data-page')==='blogs'&&p[0])?p[0]:'',post=null;
  BLOG.forEach(function(b){if(b.slug===slug)post=b});
  var list=$('#blogListView'),view=$('#postView');
  if(!post){list.hidden=false;view.hidden=true;view.innerHTML='';return}
  list.hidden=true;view.hidden=false;view.innerHTML=articleHTML(post);
  document.title=post.title+' | Re Create Technologies';
  setTag('meta[name="description"]',post.excerpt);setTag('meta[property="og:title"]',post.title);setTag('meta[property="og:description"]',post.excerpt);
  setTag('meta[property="og:url"]',C.base+'/blogs/'+post.slug+'/');setTag('meta[name="twitter:title"]',post.title);setTag('meta[name="twitter:description"]',post.excerpt);
  setTag('link[rel="canonical"]',C.base+'/blogs/'+post.slug+'/','href');
}
function waIcon(cls){return '<svg class="ic wa-logo '+(cls||'')+'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="'+WA_PATH+'"/></svg>'}
FILL['topbar']=function(){
  return '<div class="wrap topbar-in"><ul class="tb-left">'
    +'<li><a class="tb-link" href="tel:'+C.tel1+'">'+icon('phone')+'<span>'+C.phone1+'</span></a></li>'
    +'<li class="tb-md"><a class="tb-link" href="mailto:'+C.email+'">'+icon('mail')+'<span>'+C.email+'</span></a></li>'
    +'<li class="tb-lg"><span class="tb-link">'+icon('clock')+'<span>Mon to Fri, 11 AM to 6 PM PKT</span><i class="tb-dot" data-hours-dot aria-hidden="true"></i></span></li></ul>'
    +'<div class="tb-right"><ul class="tb-social">'+SOCIAL.map(function(s){return '<li><a href="'+s[2]+'" target="_blank" rel="noopener" aria-label="'+s[0]+'">'+icon(s[1])+'</a></li>'}).join('')+'</ul>'
    +'<a class="tb-cta" href="contact.html">Get a quote</a></div></div>';
};

function orbitSVG(c){
  var n=SERVICES.length,CX=c.vb/2,CY=c.vb/2,lines='',pulses='',nodes='';
  SERVICES.forEach(function(s,i){
    var a=(-90+i*360/n)*Math.PI/180,x=Math.round(CX+c.R*Math.cos(a)),y=Math.round(CY+c.R*Math.sin(a));
    var b=(1.2+i*.32).toFixed(2)+'s',lb=ORBIT_LABELS[s.id]||[s.title];
    lines+='<line class="link" x1="'+CX+'" y1="'+CY+'" x2="'+x+'" y2="'+y+'"/>';
    pulses+='<circle class="pulse" r="4.5" fill="#fff" opacity="0"><animateMotion dur="3s" begin="'+b+'" repeatCount="indefinite" path="M'+CX+' '+CY+'L'+x+' '+y+'"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.8;1" dur="3s" begin="'+b+'" repeatCount="indefinite"/></circle>';
    var txt=lb.map(function(t,k){return '<text class="nlabel" y="'+(lb.length>1?c.ly[k]:c.ly1)+'" text-anchor="middle">'+esc(t)+'</text>'}).join('');
    nodes+='<g transform="translate('+x+' '+y+')"><a class="node-link" href="services.html#svc-'+s.id+'" aria-label="'+esc(s.title)+'"><g class="node-in" style="--i:'+i+'"><g class="node-float" style="--i:'+i+'"><rect class="ncard" x="'+(-c.W/2)+'" y="'+(-c.H/2)+'" width="'+c.W+'" height="'+c.H+'" rx="'+c.rx+'"/><g class="nic" transform="translate('+(-c.is/2)+' '+c.iy+') scale('+(c.is/24)+')">'+ICONS[s.icon]+'</g>'+txt+'</g></g></a></g>';
  });
  var hs=c.hub/46;
  return '<svg class="orbit '+c.cls+'" viewBox="0 0 '+c.vb+' '+c.vb+'" role="img" aria-labelledby="'+c.cls+'T"><title id="'+c.cls+'T">Our services around Re Create: '+SERVICES.map(function(s){return esc(s.title)}).join(', ')+'</title>'
    +'<circle class="glow" cx="'+CX+'" cy="'+CY+'" r="'+c.glow+'" fill="#fff" opacity=".10"/>'
    +'<circle cx="'+CX+'" cy="'+CY+'" r="'+c.R+'" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="1.5" stroke-dasharray="2 9" stroke-linecap="round"/>'
    +'<circle cx="'+CX+'" cy="'+CY+'" r="'+c.R*.667+'" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="1.5"/>'
    +lines+pulses
    +'<g transform="translate('+CX+' '+CY+')"><circle class="hub-ring" r="'+c.ring+'" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 9" opacity=".7"/><circle r="'+c.hub+'" fill="#fff"/><g class="hub-gear"><g transform="translate('+(-20.4*hs)+' '+(-20.4*hs)+') scale('+(1.7*hs)+')" fill="none" stroke="#A9000E" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+ICONS.gear+'</g></g></g>'
    +nodes+'</svg>';
}
FILL['hero-art']=function(){
  /* desktop circle + a phone-sized circle (same design, bigger labels relative to the picture) */
  return orbitSVG({cls:'orbit-d',vb:600,R:225,W:108,H:84,rx:18,is:24,iy:-34,ly:[12,28],ly1:22,hub:46,ring:66,glow:112})
    +orbitSVG({cls:'orbit-m',vb:560,R:212,W:128,H:88,rx:20,is:26,iy:-37,ly:[12,31],ly1:24,hub:42,ring:60,glow:104});
};

FILL['svc-home']=function(){
  return SERVICES.map(function(s){
    return '<a class="svc" href="services.html#svc-'+s.id+'"><span class="ic-box">'+icon(s.icon)+'</span><h3>'+esc(s.title)+'</h3><p>'+esc(s.short)+'</p><span class="chips">'+s.tags.map(function(t){return '<span>'+esc(t)+'</span>'}).join('')+'</span></a>';
  }).join('');
};
FILL['svc-detail']=function(){
  return SERVICES.map(function(s){
    return '<article class="detail" id="svc-'+s.id+'"><span class="ic-box">'+icon(s.icon)+'</span><h2>'+esc(s.title)+'</h2><p>'+esc(s.long)+'</p><ul class="checks">'+s.pts.map(function(p){return '<li>'+icon('check')+'<span>'+esc(p)+'</span></li>'}).join('')+'</ul><a class="btn btn-ghost" href="contact.html" data-enquire data-topic="'+esc(s.title)+'">Enquire</a></article>';
  }).join('');
};
FILL['notice']=function(){
  var one='<span class="notice-item">Our Operations &amp; Support Department Timings for the Year 2026 are 11:00 AM to 6:00 PM Monday to Friday</span>';
  var hid=one.replace('class="notice-item"','class="notice-item" aria-hidden="true"');
  return one+hid+hid+hid+hid+hid;
};
function prodCard(p,i){
  var idx=PRODUCTS.indexOf(p);
  return '<article class="prod pop" style="--d:'+(i*45)+'"><button class="shot" type="button" data-shot="'+idx+'" aria-label="View demo screenshot: '+esc(p.name)+'"><img src="'+p.img+'" width="600" height="375" alt="'+esc(p.name)+' dashboard screenshot" loading="lazy" decoding="async"></button><div class="prod-body"><span class="tag">'+p.cat+'</span><h3>'+esc(p.name)+'</h3><p>'+esc(p.desc)+'</p><div class="prod-actions"><button class="btn btn-primary btn-sm" type="button" data-detail="'+idx+'">View details</button><button class="btn btn-ghost btn-sm" type="button" data-shot="'+idx+'">View demo</button></div></div></article>';
}
FILL['prod-home']=function(){return PRODUCTS.slice(0,3).map(function(p){return prodCard(p,0).replace(' pop"','"')}).join('')};
FILL['prod-list']=function(){
  var chips=['All'].concat(PRODUCT_GROUPS).map(function(g,i){
    var n=g==='All'?PRODUCTS.length:PRODUCTS.filter(function(p){return p.group===g}).length;
    return '<button type="button" class="filter" data-group="'+esc(g)+'" aria-pressed="'+(i===0)+'">'+esc(g)+'<span class="fc">'+n+'</span></button>';
  }).join('');
  return '<div class="prod-tools"><div class="search" role="search"><label class="sr-only" for="prodSearch">Search products</label>'+icon('search')
    +'<input id="prodSearch" type="search" placeholder="Search products, e.g. restaurant, billing, rentals" autocomplete="off" spellcheck="false"><button class="search-clear" id="prodClear" type="button" aria-label="Clear search" hidden>'+icon('x')+'</button></div>'
    +'<div class="filters" role="group" aria-label="Filter products by type">'+chips+'</div></div>'
    +'<p class="result-count" id="prodCount" aria-live="polite"></p><div class="prod-grid" id="prodGrid"></div>'
    +'<div class="empty" id="prodEmpty" hidden><p>No products match your search.</p><button class="btn btn-ghost" id="prodReset" type="button">Clear search and filters</button></div>';
};
FILL['why']=function(){return WHY.map(function(w){return '<div class="why-item">'+icon(w.icon)+'<h3>'+esc(w.t)+'</h3><p>'+esc(w.d)+'</p></div>'}).join('')};
FILL['steps']=function(){return STEPS.map(function(s,i){return '<div class="step"><span class="n">'+(i+1)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join('')};
FILL['technologies']=function(){

  function item(t,hidden){

    return '<span class="partner"'+
      (hidden?' aria-hidden="true"':'')+
      '><img src="'+t.src+
      '" alt="'+(hidden?'':esc(t.name))+
      '" width="'+Math.round(t.w*56/t.h)+
      '" height="56" decoding="async"></span>';

  }

  var one=TECHNOLOGIES.map(function(t){
    return item(t,false);
  }).join('');

  var hid=TECHNOLOGIES.map(function(t){
    return item(t,true);
  }).join('');

  return '<section class="s partners technologies-section">'+
    '<div class="wrap">'+
      '<h2 class="reveal">Technologies We Use</h2>'+
    '</div>'+
    '<div class="marquee" tabindex="-1">'+
      '<div class="mq-track" data-n="'+TECHNOLOGIES.length+'">'+
        one+hid+hid+
      '</div>'+
    '</div>'+
  '</section>';

};
FILL['partners']=function(){
  function item(p,hidden){
    return '<span class="partner"'+(hidden?' aria-hidden="true"':'')+'><img src="'+p.src+'" alt="'+(hidden?'':esc(p.name))+'" width="'+Math.round(p.w*56/p.h)+'" height="56" decoding="async"></span>';
  }
  var one=PARTNERS.map(function(p){return item(p,false)}).join('');
  var hid=PARTNERS.map(function(p){return item(p,true)}).join('');
  return '<section class="s partners"><div class="wrap"><h2 class="reveal">Collaborators &amp; strategic partners</h2></div><div class="marquee" tabindex="-1"><div class="mq-track" data-n="'+PARTNERS.length+'">'+one+hid+hid+'</div></div></section>';
};
FILL['presence']=function(){
  return '<section class="s"><div class="wrap"><div class="s-head reveal"><h2>Global presence, local expertise</h2><p>Reach the right team in your region.</p></div><div class="presence" data-stagger>'
  +PLACES.map(function(p){return '<div class="place-card"><span class="cc">'+p[0]+'</span><h3>'+p[1]+'</h3><p>'+p[2]+'</p></div>'}).join('')
  +'</div></div></section>';
};
FILL['cta']=function(){
  return '<section class="s"><div class="wrap"><div class="cta-band reveal"><h2>Let\u2019s build the right solution for your business.</h2><p>Tell us what you need. We will reply with clear next steps.</p><div class="cta-row"><a class="btn btn-light" href="contact.html">Start a project</a><a class="btn btn-outline-light" href="'+C.wa+'" target="_blank" rel="noopener">WhatsApp</a></div></div></div></section>';
};
function workCard(p,key,d){
  var anim=d!==undefined;
  return '<article class="work'+(anim?' pop':'')+'"'+(anim?' style="--d:'+d+'"':'')+'><button class="work-shot" type="button" data-pshot="'+key+'" aria-label="View screenshot: '+esc(p[0])+'"><img src="'+p[2]+'" width="600" height="290" alt="'+esc(p[0])+' website screenshot" loading="lazy" decoding="async"></button><div class="work-body"><h3>'+esc(p[0])+'</h3></div></article>';
}
FILL['portfolio']=function(){
  var chips=PORTFOLIO_REGIONS.map(function(r,i){
    var n=r[0]==='all'?PORTFOLIO.length:PORTFOLIO.filter(function(p){return p[1]===r[0]}).length;
    return '<button type="button" class="filter" data-region="'+r[0]+'" aria-pressed="'+(i===0)+'">'+esc(r[1])+'<span class="fc">'+n+'</span></button>';
  }).join('');
  return '<div class="prod-tools solo"><div class="filters" role="group" aria-label="Filter projects by region">'+chips+'</div></div>'
    +'<p class="count-line" id="pfCount" aria-live="polite"></p><div class="work-grid" id="workGrid"></div>'
    +'<h2 class="more-h" id="moreH" hidden>More projects</h2><div class="tiles" id="tiles"></div>'
    +'<div class="more" id="moreWrap" hidden><button class="btn btn-ghost" type="button" id="moreBtn"></button></div>';
};
FILL['certs']=function(){

  var out='';

  CERTIFICATES.forEach(function(cert,index){

    out+=
      '<article class="recognition-card">'+

        '<div class="recognition-visual">'+
          '<img src="'+esc(cert.logo)+'" '+
          'alt="'+esc(cert.title)+'" '+
          'loading="lazy">'+
        '</div>'+

        '<div class="recognition-content">'+

          '<span class="recognition-type">'+
            'CERTIFICATE &amp; RECOGNITION'+
          '</span>'+

          '<h3>'+esc(cert.title)+'</h3>'+

          '<p>'+esc(cert.issuer)+'</p>'+

          '<button '+
            'class="recognition-link" '+
            'type="button" '+
            'data-cert-view="'+index+'" '+
            'aria-label="View '+esc(cert.title)+'">'+

            'View Certificate'+
            '<span aria-hidden="true">↗</span>'+

          '</button>'+

        '</div>'+

      '</article>';

  });

  return out;
};

/* ---------- Home: Awards & Recognition ---------- */

FILL['home-awards']=function(){

  if(
    typeof CERTIFICATES==='undefined' ||
    !CERTIFICATES.length
  ){
    return '';
  }

  var selectedIndexes=[
    3,   // Google Ads Display
    4,   // Google Ads Search
    6,   // Google Analytics
    16,  // Product Roadmapping
    12,  // KCCI
    18   // PSEB
  ];

  return selectedIndexes.map(function(index){

    var cert=CERTIFICATES[index];

    if(!cert) return '';

    return ''+

      '<article class="home-award-card">'+

        '<button '+
          'class="home-award-view" '+
          'type="button" '+
          'data-cert-view="'+index+'" '+
          'aria-label="View '+esc(cert.title)+' certificate">'+

          '<div class="home-award-logo">'+
            '<img '+
              'src="'+esc(cert.logo)+'" '+
              'alt="'+esc(cert.title)+'" '+
              'loading="lazy">'+
          '</div>'+

          '<div class="home-award-info">'+

            '<span class="home-award-label">'+
              'CERTIFICATE &amp; RECOGNITION'+
            '</span>'+

            '<h3>'+esc(cert.title)+'</h3>'+

            '<p>'+esc(cert.issuer)+'</p>'+

            '<strong>'+
              'View Certificate '+
              '<span aria-hidden="true">↗</span>'+
            '</strong>'+

          '</div>'+

        '</button>'+

      '</article>';

  }).join('');

};

/* ---------- Home Awards Slider ---------- */

(function initHomeAwardsSlider(){

  var grid=document.getElementById('homeAwardsGrid');
  var prev=document.querySelector('.home-awards-prev');
  var next=document.querySelector('.home-awards-next');

  if(!grid || !prev || !next) return;


  function scrollAmount(){

    var card=grid.querySelector('.home-award-card');

    if(!card) return 350;

    return card.offsetWidth + 20;
  }


  prev.addEventListener('click',function(){

    grid.scrollBy({
      left:-scrollAmount(),
      behavior:'smooth'
    });

  });


  next.addEventListener('click',function(){

    grid.scrollBy({
      left:scrollAmount(),
      behavior:'smooth'
    });

  });


  function updateArrows(){

    var maxScroll=
      grid.scrollWidth-grid.clientWidth;

    prev.disabled=grid.scrollLeft<=5;

    next.disabled=
      grid.scrollLeft>=maxScroll-5;

  }


  grid.addEventListener('scroll',updateArrows);

  window.addEventListener('resize',updateArrows);


  /* Check after dynamic cards are inserted */

  setTimeout(updateArrows,100);

})();

FILL['contact-methods']=function(){
  function row(href,ic,label,val,ext){return '<a class="cm" href="'+href+'"'+(ext?' target="_blank" rel="noopener"':'')+'><span class="ic-box">'+icon(ic)+'</span><span><small>'+label+'</small><b>'+val+'</b></span></a>'}
  return row('tel:'+C.tel1,'phone','Call us',C.phone1)+row('tel:'+C.tel2,'phone','Call us',C.phone2)+row('mailto:'+C.email,'mail','Email us',C.email)+row(C.wa,'chat','WhatsApp',C.phone1,true);
};
FILL['where']=function(){return '<h3>'+icon('pin')+'Where we work</h3><p class="muted">Karachi, Pakistan. We serve clients in Pakistan, Oman, the USA and beyond, with remote-friendly support.</p>'};
FILL['hours']=function(){return '<h3>'+icon('clock')+'Support hours</h3><p class="muted">Monday to Friday, 11:00 AM to 6:00 PM Pakistan time (PKT).</p><div class="clocks"><span>Karachi <b id="clkPK">--</b></span><span>New York <b id="clkNY">--</b></span></div><span class="state" id="openState">Checking hours</span>'};

function badge(k,alt,h,href){
  var b=BADGES[k],w=Math.round(b.w*h/b.h);
  var img='<img src="'+b.src+'" alt="'+esc(alt)+'" width="'+w+'" height="'+h+'" loading="lazy">';
  return href?'<a class="badge" href="'+href+'" target="_blank" rel="noopener" aria-label="'+esc(alt)+'">'+img+'</a>':'<span class="badge">'+img+'</span>';
}
function badgesHTML(){
  return '<div class="foot-badges">'
  +'<div><h4>Protected</h4><div class="badge-row">'+badge('dmca','DMCA.com Protection Status',46,'https://www.dmca.com/Protection/Status.aspx?ID=6a441866-1e7f-4a99-b5d7-69ade9d2286c')+'</div></div>'
  +'<div><h4>Trusted badge</h4><div class="badge-row">'+badge('trustpilot','Trustpilot',42,'https://www.trustpilot.com/review/recreatepk.com')+badge('clutch','Clutch',42)+'</div></div>'
  +'<div><h4>Verified</h4><div class="badge-row">'+badge('pseb','Pakistan Software Export Board (PSEB)',54)+badge('kcci','Karachi Chamber of Commerce and Industry (KCCI)',54)+'</div></div>'
  +'</div>';
}
FILL['footer']=function(){
  return '<div class="wrap"><div class="foot-grid">'
  +'<div><a class="brand" href="index.html" aria-label="Re Create Technologies, home">'+brand()+'</a><p class="foot-about">Technology, security and business systems built to move your operations forward.</p><div class="socials">'
  +SOCIAL.map(function(s){return '<a href="'+s[2]+'" target="_blank" rel="noopener" aria-label="'+s[0]+'">'+icon(s[1])+'</a>'}).join('')+'</div></div>'
  +'<div><h4>Company</h4><ul>'+NAV.slice(1).map(function(n){return '<li><a href="'+n[2]+'">'+n[1]+'</a></li>'}).join('')+'<li><a href="blogs.html">Blogs</a></li><li><a href="'+C.login+'" target="_blank" rel="noopener">Client login</a></li></ul></div>'
  +'<div><h4>What we do</h4><ul>'+SERVICES.map(function(s){return '<li><a href="services.html#svc-'+s.id+'">'+esc(s.title)+'</a></li>'}).join('')+'</ul></div>'
  +'<div><h4>Contact</h4><ul class="foot-contact">'
  +'<li>'+icon('phone')+'<span><a href="tel:'+C.tel1+'">'+C.phone1+'</a><br><a href="tel:'+C.tel2+'">'+C.phone2+'</a></span></li>'
  +'<li>'+icon('mail')+'<span><a href="mailto:'+C.email+'">'+C.email+'</a><br><a href="mailto:'+C.email2+'">'+C.email2+'</a></span></li>'
  +'<li>'+icon('pin')+'<span style="padding-top:5px">Karachi, Pakistan</span></li>'
  +'<li>'+icon('clock')+'<span style="padding-top:5px">Mon to Fri, 11 AM to 6 PM PKT</span></li></ul></div>'
  +'</div>'+badgesHTML()+'<div class="foot-bottom"><span>\u00A9 2026 <a class="footer-credit-link" href="index.html">Re Create Technologies</a>. All Rights Reserved.</span><span class="foot-legal"><a href="privacy-policy.html">Privacy Policy</a><span class="foot-separator">|</span><a href="terms-conditions.html">Terms &amp; Conditions</a></span></div></div>';
};

/* ---------- Fill the page ---------- */
$$('[data-brand]').forEach(function(el){el.innerHTML=brand()});
$$('[data-wa]').forEach(function(a){a.href=C.wa;if(a.classList.contains('wa-float'))a.innerHTML=icon('chat');else if(!a.querySelector('.ic')&&!a.classList.contains('wa-float')){a.insertAdjacentHTML('afterbegin',icon('chat'))}});
$$('[data-img]').forEach(function(img){img.src=IMAGES[img.getAttribute('data-img')]});
$$('[data-icon="arrow"]').forEach(function(a){a.insertAdjacentHTML('beforeend',icon('arrow'))});
$$('[data-fill]').forEach(function(el){var f=FILL[el.getAttribute('data-fill')];if(f)el.innerHTML=f()});
$('#footer').innerHTML=FILL['footer']();
function groupLinks(cls){
  return SERVICE_GROUPS.map(function(g){
    return {g:g,items:SERVICES.filter(function(s){return s.group===g})};
  });
}
function navHTML(){
  return NAV.map(function(n){
    if(n[0]!=='services')return '<a href="'+n[2]+'" data-route="'+n[0]+'">'+n[1]+'</a>';
    var cols=groupLinks().map(function(c){
      return '<div class="dd-col"><p class="dd-head">'+esc(c.g)+'</p><ul>'+c.items.map(function(s){
        return '<li><a class="dd-item" href="services.html#svc-'+s.id+'"><span class="ic-box">'+icon(s.icon)+'</span><span><b>'+esc(s.title)+'</b><small>'+esc(s.short)+'</small></span></a></li>';
      }).join('')+'</ul></div>';
    }).join('');
    return '<div class="dd" id="dd"><a class="dd-link" href="services.html" data-route="services">Services</a>'
      +'<button class="dd-btn" id="ddBtn" type="button" aria-expanded="false" aria-controls="ddMenu" aria-label="Show services menu">'+icon('chevd')+'</button>'
      +'<div class="dd-menu" id="ddMenu">'+cols+'<a class="dd-all" href="services.html"><span>View all services</span>'+icon('arrow')+'</a></div></div>';
  }).join('')+'<a class="nav-login" href="'+C.login+'" target="_blank" rel="noopener">'+icon('user')+'Client login</a>';
}
function dnavHTML(){
  return NAV.map(function(n){
    if(n[0]!=='services')return '<a href="'+n[2]+'" data-route="'+n[0]+'">'+n[1]+'</a>';
    var groups=groupLinks().map(function(c){
      return '<p class="d-head">'+esc(c.g)+'</p><ul>'+c.items.map(function(s){return '<li><a href="services.html#svc-'+s.id+'">'+esc(s.title)+'</a></li>'}).join('')+'</ul>';
    }).join('');
    return '<div class="d-acc" id="dAcc"><div class="d-acc-row"><a href="services.html" data-route="services">Services</a>'
      +'<button class="d-acc-btn" id="dAccBtn" type="button" aria-expanded="false" aria-controls="dAccPanel" aria-label="Show services">'+icon('chevd')+'</button></div>'
      +'<div class="d-acc-panel" id="dAccPanel"><div class="d-acc-inner">'+groups+'<a class="d-all" href="services.html">View all services</a></div></div></div>';
  }).join('')+'<a class="d-login" href="'+C.login+'" target="_blank" rel="noopener">'+icon('user')+'Client login</a>';
}
$('#nav').innerHTML=navHTML();
$('#dnav').innerHTML=dnavHTML();

/* ---------- Services dropdown (desktop) + services accordion (mobile) ---------- */
(function(){
  var dd=$('#dd'),btn=$('#ddBtn'),menu=$('#ddMenu'),t=null;
  var hover=window.matchMedia&&matchMedia('(hover: hover)').matches;
  function setOpen(o){dd.classList.toggle('open',o);btn.setAttribute('aria-expanded',String(o));btn.setAttribute('aria-label',o?'Hide services menu':'Show services menu')}
  function links(){return $$('a',menu)}
  btn.addEventListener('click',function(){setOpen(!dd.classList.contains('open'))});
  dd.addEventListener('mouseenter',function(){if(!hover)return;clearTimeout(t);t=setTimeout(function(){setOpen(true)},70)});
  dd.addEventListener('mouseleave',function(){if(!hover)return;clearTimeout(t);t=setTimeout(function(){setOpen(false)},180)});
  dd.addEventListener('keydown',function(e){
    var open=dd.classList.contains('open'),inMenu=!!e.target.closest('#ddMenu');
    if(e.key==='Escape'&&open){setOpen(false);btn.focus();e.stopPropagation();return}
    if(!inMenu&&e.key==='ArrowDown'){e.preventDefault();setOpen(true);links()[0].focus();return}
    if(inMenu&&(e.key==='ArrowDown'||e.key==='ArrowUp'||e.key==='Home'||e.key==='End')){
      e.preventDefault();var a=links(),i=a.indexOf(document.activeElement);
      if(e.key==='ArrowDown')i=(i+1)%a.length;else if(e.key==='ArrowUp')i=(i-1+a.length)%a.length;else if(e.key==='Home')i=0;else i=a.length-1;
      a[i].focus();
    }
  });
  dd.addEventListener('focusout',function(e){if(!e.relatedTarget||!dd.contains(e.relatedTarget))setOpen(false)});
  document.addEventListener('click',function(e){if(!dd.contains(e.target))setOpen(false)});
  menu.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
  var acc=$('#dAcc'),accBtn=$('#dAccBtn');
  accBtn.addEventListener('click',function(){var o=!acc.classList.contains('open');acc.classList.toggle('open',o);accBtn.setAttribute('aria-expanded',String(o));accBtn.setAttribute('aria-label',o?'Hide services':'Show services')});
})();
(function(){var el=$('#f-topic');if(!el)return;var t=SERVICES.map(function(x){return x.title}).concat(['Product enquiry','Something else']);el.innerHTML=t.map(function(x){return '<option>'+esc(x)+'</option>'}).join('')})();
$$('[data-stagger]').forEach(function(g){Array.prototype.forEach.call(g.children,function(c,i){c.classList.add('reveal');c.style.setProperty('--d',Math.min(i,8)*70)})});

/* ---------- Router ---------- */
var pages=$$('.page'),cur=null,firstRoute=true;
var state={topic:'',msg:''};
function hashParts(){return location.hash.replace(/^#/,'').split('?')[0].replace(/\/$/,'').split('/')}
function routeFromHash(){return document.body.getAttribute('data-page')||'home'}
function anchorFromHash(){var h=location.hash.replace(/^#/,'');return h.indexOf('svc-')===0?h.slice(4):''}
function setTag(sel,val,attr){var el=$(sel);if(el)el.setAttribute(attr||'content',val)}
function setMeta(r){
  var m=META[r];document.title=m.t;
  setTag('meta[name="description"]',m.d);setTag('meta[property="og:title"]',m.t);setTag('meta[property="og:description"]',m.d);
  setTag('meta[property="og:url"]',C.base+m.p);setTag('meta[name="twitter:title"]',m.t);setTag('meta[name="twitter:description"]',m.d);
  setTag('link[rel="canonical"]',C.base+m.p,'href');
}
function show(r){

  pages.forEach(function(p){

    var on = p.getAttribute('data-page') === r;

    p.hidden = !on;

    if(on && !firstRoute){
      p.classList.remove('enter');
      void p.offsetWidth;
      p.classList.add('enter');
    }

  });

  $$('[data-route]').forEach(function(a){

    if(a.getAttribute('data-route') === r){
      a.setAttribute('aria-current','page');
    }else{
      a.removeAttribute('aria-current');
    }

  });

  setMeta(r);
  cur = r;

  if(r === 'blogs'){
    renderBlog();
  }

  /* Only move to top when changing route */
  if(!firstRoute){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }

  closeMenu();

  lbOpener = null;
  closeLB();

  pdOpener = null;
  closePD();

  if(r === 'contact'){
    applyEnquiry();
  }

  if(!firstRoute){
    var m = $('#main');

    if(m){
      m.focus({
        preventScroll: true
      });
    }
  }

  firstRoute = false;

  observeReveals();

  var a = anchorFromHash();

  if(r === 'services' && a){

    setTimeout(function(){

      var el = document.getElementById('svc-' + a);

      if(el){

        el.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'start'
        });

        el.classList.remove('flash');
        void el.offsetWidth;
        el.classList.add('flash');

      }

    },90);

  }

}
window.addEventListener('hashchange',function(){show(routeFromHash())});
$('#skip').addEventListener('click',function(e){e.preventDefault();$('#main').focus()});

/* ---------- Menu ---------- */
var menuBtn=$('#menuBtn'),drawer=$('#drawer'),menuClose=$('#menuClose');
menuClose.innerHTML=icon('x');
function isMenuOpen(){return document.body.classList.contains('menu-open')}
function openMenu(){
  document.body.classList.add('menu-open');
  menuBtn.setAttribute('aria-expanded','true');menuBtn.setAttribute('aria-label','Close menu');
  setTimeout(function(){menuClose.focus()},60);
}
function closeMenu(refocus){
  var was=isMenuOpen();
  document.body.classList.remove('menu-open');
  menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Open menu');
  if(was&&refocus===true)menuBtn.focus();
}
menuBtn.addEventListener('click',function(){if(isMenuOpen())closeMenu(true);else openMenu()});
menuClose.addEventListener('click',function(){closeMenu(true)});
$('#scrim').addEventListener('click',function(){closeMenu(true)});
drawer.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(a&&!a.hasAttribute('target'))closeMenu(false)});
document.addEventListener('keydown',function(e){
  if(!isMenuOpen())return;
  if(e.key==='Escape'){closeMenu(true);return}
  if(e.key==='Tab'){
    var f=$$('a[href],button',drawer).filter(function(x){return getComputedStyle(x).visibility!=='hidden'});
    if(!f.length)return;
    var first=f[0],last=f[f.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
});
window.addEventListener('resize',function(){if(window.innerWidth>=1180)closeMenu()});

/* ---------- Scroll: header state + progress ---------- */
var hdr=$('#header'),bar=$('#progress'),ticking=false;
function onScroll(){
  ticking=false;
  var y=window.pageYOffset,h=document.documentElement.scrollHeight-window.innerHeight;
  hdr.classList.toggle('scrolled',y>8);
  bar.style.width=(h>0?Math.min(100,y/h*100):0)+'%';
}
window.addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});

/* ---------- Reveal + counters ---------- */
var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){
  es.forEach(function(e){if(e.isIntersecting){var el=e.target;el.classList.add('in');io.unobserve(el);if(el.hasAttribute('data-count'))count(el);
      if(el.classList.contains('reveal')){var d=+(el.style.getPropertyValue('--d')||0);setTimeout(function(){el.classList.remove('reveal','in');el.style.removeProperty('--d')},d+900)}}});
},{threshold:.12,rootMargin:'0px 0px -6% 0px'}):null;
var seen=[];
function observeReveals(){
  $$('.reveal,[data-count]').forEach(function(el){
    if(seen.indexOf(el)>-1)return;seen.push(el);
    if(!io||reduce){el.classList.add('in');if(el.hasAttribute('data-count'))count(el);return}
    io.observe(el);
  });
}
function count(el){
  var to=+el.getAttribute('data-count'),suf=el.getAttribute('data-suffix')||'';
  if(reduce){el.textContent=to+suf;return}
  var t0=performance.now(),dur=1300;
  (function step(t){var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e)+suf;if(p<1)requestAnimationFrame(step)})(t0);
}
/* stats counters start from zero once visible */
$$('[data-count]').forEach(function(el){if(!reduce)el.textContent='0'+(el.getAttribute('data-suffix')||'')});

/* ---------- Partners marquee: continuous scroll + touch swipe ---------- */
var SPEED=46,mqs=[];
$$('.marquee').forEach(function(el){
  var m={el:el,W:0,pos:0,touching:false,resumeAt:0,visible:true,ready:false};
  var track=$('.mq-track',el),n=+track.getAttribute('data-n');
  m.measure=function(){var k=track.children;if(k.length>n){m.W=k[n].offsetLeft-k[0].offsetLeft;if(m.W>0&&!m.ready){m.pos=m.W;el.scrollLeft=m.W;m.ready=true}}};
  el.addEventListener('touchstart',function(){m.touching=true},{passive:true});
  var end=function(){m.touching=false;m.resumeAt=performance.now()+1500};
  el.addEventListener('touchend',end,{passive:true});el.addEventListener('touchcancel',end,{passive:true});
  el.addEventListener('wheel',function(){m.resumeAt=performance.now()+1500},{passive:true});
  if('IntersectionObserver' in window){new IntersectionObserver(function(es){m.visible=es[0].isIntersecting}).observe(el)}
  mqs.push(m);
});
window.addEventListener('resize',function(){mqs.forEach(function(m){m.W=0;m.ready=false})});
if(!reduce&&mqs.length){
  var last=performance.now();
  (function tick(t){
    var dt=Math.min(t-last,50);last=t;
    mqs.forEach(function(m){
      if(!m.visible||!m.el.offsetParent)return;
      if(!m.W){m.measure();if(!m.W)return}
      if(m.touching||t<m.resumeAt){
        m.pos=m.el.scrollLeft;var w=false;
        if(m.pos>=2*m.W){m.pos-=m.W;w=true}else if(m.pos<=2){m.pos+=m.W;w=true}
        if(w)m.el.scrollLeft=m.pos;
      }else{
        m.pos+=SPEED*dt/1000;if(m.pos>=2*m.W)m.pos-=m.W;m.el.scrollLeft=m.pos;
      }
    });
    requestAnimationFrame(tick);
  })(last);
}
if(reduce){$$('.pulse').forEach(function(p){p.parentNode.removeChild(p)})}

/* ---------- Products filter ---------- */
document.addEventListener('click',function(e){
  var sh=e.target.closest('[data-shot]');
  if(sh){openLB(+sh.getAttribute('data-shot'),sh,shotsProducts());return}
  var ps=e.target.closest('[data-pshot]');
  if(ps){var k=ps.getAttribute('data-pshot').split(':');openLB(+k[1],ps,shotsWork(k[0]==='H'?PORTFOLIO_IMG:pfFilter(PORTFOLIO_IMG)));return}
  var dt=e.target.closest('[data-detail]');
  if(dt){openPD(+dt.getAttribute('data-detail'),dt);return}
  var q=e.target.closest('[data-enquire]');
  if(q){state.topic=q.getAttribute('data-topic')||'';state.msg=q.getAttribute('data-msg')||''}
});

/* ---------- Product details pop-up ---------- */
/* ---------- Product details pop-up ---------- */
var pd=$('#pd'),pdOpener=null;
var pdX=$('#pdX');

if(pdX){
  pdX.innerHTML=icon('x');
}

function waProd(name){
  return 'https://wa.me/'+C.tel1.replace('+','')+
    '?text='+encodeURIComponent(
      'Hello Re Create Technologies, I would like to know more about '+name+'.'
    );
}

function openPD(i,opener){

  /* Product modal does not exist on this page */
  if(!pd) return;

  var p=PRODUCTS[i];
  if(!p) return;

  pdOpener=opener||null;

  var title=$('#pdTitle');
  var desc=$('#pdDesc');
  var list=$('#pdList');
  var cta=$('#pdCta');

  if(title) title.textContent=p.name;
  if(desc) desc.textContent=p.desc;

  if(list){
    list.innerHTML=p.feats.map(function(f){
      return '<li>'+icon('check')+'<span>'+esc(f)+'</span></li>';
    }).join('');
  }

  if(cta){
    cta.href=waProd(p.name);
  }

  pd.hidden=false;
  document.body.classList.add('lb-open');

  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      pd.classList.add('open');
    });
  });

  var panel=$('.md-panel',pd);
  if(panel){
    panel.focus({preventScroll:true});
  }
}

function closePD(){

  if(!pd || pd.hidden) return;

  pd.classList.remove('open');
  document.body.classList.remove('lb-open');

  setTimeout(function(){
    pd.hidden=true;
  },reduce?0:230);

  if(pdOpener && pdOpener.focus){
    pdOpener.focus({preventScroll:true});
  }
}

if(pd){

  pd.addEventListener('click',function(e){
    if(e.target.closest('[data-pd-close]')){
      closePD();
    }
  });

  document.addEventListener('keydown',function(e){

    if(pd.hidden) return;

    if(e.key==='Escape'){
      closePD();
    }

    else if(e.key==='Tab'){

      var panel=$('.md-panel',pd);
      if(!panel) return;

      var f=$$('button,a[href]',panel);
      if(!f.length) return;

      var first=f[0],
          last=f[f.length-1];

      if(e.shiftKey && document.activeElement===first){
        e.preventDefault();
        last.focus();
      }
      else if(!e.shiftKey && document.activeElement===last){
        e.preventDefault();
        first.focus();
      }
    }
  });

}

/* ---------- Screenshot viewer (products + portfolio) ---------- */

var lb=$('#lb'),
    lbIdx=0,
    lbOpener=null,
    lbItems=[];

var lbPrev=$('#lbPrev');
var lbNext=$('#lbNext');
var lbX=$('#lbX');

if(lbPrev){
  lbPrev.innerHTML=icon('chevl');
  lbPrev.setAttribute('aria-label','Previous');
}

if(lbNext){
  lbNext.innerHTML=icon('chevr');
  lbNext.setAttribute('aria-label','Next');
}

if(lbX){
  lbX.innerHTML=icon('x');
}

function shotsProducts(){
  return PRODUCTS.map(function(p){
    return {
      name:p.name,
      img:p.img,
      sub:'',
      cta:'Ask about this product',
      href:waProd(p.name)
    };
  });
}

function shotsWork(list){
  return list.map(function(p){
    return {
      name:p[0],
      img:p[2],
      sub:'',
      cta:'Start a similar project',
      href:'https://wa.me/'+C.tel1.replace('+','')+
        '?text='+encodeURIComponent(
          'Hello Re Create Technologies, I would like a website like '+p[0]+'.'
        )
    };
  });
}

function lbShow(i){

  if(!lb || !lbItems.length) return;

  var n=lbItems.length;

  lbIdx=(i+n)%n;

  var p=lbItems[lbIdx];
  var img=$('#lbImg');

  var title=$('#lbTitle');
  var count=$('#lbCount');
  var scroll=$('#lbScroll');
  var cta=$('#lbCta');

  if(title){
    title.textContent=p.name;
  }

  if(count){
    count.textContent=
      (p.sub ? p.sub+'  |  ' : '')+
      (lbIdx+1)+' of '+n;
  }

  if(img){
    img.src=p.img;
    img.alt=p.name+' screenshot, full view';
  }

  if(scroll){
    scroll.scrollTop=0;
  }

  if(cta){
    cta.textContent=p.cta;
    cta.href=p.href;
  }
}

function openLB(i,opener,items){

  lbItems=items || [];

  if(!lb || !lbItems.length) return;

  if(!lbItems.length) return;

  lbOpener=opener || null;

  lb.hidden=false;

  document.body.classList.add('lb-open');

  lbShow(i);

  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      lb.classList.add('open');
    });
  });

  var panel=$('.lb-panel',lb);

  if(panel){
    panel.focus({preventScroll:true});
  }
}

function closeLB(){

  if(!lb || lb.hidden) return;

  lb.classList.remove('open');

  document.body.classList.remove('lb-open');

  setTimeout(function(){
    lb.hidden=true;
  },reduce ? 0 : 230);

  if(lbOpener && lbOpener.focus){
    lbOpener.focus({preventScroll:true});
  }
}

/* ---------- Certificate viewer ---------- */

document.addEventListener('click',function(e){

  var btn=e.target.closest('[data-cert-view]');

  if(!btn) return;

  var index=parseInt(
    btn.getAttribute('data-cert-view'),
    10
  );

  if(
    typeof CERTIFICATES==='undefined' ||
    !CERTIFICATES[index]
  ){
    return;
  }

  /* Convert all certificates into lightbox items */
  var certificateItems=CERTIFICATES.map(function(cert){

    return {
      name:cert.title,
      img:cert.full,
      sub:cert.issuer,
      cta:'Contact Re Create',
      href:'contact.html'
    };

  });

  /* Open clicked certificate at its correct position */
  openLB(
    index,
    btn,
    certificateItems
  );

});

/* Only add lightbox events on pages that actually have the lightbox */

if(lb){

  lb.addEventListener('click',function(e){

    if(e.target.closest('[data-lb-close]')){
      closeLB();
    }

    else if(e.target.closest('#lbPrev')){
      lbShow(lbIdx-1);
    }

    else if(e.target.closest('#lbNext')){
      lbShow(lbIdx+1);
    }

  });


  document.addEventListener('keydown',function(e){

    if(lb.hidden) return;

    if(e.key==='Escape'){
      closeLB();
    }

    else if(e.key==='ArrowLeft'){
      lbShow(lbIdx-1);
    }

    else if(e.key==='ArrowRight'){
      lbShow(lbIdx+1);
    }

    else if(e.key==='Tab'){

      var panel=$('.lb-panel',lb);

      if(!panel) return;

      var f=$$('button,a[href]',panel);

      if(!f.length) return;

      var first=f[0];
      var last=f[f.length-1];

      if(e.shiftKey && document.activeElement===first){

        e.preventDefault();

        last.focus();

      }

      else if(!e.shiftKey && document.activeElement===last){

        e.preventDefault();

        first.focus();

      }
    }
  });
}

/* ---------- Products: search + filters ---------- */

(function initProductTools(){

  var grid=$('#prodGrid');
  if(!grid)return;

  var input=$('#prodSearch'),
      clear=$('#prodClear'),
      count=$('#prodCount'),
      empty=$('#prodEmpty'),
      group='All',
      q='';

  function match(p){

    if(group!=='All'&&p.group!==group)return false;

    if(!q)return true;

    var hay=(
      p.name+' '+
      p.desc+' '+
      p.cat+' '+
      p.group+' '+
      p.feats.join(' ')
    ).toLowerCase();

    return q.split(/\s+/).every(function(w){
      return hay.indexOf(w)>-1;
    });
  }

  function render(anim){

    var list=PRODUCTS.filter(match);

    grid.innerHTML=list.map(prodCard).join('');

    if(!anim){
      $$('.prod',grid).forEach(function(c){
        c.classList.remove('pop');
      });
    }

    grid.hidden=list.length===0;

    if(empty){
      empty.hidden=list.length>0;
    }

    if(count){
      count.textContent=
        list.length===PRODUCTS.length
          ? 'Showing all '+PRODUCTS.length+' products'
          : 'Showing '+list.length+' of '+PRODUCTS.length+' products';
    }

    if(clear && input){
      clear.hidden=!input.value;
    }
  }

  function setGroup(g){

    group=g;

    $$('.filter[data-group]').forEach(function(x){

      x.setAttribute(
        'aria-pressed',
        String(x.getAttribute('data-group')===g)
      );

    });
  }


  if(input){

    input.addEventListener('input',function(){

      q=input.value.trim().toLowerCase();

      render(false);

    });


    input.addEventListener('keydown',function(e){

      if(e.key==='Escape'&&input.value){

        input.value='';

        q='';

        render(false);

        e.stopPropagation();

      }

    });

  }


  if(clear){

    clear.addEventListener('click',function(){

      input.value='';

      q='';

      render(false);

      input.focus();

    });

  }


  $$('.filter[data-group]').forEach(function(b){

    b.addEventListener('click',function(){

      setGroup(b.getAttribute('data-group'));

      render(true);

    });

  });


  var reset=$('#prodReset');

  if(reset){

    reset.addEventListener('click',function(){

      if(input){
        input.value='';
        q='';
      }

      setGroup('All');

      render(true);

      if(input)input.focus();

    });

  }


  render(true);

})();

/* ---------- User stories: show all / fewer ---------- */
(function(){
  var btn=$('#storiesMore'),box=$('#stories');if(!btn)return;
  btn.addEventListener('click',function(){
    var open=box.classList.contains('collapsed');
    box.classList.toggle('collapsed',!open);btn.setAttribute('aria-expanded',String(open));
    btn.textContent=open?'Show fewer reviews':'Show all '+STORIES.length+' reviews';
  });
})();

/* ---------- Portfolio ---------- */

var HUES=[
  348,
  355,
  2,
  8,
  342,
  15,
  350,
  5
];

var shown=0,pfRegion='all',pfRest=[];
function monogram(n){var w=n.replace(/&/g,'').split(/\s+/).filter(Boolean);return (w.length>1?w[0][0]+w[1][0]:n.slice(0,2)).toUpperCase()}
function pfFilter(list){return pfRegion==='all'?list:list.filter(function(p){return p[1]===pfRegion})}
function renderTiles(upto){
  var t=$('#tiles');if(!t)return;
  var out='';
  for(var i=shown;i<Math.min(upto,pfRest.length);i++){
    var p=pfRest[i];
    out+='<div class="tile pop" style="--d:'+((i-shown)%12*35)+'"><span class="mono" style="--h:'+HUES[i%HUES.length]+'">'+esc(monogram(p[0]))+'</span><span><b>'+esc(p[0])+'</b></span></div>';
  }
  t.insertAdjacentHTML('beforeend',out);shown=Math.min(upto,pfRest.length);
  $('#moreWrap').hidden=shown>=pfRest.length;
}
function renderPortfolio(anim){
  var grid=$('#workGrid');if(!grid)return;
  var imgs=pfFilter(PORTFOLIO_IMG),all=pfFilter(PORTFOLIO);pfRest=pfFilter(PORTFOLIO_REST);
  grid.innerHTML=imgs.map(function(p,i){return workCard(p,'P:'+i,anim?Math.min(i,11)*40:undefined)}).join('');
  $('#tiles').innerHTML='';shown=0;renderTiles(12);
  $('#moreH').hidden=pfRest.length===0;
  $('#moreBtn').textContent='Show '+Math.max(pfRest.length-12,0)+' more projects';
  var label=PORTFOLIO_REGIONS.filter(function(r){return r[0]===pfRegion})[0][1];
  $('#pfCount').textContent=pfRegion==='all'?all.length+' projects across retail, services, hospitality, media and more.':all.length+' '+label.replace(/ Projects$/,'')+' projects.';
}
if($('#workGrid')){
  $$('.filter[data-region]').forEach(function(b){b.addEventListener('click',function(){
    pfRegion=b.getAttribute('data-region');
    $$('.filter[data-region]').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});
    renderPortfolio(true);
  })});
  $('#moreBtn').addEventListener('click',function(){renderTiles(pfRest.length)});
  renderPortfolio(false);
}

/* ---------- Contact form ---------- */
function applyEnquiry(){
  var s=$('#f-topic'),m=$('#f-msg');
  if(state.topic)s.value=state.topic;
  if(state.msg&&!m.value)m.value=state.msg;
  state.topic='';state.msg='';
  tickClocks();
}
var form=$('#enquiryForm');
function setErr(id,fid,msg){var e=$('#'+id),f=$('#'+fid);e.textContent=msg||'';if(msg)f.setAttribute('aria-invalid','true');else f.removeAttribute('aria-invalid');return !msg}
if(form)form.addEventListener('submit',function(ev){
  ev.preventDefault();
  var name=$('#f-name').value.trim(),email=$('#f-email').value.trim(),phone=$('#f-phone').value.trim(),msg=$('#f-msg').value.trim();
  var ok=true;
  ok=setErr('e-name','f-name',name?'':'Enter your name.')&&ok;
  ok=setErr('e-email','f-email',/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)?'':'Enter a valid email address.')&&ok;
  ok=setErr('e-phone','f-phone',phone.replace(/\D/g,'').length>=7?'':'Enter a phone number with country code.')&&ok;
  ok=setErr('e-msg','f-msg',msg?'':'Tell us a little about your project.')&&ok;
  var out=$('#formOut');
  if(!ok){out.innerHTML='';var first=form.querySelector('[aria-invalid="true"]');if(first)first.focus();return}
  var company=$('#f-company').value.trim(),topic=$('#f-topic').value;
  var body='Name: '+name+'\nCompany: '+(company||'-')+'\nEmail: '+email+'\nPhone: '+phone+'\nNeed: '+topic+'\n\n'+msg;
  var mail='mailto:'+C.email+'?subject='+encodeURIComponent('Project enquiry from '+name)+'&body='+encodeURIComponent(body);
  var wa='https://wa.me/'+C.tel1.replace('+','')+'?text='+encodeURIComponent(body);
  out.innerHTML='<div class="ready"><h3>Your enquiry is ready.</h3><p class="muted">Choose how you would like to send it.</p><div class="cta-row"><a class="btn btn-primary" href="'+mail+'">Send by email</a><a class="btn btn-ghost" href="'+wa+'" target="_blank" rel="noopener">Send on WhatsApp</a></div></div>';
  out.querySelector('a').focus();
});
if(form)['f-name','f-email','f-phone','f-msg'].forEach(function(id){$('#'+id).addEventListener('input',function(){this.removeAttribute('aria-invalid');var e=$('#e-'+id.slice(2));if(e)e.textContent=''})});

/* ---------- Live clocks ---------- */
function tickClocks(){
  var a=$('#clkPK');if(!a)return;
  var now=new Date();
  var f=function(tz){return new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'numeric',minute:'2-digit'}).format(now)};
  a.textContent=f('Asia/Karachi');$('#clkNY').textContent=f('America/New_York');
  var parts=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Karachi',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(now);
  var g=function(t){return parts.filter(function(p){return p.type===t})[0].value};
  var day=g('weekday'),mins=(+g('hour')%24)*60+(+g('minute'));
  var open=day!=='Sat'&&day!=='Sun'&&mins>=660&&mins<1080;
  var s=$('#openState');s.className='state'+(open?' open':'');
  s.textContent=open?'Support is open now':'Support is closed right now. Leave a message and we will reply.';
}
setInterval(function(){if(cur==='contact')tickClocks()},30000);

/* ---------- WhatsApp chat widget ---------- */
function pkOpen(){
  var parts=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Karachi',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date());
  var g=function(t){return parts.filter(function(p){return p.type===t})[0].value};
  var day=g('weekday'),mins=(+g('hour')%24)*60+(+g('minute'));
  return day!=='Sat'&&day!=='Sun'&&mins>=660&&mins<1080;
}
(function initWA(){
  var fab=$('#waFab'),panel=$('#waPanel'),body=$('#waBody'),played=false,timer=null;
  fab.innerHTML=waIcon('ic-chat')+icon('x','ic-x');
  $('#waAvatar').innerHTML=icon('gear');
  $('#waClose').innerHTML=icon('x');
  function play(){
    body.innerHTML='<div class="wa-typing" aria-hidden="true"><i></i><i></i><i></i></div>';
    timer=setTimeout(function(){
      body.innerHTML='<div class="wa-msg">Hello, welcome to <b>Re Create Technologies</b>.</div>'
        +'<div class="wa-msg" style="--d:250">How can we help you today? Choose a topic and we will start a WhatsApp chat.</div>'
        +'<div class="wa-opts">'+WA_OPTS.map(function(o,i){return '<a class="wa-opt" style="--d:'+(550+i*90)+'" href="https://wa.me/923322473158?text='+encodeURIComponent(o[1])+'" target="_blank" rel="noopener"><span>'+esc(o[0])+'</span>'+icon('arrow')+'</a>'}).join('')+'</div>';
    },reduce?0:900);
  }
  function open(){
    var st=$('#waStatus'),on=pkOpen();st.textContent=on?'Online now':'Away. We reply in support hours';st.className=on?'':'away';
    panel.hidden=false;fab.classList.add('is-open');fab.setAttribute('aria-expanded','true');fab.setAttribute('aria-label','Close chat');
    requestAnimationFrame(function(){requestAnimationFrame(function(){panel.classList.add('open')})});
    if(!played){played=true;play()}
    panel.focus({preventScroll:true});
  }
  function close(){
    panel.classList.remove('open');fab.classList.remove('is-open');fab.setAttribute('aria-expanded','false');fab.setAttribute('aria-label','Chat on WhatsApp');
    setTimeout(function(){if(!fab.classList.contains('is-open'))panel.hidden=true},reduce?0:230);
  }
  fab.addEventListener('click',function(){if(panel.hidden||!panel.classList.contains('open'))open();else close()});
  $('#waClose').addEventListener('click',function(){close();fab.focus()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden){close();fab.focus()}});
})();

/* ---------- Theme toggle (light / dark) ---------- */

(function(){

  var root = document.documentElement;
  var btn = document.getElementById('themeBtn');

  if(!btn) return;


  function eff(){

    return root.getAttribute('data-theme') ||
      (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );

  }


  function paint(){

    var t = eff();

    if(t === 'dark'){

      /* SUN ICON */
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" width="20" height="20" ' +
        'fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round" ' +
        'aria-hidden="true">' +
          '<circle cx="12" cy="12" r="4"></circle>' +
          '<path d="M12 2v2"></path>' +
          '<path d="M12 20v2"></path>' +
          '<path d="m4.93 4.93 1.41 1.41"></path>' +
          '<path d="m17.66 17.66 1.41 1.41"></path>' +
          '<path d="M2 12h2"></path>' +
          '<path d="M20 12h2"></path>' +
          '<path d="m6.34 17.66-1.41 1.41"></path>' +
          '<path d="m19.07 4.93-1.41 1.41"></path>' +
        '</svg>';

    }else{

      /* MOON ICON */
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" width="20" height="20" ' +
        'fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round" ' +
        'aria-hidden="true">' +
          '<path d="M21 12.79A9 9 0 1 1 11.21 3 ' +
          '7 7 0 0 0 21 12.79z"></path>' +
        '</svg>';

    }


    var msg =
      t === 'dark'
        ? 'Switch to light theme'
        : 'Switch to dark theme';

    btn.setAttribute('aria-label',msg);
    btn.setAttribute('title',msg);

  }


  btn.addEventListener('click',function(){

    var next =
      eff() === 'dark'
        ? 'light'
        : 'dark';

    root.classList.add('theme-anim');

    root.setAttribute('data-theme',next);

    try{
      localStorage.setItem('rc-theme',next);
    }catch(e){}

    paint();

    setTimeout(function(){
      root.classList.remove('theme-anim');
    },450);

  });


  paint();

})();

/* ---------- Smooth page navigation ---------- */

document.addEventListener('click',function(e){

  var link=e.target.closest('a[href]');

  if(!link) return;

  var href=link.getAttribute('href');

  if(!href) return;

  /* Ignore special/external links */
  if(
    href.charAt(0)==='#' ||
    href.indexOf('mailto:')===0 ||
    href.indexOf('tel:')===0 ||
    href.indexOf('javascript:')===0 ||
    link.hasAttribute('target') ||
    link.hasAttribute('download')
  ){
    return;
  }

  var url=new URL(link.href,window.location.href);

  /* Only animate links inside this website */
  if(url.origin!==window.location.origin){
    return;
  }

  e.preventDefault();

  document.body.classList.add('page-leaving');

  setTimeout(function(){
    window.location.href=url.href;
  },180);

});

/* ---------- Start ---------- */
show(routeFromHash());
onScroll();
})();

//new 
/* ==========================================================================
   PRICING PAGE
   ========================================================================== */

(function(){

  var filterWrap=document.getElementById('pricingFilters');
  var grid=document.getElementById('pricingGrid');
  var title=document.getElementById('pricingTitle');
  var description=document.getElementById('pricingDescription');

  /* Stop here when we are not on the Pricing page */
  if(!filterWrap || !grid || typeof PRICING==='undefined'){
    return;
  }


  function pricingIcon(name){
    if(typeof ICONS==='undefined' || !ICONS[name]){
      return '';
    }

    return '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+
      ICONS[name]+
    '</svg>';
  }


  function renderFilters(activeId){

    filterWrap.innerHTML=PRICING.map(function(category){

      var active=category.id===activeId;

      return (
        '<button'+
          ' class="pricing-filter'+(active?' active':'')+'"'+
          ' type="button"'+
          ' data-pricing-filter="'+category.id+'"'+
          ' aria-pressed="'+(active?'true':'false')+'"'+
        '>'+
          '<span class="pricing-filter-icon">'+
            pricingIcon(category.icon)+
          '</span>'+
          '<span>'+category.label+'</span>'+
        '</button>'
      );

    }).join('');

  }


  function renderPricing(category){

    if(!category){
      return;
    }

    title.textContent=category.title;
    description.textContent=category.description;


    grid.innerHTML=category.plans.map(function(plan){

      var price;

      if(plan.price==='Custom'){

        price=
          '<div class="pricing-price pricing-price-custom">'+
            'Custom Quote'+
          '</div>';

      }else{

        price=
          '<div class="pricing-price">'+
            '<span class="pricing-currency">'+plan.currency+'</span>'+
            '<strong>'+plan.price+'</strong>'+
            (plan.period
              ? '<span class="pricing-period">'+plan.period+'</span>'
              : ''
            )+
          '</div>';

      }


      var features=plan.features.map(function(feature){

        return (
          '<li>'+
            '<span class="pricing-check">'+
              pricingIcon('check')+
            '</span>'+
            '<span>'+feature+'</span>'+
          '</li>'
        );

      }).join('');


      var message=encodeURIComponent(
        'Hello Re Create Technologies, I am interested in the '+
        category.label+' '+plan.name+' package.'
      );


      return (
        '<article class="pricing-card'+(plan.popular?' popular':'')+'">'+

          (plan.popular
            ? '<div class="pricing-popular">'+
                '<span>★</span> Most Popular'+
              '</div>'
            : ''
          )+

          '<div class="pricing-card-head">'+

            '<span class="pricing-plan-name">'+
              plan.name+
            '</span>'+

            '<p>'+plan.description+'</p>'+

          '</div>'+

          price+

          '<ul class="pricing-features">'+
            features+
          '</ul>'+

          '<a'+
            ' class="btn '+(plan.popular?'btn-primary':'btn-ghost')+' pricing-button"'+
            ' href="https://wa.me/923322473158?text='+message+'"'+
            ' target="_blank"'+
            ' rel="noopener"'+
          '>'+
            plan.button+
          '</a>'+

        '</article>'
      );

    }).join('');

  }


  function selectPricing(id){

    var category=PRICING.find(function(item){
      return item.id===id;
    });

    if(!category){
      category=PRICING[0];
    }

    renderFilters(category.id);
    renderPricing(category);

  }


  filterWrap.addEventListener('click',function(event){

    var button=event.target.closest('[data-pricing-filter]');

    if(!button){
      return;
    }

    selectPricing(button.getAttribute('data-pricing-filter'));

  });


  /* Show Logo Design first */
  selectPricing(PRICING[0].id);

})();

/* ---------- Home: Awards & Recognition ---------- */

FILL['home-awards']=function(){

  if(
    typeof CERTIFICATES==='undefined' ||
    !CERTIFICATES.length
  ){
    return '';
  }

  /*
    Certificates shown on Home:
    Google Ads Display
    Google Ads Search
    Google Analytics
    Product Roadmapping
    KCCI
    PSEB
  */

  var selectedIndexes=[
    3,
    4,
    6,
    16,
    12,
    18
  ];

  var out='';

  selectedIndexes.forEach(function(index){

    var cert=CERTIFICATES[index];

    if(!cert) return;

    out+=
      '<article class="home-award-card">'+

        '<button '+
          'class="home-award-view" '+
          'type="button" '+
          'data-cert-view="'+index+'" '+
          'aria-label="View '+esc(cert.title)+' certificate">'+

          '<div class="home-award-logo">'+

            '<img '+
              'src="'+esc(cert.logo)+'" '+
              'alt="" '+
              'loading="lazy">'+

          '</div>'+

          '<div class="home-award-info">'+

            '<span>RECOGNITION</span>'+

            '<h3>'+esc(cert.title)+'</h3>'+

            '<p>'+esc(cert.issuer)+'</p>'+

            '<strong>'+
              'View Certificate '+
              '<span aria-hidden="true">↗</span>'+
            '</strong>'+

          '</div>'+

        '</button>'+

      '</article>';

  });

  return out;

};

/* =========================================================
   FIX MOBILE HEADER AFTER NOTICE SCROLLS AWAY
   ========================================================= */

(function(){

  const notice = document.querySelector('.notice');

  if(!notice) return;

  function updateFixedHeader(){

    if(window.innerWidth > 1179){
      document.body.classList.remove('header-fixed');
      return;
    }

    const noticeBottom = notice.getBoundingClientRect().bottom;

    if(noticeBottom <= 0){
      document.body.classList.add('header-fixed');
    }else{
      document.body.classList.remove('header-fixed');
    }

  }

  window.addEventListener('scroll', updateFixedHeader, {
    passive: true
  });

  window.addEventListener('resize', updateFixedHeader);

  updateFixedHeader();

})();