import { ServiceItem, PortfolioProject, BranchLocation } from '../types';

export const COMPANY_INFO = {
  name: "Deekshith Infra Solutions India Private Limited",
  shortName: "DISIPL",
  tagline: "Bridging Mass Media Outreach with Precision Civil Infrastructure",
  established: "2014",
  cin: "U45200KA2014PTC076892",
  gstin: "29AABCD1234F1Z8",
  officialEmail: "infodisipl@gmail.com",
  helplinePhone: "+91 70226 62105",
  rawPhone: "7022662105",
  secondaryPhone: "+91 821 241 8970",
  workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
  headquarters: {
    title: "Bengaluru Corporate HQ",
    address: "176, 2nd Main Road, 4th Cross Rd, 13th Block, 2nd Stage, Nagarbhavi, Bengaluru, Karnataka 560072",
    city: "Bengaluru",
    pincode: "560072"
  },
  mysuruBranch: {
    title: "Mysuru Regional Hub",
    address: "No. 42/B, Industrial Suburb 2nd Stage, Hunsur Main Road, Mysuru, Karnataka 570018",
    city: "Mysuru",
    pincode: "570018"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "transit-media",
    division: "media",
    category: "transit-media",
    title: "Outdoor Moving Media & Transit Advertising",
    tagline: "State-Wide Moving Billboards via KSRTC & BMTC Fleet Networks",
    summary: "High-density transit branding commanding arterial commuter corridors, city expressways, and inter-district trunk routes across Karnataka.",
    paragraphs: [
      "Deekshith Infra Solutions manages premier transit media rights across Karnataka State Road Transport Corporation (KSRTC) and Bengaluru Metropolitan Transport Corporation (BMTC) fleets. Our moving media formats transform heavy public commuter vehicles into unskippable, eye-level cinematic billboards that travel up to 280 kilometers daily across high-congestion metropolitan nodes and tier-2/3 taluk arteries. From comprehensive full-body vinyl wrapping to aerodynamic side-streamers and illuminated rear-glass formats, we deliver omnipresent audience touchpoints with guaranteed visual frequency.",
      "As a benchmark execution of our transit capabilities, we conceptualized and deployed statewide campaigns for the Karnataka Milk Federation (KMF Products - Nandini), outfitting over 320 buses with high-tack cast vinyl wraps celebrating dairy purity and farmer pride. Our turnkey campaign operations oversee creative formatting, depot-level night installations, certified RTO approvals, and scheduled weekly fleet inspections to guarantee pristine display conditions under all weather environments."
    ],
    keyHighlights: [
      "Exclusive KSRTC Inter-District and BMTC City Volvo & Non-AC Fleet Access",
      "Premier Client Case: High-impact full-body wraps for KMF Nandini Products",
      "Over 4.2 Million Daily Commuter & Pedestrian Visual Impressions",
      "Premium 3M™ Cast Vinyl with UV-Resistant Anti-Scratch Lamination",
      "Depot-Level Nightly Maintenance & Regular Photographic Compliance Audits"
    ],
    specs: [
      { label: "Fleet Formats", value: "Full Bus Wrap, Side King/Queen Panels, Full Back Glass, Inside Grab Handles" },
      { label: "Network Scope", value: "BMTC Bengaluru Metro, KSRTC Karnataka State, NWKRTC & KKRTC" },
      { label: "Material Durability", value: "3M Cast Film, 1200 DPI Solvent/Latex Print, 3-Year Anti-Fade Guarantee" },
      { label: "Avg. Daily Impressions", value: "45,000+ per bus / day" }
    ],
    clientShowcase: "KMF Products (Nandini Pure Ghee, GoodLife Milk, Butter & Paneer Statewide Campaign)",
    iconName: "Bus",
    badge: "Flagship Media Division"
  },
  {
    id: "indoor-signage",
    division: "media",
    category: "indoor-signage",
    title: "Indoor Advertising & Architectural Signages",
    tagline: "Precision Engineered Storefront, Corporate & Retail Visual Branding",
    summary: "From illuminated 3D ACP channel letters to hypermarket visual merchandising and corporate lobby fascias, crafted with architectural precision.",
    paragraphs: [
      "Our indoor advertising and signage wing engineers high-impact visual fixtures for modern retail chains, corporate headquarters, banking hubs, and transit terminals. We combine industrial fabrication with sophisticated graphic aesthetics to produce illuminated LED channel letterings, ACP composite wall claddings, edge-lit acrylic signboards, and high-definition internal wayfinding systems that harmonize seamlessly with architectural interiors.",
      "Every signage assembly is fabricated in-house utilizing precision CNC routers, automated laser cutters, and high-lumen IP67 LED modules. We ensure strict structural safety compliance, fire-retardant wiring conduits, and energy-efficient power supplies, delivering durable corporate presence that leaves lasting customer impressions across retail environments and institutional lobbies."
    ],
    keyHighlights: [
      "Architectural Grade ACP Cladding & CNC-Fabricated 3D LED Signages",
      "In-Store Retail Fixtures, Visual Merchandising & POS Displays",
      "Slimline Ultra-Bright Backlit Fabric Lightboxes for Corporate Lobbies",
      "Transit Terminal & Mall Floor Standing Digital Interactive Kiosks",
      "Turnkey Site Survey, Structural Rigging, Electrical Load Testing & Handover"
    ],
    specs: [
      { label: "Structural Framing", value: "MS Tubular Sections, Marine Grade Aluminum & Acrylic Sheets" },
      { label: "Illumination Source", value: "Samsung / OSRAM High-Efficiency LED Modules (CRI > 85)" },
      { label: "Weather Resistance", value: "IP65 / IP67 Rated Enclosures with Thermal Heat Sinks" },
      { label: "Warranty Coverage", value: "3 Years Comprehensive On-Site Electrical & Panel Warranty" }
    ],
    clientShowcase: "Retail Showrooms, Banking Franchises & Regional Corporate Offices",
    iconName: "Maximize2",
    badge: "Structural Signage"
  },
  {
    id: "digital-marketing",
    division: "media",
    category: "digital-marketing",
    title: "Digital Marketing & Performance Growth",
    tagline: "Multi-Channel B2B Acquisition, Regional SEO & Performance Campaigns",
    summary: "Bridging the gap between physical outdoor brand awareness and digital high-conversion audience funnels through hyper-localized marketing.",
    paragraphs: [
      "In a hyper-connected marketplace, outdoor transit visibility reaches its peak velocity when unified with responsive digital targeting. Deekshith Infra Solutions' digital marketing wing builds targeted online acquisition engines for commercial enterprises, developers, and consumer brands looking to dominate regional Kannada and pan-India digital channels.",
      "We run data-driven Google Ads search and display networks, hyper-localized Meta & LinkedIn social campaigns, and local search engine optimization (SEO) that places your services at the top of organic search results. By synchronizing digital ads with active outdoor transit corridors, we build high-recall omnichannel touchpoints that drive qualified B2B leads and verifiable conversions."
    ],
    keyHighlights: [
      "High-Intent Google Ads (Search, Display, Performance Max, Maps Local)",
      "B2B LinkedIn Outreach & Regional Social Media Marketing Campaigns",
      "Enterprise Technical SEO & Google Business Profile Local Dominance",
      "Conversion Rate Optimization (CRO) & Interactive Landing Page Design",
      "Transparent Real-Time KPI Dashboards with Full ROAS Attribution"
    ],
    specs: [
      { label: "Platforms", value: "Google Marketing Platform, Meta Business Suite, LinkedIn Campaign Manager" },
      { label: "Targeting Modality", value: "Geo-Fenced Transit Routes, B2B Decision Makers, Demographics" },
      { label: "Reporting Cadence", value: "Weekly Sprint Reviews + Live Automated Cloud Dashboard" },
      { label: "Conversion Lift", value: "Average 3.4x ROAS on Targeted Commercial Campaigns" }
    ],
    clientShowcase: "Real Estate Developers, Manufacturing Exporters & FMCG Brands",
    iconName: "TrendingUp",
    badge: "Omnichannel Digital"
  },
  {
    id: "civil-construction",
    division: "civil",
    category: "civil-construction",
    title: "Civil Construction & Turnkey Residential Works",
    tagline: "Contract-Based Home Construction & End-to-End Architectural Builds",
    summary: "Precision engineering, soil-to-terrace turnkey residential execution, villa developments, and custom multi-storey family residences.",
    paragraphs: [
      "Deekshith Infra Solutions' Civil Construction division brings rigorous industrial engineering standards to residential home building on a transparent contract basis. Whether building bespoke luxury villas, modern duplex residences, or multi-family urban homes across Bengaluru and Mysuru, we offer full-cycle turnkey management that covers soil testing, structural blueprints, municipal sanction clearances, foundation engineering, super-structure brickwork, and luxury interior handovers.",
      "We operate under a transparent milestone-based billing framework backed by certified material testing. Every square foot is reinforced with Fe550D TMT steel and Grade-53 cement from accredited manufacturers, verified through rigorous cube compressive strength tests. Homeowners receive dedicated site engineers, weekly photographic progress dossiers, and a firm contractual delivery date with zero hidden cost escalation."
    ],
    keyHighlights: [
      "Turnkey Contract-Based Residential Home & Luxury Villa Construction",
      "Architectural Blueprinting, 3D Elevation Modeling & BBMP/MUDA Sanctions",
      "Strict Material Verification: Fe550D TMT Steel, Grade-53 ACC/Ultratech Cement",
      "Milestone-Linked Escrow Payment Structure with Zero Cost Overruns",
      "10-Year Comprehensive Structural Warranty with Post-Handover Care"
    ],
    specs: [
      { label: "Contract Models", value: "Turnkey With Material (Standard / Premium / Luxury Packages)" },
      { label: "Quality Checks", value: "48-Point Standard Engineering Quality Check at Every Slab Level" },
      { label: "Avg. Project Timeline", value: "6 to 12 Months for 2,400 – 6,000 sq.ft. Residential Builds" },
      { label: "Compliance", value: "National Building Code (NBC) 2016 & IS 456:2000 Earthquake Resilient" }
    ],
    clientShowcase: "Private Villa Owners in Nagarbhavi, Vijayanagar, JP Nagar & Mysuru",
    iconName: "Home",
    badge: "Turnkey Contracting"
  },
  {
    id: "public-works",
    division: "civil",
    category: "public-works",
    title: "Government Public Works & Civic Infrastructure",
    tagline: "Municipal Roads, Civic Drainage, Public Utilities & Institutional Builds",
    summary: "Contractual execution of government tenders, civic infrastructure developments, arterial road laying, and public community facilities.",
    paragraphs: [
      "Our Public Works division acts as an accredited contractor for municipal corporations, urban development authorities, and public sector undertakings across Karnataka. We bid, engineer, and execute public infrastructural contracts ranging from asphalt highway resurfacing and concrete arterial roads to heavy stormwater drainage channels, civic community complexes, and government institutional buildings.",
      "Equipped with modern earthmoving fleets, asphalt pavers, batching plants, and qualified survey teams utilizing Total Station technology, we deliver public utility infrastructure that withstands rigorous vehicular tonnage and monsoon runoff. Our project execution strictly adheres to Karnataka PWD, CPWD, and MoRTH technical specifications, backed by ISO-aligned environmental and occupational health safety protocols."
    ],
    keyHighlights: [
      "Government Tender Execution with Karnataka PWD, BBMP & MUDA Standards",
      "Heavy Asphalt & Rigid Pavement Concrete Road Construction",
      "RCC Stormwater Drain Networks, Box Culverts & Pedestrian Grade Upgrades",
      "Civic Buildings, Government Institutional Offices & Transit Shelter Terminals",
      "Full Material Traceability, Soil Compaction Certifications & Tender Handover"
    ],
    specs: [
      { label: "PWD Registration", value: "Class-I Accredited Engineering Contractor Framework" },
      { label: "Equipment Fleet", value: "Hydraulic Excavators, Sensor Pavers, Tandem Rollers, Transit Mixers" },
      { label: "Technical Benchmarks", value: "MoRTH Specification for Road & Bridge Works, IRC Standards" },
      { label: "Testing Protocols", value: "Core Cutter Density, Rebound Hammer, Slump & Bituminous Core Analysis" }
    ],
    clientShowcase: "Urban Development Authorities, Municipal Corporations & PWD Divisions",
    iconName: "Building2",
    badge: "Public Works & Civic"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "kmf-nandini-statewide",
    title: "KMF Nandini Statewide Fleet Transit Campaign",
    client: "Karnataka Milk Federation (KMF)",
    division: "media",
    category: "transit-media",
    categoryLabel: "Transit & Moving Media",
    location: "Pan-Karnataka (KSRTC & BMTC Fleets)",
    year: "2024 - 2025",
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Large-scale full-body fleet wrap campaign across 320+ KSRTC Express and BMTC Volvo buses promoting KMF's flagship Nandini Ghee, GoodLife Milk, and Paneer range.",
    challenge: "Executing synchronized multi-depot night installations across 14 transport divisions within a strict 18-day pre-festival window while meeting rigorous transport board aerodynamic and safety criteria.",
    solution: "Engineered segmented modular 3M high-tack cast vinyl layouts customized for distinct bus chassis geometries (Ashok Leyland & Tata Motors), deploying roving rapid-installation teams equipped with industrial heat-application rigs.",
    results: [
      "Over 42 Million visual impressions across 31 Karnataka districts over a 6-month campaign cycle",
      "99.4% fleet uptime maintained across all monitored depots without film peeling or bubbling",
      "Recognized by regional marketing boards for creative visual impact and message retention"
    ],
    specifications: [
      { label: "Buses Deployed", value: "320+ Units (180 KSRTC / 140 BMTC)" },
      { label: "Media Surface", value: "Full-Body Wraps + Rear Reflective Strips" },
      { label: "Route Coverage", value: "Bengaluru City & Inter-City State Highways" },
      { label: "Material Standard", value: "3M IJ180mC Cast Film with 8518 Gloss Overlaminate" }
    ],
    featured: true
  },
  {
    id: "bmtc-volvo-metropolitan",
    title: "Metropolitan Corridor Transit Wraps",
    client: "National Tech & Retail Brands",
    division: "media",
    category: "transit-media",
    categoryLabel: "Transit & Moving Media",
    location: "Bengaluru IT Corridors (Whitefield, Electronic City, ORR)",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "High-density fleet advertising on BMTC Vajra and Vayu Vajra Volvo airport shuttles capturing tech professionals and executive travelers.",
    challenge: "Targeting high-income demographic clusters traversing Outer Ring Road and Kempegowda International Airport transit corridors with high aesthetic finesse.",
    solution: "Utilized perforated window one-way vision media coupled with matte satin body wraps providing panoramic window sightlines for passengers while offering seamless graphic continuity from the outside.",
    results: [
      "85+ Volvo buses deployed on peak Tech Park shuttle loops",
      "Estimated 1.8M daily commuter exposures at average dwell times exceeding 4 minutes at traffic junctions",
      "Zero passenger visibility impairment verified and certified by BMTC engineering"
    ],
    specifications: [
      { label: "Fleet Type", value: "BMTC Volvo B9R / Low-Floor AC" },
      { label: "Print Process", value: "7-Color Eco-Solvent High Gamut" },
      { label: "Key Corridors", value: "Hebbal, Bellandur, Silk Board, Whitefield" }
    ],
    featured: true
  },
  {
    id: "nagarbhavi-luxury-residence",
    title: "Contemporary 4BHK Turnkey Villa Residence",
    client: "Private Homeowner",
    division: "civil",
    category: "civil-construction",
    categoryLabel: "Civil Construction",
    location: "Nagarbhavi 2nd Stage, Bengaluru",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Turnkey contract construction of an ultra-modern 4,800 sq.ft. private villa featuring double-height living areas, cantilevered balconies, and solar-integrated green roofing.",
    challenge: "Constructing on a 40x60 corner plot with sloping geological strata while preserving nearby heritage trees and meeting stringent BBMP setbacks.",
    solution: "Engineered deep RCC pile foundations anchored to hard rock bed, paired with post-tensioned beam cantilevers to create seamless open-plan column-free interior volumes.",
    results: [
      "Completed in 9.5 months — 3 weeks ahead of contractual schedule",
      "100% adherence to zero-cost escalation agreement",
      "Awarded local residential architecture commendation for energy-efficient passive cooling"
    ],
    specifications: [
      { label: "Built-up Area", value: "4,800 sq.ft. (G + 2 Floors)" },
      { label: "Structural Grade", value: "Fe550D TMT, M25 Ready-Mix Concrete" },
      { label: "Finishes", value: "Italian Botticino Marble, Teak Wood Fenestrations, Saint-Gobain DGU Glass" },
      { label: "Warranty", value: "10-Year Structural + 5-Year Waterproofing Guarantee" }
    ],
    featured: true
  },
  {
    id: "mysuru-heritage-duplex",
    title: "Modern Duplex Residence Contract",
    client: "Private Client",
    division: "civil",
    category: "civil-construction",
    categoryLabel: "Civil Construction",
    location: "Vijayanagar 2nd Stage, Mysuru",
    year: "2023 - 2024",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Architect-designed contract build blending traditional Mysuru courtyard aesthetics with contemporary minimalist concrete and exposed clay brickwork.",
    challenge: "Integrating custom internal rain-harvesting atrium with thermal insulation for hot summer micro-climates in Mysuru.",
    solution: "Utilized cavity wall construction with aerated terracotta blocks, insulated roof slabs with lime-mortar terracing, and automated greywater recycling.",
    results: [
      "3,600 sq.ft. turnkey handover within 8 months",
      "Energy consumption reduced by 34% compared to standard residential builds",
      "Full compliance with MUDA residential zoning bylaws"
    ],
    specifications: [
      { label: "Plot Dimensions", value: "50 x 80 ft (3,600 sq.ft. Built-up)" },
      { label: "Masonry", value: "Wire-cut Terracotta Bricks & RCC Frame" },
      { label: "Waterproofing", value: "Polyurethane Membrane across all wet slabs" }
    ],
    featured: false
  },
  {
    id: "civic-arterial-road-drainage",
    title: "Municipal Arterial Corridor & RCC Storm Drain Project",
    client: "Public Works / Urban Development Authority",
    division: "civil",
    category: "public-works",
    categoryLabel: "Public Works & Infrastructure",
    location: "Bengaluru West Metropolitan Suburb",
    year: "2023 - 2024",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Engineering and construction of 4.8 km heavy-duty asphalt dual carriageway including reinforced concrete box stormwater drain channels and paver-block pedestrian footpaths.",
    challenge: "Executing heavy earth excavation, utility ducting, and bituminous paving on a functioning commuter corridor without halting peak urban traffic flows.",
    solution: "Segmented night-shift civil operations with pre-cast RCC drain slabs fabricated off-site, accompanied by automated asphalt sensor pavers for uniform bituminous density.",
    results: [
      "Handed over with 100% core test compliance under Karnataka PWD scrutiny",
      "Eliminated recurrent monsoon waterlogging across 3 low-lying residential layouts",
      "Zero contractual defects registered over 18-month defect liability period"
    ],
    specifications: [
      { label: "Corridor Length", value: "4.8 Kilometers (Dual 2-Lane)" },
      { label: "Drain Specifications", value: "2.4m x 1.8m RCC Box Section with Heavy Grating" },
      { label: "Pavement Structure", value: "GSB + WMM + 50mm BM + 40mm BC Asphalt Layer" },
      { label: "Quality Certification", value: "PWD Quality Control Lab Cleared" }
    ],
    featured: true
  },
  {
    id: "retail-hub-signage-network",
    title: "Flagship Corporate & Retail Architectural Signage Network",
    client: "Regional Commercial Conglomerate",
    division: "media",
    category: "indoor-signage",
    categoryLabel: "Indoor & Signages",
    location: "Bengaluru & Mysuru Commercial Centers",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "End-to-end design, precision structural fabrication, and illuminated installation of external 3D ACP letterings, entrance pylons, and internal wayfinding signs across 18 branch locations.",
    challenge: "Maintaining brand color consistency across varied ambient lighting conditions and architectural facades from heritage properties to glass curtain walls.",
    solution: "Used computer-matched acrylics with custom Kelvin-calibrated LED modules, encased in laser-cut brushed aluminum bodies with IP67 sealed transformers.",
    results: [
      "Installed across 18 centers within 24 calendar days",
      "Zero luminance degradation over 12 months continuous 24/7 duty",
      "Energy consumption cut by 45% utilizing smart photocell controllers"
    ],
    specifications: [
      { label: "Signage Typology", value: "3D Frontlit Channel Letters + ACP Pylon Signs" },
      { label: "Material Composition", value: "Aludecor 4mm PVDF ACP + Cast Acrylic 3mm" },
      { label: "Lighting Tech", value: "Samsung 2835 High Lumen Modules with Mean Well Drivers" }
    ],
    featured: false
  }
];

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    id: "bengaluru-hq",
    name: "Bengaluru Corporate Headquarters",
    type: "Headquarters",
    address: "176, 2nd Main Road, 4th Cross Rd, 13th Block, 2nd Stage, Nagarbhavi",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560072",
    phone: "+91 70226 62105",
    email: "infodisipl@gmail.com",
    hours: "Monday – Saturday: 9:00 AM – 6:30 PM",
    lat: 12.9642,
    lng: 77.5098,
    description: "Our primary corporate registered headquarters housing the executive board, media planning hub, civil structural engineering team, and tender contracting operations.",
    servicesCovered: [
      "Statewide Transit Media (KSRTC & BMTC) Central Dispatch",
      "Turnkey Home Construction Design Studio & Material Sample Lab",
      "Public Works Tender Cell & Structural Engineering Division",
      "Corporate Accounts & Client Relations"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.973950247738!2d77.507611!3d12.964200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c3c78676d1b%3A0x6b63d917830f3684!2sNagarbhavi%202nd%20Stage%2C%20Bengaluru%2C%20Karnataka%20560072!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
  },
  {
    id: "mysuru-hub",
    name: "Mysuru Regional Operations Hub",
    type: "Branch Office",
    address: "No. 42/B, Industrial Suburb 2nd Stage, Hunsur Main Road",
    city: "Mysuru",
    state: "Karnataka",
    pincode: "570018",
    phone: "+91 821 241 8970",
    email: "infodisipl@gmail.com",
    hours: "Monday – Saturday: 9:00 AM – 6:00 PM",
    lat: 12.3168,
    lng: 76.6135,
    description: "Regional operating base powering localized transit fleet depot operations for Southern Karnataka, residential site supervision teams, and civic project execution.",
    servicesCovered: [
      "Mysuru City & Regional Transit Fleet Coordination (KSRTC Mysuru Rural & Urban)",
      "Residential Civil Contracting & Site Engineering for Mysuru & Mandya",
      "Regional Signage Rigging & Emergency Maintenance",
      "Client Consultation for Southern Karnataka Public Works"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.123456789!2d76.6135!3d12.3168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2db428efb0!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000001!5m2!1sen!2sin"
  }
];

export const COMPANY_STATS = [
  { label: "Moving Transit Wraps Deployed", value: "1,850+", description: "Across KSRTC & BMTC state fleets" },
  { label: "Civil Projects & Homes Delivered", value: "54+", description: "Residential & public works contracts" },
  { label: "Districts Covered in Karnataka", value: "31", description: "Statewide media & construction presence" },
  { label: "Daily Public Visual Impressions", value: "4.2M+", description: "High-density commuter eye-level views" },
  { label: "Years of Dual Engineering Discipline", value: "12+", description: "Established institutional credibility" }
];

export const CLIENT_PARTNERS = [
  { name: "KMF Nandini Products", role: "Statewide Fleet Branding Partner", tag: "Dairy & FMCG" },
  { name: "KSRTC", role: "Karnataka State Road Transport", tag: "Transit Network" },
  { name: "BMTC", role: "Bengaluru Metropolitan Transport", tag: "Metropolitan Transit" },
  { name: "Public Works Dept (PWD)", role: "Civic Contracting Authority", tag: "Infrastructure" },
  { name: "Urban Civic Authorities", role: "Roads & Stormwater Municipal Works", tag: "Government" },
  { name: "Private Villa Owners", role: "Turnkey Residential Contracting", tag: "Custom Homes" }
];

export const TESTIMONIALS = [
  {
    quote: "Deekshith Infra Solutions executed our multi-district KMF Nandini transit campaign across 320 buses with impeccable speed and film quality. Their night depot operations and adherence to safety norms made them an exceptional media partner.",
    author: "Senior Marketing Directorate",
    organization: "Regional Dairy Cooperative Network / KMF",
    division: "Media & Advertising"
  },
  {
    quote: "Building our dream 4BHK home in Nagarbhavi with DISIPL was completely stress-free. Every stage from structural concrete cube tests to Italian marble finishing was documented with transparent milestone invoices.",
    author: "R. Venkatesh Murthy",
    organization: "Residential Client, Nagarbhavi 2nd Stage",
    division: "Civil Construction"
  },
  {
    quote: "DISIPL's public works engineering team completed the 4.8km arterial road and stormwater drain channel before schedule. Their adherence to PWD laboratory material tests and traffic management was exemplary.",
    author: "Executive Engineer",
    organization: "Urban Civic Development Division",
    division: "Public Works"
  }
];
