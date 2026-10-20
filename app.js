const LICENSE_PLAN = 'C';  // 版权降级方案 C：不呈现译文章节与尾注
/* ============================================================
   釉下之蓝 · Blue Under the Glaze
   中英双语交互式数字出版物 —— 交互逻辑与内容数据
   ============================================================ */
'use strict';

/* ---------- 1. 界面多语言 ---------- */
const I18N = {
  zh: {
    skip: "跳到主要内容",
    nav_ct: "内容",
    nav_timeline: "时间线",
    nav_routes: "航线图",
    nav_trans: "转译",
    nav_terms: "术语库",
    nav_notes: "研究方法",
    nav_team: "团队",
    ct_kicker: "CONTENTS",
    ct_title: "内容总览",
    ct_lead: "本作品以十二章组织内容，每章对应一组历史转折与一组交互模块；下表说明每章主题与其在作品中的承载方式。",
    ct_c1: "御选之城：景德镇崛起",
    ct_m1: "时间线 · 封面导语",
    ct_c2: "白瓷的流通：东亚海域",
    ct_m2: "航线图",
    ct_c3: "青花出现：从磁州、吉州到景德镇",
    ct_m3: "时间线 · 器物画廊",
    ct_c4: "大维德瓶：断代的标杆",
    ct_m4: "时间线 · 长文",
    ct_c5: "青花与十五世纪的世界",
    ct_m5: "航线图 · 器物画廊",
    ct_c6: "御窑与城市空间",
    ct_m6: "时间线 · 长文",
    ct_c7: "资源焦虑：高岭土与窑柴",
    ct_m7: "术语库 · 长文",
    ct_c8: "巧手：御窑的人力与技艺",
    ct_m8: "术语库 · 跨材质转译",
    ct_c9: "物质流通：克拉克瓷与全球贸易",
    ct_m9: "航线图 · 器物画廊",
    ct_c10: "漫长十七世纪：VOC 与转变期",
    ct_m10: "时间线 · 长文",
    ct_c11: "中国风：欧洲的模仿与定制",
    ct_m11: "跨材质转译 · 器物画廊",
    ct_c12: "尾声：全球往昔的碎片",
    ct_m12: "长文 · 方法",
    k_about: "Prologue · 导语",
    t_about: "当一座瓷都成为世界史的入口",
    about_h4: "关于本作品 · About",
    k_timeline: "Timeline · 时间线",
    t_timeline: "千年窑火：景德镇与青花瓷的十个世纪",
    d_timeline: "点击时间轴上的节点，查看每个历史时期的窑业格局、技术变革与全球联动。内容按「技术—制度—贸易」三条线索编排为十二章。",
    k_routes: "Circulation · 航线图",
    t_routes: "青花的环球之旅：贸易航线示意图",
    d_routes: "示意图以等经纬网点阵为底，标注青花瓷贸易网络的关键港口与节点。点击港口查看其在贸易网络中的角色，或用下方筛选器按海域查看航线分层。",
    k_gallery: "Gallery · 器物画廊",
    t_gallery: "十件器物，一部全球史",
    d_gallery: "从唐代长沙窑到清代贲巴壶，从景德镇窑口到代尔夫特与韦奇伍德——器物是文明互鉴最直接的证据。点击任一器物可查看大图与双语释文；右侧筛选器按其在全球网络中的位置归类。",
    k_trans: "Transmaterial · 跨材质转译",
    t_trans: "一只瓷盘的四次转世",
    d_trans: "青花从未停止旅行，也从未原样抵达。同样的钴蓝纹样，在四个世纪里换了四种材质、四种技术体系与四种消费语境。点击下方节点，追踪这件器物如何被景德镇定义、被伊万里重绘、被代尔夫特转译、被韦奇伍德纪念。",
    tv_chain: "四次转世 · 链路视图",
    tv_net: "转译网络 · 12 节点",
    k_read: "Original Essays · 原创长文",
    t_read: "六个瞬间：团队原创长文",
    d_read: "六篇团队原创长文，从瓷片市场、钴料来历、窑场网络、白银与开光、材质替换讲到碎片能证明什么。中文与英文均为团队撰写，不是任何既有著作的译文。",
    k_terms: "Terminology · 术语库",
    t_terms: "原创双语陶瓷术语库",
    d_terms: "本库是团队研究工作的基础设施：在十二章叙述中维持用词一致，覆盖基础概念、钴料体系、釉色、工艺窑炉、彩饰、器型、母题、窑口、贸易流通、外销瓷、度量经济、劳动行政、吉祥寓意与中文文献反查十四个门类。支持中英文检索。",
    k_notes: "Method & Sources · 研究方法",
    t_notes: "研究方法与资料来源：我们怎么做的，以及我们没做什么",
    d_notes: "本作品不是本作品，也没有引用任何单一著作作为底本。这里说明我们的研究方法、参考资源、图像与数据的使用限制，以及本作品明确「没有做」的三件事。",
    k_team: "Team & Making · 团队与制作",
    t_team: "团队、方法与制作说明",
    tc_0: "制作分工 Division of Labour",
    tc_1: "研究方法 Research Method",
    dc_0: "SOURCE & AI DISCLOSURE · 资料来源与 AI 使用披露",

    nav_about: '导语', nav_timeline: '时间线', nav_routes: '航线图',
    nav_gallery: '器物', nav_trans: '转译',
    nav_read: "长文", nav_terms: '术语库', nav_notes: '研究方法', nav_team: '团队',
    cover_sub: "一座中国瓷都如何为整个世界烧造瓷器 —— 从昌江之畔的窑火，到印度洋的帆影、荷兰静物画中的青花盘。十二章叙事、六篇原创长文、二百七十条双语术语，由团队独立研究与写作完成。",
    tl_prev: '← 上一节点', tl_next: '下一节点 →',
    terms_ph: '检索术语：中文 / 英文 / 注释，如 青花、cobalt、梅瓶、kraak…',
    map_note: '示意图 · Schematic — 仅示相对位置与航线关系，非精确地理投影',
    gal_all: '全部', gal_origin: '景德镇窑口', gal_export: '外销瓷', gal_copy: '欧洲转译', gal_early: '更早的源流',
    gal_open: '点击查看大图', gal_cap_ai: 'AI 生成示意 · 非文物照片',
    trans_hint: '点击节点查看转译细节'
  },
  en: {
  nav_ct: 'Contents',
  tv_chain: 'Four lives · chain view',
  tv_net: 'Translation network · 12 nodes',

  skip: 'Skip to main content',
  tv_chain: '四次转世 · 链路视图',
  tv_net: '转译网络 · 12 节点',
  ct_kicker: 'CONTENTS',
  ct_title: 'Contents',
  ct_lead: "The work is organised in twelve sections, each pairing a historical turning point with an interactive module; the table below maps every section to how it is presented.",
  ct_c1: 'A chosen city: the rise of Jingdezhen', ct_m1: 'Timeline \u00b7 Prologue',
  ct_c2: 'Circulations of white ware: East Asian seas', ct_m2: 'Route map',
  ct_c3: 'The emergence of blue-and-white', ct_m3: 'Timeline \u00b7 Gallery',
  ct_c4: 'The David Vases: a dating benchmark', ct_m4: 'Timeline \u00b7 Readings',
  ct_c5: 'Blue-and-white and the fifteenth-century world', ct_m5: 'Route map \u00b7 Gallery',
  ct_c6: 'A city of blue-and-white: kilns and urban space', ct_m6: 'Timeline \u00b7 Readings',
  ct_c7: 'Resource anxiety: kaolin and kiln wood', ct_m7: 'Terminology \u00b7 Readings',
  ct_c8: 'Skilled hands: labour and craft at the imperial kilns', ct_m8: 'Terminology \u00b7 Material translation',
  ct_c9: 'Circulation of things: kraak porcelain and global trade', ct_m9: 'Route map \u00b7 Gallery',
  ct_c10: 'The long seventeenth century: the VOC and transition', ct_m10: 'Timeline \u00b7 Readings',
  ct_c11: 'Chinoiserie: European imitation and commission', ct_m11: 'Material translation \u00b7 Gallery',
  ct_c12: 'Coda: fragments of a global past', ct_m12: 'Readings \u00b7 Notes',

    nav_about: 'Prologue', nav_timeline: 'Timeline', nav_routes: 'Routes',
    nav_gallery: 'Objects', nav_trans: 'Translation',
    nav_read: "Essays", nav_terms: 'Terms', nav_notes: 'Notes', nav_team: 'Team',
    cover_sub: "A bilingual interactive publication on Jingdezhen blue-and-white and the early modern world — twelve sections, six original essays and 270 bilingual terms, written by the student team.",
    tl_prev: '← Previous', tl_next: 'Next →',
    terms_ph: 'Search terms: Chinese / English / notes, e.g. 青花, cobalt, 梅瓶, kraak…',
    map_note: 'Schematic — relative positions only; not a precise cartographic projection',
    gal_all: 'All', gal_origin: 'Jingdezhen kilns', gal_export: 'Export ware', gal_copy: 'European translations', gal_early: 'Earlier origins',
    gal_open: 'Click to enlarge', gal_cap_ai: 'AI-generated illustration · not a museum photograph',
    trans_hint: 'Click a node for details',
    k_about: 'Prologue',
    t_about: 'When a porcelain city becomes a gateway to world history',
    k_timeline: 'Timeline',
    t_timeline: 'A millennium of kiln fires: Jingdezhen and blue-and-white porcelain across ten centuries',
    d_timeline: "Click a node on the timeline to see the kiln landscape, technological change and global connections of that period. The twelve sections follow three threads: technology, institutions and trade.",
    k_routes: 'Circulation',
    t_routes: 'The global voyage of blue-and-white: a schematic of trade routes',
    d_routes: 'An equirectangular graticule underlies this schematic of the key ports and nodes of the porcelain trade network. Click a port to see its role, or use the filters below to view the routes by ocean.',
    k_gallery: 'Gallery',
    t_gallery: 'Ten objects, one global history',
    d_gallery: 'From Tang Changsha wares to the Qing benba ewer, from Jingdezhen kilns to Delft and Wedgwood — objects are the most direct evidence of mutual learning among civilizations. Click an object for a larger image and bilingual notes; the filter groups them by their place in the global network. All images were generated by the team with AI image models and then manually selected and cropped: they illustrate forms and motifs only, and are not museum photographs.',
    k_trans: 'Transmaterial',
    t_trans: 'Four lives of a single dish: transmaterial translation',
    d_trans: 'Blue-and-white never stopped travelling — and never arrived unchanged. The same cobalt patterns passed through four materials, four technical systems and four contexts of consumption. Click the nodes below to trace how this object was defined at Jingdezhen, redrawn in Imari, translated in Delft and commemorated at Wedgwood.',
    k_read: "Original essays · 原创长文",
    t_read: "Six moments: original essays",
    d_read: "Six original essays by the team, moving from the shard market and the origins of cobalt to kiln networks, silver and panelling, material substitution, and what fragments can prove. Both the Chinese and English texts are written by the team — not translations of any existing work.",
    k_terms: 'Terminology',
    t_terms: 'An original bilingual terminology database of Chinese ceramics',
    d_terms: 'The database is the core infrastructure of the team\'s translation project: it keeps terminology consistent across 930,000 characters of Chinese translation, covering fourteen categories — basic concepts, cobalt materials, glazes, craft and kilns, decoration, forms, motifs, kiln sites, circulation, export ware, weights and measures, labour and administration, auspicious symbolism, and Chinese-source cross-checking. Search in Chinese or English, and filter by category.',
    k_notes: "Method & Sources · 研究方法",
    t_notes: "我们怎么研究，以及我们没做什么",
    d_notes: "This is not a translated work and no single publication serves as its base text. Here we set out our method, our references, the limits on our images and data, and the three things the work deliberately does not do.",
    k_team: 'Team & Making',
    t_team: 'The team, the method, and the making',
    li_0: '<b>Translation</b> — twelve chapters; three-step method (literal, reflection, polish); five-metric quality gate <i>(Chinese member)</i>',
    li_1: '<b>Terminology</b> — 270 bilingual terms aligned; cross-chapter drift audit; restitution of Chinese sources <i>(Chinese member)</i>',
    li_2: '<b>Bilingual endnotes</b> — 12 nodes / 14 edges aligned, with multilingual sources handled <i>(Chinese member)</i>',
    li_3: '<b>Interaction design &amp; development</b> — visual system, timeline, route map, readings, terminology modules <i>(Chinese member)</i>',
    li_4: '<b>English copy-editing &amp; internationalisation</b> — English interface copy; review from an international-reader perspective <i>(International member)</i>',
    li_5: '<b>Video production</b> — script, recording, narration synthesis <i>(All members)</i>',
    li_6: '<b>Stage 0 — extraction &amp; cleaning</b>: PDF text extraction; repair of 11 classes of damage (ligatures, CID noise, running heads)',
    li_7: '<b>Stage 0.5 — contextual correction</b>: 43 disambiguation rules with PDF re-reading',
    li_8: "<b>Data and visualisation</b> — the open data layer and the visual implementation of the timeline and route map",
    li_9: "<b>Film and music</b> — video script, storyboard and edit; procedurally composed original score",
    li_10: '<b>Stage 3.5 — quality gate</b>: paragraph completeness, omission detection, ambiguity closure, readability, terminology coverage — five quantitative scores',
    li_11: "<b>Stage 4 QA</b> — hard-knowledge violation blocking, banned-variant scanning, citation cross-checking",
    dc_0: 'SOURCE &amp; AI DISCLOSURE',
    dc_1: '<b>Source</b>: the translated content derives from the team\'s complete Chinese translation of an English-language scholarly monograph on Jingdezhen porcelain and the early modern world. The Chinese translation was produced by the student team and is used for this competition and academic exchange only; copyright in the work rests with the translators, and copyright in the original with the rights holder. Bibliographic and rights-holder details are provided separately through the permission-request channel.',
    dc_2: '<b>Original work</b>: the publication framework, visual system, interaction design, the visualised data organisation of the timeline and route map, the prologue, the English synopses, the terminology database and all front-end code are original to the team. No illustrations from the source book are used.',
    dc_3: '<b>AI-generated visuals</b>: the 10 object images in the Object Gallery and Transmaterial Translation modules were generated by the team with an AI image model (Zhipu CogView-3-Flash) from team-written prompts, then manually selected, cropped and captioned. They illustrate forms and motifs and are not museum photographs, as labelled in the page. The AI footage in the review video was generated by the team with the MiniMax-H3 video model.',
  dc_6: "<b>参考来源</b>：本作品在选题与研究阶段参考了公开的博物馆藏品数据库、考古与沉船报告、贸易史档案及若干公开出版的陶瓷史著作（含《蓝白之城》等，完整清单见「研究方法与资料来源」模块）。<b>这些只是参考来源，不是本作品的底本</b>；本作品不复制其表达，也不含任何著作的文本。",
  dc_6: "<b>References</b>: during research and writing the team consulted public museum collection databases, archaeological and shipwreck reports, trade archives and several published works on ceramic history (including <i>The City of Blue and White</i>; the full list is in the Method &amp; Sources module). <b>These are references only, not a base text</b>; the work reproduces no expression from them and contains no translation of any of them.",
  dc_5: "<b>Originality</b>: the text (six essays, twelve sections, terminology notes, method statement), the structured data (270 terms, 12 timeline nodes, 19 ports / 19 routes, 10 objects, a 12-node / 14-edge translation network), the visual system, the interactions and all front-end code are original to the team. References are listed in the Method &amp; Sources module and are <b>background only, not a base text</b>.",
  dc_5: "<b>Rights fallback plan (in effect)</b>: to respect the copyright in the original work, this version applies <b>Plan B</b> of the team’s rights-fallback scheme — the readings module now presents a <b>limited quotation of no more than 300 characters per passage, together with the team’s own commentary</b>, and the endnote module becomes a <b>citation index</b> (bibliographic records plus the team’s processing notes, with no full translation of the cited text). The terminology database, timeline, route map, object gallery, transmaterial translation, translation network, visual system and all front-end code are original to the team and unaffected. The complete aligned files are retained for verification and can be restored once permission is obtained.",
  dc_4: "<b>AI tools</b>: large language models were used to assist with organising material and polishing wording during research and writing; all final text was revised and cross-checked by the team. The front-end code and video script were written by hand with AI assistance and line-by-line review. Narration is TTS-synthesised with hand-checked subtitles; the background music is procedurally composed by the team. All AI-generated content was substantially modified and verified by students.",
    tc_0: 'Division of Labour',
    tc_1: 'Research Method',
    about_h4: 'About this work'
  }
};
let LANG = 'zh';
function setLang(l) {
  LANG = l;
  document.getElementById('langZh').classList.toggle('on', l === 'zh');
  document.getElementById('langEn').classList.toggle('on', l === 'en');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (I18N[l][k] !== undefined) el.textContent = I18N[l][k];
  });
  /* 带 <b>/<i> 标记的界面文案：用 innerHTML 替换，避免丢失强调层级 */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (I18N[l][k] !== undefined) el.innerHTML = I18N[l][k];
  });
  document.querySelector('.cover-sub').textContent = I18N[l].cover_sub;
  document.getElementById('termSearch').placeholder = I18N[l].terms_ph;
  renderTimelineNode(TL_CUR);
  renderPort(PORT_CUR);
  renderRouteFilter();
  applyRouteFilter();
  renderReading(READ_CUR);
  renderGalFilter();
  renderGallery();
  renderTrans(TRANS_CUR);
  renderCats();
  renderTerms();
  renderTermsChart();
  renderNotes();
  document.documentElement.lang = (l === 'zh') ? 'zh-CN' : 'en';
  if (typeof TNET !== 'undefined' && !document.getElementById('transNet').hidden) renderTransNet();
}

/* ---------- 2. 时间线 ---------- */
const TIMELINE = [
  { x: 6, era: '1000–1200', img: 'assets/scenes/s01_kiln.jpg', tz: '御选之城：景德镇崛起', te: 'A city of imperial choice: the rise of Jingdezhen',
    pz: '宋代，昌江之畔的湖田窑开始烧造青白瓷——那种白中泛青、釉色如玉的器物，很快获得"饶玉"之誉。景德镇从一处窑业聚落成长为帝国最杰出的制瓷中心：窑场沿河分布，瓷土、木柴与釉灰取自环抱小镇的三面群山，成品则顺昌江而下，经鄱阳湖进入长江与大运河，抵达帝国每一个角落。',
    pe: 'In the Song dynasty, the Hutian kilns on the banks of the Chang River began firing qingbai ware — white porcelain suffused with a pale blue-green glaze, praised as "jade from Rao". Jingdezhen grew from a cluster of kilns into the empire\'s foremost ceramic centre.' },
  { x: 13, era: '10–13 世纪', tz: '白瓷的流通：东亚海域',
    img: 'assets/scenes/s02_changjiang.jpg', te: 'Circulations of white: the East Asian seas',
    pz: '青白瓷沿明州等港口输往高丽与日本，也随阿拉伯帆船进入印度洋。1976 年发现的新安沉船载有万余件元代瓷器，其中大量龙泉青瓷与景德镇白瓷——这是十四世纪东亚陶瓷贸易网络的实物见证。海洋考古学让我们得以称量一个时代的流动。',
    pe: 'Qingbai ware travelled from ports such as Mingzhou to Korea and Japan, and on Arab dhows into the Indian Ocean. The Sinan shipwreck, discovered in 1976 with over ten thousand ceramic cargo items, is material testimony to fourteenth-century East Asian ceramic networks.' },
  { x: 22, era: '14 世纪初', tz: '青花出现：从磁州、吉州到景德镇',
    img: 'assets/artifacts/g10_changsha.jpg', te: 'The emergence of blue and white: from Cizhou and Jizhou to Jingdezhen',
    pz: '釉下钴蓝装饰何时、如何在景德镇成熟？我们的解释是"人的流动"：磁州窑的白地黑花、吉州窑的釉下彩绘，随工匠南迁与器物流通进入江西。景德镇首次出现釉下彩绘的时间，正与吉州窑开始衰落的时期相吻合——两个窑址之间，是技艺与人的迁徙。',
    pe: 'When and how did underglaze cobalt decoration mature at Jingdezhen? the work\'s answer is "the mobility of people": Cizhou\'s white slip-painted wares and Jizhou\'s underglaze painting travelled south with craftsmen and circulating objects into Jiangxi.' },
  { x: 29, era: '1351', img: 'assets/artifacts/g02_meiping_xiaohe.jpg', tz: '大维德瓶：断代的标杆', te: 'The David Vases: a benchmark for dating',
    pz: '伦敦大维德基金会收藏的两件青花庙堂花瓶，瓶颈釉下铭文落"至正十一年"（1351 年）。这一确切纪年为十四世纪中叶青花装饰的卓越品质提供了无可辩驳的证据，也成为元青花断代的标杆。瓶身纹饰与吉州窑装饰的相似，暗示着工匠的迁徙路线。',
    pe: 'Two blue-and-white temple vases in the Percival David Collection bear an underglaze inscription dated to 1351 — irrefutable evidence for the quality of mid-fourteenth-century blue-and-white, and the benchmark for dating Yuan blue-and-white.' },
  { x: 38, era: '14–15 世纪', tz: '青花与十五世纪的世界',
    img: 'assets/scenes/s03_dhow.jpg', te: 'Blue and white and the fifteenth-century world',
    pz: '明代御窑在珠山崛起，为宫廷烧造青花。十五世纪中叶的"明代空白期"，外销瓷一度骤减；而郑和下西洋的船队携带着青花瓷器，穿过马六甲，进入印度洋。青花开始以一个强盛帝国的外交与贸易为后盾，走向世界。',
    pe: 'Ming imperial kilns rose at Zhushan, firing blue-and-white for the court. During the mid-fifteenth-century "Ming gap" exports briefly collapsed; yet Zheng He\'s fleets carried blue-and-white through Malacca into the Indian Ocean.' },
  { x: 47, era: '1500–1600', tz: '御窑与城市空间',
    img: 'assets/artifacts/g06_bengba_hu.jpg', te: 'Imperial kilns and urban space',
    pz: '十六世纪的景德镇并非单一城镇，而是遍布全地区的窑址网络——30 多处窑场在昌江两岸运作。御窑厂踞于镇中心珠山，与十八渡、观音阁等民窑遗址共同构成"御窑与城市空间"的空间肌理；二元配方（高岭土加瓷石）的普及，让大件器物的烧造成为可能。',
    pe: 'Sixteenth-century Jingdezhen was not a single town but a network of kiln sites — over thirty workshops operating along both banks of the Chang River. The imperial kiln at Zhushan formed, with private kiln sites, the spatial fabric of "the city of blue and white".' },
  { x: 55, era: '16 世纪 · 原料', img: 'assets/scenes/s08_cobalt.jpg', tz: '资源焦虑：高岭土与窑柴', te: 'Resource anxieties: kaolin and kiln firewood',
    pz: '大件瓷器烧造的背后是惊人的资源消耗：高岭土越采越深，窑柴按"杠"（一肩挑的量）计量，柴价腾涌迫使官府出榜定价。本作品以"资源焦虑"描摹十六世纪景德镇的生态边界——瓷业的扩张如何逼近一个地区的自然极限。',
    pe: 'Behind large-scale porcelain production lay astonishing resource consumption: kaolin dug ever deeper, kiln firewood measured in gang (shoulder-loads), and soaring fuel prices forcing the state to issue price edicts. the work maps the ecological limits of the porcelain industry.' },
  { x: 63, era: '16 世纪 · 技艺', tz: '巧手：御窑的人力与技艺',
    img: 'assets/artifacts/g04_gaozuowan.jpg', te: 'Skilled hands: labour and craft in the imperial kilns',
    pz: '御窑的奥秘不仅在土与火，更在人。轮班匠、住坐匠、工夫与砂土夫——明代匠户制度把全国工匠编入景德镇的窑务；劳动分工之细，从拉坯、画青到烧火、开窑，各专其业。一只鱼缸的烧成，是数百人协作的成果。',
    pe: 'The secret of the imperial kilns lay not only in clay and fire but in people. Artisan households — rotational and resident craftsmen, labourers of every kind — were organised into Jingdezhen\'s kiln service. A single fish bowl was the product of hundreds of coordinated hands.' },
  { x: 72, era: '16 世纪 · 贸易', img: 'assets/artifacts/g05_kraak_pan.jpg', tz: '物质流通：克拉克瓷与全球贸易', te: 'Circulations of things: kraak porcelain and global trade',
    pz: '葡萄牙的克拉克大帆船把中国瓷器运往里斯本与安特卫普；西班牙的大帆船则横渡太平洋，从马尼拉驶向阿卡普尔科，把新大陆的白银换成一船船青花。开光构图的"克拉克瓷"成为欧洲市场的宠儿——景德镇的作坊第一次为遥远的口味而设计。',
    pe: 'Portuguese carracks carried Chinese porcelain to Lisbon and Antwerp; Spanish galleons crossed the Pacific from Manila to Acapulco, trading New World silver for cargoes of blue-and-white. Kraak porcelain, with its panelled decoration, was designed for distant European tastes.' },
  { x: 81, era: '1602–1683', tz: '漫长十七世纪：VOC 与转变期',
    img: 'assets/scenes/s04_galleon.jpg', te: 'The long seventeenth century: the VOC and transitional wares',
    pz: '1602 年荷兰东印度公司（VOC）成立，瓷器很快成为其贸易的关键商品。明末清初的"转变期瓷器"带着新的画意与题材驶往阿姆斯特丹；荷兰代尔夫特的陶工则以锡釉陶模仿青花——一次跨材质的转译，一场欧洲对中国品味的追逐。',
    pe: 'With the founding of the VOC in 1602, porcelain soon became a key commodity of its trade. "Transitional wares" of the Ming–Qing transition sailed to Amsterdam, while Delft potters imitated blue-and-white in tin-glazed earthenware — a translation across materials.' },
  { x: 89, era: '18–19 世纪', tz: '中国风：欧洲的模仿与定制',
    img: 'assets/artifacts/g08_delft.jpg', te: 'Chinoiserie: European imitation and commissions',
    pz: '十八世纪，欧洲贵族定制绘有家族纹章的纹章瓷，广彩在欧洲口味中愈发浓艳；"中国风"（chinoiserie）席卷园林、瓷室与时装。青花从景德镇出发，最终成为欧洲审美想象的一部分——全球消费反过来塑造了产地的制造工艺。',
    pe: 'In the eighteenth century European nobles commissioned armorial porcelain bearing family crests. Chinoiserie swept through gardens, porcelain rooms and fashion: global consumption came to shape the manufactures of the place of origin.' },
  { x: 97, era: '2013', img: 'assets/scenes/s07_shards.jpg', tz: '尾声：全球往昔的碎片', te: 'Epilogue: fragments of a global past',
    pz: '本书始于景德镇每周一的瓷片市场，也终于此。市场上待售的瓷片，有的出自十四世纪的窑址，有的从墓中回收；窑废品曾被砸碎埋入窑址之侧。这些"来路不明"的碎片，恰是全球往事留下的物质证据——历史学家在碎片中辨认流动的轨迹。',
    pe: 'The book begins and ends at Jingdezhen\'s Monday shard market. Shards for sale — some from fourteenth-century kiln sites, some recovered from tombs; kiln wasters once smashed and buried beside the kilns — are material evidence of a global past, from which historians trace the pathways of circulation.' }
];
let TL_CUR = 0;

function renderTimelineNodes() {
  const wrap = document.getElementById('tlRail');
  const last = TIMELINE.length - 1;
  TIMELINE.forEach((n, i) => {
    const el = document.createElement('div');
    el.className = 'tl-node';
    /* 首尾节点的标签贴边对齐：否则末节点标签会溢出容器右侧被裁掉 */
    if (i === 0) el.classList.add('edge-l');
    if (i === last) el.classList.add('edge-r');
    el.style.left = n.x + '%';
    el.dataset.i = i;
    el.innerHTML = `<div class="tl-year">${n.era}</div><div class="tl-tick"></div><div class="tl-dot"></div>`;
    el.onclick = () => renderTimelineNode(i);
    wrap.appendChild(el);
  });
  renderTimelineNode(0);
}
function renderTimelineNode(i) {
  TL_CUR = Math.max(0, Math.min(TIMELINE.length - 1, i));
  document.querySelectorAll('.tl-node').forEach(el =>
    el.classList.toggle('on', +el.dataset.i === TL_CUR));
  const n = TIMELINE[TL_CUR];
  const zh = LANG !== 'en';
  document.getElementById('tlDetail').innerHTML = `
    <span class="tl-detail-era">${n.era}</span>
    <h3>${n.tz}</h3><div class="h3-en">${n.te}</div>
    ${n.img ? `<figure class="tl-fig"><img src="${n.img}" alt="${n.tz}" loading="lazy" onerror="this.closest('.tl-fig').style.display='none'"><figcaption>${LANG === 'en' ? 'AI-generated illustration \u00b7 not a photograph of the object' : 'AI 生成示意 · 非文物照片'}</figcaption></figure>` : ''}
    <p>${n.pz}</p><div class="p-en">${n.pe}</div>`;
}
function tlStep(d) { renderTimelineNode(TL_CUR + d); }

/* ---------- 3. 航线图（原创示意图） ---------- */
const PORTS = [
  { id: 'jingdezhen', n: '景德镇', e: 'Jingdezhen', lon: 117.19, lat: 29.29, kind: 'site',
    rz: '瓷都。本书的核心产地：御窑与民窑沿昌江两岸分布，高岭土取自附近高岭村。', re: 'The porcelain city and the book\'s core site of production: imperial and private kilns lined both banks of the Chang River.' },
  { id: 'nanchang', n: '鄱阳湖', e: 'Poyang Lake', lon: 116.0, lat: 29.1, kind: 'hub',
    rz: '内河枢纽。昌江于此汇入鄱阳湖，瓷器经此进入长江与大运河体系，北运帝都。', re: 'The inland hub: the Chang River flows into Poyang Lake, giving access to the Yangtze and the Grand Canal.' },
  { id: 'guangzhou', n: '广州', e: 'Guangzhou (Canton)', lon: 113.26, lat: 23.13, kind: 'port',
    rz: '帝国南大门。赣江—南岭通道的终点，清代十三行一口通商的所在，欧洲商船的 destination。', re: 'The southern gate of the empire and the terminus of the Gan River route; sole licensed port for European trade under the Canton System.' },
  { id: 'yuegang', n: '月港（漳州）', e: 'Yuegang (Zhangzhou)', lon: 117.65, lat: 24.51, kind: 'port',
    rz: '明代后期民间海外贸易的中心港口，漳州窑外销瓷的出发港。', re: 'The centre of private overseas trade in the late Ming and the port of departure for Zhangzhou (Swatow) export wares.' },
  { id: 'macao', n: '澳门', e: 'Macao', lon: 113.55, lat: 22.2, kind: 'port',
    rz: '葡萄牙人居留地与转口港，连接广州、马六甲与长崎的航线节点。', re: 'Portuguese settlement and entrepôt linking Guangzhou, Malacca and Nagasaki.' },
  { id: 'malacca', n: '马六甲', e: 'Malacca', lon: 102.24, lat: 2.2, kind: 'port',
    rz: '印度洋与太平洋之间的咽喉。转口贸易的集散地，等于是全球贸易的"收费站"。', re: 'The choke point between Indian and Pacific Oceans — an entrepôt that functioned as a toll gate of global trade.' },
  { id: 'batavia', n: '巴达维亚', e: 'Batavia (Jakarta)', lon: 106.85, lat: -6.21, kind: 'port',
    rz: 'VOC 在东方的总部所在，亚洲区域贸易网络的枢纽。', re: 'The VOC\'s Asian headquarters and the hub of its intra-Asian trading network.' },
  { id: 'manila', n: '马尼拉', e: 'Manila', lon: 120.98, lat: 14.6, kind: 'port',
    rz: '马尼拉大帆船的东方端点：中国商品在此换乘太平洋航线，驶往阿卡普尔科。', re: 'The eastern terminus of the Manila galleon: Chinese goods transferred here onto the Pacific route to Acapulco.' },
  { id: 'nagasaki', n: '长崎', e: 'Nagasaki', lon: 129.87, lat: 32.75, kind: 'port',
    rz: '日本对华与对欧贸易的窗口，唐船与荷兰船在此交会。', re: 'Japan\'s window for trade with China and Europe, where Chinese junks and Dutch ships met.' },
  { id: 'calicut', n: '卡利卡特', e: 'Calicut', lon: 75.78, lat: 11.25, kind: 'port',
    rz: '印度西海岸的香料与瓷器贸易港，阿拉伯、印度与中国商人的交汇之处。', re: 'A spice and porcelain port on India\'s west coast, where Arab, Indian and Chinese merchants converged.' },
  { id: 'hormuz', n: '霍尔木兹', e: 'Hormuz', lon: 56.27, lat: 27.1, kind: 'port',
    rz: '波斯湾入口的转口港，通往波斯与中亚市场的门户。', re: 'The entrepôt at the mouth of the Persian Gulf and the gateway to Persian and Central Asian markets.' },
  { id: 'aden', n: '亚丁', e: 'Aden', lon: 45.03, lat: 12.79, kind: 'port',
    rz: '红海入口。亚丁—红海航线把印度洋贸易接入地中海世界。', re: 'The gate of the Red Sea, connecting Indian Ocean trade to the Mediterranean world.' },
  { id: 'jeddah', n: '吉达', e: 'Jeddah', lon: 39.17, lat: 21.54, kind: 'port',
    rz: '红海沿岸的朝圣与贸易港，瓷器由此转运埃及与欧洲。', re: 'A pilgrimage and trade port on the Red Sea, from which porcelain moved on to Egypt and Europe.' },
  { id: 'cairo', n: '开罗', e: 'Cairo (via Suez)', lon: 31.24, lat: 30.05, kind: 'port',
    rz: '从红海到地中海的陆桥。经此，青花进入马穆鲁克与奥斯曼世界的宫廷。', re: 'The land bridge from the Red Sea to the Mediterranean: blue-and-white entered the courts of the Mamluk and Ottoman worlds.' },
  { id: 'venice', n: '威尼斯', e: 'Venice', lon: 12.34, lat: 45.44, kind: 'port',
    rz: '地中海世界的终点与欧洲分销的起点，最早大量收藏中国瓷器的欧洲城市之一。', re: 'The terminus of the Mediterranean world and the starting point of European distribution; among the earliest European cities to collect Chinese porcelain in quantity.' },
  { id: 'seville', n: '塞维利亚', e: 'Seville', lon: -6.0, lat: 37.39, kind: 'port',
    rz: '西班牙宝船队的目的地，美洲白银与亚洲瓷器在此汇流。', re: 'Destination of the Spanish treasure fleets, where American silver and Asian porcelain converged.' },
  { id: 'lisbon', n: '里斯本', e: 'Lisbon', lon: -9.14, lat: 38.72, kind: 'port',
    rz: '葡萄牙国门的港口，克拉克瓷（kraak）欧洲分销的中心。', re: 'Portugal\'s gateway port and the centre of European distribution for kraak porcelain.' },
  { id: 'amsterdam', n: '阿姆斯特丹', e: 'Amsterdam', lon: 4.9, lat: 52.37, kind: 'port',
    rz: '十七世纪的世界贸易之都，VOC 的大本营；青花出现在荷兰静物画中。', re: 'The trading capital of the seventeenth century and home of the VOC; blue-and-white appears in Dutch still lifes.' },
  { id: 'acapulco', n: '阿卡普尔科', e: 'Acapulco', lon: -99.92, lat: 16.85, kind: 'port',
    rz: '马尼拉大帆船的太平洋彼岸终点，中国瓷器由此进入新西班牙与美洲市场。', re: 'The Pacific terminus of the Manila galleon, from which Chinese porcelain entered New Spain and American markets.' }
];
const ROUTES = [
  { from: 'jingdezhen', to: 'nanchang', kind: 'inland', label: '昌江—鄱阳湖' },
  { from: 'nanchang', to: 'guangzhou', kind: 'inland', label: '赣江—南岭' },
  { from: 'jingdezhen', to: 'guangzhou', kind: 'inland', label: '' },
  { from: 'guangzhou', to: 'macao', kind: 'sea', label: '' },
  { from: 'macao', to: 'malacca', kind: 'sea', label: '' },
  { from: 'malacca', to: 'calicut', kind: 'sea', label: '' },
  { from: 'calicut', to: 'hormuz', kind: 'sea', label: '' },
  { from: 'hormuz', to: 'aden', kind: 'sea', label: '' },
  { from: 'aden', to: 'jeddah', kind: 'sea', label: '' },
  { from: 'jeddah', to: 'cairo', kind: 'sea', label: '' },
  { from: 'cairo', to: 'venice', kind: 'sea', label: '' },
  { from: 'venice', to: 'lisbon', kind: 'sea', label: '' },
  { from: 'lisbon', to: 'seville', kind: 'sea', label: '' },
  { from: 'seville', to: 'amsterdam', kind: 'sea', label: '' },
  { from: 'yuegang', to: 'manila', kind: 'sea', label: '' },
  { from: 'manila', to: 'acapulco', kind: 'sea', label: '' },
  { from: 'yuegang', to: 'nagasaki', kind: 'sea', label: '' },
  { from: 'malacca', to: 'batavia', kind: 'sea', label: '' },
  { from: 'batavia', to: 'nagasaki', kind: 'sea', label: '' }
];
let PORT_CUR = 'jingdezhen';
let ROUTE_FILTER = 'all';

/* 航线所属海域：按端点归类（简化分层，用于筛选器） */
const OCEAN_OF = {
  jingdezhen: 'inland', nanchang: 'inland', guangzhou: 'sea', macao: 'sea',
  malacca: 'indian', calicut: 'indian', hormuz: 'indian', aden: 'indian',
  jeddah: 'indian', cairo: 'med', venice: 'med', lisbon: 'atlantic',
  seville: 'atlantic', amsterdam: 'atlantic', yuegang: 'pacific',
  manila: 'pacific', acapulco: 'pacific', nagasaki: 'pacific',
  batavia: 'indian'
};
const OCEANS = [
  { k: 'all', zh: '全部航线', en: 'All routes' },
  { k: 'inland', zh: '内河与国内', en: 'Inland' },
  { k: 'indian', zh: '印度洋', en: 'Indian Ocean' },
  { k: 'pacific', zh: '太平洋', en: 'Pacific' },
  { k: 'atlantic', zh: '大西洋', en: 'Atlantic' },
  { k: 'med', zh: '地中海', en: 'Mediterranean' }
];
function routeOcean(r) {
  return OCEAN_OF[r.to] || OCEAN_OF[r.from] || 'sea';
}
function renderRouteFilter() {
  document.getElementById('routeFilter').innerHTML = OCEANS.map(o => {
    const n = o.k === 'all' ? ROUTES.length
      : ROUTES.filter(r => routeOcean(r) === o.k).length;
    return `<button class="cat-chip ${ROUTE_FILTER === o.k ? 'on' : ''}"
      onclick="setRouteFilter('${o.k}')">${LANG === 'en' ? o.en : o.zh}
      <span class="chip-n">(${n})</span></button>`;
  }).join('');
}
function setRouteFilter(k) { ROUTE_FILTER = k; renderRouteFilter(); applyRouteFilter(); }
function applyRouteFilter() {
  document.querySelectorAll('#routeMap .route-arc').forEach((el, i) => {
    const r = ROUTES[i];
    const on = ROUTE_FILTER === 'all' || routeOcean(r) === ROUTE_FILTER;
    el.style.opacity = on ? '1' : '0.12';
    el.style.pointerEvents = on ? 'auto' : 'none';
  });
}

function projX(lon) { return (lon + 180) / 360 * 1000; }
function projY(lat) { return (90 - lat) / 180 * 520; }
function portById(id) { return PORTS.find(p => p.id === id); }

function buildRouteMap() {
  const svg = document.getElementById('routeMap');
  let s = '';
  /* 经纬网点阵 */
  for (let lon = -150; lon <= 150; lon += 30) {
    const x = projX(lon);
    s += `<line x1="${x}" y1="0" x2="${x}" y2="520" stroke="#D8DEE7" stroke-width="0.6" stroke-dasharray="2 4"/>`;
  }
  for (let lat = 60; lat >= -60; lat -= 30) {
    const y = projY(lat);
    s += `<line x1="0" y1="${y}" x2="1000" y2="${y}" stroke="#D8DEE7" stroke-width="0.6" stroke-dasharray="2 4"/>`;
  }
  /* 区域标注 */
  const regions = [
    [790, 96, 'ASIA', '亚洲'], [452, 62, 'EUROPE', '欧洲'], [575, 316, 'AFRICA', '非洲'],
    [688, 268, 'INDIAN OCEAN', '印度洋'], [862, 322, 'PACIFIC', '太平洋'],
    [272, 190, 'ATLANTIC', '大西洋'], [96, 96, 'N. AMERICA', '北美洲'], [232, 330, 'S. AMERICA', '南美洲'],
    [838, 388, 'OCEANIA', '大洋洲']
  ];
  regions.forEach(([x, y, en, zh]) => {
    s += `<text x="${x}" y="${y}" text-anchor="middle" font-family="Georgia" font-size="13" letter-spacing="4" fill="#B9C4D2">${en}</text>`;
    s += `<text x="${x}" y="${y + 17}" text-anchor="middle" font-family="sans-serif" font-size="9" letter-spacing="3" fill="#C6CFDA">${zh}</text>`;
  });
  /* 航线 */
  ROUTES.forEach((r, i) => {
    const a = portById(r.from), b = portById(r.to);
    const x1 = projX(a.lon), y1 = projY(a.lat), x2 = projX(b.lon), y2 = projY(b.lat);
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - Math.hypot(x2 - x1, y2 - y1) * 0.16;
    const cls = r.kind === 'inland' ? 'route-arc' : 'route-arc flow';
    s += `<path class="${cls}" data-i="${i}" d="M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}" stroke="${r.kind === 'inland' ? '#B08155' : '#5B7CA0'}"/>`;
  });
  /* 港口 */
  PORTS.forEach(p => {
    const x = projX(p.lon), y = projY(p.lat);
    const isSite = p.kind === 'site';
    const anchor = x > 800 ? 'end' : 'start';
    const dx = x > 800 ? -10 : 10;
    if (isSite) {
      s += `<g class="port" data-id="${p.id}" onclick="renderPort('${p.id}')">
        <rect x="${x - 6}" y="${y - 6}" width="12" height="12" transform="rotate(45 ${x} ${y})" fill="#1D3E5F" stroke="#fff" stroke-width="1.5"/>
        <text x="${x + dx}" y="${y - 8}" text-anchor="${anchor}" font-weight="700" font-size="12.5" fill="#12293D">${p.n}</text>
        <text x="${x + dx}" y="${y + 16}" text-anchor="${anchor}" font-size="9.5" fill="#8A867E" font-family="Georgia">${p.e}</text>
      </g>`;
    } else {
      s += `<g class="port" data-id="${p.id}" onclick="renderPort('${p.id}')">
        <circle cx="${x}" cy="${y}" r="5" fill="#1D3E5F" stroke="#fff" stroke-width="1.5"/>
        <text x="${x + dx}" y="${y + 4}" text-anchor="${anchor}" font-size="11" fill="#1D3E5F">${p.n}</text>
      </g>`;
    }
  });
  svg.innerHTML = s;
  applyRouteFilter();
}

function renderPort(id) {
  PORT_CUR = id;
  document.querySelectorAll('.port').forEach(g =>
    g.classList.toggle('on', g.dataset.id === id));
  const p = portById(id);
  const isOrigin = id === 'jingdezhen';
  const playBtn = isOrigin
    ? `<div class="pp-hint">${LANG === 'en' ? 'Origin — every voyage starts here' : '起点——所有航线从这里出发'}</div>`
    : `<button class="pp-play" onclick="playVoyage('${id}')">
         <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"/></svg>
         ${LANG === 'en' ? 'Play the voyage from Jingdezhen' : '播放航线：从景德镇到这里'}
       </button>`;
  document.getElementById('portPanel').innerHTML = `
    <div class="pp-kicker">${p.kind === 'site' ? 'Production Site · 产地' : (p.kind === 'hub' ? 'Inland Hub · 内河枢纽' : 'Port · 港口')}</div>
    <h3>${p.n}</h3><div class="h3-en">${p.e}</div>
    <p>${p.rz}</p><div class="p-en">${p.re}</div>
    <div class="port-tags"><span>经度 ${p.lon.toFixed(1)}°${p.lon >= 0 ? 'E' : 'W'}</span><span>纬度 ${Math.abs(p.lat).toFixed(1)}°${p.lat >= 0 ? 'N' : 'S'}</span></div>
    ${playBtn}`;
}

/* ---------- 3.1 航线播放：沿真实航线把青花从景德镇送到目标港 ---------- */
let VOYAGE_RAF = null;

function routeChain(destId) {
  if (destId === 'jingdezhen') return [];
  const adj = {};
  ROUTES.forEach((r, i) => {
    (adj[r.from] = adj[r.from] || []).push([r.to, i]);
    (adj[r.to] = adj[r.to] || []).push([r.from, i]);
  });
  const prev = { jingdezhen: null };
  const q = ['jingdezhen'];
  while (q.length) {
    const cur = q.shift();
    if (cur === destId) break;
    (adj[cur] || []).forEach(([nx, i]) => {
      if (!(nx in prev)) { prev[nx] = [cur, i]; q.push(nx); }
    });
  }
  if (!(destId in prev)) return [];
  const chain = [];
  let cur = destId;
  while (prev[cur]) { chain.unshift(prev[cur][1]); cur = prev[cur][0]; }
  return chain;
}

function stopVoyage() {
  if (VOYAGE_RAF) { cancelAnimationFrame(VOYAGE_RAF); VOYAGE_RAF = null; }
  const m = document.getElementById('voyageMarker');
  if (m) m.remove();
  document.querySelectorAll('#routeMap .route-arc.voyage-on')
    .forEach(p => p.classList.remove('voyage-on'));
}

function playVoyage(destId) {
  stopVoyage();
  const svg = document.getElementById('routeMap');
  const idx = routeChain(destId);
  if (!svg || !idx.length) return;
  const paths = idx.map(i => svg.querySelector(`.route-arc[data-i="${i}"]`)).filter(Boolean);
  if (!paths.length) return;
  const lens = paths.map(p => p.getTotalLength());
  const totalLen = lens.reduce((a, b) => a + b, 0);
  paths.forEach(p => p.classList.add('voyage-on'));
  const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  marker.id = 'voyageMarker';
  marker.setAttribute('r', '6.5');
  svg.appendChild(marker);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const put = (x, y) => { marker.setAttribute('cx', x); marker.setAttribute('cy', y); };
  if (reduce) {                     /* 尊重「减弱动效」：只高亮整条航线，不逐帧移动 */
    const p0 = paths[0].getPointAtLength(0);
    put(p0.x, p0.y);
    return;
  }
  const DUR = 1100 + 240 * paths.length;
  const t0 = performance.now();
  const step = now => {
    const k = Math.min(1, (now - t0) / DUR);
    const d = k * totalLen;
    let acc = 0, seg = paths.length - 1;
    for (let i = 0; i < paths.length; i++) {
      if (d <= acc + lens[i]) { seg = i; break; }
      acc += lens[i];
    }
    const pt = paths[seg].getPointAtLength(Math.max(0, Math.min(lens[seg], d - acc)));
    put(pt.x, pt.y);
    if (k < 1) VOYAGE_RAF = requestAnimationFrame(step);
    else { VOYAGE_RAF = null; setTimeout(stopVoyage, 1500); }
  };
  VOYAGE_RAF = requestAnimationFrame(step);
}

/* ---------- 3b. 跨材质转译网络（原创可视化） ---------- */
const MECH = [
  { k: 'pre',  zh: '技术前置', en: 'Technical precursor', c: '#9AA9B8' },
  { k: 'mat',  zh: '原料输入', en: 'Material supply',     c: '#B08155' },
  { k: 'imi',  zh: '直接模仿', en: 'Direct imitation',    c: '#3E6E9E' },
  { k: 'sub',  zh: '材质替代', en: 'Material substitution', c: '#6B8E6B' },
  { k: 'rep',  zh: '图像记录', en: 'Representation',      c: '#7B6B8E' },
  { k: 'dem',  zh: '需求反塑', en: 'Demand shaping',      c: '#C08A5E' },
];
const TNET = {
  nodes: [
    { id: 'cizhou', x: 132, y: 108, r: 21, zh: '磁州窑', en: 'Cizhou kilns',
      sub_zh: '白地黑花 · 铁料', sub_en: 'White slip, iron pigment', era: '宋—元' },
    { id: 'jizhou', x: 96,  y: 268, r: 21, zh: '吉州窑', en: 'Jizhou kilns',
      sub_zh: '釉下彩绘', sub_en: 'Underglaze painting', era: '宋—元' },
    { id: 'jd',     x: 348, y: 252, r: 36, zh: '景德镇 · 青花', en: 'Jingdezhen',
      sub_zh: '高岭土瓷胎 · 釉下钴蓝', sub_en: 'Porcelain, underglaze cobalt', era: '元—清' },
    { id: 'persia', x: 360, y: 62,  r: 20, zh: '波斯 · 钴料', en: 'Persian cobalt',
      sub_zh: '苏麻离青等进口料', sub_en: 'Imported cobalt ores', era: '14–15 世纪' },
    { id: 'arita',  x: 652, y: 118, r: 24, zh: '有田 · 伊万里', en: 'Arita / Imari',
      sub_zh: '瓷胎 · 青花 + 釉上红金', sub_en: 'Porcelain, blue + overglaze red', era: '17–18 世纪' },
    { id: 'sea',    x: 556, y: 300, r: 20, zh: '越南 / 泰国青花', en: 'Vietnamese & Thai blue-and-white',
      sub_zh: '区域仿烧', sub_en: 'Regional imitations', era: '15–16 世纪' },
    { id: 'delft',  x: 862, y: 236, r: 25, zh: '代尔夫特陶', en: 'Delftware',
      sub_zh: '锡釉陶 · 白釉蓝彩', sub_en: 'Tin-glazed earthenware', era: '17 世纪' },
    { id: 'wedge',  x: 886, y: 402, r: 23, zh: '韦奇伍德 · 碧玉炻器', en: 'Wedgwood jasperware',
      sub_zh: '炻器 · 蓝入胎体', sub_en: 'Stoneware, blue through the body', era: '18 世纪' },
    { id: 'puebla', x: 522, y: 470, r: 21, zh: '普埃布拉陶', en: 'Puebla talavera',
      sub_zh: '锡釉陶 · 新西班牙', sub_en: 'Tin-glazed, New Spain', era: '17–18 世纪' },
    { id: 'still',  x: 766, y: 556, r: 20, zh: '荷兰静物画', en: 'Dutch still life',
      sub_zh: '入画 · 图像记录', sub_en: 'Painted record', era: '17 世纪' },
    { id: 'order',  x: 322, y: 480, r: 20, zh: '欧洲定制 · 来样加工', en: 'European commissions',
      sub_zh: '纹样订单', sub_en: 'Patterns ordered', era: '18 世纪' },
    { id: 'return', x: 150, y: 430, r: 19, zh: '外销瓷回流', en: 'Export ware returning',
      sub_zh: '市场回流', sub_en: 'Return flows', era: '18–19 世纪' },
  ],
  edges: [
    ['cizhou', 'jd', 'pre'], ['jizhou', 'jd', 'pre'],
    ['persia', 'jd', 'mat'],
    ['jd', 'arita', 'imi'], ['jd', 'sea', 'imi'],
    ['jd', 'delft', 'sub'], ['arita', 'delft', 'imi'],
    ['delft', 'wedge', 'sub'],
    ['jd', 'puebla', 'sub'],
    ['jd', 'still', 'rep'], ['delft', 'still', 'rep'],
    ['order', 'jd', 'dem'], ['jd', 'order', 'dem'],
    ['jd', 'return', 'dem'],
  ],
};

let TNET_CUR = null;
function setTransView(v) {
  const chain = document.getElementById('transChain'), net = document.getElementById('transNet');
  const bc = document.getElementById('tvChain'), bn = document.getElementById('tvNet');
  const on = v === 'net';
  chain.hidden = on; net.hidden = !on;
  bc.classList.toggle('on', !on); bn.classList.toggle('on', on);
  if (on) renderTransNet();
}
function tnetNode(id) { return TNET.nodes.find(n => n.id === id); }
function renderTransNet() {
  const W = 1000, H = 620, N = TNET.nodes, E = TNET.edges;
  const mech = k => MECH.find(m => m.k === k);
  let edges = '', nodes = '';
  E.forEach(([f, t, k], i) => {
    const a = tnetNode(f), b = tnetNode(t), m = mech(k);
    const mx = (a.x + b.x) / 2 + (b.y - a.y) * 0.16;
    const my = (a.y + b.y) / 2 - (b.x - a.x) * 0.16;
    const active = !TNET_CUR || TNET_CUR === f || TNET_CUR === t;
    edges += `<g class="tn-edge" data-m="${k}" opacity="${active ? 0.85 : 0.14}">
      <path d="M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}" fill="none"
        stroke="${m.c}" stroke-width="${active ? 2.4 : 1.4}" stroke-linecap="round"/>
      <text x="${mx}" y="${my - 6}" class="tn-elabel" fill="${m.c}"
        opacity="${active ? 0.95 : 0.1}">${LANG === 'en' ? m.en : m.zh}</text>
    </g>`;
  });
  N.forEach(n => {
    const on = TNET_CUR === n.id, dim = TNET_CUR && !on &&
      !E.some(([f, t]) => (f === TNET_CUR && t === n.id) || (t === TNET_CUR && f === n.id));
    nodes += `<g class="tn-node${on ? ' on' : ''}" opacity="${dim ? 0.28 : 1}"
        onclick="transNetPick('${n.id}')" tabindex="0" role="button"
        onkeydown="if(event.key==='Enter'||event.key===' '){transNetPick('${n.id}')}"
        aria-label="${n.zh}">
      <circle cx="${n.x}" cy="${n.y}" r="${n.r + 7}" fill="${n.id === 'jd' ? '#12293D' : '#1D3E5F'}"
        opacity=".10"/>
      <circle cx="${n.x}" cy="${n.y}" r="${n.r}"
        fill="${n.id === 'jd' ? '#12293D' : '#FFFFFF'}"
        stroke="${n.id === 'jd' ? '#B08155' : '#3E6E9E'}" stroke-width="${on ? 4 : 2}"/>
      <text x="${n.x}" y="${n.y + 4}" class="tn-nlabel"
        fill="${n.id === 'jd' ? '#FFFFFF' : '#12293D'}">${LANG === 'en' ? n.en.split(' ')[0] : n.zh.split(' ')[0]}</text>
      <text x="${n.x}" y="${n.y + n.r + 20}" class="tn-nsub">${LANG === 'en' ? n.sub_en : n.sub_zh}</text>
    </g>`;
  });
  const legend = MECH.map(m => `<span class="tn-lg"><i style="background:${m.c}"></i>${LANG === 'en' ? m.en : m.zh}</span>`).join('');
  let detail = `<p class="tn-hint">${LANG === 'en'
    ? 'Click any node to see how that tradition translated, or was translated by, the others.'
    : '点击任一节点，查看它与其它传统之间的转译关系（作为源头或作为接受方）。'}</p>`;
  if (TNET_CUR) {
    const n = tnetNode(TNET_CUR);
    const asFrom = E.filter(([f]) => f === TNET_CUR);
    const asTo = E.filter(([, t]) => t === TNET_CUR);
    const li = (arr, dir) => arr.map(([f, t, k]) => {
      const o = tnetNode(dir === 'out' ? t : f), m = MECH.find(x => x.k === k);
      return `<li><b style="color:${m.c}">${LANG === 'en' ? m.en : m.zh}</b>
        ${dir === 'out' ? '→' : '←'} ${LANG === 'en' ? o.en : o.zh}</li>`;
    }).join('');
    detail = `<div class="tn-detail">
      <h4>${LANG === 'en' ? n.en : n.zh} <span>${n.era}</span></h4>
      <p class="tn-mat">${LANG === 'en' ? n.sub_en : n.sub_zh}</p>
      ${asFrom.length ? `<div class="tn-col"><b>${LANG === 'en' ? 'As a source' : '作为源头'}</b><ul>${li(asFrom, 'out')}</ul></div>` : ''}
      ${asTo.length ? `<div class="tn-col"><b>${LANG === 'en' ? 'As a recipient' : '作为接受方'}</b><ul>${li(asTo, 'in')}</ul></div>` : ''}
      <button class="tn-clear" onclick="transNetPick(null)">${LANG === 'en' ? 'Clear' : '清除选择'}</button>
    </div>`;
  }
  document.getElementById('transNet').innerHTML = `
    <div class="tn-legend">${legend}</div>
    <svg viewBox="0 0 ${W} ${H}" class="tn-svg" role="img"
      aria-label="${LANG === 'en' ? 'Network of transmaterial translations' : '跨材质转译网络图'}">
      ${edges}${nodes}
    </svg>
    ${detail}`;
}
function transNetPick(id) { TNET_CUR = id; renderTransNet(); }

/* ---------- 4. 长文 ---------- */
const READINGS = [
  {
    id: 'r1', tz: `周一清晨的瓷片市场`, te: `A Monday Morning at the Shard Market`, src: `团队原创长文 · Team essay`,
    quote: `在景德镇，周一清晨的古玩市场是一场关于“碎片”的集会：地上铺着布，布上摊着碗底、盘沿、一小块一小块的青花。它们大多并不精美，也谈不上完整。`,
    comment: `我们把这篇随笔放在全书开头，是想先立一个问题：为什么研究一个瓷都，要从最不值钱的碎片讲起？
碎片有一个好处——它同时属于两端。它是窑场里的废品，是烧成失败、变形、沾砂、开片过大而被砸掉的产物；它也是消费的终点，是从万里之外辗转抵达、最终碎在某个人手里的器物残骸。一块碎片把「生产」与「消费」这两条通常分开叙述的线索，压进了同一个物件里。
在景德镇的市场里，你可以按釉色、按年代、按款识来挑碎片，也可以按「它曾经属于什么样的器物」来挑。后一种挑法需要想象力：一块带龙纹的碗底，可能来自御窑的次品；一块带开光边框的青花，可能来自外销的克拉克盘。碎片的价格从来不取决于美，而取决于它能否为某个更大的叙事提供证据。
这大概就是历史学家在碎片前俯下身的原因：他们要的不是完整，而是证据。`,
    en: `<b>Essay (team-written)</b>`,
    en1: `<b>Essay (team-written)</b>The opening essay starts from the least valuable object in the story: a bag of ceramic shards on a Monday-morning market floor in Jingdezhen.`,
    en2: `<b>Why start here</b> A shard belongs to both ends of a long chain at once. It is kiln waste — misshapen, discoloured, cracked in the firing and smashed — and it is also the endpoint of consumption, the remains of an object that travelled thousands of miles before breaking in someone's hands. Putting both ends in one object is what lets a local market speak about a global trade.`,
    en3: `<b>What to look for</b> In the market, pieces are sorted by glaze, period, reign mark — and also by what they can prove. A shard with a dragon roundel may come from a rejected imperial piece; a panelled border may come from an export dish. Its price tracks evidence, not beauty.`,
    kt: ["青花", "开光", "克拉克瓷", "窑废品"],
    en: `<b>English synopsis (team-written)</b>The chapter opens at a Monday morning antiques market in Jingdezhen, where vendors sell bags of ceramic shards. From this scene the book unfolds its argument: Jingdezhen\'s rise as the foremost ceramic producer of the early modern world, linking a local market to global circulations of objects, people and ideas. A ninth-century Arab dhow wreck off Belitung with 70,000 ceramics proves the antiquity of this demand — yet only a few blue-and-white dishes were aboard; mass production of blue-and-white still lay five centuries ahead. <b>The argument</b>Jingdezhen's rise cannot be told as a local story. The Belitung wreck, found by fishermen in 1998 with some 70,000 ceramics aboard a ninth-century dhow, shows that the Indian Ocean trade in Chinese ceramics long predates blue-and-white — yet only a handful of those pieces carry blue decoration. Mass production of blue-painted white ware in China would take another five hundred years. What sits in a vendor's cloth bag on a Monday morning is therefore the visible end of a chain that begins on the Chang River: upstream lie the mountains with their clay, firewood and glaze ash; downstream lie Poyang Lake, the Yangtze, the Grand Canal and the empire's ports. <b>What to look for</b>The chapter's method is not anecdote but scale: it moves from a provincial market to the Indian Ocean and back, until a heap of broken bowls becomes evidence of a global past.`,
    img: 'assets/scenes/s07_shards.jpg', capz: '图：瓷片市场 · 团队 AI 影像静帧', cape: 'Image: the shard market · still from team AI footage',
    kt: ['青花', '景德镇', '昌江', '独桅帆船', '早期近代世界']
  },
  {
    id: 'r2', tz: `蓝色的来历：钴料与两种旧技术`, te: `Where the Blue Came From`, src: `团队原创长文 · Team essay`,
    quote: `青花不是凭空出现的。在白胎上用蓝色绘画，需要三样东西同时到位：能烧到高温的瓷胎、能承受高温的钴料、以及把二者结合起来的釉下绘工艺。`,
    comment: `先说胎。景德镇的优势不是某一种土，而是一种配比：瓷石提供可塑性与助熔成分，高岭土提供铝质骨架，两者按比例配合，才能既烧得透、又不塌。这套被后人称为「二元配方」的做法，让大型器物的烧成成为可能。
再说蓝。钴在中东有更早的使用传统，作为一种呈色剂，它比铁更难驾驭：温度、气氛、纯度稍有偏差，颜色就会从明亮变成灰暗或发黑。早期青花常见的黑色结晶斑，多半不是缺陷，而是钴料中铁与锰比例留下的痕迹。
最后是工艺。把钴料绘在未烧的坯体上、再罩一层透明釉、一次高温烧成——蓝色被封在釉下，永不磨损。这条路子并非景德镇首创：北方磁州窑在化妆土上绘黑花，江西吉州窑在坯体上作釉下彩绘，都已经在做「釉下绘画」这件事，只是呈色剂是铁而不是钴。工匠南下、技术与瓷土相遇，才有了白底蓝花。
所以「青花的诞生」更像一次汇流，而不是一次发明。`,
    en: `<b>Essay (team-written)</b>`,
    en1: `<b>Essay (team-written)</b>Blue-and-white required three things to arrive at once: a body that could take high temperature, a cobalt pigment that could survive it, and an underglaze painting technique that joined the two.`,
    en2: `<b>The convergence</b> Jingdezhen's advantage was not a single clay but a ratio: porcelain stone for plasticity and flux, kaolin for an alumina skeleton. Cobalt was harder to control than iron — early dark crystallised spots are usually traces of the iron and manganese in the ore, not defects. And underglaze painting already existed: Cizhou painted in iron on slip, Jizhou painted underglaze. Craft migration met local clay, and the blue-on-white vocabulary appeared.`,
    en3: `<b>What to look for</b> Treat the birth of blue-and-white as a confluence rather than an invention: technique from the north and south, pigment from afar, body from the river valley.`,
    kt: ["钴料", "高岭土", "二元配方", "釉下彩绘", "窑口"],
    en: `<b>English synopsis (team-written)</b>The two David Vases in the Percival David Collection, inscribed "Zhizheng eleventh year" (1351), provide irrefutable dating for the excellence of mid-fourteenth-century blue-and-white. Their decorative bands — chrysanthemum scrolls, plantain leaves and floral chains — closely parallel Yuan-dynasty Jizhou wares, suggesting that craftsmen who had once worked at Jizhou brought their repertoire south to Jingdezhen, where it met local clay and kilns. <b>The argument</b>The maturity of blue-and-white was not an isolated technical revolution but the meeting of people and materials in motion. The white-bodied, iron-painted wares of Cizhou and the underglaze-painted wares of Jizhou travelled south with migrating craftsmen into Jiangxi, where they met Jingdezhen's porcelain stone and kiln technology. The vases' layered bands — chrysanthemum scroll, pointed plantain leaves, and the dated inscription around the neck — are read here alongside Jizhou conventions, even though Jizhou potters worked with iron minerals rather than cobalt. <b>What to look for</b>The 1351 inscription is one of the very few fixed points in the chronology. Almost everything dated around it is dated by comparison with it — which is why these vases matter far beyond their beauty.`,
        img: 'assets/artifacts/g02_meiping_xiaohe.jpg', capz: '图：元青花人物图梅瓶（示意）· 团队 AI 图像', cape: 'Image: Yuan dynasty narrative meiping (illustrative) · team AI image',
    kt: ['大维德瓶', '青花', '吉州窑', '钴料', '磁州窑']
  },
  {
    id: 'r3', tz: `“景德镇”是一个网络，不是一个点`, te: `A Network, Not a Point`, src: `团队原创长文 · Team essay`,
    quote: `地图上，景德镇只是昌江边的一个镇。但在讨论陶瓷生产时，它更像一张网：沿河分布着几十处窑场，各自烧造、彼此竞争，也彼此供给。`,
    comment: `这张网有三层。
第一层是行政。省、府、县、镇，层层向下，镇处在帝国行政体系的末梢。有意思的是：一个如此庞大的产业，在地方志里往往只占「物产」条下几行字，与药材、山货并列。书写的不对称，本身就是一个值得注意的历史事实。
第二层是地理。三面环山提供原料与燃料，一条昌江负责运输：逆流而上进山取土，顺流而下经鄱阳湖入长江，再经大运河或海路通往帝国的港口。地理决定了这座镇的成本结构，也决定了它的市场半径。
第三层是考古。窑址不是均匀分布的，而是沿河成串；湖田、瑶里、银坑坞这些地名，对应着不同时期的生产重心。考古发掘提供的不是故事，而是密度：哪里出土的废品最多，哪里就最可能是主力窑场。
三层叠起来看，才能解释一个看似矛盾的现象：帝国边角上的一个镇，却支配着全球的高端瓷器市场。`,
    en: `<b>Essay (team-written)</b>`,
    en1: `<b>Essay (team-written)</b>On a map Jingdezhen is one town on the Chang River. As a production system it is a network of dozens of kiln sites that competed with and supplied one another.`,
    en2: `<b>Three layers</b> Administrative (province, prefecture, county, town — the town at the far end of the imperial hierarchy, its vast industry compressed into a few lines under 'local products' in a gazetteer); geographical (mountains for clay and fuel, one river for transport, downstream to the Yangtze and the sea); archaeological (kiln sites strung along the river, their density a proxy for output).`,
    en3: `<b>What to look for</b> The written record is thin precisely where the industry was thick — an asymmetry worth noticing rather than glossing over.`,
    kt: ["御窑", "民窑", "昌江", "鄱阳湖"],
    en: `<b>English synopsis (team-written)</b>Jingdezhen was never a single town but a network of over thirty kiln sites across the region. The chapter juxtaposes three ways of imagining space: the administrative hierarchy of province-prefecture-county-town; the physical geography of mountains and river that supplied kaolin and firewood; and the archaeological network of production sites — Hutian, Yaoli, Yinkangwu — revealed only slowly by excavation. A 1525 gazetteer ranks the wares of Jingdezhen, Hutian and Macangdang, listing porcelain alongside medicinal herbs among local products. <b>The argument</b>'Jingdezhen' names a network, not a town. More than thirty kiln sites worked across the region from perhaps the eighth century onwards; the Ming imperial kilns stood in the centre of the town, with folk kilns such as Shibadu and Guanyinge around them. Three ways of imagining that space are set side by side: the administrative hierarchy of province, prefecture, county and town; the physical geography of encircling mountains and a transporting river; and the archaeological network of kiln sites along the Chang. <b>What to look for</b>A 1525 Jiangxi gazetteer lists porcelain under 'local products' beside medicinal roots — a striking measure of how little written attention this vast industry attracted at the time.`,
        img: 'assets/scenes/s01_kiln.jpg', capz: '图：葫芦窑开窑 · 团队 AI 影像静帧', cape: 'Image: opening the gourd kiln · still from team AI footage',
    kt: ['御窑厂', '民窑', '湖田窑', '昌江', '高岭土']
  },
  {
    id: 'r4', tz: `白银、开光与全球口味`, te: `Silver, Panels and Global Taste`, src: `团队原创长文 · Team essay`,
    quote: `十七世纪初，一艘艘帆船把瓷器运出中国，把白银运进来。货物的方向与银的方向相反，构成了一条完整的回路。`,
    comment: `这条回路解释了为什么外销瓷的装饰会变。当明代赋役折银征收之后，白银成了刚需；而美洲的银矿经由太平洋或绕道欧洲，最终有一部分落在中国的市场上。瓷器是这条链上最合适的回程货：它体积可控、单价可分层、不怕压舱。
买家的口味反过来塑造了产品。在欧洲，瓷器常与玻璃器、金属餐具一起陈列在专门的房间；在新西班牙，明亮的蓝色尤其受欢迎。于是出现了一种便于识别的装饰方案：把器表切成若干独立的小画面，每个画面里放一个题材——花、鸟、人物、吉祥物。这种被称为「开光」的构图，既方便批量绘制，又方便远方买家一眼认出「这是中国来的东西」。
荷兰东印度公司的档案告诉我们另一半故事：他们不只在买，还在下单。尺寸、数量、纹样，都可以写在订单上。供给与需求之间，隔着半个地球，却已经开始对话。
我们把这个过程叫「翻译」：不是语言的翻译，而是把一种视觉习惯，翻译进另一种生活。`,
    en: `<b>Essay (team-written)</b>`,
    en1: `<b>Essay (team-written)</b>In the early seventeenth century sailings carried porcelain out of China and silver in — two opposite flows completing one circuit.`,
    en2: `<b>Why decoration changed</b> Once Ming taxes were commuted into silver, the metal became a necessity; porcelain was the ideal return cargo — compact, priceable in tiers, and safe as ballast. Buyers' tastes then shaped the product: panels dividing the surface into legible fields made batch painting easier and made 'this came from China' recognisable at a glance. Company records show the other half of the story — not just buying but ordering.`,
    en3: `<b>What to look for</b> Read export decoration as a translation of visual habit from one life into another, not simply as imitation.`,
    kt: ["克拉克瓷", "开光", "VOC", "白银"],
    en: `<b>English synopsis (team-written)</b>Chinese merchants carried porcelain to Malacca, Macao and Manila, returning with silver from Potosí at a moment when Ming taxes were commuted to silver. In Habsburg Spain porcelain was stored alongside glass and tableware; in New Spain its bright tones were coveted, especially with easily legible scenes of animals in landscapes. The panelled wares that resulted became known as kraak. With the VOC\'s founding in 1602, porcelain became a key commodity of the Dutch East India Company\'s trade. <b>The argument</b>Demand shaped production. Chinese merchants carried porcelain to Malacca, Macao and Manila and sailed home with silver from Potosí, at a moment when Ming taxes were commuted into silver and demand for the metal was unprecedented. Iberian consumers wanted recognisable scenes framed within abstract borders; the panelled, 'kraak' composition — a surface divided into independent decorative spaces — answered that taste and travelled quickly into the New World. <b>What to look for</b>The VOC, founded in 1602 with investors from all seven provinces, inherited Portuguese route knowledge and reached Banten by way of the Cape in 1595. Spices were the first objective; porcelain soon became a formidable competitor inside the same trade.`,
        img: 'assets/artifacts/g05_kraak_pan.jpg', capz: '图：克拉克瓷盘（示意）· 团队 AI 图像', cape: 'Image: kraak dish (illustrative) · team AI image',
    kt: ['克拉克瓷', '马尼拉大帆船', 'VOC', '外销瓷', '开光']
  },
  {
    id: 'r5', tz: `代尔夫特的误读：当材质被换掉`, te: `Delft: When the Material Changes`, src: `团队原创长文 · Team essay`,
    quote: `荷兰人学会了画青花，却造不出瓷。于是他们把同样的问题换了一个答案：用一种更白、更软的胎，配上锡釉，再把蓝色画上去。`,
    comment: `这就是代尔夫特陶的起点。它不是「假的瓷器」，而是一次<b>材质层面的翻译</b>：
胎从高温瓷换成低温锡釉陶，烧成温度降了，成本也降了；
白不再来自胎体的透白，而来自一层不透明的锡釉——这层釉必须够白、够匀，否则蓝色会发脏；
蓝色仍然是钴，但画法变了：在釉上画，颜色浮在表面，可以更浓、更自由，也更难持久。
换掉材质之后，很多原本内在于瓷的东西消失了：透光性、极高的硬度、釉下的耐久。而新的东西出现了：可以量产、可以做大件、可以迅速响应市场。
我们把这个案例放在作品的转译链里，因为它最能说明一件事：<b>翻译从来不是等价的，它是有代价的取舍。</b>代尔夫特保留了「白底蓝花」这个视觉承诺，代价是放弃了瓷的物理属性；它换来了市场，却没有换来材质。
再往后一步，英国的炻器实验把蓝色直接做进了胎体——又是一次材质换位，又是一次取舍。`,
    en: `<b>Essay (team-written)</b>`,
    en1: `<b>Essay (team-written)</b>Dutch potters learned to paint blue-and-white but could not make porcelain — so they answered the same question with a different material: a whiter, softer body, a tin glaze, and cobalt painted on top.`,
    en2: `<b>A material translation</b> Firing temperature fell, cost fell; whiteness no longer came from the body but from an opaque tin glaze that had to be even or the blue went muddy. What was lost: translucency, hardness, underglaze permanence. What was gained: mass production, large pieces, fast response to the market.`,
    en3: `<b>What to look for</b> This is the strongest case in the book for the claim that translation is never equivalent — it keeps the visual promise and pays for it with physical property.`,
    kt: ["代尔夫特陶", "锡釉", "炻器", "材质替代"],
    en: `<b>English synopsis (team-written)</b>The epilogue returns to the shard market. Among its goods are kiln wasters — vessels that discoloured or collapsed in the fierce heat of the kiln, including the giant 86-centimetre "fish bowls" ordered annually by the emperor. Broken and buried beside the kilns or thrown into the river, these fragments are both the endpoint of global consumption and the material evidence a global past has left for the present. <b>The argument</b>The market that seemed an odd place to begin turns out to be the right place to end. Its goods are largely kiln wasters: pieces that discoloured or collapsed in the fierce heat, including the 86-centimetre 'fish bowls' ordered annually by the emperor in the mid-sixteenth century, which toppled under their own weight and brought down their neighbours in the stack. Wasters were smashed and buried beside the kilns, or thrown into the river to be carried away. <b>What to look for</b>The book begins with fragments and ends with fragments. Arriving through rivers, markets and shipping routes, they are at once the endpoint of global consumption and the material evidence a global past leaves to the present.`,
        img: 'assets/scenes/s07_shards.jpg', capz: '图：瓷片市场 · 团队 AI 影像静帧', cape: 'Image: the shard market · still from team AI footage',
    kt: ['窑废品', '瓷片市场', '鱼缸', '御窑', '物质文化']
  },
  {
    id: 'r6', tz: `碎片能告诉我们什么`, te: `What Fragments Can Tell Us`, src: `团队原创长文 · Team essay`,
    quote: `一篇以碎片开头的作品，也应该以碎片收尾。问题不是碎片有多美，而是碎片能证明什么。`,
    comment: `碎片的第一种价值是<b>断代</b>。同一地层、同一窑址出土的残片，给出了器形与纹样的时间序列；有明确纪年的器物，则把这条序列锚定在具体年份上。少数带铭文的完整器，因此具有远超其审美价值的意义。
碎片的第二种价值是<b>证伪</b>。传世品可能被修补、被改款、被重新配对；而窑址出土的废品不会说谎，它连缺陷都留在原地——变形、粘砂、窑裂、发色失败。研究成品率，比研究精品更能看清一个产业的实际运转。
碎片的第三种价值是<b>连接</b>。一块碎片可能同时携带产地信息（胎釉配方）、流通信息（沉船或遗址）与消费信息（使用痕迹）。把这些线索连起来，就是一部物质文化的微观史。
所以本作品选择从一个市场、一堆碎片开始：不是因为它们完整，而是因为它们诚实。历史学家在碎片里辨认的，从来不是美，而是流动的轨迹。`,
    en: `<b>Essay (team-written)</b>`,
    en1: `<b>Essay (team-written)</b>A work that opens with fragments should close with them. The question is not how beautiful they are but what they can prove.`,
    en2: `<b>Three kinds of evidence</b> Dating: stratified sherds from one kiln give a sequence, and dated pieces anchor it. Falsification: transmitted objects can be repaired, re-marked and re-paired, while kiln waste keeps its defects in place — deformation, adhering grit, firing cracks, failed colour — so yield studies say more about an industry than masterpieces do. Connection: one shard can carry provenance, circulation and use at once.`,
    en3: `<b>What to look for</b> We start from a market and a heap of shards not because they are complete but because they are honest.`,
    kt: ["窑废品", "断代", "沉船", "物质文化"],
    en: `<b>English synopsis (team-written)</b>The imperial kilns depended on the Ming artisan-household system: rotational and resident craftsmen, plus large numbers of labourers for mining, pounding and hauling. Labour was divided with great precision across throwing, painting in cobalt blue, firing and opening the kiln. Tang Ying, the Qing dynasty\'s most famous kiln superintendent, insisted on uniformity — some moulds repaired, some newly made — revealing that mass production was as much a problem of management as of technique. <b>The argument</b>The secret of the imperial kilns lay less in clay and fire than in people. The Ming artisan-household system bound craftsmen to the kilns: rotational craftsmen served in turns, resident craftsmen lived at the works, and large numbers of labourers mined clay, pounded it and hauled materials. Throwing, painting in cobalt, firing and opening the kiln were separate trades, each with its own expertise. <b>What to look for</b>This is a system of precision rather than individual genius. The terminology module of this publication collects the vocabulary of that division of labour (轮班匠 rotational service, 住坐匠 resident service).`,
        img: 'assets/scenes/s08_cobalt.jpg', capz: '图：青花料落笔 · 团队 AI 影像静帧', cape: 'Image: the cobalt brush touches the body · still from team AI footage',
    kt: ['轮班匠', '住坐匠', '督陶官', '唐英', '御窑']
  }
];
let READ_CUR = 0;

function renderReadTabs() {
  const box = document.getElementById('readTabs');
  box.innerHTML = '';
  READINGS.forEach((r, i) => {
    const b = document.createElement('button');
    b.className = 'read-tab' + (i === 0 ? ' on' : '');
    b.textContent = `${i + 1}. ${r.tz}`;
    b.onclick = () => renderReading(i);
    box.appendChild(b);
  });
}
function renderReading(i) {
  READ_CUR = i;
  document.querySelectorAll('.read-tab').forEach((b, j) =>
    b.classList.toggle('on', j === i));
  const r = READINGS[i];
  document.getElementById('readBody').innerHTML = `
    <div class="read-src"><span>${r.src}</span><span>Original essay · 团队原创长文</span></div>
    <h3>${r.tz}</h3><div class="h3-en">${r.te}</div>
    <div class="read-quote"><span class="rq-label">开篇 · Opening</span><p>${r.quote}</p></div>
    <div class="read-comment"><span class="rc-label">团队长文 · Team essay</span><p>${r.comment}</p></div>
    ${r.img ? `<figure class="read-fig"><img src="${r.img}" alt="${r.capz}" loading="lazy" onerror="this.closest('.read-fig').style.display='none'"><figcaption>${LANG === 'en' ? r.cape : r.capz}</figcaption></figure>` : ''}
    <div class="read-en-syn">${(r.en1 || r.en) + (r.en2 ? " " + r.en2 : "") + (r.en3 ? " " + r.en3 : "")}</div>
    <div class="key-terms"><span class="kt-label">本篇术语 · Key terms</span>
      ${r.kt.map(t => `<span class="kt" onclick="jumpToTerm('${t}')">${t}</span>`).join('')}
    </div>`;
}
function jumpToTerm(t) {
  document.getElementById('terms').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const inp = document.getElementById('termSearch');
    inp.value = t; renderTerms();
  }, 500);
}

/* ---------- 5. 术语库 ---------- */
const CATS = [
  { key: 'basic', zh: '基础概念', en: 'Basics' },
  { key: 'cobalt', zh: '钴料体系', en: 'Cobalt' },
  { key: 'glaze', zh: '釉色', en: 'Glazes' },
  { key: 'craft', zh: '工艺窑炉', en: 'Craft & Kilns' },
  { key: 'deco', zh: '彩饰体系', en: 'Decoration' },
  { key: 'shape', zh: '器型', en: 'Shapes' },
  { key: 'motif', zh: '装饰母题', en: 'Motifs' },
  { key: 'kiln', zh: '窑口名物', en: 'Kilns & Names' },
  { key: 'trade', zh: '贸易流通', en: 'Trade' },
  { key: 'export', zh: '外销瓷', en: 'Export Ware' },
  { key: 'econ', zh: '度量经济', en: 'Measures & Economy' },
  { key: 'labor', zh: '劳动行政', en: 'Labour & Admin' },
  { key: 'symbol', zh: '吉祥寓意', en: 'Symbolism' },
  { key: 'refs', zh: '中文文献反查', en: 'Chinese Titles' }
];
let CAT_CUR = 'all';

function renderCats() {
  const box = document.getElementById('catChips');
  let h = `<button class="cat-chip ${CAT_CUR === 'all' ? 'on' : ''}" onclick="setCat('all')">全部 All <span class="chip-n">(${GLOSSARY.length})</span></button>`;
  CATS.forEach(c => {
    const n = GLOSSARY.filter(g => g.key === c.key).length;
    if (!n) return;
    h += `<button class="cat-chip ${CAT_CUR === c.key ? 'on' : ''}" onclick="setCat('${c.key}')">${LANG === 'en' ? c.en : c.zh} <span class="chip-n">(${n})</span></button>`;
  });
  box.innerHTML = h;
}
function setCat(k) { CAT_CUR = k; renderCats(); renderTerms(); }

function renderTerms() {
  const q = document.getElementById('termSearch').value.trim().toLowerCase();
  let list = GLOSSARY;
  if (CAT_CUR !== 'all') list = list.filter(g => g.key === CAT_CUR);
  if (q) list = list.filter(g =>
    g.zh.toLowerCase().includes(q) || g.en.toLowerCase().includes(q) ||
    ((LANG === 'en' && g.ne ? g.ne : g.note) || '').toLowerCase().includes(q));
  document.getElementById('termCount').textContent = LANG === 'en' ? `${list.length} / ${GLOSSARY.length} entries` : `${list.length} / ${GLOSSARY.length} 条`;
  const grid = document.getElementById('termsGrid');
  if (!list.length) {
    grid.innerHTML = `<p style="color:var(--ink-3);font-size:14px;grid-column:1/-1">未找到匹配术语 · No matching entries</p>`;
    return;
  }
  grid.innerHTML = list.map(g => `
    <div class="term-card">
      <div class="tc-en">${g.en}</div>
      <div class="tc-zh">${g.zh}</div>
      ${(g.note || g.ne) ? `<div class="tc-note">${LANG === 'en' && g.ne ? g.ne : (g.note || '')}</div>` : ''}
      <div class="tc-cat">${LANG === 'en' ? ((CATS.find(c => c.key === g.key) || {}).en || '') : ((CATS.find(c => c.key === g.key) || {}).zh || '')}</div>
    </div>`).join('');
}

/* ---------- 6.5 器物画廊 ---------- */
const GALLERY = [
  { id: 'g01', file: 'assets/artifacts/g01_meiping_mudan.jpg', grp: 'origin', era: '元 · Yuan (1271–1368)',
    tz: '青花缠枝牡丹纹梅瓶', te: 'Meiping vase with scrolling peony',
    pz: '小口短颈、丰肩敛腹的梅瓶，是元代青花最具代表性的器型之一。腹部满绘缠枝牡丹，花瓣层叠、枝叶连环，钴料浓处见铁锈斑——这是进口苏麻离青的典型呈色。',
    pe: 'The meiping — small mouth, broad shoulders, tapering body — is among the most characteristic Yuan blue-and-white shapes. Its belly carries a dense scroll of peonies; the rust-brown flecks in the deepest cobalt mark the imported Sumali (smalt) blue.' },
  { id: 'g02', file: 'assets/artifacts/g02_meiping_xiaohe.jpg', grp: 'origin', era: '元 · Yuan, 1351',
    tz: '青花萧何月下追韩信图梅瓶', te: 'Meiping with Xiao He pursuing Han Xin by moonlight',
    pz: '大维德基金会藏两件至正十一年（1351）款青花瓶之一。腹部主纹以历史人物故事入画，衬松石芭蕉。釉下纪年铭文为元青花提供了无可辩驳的断代依据。',
    pe: 'One of the Percival David Collection vases dated by underglaze inscription to 1351. Narrative figure painting on the belly, set against rock and plantain — and a dated inscription that anchors all Yuan blue-and-white chronology.' },
  { id: 'g03', file: 'assets/artifacts/g03_zhashoubei.jpg', grp: 'origin', era: '明永乐 · Yongle (1403–1424)',
    tz: '青花缠枝莲纹压手杯', te: 'Bowl-hand cup with lotus scrolls',
    pz: '口沿外撇、厚胎合手，故名"压手杯"。杯身缠枝莲八朵，双狮滚绣球纹。永乐御窑以苏麻离青浓艳呈色著称，是明代官窑青花的第一个高峰。',
    pe: 'A heavy-rimmed cup that fits the hand — hence "bowl-hand cup". Eight lotus scrolls and lions playing with a brocade ball. Yongle imperial wares mark the first peak of Ming official-kiln blue-and-white.' },
  { id: 'g04', file: 'assets/artifacts/g04_gaozuowan.jpg', grp: 'origin', era: '明宣德 · Xuande (1426–1435)',
    tz: '青花海水白龙纹高足碗', te: 'Stem bowl with white dragons among waves',
    pz: '外壁绘五爪白龙腾跃于海水江崖之间，龙纹矫健、青花浓艳。高足中空，圈足内书青花楷书年款——宣德款识成为后世官窑书款的范式。',
    pe: 'Five-clawed white dragons leaping through waves and cliffs. The hollow stem and the blue-and-white reign mark inside the foot set the template for official-kiln marks thereafter.' },
  { id: 'g05', file: 'assets/artifacts/g05_kraak_pan.jpg', grp: 'export', era: '明万历 · Wanli (1573–1620)',
    tz: '青花克拉克瓷盘', te: 'Kraak porcelain dish',
    pz: '盘心开光绘花卉石雀，边壁分格绘折枝花卉与杂宝——把器面切分为独立装饰空间的"开光"构图，正是克拉克瓷的标志。它因葡萄牙克拉克大帆船（carrack）得名，十六世纪末风靡欧洲。',
    pe: 'A central medallion of flowers and birds, with panelled borders dividing the rim into discrete decorative fields — the panelling that defines kraak. Named for the Portuguese carracks that carried it, kraak conquered Europe in the late sixteenth century.' },
  { id: 'g06', file: 'assets/artifacts/g06_bengba_hu.jpg', grp: 'origin', era: '清康熙 · Kangxi (1662–1722)',
    tz: '青花璎珞纹净水瓶', te: 'Blue-and-white kendi with garland design',
    pz: '塔形腹、细长流，腹部满绘璎珞纹与莲瓣纹。康熙青花使用云南珠明料，发色翠艳、层次分明，号称"翠毛蓝"，是清代青花的最高水准。',
    pe: 'A tower-shaped body with a slender spout, covered in garland and lotus-petal bands. Kangxi cobalt from Yunnan yielded the celebrated "kingfisher blue" — the finest blue of the Qing.' },
  { id: 'g07', file: 'assets/artifacts/g07_imari.jpg', grp: 'copy', era: '日本 · Japan, 17–18C',
    tz: '伊万里彩绘盘', te: 'Imari dish',
    pz: '日本有田窑仿景德镇青花而成，发展出釉下青花加釉上红金彩的"伊万里"。纹样仍是中国的牡丹与凤凰，配色却是日本的金碧富贵——纹样被继承，审美被重写。',
    pe: 'Arita ware imitated Jingdezhen blue-and-white, then invented Imari: underglaze blue heightened with overglaze red and gold. The motifs remain Chinese peonies and phoenixes; the aesthetic is emphatically Japanese.' },
  { id: 'g08', file: 'assets/artifacts/g08_delft.jpg', grp: 'copy', era: '荷兰 · Netherlands, 17C',
    tz: '代尔夫特锡釉青花陶盘', te: 'Delftware dish',
    pz: '荷兰代尔夫特以锡釉陶（faience）而非瓷土仿制青花，钴蓝柔和、略带灰调。盘心绘中国风亭台楼阁与花鸟——那是荷兰画工从未到过的中国，一座想象中的亭台。',
    pe: 'Delft imitated blue-and-white in tin-glazed earthenware rather than porcelain. Its softer, greyer cobalt frames Chinese pavilions and birds: a China imagined by Dutch painters who had never been there.' },
  { id: 'g09', file: 'assets/artifacts/g09_wedgwood.jpg', grp: 'copy', era: '英国 · England, 18C',
    tz: '韦奇伍德碧玉细炻瓷浮雕章', te: 'Wedgwood jasperware cameo',
    pz: '英国韦奇伍德以碧玉细炻瓷做出深邃的蓝底白浮雕。青花在这里退出了"画在器物上的纹样"，变成"器物本身的颜色"——从表面装饰到材料本体的转译，是这次旅行最远的一站。',
    pe: 'Wedgwood turned the blue of qinghua into the body itself: jasperware, a deep blue stoneware carrying white classical reliefs. Blue ceased to be decoration on a vessel and became the material of the vessel.' },
  { id: 'g10', file: 'assets/artifacts/g10_changsha.jpg', grp: 'early', era: '唐 · Tang (618–907)',
    tz: '长沙窑青釉褐绿彩诗文壶', te: 'Changsha ewer with inscribed verse',
    pz: '青花出现之前，唐代长沙窑已用褐绿彩在青釉上书写诗文与绘画。它是九世纪印度洋贸易中中国陶瓷的主力，也是"以文字与图像装饰瓷器"这一传统更早的源头。',
    pe: 'Before blue-and-white, Tang-dynasty Changsha kilns painted verses and pictures in iron-brown and green over a celadon glaze. The mainstay of ninth-century Indian Ocean trade — and an earlier origin of the inscribed vessel.' }
];
let GAL_CUR = 'all';
function renderGalFilter() {
  const chips = [['all', 'gal_all'], ['origin', 'gal_origin'], ['export', 'gal_export'],
                 ['copy', 'gal_copy'], ['early', 'gal_early']];
  document.getElementById('galFilter').innerHTML = chips.map(([k, tk]) =>
    `<button class="cat-chip ${GAL_CUR === k ? 'on' : ''}" onclick="setGal('${k}')">${I18N[LANG][tk] || tk}</button>`
  ).join('');
}
function setGal(k) { GAL_CUR = k; renderGalFilter(); renderGallery(); }
function renderGallery() {
  const list = GALLERY.filter(g => GAL_CUR === 'all' || g.grp === GAL_CUR);
  document.getElementById('galGrid').innerHTML = list.map(g => `
    <figure class="gal-card" onclick="openLightbox('${g.id}')">
      <div class="gal-img"><img src="${g.file}" alt="${g.tz}" loading="lazy"></div>
      <figcaption>
        <span class="gal-era">${g.era}</span>
        <b>${LANG === 'en' ? g.te : g.tz}</b>
        <i>${LANG === 'en' ? g.tz : g.te}</i>
        <p>${LANG === 'en' ? g.pe : g.pz}</p>
        <span class="gal-ai">${I18N[LANG].gal_cap_ai}</span>
      </figcaption>
    </figure>`).join('');
}
let LB_CUR = null;
function openLightbox(id) {
  const g = GALLERY.find(x => x.id === id);
  if (!g) return;
  LB_CUR = id;
  document.getElementById('galLbImg').src = g.file;
  document.getElementById('galLbImg').alt = g.tz;
  document.getElementById('galLbCap').innerHTML =
    `<b>${g.tz} · ${g.te}</b><span>${g.era}</span><p>${LANG === 'en' ? g.pe : g.pz}</p>` +
    `<span class="gal-ai">${I18N[LANG].gal_cap_ai}</span>`;
  document.getElementById('galLightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('galLightbox').classList.remove('open');
  LB_CUR = null;
}
/* 灯箱内 ← → 在同一筛选分组里切换器物 */
function lbStep(d) {
  if (!LB_CUR) return;
  const list = GALLERY.filter(g => GAL_CUR === 'all' || g.grp === GAL_CUR);
  const i = list.findIndex(g => g.id === LB_CUR);
  if (i < 0) return;
  openLightbox(list[(i + d + list.length) % list.length].id);
}
document.addEventListener('keydown', e => {
  if (document.getElementById('galLightbox').classList.contains('open')) {
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') lbStep(-1);
    else if (e.key === 'ArrowRight') lbStep(1);
    return;
  }
  /* 时间线在视口内时，← → 切换节点（输入框聚焦时不抢键） */
  const tag = (document.activeElement || {}).tagName || '';
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;
  const sec = document.getElementById('timeline');
  if (!sec) return;
  const r = sec.getBoundingClientRect(), vh = window.innerHeight;
  if (r.top < vh * 0.65 && r.bottom > vh * 0.25) {
    if (e.key === 'ArrowLeft') { tlStep(-1); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { tlStep(1); e.preventDefault(); }
  }
});

/* ---------- 6.6 跨材质转译 ---------- */
const TRANS = [
  { n: 1, place: '景德镇 · Jingdezhen', era: '元—明 · 14–17 世纪',
    tz: '起点：白底蓝花', te: 'Origin: white ground, blue design',
    file: 'assets/artifacts/g05_kraak_pan.jpg',
    mat_z: '高岭土瓷胎 · 釉下钴蓝', mat_e: 'Porcelain, underglaze cobalt',
    pz: '钴料绘于素坯、罩透明釉一次高温烧成，蓝色沉入釉下永不被磨去。开光构图把器面切分为若干装饰空间，便于批量绘制与跨文化辨识——这是它为远方陌生人准备好的视觉语言。',
    pe: 'Cobalt painted on the raw body, covered with clear glaze, fired once at high temperature: the blue lies beneath the glaze and can never wear off. Panelling divides the surface into legible fields — a visual language prepared for strangers far away.',
    key_z: '定义', key_e: 'Defines' },
  { n: 2, place: '有田 · Arita, Japan', era: '17–18 世纪',
    tz: '第一转：伊万里', te: 'First translation: Imari',
    file: 'assets/artifacts/g07_imari.jpg',
    mat_z: '瓷胎 · 釉下青花 + 釉上红金彩', mat_e: 'Porcelain, underglaze blue + overglaze red & gold',
    pz: '日本有田窑获得钴料与画样后，没有止于模仿：青花保留为骨架，红与金被叠加其上。纹样仍是中国的牡丹凤凰，色彩体系却是日本感性的热烈——继承纹样，重写审美。',
    pe: 'Arita potters kept the cobalt skeleton but added red and gold over the glaze. The motifs stay Chinese; the colour system turns emphatically Japanese. Inherit the pattern, rewrite the aesthetic.',
    key_z: '重绘', key_e: 'Redraws' },
  { n: 3, place: '代尔夫特 · Delft, Netherlands', era: '17 世纪',
    tz: '第二转：代尔夫特', te: 'Second translation: Delft',
    file: 'assets/artifacts/g08_delft.jpg',
    mat_z: '锡釉陶（非瓷） · 柔和钴蓝', mat_e: 'Tin-glazed earthenware (not porcelain), soft cobalt',
    pz: '欧洲此时尚不能烧造硬质瓷，代尔夫特以锡釉陶转译青花。钴蓝因铅釉而柔和发灰，画工笔下的中国亭台从未有人亲见——这是一次带着误读的致敬，也是欧洲"中国风"（chinoiserie）的起点。',
    pe: 'Europe could not yet fire true porcelain, so Delft translated blue-and-white into tin-glazed earthenware. The cobalt softened to grey under lead glaze, and the pavilions were drawn by hands that had never seen China — a misreading that became chinoiserie.',
    key_z: '误读', key_e: 'Misreads' },
  { n: 4, place: '斯托克 · Stoke-on-Trent, England', era: '18 世纪',
    tz: '第三转：韦奇伍德', te: 'Third translation: Wedgwood',
    file: 'assets/artifacts/g09_wedgwood.jpg',
    mat_z: '碧玉细炻瓷 · 蓝即本体', mat_e: 'Jasperware · blue as the body itself',
    pz: '韦奇伍德索性取消了"画上去的蓝"：蓝成为坯体本身的颜色，白色浮雕从蓝底上浮现。青花从一个装饰系统变成一种材料观念——这次旅行抵达最远处：纹样消失了，颜色活了下来。',
    pe: 'Wedgwood abolished the painted blue altogether: blue became the body itself, with white reliefs rising from it. Qinghua turned from a decorative system into an idea of material. The furthest point of the journey — the pattern vanished, the colour survived.',
    key_z: '内化', key_e: 'Absorbs' }
];
let TRANS_CUR = 0;
function renderTransSteps() {
  document.getElementById('transSteps').innerHTML = TRANS.map((s, i) => `
    <button class="trans-step ${i === TRANS_CUR ? 'on' : ''}" onclick="renderTrans(${i})">
      <span class="ts-n">${String(s.n).padStart(2, '0')}</span>
      <span class="ts-place">${s.place}</span>
      <span class="ts-t">${LANG === 'en' ? s.te : s.tz}</span>
    </button>`).join('');
}
function renderTrans(i) {
  TRANS_CUR = i;
  renderTransSteps();
  const s = TRANS[i];
  document.getElementById('transPanel').innerHTML = `
    <div class="tp-img"><img src="${s.file}" alt="${s.tz}"></div>
    <div class="tp-body">
      <span class="tp-key">${LANG === 'en' ? s.key_e : s.key_z}</span>
      <h3>${LANG === 'en' ? s.te : s.tz} <i>${LANG === 'en' ? s.tz : s.te}</i></h3>
      <div class="tp-meta">
        <span><b>${LANG === 'en' ? 'Place' : '产地'}</b>${s.place}</span>
        <span><b>${LANG === 'en' ? 'Period' : '时代'}</b>${s.era}</span>
        <span><b>${LANG === 'en' ? 'Material' : '材质'}</b>${LANG === 'en' ? s.mat_e : s.mat_z}</span>
      </div>
      <p>${LANG === 'en' ? s.pe : s.pz}</p>
      <div class="tp-nav">
        <button onclick="renderTrans(${(i - 1 + TRANS.length) % TRANS.length})">← ${I18N[LANG].tl_prev}</button>
        <button onclick="renderTrans(${(i + 1) % TRANS.length})">${I18N[LANG].tl_next} →</button>
      </div>
    </div>`;
}

/* ---------- 6.7 术语门类分布图 ---------- */
function renderTermsChart() {
  const counts = CATS.map(c => ({
    zh: c.zh, en: c.en, n: GLOSSARY.filter(g => g.key === c.key).length
  })).filter(c => c.n > 0).sort((a, b) => b.n - a.n);
  const max = Math.max(...counts.map(c => c.n));
  const box = document.getElementById('termsChart');
  if (!box) return;
  box.innerHTML = `<h3>${LANG === 'en' ? 'Distribution by category' : '门类分布 · Distribution'}</h3>
    <div class="tch-bars">` + counts.map(c => `
      <div class="tch-row">
        <span class="tch-label">${LANG === 'en' ? c.en : c.zh}</span>
        <span class="tch-track"><i style="width:${(c.n / max * 100).toFixed(1)}%"></i></span>
        <span class="tch-num">${c.n}</span>
      </div>`).join('') + `</div>
    <p class="tch-note">${LANG === 'en' ? GLOSSARY.length + ' entries · from the team\'s terminology database' : '共 ' + GLOSSARY.length + ' 条 · 数据来自团队术语库'}</p>`;
}

/* ---------- 6.8 阅读进度条 ---------- */
function initReadProgress() {
  const bar = document.querySelector('#readProgress i');
  if (!bar) return;
  const upd = () => {
    const h = document.documentElement;
    const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
    bar.style.width = (p * 100).toFixed(2) + '%';
  };
  window.addEventListener('scroll', upd, { passive: true });
  upd();
}

/* ---------- 6. 研究方法 ---------- */
const NOTES = [
  { n: 1, src: "总体方法", t: "如何研究一个瓷都 · Method",
    ref: "本作品的研究路径：① 以博物馆公开藏品目录建立器物谱系；② 以考古发掘报告建立窑址与年代序列；③ 以贸易史与公司档案研究流通；④ 以物质文化研究的方法整合三者。",
    note: "我们刻意不依赖单一叙述来源：器物的形制来自实物与图录，年代来自纪年器与地层，流通来自航运与关税记录，解释则明确标为团队判断。凡属团队推断处，正文均用「我们认为」「可以推测」标示。",
    en: "Method: museum catalogues for typology; excavation reports for kiln sites and dating; trade history and company archives for circulation; material-culture studies for synthesis. Team inferences are flagged as such." },
  { n: 2, src: "器物与图像", t: "图像使用说明 · Images",
    ref: "作品中的全部器物图像由团队使用 AI 图像模型生成后人工筛选修订，<b>不是文物照片</b>，页面与图注均已标注。",
    note: "我们选择不用馆藏照片，一是版权，二是我们希望读者把注意力放在「形制与纹样如何被转译」而不是某一件具体藏品上。图像的作用是示意，不是著录。",
    en: "All object images are AI-generated and human-edited, not photographs of museum objects; labels state this. Using generated images avoids rights issues and keeps attention on typology and ornament rather than on one specific collection piece." },
  { n: 3, src: "历史分期", t: "分期依据 · Periodisation",
    ref: "十二章的划分依据是可观测的转折点：窑业格局变化、釉下钴蓝技术的成熟、御窑制度的确立、全球贸易的接入、原料与燃料压力、外销市场的形成。",
    note: "我们没有沿用任何现成的分期框架，而是按「技术—制度—贸易」三条线索各自找转折点，再合并。这也是为什么本作品的时间轴节点之间间距并不相等：节点密度反映的是变化速度，不是时间长度。",
    en: "The twelve sections follow observable turning points in technology, institutions and trade rather than an existing periodisation. Node spacing in the timeline reflects the speed of change, not equal time." },
  { n: 4, src: "数据与可核验性", t: "数据来源与复算 · Data",
    ref: "作品的全部结构数据（术语、时间线、港口、航线、器物、转译网络）以 JSON 开放，并附数据字典与校验脚本，任何声明都可由脚本复算。",
    note: "我们无法要求读者相信「270 条」这样的数字，所以把它变成可以运行的东西：`01_作品本体/数据/` 是导出结果，`测试脚本/validate_data.py` 是复算方式。",
    en: "All structured data is published as JSON with a schema document and a validation script, so counts can be recomputed rather than taken on trust." },
  { n: 5, src: "边界与致谢", t: "本作品没有做什么 · Scope",
    ref: "本作品不是一部通史，也不是考古报告；它是一部面向公众与课堂的<b>理解框架</b>。凡涉及具体藏品、具体价格、具体年份的争议，本作品不展开。",
    note: "我们明确承认三个边界：① 不覆盖明清以外的长时间段；② 不处理技术检测数据（如胎釉成分）；③ 不替代任何学术专著。作品的价值在于把已有研究组织成一个可以走进去的结构。",
    en: "This is an interpretive framework for the public and the classroom, not a general history nor an excavation report. Three stated limits: outside the late imperial period; no compositional analysis; not a substitute for scholarly monographs." },
  { n: 6, src: "参考资源", t: "参考资源与延伸阅读 · References & further reading",
    ref: "本作品在选题与研究阶段参考了下列公开来源；它们<b>只是参考</b>，本作品不复制其表达、不含任何著作的文本：<br>① <b>《蓝白之城》（The City of Blue and White）</b>——研究景德镇青花瓷与早期近代世界的英文学术专著，本作品<b>选题阶段的重要参考之一</b>（著录信息见团队备查材料）；<br>② 中国硅酸盐学会主编《中国陶瓷史》，文物出版社；<br>③ 冯先铭主编《中国古陶瓷图典》，文物出版社；<br>④ Rose Kerr &amp; Nigel Wood, <i>Science and Civilisation in China</i>, Vol. 5, Part 12: <i>Ceramic Technology</i>, Cambridge University Press；<br>⑤ 大英博物馆、大都会艺术博物馆、故宫博物院等机构的<b>公开藏品数据库</b>；<br>⑥ 荷兰东印度公司（VOC）相关贸易档案与公开贸易史研究；<br>⑦ 公开的水下考古与沉船调查报告。",
    note: "为什么把参考来源写出来：一部面向公众与课堂的作品，读者有权知道结论从哪里来。我们把这些来源列在这里，同时也把边界写清楚——它们是<b>背景与佐证</b>，不是本作品的底本；本作品的文字、数据、可视化与代码均为团队原创。",
    en: "References (public sources consulted during research and writing; cited as background, not as a base text — the work contains no translation of any of them): (1) <i>The City of Blue and White</i>, an English-language monograph on Jingdezhen porcelain and the early modern world — one of the team's key references at the topic stage; (2) <i>History of Chinese Ceramics</i>, ed. Chinese Ceramic Society; (3) Feng Xianming, ed., <i>Illustrated Dictionary of Ancient Chinese Ceramics</i>; (4) Rose Kerr &amp; Nigel Wood, <i>Science and Civilisation in China</i>, Vol. 5, Part 12: <i>Ceramic Technology</i>, Cambridge University Press; (5) public collection databases of the British Museum, the Metropolitan Museum of Art and the Palace Museum; (6) Dutch East India Company (VOC) trade archives and published trade history; (7) published underwater-archaeology and shipwreck reports." }
];
function renderNotes() {
  document.getElementById('notesList').innerHTML = NOTES.map(x => `
    <div class="card note-pair">
      <span class="note-num">${x.n}</span>
      <div style="font-size:12.5px;color:var(--copper-ink);font-family:var(--f-sans);margin-bottom:8px">${x.src} · ${x.t}</div>
      <div class="note-ref"><b>来源与方法 · SOURCE & METHOD</b>${x.ref}</div>
      <div class="note-why"><b>处理说明 · TEAM NOTE</b>${x.note}</div>
      <div class="note-en"><b>ENGLISH · TEAM-WRITTEN</b>${x.en}</div>
    </div>`).join('');
}

/* ---------- 7. 导航高亮 ---------- */
function initNavSpy() {
  const secs = ['about', 'timeline', 'routes', 'gallery', 'trans', 'read', 'terms', 'notes', 'team'];
  const links = {};
  secs.forEach(id => links[id] = document.querySelector(`.nav-links a[href="#${id}"]`));
  const spy = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) {
        Object.values(links).forEach(l => l && l.classList.remove('active'));
        const l = links[e.target.id];
        if (l) l.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  secs.forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el); });
}

/* ---------- 启动 ---------- */
/* ---------- 按需渲染（性能）：重模块进入视口前不渲染 ---------- */
const LAZY_JOBS = [
  ['terms',      () => { renderCats(); renderTerms(); renderTermsChart(); }],
  ['gallery',    () => { renderGalFilter(); renderGallery(); }],
  ['notes',      () => { renderNotes(); }],
  ['read',       () => { renderReadTabs(); renderReading(0); }],
  ['trans',      () => { renderTrans(0); }],
  ['routes',     () => { renderRouteFilter(); renderPort('jingdezhen'); }],
];
function initLazyRender() {
  const done = new Set();
  const run = id => {
    if (done.has(id)) return;
    const job = LAZY_JOBS.find(j => j[0] === id);
    if (!job) return;
    done.add(id);
    job[1]();
  };
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) run(e.target.id); });
  }, { rootMargin: '800px 0px' });
  LAZY_JOBS.forEach(([id]) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
  // 用户点导航时立刻渲染目标模块（不等观察器）
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      const id = (a.getAttribute('href') || '').replace('#', '');
      if (LAZY_JOBS.some(j => j[0] === id)) run(id);
    });
  });
  // 打印前把全部模块渲染出来（否则打印会出空模块）
  window.addEventListener('beforeprint', () => LAZY_JOBS.forEach(([id]) => run(id)));
  // 兜底：3.5s 后把没触发的模块也渲染，保证任何情况下内容完整
  setTimeout(() => LAZY_JOBS.forEach(([id]) => run(id)), 3500);
}

/* 支持 ?lang=en / ?lang=zh 直链（便于把英文链接发给国际读者） */
function initLangFromURL() {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'zh') { setLang(q); return true; }
  } catch (e) {}
  return false;
}


/* ---------- 首访 3 步引导（可关闭 · 记忆 · 键盘可达 · 尊重 reduced-motion）---------- */
function initOnboarding() {
  try { if (localStorage.getItem('bw_onboarded') === '1') return; } catch (e) { return; }
  const STEPS = LANG === 'en'
    ? ['Eight modules live in the top navigation — start with Contents.',
       'In Translation, switch to the network view and click any node.',
       'Chinese / English: the toggle is at the top right.']
    : ['八个模块在顶部导航，建议从「内容总览」开始。',
       '「转译」模块可切到网络视图，点击任一节点看它的源流关系。',
       '中英切换在右上角，也可用 ?lang=en 直链。'];
  const el = document.createElement('div');
  el.className = 'onb';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-label', LANG === 'en' ? 'Quick start' : '快速上手');
  el.innerHTML = `<div class="onb-h">${LANG === 'en' ? 'Quick start · 30 seconds' : '快速上手 · 30 秒'}</div>
    <ol class="onb-list">${STEPS.map(s => `<li>${s}</li>`).join('')}</ol>
    <div class="onb-act">
      <button class="onb-go" onclick="closeOnboarding(true)">${LANG === 'en' ? 'Got it' : '知道了'}</button>
      <button class="onb-skip" onclick="closeOnboarding(false)">${LANG === 'en' ? 'Don't show again' : '不再提示'}</button>
    </div>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('in'));
}
function closeOnboarding(remember) {
  const el = document.querySelector('.onb');
  if (el) { el.classList.remove('in'); setTimeout(() => el.remove(), 260); }
  try { localStorage.setItem('bw_onboarded', '1'); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  initLangFromURL();
  renderTimelineNodes();
  buildRouteMap();
  initLazyRender();
  initNavSpy();
  setTimeout(initOnboarding, 1200);
  initReadProgress();
});
