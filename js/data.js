/* ==========================================================================
   Re Create Technologies - site content and settings.
   Edit this file to change text, services, products, contact details, etc.
   Loaded before app.js (plain script, no build step needed).
   ========================================================================== */

/* ---- Contact details, links ---- */
var C={
  tel1:'+923322473158',phone1:'+92 332 2473158',tel2:'+923363036459',phone2:'+92 336 3036459',
  email:'info@recreatepk.com',email2:'recreatepk@gmail.com',
  wa:'https://wa.me/923322473158?text='+encodeURIComponent('Hi Re Create, I would like to discuss a project.'),
  login:'https://invoice.recreatepk.com/?ng=client/login/',
  reviewsAll:'https://www.google.com/search?q=Re+Create+Technologies+Reviews#lrd=0x3eb340952088f07d:0x40d772ee5b5f16da,1,,,,',
  reviewsWrite:'https://www.google.com/search?q=Re+Create+Technologies+Reviews#lrd=0x3eb340952088f07d:0x40d772ee5b5f16da,3,,,,',
  base:'https://recreatepk.com'
};

var SOCIAL=[
  ['Facebook','facebook','https://www.facebook.com/recreatepk'],
  ['LinkedIn','linkedin','https://www.linkedin.com/company/recreatepk'],
  ['Instagram','instagram','https://www.instagram.com/recreate.pk/'],
  ['YouTube','youtube','https://www.youtube.com/@recreatetechnologies8965'],
  ['X','x','https://x.com/recreatepk']
];

/* ---- Main navigation: [route, label, link] ---- */
var NAV=[
  ['home','Home','index.html'],
  ['about','About','about.html'],
  ['services','Services','services.html'],
  ['products','Products','products.html'],
  ['portfolio','Portfolio','portfolio.html'],
  ['certificates','Certificates','certificates.html'],
  ['photography','Photography','food-photography.html'],
  ['pricing','Pricing','pricing.html'],
  ['contact','Contact','contact.html'],
];
/* ---- Logo (header + footer) ---- */
var LOGO='assets/logo.png';
/* White logo used automatically in the dark theme and in the footer */
var LOGO_DARK='assets/logo-white.png';
/* Decorative pictures (Home About overview, About page achievements) */
var IMAGES={brain:'assets/crystal-brain.webp',robot:'assets/robot.webp'};
/* Official WhatsApp logo shape (used by the floating chat button) */
var WA_PATH="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

/* Footer badge images (files in assets/badges/). w/h are the file's pixel size. */
var BADGES={
  dmca:{src:'assets/badges/dmca.png',w:305,h:96},
  trustpilot:{src:'assets/badges/trustpilot.png',w:391,h:96},
  clutch:{src:'assets/badges/clutch.png',w:326,h:96},
  pseb:{src:'assets/badges/pseb.png',w:119,h:110},
  kcci:{src:'assets/badges/kcci.png',w:110,h:110}
};

/* ---- Home hero circle: label lines shown inside each service node (keep each line short) ---- */
var ORBIT_LABELS={
  'web-design-development':['Web Design &','Development'],
  'software-development':['Software','Development'],
  'it-business-consultancy':['IT & Business','Consultancy'],
  'digital-marketing':['Digital','Marketing'],
  'graphic-designing':['Graphic','Designing'],
  'seo-smo':['SEO / SMO'],
  'domain-hosting':['Domain &','Hosting'],
  'cctv-installation':['CCTV','Installation'],
  'stationery-printing':['Stationery','Printing']
};

/* ---- Groups shown in the Services dropdown menu (order = column order) ---- */
var SERVICE_GROUPS=['Web & Software','Marketing & Design','IT & Business'];
/* ---- Filter chips on the Products page ---- */
var PRODUCT_GROUPS=['Restaurant & Retail','Hospitality & Leisure','Business Operations','Property & Rentals'];

/* ---- Services (Services page, Home grid, footer, contact form). group = which dropdown column ---- */
var SERVICES=[
  {id:'web-design-development',group:'Web & Software',icon:'monitor',title:'Web Design & Development',short:'Fast, secure, good-looking websites that turn visitors into customers.',tags:['Custom design','Mobile-ready','E-commerce'],long:'We design and build responsive, SEO-friendly websites for startups and enterprises, from simple portfolios to full online stores.',pts:['Custom design and development','Responsive and mobile-ready','SEO and speed optimized','CMS and e-commerce integration']},
  {id:'software-development',group:'Web & Software',icon:'code',title:'Software Development',short:'Custom software that streamlines operations and scales with you.',tags:['ERP','Automation','Cloud apps'],long:'We build scalable software around your needs, from ERP systems and automation tools to cloud-based applications.',pts:['Custom software solutions','Scalable architecture','Integration and automation','Quality assurance and support']},
  {id:'it-business-consultancy',group:'IT & Business',icon:'briefcase',title:'IT & Business Consultancy',short:'Clear guidance on IT planning, workflows and digital strategy.',tags:['Strategy','Infrastructure','Cybersecurity'],long:'We review your processes, spot what to improve and help you put practical technology in place.',pts:['IT infrastructure planning and support','Workflow optimization and automation','Digital transformation strategy','Cybersecurity assessment and solutions']},
  {id:'digital-marketing',group:'Marketing & Design',icon:'megaphone',title:'Digital Marketing',short:'Campaigns that grow visibility, leads and measurable results.',tags:['SEO','Social media','PPC'],long:'Data-driven marketing across search, social, paid ads and email, aimed at the right audience at the right time.',pts:['Search engine optimization (SEO)','Social media marketing','Pay-per-click advertising (PPC)','Content and email marketing']},
  {id:'graphic-designing',group:'Marketing & Design',icon:'pen',title:'Graphic Designing',short:'Brand visuals that look sharp and build recognition.',tags:['Branding','Marketing','Social'],long:'From logos to brochures and social posts, we create designs that stay true to your brand.',pts:['Brand identity design','Marketing collateral','Social media graphics','UI/UX design elements']},
  {id:'seo-smo',group:'Marketing & Design',icon:'search',title:'SEO / SMO',short:'Rank higher on search and grow your social reach.',tags:['SEO','SMO','Reporting'],long:'SEO and social media optimization that work together to make your brand easy to find and easy to trust.',pts:['Search engine optimization (SEO)','Social media optimization (SMO)','Content strategy and analytics','Performance monitoring and reporting']},
  {id:'domain-hosting',group:'Web & Software',icon:'server',title:'Domain & Hosting',short:'Reliable domains and fast, secure hosting.',tags:['Domains','Hosting','VPS'],long:'Domain registration and hosting that keep your site online, fast and protected, from shared to VPS and dedicated servers.',pts:['Domain registration and management','Fast and secure hosting','Scalable server solutions','Ongoing technical support']},
  {id:'cctv-installation',group:'IT & Business',icon:'camera',title:'CCTV Installation',short:'Professional camera systems for homes, offices and commercial sites.',tags:['HD & IP','Remote viewing','Maintenance'],long:'HD and IP camera installation with remote viewing, from a simple home setup to a full commercial network.',pts:['HD and IP camera installation','Indoor and outdoor systems','Remote viewing on mobile and desktop','DVR/NVR setup, motion detection and night vision','Maintenance and upgrades']},
  {id:'stationery-printing',group:'IT & Business',icon:'printer',title:'Stationery Printing',short:'Sharp, color-accurate print for your business.',tags:['Stationery','Brochures','Custom'],long:'Business cards, letterheads, invoice books and brochures printed to your exact specs, with fast turnaround.',pts:['Business cards and letterheads','Envelopes and invoice books','Company profiles, flyers and brochures','Custom notebooks and calendars']}
];
  /* ==========================================================================
   PRICING
   Categories and Basic / Standard / Premium packages.
   Edit prices, descriptions and features here.
   ========================================================================== */

var PRICING=[
{
  id:'logo',
  label:'Logo Design',
  icon:'pen',
  title:'Logo Design Packages',
  description:'Professional logo design packages for startups, growing businesses and established brands.',

  plans:[

    /* BASIC */
    {
      name:'Basic',
      price:'59',
      oldPrice:'89.99',
      currency:'$',
      description:'Professional wordmark and logotype design for businesses that need a clean brand identity.',
      features:[
        '3 Unique Logo Concepts',
        '1 Dedicated Designer',
        '3 Revisions',
        'Free Color Options',
        '2–3 Business Day Turnaround',
        'Initial Concepts Within 24 Hours',
        'Ownership Rights',
        'Unique Custom Design',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    },


    /* STARTUP */
    {
      name:'Startup',
      price:'99',
      oldPrice:'169.99',
      currency:'$',
      description:'An abstract or iconic logo package with more concepts and creative options.',
      features:[
        '6 Unique Logo Concepts',
        '2 Dedicated Designers',
        '5 Revisions',
        'Free Color Options',
        'Free Icon Design',
        '2–3 Business Day Turnaround',
        'Initial Concepts Within 24 Hours',
        'Ownership Rights',
        'Unique Custom Design',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    },


    /* PROFESSIONAL */
    {
      name:'Professional',
      price:'149',
      oldPrice:'269.99',
      currency:'$',
      description:'A complete brand-mark, symbol or emblem logo package with business stationery.',
      popular:true,
      features:[
        '9 Unique Logo Concepts',
        '4 Dedicated Designers',
        'Unlimited Revisions',
        'Free Color Options',
        'Free Icon Design',
        'Business Card Design',
        'Letterhead Design',
        'Envelope Design',
        '2–3 Business Day Turnaround',
        'Initial Concepts Within 24 Hours',
        'Ownership Rights',
        'Unique Custom Design',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    },


    /* BUSINESS */
    {
      name:'Business',
      price:'229',
      oldPrice:'597',
      currency:'$',
      description:'A complete logo and business identity package for brands that need additional marketing materials.',
      features:[
        'Unlimited Logo Design Concepts',
        '6 Dedicated Designers',
        'Free Icon Design',
        'Unlimited Revisions',
        '24-Hour Turnaround',
        'Business Card Design',
        'Letterhead Design',
        'Envelope Design',
        'Electronic Letterhead',
        'Invoice Design',
        '2-Sided Flyer or Bi-Fold Brochure',
        'Initial Concepts Within 24 Hours',
        'Ownership Rights',
        'Unique Custom Design',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    },


    /* PREMIUM ILLUSTRATIVE */
    {
      name:'Premium Illustrative',
      price:'349',
      oldPrice:'747',
      currency:'$',
      description:'Custom illustrative logo design created for brands that need a distinctive visual identity.',
      features:[
        '3 Hand-Drawn Illustrative Concepts',
        '4 Creative Artists',
        '24-Hour Turnaround',
        'Unlimited Revisions',
        'Business Card Design',
        'Letterhead Design',
        'Envelope Design',
        'Initial Concepts Within 24 Hours',
        'Ownership Rights',
        'Unique Custom Design',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    },


    /* ENTERPRISE */
    {
      name:'Enterprise',
      price:'499',
      oldPrice:'1247',
      currency:'$',
      description:'A complete logo, branding, website and social media identity package.',
      features:[
        'Unlimited Logo Design Concepts',
        '7 Dedicated Designers',
        'Free Icon Design',
        'Unlimited Revisions',
        '24-Hour Turnaround',
        'Business Card Design',
        'Letterhead Design',
        'Envelope Design',
        'Electronic Letterhead',
        'Invoice Design',
        '2-Sided Flyer or Bi-Fold Brochure',
        '4-Page Website',
        'Social Media Size Images',
        '3 Social Media Page Designs',
        '2 Additional Brand Designs',
        'Initial Concepts Within 24 Hours',
        'Ownership Rights',
        'Unique Custom Design',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    }

  ]
},

{
  id:'web',
  label:'Web Development',
  icon:'code',
  title:'Web Development Packages',
  description:'Professional website development packages for startups, growing businesses and advanced online platforms.',

  plans:[

    /* BASIC WEB */
    {
      name:'Basic Web',
      price:'399',
      oldPrice:'799',
      currency:'$',
      description:'A simple professional website package for businesses that need a strong online presence.',
      features:[
        '2 Stock Images',
        '3 Page Website',
        '1 jQuery Slider Banner',
        'Contact / Query Form',
        'Complete W3C Certified HTML',
        '48 to 72 Hours Turnaround',
        'Complete Deployment',
        'Money-Back Guarantee',
        'ADD-ON: Mobile Responsive — $149'
      ],
      button:'Order Now'
    },


    /* STARTUP WEB */
    {
      name:'Startup Web',
      price:'649',
      oldPrice:'1299',
      currency:'$',
      description:'A growing-business website package with additional pages, banners and sitemap setup.',
      features:[
        '5 Stock Photos',
        '5 Page Website',
        '3 Banner Designs',
        '1 jQuery Slider Banner',
        'Google-Friendly Sitemap',
        'Complete W3C Certified HTML',
        '48 to 72 Hours Turnaround',
        'Money-Back Guarantee',
        'ADD-ON: Mobile Responsive — $149',
        'ADD-ON: Content Management System — $199'
      ],
      button:'Order Now'
    },


    /* PROFESSIONAL WEB */
    {
      name:'Professional Web',
      price:'849',
      oldPrice:'1699',
      currency:'$',
      description:'A professional website solution designed for startups and small business owners.',
      popular:true,
      features:[
        '10 Unique Website Pages',
        'CMS / Admin Panel Support',
        '8 Stock Images',
        '5 Banner Designs',
        '1 jQuery Slider Banner',
        'Google-Friendly Sitemap',
        'Complete W3C Certified HTML',
        '48 to 72 Hours Turnaround',
        'Complete Deployment',
        'Money-Back Guarantee',
        'ADD-ON: Online Appointment / Booking Tool — $129'
      ],
      button:'Order Now'
    },


    /* IDENTITY WEB */
    {
      name:'Identity Web',
      price:'1399',
      oldPrice:'2799',
      currency:'$',
      description:'A flexible website package for growing businesses that need more functionality and integrations.',
      features:[
        'Up to 15 Unique Website Pages',
        'Conceptual and Dynamic Website',
        'Mobile Responsive Design',
        'Online Reservation / Appointment Tool — Optional',
        'Online Payment Integration — Optional',
        'Custom Forms',
        'Lead Capturing Forms — Optional',
        'Interactive Hover Effects',
        'Newsletter Subscription — Optional',
        'Newsfeed Integration',
        'Social Media Integration',
        'Search Engine Submission',
        '5 Stock Photos',
        '3 Unique Banner Designs',
        '1 jQuery Slider Banner',
        'Complete W3C Certified HTML',
        '48 to 72 Hours Turnaround',
        'Complete Deployment',
        'Money-Back Guarantee',
        'ADD-ON: Professional Content / Copywriting — $699'
      ],
      button:'Order Now'
    },


    /* ELITE WEB */
    {
      name:'Elite Web',
      price:'1999',
      oldPrice:'3999',
      currency:'$',
      description:'An advanced website and branding solution with custom development and business integrations.',
      features:[
        '15 to 20 Website Pages',
        'Custom Interactive and Dynamic Design',
        'Custom WordPress or Custom PHP Development',
        '1 jQuery Slider Banner',
        'Up to 10 Custom Banner Designs',
        '10 Stock Images',
        'Unlimited Revisions',
        'Special Hover Effects',
        'Content Management System (CMS)',
        'Appointment / Scheduling / Online Ordering Integration — Optional',
        'Online Payment Integration — Optional',
        'Multi-Language Support — Optional',
        'Custom Dynamic Forms — Optional',
        'Newsletter / Offers Signup Area',
        'Search Bar',
        'Social Network Live Feed Integration — Optional',
        'Mobile Responsive',
        'Google-Friendly Sitemap',
        'Search Engine Submission',
        'Complete W3C Certified HTML',
        'Dedicated Design & Development Team',
        'Complete Deployment',
        'Dedicated Account Manager',
        'Ownership Rights & Unique Design',
        'Money-Back Guarantee',
        'ADD-ON: 30 Second Explainer Video — $299',
        'ADD-ON: Professional Content / Copywriting — $699'
      ],
      button:'Order Now'
    },


    /* BUSINESS WEB */
    {
      name:'Business Web',
      price:'2999',
      oldPrice:'5999',
      currency:'$',
      description:'A complete business website package combining custom development, branding and video content.',
      features:[
        '15 Second 2D Explainer Video',
        'Voice-Over & Sound Effects',
        'Professional Script Writing',
        'Storyboard',
        'SEO Meta Tags',
        '15 to 20 Website Pages',
        'Custom Interactive and Dynamic Design',
        'Custom WordPress or Custom PHP Development',
        '1 jQuery Slider Banner',
        'Up to 10 Custom Banner Designs',
        '10 Stock Images',
        'Unlimited Revisions',
        'Special Hover Effects',
        'Content Management System (CMS)',
        'Appointment / Scheduling / Online Ordering Integration — Optional',
        'Online Payment Integration — Optional',
        'Multi-Language Support — Optional',
        'Custom Dynamic Forms — Optional',
        'Newsletter / Offers Signup Area',
        'Search Bar',
        'Social Network Live Feed Integration — Optional',
        'Mobile Responsive',
        'Google-Friendly Sitemap',
        'Search Engine Submission',
        'Complete W3C Certified HTML',
        'Dedicated Design & Development Team',
        'Complete Deployment',
        'Dedicated Account Manager',
        'Ownership Rights & Unique Design',
        'Money-Back Guarantee',
        'ADD-ON: 60 Second Explainer Video — $499',
        'ADD-ON: 1 Month Basic SEO — $299'
      ],
      button:'Order Now'
    },


    /* CUSTOMIZED WEB PORTAL */
    {
      name:'Customized Web Portal',
      price:'5499',
      oldPrice:'10998',
      currency:'$',
      description:'A complete custom web portal solution for businesses requiring advanced functionality and user management.',
      features:[
        'Complete Custom Design & Development',
        'Custom Portal Development',
        'Dating, Job, Professional Network, Social Network, Restaurant, Medical or Enterprise Portal',
        'Unique Interactive High-End UI Design',
        'Unlimited Banner Designs',
        'Interactive Sliding Banners',
        'Special Hover Effects',
        'Unlimited Stock Images',
        'User Signup Area',
        'Client / User Dashboard',
        'Custom Coding and Development',
        'Custom Content Management System',
        'Appointment / Scheduling / Online Ordering Integration — Optional',
        'Online Payment Integration — Optional',
        'Multi-Language Support — Optional',
        'Custom Dynamic Forms — Optional',
        'Shopping Cart Integration — Optional',
        'Complete Database Creation',
        'Automated Signup Email Authentication',
        'Web Traffic Analytics Integration',
        'Third-Party API Integrations',
        'Newsletter / Offers Signup Area',
        'Search Functionality',
        'Social Network Live Feed Integration — Optional',
        'Search Engine Submission',
        'Module-Based Architecture',
        'Advanced Admin Panel',
        'Expert Design & Development Team',
        'Complete Deployment',
        'Complete Source Files',
        'Dedicated Project Manager',
        'Ownership Rights & Unique Design',
        'Money-Back Guarantee',
        'ADD-ON: 3 Months Basic SEO — $799'
      ],
      button:'Order Now'
    }

  ]
},

  {
  id:'ecommerce',
  label:'Ecommerce Website',
  icon:'cart',
  title:'Ecommerce Website Packages',
  description:'Ecommerce website packages for businesses that want to sell products online with secure payments, product management and a professional shopping experience.',

  plans:[

    /* E-COMMERCE BASIC */
    {
      name:'E-Commerce Basic',
      price:'399',
      oldPrice:'799',
      currency:'$',
      description:'A complete starter ecommerce solution for businesses beginning to sell online.',
      features:[
        'Custom Home Page Design',
        'Up to 50 Products',
        'Content Management System (CMS)',
        'Shopping Cart Integration',
        'Payment Merchant Integration',
        'Dedicated Designer & Developer',
        'Unlimited Revisions',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    },


    /* E-COMMERCE STARTUP */
    {
      name:'E-Commerce Startup',
      price:'799',
      oldPrice:'1599',
      currency:'$',
      description:'A growing ecommerce solution with more products, featured items and improved product discovery.',
      features:[
        'Up to 150 Products',
        'Content Management System (CMS)',
        'Shopping Cart Integration',
        'Featured Products',
        'Payment Module Integration',
        'Easy Product Search',
        'Dedicated Designer & Developer',
        'Unlimited Revisions',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    },


    /* E-COMMERCE PROFESSIONAL */
    {
      name:'E-Commerce Professional',
      price:'1499',
      oldPrice:'2998',
      currency:'$',
      description:'A professional ecommerce solution with custom design, responsive layouts and advanced store features.',
      popular:true,
      features:[
        'Customized Design',
        'Up to 500 Products',
        'Content Management System (CMS)',
        'Full Shopping Cart Integration',
        'Payment Module Integration',
        'Easy Product Search',
        'Product Reviews',
        'Featured Products',
        'Mobile Responsive',
        'Order Email Notifications',
        '5 Promotional Banners',
        'Expert Design & Development Team',
        'Unlimited Revisions',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    },


    /* E-COMMERCE ELITE */
    {
      name:'E-Commerce Elite',
      price:'3299',
      oldPrice:'6599',
      currency:'$',
      description:'An advanced ecommerce and branding package for businesses requiring a complete online selling ecosystem.',
      features:[
        'Unlimited Logo Design Concepts',
        '6 Professional Designers',
        'Icon Design',
        'Unlimited Logo Revisions',

        'Stationery Design',
        'Business Card, Letterhead & Envelope Design',
        'Invoice Design',
        'Email Signature Design',
        'Bi-Fold Brochure or 2-Sided Flyer Design',
        'Product Catalog Design',
        'Signage or Label Design',
        'T-Shirt or Car Wrap Design',

        'E-Commerce Store Design',
        'Product Detail Page Design',
        'Unique Banner Slider',
        'Featured Products Showcase',
        'Full Shopping Cart Integration',
        'Unlimited Products',
        'Unlimited Categories',
        'Product Ratings & Reviews',
        'Easy Product Search',
        'Payment Gateway Integration',
        'Multi-Currency Support',
        'Content Management System (CMS)',
        'Customer Login Area',
        'Mobile Responsive',

        'Social Media Plugin Integration',
        'Tell a Friend Feature',
        'Social Media Page Designs',

        'Dedicated Account Manager',
        'Unlimited Revisions',
        'All Final File Formats',
        'Ownership Rights & Unique Design',
        'Money-Back Guarantee'
      ],
      button:'Order Now'
    }

  ]
},

  {
  id:'shopify',
  label:'Shopify Website',
  icon:'cart',
  title:'Shopify Website Packages',
  description:'Professional Shopify store packages for startups, growing ecommerce businesses and established online brands.',

  plans:[

    /* STARTER */
    {
      name:'Starter',
      price:'699',
      oldPrice:'1399',
      currency:'$',
      description:'A starter Shopify store package for businesses ready to begin selling online.',
      features:[
        '1 Custom Homepage Concept',
        '5 Custom Inner Pages',
        '25 to 50 Products',
        'Up to 7 Categories',
        'Content Management System',
        '5 Premium Stock Photos',
        'Sales & Inventory Management',
        'Mini Shopping Cart Integration',
        'Payment Gateway Integration',
        'Social Media Integration',
        'Easy Product Search',
        '2 Promotional Banners',
        'Interactive jQuery Slider',
        'Desktop, iPhone & Android Responsive Compatibility',
        'Chrome, Firefox & Safari Compatibility',
        'W3C Certified HTML',
        'Google-Friendly Sitemap',
        'Complete Deployment',
        '30 Days Free Post-Launch Maintenance',
        'Dedicated Design & Development Team',
        'Dedicated Account Manager',
        '24/7 Customer Support',
        'Unlimited Revisions',
        'Money-Back Guarantee',
        'Ownership Rights & Unique Design',
        'ADD-ON: Complete Brand Identity — $199',
        'ADD-ON: Live Chat / Bot Integration — $249'
      ],
      button:'Order Now'
    },


    /* PROFESSIONAL */
    {
      name:'Professional',
      price:'1399',
      oldPrice:'2799',
      currency:'$',
      description:'A professional ecommerce package with advanced store management, integrations and SEO setup.',
      popular:true,
      features:[
        '2 Custom Homepage Concepts',
        '10 Custom Inner Pages',
        'Interactive & Dynamic Website Design',
        '50 to 250 Products',
        'Up to 10 Categories',
        '15 Premium Stock Photos',
        '8 Promotional Banners',
        '1 Landing Page Design',
        'Interactive jQuery Slider',
        'Customer Login / Signup Area',
        'Complete Database Creation',
        'Live Chat / Bot Integration — Optional',
        'Shipping Merchant Integration',
        'Dropshipping Integration — Optional',
        'Content Management System',
        'Sales & Inventory Management',
        'Wishlist, Discounts & Coupon Codes',
        'Product Ratings & Reviews',
        'Easy Product Search',
        'Product Sorting',
        'Full Shopping Cart Integration',
        'Payment Module Integration',
        'Social Media Integration',
        'Third-Party API Integration',
        'Customized Product Filters',
        'SEO-Friendly Coding',
        'On-Page SEO Configuration',
        'Search Engine Indexing',
        'Desktop, iPhone & Android Responsive Compatibility',
        'Cross-Browser Compatibility',
        'Fast Load Time',
        'Security Plugins',
        'W3C Certified HTML',
        'Google-Friendly Sitemap',
        'Complete Deployment',
        '5 Business Email Addresses',
        '90 Days Free Post-Launch Maintenance',
        'CMS Training Manual',
        'Dedicated Design & Development Team',
        'Dedicated Account Manager',
        '24/7 Customer Support',
        'Unlimited Revisions',
        'Money-Back Guarantee',
        'Ownership Rights & Unique Design',
        'ADD-ON: Marketplace Development — $749',
        'ADD-ON: Multi-Currency Support — $249'
      ],
      button:'Order Now'
    },


    /* BUSINESS */
    {
      name:'Business',
      price:'2299',
      oldPrice:'5599',
      currency:'$',
      description:'An advanced ecommerce solution for larger stores requiring extensive product, order and marketing capabilities.',
      features:[
        '3 Custom Homepage Concepts',
        '20 Custom Inner Pages',
        'Interactive & Dynamic Website Design',
        '250 to 1000 Products',
        'Up to 20 Categories',
        '25 Premium Stock Photos',
        '15 Promotional Banners',
        '2 Landing Page Designs',
        'Interactive jQuery Slider',
        'Customer Login / Signup Area',
        'Complete Database Creation',
        'Live Chat / Bot Integration — Optional',
        'Shipping Merchant Integration',
        'Multi-Currency Support — Optional',
        'Dropshipping Integration — Optional',
        'Content Management System',
        'Sales & Inventory Management',
        'Order Tracking & Billing History',
        'Order Status & Automated Invoicing',
        'Wishlist, Discounts & Coupon Codes',
        'Multiple Product Variations',
        'Advanced Search & Filtering',
        'Product Sorting',
        'Product Ratings & Reviews',
        'Easy Product Search',
        'Full Shopping Cart Integration',
        'Payment Module Integration',
        'Guest Checkout',
        'Social Media Integration',
        'Third-Party API Integration',
        '1 Year Free Hosting',
        '1 Year Free Domain Registration',
        'SEO-Friendly Coding',
        'On-Page SEO Configuration',
        'Search Engine Indexing',
        'Responsive Compatibility',
        'Cross-Browser Compatibility',
        'Email Marketing Campaigns',
        'Fast Load Time',
        'Security Plugins',
        'W3C Certified HTML',
        'Google-Friendly Sitemap',
        'Google Analytics Installation',
        'Google Webmaster Tool Setup',
        'Complete Deployment',
        '5 Business Email Addresses',
        '180 Days Free Post-Launch Maintenance',
        'CMS Training Manual',
        'Dedicated Design & Development Team',
        'Dedicated Account Manager',
        '24/7 Customer Support',
        'Unlimited Revisions',
        'Money-Back Guarantee',
        'Ownership Rights & Unique Design',
        'ADD-ON: Marketplace Development — $749',
        'ADD-ON: 30 Second Explainer Video — $349'
      ],
      button:'Order Now'
    }

  ]
},
{
  id:'smm',
  label:'Social Media Marketing',
  icon:'share',
  title:'Social Media Marketing Packages',
  description:'Social media marketing packages designed to build your online presence, engage your audience and grow your brand across major platforms.',

  plans:[

    /* STARTUP SMM */
    {
      name:'Startup SMM Plan',
      price:'399',
      oldPrice:'799',
      currency:'$',
      period:'/ Month',
      description:'A starter social media package for businesses that need consistent content and basic social media management.',
      features:[
        '3 Posts Per Week Per Network',
        'Facebook, Twitter & Instagram',
        'Content Creation',
        'Business Page Optimization',
        'Social Media Strategy Overview',
        'Facebook Likes Campaign',
        'Monthly Progress Report',
        'Basic Copywriting',
        'ADD-ON: Business Social Media Pages Creation — $149'
      ],
      button:'Order Now'
    },

    /* BUSINESS SMM */
    {
      name:'Business SMM Plan',
      price:'699',
      oldPrice:'1398',
      currency:'$',
      period:'/ Month',
      description:'A complete social media management package for businesses that want stronger engagement and campaign management.',
      popular:true,
      features:[
        'Copywriting & Visual Designs',
        'Business Page Optimization',
        'Ad Campaign Management',
        'Spam Monitoring',
        'Monthly Progress Report',
        '5 Posts Per Week',
        'Facebook, Twitter & Instagram',
        'Reputation Management',
        'Social Account Setup',
        'Content Creation',
        'Social Media Listening',
        'Query & Comment Replies',
        'ADD-ON: Newsletter Email — $149',
        'ADD-ON: TikTok — $199'
      ],
      button:'Order Now'
    },


    /* ENTERPRISE SMM */
    {
      name:'Enterprise SMM Plan',
      price:'1199',
      oldPrice:'2399',
      currency:'$',
      period:'/ Month',
      description:'An advanced social media management package for brands requiring frequent content, reputation management and multi-platform support.',
      features:[
        'Copywriting & Visual Designs',
        'Business Page Optimization',
        'Ad Campaign Management',
        'Spam Monitoring',
        '6 Posts Per Week',
        'Facebook, Twitter, Instagram & TikTok',
        'Reputation Management',
        'Social Account Setup',
        'Content Creation',
        'Social Media Listening',
        'Query & Comment Replies'
      ],
      button:'Order Now'
    }

  ]
},

{
  id:'video',
  label:'Video Animation',
  icon:'play',
  title:'Video Animation Packages',
  description:'Professional animation packages for promotional videos, explainers, social media content and brand storytelling.',

  plans:[

    {
      name:'Basic Video Package',
      price:'299',
      oldPrice:'599',
      currency:'$',
      description:'A starter animation package for short promotional and explainer videos.',
      features:[
        'Text & Image Compilation',
        '30 Second Duration',
        'Script Writing',
        'Standard 2D Characters',
        'Professional Voice-Over & Sound Effects',
        'Storyboard Revisions',
        'HD Format Video',
        'Money-Back Guarantee',
        'Dedicated Support',
        'ADD-ON: Custom 2D Character — $149',
        'ADD-ON: Reels / TikTok Format — $99',
        'ADD-ON: Animated Intro / Outro — $149'
      ],
      button:'Order Now'
    },

    {
      name:'Startup Video Package',
      price:'599',
      oldPrice:'1198',
      currency:'$',
      description:'A professional whiteboard or motion graphics package with custom characters.',
      popular:true,
      features:[
        'Whiteboard or Motion Graphic Animation',
        '60 Second Duration',
        'Script Writing',
        'Custom 2D Characters',
        'Professional Voice-Over & Sound Effects',
        'Storyboard Revisions',
        'HD Format Video',
        'Money-Back Guarantee',
        'Dedicated Support',
        'ADD-ON: 3D Character — $179',
        'ADD-ON: Reels / TikTok Format — $99',
        'ADD-ON: Animated Intro / Outro — $149'
      ],
      button:'Order Now'
    },

    {
      name:'Professional Video Package',
      price:'1199',
      oldPrice:'2399',
      currency:'$',
      description:'An advanced 2D character animation package for longer professional videos.',
      features:[
        '2D Character Animation',
        '120 Second Duration',
        'Script Writing',
        'Custom 2D Characters',
        'Professional Voice-Over & Sound Effects',
        'Storyboard Revisions',
        'HD Format Video',
        'Money-Back Guarantee',
        'Dedicated Support',
        'ADD-ON: Custom 3D Character — $229',
        'ADD-ON: Reels / TikTok Format — $99',
        'ADD-ON: Animated Intro / Outro — $149'
      ],
      button:'Order Now'
    }

  ]
},

{
  id:'seo',
  label:'SEO',
  icon:'search',
  title:'Search Engine Optimization Packages',
  description:'SEO packages designed to improve search visibility, optimize your website and help attract more organic traffic.',

  plans:[

    {
      name:'Startup Plan',
      price:'499',
      oldPrice:'998',
      currency:'$',
      description:'A starter SEO package covering website auditing, keyword targeting, on-page optimization and initial off-page SEO.',
      features:[
        'Website Audit',
        '10 Pages Optimized',
        '15 Selected Keywords Targeting',
        'Keyword Research',
        'Keyword Grouping',
        'Keyword Mapping',
        'On-Page Optimization',
        'SEO Road Map',
        'Blog Creation',
        'Webpage Copywriting — 3 Pages',
        '10 Title Tag Optimizations',
        '10 Meta Description Optimizations',
        '10 Meta Keyword Optimizations',
        'Domain Redirect Optimization',
        'XML Sitemap Optimization',
        'Robots.txt Check',
        '10 URL Rewrites',
        'Broken Link Report',
        'Rich Snippet Recommendations',
        'Breadcrumbs',
        'Initial Off-Page SEO',
        'Social Bookmarking',
        'SlideShare Marketing',
        'Forums / FAQs',
        'Link Building',
        'Directory Submission',
        'Local Business Listings'
      ],
      button:'Order Now'
    },

    {
      name:'Scaling Plan',
      price:'700',
      oldPrice:'1400',
      currency:'$',
      description:'A growth-focused SEO package with deeper analysis, expanded keyword targeting and ongoing optimization.',
      popular:true,
      features:[
        'Business Analysis',
        'Consumer Analysis',
        'Competitor Analysis',
        '35 Selected Keywords Targeting',
        '15 Pages Keyword Targeted',
        'Webpage Optimization',
        'Meta Tags Creation',
        'Keyword Optimization',
        'Image Optimization',
        'Anchor Optimization',
        'Tracking & Analysis',
        'Google Analytics Installation',
        'Google Webmaster Installation',
        'Call-To-Action Plan',
        'Sitemap Creation',
        'Monthly Reporting',
        'SEO Recommendations',
        'Email Support',
        'Phone Support',
        'Off-Page Optimization',
        'Social Bookmarking',
        'SlideShare Marketing',
        'Forums / FAQs',
        'Link Building',
        'Directory Submission',
        'Local Business Listings'
      ],
      button:'Order Now'
    },

    {
      name:'Venture Plan',
      price:'1200',
      oldPrice:'2400',
      currency:'$',
      description:'An advanced SEO package for businesses requiring broader keyword targeting and detailed optimization.',
      features:[
        'Business Analysis',
        'Consumer Analysis',
        'Competitor Analysis',
        '60+ Selected Keywords Targeting',
        '30 Pages Keyword Targeted',
        'Webpage Optimization',
        'Meta Tags Creation',
        'Keyword Optimization',
        'Image Optimization',
        'Anchor Tag Optimization',
        'Indexing Modifications',
        'Tracking & Analysis',
        'Google Places Inclusion',
        'Google Analytics Installation',
        'Google Webmaster Installation',
        'Call-To-Action Plan',
        'Sitemap Creation',
        'Monthly Reporting',
        'SEO Recommendations',
        'Email Support',
        'Phone Support',
        'Off-Page Optimization',
        'Social Bookmarking',
        'SlideShare Marketing',
        'Forums / FAQs',
        'Link Building',
        'Directory Submission',
        'Local Business Listings'
      ],
      button:'Order Now'
    }

  ]
},

  {
    id:'cctv',
    label:'CCTV',
    icon:'camera',
    title:'CCTV Installation Packages',
    description:'Security camera packages for homes, offices, shops and commercial locations.',
    plans:[
      {
        name:'Basic',
        price:'Custom',
        currency:'',
        description:'A practical CCTV setup for small homes, offices and shops.',
        features:[
          'Up to 4 Cameras',
          'HD Camera Options',
          'DVR / NVR Setup',
          'Basic Installation',
          'Mobile Remote Viewing Setup',
          'Night Vision Support',
          'System Testing'
        ],
        button:'Request Quote'
      },
      {
        name:'Standard',
        price:'Custom',
        currency:'',
        description:'For businesses that need wider coverage and remote monitoring.',
        popular:true,
        features:[
          'Up to 8 Cameras',
          'HD / IP Camera Options',
          'DVR / NVR Configuration',
          'Professional Installation',
          'Mobile & Desktop Remote Viewing',
          'Motion Detection Setup',
          'Night Vision Support',
          'System Testing & Configuration'
        ],
        button:'Request Quote'
      },
      {
        name:'Premium',
        price:'Custom',
        currency:'',
        description:'For larger commercial locations requiring broader security coverage.',
        features:[
          'Up to 16 Cameras',
          'HD / IP Camera Options',
          'Advanced DVR / NVR Setup',
          'Professional Installation',
          'Remote Monitoring Setup',
          'Motion Detection',
          'Night Vision',
          'Storage Configuration',
          'Multi-Device Viewing',
          'System Testing & Support'
        ],
        button:'Request Quote'
      }
    ]
  },

  {
    id:'hosting',
    label:'Domain & Hosting',
    icon:'server',
    title:'Domain & Hosting Packages',
    description:'Hosting options for business websites that need reliable performance, security and support.',
    plans:[
      {
        name:'Basic',
        price:'49',
        currency:'$',
        period:'/ year',
        description:'For portfolios and small business websites with lighter hosting needs.',
        features:[
          '1 Website',
          'SSL Certificate Setup',
          'Business Email Support',
          'Basic Hosting Resources',
          'Control Panel Access',
          'Basic Technical Support'
        ],
        button:'Get Started'
      },
      {
        name:'Standard',
        price:'99',
        currency:'$',
        period:'/ year',
        description:'For growing business websites that need additional resources and support.',
        popular:true,
        features:[
          'Multiple Website Support',
          'SSL Certificate Setup',
          'Business Email Support',
          'Increased Hosting Resources',
          'Control Panel Access',
          'Backup Support',
          'Technical Support'
        ],
        button:'Get Started'
      },
      {
        name:'Premium',
        price:'199',
        currency:'$',
        period:'/ year',
        description:'For businesses that need stronger hosting resources and priority support.',
        features:[
          'High-Resource Hosting',
          'Multiple Website Support',
          'SSL Certificate Setup',
          'Business Email Support',
          'Backup Support',
          'Security Configuration',
          'Performance Optimization',
          'Priority Technical Support'
        ],
        button:'Get Started'
      }
    ]
  },

  {
    id:'printing',
    label:'Printing',
    icon:'printer',
    title:'Business Printing Packages',
    description:'Professional business stationery and marketing print packages.',
    plans:[
      {
        name:'Basic',
        price:'Custom',
        currency:'',
        description:'Essential printed stationery for small businesses and startups.',
        features:[
          'Business Card Printing',
          'Letterhead Printing',
          'Basic Print Setup',
          'Standard Paper Options',
          'Print Quality Check'
        ],
        button:'Request Quote'
      },
      {
        name:'Standard',
        price:'Custom',
        currency:'',
        description:'A broader stationery package for established businesses.',
        popular:true,
        features:[
          'Business Cards',
          'Letterheads',
          'Envelopes',
          'Invoice Books',
          'Custom Print Setup',
          'Multiple Paper Options',
          'Print Quality Check'
        ],
        button:'Request Quote'
      },
      {
        name:'Premium',
        price:'Custom',
        currency:'',
        description:'A complete business printing package for larger branding requirements.',
        features:[
          'Business Cards',
          'Letterheads',
          'Envelopes',
          'Invoice Books',
          'Flyers / Brochures',
          'Company Profile Printing',
          'Custom Notebook Options',
          'Custom Calendar Options',
          'Premium Print Setup'
        ],
        button:'Request Quote'
      }
    ]
  }
];

/* ---- Products page (first three also show on Home). img = demo screenshot in assets/products/, feats = the 4 points in the View details pop-up ---- */
var PRODUCTS=[

  /* 1. POS Restaurant Software */
  {img:'assets/products/restaurant-pos.png',iw:1200,ih:574,cat:'Restaurant',tone:'Security',icon:'coffee',group:'Restaurant & Retail',name:'POS Restaurant Software',
   desc:'Fast checkout with a photo product grid, order types and printed bills for restaurants.',
   feats:['Touch-friendly product grid with photos','Quick search and barcode scanning','Hold orders, print orders and bills','Register details and daily sales']},

  /* 2. Stock Manager Advance POS */
  {img:'assets/products/stock-manager-pos.png',iw:1200,ih:709,cat:'Retail',tone:'Hardware',icon:'package',group:'Restaurant & Retail',name:'Stock Manager Advance POS',
   desc:'Point of sale with stock control and clear sales reports.',
   feats:['Point of sale for fast checkout','Sales and purchases','Products and repair services','Accounting and reports']},

  /* 3. Restaurant POS Software */
  {img:'assets/products/QR-restaurant-pos.png',iw:1200,ih:1420,cat:'Restaurant',tone:'Security',icon:'calc',group:'Restaurant & Retail',name:'QR dine flow  Restaurant POS Software',
   desc:'A restaurant POS platform with restaurant management, subscription packages and billing.',
   feats:['Manage many restaurants in one place','Subscription packages and billing','Active, trial and inactive status','Platform revenue overview']},

  /* 4. Salon Management System */
  {img:'assets/products/salon-management.png',iw:1200,ih:964,cat:'Beauty',tone:'Hardware',icon:'scissors',group:'Hospitality & Leisure',name:'Salon Management System',
   desc:'Manage sales, stock, customers and staff for your salon.',
   feats:['Point of sale and sales tracking','Best sellers and stock alerts','Daily and monthly sales reports','Customer, supplier and staff reports']},

  /* 5. Guest House Management System */
  {img:'assets/products/GMS.png',iw:1200,ih:1245,cat:'Hospitality',tone:'Security',icon:'home',group:'Hospitality & Leisure',name:'Guest House Management System (GMS)',
   desc:'Handle rooms, bookings, guests and billing for guest houses.',
   feats:['Room status and bookings','Guest records and billing','Agents, expenses and maintenance','Occupancy and revenue reports']},

  /* 6. Invoice / Billing Management System */
  {img:'assets/products/invoice-billing.png',iw:1200,ih:1417,cat:'Billing',tone:'Software',icon:'filetext',group:'Business Operations',name:'Invoice / Billing Management System',
   desc:'Create invoices, track payments and stay on top of billing.',
   feats:['Invoices with paid, partial and unpaid status','Income and expense charts','Bank and cash account balances','Customers, products and reports']},

  /* 7. Building Maintenance Software */
  {img:'assets/products/building-management.png',iw:1200,ih:1114,cat:'Facilities',tone:'Software',icon:'wrench',group:'Property & Rentals',name:'Building Maintenance Software',
   desc:'Manage flats, residents, maintenance invoices and monthly collection from one dashboard.',
   feats:['Paid and unpaid invoice tracking','Collection, expense and profit/loss summary','Flat and resident records','Monthly reports']},

  /* 8. Factory Management System */
  {img:'assets/products/factory-management.png',iw:1200,ih:888,cat:'Manufacturing',tone:'Security',icon:'factory',group:'Business Operations',name:'Factory Management System',
   desc:'Manage stock, orders, suppliers, accounts and staff across your factory.',
   feats:['Stock, goods receive notes and gate passes','Quotations, invoices and delivery orders','Suppliers, purchasing and ledger','Employees and attendance']},

  /* 9. Snooker Club Management System */
  {img:'assets/products/snooker-club.png',iw:1200,ih:672,cat:'Leisure',tone:'Software',icon:'target',group:'Hospitality & Leisure',name:'Snooker Club Management System',
   desc:'Track tables, players, playing time and balances for your club.',
   feats:['Live table status and player assignment','Player balances and discounts','Transfer of playing time and balance','Expenses, sales and reports']},

  /* 10. Courier Management System */
  {img:'assets/products/courier-management.png',iw:1200,ih:703,cat:'Logistics',tone:'Hardware',icon:'truck',group:'Business Operations',name:'Courier Management System',
   desc:'Handle bookings, shipments, tracking and deliveries in one place.',
   feats:['Shipment and pickup management','Tracking number search','Accounts receivable and transactions','Roles for managers, drivers and customers']},

  /* 11. RentPro Software */
  {img:'assets/products/rentpro.png',iw:1200,ih:724,cat:'Rentals',tone:'Software',icon:'key',group:'Property & Rentals',name:'RentPro Software',
   desc:'Manage rental bookings, vehicles, customers and payments.',
   feats:['New booking and all-bookings list','Vehicle availability at a glance','Customers, drivers and branches','Revenue and reports']}

];

/* ---- "Built around outcomes" and process steps ---- */
var WHY=[
  {
    icon:'award',
    t:'13+ Years of Experience',
    d:'Helping businesses adopt reliable digital and technology solutions since 2013.'
  },
  {
    icon:'sliders',
    t:'Solutions Built Around You',
    d:'We understand your requirements first, then recommend or build the right solution for your business.'
  },
  {
    icon:'layers',
    t:'Everything Under One Roof',
    d:'From websites and custom software to POS, CCTV, hosting, digital marketing and printing.'
  },
  {
    icon:'wrench',
    t:'End-to-End Support',
    d:'We stay involved from planning and implementation to support after delivery.'
  },
  {
    icon:'globe',
    t:'Local Expertise, Global Reach',
    d:'Experience serving businesses in Pakistan and international markets.'
  },
  {
    icon:'refresh',
    t:'Practical, Scalable Solutions',
    d:"Technology designed to solve today's needs while supporting future growth."
  }
];

var STEPS=[
  ['Discover','We listen first and map your workflow and goals.'],
  ['Design','We choose the right mix of software, hardware and infrastructure.'],
  ['Deliver','We set up, test and launch with minimal disruption.'],
  ['Support','We stay available as your business grows and changes.']
];

/* ---- Technologies used across our projects ---- */

/* ---- Technologies we use ---- */

var TECHNOLOGIES=[
  {name:'HTML',src:'assets/technologies/html.png',w:96,h:96},
  {name:'CSS',src:'assets/technologies/css.png',w:96,h:96},
  {name:'JavaScript',src:'assets/technologies/js.png',w:96,h:96},
  {name:'React',src:'assets/technologies/aftereffects.png',w:96,h:96},
  {name:'PHP',src:'assets/technologies/bootstrap.png',w:96,h:96},
  {name:'WordPress',src:'assets/technologies/canva.png',w:96,h:96},
  {name:'Shopify',src:'assets/technologies/capcut.png',w:96,h:96},
  {name:'MySQL',src:'assets/technologies/git.png',w:96,h:96},
  {name:'AWS',src:'assets/technologies/github.png',w:96,h:96},
  {name:'Git',src:'assets/technologies/illustrator.png',w:96,h:96},
  {name:'PHP',src:'assets/technologies/laravel.png',w:96,h:96},
  {name:'WordPress',src:'assets/technologies/photoshop.png',w:96,h:96},
  {name:'Shopify',src:'assets/technologies/php.png',w:96,h:96},
  {name:'MySQL',src:'assets/technologies/phpmyadmin.png',w:96,h:96},
  {name:'AWS',src:'assets/technologies/python.png',w:96,h:96},
  {name:'Cloudflare',src:'assets/technologies/react.png',w:96,h:96},
  {name:'Git',src:'assets/technologies/supabase.png',w:96,h:96}
];

/* ---- Collaborators & strategic partners (logo files in assets/partners/; w/h = file pixel size) ---- */
var PARTNERS=[
  {name:'AA Group of Companies',src:'assets/partners/aa-group.png',w:127,h:127},
  {name:'Sougat Tourism',src:'assets/partners/sougat-tourism.png',w:215,h:96},
  {name:'Al-Jannat Foods & Catering',src:'assets/partners/al-jannat.png',w:158,h:96},
  {name:'S Asif Lawyer',src:'assets/partners/s-asif-lawyer.png',w:218,h:96},
  {name:'Banks Courier Services',src:'assets/partners/banks-courier.png',w:159,h:96},
  {name:'Big Spicy',src:'assets/partners/big-spicy.png',w:287,h:96},
  {name:'Carriere Manager',src:'assets/partners/carriere-manager.png',w:200,h:96},
  {name:'Carry Courier & Logistics',src:'assets/partners/carry-courier.png',w:179,h:96},
  {name:'Consulting Expert',src:'assets/partners/consulting-expert.png',w:249,h:96},
  {name:'Dasti Delivery',src:'assets/partners/dasti-delivery.png',w:205,h:96},
  {name:'Hamid Car Rental',src:'assets/partners/hamid-car-rental.png',w:185,h:96},
  {name:'Makkah Pakwan',src:'assets/partners/makkah-pakwan.png',w:224,h:96},
  {name:'ML Courier Services',src:'assets/partners/ml-courier.png',w:176,h:96},
  {name:'Royal Falcon Limousine',src:'assets/partners/royal-falcon-limousine.png',w:208,h:96},
  {name:'Shawar Max',src:'assets/partners/shawar-max.png',w:276,h:96},
  {name:'Sidhu Travel Services',src:'assets/partners/sidhu-travel.png',w:219,h:96}
];

/* ---- Global presence cards (no links on purpose) ---- */
var PLACES=[
  ['PK','Pakistan','Head office in Karachi','pakistan@recreatepk.com'],
  ['OM','Oman','Oman and UAE clients','oman@recreatepk.com'],
  ['US','USA','United States clients','usa@recreatepk.com']
];

/* ---- Portfolio filter tabs: [key, label] ---- */
var PORTFOLIO_REGIONS=[['all','All'],['oman','Oman & UAE Projects'],['intl','International Projects'],['local','Local Projects']];

/* ---- Portfolio: [name, region, screenshot]. region = 'oman' | 'intl' | 'local' (used by the filter tabs).
       A screenshot (files in assets/portfolio/) is optional: projects with one show as picture cards, the rest as compact name tiles.
       Keep the same order as the website. ---- */
var PORTFOLIO=[

  ['Al Ejtiaz Media','oman','assets/portfolio/01-al-ejtiaz-media.webp','https://alejtiazmedia.com/'],
  ['Trends Tourism','oman','assets/portfolio/02-trends-tourism.webp','https://trendstourism.com/'],
  ['Future Solution Co','oman','assets/portfolio/03-future-solution-co.webp','https://futuresolutionco.com/'],
  ['Sanad Services','oman','assets/portfolio/04-sanad-services.webp','https://sanadservices.com/'],
  ['Wafina Cafe','oman','assets/portfolio/05-wafina-cafe.webp','https://wafinacafe.com/'],
  ['Beanzo Roastery','oman','assets/portfolio/06-beanzo-roastery.webp','https://beanzoroastery.com/'],
  ['Oman Wheel','oman','assets/portfolio/07-oman-wheel.webp','https://omanwheel.com/'],
  ['Oman Horizon Bulletin','oman','assets/portfolio/08-oman-horizon-bulletin.webp','https://omanhorizonbulletin.com/'],
  ['GR Law Firms','oman','assets/portfolio/09-gr-law-firms.webp','https://www.grlawfirms.com/'],
  ['Sanson Trading','oman','assets/portfolio/10-sanson-trading.webp','https://sansontrading.co/'],
  ['Buoy','oman','assets/portfolio/11-buoy.webp','https://buoy.ae/'],
  ['Super Grate Metal','oman','assets/portfolio/12-super-grate-metal.webp','https://supergratemetal.com/'],

  ['Zaheb Online','oman','assets/portfolio/13-zaheb-online.webp'],

  ['Future Manager','intl','assets/portfolio/14-future-manager.webp','https://futuremanager.nl/'],
  ['MSF Motors','intl','assets/portfolio/15-msf-motors.webp','https://msfmotors.nl/'],
  ['UNO Bezorgt','intl','assets/portfolio/16-uno-bezorgt.webp','https://unobezorgt.nl/'],

  ['Arganie','intl','assets/portfolio/17-arganie.webp'],

  ['Fiber Flow','intl','assets/portfolio/18-fiber-flow.webp','https://fiberflow.co/'],
  ['Up To Date Paper','intl','assets/portfolio/19-up-to-date-paper.webp','https://uptodatepaper.com/'],
  ['Bechlo','local','assets/portfolio/20-bechlo.webp','https://bechlo.pk/'],

  ['Hyper Softwares','local','assets/portfolio/21-hyper-softwares.webp'],

  ['DAA Groep','intl','assets/portfolio/22-daa-groep.webp','https://daagroep.nl/'],
  ['AA Consultant','local','assets/portfolio/23-aa-consultant.webp','https://aaconsultant.com.pk/'],
  ['S Asif Co','local','assets/portfolio/24-s-asif-co.webp','https://sasifco.com/'],
  ['Capital Flow PK','local','assets/portfolio/25-capital-flow-pk.webp','https://capitalflowpk.com/'],
  ['Designer Ind','local','assets/portfolio/26-designer-ind.webp','https://designerind.co/'],
  ['Urban Textile Ind','local','assets/portfolio/27-urban-textile-ind.webp','https://www.urbantextileind.com/'],
  ['Salam Textile','local','assets/portfolio/28-salam-textile.webp','https://salamtextile.com/'],
  ['Ali Fuels Filling','local','assets/portfolio/29-ali-fuels-filling.webp','http://alifuelsfilling.com/'],
  ['Humsafar Rent a Car','local','assets/portfolio/30-humsafar-rent-a-car.webp','https://www.humsafarrentacar.com/'],
  ['Transport Solution','local','assets/portfolio/31-transport-solution.webp','https://transportsolution.com.pk/'],
  ['My School AE','intl','assets/portfolio/32-my-school-ae.webp','http://myschoolae.com/'],
  ['Resham Bridal','local','assets/portfolio/33-resham-bridal.webp','http://reshambridal.pk/'],
  ['The Affordable Designers','local','assets/portfolio/34-the-affordable-designers.webp','https://theaffordabledesigners.com/'],

  ['The Wardrobes','intl','assets/portfolio/35-the-wardrobes.webp'],

  ['Rangoons','local','assets/portfolio/36-rangoons.webp','https://rangoons.shop/'],

  ['Zenith Store','local','assets/portfolio/37-zenith-store.webp'],

  ['AMRJ','local','assets/portfolio/38-amrj.webp','https://amrj.net/'],
  ['Allied Nexus Publisher','local','assets/portfolio/39-allied-nexus-publisher.webp','https://www.alliednexuspublisher.com/'],

  ['Manjis Bridal Photography','local','assets/portfolio/40-manjis-bridal-photography.webp'],

  ['Universal Corporation LLC','intl','assets/portfolio/41-universal-corporation-llc.webp','https://universalcorporationllc.com'],
  ['UHU Power','local','assets/portfolio/42-uhu-power.webp','https://www.uhupower.com.pk/'],
  ['Euro Icon Tower','local','assets/portfolio/43-euro-icon-tower.webp','https://euroicontower.recreatepk.com/'],
  ['Nigehban','local','assets/portfolio/44-nigehban.webp','https://www.nigehban.com/'],

  ['Butifyr','local','assets/portfolio/45-butifyr.webp','https://butifyr.com/'],
  ['Business Baba','local','assets/portfolio/46-business-baba.webp', 'https://businessbaba.com.pk/'],

  ['Final Choice','local','assets/portfolio/47-final-choice.webp','http://finalchoice.com.pk/'],
  ['N Health Care','local','assets/portfolio/48-n-health-care.webp','https://nhealthcare.com.pk/'],
  ['Care Fussion','local','assets/portfolio/49-care-fussion.webp','https://carefussion.com/'],
  ['Consulting Expert','intl','assets/portfolio/50-consulting-expert.webp','https://consultingexpert.nl/'],
  ['PCMCI Quantum','intl','assets/portfolio/51-pcmci-quantum.webp','https://pcmciquantum.com/'],
  ['Emirates Web Solutions','intl','assets/portfolio/52-emirates-web-solutions.webp','https://emirateswebsolutions.com/'],

  ['Taskhait Official','local','assets/portfolio/53-taskhait-official.webp'],
  ['Luggage Shop','intl','assets/portfolio/54-luggage-shop.webp'],

  ['Retro Bella','local','assets/portfolio/55-retro-bella.webp','http://retrobella.pk/'],
  ['Stitchline','local','assets/portfolio/56-stitchline.webp','http://stitchlineapparelinc.com/'],
  ['United Elevators','local','assets/portfolio/57-united-elevators.webp','http://unitedelevatorspk.com/'],
  ['Salar Enterprises','local','assets/portfolio/58-salar-enterprises.webp','http://salarenterprises.co/'],
  ['RoomRentPK','local','assets/portfolio/59-roomrentpk.webp','https://roomrentpk.com/'],
  ['Niktanya','local','assets/portfolio/60-niktanya.webp','https://niktanya.com/'],
  ['N&R Beauty Studio','local','assets/portfolio/61-nr-beauty-studio.webp','https://nrsaloon.com/'],
  ['Country Side Club','local','assets/portfolio/62-country-side-club.webp','https://countrysideclubkarachi.com/'],
  ['SOAA','local','assets/portfolio/63-soaa.webp','http://soaa.pk/'],
  ['FK Fast Food','local','assets/portfolio/67-fk.webp','http://fkfastfood.com/'],
  ['Al Hamza Roll Corner','local','assets/portfolio/69-alhamzarollcorner.webp','http://alhamzarollcorner.com/'],
  ['Button Bae','local','assets/portfolio/68-buttonbae.webp','http://buttonbae.com/'],
  ['24 News PK','local','assets/portfolio/70-24news.webp','http://24newspk.com/'],
  ['Haider Ali Foundation','local','assets/portfolio/66-haideralifoundation.webp','http://haideralifoundation.org/'],
  ['Jaseem Co','local','assets/portfolio/65-jasemco.webp','http://jaseemco.com/'],
  ['SSIS Al Wathba','intl','assets/portfolio/64-ssis.webp','https://ssis-alwathba.ae/']
];
var PORTFOLIO_IMG=PORTFOLIO.filter(function(p){return p[2]});
var PORTFOLIO_REST=PORTFOLIO.filter(function(p){return !p[2]});

/* =========================================================
   CERTIFICATES & RECOGNITIONS
   logo = visual shown on card
   full = full certificate opened in viewer
   ========================================================= */

var CERTIFICATES=[

  {
    title:'FBR Registration',
    issuer:'Federal Board of Revenue, Pakistan',
    logo:'assets/certificates/logos/fbr.png',
    full:'assets/certificates/full/fbr-1.jpg'
  },

  {
    title:'Taxpayer Registration Certificate',
    issuer:'Federal Board of Revenue, Pakistan',
    logo:'assets/certificates/logos/fbr.png',
    full:'assets/certificates/full/fbr-2.jpg'
  },

  {
    title:'FBR Registration',
    issuer:'Federal Board of Revenue, Pakistan',
    logo:'assets/certificates/logos/fbr.png',
    full:'assets/certificates/full/fbr-3.jpg'
  },

  {
    title:'Google Ads Display Certification',
    issuer:'Google Ads',
    logo:'assets/certificates/logos/google-ads-1.png',
    full:'assets/certificates/full/google-ads-1.jpg'
  },

  {
    title:'Google Ads Search Certification',
    issuer:'Google Ads',
    logo:'assets/certificates/logos/google-ads-2.png',
    full:'assets/certificates/full/google-ads-2.jpg'
  },

  {
    title:'Shopping Ads Certification',
    issuer:'Google Ads',
    logo:'assets/certificates/logos/google-ads-3.png',
    full:'assets/certificates/full/google-ads-3.jpg'
  },

  {
    title:'Google Analytics For Begineers Certification',
    issuer:'Google Analytics',
    logo:'assets/certificates/logos/google-analytics-academy.png',
    full:'assets/certificates/full/google-analytics-academy-1.jpg'
  },

  {
    title:'Advance Google Analytics Certification',
    issuer:'Google',
    logo:'assets/certificates/logos/google-analytics-academy.png',
    full:'assets/certificates/full/google-analytics-academy-2.jpg'
  },

  {
    title:'Product Analytics Micro-Certification',
    issuer:'Google',
    logo:'assets/certificates/logos/google-analytics-academy.png',
    full:'assets/certificates/full/product-analytics.jpg'
  },

  {
    title:'Future Proof Advertising in a Privacy-Safe World',
    issuer:'Google',
    logo:'assets/certificates/logos/google-certificate-1.png',
    full:'assets/certificates/full/google-certificate-1.jpg'
  },

  {
    title:'Google My Business',
    issuer:'Google',
    logo:'assets/certificates/logos/google-certificate-2.png',
    full:'assets/certificates/full/google-certificate-2.jpg'
  },

  {
    title:'Google Digital Workshop',
    issuer:'Google',
    logo:'assets/certificates/logos/google-digital-workshop.png',
    full:'assets/certificates/full/google-digital-workshop.jpg'
  },

  {
    title:'KCCI Membership',
    issuer:'Karachi Chamber of Commerce & Industry',
    logo:'assets/certificates/logos/kcci.png',
    full:'assets/certificates/full/kcci.jpg'
  },

  {
    title:'Product Fundamentals',
    issuer:'Product School',
    logo:'assets/certificates/logos/product-fundamental-1.png',
    full:'assets/certificates/full/product-fundamental-1.jpg'
  },

  {
    title:'Business Fundamentals',
    issuer:'Product School',
    logo:'assets/certificates/logos/product-fundamental-2.png',
    full:'assets/certificates/full/product-fundamental-2.jpg'
  },

  {
    title:'Product-Led Growth Micro-Certification',
    issuer:'Product School',
    logo:'assets/certificates/logos/product-led.png',
    full:'assets/certificates/full/product-led.jpg'
  },

  {
    title:'Product Roadmapping Micro-Certification',
    issuer:'Product School',
    logo:'assets/certificates/logos/product-roadmapping.png',
    full:'assets/certificates/full/product-roadmapping.jpg'
  },

  {
    title:'Product Strategy Micro-Certification',
    issuer:'Product School',
    logo:'assets/certificates/logos/product-strategy.png',
    full:'assets/certificates/full/product-strategy.jpg'
  },

  {
    title:'PSEB Registration',
    issuer:'Pakistan Software Export Board',
    logo:'assets/certificates/logos/pseb.png',
    full:'assets/certificates/full/pseb.jpg'
  }

];

/* ---- About page: achievements timeline ---- */
var ACHIEVEMENTS=[
  {
    "year": "2020",
    "title": "Digital Growth",
    "text": "Expanded our digital services to support more businesses with modern technology solutions."
  },
  {
    "year": "2021",
    "title": "Expanded Global Client Base",
    "text": "Successfully delivered 120+ digital solutions across 5 countries."
  },
  {
    "year": "2022",
    "title": "AI Integration Success",
    "text": "Implemented automation solutions that reduced client costs by 40%."
  },
  {
    "year": "2023",
    "title": "Innovation Milestone",
    "text": "Launched in-house AI-powered CMS and chatbot technology."
  },
  {
    "year": "2024",
    "title": "Excellence in Digital Transformation",
    "text": "Recognized for empowering SMEs with intelligent digital ecosystems."
  },
  {
    "year": "2025",
    "title": "Expanding Digital Solutions",
    "text": "Strengthened our portfolio of software, web and digital solutions for growing businesses."
  },
  {
    "year": "2026",
    "title": "Growing Global Reach",
    "text": "Expanded our presence and continued supporting businesses across local and international markets."
  },
  {
    "year": "2027",
    "title": "The Next Chapter",
    "text": "Continuing our journey toward smarter solutions, stronger partnerships and greater digital innovation."
  }
];

/* ---- Client stories shown on Home (the client testimonials from the old website). First 6 show; the rest open with "Show all".
       To show a person's photo, add photo:'assets/reviews/name.webp' to that entry (otherwise a coloured initial is used). ---- */
var STORIES=[
 {
  "name": "Ahsan Raza",
  "text": "Re Create built our website exactly how we envisioned it and optimized it for speed and conversion. Their professionalism truly stands out."
 },
 {
  "name": "Dr. Sarah Ahmed",
  "text": "Their team understood our business needs and delivered a custom software solution that improved our workflow and cut manual work in half."
 },
 {
  "name": "Junaid Akram",
  "text": "Their SEO services helped us dominate local search results and increase customer inquiries consistently. Highly recommended agency."
 },
 {
  "name": "Maria Khan",
  "text": "Our e-commerce sales increased within the first month after launch. The team provided full support and handled everything from design to deployment."
 },
 {
  "name": "James Parker",
  "text": "From branding to website design, every element was handled with perfection. They delivered a modern, responsive, and user-focused platform."
 },
 {
  "name": "Olivia Martin",
  "text": "Reliable, fast, and innovative—Re Create is our long-term digital partner. Their expertise saved us time and significantly reduced our operational costs."
 },
 {
  "name": "Imran Sheikh",
  "text": "Their digital marketing strategies helped us rank on Google and attract high-quality customers. Exceptional service and measurable results."
 },
 {
  "name": "Sadia Bukhari",
  "text": "We trusted Re Create with our Shopify store setup, and they exceeded expectations. The conversion rate has doubled since launch."
 },
 {
  "name": "Bilal Hussain",
  "text": "The level of detail and dedication from their team is impressive. They delivered our project ahead of schedule with flawless execution."
 },
 {
  "name": "Faizan Ali",
  "text": "We moved our hosting to Re Create and saw immediate improvements in uptime and security. Their technical support is always available when needed."
 },
 {
  "name": "Owais Mir",
  "text": "Outstanding experience! They guided us through every step of the process and provided strategic recommendations for digital scaling."
 },
 {
  "name": "Natasha Iqbal",
  "text": "Re Create took our offline business online and helped us grow our brand visibility. Truly a one-stop solution for all digital needs."
 }
];

/* ---- Blog. body blocks: ['p',text] ['h2',text] ['quote',text,author] ['ul',[items]] ---- */
var BLOG=[
 {
  "slug": "paid-ads-vs-organic-growth-whats-best-for-your-business",
  "title": "Paid Ads vs Organic Growth: What’s Best for Your Business?",
  "date": "October 31, 2025",
  "read": "2 min read",
  "icon": "megaphone",
  "cats": [
   "Blogs",
   "Marketing"
  ],
  "tags": [
   "Digital Marketing",
   "Organic Growth",
   "Paid Ads",
   "SEO"
  ],
  "excerpt": "In the world of digital marketing, businesses often face a key decision: Should you invest in paid advertising for quick results or focus on organic growth for long-term sustainability?",
  "body": [
   [
    "p",
    "In the world of digital marketing, businesses often face a key decision: Should you invest in paid advertising for quick results or focus on organic growth for long-term sustainability? Both strategies offer distinct benefits and challenges, and choosing the right path depends on your goals, budget, and timeline. Understanding how each works can help you craft a more balanced and effective marketing strategy."
   ],
   [
    "p",
    "Paid advertising, like Google Ads or Facebook campaigns, offers instant visibility and targeted reach. It’s ideal for product launches, promotions, and building awareness quickly. On the other hand, organic growth—achieved through SEO, content marketing, and social engagement—builds authority and trust over time. While it takes longer, the traffic it brings is often more sustainable and cost-effective in the long run."
   ],
   [
    "quote",
    "Advertising brings in customers, but organic growth builds a brand.",
    "Rand Fishkin"
   ],
   [
    "p",
    "Striking the right balance between paid and organic is crucial. Relying solely on ads can become expensive without lasting results, while organic efforts alone may take too long to gain traction—especially in competitive markets. The most successful businesses often blend both for maximum impact."
   ],
   [
    "h2",
    "Key Differences Between Paid Ads & Organic Growth"
   ],
   [
    "p",
    "Compare the strengths of each to choose what aligns best with your business needs."
   ],
   [
    "ul",
    [
     "Speed: Paid ads offer immediate traffic; organic takes time",
     "Cost: Paid campaigns require ongoing budget; organic is time-intensive",
     "Longevity: Organic content builds value over time; ads stop when the budget ends",
     "Trust: Users often trust organic results more than paid ones",
     "Control: Ads allow precise targeting; organic focuses on audience relevance"
    ]
   ],
   [
    "p",
    "While each approach has its own merits, the smartest strategies often combine the two. Use paid ads to drive quick wins while nurturing long-term growth with organic methods. That way, your business benefits from both short-term performance and lasting brand equity."
   ]
  ]
 },
 {
  "slug": "10-proven-seo-strategies-to-boost-your-website-traffic-in-2025",
  "title": "10 Proven SEO Strategies to Boost Your Website Traffic in 2025",
  "date": "October 31, 2025",
  "read": "1 min read",
  "icon": "search",
  "cats": [
   "Blogs",
   "Marketing",
   "SEO"
  ],
  "tags": [
   "Search engine optimization (SEO)",
   "SEO",
   "Website Traffic"
  ],
  "excerpt": "Search engine optimization (SEO) has evolved dramatically over the years, and in 2025, it’s more sophisticated—and necessary—than ever before.",
  "body": [
   [
    "p",
    "Search engine optimization (SEO) has evolved dramatically over the years, and in 2025, it’s more sophisticated—and necessary—than ever before. With search engines prioritizing user experience, content quality, and technical performance, businesses must adapt to stay ahead of the competition. Whether you’re running a blog, an e-commerce store, or a corporate website, applying the right SEO techniques can skyrocket your traffic and visibility."
   ],
   [
    "p",
    "Many website owners struggle to get noticed because they rely on outdated SEO practices. In 2025, success depends on mastering current trends like voice search optimization, AI-driven content, and semantic search. When implemented correctly, modern SEO not only increases your website traffic but also attracts users who are genuinely interested in what you offer, leading to higher engagement and conversions."
   ],
   [
    "quote",
    "Good SEO is about the customer, not just the algorithm.",
    "Seth Godin"
   ],
   [
    "p",
    "It’s not just about ranking on page one anymore—it’s about delivering value, earning trust, and providing seamless online experiences. By investing in SEO as a long-term strategy, businesses build authority in their niche and create content that works for them 24/7."
   ],
   [
    "h2",
    "Top SEO Tactics You Can’t Ignore in 2025"
   ],
   [
    "p",
    "Stay ahead of the curve with these must-use strategies for driving consistent, high-quality traffic to your website."
   ],
   [
    "ul",
    [
     "Optimize for voice and mobile-first indexing",
     "Focus on high-quality, intent-driven content",
     "Use structured data (schema) for rich results",
     "Improve Core Web Vitals and page speed",
     "Build authoritative, relevant backlinks"
    ]
   ],
   [
    "p",
    "Incorporating these strategies into your SEO game plan ensures your website not only ranks well but also provides a meaningful experience to users. SEO in 2025 is no longer about tricks—it’s about authenticity, usability, and strategy."
   ]
  ]
 },
 {
  "slug": "how-digital-marketing-transforms-small-businesses-into-big-brands",
  "title": "How Digital Marketing Transforms Small Businesses into Big Brands",
  "date": "October 31, 2025",
  "read": "1 min read",
  "icon": "globe",
  "cats": [
   "Blogs",
   "Marketing"
  ],
  "tags": [
   "brand",
   "Business",
   "Digital Marketing",
   "technology"
  ],
  "excerpt": "In today’s digital-first world, small businesses no longer need massive budgets or global offices to make a mark.",
  "body": [
   [
    "p",
    "In today’s digital-first world, small businesses no longer need massive budgets or global offices to make a mark. With the power of digital marketing, even startups and local ventures can compete with major players and reach audiences that were once out of reach. Whether it’s through targeted ads, engaging content, or social media presence, digital tools are reshaping how brands grow and connect."
   ],
   [
    "p",
    "Digital marketing offers a level playing field for businesses of all sizes. Through cost-effective strategies like SEO, PPC, and email marketing, small businesses can drive measurable results, build customer loyalty, and enhance brand visibility. It’s not just about promoting products—it’s about telling your brand story in a way that resonates with the modern consumer."
   ],
   [
    "quote",
    "Ignoring online marketing is like opening a business but not telling anyone.",
    "KB Marketing Agency"
   ],
   [
    "p",
    "Thanks to its data-driven nature, digital marketing allows businesses to measure performance, tweak campaigns in real time, and focus only on what delivers results. Unlike traditional marketing methods, every click, impression, and interaction can be tracked, making marketing efforts smarter, not harder."
   ],
   [
    "h2",
    "Why Digital Marketing Is a Game Changer"
   ],
   [
    "p",
    "Small businesses can tap into growth by leveraging the digital space smartly and creatively. Here’s how:"
   ],
   [
    "ul",
    [
     "Builds brand awareness in competitive markets",
     "Reaches a wider, more targeted audience",
     "Converts visitors into loyal customers",
     "Improves engagement across multiple platforms",
     "Tracks real-time performance and ROI"
    ]
   ],
   [
    "p",
    "Digital marketing is not just about technology—it’s about connection. It allows businesses to speak directly to their audience, understand their needs, and offer solutions that matter. It’s this personal, strategic approach that helps transform small ventures into trusted, recognizable brands."
   ]
  ]
 }
];

/* ---- Page titles + descriptions (used for SEO tags) ---- */
var META={
  home:{p:'/',t:'Web, Software & Digital Solutions | Re Create Technologies',d:'Web design, software development, IT consultancy, digital marketing, SEO, hosting, CCTV and printing for growing businesses. Serving clients in the USA, Oman and Pakistan since 2013.'},
  about:{p:'/about/',t:'About Re Create Technologies | IT Solutions & Digital Services',d:'Learn how Re Create Technologies helps businesses turn operational challenges into practical digital systems, dependable infrastructure and stronger customer experiences.'},
  services:{p:'/services/',t:'IT Services & Digital Solutions | Re Create Technologies',d:'Web design and development, software, IT consultancy, digital marketing, graphic design, SEO, domain and hosting, CCTV installation and stationery printing from one team.'},
  products:{p:'/products/',t:'Business Management Software | Re Create Technologies',d:'Explore management software for restaurants, salons, snooker clubs, factories, couriers, rentals and guest houses, tailored to your business.'},
  portfolio:{p:'/portfolio/',t:'Our Work & Success Stories | Re Create Technologies',d:'See websites, online stores and business systems Re Create Technologies has delivered for clients in Pakistan, the Middle East and Europe.'},
  certificates:{p:'/certificates/',t:'Certificates & Credentials | Re Create Technologies',d:'View the certificates and credentials that support the quality of work delivered by Re Create Technologies.'},

pricing:{
  p:'/pricing/',
  t:'Pricing & Packages | Re Create Technologies',
  d:'Explore pricing packages for logo design, web development, ecommerce, SEO, social media, CCTV, hosting and printing from Re Create Technologies.'
},

blogs:{p:'/blogs/',t:'Blog: Latest Insights & Innovations | Re Create Technologies',d:'Practical articles on digital marketing, SEO and business growth from the Re Create Technologies team.'},
  contact:{p:'/contact/',t:'Contact Re Create Technologies | Software & Digital Solutions',d:'Contact Re Create Technologies by phone, WhatsApp or email, or send a project enquiry for software, POS, web, security, printing or hosting.'}
};

/* ---- WhatsApp chat widget options: [button label, message that opens in WhatsApp] ---- */
var WA_OPTS=[
  ['Get a free quote','Hello Re Create Technologies, I would like a free quote for my project.'],
  ['Web design & development','Hello Re Create Technologies, I am interested in web design and development.'],
  ['Software development','Hello Re Create Technologies, I would like to discuss custom software development.'],
  ['Digital marketing & SEO','Hello Re Create Technologies, I would like to know more about digital marketing and SEO.'],
  ['CCTV installation','Hello Re Create Technologies, I need a CCTV installation quote.'],
  ['Something else','Hello Re Create Technologies, I have a question.']
];

/* ---- Icons (24x24 stroke icons) ---- */
var ICONS={
  code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  bag:'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  calc:'<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M8 14h.01M12 14h.01M8 18h.01M12 18h.01"/>',
  camera:'<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  printer:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
  wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  radio:'<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
  cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  arrow:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  award:'<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  chat:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>',
  target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  factory:'<path d="M2 20V9l6 4V9l6 4V4h4v16z"/><line x1="2" y1="20" x2="22" y2="20"/>',
  truck:'<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  filetext:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  package:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
  home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
  monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  megaphone:'<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
  gear:"<circle cx='12' cy='12' r='3'/><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'/>",
  refresh:'<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
  facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram:'<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',
  x:'<path d="M4 4l16 16M20 4L4 20"/>',
  chevl:'<polyline points="15 18 9 12 15 6"/>',
  chevr:'<polyline points="9 18 15 12 9 6"/>',
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  chevd:'<polyline points="6 9 12 15 18 9"/>',
  sun:'<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
};
