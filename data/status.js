// Forever Platform — Verified Engine Telemetry, Game Status & Capture Manifest
// All frame times, RT triangle counts, and luminance metrics measured live on
// NVIDIA GeForce RTX 5070 Ti Laptop GPU (12 GB, Vulkan / wgpu 30.0.1, 1600x900).

export const SITE_META = {
  version: "V6 Unified (V7 Graphics & Live Parity In Flight)",
  binarySize: "31 MB",
  binarySha: "1b3c7e05",
  stack: "100% Pure Rust · Vulkan (wgpu 30.0.1) · Hardware Ray Queries",
  gpu: "NVIDIA GeForce RTX 5070 Ti Laptop GPU (12 GB)",
  driver: "Vulkan 1.4 / Driver 615.78.08",
  updatedAt: "November 24, 2026",
  v7Status: [
    {
      lane: "feat/v7-aaa-sky-water-rt",
      label: "V7 Sky, Water & RT Speculars",
      state: "active",
      detail: "Procedural volumetric clouds, animated PBR reflective water, Avengers Tower glass reflections, emissive glow lift."
    },
    {
      lane: "feat/v7-live-vfx-packs",
      label: "V7 Live-Server Parity & 4-Game VFX",
      state: "active",
      detail: "Auto-discovered default overrides in --source live, live PS1 doors, live MH/WAR retail levels, plus 4-game Enhanced combat VFX."
    }
  ]
};

export const BENCHMARKS = [
  {
    id: "enb",
    game: "Earth & Beyond",
    scene: "Earth Sector (High RT)",
    ms: 1.11,
    fps: 901,
    rtTris: 540549,
    skipped: 0,
    accent: "var(--accent-enb)",
    note: "2048×2048 Blue Marble Earth + Moon + Rayleigh halos + 712k displaced tris"
  },
  {
    id: "mh",
    game: "Marvel Heroes",
    scene: "AvengersTower_HUB (High RT)",
    ms: 1.83,
    fps: 546,
    rtTris: 1319074,
    skipped: 0,
    accent: "var(--accent-mh)",
    note: "Grounded DaylightLook::City (mean 96.9 vs Classic 95.0) + 56 sculpted .glb villains"
  },
  {
    id: "war",
    game: "Warhammer Online",
    scene: "The Blighted Isle (Zone 200)",
    ms: 5.49,
    fps: 182,
    rtTris: 2295062,
    skipped: 0,
    accent: "var(--accent-war)",
    note: "117 sculpted .glb champions (50 active override meshes, 327k override tris)"
  },
  {
    id: "ps1-vs",
    game: "PlanetSide 1",
    scene: "Vanu Sanctuary (Full Relief)",
    ms: 6.57,
    fps: 152,
    rtTris: 1701238,
    skipped: 0,
    accent: "var(--accent-ps1-vs)",
    note: "305 active PBR height/normal/ORM maps + 132 sculpted .glb exo-troopers + 3D trees"
  },
  {
    id: "ps1-solsar",
    game: "PlanetSide 1",
    scene: "Solsar Bastet (Full Relief)",
    ms: 7.64,
    fps: 131,
    rtTris: 2039935,
    skipped: 0,
    accent: "var(--accent-ps1)",
    note: "209 PBR maps + default 3D mesh displacement + zero indoor/door BLAS stutter"
  }
];

export const COMPARISONS = [
  {
    id: "ps1-solsar",
    game: "PlanetSide 1",
    tag: "Auraxis · Solsar Bastet",
    accent: "var(--accent-ps1)",
    classic: "assets/shots/ps1-solsar-classic.webp",
    enhanced: "assets/shots/ps1-solsar-enhanced.webp",
    classicAlt: "PlanetSide 1 Solsar Bastet courtyard rendered in original Classic mode with low-poly Terran Republic soldiers and flat terrain.",
    enhancedAlt: "PlanetSide 1 Solsar Bastet courtyard rendered in 2026 Enhanced mode with sculpted crimson exo-armor, glowing packs and rifles, lush 3D grass, and hardware ray-traced shadows.",
    stats: ["7.64 ms (131 FPS)", "2.04M RT Tris", "132 .glb Troopers", "0 Skipped RT Meshes"],
    summary: "From 2003 flat brown terrain and blocky soldiers to 6,752-triangle sculpted TR exo-armor with emissive jump-packs, individual-blade UE5 meadow grass, chamfered dark bunker armor, glowing spawn tubes, and crisp hardware ray-traced shadows."
  },
  {
    id: "enb-earth",
    game: "Earth & Beyond",
    tag: "Sol System · Earth Sector",
    accent: "var(--accent-enb)",
    classic: "assets/shots/enb-earth-classic.webp",
    enhanced: "assets/shots/enb-earth-enhanced.webp",
    classicAlt: "Earth & Beyond Earth Sector in Classic mode showing pixelated 2002 planet textures and blocky atmospheric rim.",
    enhancedAlt: "Earth & Beyond Earth Sector in 2026 Enhanced mode showing 2048x2048 NASA Blue Marble Earth, smooth Rayleigh atmospheric glow, and metallic station plating.",
    stats: ["1.11 ms (901 FPS)", "540k RT Tris", "2048×2048 Earth/Moon", "Silky Rayleigh Halo"],
    summary: "Replaced pixelated 2002 planet textures and stepped 128×128 atmospheric rings with 2048×2048 NASA Blue Marble Earth & LRO Moon maps, silky Rayleigh limb halos, subtle night city lights, and 3D displaced metallic Earth Station hulls."
  },
  {
    id: "ps1-vs",
    game: "PlanetSide 1",
    tag: "Auraxis · Vanu Sanctuary",
    accent: "var(--accent-ps1-vs)",
    classic: "assets/shots/ps1-vs-classic.webp",
    enhanced: "assets/shots/ps1-vs-enhanced.webp",
    classicAlt: "PlanetSide 1 Vanu Sovereignty Sanctuary in Classic mode with original 2003 purple facility walls and low-poly troops.",
    enhancedAlt: "PlanetSide 1 Vanu Sovereignty Sanctuary in 2026 Enhanced mode with sculpted obsidian-violet Vanu exo-armor, glowing cyan visors, hex-beveled fortress cladding, and 3D conifer trees.",
    stats: ["6.57 ms (152 FPS)", "1.70M RT Tris", "305 PBR Materials", "3D .glb Auraxis Trees"],
    summary: "Full Vanu Sovereignty 2026 overhaul: obsidian-violet sculpted exo-armor with blazing cyan plasma spine cores, dark hex-beveled HART fortress plating, glowing tungsten blast doors, holographic terminals, and sculpted 3D conifer trees on the ridge."
  },
  {
    id: "war-isle",
    game: "Warhammer Online",
    tag: "Ulthuan · The Blighted Isle (Zone 200)",
    accent: "var(--accent-war)",
    classic: "assets/shots/war-isle-classic.webp",
    enhanced: "assets/shots/war-isle-enhanced.webp",
    classicAlt: "Warhammer Online The Blighted Isle in Classic mode showing basic original character stand-ins in the warcamp.",
    enhancedAlt: "Warhammer Online The Blighted Isle in 2026 Enhanced mode featuring sculpted 3D gothic armored champions, flowing crimson capes, metallic shields, and sunset RT shadows.",
    stats: ["5.49 ms (182 FPS)", "2.30M RT Tris", "117 Sculpted .glbs", "Real MYP Zone 200"],
    summary: "Real retail MYP stitched terrain (64 composed ground patches, 3,750 placed fixtures) paired with 117 animated sculpted 2026 .glb Warhammer champions & raiders across 9 classes and 12 poses."
  },
  {
    id: "mh-tower",
    game: "Marvel Heroes",
    tag: "Manhattan · Avengers Tower HUB",
    accent: "var(--accent-mh)",
    classic: "assets/shots/mh-tower-classic.webp",
    enhanced: "assets/shots/mh-tower-enhanced.webp",
    classicAlt: "Marvel Heroes Avengers Tower HUB in Classic UE3 mode with Hulk, Captain America, Storm, and Black Widow.",
    enhancedAlt: "Marvel Heroes Avengers Tower HUB in 2026 Enhanced mode with grounded AgX exposure, crisp ray-traced hero shadows, and glossy architectural glass.",
    stats: ["1.83 ms (546 FPS)", "1.32M RT Tris", "Mean Lum 96.9 vs 95.0", "Pointer ARPG Combat"],
    summary: "Real cooked Unreal Engine 3 level & hero costumes with grounded DaylightLook::City AgX tone mapping (matching Classic's rich shadow depth at p10 = 40.2 vs 41.0), crisp hardware RT shadows, authentic Diablo/MH pointer play, and 56 sculpted 2026 supervillains."
  }
];

export const GAMES = [
  {
    id: "ps1",
    name: "PlanetSide 1",
    era: "2003 · Sci-Fi MMOFPS",
    format: "Auraxis .lst / .gmf / .dds + OpenPS UDP",
    accent: "var(--accent-ps1)",
    status: "Playable Vertical Slice + Live Hook",
    heroShot: "assets/shots/ps1-solsar-enhanced.webp",
    metrics: [
      { label: "Engine & Rendering", pct: 92 },
      { label: "2026 Art & .glb Packs", pct: 88 },
      { label: "Controls & AI Fireteams", pct: 86 },
      { label: "Live Server & Full MMO Loop", pct: 48 }
    ],
    done: [
      "Real continents & facilities (Solsar, Vanu/NC/TR Sanctuaries, Hossin, Esamir, etc.) at 6.5–7.6 ms Enhanced + RT",
      "Zero indoor/door BLAS stutter, smooth sight-based indoor lighting, eye-centered camera pullback",
      "610 active PBR maps (walls, blast doors, terminals, spawn tubes, UE5 meadow grass) + 3D Auraxis trees",
      "132 sculpted 2026 Empire Exo-Armor .glb troopers (TR, NC, VS, Neutral × 33 standing/crouching/aiming poses)",
      "DIT v2 friendly 5-soldier squad + smart human-behavior opposing fireteams (cover, flanking, burst sharing, door opening)"
    ],
    next: [
      "V7: Volumetric sky/clouds, animated PBR water, glowing empire plasma tracers, live-server door rendering",
      "Base capture / CC hack timer + empire flip, functional Equipment Terminals (Agile/Rexo/MAX), vehicles & FPS HUD"
    ]
  },
  {
    id: "mh",
    name: "Marvel Heroes",
    era: "2013 · Superhero ARPG MMO",
    format: "Unreal Engine 3 .upk / .tfc + Banshee Realm",
    accent: "var(--accent-mh)",
    status: "Playable Vertical Slice + Live Hook",
    heroShot: "assets/shots/mh-midtown-arena.webp",
    metrics: [
      { label: "Engine & Rendering", pct: 90 },
      { label: "2026 Art & .glb Packs", pct: 55 },
      { label: "Authentic ARPG Controls & AI", pct: 88 },
      { label: "Live Server & Full ARPG Loop", pct: 42 }
    ],
    done: [
      "Real cooked UE3 levels (AvengersTower_HUB, Midtown Cosmic Arena, Asgard, Raft, SHIELD Training Room) at 1.83 ms High RT",
      "Authentic Diablo/MH pointer controls (LMB click/hold move & attack, Shift stand-still, cursor-aimed RMB + A/S/D/F, Space dash, V isometric/chase camera)",
      "Grounded DaylightLook::City exposure & contrast matching Classic shadow depth while adding hardware RT shadows",
      "56 sculpted 2026 Supervillain .glb models (thug, bruiser, gunner, boss × 14 poses) with coordinated street-crew tactics"
    ],
    next: [
      "V7: Live-server retail UE3 level loading, Avengers Tower glass mirror reflections, upgraded hero energy/slam VFX",
      "Distinct per-hero skill trees & hotbars, glowing loot drops, XP/leveling, Midtown boss events & ARPG globe HUD"
    ]
  },
  {
    id: "war",
    name: "Warhammer Online",
    era: "2008 · Realm vs. Realm MMORPG",
    format: "Mythic .myp / .nif / Terrain + ProjectWAR",
    accent: "var(--accent-war)",
    status: "Playable Vertical Slice + Live Hook",
    heroShot: "assets/shots/war-isle-enhanced.webp",
    metrics: [
      { label: "Engine & Rendering", pct: 88 },
      { label: "2026 Art & .glb Packs", pct: 74 },
      { label: "RvR Controls & Raider AI", pct: 80 },
      { label: "Live Server & Full RvR Loop", pct: 44 }
    ],
    done: [
      "Whole retail MYP zones (The Blighted Isle Zone 200: 64 stitched ground tiles, 3,750 placed fixtures, 2.30M RT tris at 5.49 ms)",
      "117 sculpted animated 2026 .glb champions & raiders (9 Warhammer kits × 12 poses: idle, stride 0..7, windup, strike, rally)",
      "Trade-based opposing Destruction warbands + friendly DIT warband + 1-button RvR rotation (R/F) + Legion Go gamepad"
    ],
    next: [
      "V7: Live-server retail MYP zone loading, volumetric clouds & reflective coastal water, weapon cleave & warcry VFX",
      "2026 PBR world/architecture textures, Battlefield Objectives, Keep door sieges & Keep Lords, career mechanics & HUD"
    ]
  },
  {
    id: "enb",
    name: "Earth & Beyond",
    era: "2002 · Space Sci-Fi MMORPG",
    format: "Client-314 W3D / MIX / Net-7 Charts + Banshee",
    accent: "var(--accent-enb)",
    status: "Playable Vertical Slice + Live Hook",
    heroShot: "assets/shots/enb-earth-enhanced.webp",
    metrics: [
      { label: "Engine & Rendering", pct: 94 },
      { label: "2026 Art & .glb Packs", pct: 72 },
      { label: "6-DOF Flight & Station Controls", pct: 84 },
      { label: "Live Server & Full Space Loop", pct: 52 }
    ],
    done: [
      "Real Net-7 charted retail sectors (Earth, stations, gates, buoys, asteroid belts) at 1.11 ms High RT",
      "2048×2048 NASA Blue Marble Earth & LRO Moon PBR remaster + silky 1024×1024 Rayleigh halos + solar corona + city lights",
      "Multi-room docked stations with relaxed standing pilot pose, 6-DOF flight, warp, mining beam, combat & gamepad controls"
    ],
    next: [
      "V7: Glowing engine thruster plumes, mining beam core sparks, warp tunnel streaks, auto-override live sector parity",
      "Multi-sector gate travel, station vendors/trade runs/missions, class skills (Cloak/Shield Recharge), cockpit HUD & radar"
    ]
  },
  {
    id: "tr",
    name: "Tabula Rasa",
    era: "2007 · Sci-Fi Action MMORPG",
    format: "Planned Game #5 · Game-Agnostic Module",
    accent: "var(--accent-amber)",
    status: "On The Roadmap",
    heroShot: "assets/shots/ps1-vs-enhanced.webp",
    metrics: [
      { label: "Shared Engine Readiness", pct: 90 },
      { label: "Client Asset Reader", pct: 0 },
      { label: "Combat & Logos Abilities", pct: 0 },
      { label: "Live Server Bridge", pct: 0 }
    ],
    done: [
      "Engine core (forever-core, forever-host, forever-assets, forever-render) is already completely game-agnostic",
      "Exact genre intersection of PS1 third-person cover gunplay + WAR/MH RPG abilities + DIT v2 squadmates"
    ],
    next: [
      "Wire native Tabula Rasa retail archive/level/character readers once V7 graphics & live parity land",
      "AFS squads vs. Bane drop-pod assaults under hardware Vulkan RT + instant F1 Classic ↔ Enhanced swap"
    ]
  }
];

export const SUBSYSTEMS = [
  { name: "Unified Multi-Game Rust Core", category: "core", score: 92, status: "Shipped (V6)", note: "One 31 MB pure-Rust binary runs 4 legacy MMO formats cleanly." },
  { name: "Vulkan Hardware Ray Tracing", category: "graphics", score: 90, status: "Shipped (V6)", note: "1.1–7.6 ms at 1600×900 across 2.3M RT tris, 0 skipped meshes." },
  { name: "Instant F1 Classic ↔ Enhanced Swap", category: "graphics", score: 96, status: "Shipped (V6)", note: "Zero-restart live swap of meshes, PBR maps, RT lighting & audio." },
  { name: "Drop-In .glb & PBR Override Pipeline", category: "assets", score: 88, status: "Shipped (V6)", note: "305+ .glb models & 790+ override textures live across 4 games." },
  { name: "Volumetric Sky, Water & Live VFX", category: "graphics", score: 78, status: "Building (V7)", note: "2 parallel Mythos 5.2 lanes verifying sky/water/glass & 4-game VFX." },
  { name: "Authentic Controls & Legion Go Gamepad", category: "gameplay", score: 86, status: "Shipped (V6)", note: "MH pointer ARPG, PS1 FPS/TPS, WAR 1-button RvR, E&B 6-DOF flight." },
  { name: "DIT v2 Squads & Smart Opposing AI", category: "gameplay", score: 84, status: "Shipped (V6)", note: "Cover-seeking, flanking, burst sharing, door opening & role tactics." },
  { name: "Live Server Bridges (--source live)", category: "live", score: 68, status: "Upgrading (V7)", note: "OpenPS, ProjectWAR, MH & E&B Banshee + auto-discovered overrides." },
  { name: "GPU Skeletal Skinning & Ragdolls", category: "graphics", score: 15, status: "Planned (V8)", note: "Replace discrete pose swaps with smooth glTF bone interpolation." },
  { name: "Interactive HUD & Full MMO Systems", category: "gameplay", score: 25, status: "Planned (V8+)", note: "Hotbars, health/spirit globes, inventory, base hacking, loot & quests." }
];

export const TIMELINE = [
  {
    ver: "V1–V4",
    date: "Nov 21–22",
    state: "shipped",
    title: "Four Independent Rust Clients & Live Hooks",
    summary: "Built native retail asset readers for E&B, PlanetSide 1, Warhammer Online, and Marvel Heroes, proved Vulkan wgpu 30 rendering, and connected initial Banshee/OpenPS/ProjectWAR live bridges."
  },
  {
    ver: "V5 Unified",
    date: "Nov 23",
    state: "shipped",
    title: "One Binary, Zero-Jitter Projection & .glb Loader",
    summary: "Merged all 4 games into one 31 MB binary. Fixed projection jitter, specular AA, and Classic alpha; launched the shared .glb pack loader with 117 sculpted Warhammer champions, 2048×2048 NASA Earth/Moon, and 610 PS1 PBR textures."
  },
  {
    ver: "V6 Unified",
    date: "Nov 24 (Afternoon)",
    state: "shipped",
    title: "Authentic MH Pointer ARPG, Smart Human AI & Zero-Stutter Polish",
    summary: "Merged three parallel Mythos 5.2 lanes: full Diablo/MH pointer play, human-behavior opposing PS1 fireteams + WAR/MH crew tactics, zero indoor/door BLAS stutter, RT displacement budget cap (0 skipped meshes), and grounded MH DaylightLook::City exposure."
  },
  {
    ver: "Asset Wave 2",
    date: "Nov 24 (Evening)",
    state: "shipped",
    title: "132 Sculpted PS1 Exo-Troopers & 56 MH Supervillains",
    summary: "Replaced blocky PS1 infantry across TR, NC, VS, and Neutral (33 poses each) with emissive-visored 2026 exo-armor and sculpted 56 articulated Marvel Heroes supervillain crew models."
  },
  {
    ver: "V7 Swarm",
    date: "In Progress Now",
    state: "active",
    title: "2026 Volumetric Sky/Water, Glass Reflections & Live-Server Parity",
    summary: "Two active Mythos 5.2 lanes adding procedural volumetric clouds, animated PBR reflective water, glossy RT reflections, 4-game Enhanced VFX, and automatic override + retail level parity on --source live."
  },
  {
    ver: "V8+ Roadmap",
    date: "Up Next",
    state: "planned",
    title: "GPU Skeletal Skinning, Full HUD, Game Loops & Tabula Rasa",
    summary: "Smooth glTF bone animation, interactive MMO/ARPG HUDs, deeper base-capture / loot / keep-siege / trade gameplay loops, and wiring Tabula Rasa as Game #5."
  }
];

export const GALLERY = [
  { src: "assets/shots/ps1-solsar-enhanced.webp", game: "ps1", title: "PlanetSide 1 — Solsar TR 2026 Exo-Armor", meta: "7.64 ms · 2.04M RT Tris · Full Relief" },
  { src: "assets/shots/ps1-vs-enhanced.webp", game: "ps1", title: "PlanetSide 1 — Vanu Sanctuary VS Exo-Armor", meta: "6.57 ms · 305 PBR Maps · 3D Trees" },
  { src: "assets/shots/enb-earth-enhanced.webp", game: "enb", title: "Earth & Beyond — 2048×2048 Blue Marble Earth", meta: "1.11 ms · 540k RT Tris · Rayleigh Halo" },
  { src: "assets/shots/war-isle-enhanced.webp", game: "war", title: "Warhammer Online — Sculpted 2026 .glb Champions", meta: "5.49 ms · 117 .glb Models · Zone 200" },
  { src: "assets/shots/war-warcamp-v6.webp", game: "war", title: "Warhammer Online — Blighted Isle Warcamp Sunset", meta: "2.30M RT Tris · 3,750 Retail Fixtures" },
  { src: "assets/shots/mh-tower-enhanced.webp", game: "mh", title: "Marvel Heroes — Avengers Tower Fixed Exposure", meta: "1.83 ms · Mean Lum 96.9 vs Classic 95.0" },
  { src: "assets/shots/mh-midtown-arena.webp", game: "mh", title: "Marvel Heroes — Midtown Cosmic Arena", meta: "Cooked UE3 Level · Hardware RT Shadows" },
  { src: "assets/shots/mh-plaza-villains.webp", game: "mh", title: "Marvel Heroes — Sculpted 2026 Supervillain Crew", meta: "56 .glb Models · Coordinated Crew AI" },
  { src: "assets/shots/mh-tower-overlook.webp", game: "mh", title: "Marvel Heroes — Avengers Tower Mezzanine", meta: "3,152 UE3 Placements · Glass & RT" },
  { src: "assets/shots/mh-old-v5-bright.webp", game: "mh", title: "Before Fix (V5) — Over-Bright Chalky Exposure", meta: "Historical Ref: Mean 116.5 (Fixed in V6)" }
];
