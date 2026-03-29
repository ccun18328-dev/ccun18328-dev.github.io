// ===================================================
// DATA
// ===================================================

const CLUBS = [
  {
    id: 'c1', name: '摄影协会', category: 'media', icon: '📷',
    tags: ['摄影', '视频', '新媒体'],
    matchDims: ['media', 'design', 'friends', 'skills', 'interest'],
    desc: '记录校园光影，输出高质量视觉内容，活动氛围友好。',
    fullDesc: '摄影协会成立于2018年，拥有45名正式成员，每年承接学校官方活动拍摄，出版校园摄影手册。社团氛围友好，定期举办摄影课和交流活动，适合对摄影和内容创作感兴趣的新生。',
    positions: [
      { name: '摄影师', count: 8, desc: '负责活动现场拍摄与后期处理', require: '有基础更佳，零基础可学' },
      { name: '新媒体运营', count: 4, desc: '负责公众号内容策划与发布', require: '有写作或文字基础' },
      { name: '活动记录', count: 3, desc: '协助整理归档活动素材', require: '认真负责即可' },
    ],
    activities: ['年度摄影展', '新生摄影课', '校庆官方摄影', '摄影大赛'],
    frequency: '每周 1-2 次', timeNeed: 4, experience: 'noexp',
    members: 45, founded: 2018,
    reviews: [
      { name: '小林', star: 5, content: '社团氛围特别好，学长学姐都很热情，摄影技术进步了很多！' },
      { name: '晓雪', star: 5, content: '活动丰富，能接触到很多大型校内活动，很有成就感。' },
      { name: '阿明', star: 4, content: '时间安排比较灵活，不会太影响学习。' },
    ],
    faqs: [
      { q: '需要有相机吗', a: '不需要，社团有设备可以借用，手机也可以参与日常活动。' },
      { q: '对专业有要求吗', a: '没有专业限制，欢迎各专业同学加入。' },
      { q: '每周活动时间固定吗', a: '有定期例会，其他活动会提前通知，时间相对灵活。' },
      { q: '报名怎么弄', a: '点击页面右上角的"立即报名"按钮即可，填写基础信息后提交。' },
    ],
    recruitCount: 15, deadline: '2026-04-15', status: 'recruiting',
  },
  {
    id: 'c2', name: '辩论队', category: 'debate', icon: '🗣️',
    tags: ['辩论', '逻辑', '表达'],
    matchDims: ['debate', 'speaking', 'competition', 'resume'],
    desc: '磨砺思维逻辑，表达观点，参与高水平辩论赛事。',
    fullDesc: '辩论队是学校最具影响力的学术型社团之一，每年代表学校参与省级及全国赛事。注重逻辑训练和公开表达能力培养，适合有较强表达欲望和思维能力的同学。',
    positions: [
      { name: '辩手', count: 6, desc: '参与正式比赛与日常对练', require: '有一定逻辑和表达能力' },
      { name: '资料组', count: 3, desc: '收集比赛资料、分析立场', require: '擅长搜索研究和写作' },
      { name: '赛事统筹', count: 2, desc: '负责比赛行程与后勤安排', require: '组织协调能力强' },
    ],
    activities: ['校内辩论赛', '省际邀请赛', '新生辩论训练营', '周例会研讨'],
    frequency: '每周 2 次', timeNeed: 6, experience: 'exp',
    members: 28, founded: 2015,
    reviews: [
      { name: '思哲', star: 5, content: '跟着辩论队一年，表达能力和思维都有很大提升，强烈推荐！' },
      { name: '琳琳', star: 4, content: '训练强度比较高，但比赛获奖后非常有成就感。' },
    ],
    faqs: [
      { q: '需要有辩论经验吗', a: '有经验者优先，但若表达能力强、学习意愿高，零基础也有机会入选。' },
      { q: '时间要求高吗', a: '赛季期间会比较忙，平时例会每周两次约2小时。' },
      { q: '报名流程', a: '提交报名后，负责人会联系你安排即兴演讲展示，共约15分钟。' },
    ],
    recruitCount: 11, deadline: '2026-04-10', status: 'recruiting',
  },
  {
    id: 'c3', name: 'AI 创新社', category: 'tech', icon: '🤖',
    tags: ['AI', '编程', '产品'],
    matchDims: ['tech', 'coding', 'resume', 'competition'],
    desc: '聚焦AI项目实践与创新创业竞赛，多次国家级获奖。',
    fullDesc: 'AI创新社是以实践为导向的技术类社团，涵盖机器学习、产品设计、数据分析等方向，每年参与多个国家级创新创业竞赛并多次获奖。',
    positions: [
      { name: '算法工程师', count: 4, desc: '参与AI模型训练与优化', require: '有Python基础' },
      { name: '产品策划', count: 3, desc: '负责项目需求分析与产品设计', require: '有产品或设计经验' },
      { name: '开发协作', count: 4, desc: '参与项目开发与联调', require: '有编程基础' },
      { name: '运营推广', count: 2, desc: '负责社团对外宣传与活动组织', require: '有运营或内容创作能力' },
    ],
    activities: ['互联网+竞赛', '挑战杯项目', '内部黑客松', '技术分享会'],
    frequency: '每周 2-3 次', timeNeed: 8, experience: 'exp',
    members: 36, founded: 2020,
    reviews: [
      { name: '小飞', star: 5, content: '项目含金量很高，跟着做了一个完整产品，竞赛也拿了奖！' },
      { name: 'Joy', star: 5, content: '强烈推荐给想做产品或AI方向的同学，成长很快。' },
      { name: '老王', star: 3, content: '时间要求较高，需要有一定自律性。' },
    ],
    faqs: [
      { q: '不会写代码可以加入吗', a: '产品、运营方向不需要编程基础，欢迎报名面试。' },
      { q: '每周要投入多少时间', a: '项目阶段约每周8小时+，非项目阶段相对少。' },
    ],
    recruitCount: 13, deadline: '2026-04-12', status: 'reviewing',
  },
  {
    id: 'c4', name: '青年志愿者协会', category: 'public', icon: '💚',
    tags: ['公益', '志愿', '协作'],
    matchDims: ['public', 'ops', 'friends', 'volunteer'],
    desc: '组织公益活动，传递社会温度，结识志同道合的伙伴。',
    fullDesc: '青年志愿者协会是学校规模最大的公益类社团，每年组织50+场志愿活动，覆盖养老院探望、支教、环保等多个方向，时间灵活。',
    positions: [
      { name: '活动组织', count: 10, desc: '策划和执行志愿活动', require: '组织能力强、责任心强' },
      { name: '宣传设计', count: 4, desc: '负责活动海报和推文', require: '有设计或文字基础' },
      { name: '志愿者', count: 20, desc: '参与各类志愿活动', require: '零基础可参与' },
    ],
    activities: ['支教项目', '养老院探望', '校园环保周', '义卖活动'],
    frequency: '每周 1 次', timeNeed: 2, experience: 'noexp',
    members: 120, founded: 2010,
    reviews: [
      { name: '阿花', star: 5, content: '做公益真的很治愈，结识了很多好朋友。' },
      { name: '小明', star: 5, content: '时间灵活，活动多样，参与感很强。' },
    ],
    faqs: [
      { q: '时间要求高吗', a: '活动是自愿参与制，按个人时间选择，每月至少参与1次即可。' },
      { q: '有什么福利吗', a: '累积志愿时长可换取学校志愿证书，部分活动提供误餐补贴。' },
    ],
    recruitCount: 30, deadline: '2026-04-20', status: 'recruiting',
  },
  {
    id: 'c5', name: '话剧社', category: 'arts', icon: '🎭',
    tags: ['话剧', '表演', '创作'],
    matchDims: ['arts', 'speaking', 'friends', 'interest'],
    desc: '参与剧本创作和舞台演出，释放创造力与表现欲。',
    fullDesc: '话剧社每学期公演一部自制剧目，从剧本创作到舞台呈现全部由学生主导完成。接受零基础表演爱好者，只要有热情和坚持，都可以走上舞台。',
    positions: [
      { name: '演员', count: 8, desc: '参与排练和正式演出', require: '热爱表演，时间稳定' },
      { name: '编导', count: 2, desc: '参与剧本修改和排练统筹', require: '有创作或导演经验优先' },
      { name: '舞台技术', count: 4, desc: '灯光、音效、道具制作', require: '有技术基础或动手能力强' },
      { name: '宣传运营', count: 3, desc: '负责演出宣传和票务', require: '有文案或设计能力' },
    ],
    activities: ['学期公演', '社员内部剧场', '剧本朗读会', '戏剧工作坊'],
    frequency: '每周 2 次', timeNeed: 6, experience: 'noexp',
    members: 38, founded: 2016,
    reviews: [
      { name: '晓晓', star: 5, content: '公演那天是我大学最难忘的经历，上台那一刻超级震撼。' },
      { name: '大海', star: 4, content: '排练挺累的，但结果很值，推荐有表演欲的同学来。' },
    ],
    faqs: [
      { q: '没有表演基础可以报名吗', a: '可以，社团会从零开始培训，重要的是有热情和坚持。' },
      { q: '公演是什么时候', a: '每学期末会有一场正式公演，提前约2个月进入高强度排练。' },
    ],
    recruitCount: 17, deadline: '2026-04-18', status: 'recruiting',
  },
  {
    id: 'c6', name: '数据新闻社', category: 'media', icon: '📊',
    tags: ['数据', '新闻', '可视化'],
    matchDims: ['media', 'coding', 'writing', 'resume'],
    desc: '用数据讲故事，出品深度内容报道和可视化作品。',
    fullDesc: '数据新闻社将新闻采编与数据分析结合，是国内高校较少见的交叉型媒体社团，适合同时对内容创作和数据分析感兴趣的同学。',
    positions: [
      { name: '数据分析师', count: 3, desc: '收集数据并制作可视化图表', require: '有Excel/Python基础' },
      { name: '文字记者', count: 4, desc: '负责深度报道采写', require: '有写作能力' },
      { name: '视觉设计师', count: 2, desc: '负责图表和版面设计', require: '有设计软件基础' },
    ],
    activities: ['校园数据专题报道', '可视化大赛', '媒体交流活动'],
    frequency: '每周 1-2 次', timeNeed: 5, experience: 'exp',
    members: 22, founded: 2021,
    reviews: [
      { name: '老陈', star: 5, content: '做过一个专题数据分析后，觉得自己的数据思维提升了很多。' },
    ],
    faqs: [
      { q: '需要同时懂数据和写作吗', a: '不需要，两个方向分开招募，专注一个方向即可。' },
    ],
    recruitCount: 9, deadline: '2026-04-14', status: 'recruiting',
  },
  {
    id: 'c7', name: '山地户外协会', category: 'sports', icon: '🏔️',
    tags: ['户外', '徒步', '探险'],
    matchDims: ['sports', 'friends', 'interest', 'volunteer'],
    desc: '走出教室，探索自然，放松身心，结交志同道合的伙伴。',
    fullDesc: '山地户外协会每月组织徒步、露营、攀岩等户外活动，关注体能训练和户外安全知识，是最适合减压和结交朋友的社团之一。',
    positions: [
      { name: '活动领队', count: 4, desc: '负责户外活动规划和现场安全', require: '有户外经验，急救知识优先' },
      { name: '普通成员', count: 20, desc: '参与各类户外活动', require: '身体健康，喜欢户外' },
    ],
    activities: ['每月徒步', '秋季露营', '攀岩体验', '冬季雪地行'],
    frequency: '每月 2-3 次', timeNeed: 3, experience: 'noexp',
    members: 65, founded: 2014,
    reviews: [
      { name: '小强', star: 5, content: '每次活动都是充电，在自然里感觉整个人都放松了。' },
      { name: 'Mia', star: 5, content: '社团氛围超好，是我觉得最快乐的一段大学时光。' },
    ],
    faqs: [
      { q: '需要有户外装备吗', a: '基础装备社团可借用，建议长期参与的同学配备基础徒步鞋。' },
      { q: '安全有保障吗', a: '每次活动都有专业领队，投保了户外活动保险。' },
    ],
    recruitCount: 20, deadline: '2026-04-22', status: 'recruiting',
  },
  {
    id: 'c8', name: '学生创业联盟', category: 'tech', icon: '🚀',
    tags: ['创业', '商业', '创新'],
    matchDims: ['tech', 'ops', 'resume', 'competition'],
    desc: '连接创业资源，打磨商业思维，孵化学生项目。',
    fullDesc: '学生创业联盟连接校内外创业资源，为有创业想法的同学提供导师对接、资金对接和团队组建支持。每年孵化项目10+，已有2个项目获天使投资。',
    positions: [
      { name: '项目策划', count: 5, desc: '参与新项目孵化和商业计划书撰写', require: '对商业有兴趣' },
      { name: '运营推广', count: 4, desc: '负责活动运营和对外资源对接', require: '有运营经验优先' },
      { name: '技术成员', count: 3, desc: '为孵化项目提供技术支持', require: '有编程能力' },
    ],
    activities: ['创业大赛', '导师分享会', '项目路演', '商业计划书培训'],
    frequency: '每周 2 次', timeNeed: 6, experience: 'exp',
    members: 42, founded: 2019,
    reviews: [
      { name: '大白', star: 5, content: '创联是我接触创业和商业的起点，资源和人脉都很有价值。' },
      { name: '芸芸', star: 4, content: '活动质量高，导师分享很干货。' },
    ],
    faqs: [
      { q: '需要有创业项目才能加入吗', a: '不需要，有想法或者有支持意愿都可以申请。' },
    ],
    recruitCount: 12, deadline: '2026-04-16', status: 'recruiting',
  },
];

const DEMO_NOTIFICATIONS = [
  { id: 'n1', icon: '🎉', title: '欢迎来到社团招新平台！', content: '完成兴趣测评，获取 AI 专属推荐社团列表，开启你的大学社团之旅。', time: '刚刚', read: false, type: 'system' },
  { id: 'n2', icon: '📬', title: '【摄影协会】报名已收到', content: '你对摄影协会的报名申请已成功提交，预计3个工作日内反馈结果，请留意消息通知。', time: '2小时前', read: false, type: 'apply' },
  { id: 'n3', icon: '📅', title: '【辩论队】面试邀请', content: '恭喜！你已通过辩论队初审，面试时间：4月8日 14:00，地点：文科楼203室，请准时参加。', time: '昨天', read: false, type: 'interview' },
  { id: 'n4', icon: '⏰', title: '招新截止提醒', content: 'AI创新社将于4月12日截止报名，仅剩5天！还没报名的同学请抓紧。', time: '2天前', read: true, type: 'system' },
  { id: 'n5', icon: '✅', title: '【话剧社】初审通过', content: '你的话剧社报名已通过初审，请等待后续面试安排通知。恭喜！', time: '3天前', read: true, type: 'result' },
];

const DEMO_APPLICATIONS = [
  { id: 'a1', clubId: 'c1', clubName: '摄影协会', clubIcon: '📷', status: '待审核', score: 88, appliedAt: '2026-03-28', position: '新媒体运营', withdrawn: false },
  { id: 'a2', clubId: 'c2', clubName: '辩论队', clubIcon: '🗣️', status: '待面试', score: 75, appliedAt: '2026-03-25', position: '资料组', withdrawn: false },
  { id: 'a3', clubId: 'c5', clubName: '话剧社', clubIcon: '🎭', status: '已通过初审', score: 82, appliedAt: '2026-03-20', position: '演员', withdrawn: false },
];

const DEMO_CANDIDATES = [
  { id: 'cd1', name: '张同学', avatar: '🎒', major: '新闻传播学', score: 92, tags: ['摄影兴趣', '每周6h', '技能提升'], reason: '兴趣与技能高度匹配，时间充裕，是摄影/运营岗的优质候选人。', status: '待审核', position: '新媒体运营' },
  { id: 'cd2', name: '李晓雨', avatar: '🌸', major: '计算机科学', score: 85, tags: ['设计技能', '每周4h', '履历加分'], reason: '有设计基础，目标明确，适合摄影师岗位。', status: '待审核', position: '摄影师' },
  { id: 'cd3', name: '王大明', avatar: '⚡', major: '工商管理', score: 78, tags: ['组织协调', '每周3h', '交友拓展'], reason: '有一定组织能力，适合活动记录岗。', status: '待面试', position: '活动记录' },
  { id: 'cd4', name: '陈思远', avatar: '📚', major: '汉语言文学', score: 95, tags: ['写作能力', '每周6h', '技能提升', '公众号运营'], reason: '写作能力突出，综合匹配度最高，强烈推荐运营岗。', status: '已录取', position: '新媒体运营' },
  { id: 'cd5', name: '刘欣怡', avatar: '🎨', major: '艺术设计', score: 70, tags: ['设计技能', '每周2h', '兴趣陪伴'], reason: '设计技能匹配，但时间较少，建议沟通后确认。', status: '未通过', position: '摄影师' },
];

const DEMO_AUDIT_QUEUE = [
  { id: 'aq1', name: 'AI创新社', icon: '🤖', type: '招新内容审核', submitter: '李负责人', submitted: '2026-03-27', content: '发布招新计划，招募算法/产品/运营方向共13人', status: 'pending' },
  { id: 'aq2', name: '街舞社', icon: '💃', type: '社团资料审核', submitter: '王同学', submitted: '2026-03-26', content: '新社团申请，提交资料包括：章程、指导老师证明、成员名单（30人）', status: 'pending' },
  { id: 'aq3', name: '电竞协会', icon: '🎮', type: '招新内容审核', submitter: '赵负责人', submitted: '2026-03-25', content: '招募主播/选手/运营，计划招新20人', status: 'approved' },
];

const DEMO_RISK_EVENTS = [
  { id: 'r1', type: '重复报名', level: 'medium', desc: '用户「测试账号A」在3小时内向同一社团提交了2次报名，疑似异常操作。', time: '2026-03-28 10:23', status: 'open' },
  { id: 'r2', type: '信息违规', level: 'high', desc: '社团「XX商业联盟」招新内容含有微信收费引流链接，疑似违规使用平台。', time: '2026-03-27 16:45', status: 'handling' },
  { id: 'r3', type: '账号异常', level: 'low', desc: '账号「u_9921」在30分钟内快速浏览并点击了47个社团页面，疑似爬虫行为。', time: '2026-03-27 08:12', status: 'closed' },
];

const DEMO_USERS = [
  { id: 'u1', name: '摄影协会-李负责人', role: '社团负责人', clubName: '摄影协会', status: 'active', joined: '2025-09-01' },
  { id: 'u2', name: '辩论队-周负责人', role: '社团负责人', clubName: '辩论队', status: 'active', joined: '2025-09-01' },
  { id: 'u3', name: 'AI创新社-张负责人', role: '社团负责人', clubName: 'AI创新社', status: 'pending', joined: '2026-03-20' },
  { id: 'u4', name: '王管理员', role: '平台管理员', clubName: '-', status: 'active', joined: '2025-08-15' },
  { id: 'u5', name: '街舞社-陈负责人', role: '社团负责人', clubName: '街舞社（待审核）', status: 'pending', joined: '2026-03-26' },
];

const ASSESS_STEPS = [
  {
    id: 'interests', title: '你最感兴趣的方向？', sub: '可多选，最多 3 项',
    type: 'multi', max: 3, field: 'interests',
    opts: [
      { val:'media',   e:'📷', l:'传媒 / 摄影' },
      { val:'tech',    e:'💻', l:'科技 / 编程' },
      { val:'arts',    e:'🎭', l:'文艺 / 表演' },
      { val:'debate',  e:'🗣️',l:'辩论 / 表达' },
      { val:'public',  e:'💚', l:'公益 / 志愿' },
      { val:'sports',  e:'⚽', l:'体育 / 健康' },
    ],
  },
  {
    id: 'skills', title: '你擅长或希望提升的技能？', sub: '可多选，最多 4 项',
    type: 'multi', max: 4, field: 'skills',
    opts: [
      { val:'design',   e:'🎨', l:'设计 / 摄影' },
      { val:'coding',   e:'⌨️', l:'编程开发' },
      { val:'writing',  e:'✍️', l:'写作文字' },
      { val:'speaking', e:'🎤', l:'演讲 / 主持' },
      { val:'ops',      e:'📋', l:'组织协调' },
      { val:'data',     e:'📊', l:'数据分析' },
      { val:'art',      e:'🖌️', l:'绘画 / 手工' },
      { val:'fitness',  e:'🏃', l:'体能 / 健身' },
    ],
  },
  {
    id: 'time', title: '每周可以投入多少时间？', sub: '单选',
    type: 'single', field: 'time',
    opts: [
      { val:'2', e:'⏱️', l:'2 小时以内' },
      { val:'4', e:'⏰', l:'2–4 小时' },
      { val:'6', e:'🕐', l:'4–6 小时' },
      { val:'8', e:'⚡', l:'6 小时以上' },
    ],
  },
  {
    id: 'personality', title: '你的性格倾向？', sub: '每组选择更符合你的一项',
    type: 'pairs', field: 'personality',
    pairs: [
      { id:'presence', a:{ val:'front', l:'台前表达' }, b:{ val:'back',  l:'幕后支持' } },
      { id:'work',     a:{ val:'solo',  l:'独立完成' }, b:{ val:'team',  l:'团队协作' } },
      { id:'style',    a:{ val:'exec',  l:'执行推动' }, b:{ val:'plan',  l:'策划创意' } },
    ],
  },
  {
    id: 'goals', title: '加入社团的主要目标？', sub: '可多选，最多 2 项',
    type: 'multi', max: 2, field: 'goals',
    opts: [
      { val:'friends',     e:'🤝', l:'结交朋友' },
      { val:'skills',      e:'📈', l:'技能提升' },
      { val:'resume',      e:'📄', l:'丰富履历' },
      { val:'competition', e:'🏆', l:'参与竞赛' },
      { val:'interest',    e:'💫', l:'纯粹兴趣' },
      { val:'volunteer',   e:'🌱', l:'社会贡献' },
    ],
  },
  {
    id: 'experience', title: '你的相关经验背景？', sub: '单选',
    type: 'single', field: 'experience',
    opts: [
      { val:'noexp',   e:'🌱', l:'零基础，想从头学习' },
      { val:'someexp', e:'📚', l:'有一些相关经验' },
      { val:'richexp', e:'🎯', l:'经验丰富，挑战核心岗位' },
    ],
  },
];

// ===================================================
// STATE
// ===================================================
const state = {
  // routing
  currentPage: 'landing',
  loginTarget: null,
  studentName: '同学',
  studentTab: 's-home',
  clubTab: 'c-profile',
  adminTab: 'a-audit',
  // selected
  selectedClubId: 'c1',
  applyTargetId: 'c1',
  // assessment
  assess: {
    step: 0,
    complete: false,
    interests: [], skills: [], time: '', personality: {}, goals: [], experience: '',
  },
  // club profile editable state
  clubProfile: {
    tags: ['摄影', '视频', '新媒体'],
    activities: ['年度摄影展', '新生摄影课', '校庆官方摄影', '摄影大赛'],
  },
  // data
  recommendations: [],
  applications: DEMO_APPLICATIONS.map(a => ({ ...a })),
  notifications: DEMO_NOTIFICATIONS.map(n => ({ ...n })),
  candidates: DEMO_CANDIDATES.map(c => ({ ...c })),
  auditQueue: DEMO_AUDIT_QUEUE.map(a => ({ ...a })),
  riskEvents: DEMO_RISK_EVENTS.map(r => ({ ...r })),
  users: DEMO_USERS.map(u => ({ ...u })),
  chatMsgs: [
    { role: 'bot', text: '你好！我是社团 FAQ 助手，有什么关于这个社团的问题都可以问我 😊' },
  ],
  plazaFilter: { cat: 'all', exp: 'all', kw: '' },
};

// ===================================================
// UTILS
// ===================================================
const $ = id => document.getElementById(id);

function con(id) { return $(id); }

function unreadCount() {
  return state.notifications.filter(n => !n.read).length;
}

function scoreClub(club, assess) {
  let score = 20;
  assess.interests.forEach(i => { if (club.matchDims.includes(i)) score += 15; });
  assess.skills.forEach(s => { if (club.matchDims.includes(s)) score += 10; });
  assess.goals.forEach(g => { if (club.matchDims.includes(g)) score += 8; });
  const userTime = parseInt(assess.time) || 4;
  if (userTime >= club.timeNeed) score += 12;
  else if (userTime >= club.timeNeed - 2) score += 4;
  else score -= 8;
  if (assess.experience === 'noexp' && club.experience === 'noexp') score += 8;
  else if (assess.experience === 'richexp') score += 8;
  else if (assess.experience === 'someexp' && club.experience === 'exp') score += 5;
  else if (assess.experience === 'noexp' && club.experience === 'exp') score -= 5;
  return Math.max(12, Math.min(99, score));
}

const ILABELS = { media:'传媒/摄影', tech:'科技/编程', arts:'文艺/表演', debate:'辩论/表达', public:'公益/志愿', sports:'体育/健康' };
const SLABELS = { design:'设计/摄影', coding:'编程', writing:'写作', speaking:'演讲/主持', ops:'组织协调', data:'数据分析', art:'绘画', fitness:'体能' };
const GLABELS = { friends:'结交朋友', skills:'技能提升', resume:'丰富履历', competition:'参与竞赛', interest:'纯粹兴趣', volunteer:'社会贡献' };

function buildReasons(club, assess) {
  const reasons = [];
  const iMatches = assess.interests.filter(i => club.matchDims.includes(i));
  if (iMatches.length) reasons.push(`兴趣契合：你对「${iMatches.map(i => ILABELS[i]||i).join('、')}」感兴趣，与该社团高度匹配`);
  const sMatches = assess.skills.filter(s => club.matchDims.includes(s));
  if (sMatches.length) reasons.push(`技能契合：你的「${sMatches.map(s => SLABELS[s]||s).join('、')}」能力在此有较大发挥空间`);
  const userTime = parseInt(assess.time) || 4;
  if (userTime >= club.timeNeed) reasons.push(`时间充裕：你每周可投入 ${userTime}h，满足该社团建议的 ${club.timeNeed}h`);
  const gMatches = assess.goals.filter(g => club.matchDims.includes(g));
  if (gMatches.length) reasons.push(`目标契合：该社团能帮助你实现「${gMatches.map(g => GLABELS[g]||g).join('、')}」的目标`);
  if (!reasons.length) reasons.push(`综合推荐：基于你的整体偏好，该社团是不错的选择`);
  return reasons;
}

function getRecommendedPositions(club, assess) {
  const sMatches = assess.skills.filter(s => club.matchDims.includes(s));
  if (sMatches.includes('writing') || sMatches.includes('ops')) return club.positions.find(p => p.name.includes('运营') || p.name.includes('宣传'))?.name || club.positions[0].name;
  if (sMatches.includes('coding') || sMatches.includes('data')) return club.positions.find(p => p.name.includes('技术') || p.name.includes('数据') || p.name.includes('算法'))?.name || club.positions[0].name;
  if (sMatches.includes('design')) return club.positions.find(p => p.name.includes('摄影') || p.name.includes('设计'))?.name || club.positions[0].name;
  return club.positions[0].name;
}

// ===================================================
// ROUTING
// ===================================================
function goTo(role) {
  showLoginModal(role);
}

function performGoTo(role) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.portal').forEach(p => p.classList.remove('active'));
  $(`pg-${role}`).classList.add('active');
  state.currentPage = role;
  if (role === 'student') {
    const nameEl = $('studentUserName');
    if (nameEl) nameEl.textContent = state.studentName;
    renderStudentTab('s-home');
  }
  if (role === 'club') renderClubTab('c-profile');
  if (role === 'admin') renderAdminTab('a-audit');
}

function showLoginModal(role) {
  state.loginTarget = role;
  const isStudent = role === 'student';

  const titles = {
    student: '👋 欢迎来到社团招新平台',
    club:    '社团负责人登录',
    admin:   '管理人员登录',
  };
  const subs = {
    student: '请输入你的姓名，平台将为你个性化展示',
    club:    '请输入社团负责人账号信息',
    admin:   '请输入平台管理员账号信息',
  };
  const hints = {
    club:  '💡 演示账号：<b>club@demo</b><br/>演示密码：<b>123456</b>',
    admin: '💡 演示账号：<b>admin@school</b><br/>演示密码：<b>admin2026</b>',
  };

  $('loginTitle').textContent     = titles[role];
  $('loginSub').textContent       = subs[role];
  $('loginHint').innerHTML        = hints[role] || '';

  // 姓名输入模式 vs 账号密码模式
  const passRow = $('loginPassRow');
  if (passRow) passRow.style.display = isStudent ? 'none' : '';
  const hintEl = $('loginHint');
  if (hintEl) hintEl.style.display = isStudent ? 'none' : '';
  const userLbl = $('loginUserLabel');
  if (userLbl) userLbl.textContent = isStudent ? '你的姓名' : '用户名';
  $('loginUser').placeholder      = isStudent ? '请输入你的姓名（如：张三、李四）' : '请输入用户名';
  $('loginSubmit').textContent    = isStudent ? '进 入' : '登 录';

  $('loginUser').value = '';
  $('loginPass').value = '';
  $('loginErr').textContent = '';
  $('loginModal').classList.add('open');
  setTimeout(() => $('loginUser').focus(), 100);
}

function closeLoginModal() {
  $('loginModal').classList.remove('open');
  state.loginTarget = null;
}

function goBack() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.portal').forEach(p => p.classList.remove('active'));
  $('pg-landing').classList.add('active');
  state.currentPage = 'landing';
}

// ===================================================
// STUDENT PORTAL
// ===================================================
function renderStudentTab(tab) {
  state.studentTab = tab;
  document.querySelectorAll('#pg-student .snav').forEach(a => {
    a.classList.toggle('active', a.dataset.tab === tab);
  });
  const c = $('sCon');
  const map = {
    's-home': renderSHome, 's-plaza': renderSPlaza, 's-assess': renderSAssess,
    's-recommend': renderSRecommend, 's-detail': renderSDetail,
    's-apply': renderSApply, 's-myapply': renderSMyApply, 's-notify': renderSNotify,
  };
  if (map[tab]) c.innerHTML = map[tab]();
  updateNBadge();
}

// -- Home --
function renderSHome() {
  const featured = CLUBS.slice(0, 4);
  return `
    <div class="page-hdr">
      <h2>👋 你好，${state.studentName}！</h2>
      <p>招新进行中，已有 ${CLUBS.length} 个社团向你开放报名</p>
    </div>
    <div class="card">
      <div class="row">
        <input id="homeKw" placeholder="搜索社团名称、标签、关键词..." style="flex:1"/>
        <button class="btn pri" data-action="home-search">🔍 搜索</button>
        <button class="btn" data-action="goto-assess">📝 完成测评获取推荐</button>
      </div>
    </div>
    <div class="card" style="background:linear-gradient(135deg,#eef1ff,#f3e8ff);border-color:#4361ee40">
      <div class="row" style="margin:0;align-items:flex-start">
        <span style="font-size:24px">⏰</span>
        <div style="flex:1">
          <div style="font-weight:600;margin-bottom:3px">招新截止提醒</div>
          <div style="font-size:13px;color:var(--muted)">辩论队（4月10日）、AI创新社（4月12日）即将截止，快去报名！</div>
        </div>
        <button class="btn sm" data-action="goto-plaza">查看 →</button>
      </div>
    </div>
    <div class="card">
      <h3>🔥 热门社团</h3>
      <div class="club-grid">${featured.map(c => clubCard(c)).join('')}</div>
    </div>
    <div class="card" style="text-align:center;padding:36px 20px">
      <div style="font-size:44px;margin-bottom:12px">✨</div>
      <h3 style="margin-bottom:8px">不知道该加入哪个社团？</h3>
      <p style="color:var(--muted);margin-bottom:18px;font-size:14px">完成 3 分钟兴趣测评，AI 为你生成专属推荐，给出匹配理由</p>
      <button class="btn pri" data-action="goto-assess">开始兴趣测评 →</button>
    </div>`;
}

// -- Plaza --
function renderSPlaza() {
  const { cat, exp, kw } = state.plazaFilter;
  const cats = [
    { val:'all',    l:'全部' }, { val:'media',  l:'📷 传媒' },
    { val:'tech',   l:'💻 科技' }, { val:'arts',   l:'🎭 文艺' },
    { val:'debate', l:'🗣️ 辩论' }, { val:'public', l:'💚 公益' },
    { val:'sports', l:'⚽ 体育' },
  ];
  let filtered = CLUBS.filter(c => {
    const catOk = cat === 'all' || c.category === cat;
    const expOk = exp === 'all' || c.experience === exp;
    const kwOk = !kw || c.name.includes(kw) || c.tags.some(t => t.includes(kw)) || c.desc.includes(kw);
    return catOk && expOk && kwOk;
  });
  return `
    <div class="page-hdr">
      <h2>🏪 社团广场</h2>
      <p>共 ${CLUBS.length} 个社团，找到 ${filtered.length} 个匹配结果</p>
    </div>
    <div class="card">
      <div class="row" style="margin-bottom:10px">
        <input id="plazaKw" value="${kw}" placeholder="搜索社团..." style="flex:1"/>
        <select id="plazaExp" style="width:auto">
          <option value="all" ${exp==='all'?'selected':''}>经验不限</option>
          <option value="noexp" ${exp==='noexp'?'selected':''}>零基础可参与</option>
          <option value="exp" ${exp==='exp'?'selected':''}>需有相关经验</option>
        </select>
        <button class="btn pri" data-action="plaza-filter">筛选</button>
      </div>
      <div class="row" style="gap:6px;margin:0">
        ${cats.map(c => `<button class="btn sm ${cat===c.val?'pri':''}" data-plaza-cat="${c.val}">${c.l}</button>`).join('')}
      </div>
    </div>
    ${state.recommendations.length ? `
    <div class="card" style="border-color:var(--brand);background:var(--brand-lt)">
      <h3 style="color:var(--brand)">✨ AI 推荐专区（基于你的测评结果）</h3>
      <div class="club-grid">${state.recommendations.slice(0,2).map(r => clubCard(CLUBS.find(c=>c.id===r.id), r.score)).join('')}</div>
      <button class="btn" data-action="goto-recommend" style="margin-top:10px">查看完整推荐列表 →</button>
    </div>` : ''}
    <div class="club-grid" id="plazaGrid">
      ${filtered.map(c => clubCard(c)).join('')}
    </div>
    ${filtered.length===0 ? '<div class="card" style="text-align:center;color:var(--muted);padding:32px">没有找到匹配的社团，试试其他筛选条件</div>' : ''}`;
}

function clubCard(club, score) {
  const scoreBadge = score ? `<span class="badge b-blue">匹配 ${score}</span>` : '';
  return `
    <div class="club-card" data-action="view-club" data-id="${club.id}">
      <div class="cc-top">
        <div class="cc-icon">${club.icon}</div>
        <div style="flex:1">
          <div class="cc-name">${club.name} ${scoreBadge}</div>
          <div class="cc-tags">
            ${club.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            <span class="badge ${club.experience==='noexp'?'b-green':'b-yellow'}">${club.experience==='noexp'?'零基础':'需经验'}</span>
          </div>
        </div>
      </div>
      <div class="cc-desc">${club.desc}</div>
      <div class="cc-stats">
        <span>👥 ${club.members}人</span>
        <span>📅 ${club.frequency}</span>
        <span>⏰ 约${club.timeNeed}h/周</span>
        <span>截止 ${club.deadline}</span>
      </div>
    </div>`;
}

// -- Assessment --
function renderSAssess() {
  const s = state.assess;
  const step = ASSESS_STEPS[s.step];
  const labels = ['兴趣', '技能', '时间', '性格', '目标', '经验'];
  let optsHtml = '';

  if (step.type === 'multi' || step.type === 'single') {
    const cols = step.opts.length === 8 ? 'cols4' : '';
    optsHtml = `<div class="opt-grid ${cols}">
      ${step.opts.map(o => {
        const field = s[step.field];
        const sel = Array.isArray(field) ? field.includes(o.val) : field === o.val;
        return `<div class="opt-card ${sel?'sel':''}" data-aopt="${o.val}" data-afield="${step.field}" data-atype="${step.type}" data-amax="${step.max||1}">
          <span class="opt-e">${o.e}</span><span>${o.l}</span>
        </div>`;
      }).join('')}
    </div>`;
  } else {
    optsHtml = `<div class="pair-group">
      ${step.pairs.map(pair => {
        const selVal = s.personality[pair.id] || '';
        return `<div class="pair-row">
          <div class="pair-opt ${selVal===pair.a.val?'sel':''}" data-apair="${pair.id}" data-apairval="${pair.a.val}">${pair.a.l}</div>
          <div class="pair-vs">VS</div>
          <div class="pair-opt ${selVal===pair.b.val?'sel':''}" data-apair="${pair.id}" data-apairval="${pair.b.val}">${pair.b.l}</div>
        </div>`;
      }).join('')}
    </div>`;
  }

  return `
    <div class="page-hdr" style="display:flex;align-items:flex-start;justify-content:space-between">
      <div>
        <h2>📝 兴趣测评</h2>
        <p>完成 6 个维度评估，AI 为你生成专属社团推荐</p>
      </div>
      <button class="btn sm ghost" data-action="retake-assess" style="margin-top:4px;color:var(--muted);flex-shrink:0">
        🔄 重新测试
      </button>
    </div>
    <div class="card">
      <div class="step-bar">
        ${[0,1,2,3,4,5].map(i => `<div class="step-seg ${i<s.step?'done':i===s.step?'active':''}"></div>`).join('')}
      </div>
      <div class="step-labels">
        ${labels.map((l,i) => `<div class="step-lbl ${i<s.step?'done':i===s.step?'active':''}">${i<s.step?'✓ ':''}${l}</div>`).join('')}
      </div>
      <h3 style="margin-bottom:4px">${step.title}</h3>
      <p style="color:var(--muted);font-size:13px;margin-bottom:0">${step.sub}</p>
      ${optsHtml}
      <div class="assess-nav">
        <button class="btn" id="assessBack" ${s.step===0?'disabled':''}>← 上一步</button>
        <span class="assess-step-info">${s.step+1} / ${ASSESS_STEPS.length}</span>
        ${s.step < ASSESS_STEPS.length - 1
          ? `<button class="btn pri" id="assessNext">下一步 →</button>`
          : `<button class="btn suc" id="assessGen">✨ 生成专属推荐</button>`}
      </div>
    </div>`;
}

// -- Recommend --
function renderSRecommend() {
  if (!state.recommendations.length) {
    return `
      <div class="page-hdr"><h2>✨ 推荐结果</h2></div>
      <div class="card" style="text-align:center;padding:48px 20px">
        <div style="font-size:48px;margin-bottom:14px">📝</div>
        <h3 style="margin-bottom:8px">还未完成兴趣测评</h3>
        <p style="color:var(--muted);margin-bottom:18px">完成测评后，AI 将为你生成专属推荐列表和详细匹配理由</p>
        <button class="btn pri" data-action="goto-assess">立即完成测评 →</button>
      </div>`;
  }
  const a = state.assess;
  const iDesc = a.interests.map(i => ILABELS[i]||i);
  const sDesc = a.skills.map(s => SLABELS[s]||s);
  const gDesc = a.goals.map(g => GLABELS[g]||g);
  const pDesc = Object.values(a.personality).map(v => ({
    front:'台前表达', back:'幕后支持', solo:'独立自主', team:'团队协作', exec:'执行推动', plan:'策划创意'
  }[v]||v)).filter(Boolean);
  const rankClass = ['gold','silver','bronze','','',''];
  const typeLabel = a.interests.includes('tech')||a.skills.includes('coding') ? '技术实践型' :
    a.interests.includes('media')||a.interests.includes('arts') ? '内容创意型' :
    a.interests.includes('public') ? '公益参与型' : '综合发展型';

  return `
    <div class="page-hdr">
      <h2>✨ 推荐结果</h2>
      <p>基于你的兴趣测评，AI 为你生成的专属社团推荐</p>
    </div>
    <div class="profile-card">
      <div style="font-weight:600;margin-bottom:6px">📋 你的偏好画像 · <span style="color:var(--brand)">${typeLabel}</span></div>
      <div class="profile-tags">
        ${iDesc.map(l=>`<span class="badge b-blue">${l}</span>`).join('')}
        ${sDesc.map(l=>`<span class="badge b-gray">${l}</span>`).join('')}
        ${gDesc.map(l=>`<span class="badge b-green">${l}</span>`).join('')}
        ${a.time?`<span class="badge b-yellow">每周${a.time}h</span>`:''}
        ${pDesc.map(l=>`<span class="badge b-orange">${l}</span>`).join('')}
      </div>
    </div>
    <h3 style="margin-bottom:12px">为你推荐的社团 Top ${state.recommendations.length}</h3>
    ${state.recommendations.map((r, i) => {
      const club = CLUBS.find(c => c.id === r.id);
      const sc = r.score;
      const barColor = sc>=80?'var(--success)':sc>=60?'var(--brand)':'var(--warning)';
      const numClass = sc>=80?'s-high':sc>=60?'s-med':'s-low';
      return `
        <div class="rec-card">
          <div class="rec-top">
            <div class="rec-rank ${rankClass[i]}">${i+1}</div>
            <div class="rec-icon">${club.icon}</div>
            <div class="rec-info">
              <div class="rec-name">${club.name}</div>
              <div class="rec-score-lbl">匹配度</div>
              <div class="match-wrap" style="max-width:200px">
                <div class="match-bar"><div class="match-fill" style="width:${sc}%;background:${barColor}"></div></div>
                <span class="match-num ${numClass}">${sc}</span>
              </div>
            </div>
            <div class="rec-actions">
              <button class="btn pri sm" data-action="view-club" data-id="${club.id}">查看详情</button>
              <button class="btn sm" data-action="apply-club" data-id="${club.id}">立即报名</button>
            </div>
          </div>
          <div class="rec-reasons">
            ${r.reasons.map(reason=>`<div class="reason-row"><span class="rdot">•</span><span>${reason}</span></div>`).join('')}
            <div class="reason-row"><span class="rdot">•</span><span>推荐岗位：<b>${r.position}</b></span></div>
          </div>
          <div class="row" style="gap:6px;margin:0">
            ${club.tags.map(t=>`<span class="tag">${t}</span>`).join('')}
            <span class="badge ${club.experience==='noexp'?'b-green':'b-yellow'}">${club.experience==='noexp'?'零基础可参':'需有经验'}</span>
            <span style="margin-left:auto;font-size:12px;color:var(--muted)">截止 ${club.deadline}</span>
          </div>
        </div>`;
    }).join('')}
    <div style="text-align:center;padding:14px 0;color:var(--muted);font-size:13px">
      <button class="btn" data-action="goto-plaza">浏览全部 ${CLUBS.length} 个社团</button>
    </div>`;
}

// -- Club Detail --
function renderSDetail() {
  const club = CLUBS.find(c => c.id === state.selectedClubId) || CLUBS[0];
  const msgs = state.chatMsgs.map(m => `
    <div class="chat-msg ${m.role}">
      <div class="msg-bubble">${m.text}</div>
    </div>`).join('');
  return `
    <div class="page-hdr">
      <h2>📋 社团详情</h2>
    </div>
    <div class="detail-hero">
      <div class="detail-hero-top">
        <div class="dh-icon">${club.icon}</div>
        <div style="flex:1">
          <div class="dh-name">${club.name}</div>
          <div class="row" style="gap:6px;margin-bottom:8px">
            ${club.tags.map(t=>`<span class="tag">${t}</span>`).join('')}
            <span class="badge ${club.experience==='noexp'?'b-green':'b-yellow'}">${club.experience==='noexp'?'零基础可参与':'需有相关经验'}</span>
          </div>
          <div style="font-size:13px;color:var(--muted)">👥 ${club.members}人 · 成立于${club.founded}年 · ${club.frequency}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn pri" data-action="apply-club" data-id="${club.id}">📮 立即报名</button>
          <button class="btn" data-action="goto-plaza">← 返回广场</button>
        </div>
      </div>
      <div style="font-size:14px;line-height:1.7;color:#374151">${club.fullDesc}</div>
    </div>
    <!-- Positions -->
    <div class="card">
      <h3>🧩 开放岗位（共 ${club.recruitCount} 人）</h3>
      <div class="g2">
        ${club.positions.map(p => `
          <div class="position-card">
            <h4>${p.name} <span class="badge b-blue">招 ${p.count} 人</span></h4>
            <p style="margin-bottom:4px">${p.desc}</p>
            <p style="font-size:12px;color:var(--success)">要求：${p.require}</p>
          </div>`).join('')}
      </div>
    </div>
    <!-- Activities -->
    <div class="card">
      <h3>📅 主要活动</h3>
      <div class="row" style="gap:8px">
        ${club.activities.map(a=>`<span class="badge b-purple">${a}</span>`).join('')}
      </div>
    </div>
    <!-- Reviews -->
    <div class="card">
      <h3>💬 成员评价</h3>
      ${club.reviews.map(r=>`
        <div class="review-item">
          <div class="row" style="margin-bottom:4px">
            <b style="font-size:14px">${r.name}</b>
            <span class="review-stars">${'★'.repeat(r.star)}${'☆'.repeat(5-r.star)}</span>
          </div>
          <div style="font-size:13px;color:var(--muted);line-height:1.6">${r.content}</div>
        </div>`).join('')}
    </div>
    <!-- FAQ + Chatbot -->
    <div class="card">
      <h3>❓ 常见问题 & AI 答疑</h3>
      ${club.faqs.map(f=>`
        <div class="faq-item">
          <div class="faq-q">Q：${f.q}？</div>
          <div class="faq-a">A：${f.a}</div>
        </div>`).join('')}
      <hr class="divider"/>
      <div class="chat-window">
        <div class="chat-hdr">🤖 AI FAQ 助手 · 实时答疑</div>
        <div class="chat-msgs" id="chatMsgs">${msgs}</div>
        <div class="chat-input-row">
          <input id="chatInput" placeholder="输入你的问题，例如：需要准备什么？"/>
          <button class="btn pri sm" id="chatSend">发送</button>
        </div>
      </div>
    </div>
    <div style="padding:16px 0;text-align:center">
      <button class="btn pri" data-action="apply-club" data-id="${club.id}" style="padding:12px 28px">📮 立即报名 ${club.name}</button>
    </div>`;
}

// -- Apply --
function renderSApply() {
  const club = CLUBS.find(c => c.id === state.applyTargetId) || CLUBS[0];
  return `
    <div class="page-hdr">
      <h2>📮 一键报名</h2>
      <p>当前报名社团：<b>${club.name}</b> ${club.icon}</p>
    </div>
    <div class="card">
      <h3>基础信息（填写一次，多社团复用）</h3>
      <div class="g2">
        <div class="field"><label>姓名</label><input id="fName" value="张同学"/></div>
        <div class="field"><label>年级</label><input id="fGrade" value="大一"/></div>
        <div class="field"><label>专业</label><input id="fMajor" value="新闻传播学"/></div>
        <div class="field"><label>联系方式</label><input id="fContact" value="188****1234"/></div>
      </div>
    </div>
    <div class="card">
      <h3>报名意向</h3>
      <div class="field">
        <label>希望加入的岗位</label>
        <select id="fPos">
          ${club.positions.map(p=>`<option>${p.name}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label>每周可投入时间</label>
        <select id="fTime">
          <option>2小时以内</option><option>2-4小时</option>
          <option selected>4-6小时</option><option>6小时以上</option>
        </select>
      </div>
      <div class="field">
        <label>报名动机（必填）</label>
        <textarea id="fReason" rows="3" placeholder="简述你为什么想加入这个社团...">希望通过加入${club.name}提升相关技能，积累宝贵的实践经验。</textarea>
      </div>
      <div class="field">
        <label>过往相关经历（可选）</label>
        <textarea id="fExp" rows="2" placeholder="如有相关经历可以简要描述..."></textarea>
      </div>
      <div class="field">
        <label>作品链接 / 附件（可选）</label>
        <input id="fLink" placeholder="作品集、GitHub、或其他链接..."/>
      </div>
      <div class="field">
        <label><input type="checkbox" checked style="width:auto;margin-right:6px"/> 若该岗位招满，是否同意调配到其他岗位？</label>
      </div>
      <div style="margin-top:14px">
        <button class="btn pri fw" id="submitApplyBtn">✅ 提交报名</button>
      </div>
    </div>`;
}

// -- My Apply --
function renderSMyApply() {
  const statuses = {
    '待审核':'b-gray', '待面试':'b-blue', '已通过初审':'b-yellow',
    '已录取':'b-green', '未通过':'b-red', '已撤回':'b-red',
  };
  const timelineMap = {
    '待审核':    [true, false, false, false],
    '待面试':    [true, true,  false, false],
    '已通过初审':[true, true,  false, false],
    '已录取':    [true, true,  true,  true ],
    '未通过':    [true, true,  false, false],
    '已撤回':    [true, false, false, false],
  };
  const tlLabels = ['已提交', '待审核', '面试通知', '录取结果'];
  const canWithdraw = (app) =>
    !app.withdrawn && ['待审核', '待面试', '已通过初审'].includes(app.status);

  return `
    <div class="page-hdr">
      <h2>👤 我的报名</h2>
      <p>共提交 ${state.applications.length} 份报名，跟踪各社团审核进度</p>
    </div>
    ${state.applications.length === 0 ? `
      <div class="card" style="text-align:center;padding:40px;color:var(--muted)">
        暂无报名记录，去推荐页或社团广场选一个社团报名吧 🎒
      </div>` :
    state.applications.map(app => {
      const tl = timelineMap[app.status] || [true,false,false,false];
      const isActive = (i) => tl[i] && !tl[i+1] && i < 3;
      const withdrawHtml = app.withdrawn
        ? `<span style="font-size:12px;color:var(--muted);display:flex;align-items:center;gap:4px">
             ↩ 已撤回申请（不可重复撤回）
           </span>`
        : canWithdraw(app)
          ? `<button class="btn sm" data-action="withdraw" data-id="${app.id}"
               style="border-color:var(--danger);color:var(--danger)">
               ↩ 撤回申请
             </button>`
          : '';
      return `
        <div class="apply-item" style="${app.withdrawn?'opacity:.7':''}">
          <div class="apply-top">
            <div class="apply-icon">${app.clubIcon}</div>
            <div class="apply-name">${app.clubName}</div>
            <span class="badge ${statuses[app.status]||'b-gray'}">${app.status}</span>
          </div>
          <div style="font-size:13px;color:var(--muted);margin-bottom:8px">
            报名岗位：${app.position} · 匹配分：<b style="color:var(--brand)">${app.score}</b> · 报名时间：${app.appliedAt}
          </div>
          <div class="apply-timeline">
            ${tlLabels.map((l,i) => `
              <div class="tl-step ${tl[i]&&!isActive(i)?'done':tl[i]?'active':''}">${l}</div>
            `).join('')}
          </div>
          ${withdrawHtml ? `<div style="display:flex;justify-content:flex-end;margin-top:10px">${withdrawHtml}</div>` : ''}
        </div>`;
    }).join('')}
    <div class="card" style="text-align:center;padding:16px">
      <button class="btn" data-action="goto-plaza">继续浏览社团广场</button>
    </div>`;
}

// -- Notifications --
function renderSNotify() {
  const unread = state.notifications.filter(n=>!n.read).length;
  return `
    <div class="page-hdr">
      <h2>🔔 消息通知</h2>
      <p>共 ${state.notifications.length} 条消息，${unread} 条未读</p>
    </div>
    <div class="card">
      <div class="row" style="justify-content:flex-end;margin-bottom:0">
        <button class="btn sm ghost" id="markAllRead">全部标为已读</button>
      </div>
      <div class="notify-list">
        ${state.notifications.map(n => `
          <div class="notify-item ${n.read?'':'unread'}" data-nid="${n.id}">
            <div class="notify-icon">${n.icon}</div>
            <div class="notify-body">
              <div class="notify-title">${n.title}</div>
              <div class="notify-content">${n.content}</div>
              <div class="notify-time">${n.time}</div>
            </div>
            ${!n.read ? '<div class="unread-dot"></div>' : ''}
          </div>`).join('')}
      </div>
    </div>`;
}

// ===================================================
// CLUB PORTAL
// ===================================================
function renderClubTab(tab) {
  state.clubTab = tab;
  document.querySelectorAll('#pg-club .snav').forEach(a => {
    a.classList.toggle('active', a.dataset.tab === tab);
  });
  const c = $('cCon');
  const map = {
    'c-profile': renderCProfile, 'c-publish': renderCPublish,
    'c-candidates': renderCCandidates, 'c-dashboard': renderCDashboard,
    'c-notify': renderCNotify,
  };
  if (map[tab]) c.innerHTML = map[tab]();
}

function renderCProfile() {
  const club = CLUBS[0];
  const p = state.clubProfile;
  return `
    <div class="page-hdr">
      <h2>🏠 社团主页维护</h2>
      <p>编辑社团信息，完善展示内容，吸引更多合适的新生</p>
    </div>
    <div class="card">
      <h3>基本信息</h3>
      <div class="g2">
        <div class="field"><label>社团名称</label><input value="${club.name}"/></div>
        <div class="field"><label>社团类别</label>
          <select><option>传媒</option><option>科技</option><option>文艺</option><option>公益</option><option>体育</option></select>
        </div>
        <div class="field"><label>活动频率</label><input value="${club.frequency}"/></div>
        <div class="field"><label>建议每周时长（小时）</label><input type="number" value="${club.timeNeed}"/></div>
      </div>
      <div class="field"><label>社团简介（展示在广场卡片）</label><textarea rows="2">${club.desc}</textarea></div>
      <div class="field"><label>详细介绍（展示在社团详情页）</label><textarea rows="4">${club.fullDesc}</textarea></div>
    </div>
    <div class="card">
      <h3>社团标签（用于匹配推荐）</h3>
      <div class="row" style="gap:6px;margin-bottom:10px">
        ${p.tags.map((t,i)=>`
          <span class="badge b-blue" style="display:inline-flex;align-items:center;gap:4px">
            ${t}
            <span data-action="remove-tag" data-idx="${i}"
              style="cursor:pointer;font-size:13px;opacity:.65;margin-left:2px;line-height:1"
              title="点击移除">×</span>
          </span>`).join('')}
        <button class="btn sm" data-action="add-tag" style="flex-shrink:0">+ 添加标签</button>
      </div>
      <div style="font-size:13px;color:var(--muted)">标签越准确，AI 推荐给你的候选人就越匹配。点击标签右侧 × 可移除。</div>
    </div>
    <div class="card">
      <h3>主要活动</h3>
      <div class="row" style="gap:6px;margin-bottom:10px">
        ${p.activities.map((a,i)=>`
          <span class="badge b-purple" style="display:inline-flex;align-items:center;gap:4px">
            ${a}
            <span data-action="remove-activity" data-idx="${i}"
              style="cursor:pointer;font-size:13px;opacity:.65;margin-left:2px;line-height:1"
              title="点击移除">×</span>
          </span>`).join('')}
        <button class="btn sm" data-action="add-activity" style="flex-shrink:0">+ 添加活动</button>
      </div>
    </div>
    <div class="card">
      <h3>AI 文案优化建议</h3>
      <div style="background:var(--brand-lt);border-radius:8px;padding:12px;font-size:13px;color:var(--muted);line-height:1.7">
        💡 当前社团简介较简短，建议补充"适合什么同学"的描述，可提升报名转化率约 30%。<br/>
        💡 标签中可添加"内容创作"以覆盖更多对新媒体感兴趣的新生。
      </div>
      <button class="btn sm" data-action="ai-optimize" style="margin-top:10px">✨ 一键优化文案</button>
    </div>
    <button class="btn pri" data-action="save-profile">💾 保存修改</button>`;
}

function renderCPublish() {
  return `
    <div class="page-hdr">
      <h2>📣 招新发布</h2>
      <p>发布招新计划，审核通过后进入社团广场和推荐池</p>
    </div>
    <div class="card">
      <h3>招新基本设置</h3>
      <div class="g2">
        <div class="field"><label>招新标题</label><input value="摄影协会 2026 春季招新"/></div>
        <div class="field"><label>招新总人数</label><input type="number" value="15"/></div>
        <div class="field"><label>报名开始时间</label><input type="date" value="2026-03-28"/></div>
        <div class="field"><label>报名截止时间</label><input type="date" value="2026-04-15"/></div>
      </div>
    </div>
    <div class="card">
      <h3>岗位设置</h3>
      ${CLUBS[0].positions.map((p,i) => `
        <div style="background:var(--bg);border-radius:8px;padding:12px;margin-bottom:8px">
          <div class="g2">
            <div class="field"><label>岗位名称</label><input value="${p.name}"/></div>
            <div class="field"><label>招募人数</label><input type="number" value="${p.count}"/></div>
          </div>
          <div class="field"><label>岗位描述</label><input value="${p.desc}"/></div>
          <div class="field"><label>招募要求</label><input value="${p.require}"/></div>
        </div>`).join('')}
      <button class="btn sm" data-action="add-position">+ 添加岗位</button>
    </div>
    <div class="card">
      <h3>报名表单设置</h3>
      <div style="font-size:13px;color:var(--muted);margin-bottom:10px">平台统一收集基础信息（姓名、年级、专业、联系方式），以下为社团自定义字段：</div>
      <div class="field"><label>✅ 报名动机（必填）</label></div>
      <div class="field"><label><input type="checkbox" checked style="width:auto;margin-right:6px"/> 过往经历（可选）</label></div>
      <div class="field"><label><input type="checkbox" style="width:auto;margin-right:6px"/> 作品链接（可选）</label></div>
      <div class="field"><label><input type="checkbox" checked style="width:auto;margin-right:6px"/> 是否服从调剂（必填）</label></div>
    </div>
    <div class="row">
      <button class="btn pri" id="publishBtn">🚀 提交审核</button>
      <button class="btn">暂存草稿</button>
    </div>
    <div id="publishMsg" style="margin-top:10px;color:var(--muted);font-size:13px"></div>`;
}

function renderCCandidates() {
  const total = state.candidates.length;
  const byStatus = { '待审核':0, '待面试':0, '已录取':0, '未通过':0 };
  state.candidates.forEach(c => { if (byStatus[c.status]!==undefined) byStatus[c.status]++; });
  const statusColor = { '待审核':'b-gray','待面试':'b-blue','已录取':'b-green','未通过':'b-red' };
  return `
    <div class="page-hdr">
      <h2>👥 候选人管理</h2>
      <p>共 ${total} 名候选人，按匹配度排序</p>
    </div>
    <div class="g4" style="margin-bottom:14px">
      ${Object.entries(byStatus).map(([k,v]) => `
        <div class="metric-card">
          <div class="metric-val" style="font-size:22px">${v}</div>
          <div class="metric-lbl">${k}</div>
        </div>`).join('')}
    </div>
    <div class="card" style="padding:10px 14px">
      <div class="row" style="margin:0">
        <select style="width:auto"><option>全部岗位</option>${CLUBS[0].positions.map(p=>`<option>${p.name}</option>`).join('')}</select>
        <select style="width:auto">
          <option>全部状态</option><option>待审核</option><option>待面试</option><option>已录取</option><option>未通过</option>
        </select>
        <select style="width:auto"><option>按匹配度排序</option><option>按报名时间排序</option></select>
      </div>
    </div>
    ${state.candidates.sort((a,b)=>b.score-a.score).map(cand => `
      <div class="cand-card">
        <div class="cand-avatar">${cand.avatar}</div>
        <div class="cand-info">
          <div class="cand-name">${cand.name}
            <span class="badge ${statusColor[cand.status]||'b-gray'}">${cand.status}</span>
          </div>
          <div class="cand-tags">
            <span class="badge b-blue">匹配 ${cand.score}</span>
            <span class="badge b-gray">${cand.major}</span>
            <span class="badge b-orange">${cand.position}</span>
            ${cand.tags.map(t=>`<span class="tag">${t}</span>`).join('')}
          </div>
          <div class="cand-reason">${cand.reason}</div>
        </div>
        <div class="cand-actions">
          <button class="btn sm pri" data-action="cand-status" data-id="${cand.id}" data-status="待面试">邀请面试</button>
          <button class="btn sm suc" data-action="cand-status" data-id="${cand.id}" data-status="已录取">录取</button>
          <button class="btn sm dan" data-action="cand-status" data-id="${cand.id}" data-status="未通过">淘汰</button>
        </div>
      </div>`).join('')}`;
}

function renderCDashboard() {
  return `
    <div class="page-hdr">
      <h2>📊 招新数据看板</h2>
      <p>本期招新数据总览 · 数据更新至 2026-03-28</p>
    </div>
    <div class="metric-grid">
      <div class="metric-card">
        <div class="metric-val">3,240</div>
        <div class="metric-lbl">社团页面曝光量</div>
        <div class="metric-trend t-up">↑ 18% 较上期</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">865</div>
        <div class="metric-lbl">详情页点击数</div>
        <div class="metric-trend t-up">↑ 24%</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">127</div>
        <div class="metric-lbl">有效报名数</div>
        <div class="metric-trend t-up">↑ 35%</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">14.7%</div>
        <div class="metric-lbl">报名转化率</div>
        <div class="metric-trend t-up">↑ 3.2pp</div>
      </div>
    </div>
    <div class="g2">
      <div class="card">
        <h3>各岗位报名人数</h3>
        <div class="bar-chart">
          ${[['新媒体运营',62],['摄影师',45],['活动记录',20]].map(([n,v]) => `
            <div class="bar-row">
              <div class="bar-name">${n}</div>
              <div class="bar-track">
                <div class="bar-fill" style="width:${Math.round(v/62*100)}%"><span>${v}</span></div>
              </div>
              <div class="bar-val">${v}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <h3>报名专业分布</h3>
        <div class="bar-chart">
          ${[['新闻传播',38],['计算机',22],['工商管理',18],['艺术设计',15],['其他',34]].map(([n,v]) => `
            <div class="bar-row">
              <div class="bar-name">${n}</div>
              <div class="bar-track">
                <div class="bar-fill" style="width:${Math.round(v/38*100)}%;background:var(--success)"><span>${v}</span></div>
              </div>
              <div class="bar-val">${v}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="card">
      <h3>匹配度分布</h3>
      <div class="bar-chart">
        ${[['80-99分（高匹配）',52],['60-79分（中匹配）',45],['40-59分（低匹配）',18],['40分以下',12]].map(([n,v]) => `
          <div class="bar-row">
            <div class="bar-name" style="width:130px;text-align:right">${n}</div>
            <div class="bar-track">
              <div class="bar-fill" style="width:${Math.round(v/52*100)}%;background:${n.includes('高')?'var(--success)':n.includes('中')?'var(--brand)':n.includes('低')?'var(--warning)':'var(--muted)'}"><span>${v}</span></div>
            </div>
            <div class="bar-val">${v}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderCNotify() {
  const statusColor = { '待审核':'b-gray','待面试':'b-blue','已录取':'b-green','未通过':'b-red' };
  return `
    <div class="page-hdr">
      <h2>✉️ 通知发送</h2>
      <p>向候选人批量或单独发送面试邀请、录取通知、活动通知</p>
    </div>
    <div class="card">
      <h3>发送通知</h3>
      <div class="field">
        <label>通知类型</label>
        <select id="notifyType">
          <option>面试邀请</option><option>录取通知</option><option>淘汰告知</option><option>活动邀请</option>
        </select>
      </div>
      <div class="field">
        <label>发送对象</label>
        <select id="notifyTarget">
          <option>全部待审核候选人</option><option>全部待面试候选人</option>
          <option>已选定（手动勾选）</option>
        </select>
      </div>
      <div class="field">
        <label>通知内容</label>
        <textarea id="notifyContent" rows="4">你好！你已通过摄影协会的初审，诚邀你参加面试。
时间：2026年4月10日 14:00-16:00
地点：艺术楼 302 室
请准时参加，带上相关作品集（如有）。
                
——摄影协会招新组</textarea>
      </div>
      <div class="row">
        <button class="btn pri" id="sendNotifyBtn">📤 发送通知</button>
        <button class="btn">预览效果</button>
      </div>
      <div id="notifySendMsg" style="margin-top:10px;font-size:13px"></div>
    </div>
    <div class="card">
      <h3>候选人快速操作</h3>
      ${state.candidates.filter(c=>c.status==='待审核'||c.status==='待面试').map(cand => `
        <div class="row" style="align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
          <div style="flex:1">
            <b>${cand.name}</b> <span class="badge ${statusColor[cand.status]||'b-gray'}">${cand.status}</span>
            <span style="font-size:12px;color:var(--muted);margin-left:8px">${cand.position}</span>
          </div>
          <button class="btn sm pri" data-action="cand-status" data-id="${cand.id}" data-status="待面试">邀面试</button>
          <button class="btn sm suc" data-action="cand-status" data-id="${cand.id}" data-status="已录取">录取</button>
          <button class="btn sm dan" data-action="cand-status" data-id="${cand.id}" data-status="未通过">淘汰</button>
        </div>`).join('')}
    </div>`;
}

// ===================================================
// ADMIN PORTAL
// ===================================================
function renderAdminTab(tab) {
  state.adminTab = tab;
  document.querySelectorAll('#pg-admin .snav').forEach(a => {
    a.classList.toggle('active', a.dataset.tab === tab);
  });
  // Dynamically update audit pending count badge
  const auditNdot = document.querySelector('#pg-admin [data-tab="a-audit"] .ndot');
  if (auditNdot) {
    const pendingCount = state.auditQueue.filter(a => a.status === 'pending').length;
    auditNdot.textContent = pendingCount;
    auditNdot.style.display = pendingCount > 0 ? 'inline' : 'none';
  }
  const c = $('aCon');
  const map = {
    'a-audit': renderAAudit, 'a-perms': renderAPerms,
    'a-overview': renderAOverview, 'a-rules': renderARules, 'a-risk': renderARisk,
  };
  if (map[tab]) c.innerHTML = map[tab]();
}

function renderAAudit() {
  const pending = state.auditQueue.filter(a=>a.status==='pending').length;
  const statusColor = { pending:'b-yellow', approved:'b-green', rejected:'b-red' };
  const statusLabel = { pending:'待审核', approved:'已通过', rejected:'已驳回' };
  return `
    <div class="page-hdr">
      <h2>🔍 社团审核</h2>
      <p>共 ${state.auditQueue.length} 条审核记录，${pending} 条待处理</p>
    </div>
    ${state.auditQueue.map(item => `
      <div class="audit-card">
        <div class="audit-icon">${item.icon}</div>
        <div class="audit-info">
          <div class="audit-name">${item.name}
            <span class="badge ${statusColor[item.status]}">${statusLabel[item.status]}</span>
            <span class="badge b-gray" style="margin-left:4px">${item.type}</span>
          </div>
          <div class="audit-meta">${item.content}</div>
          <div class="audit-meta" style="margin-top:3px">提交人：${item.submitter} · ${item.submitted}</div>
        </div>
        ${item.status==='pending' ? `
          <div class="audit-actions">
            <button class="btn sm suc" data-action="audit" data-id="${item.id}" data-status="approved">✓ 通过</button>
            <button class="btn sm dan" data-action="audit" data-id="${item.id}" data-status="rejected">✗ 驳回</button>
          </div>` : `
          <div style="font-size:13px;color:var(--muted)">${statusLabel[item.status]}</div>`}
      </div>`).join('')}`;
}

function renderAPerms() {
  const roleColor = { '平台管理员':'b-purple', '社团负责人':'b-blue' };
  const statusColor = { active:'b-green', pending:'b-yellow', disabled:'b-red' };
  const statusLabel = { active:'正常', pending:'待审核', disabled:'已停用' };
  return `
    <div class="page-hdr">
      <h2>🔑 权限管理</h2>
      <p>管理平台账号权限，审核社团负责人身份</p>
    </div>
    <div class="card" style="padding:10px 14px">
      <div class="row" style="margin:0">
        <input placeholder="搜索账号..." style="flex:1;max-width:240px"/>
        <select style="width:auto"><option>全部角色</option><option>平台管理员</option><option>社团负责人</option></select>
        <select style="width:auto"><option>全部状态</option><option>正常</option><option>待审核</option></select>
      </div>
    </div>
    <div class="card" style="padding:0">
      <table class="perm-table">
        <thead>
          <tr><th>账号名称</th><th>角色</th><th>关联社团</th><th>状态</th><th>加入时间</th><th>操作</th></tr>
        </thead>
        <tbody>
          ${state.users.map(u => `
            <tr>
              <td><b>${u.name}</b></td>
              <td><span class="badge ${roleColor[u.role]||'b-gray'}">${u.role}</span></td>
              <td style="color:var(--muted);font-size:13px">${u.clubName}</td>
              <td><span class="badge ${statusColor[u.status]||'b-gray'}">${statusLabel[u.status]||u.status}</span></td>
              <td style="color:var(--muted);font-size:13px">${u.joined}</td>
              <td>
                ${u.status==='pending' ? `<button class="btn sm suc" data-action="approve-user" data-id="${u.id}">审核通过</button>` : ''}
                ${u.status !== 'disabled' ? `<button class="btn sm dan" data-action="disable-user" data-id="${u.id}">停用</button>` : `<span style="font-size:12px;color:var(--muted)">已停用</span>`}
              </td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderAOverview() {
  return `
    <div class="page-hdr">
      <h2>📈 数据总览</h2>
      <p>全平台招新数据 · 本招新周期（2026 春季）</p>
    </div>
    <div class="metric-grid">
      <div class="metric-card">
        <div class="metric-val">48</div>
        <div class="metric-lbl">上线社团数</div>
        <div class="metric-trend t-up">↑ 6 较上期</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">1,240</div>
        <div class="metric-lbl">新生注册数</div>
        <div class="metric-trend t-up">↑ 23%</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">3,862</div>
        <div class="metric-lbl">总报名量</div>
        <div class="metric-trend t-up">↑ 41%</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">89%</div>
        <div class="metric-lbl">测评完成率</div>
        <div class="metric-trend t-up">↑ 12pp</div>
      </div>
    </div>
    <div class="g2">
      <div class="card">
        <h3>热门社团排行（报名量）</h3>
        <div class="bar-chart">
          ${[['青志协会',480],['摄影协会',380],['AI创新社',310],['话剧社',260],['辩论队',200],['学创联盟',180]].map(([n,v]) => `
            <div class="bar-row">
              <div class="bar-name">${n}</div>
              <div class="bar-track">
                <div class="bar-fill" style="width:${Math.round(v/480*100)}%"><span>${v}</span></div>
              </div>
              <div class="bar-val">${v}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <h3>各类别报名占比</h3>
        <div class="bar-chart">
          ${[['传媒类',35],['科技类',28],['公益类',20],['文艺类',10],['辩论类',5],['体育类',2]].map(([n,v]) => `
            <div class="bar-row">
              <div class="bar-name">${n}</div>
              <div class="bar-track">
                <div class="bar-fill" style="width:${v}%;background:var(--success)"><span>${v}%</span></div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="card">
      <h3>新生活跃度趋势（过去 7 天）</h3>
      <div class="bar-chart">
        ${[['3/22',120],['3/23',145],['3/24',180],['3/25',220],['3/26',195],['3/27',260],['3/28',310]].map(([d,v]) => `
          <div class="bar-row">
            <div class="bar-name">${d}</div>
            <div class="bar-track">
              <div class="bar-fill" style="width:${Math.round(v/310*100)}%;background:#7209b7"><span>${v}</span></div>
            </div>
            <div class="bar-val">${v}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderARules() {
  return `
    <div class="page-hdr">
      <h2>📐 规则配置</h2>
      <p>设置报名时间窗口、字段规范、推荐权重策略</p>
    </div>
    <div class="card">
      <h3>报名时间规则</h3>
      <div class="g2">
        <div class="field"><label>全局招新开始时间</label><input type="date" value="2026-03-25"/></div>
        <div class="field"><label>全局招新截止时间</label><input type="date" value="2026-04-25"/></div>
        <div class="field"><label>最晚允许延期截止</label><input type="date" value="2026-05-01"/></div>
        <div class="field"><label>每人最多可报名社团数</label><input type="number" value="5"/></div>
      </div>
    </div>
    <div class="card">
      <h3>推荐权重策略</h3>
      <div style="font-size:13px;color:var(--muted);margin-bottom:12px">调整各维度在匹配分中的权重占比（总计 100%）</div>
      <div class="g2">
        <div class="field"><label>兴趣匹配权重</label><input type="number" value="30" max="100"/>%</div>
        <div class="field"><label>技能匹配权重</label><input type="number" value="25" max="100"/>%</div>
        <div class="field"><label>目标匹配权重</label><input type="number" value="20" max="100"/>%</div>
        <div class="field"><label>时间匹配权重</label><input type="number" value="15" max="100"/>%</div>
        <div class="field"><label>经验匹配权重</label><input type="number" value="10" max="100"/>%</div>
      </div>
    </div>
    <div class="card">
      <h3>报名字段规范</h3>
      <div class="field"><label>✅ 必填字段（平台统一）</label>
        <div style="font-size:13px;color:var(--muted);margin-top:4px">姓名、学号、年级、专业、联系方式、报名动机</div>
      </div>
      <div class="field"><label>📋 可选字段（社团自定义，最多添加 5 项）</label>
        <div style="font-size:13px;color:var(--muted);margin-top:4px">过往经历、作品链接、期望岗位、是否服从调剂、其他</div>
      </div>
    </div>
    <div class="card">
      <h3>审核流程配置</h3>
      <div class="g2">
        <div class="field"><label>新社团入驻审核时限（小时）</label><input type="number" value="48"/></div>
        <div class="field"><label>招新内容审核时限（小时）</label><input type="number" value="24"/></div>
      </div>
    </div>
    <button class="btn pri" data-action="save-rules">💾 保存配置</button>`;
}

function renderARisk() {
  const levelColor = { high:'b-red', medium:'b-yellow', low:'b-gray' };
  const levelLabel = { high:'高风险', medium:'中风险', low:'低风险' };
  const statusColor = { open:'b-red', handling:'b-yellow', closed:'b-green' };
  const statusLabel = { open:'待处理', handling:'处理中', closed:'已关闭' };
  return `
    <div class="page-hdr">
      <h2>🛡️ 风险监控</h2>
      <p>识别虚假信息、重复报名、异常招新行为</p>
    </div>
    <div class="g3" style="margin-bottom:14px">
      <div class="metric-card">
        <div class="metric-val" style="color:var(--danger)">${state.riskEvents.filter(r=>r.status==='open').length}</div>
        <div class="metric-lbl">待处理</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color:var(--warning)">${state.riskEvents.filter(r=>r.status==='handling').length}</div>
        <div class="metric-lbl">处理中</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color:var(--success)">${state.riskEvents.filter(r=>r.status==='closed').length}</div>
        <div class="metric-lbl">已关闭</div>
      </div>
    </div>
    ${state.riskEvents.map(evt => `
      <div class="audit-card">
        <div class="audit-icon">${evt.level==='high'?'🚨':evt.level==='medium'?'⚠️':'ℹ️'}</div>
        <div class="audit-info">
          <div class="audit-name">
            ${evt.type}
            <span class="badge ${levelColor[evt.level]}">${levelLabel[evt.level]}</span>
            <span class="badge ${statusColor[evt.status]}">${statusLabel[evt.status]}</span>
          </div>
          <div class="audit-meta" style="line-height:1.6">${evt.desc}</div>
          <div class="audit-meta" style="margin-top:3px">发现时间：${evt.time}</div>
        </div>
        ${evt.status!=='closed' ? `
          <div class="audit-actions">
            <button class="btn sm pri" data-action="risk" data-id="${evt.id}" data-status="handling">处理</button>
            <button class="btn sm" data-action="risk" data-id="${evt.id}" data-status="closed">关闭</button>
          </div>` : '<div style="font-size:13px;color:var(--muted)">已关闭</div>'}
      </div>`).join('')}`;
}

// ===================================================
// EVENT HANDLING
// ===================================================
function updateNBadge() {
  const n = unreadCount();
  const dot = $('nDot');
  if (dot) dot.textContent = n > 0 ? n : '';
  if (dot) dot.style.display = n > 0 ? 'inline' : 'none';
}

function faqAnswer(club, query) {
  const q = query.toLowerCase();
  for (const faq of club.faqs) {
    const kws = faq.q.toLowerCase().split(/[\s，？?、]/);
    if (kws.some(k => k.length > 1 && q.includes(k))) return faq.a;
  }
  if (q.includes('时间')||q.includes('活动')) return `${club.name}的活动频率是${club.frequency}，建议每周投入约${club.timeNeed}小时。`;
  if (q.includes('报名')||q.includes('加入')) return `点击页面上的"立即报名"按钮，填写基础信息后提交即可，整个流程约3分钟。`;
  if (q.includes('要求')||q.includes('门槛')) return `${club.name}的招募要求：${club.positions[0].require}`;
  if (q.includes('人数')||q.includes('规模')||q.includes('多少人')) return `${club.name}目前有${club.members}名正式成员，本次招新计划招募${club.recruitCount}人。`;
  if (q.includes('截止')||q.includes('什么时候')) return `报名截止时间为 ${club.deadline}，请尽早提交，名额有限！`;
  return `谢谢你的问题！详细情况可以在报名后联系社团负责人，或直接在报名备注里提问。😊`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Landing role selection
  document.querySelectorAll('.role-card[data-go]').forEach(card => {
    const btn = card.querySelector('button');
    const handler = () => goTo(card.dataset.go);
    card.addEventListener('click', handler);
    if (btn) btn.addEventListener('click', e => { e.stopPropagation(); handler(); });
  });

  // Back buttons
  document.querySelectorAll('[data-back]').forEach(btn => {
    btn.addEventListener('click', goBack);
  });

  // Student sidebar nav
  document.querySelectorAll('#pg-student .snav').forEach(a => {
    a.addEventListener('click', () => renderStudentTab(a.dataset.tab));
  });

  // Club sidebar nav
  document.querySelectorAll('#pg-club .snav').forEach(a => {
    a.addEventListener('click', () => renderClubTab(a.dataset.tab));
  });

  // Admin sidebar nav
  document.querySelectorAll('#pg-admin .snav').forEach(a => {
    a.addEventListener('click', () => renderAdminTab(a.dataset.tab));
  });

  // Delegated click handler for dynamic content
  document.addEventListener('click', e => {
    const target = e.target.closest('[data-action],[data-plaza-cat],[data-nid]');
    if (!target) return;

    // Plaza category filter
    if (target.dataset.plazaCat !== undefined) {
      state.plazaFilter.cat = target.dataset.plazaCat;
      renderStudentTab('s-plaza');
      return;
    }

    // Notification read
    if (target.dataset.nid) {
      const n = state.notifications.find(n => n.id === target.dataset.nid);
      if (n) { n.read = true; renderStudentTab('s-notify'); }
      return;
    }

    const action = target.dataset.action;
    if (!action) return;

    // Navigation actions
    if (action === 'goto-assess') renderStudentTab('s-assess');
    if (action === 'goto-plaza') renderStudentTab('s-plaza');
    if (action === 'goto-recommend') renderStudentTab('s-recommend');
    if (action === 'home-search') {
      const kw = ($('homeKw')||{}).value || '';
      state.plazaFilter.kw = kw;
      renderStudentTab('s-plaza');
    }

    // View club detail
    if (action === 'view-club') {
      state.selectedClubId = target.dataset.id;
      state.chatMsgs = [{ role:'bot', text:'你好！我是社团 FAQ 助手，有什么关于这个社团的问题都可以问我 😊' }];
      renderStudentTab('s-detail');
    }

    // Apply to club
    if (action === 'apply-club') {
      state.applyTargetId = target.dataset.id || state.selectedClubId;
      renderStudentTab('s-apply');
    }

    // Plaza filter
    if (action === 'plaza-filter') {
      state.plazaFilter.kw = ($('plazaKw')||{}).value || '';
      state.plazaFilter.exp = ($('plazaExp')||{}).value || 'all';
      renderStudentTab('s-plaza');
    }

    // Assessment navigation
    if (action === 'assess-next' || target.id === 'assessNext') {
      if (state.assess.step < ASSESS_STEPS.length - 1) {
        state.assess.step++;
        renderStudentTab('s-assess');
      }
    }
    if (action === 'assess-back' || target.id === 'assessBack') {
      if (state.assess.step > 0) {
        state.assess.step--;
        renderStudentTab('s-assess');
      }
    }

    // Candidate status update
    if (action === 'cand-status') {
      const cand = state.candidates.find(c => c.id === target.dataset.id);
      if (cand) {
        cand.status = target.dataset.status;
        // Mirror into student applications
        const app = state.applications.find(a => a.score === cand.score);
        if (app) app.status = cand.status;
      }
      if (state.currentPage === 'club') renderClubTab(state.clubTab);
    }

    // Admin audit
    if (action === 'audit') {
      const item = state.auditQueue.find(a => a.id === target.dataset.id);
      if (item) item.status = target.dataset.status;
      renderAdminTab('a-audit');
    }

    // Admin risk
    if (action === 'risk') {
      const evt = state.riskEvents.find(r => r.id === target.dataset.id);
      if (evt) evt.status = target.dataset.status;
      renderAdminTab('a-risk');
    }

    // Admin permissions: approve user
    if (action === 'approve-user') {
      const user = state.users.find(u => u.id === target.dataset.id);
      if (user) user.status = 'active';
      renderAdminTab('a-perms');
    }

    // Admin permissions: disable user
    if (action === 'disable-user') {
      const user = state.users.find(u => u.id === target.dataset.id);
      if (user && confirm(`确认停用账号「${user.name}」？停用后该账号将无法登录。`)) {
        user.status = 'disabled';
        renderAdminTab('a-perms');
      }
    }

    // Club profile: add tag (prompt)
    if (action === 'add-tag') {
      const val = (window.prompt('请输入新标签名称（如：摄影、视频、新媒体）：') || '').trim();
      if (val) {
        state.clubProfile.tags.push(val);
        renderClubTab('c-profile');
      }
    }

    // Club profile: remove tag
    if (action === 'remove-tag') {
      const idx = parseInt(target.dataset.idx);
      if (!isNaN(idx)) {
        state.clubProfile.tags.splice(idx, 1);
        renderClubTab('c-profile');
      }
    }

    // Club profile: add activity (prompt)
    if (action === 'add-activity') {
      const val = (window.prompt('请输入新活动名称（如：年度摄影展、新生摄影课）：') || '').trim();
      if (val) {
        state.clubProfile.activities.push(val);
        renderClubTab('c-profile');
      }
    }

    // Club profile: remove activity
    if (action === 'remove-activity') {
      const idx = parseInt(target.dataset.idx);
      if (!isNaN(idx)) {
        state.clubProfile.activities.splice(idx, 1);
        renderClubTab('c-profile');
      }
    }

    // Club publish: add position (prompt)
    if (action === 'add-position') {
      const name = (window.prompt('请输入岗位名称（如：摄影师、运营助理）：') || '').trim();
      if (name) {
        const count = parseInt(window.prompt(`「${name}」招募人数：`) || '1') || 1;
        CLUBS[0].positions.push({ name, count, desc: '岗位描述待完善', require: '暂无特殊要求' });
        renderClubTab('c-publish');
      }
    }

    // Club profile: save
    if (action === 'save-profile') {
      const msg = document.createElement('div');
      msg.textContent = '✅ 修改已保存';
      msg.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#1a7f54;color:#fff;padding:10px 20px;border-radius:8px;font-size:14px;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.15)';
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 2000);
    }

    // Club profile: AI optimize
    if (action === 'ai-optimize') {
      alert('✨ AI 优化建议\n\n「摄影协会」社团简介已分析完成：\n\n① 建议在简介结尾补充"适合零基础、有创作热情的同学"，预计提升报名率 28%\n② 可将标签"新媒体"改为"内容创作"，匹配更多潜在候选人\n③ 建议突出"校庆官方摄影"等重点成就，增加社团吸引力\n\n点击「保存修改」后生效。');
    }

    // Admin rules: save config
    if (action === 'save-rules') {
      const msg = document.createElement('div');
      msg.textContent = '✅ 配置已保存并生效';
      msg.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#1a7f54;color:#fff;padding:10px 20px;border-radius:8px;font-size:14px;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.15)';
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 2000);
    }

    // Withdraw application（最多撤回一次）
    if (action === 'withdraw') {
      const app = state.applications.find(a => a.id === target.dataset.id);
      if (app && !app.withdrawn && ['待审核','待面试','已通过初审'].includes(app.status)) {
        if (confirm(`确认撤回「${app.clubName}」的报名申请？撤回后不可恢复，且每条报名仅限撤回一次。`)) {
          app.withdrawn = true;
          app.status = '已撤回';
          // 同步候选人列表
          const cand = state.candidates.find(c => c.score === app.score && c.status !== '已录取');
          if (cand) cand.status = '已撤回';
          // 添加通知
          state.notifications.unshift({
            id: 'nw'+Date.now(), icon: '↩', read: false,
            title: `【${app.clubName}】报名已撤回`,
            content: `你对${app.clubName}的报名申请已成功撤回。如有意向可重新报名。`,
            time: '刚刚', type: 'system',
          });
          renderStudentTab('s-myapply');
        }
      }
    }

    // Retake assessment
    if (action === 'retake-assess') {
      if (!state.recommendations.length ||
          confirm('重新测试将清空当前测评结果和推荐列表，确定继续？')) {
        state.assess = { step:0, complete:false, interests:[], skills:[], time:'', personality:{}, goals:[], experience:'' };
        state.recommendations = [];
        renderStudentTab('s-assess');
      }
    }
  });

  // Assessment option selection (delegated)
  document.addEventListener('click', e => {
    const opt = e.target.closest('[data-aopt]');
    if (opt) {
      const field = opt.dataset.afield;
      const val = opt.dataset.aopt;
      const type = opt.dataset.atype;
      const max = parseInt(opt.dataset.amax) || 1;
      if (type === 'single') {
        state.assess[field] = val;
      } else {
        const arr = state.assess[field];
        const idx = arr.indexOf(val);
        if (idx >= 0) arr.splice(idx, 1);
        else if (arr.length < max) arr.push(val);
      }
      renderStudentTab('s-assess');
      return;
    }

    const pair = e.target.closest('[data-apair]');
    if (pair) {
      const pairId = pair.dataset.apair;
      const pairVal = pair.dataset.apairval;
      state.assess.personality[pairId] = pairVal;
      renderStudentTab('s-assess');
      return;
    }

    // Assess next/back/generate buttons
    if (e.target.id === 'assessNext') {
      state.assess.step++;
      renderStudentTab('s-assess');
    }
    if (e.target.id === 'assessBack') {
      if (state.assess.step > 0) { state.assess.step--; renderStudentTab('s-assess'); }
    }
    if (e.target.id === 'assessGen') {
      generateRecommendations();
    }

    // Submit apply
    if (e.target.id === 'submitApplyBtn') {
      const club = CLUBS.find(c => c.id === state.applyTargetId) || CLUBS[0];
      const existing = state.applications.find(a => a.clubId === club.id);
      if (existing) {
        alert(`你已经报名过「${club.name}」了，无需重复提交。`);
        return;
      }
      const score = state.recommendations.find(r=>r.id===club.id)?.score || Math.floor(Math.random()*20+70);
      const pos = $('fPos') ? $('fPos').value : club.positions[0].name;
      state.applications.unshift({
        id: 'a' + Date.now(), clubId: club.id, clubName: club.name,
        clubIcon: club.icon, status: '待审核', score, appliedAt: '2026-03-28', position: pos,
        withdrawn: false,
      });
      state.candidates.unshift({
        id: 'cd' + Date.now(), name: ($('fName')||{}).value || '张同学',
        avatar: '🎒', major: ($('fMajor')||{}).value || '新闻传播',
        score, tags: ['新报名'], reason: '刚刚提交报名，等待审核中。', status: '待审核', position: pos,
      });
      state.notifications.unshift({
        id: 'nn'+Date.now(), icon:'📬', read: false,
        title: `【${club.name}】报名已提交`,
        content: `你对${club.name}的报名已成功提交，预计3个工作日内反馈，请留意通知。`,
        time: '刚刚', type: 'apply',
      });
      renderStudentTab('s-myapply');
    }

    // Mark all notifications read
    if (e.target.id === 'markAllRead') {
      state.notifications.forEach(n => n.read = true);
      renderStudentTab('s-notify');
    }

    // Publish recruitment
    if (e.target.id === 'publishBtn') {
      const msg = $('publishMsg');
      if (msg) { msg.textContent = '✅ 已提交审核，管理员将在24小时内处理。'; msg.style.color = 'var(--success)'; }
      state.auditQueue.unshift({
        id: 'aq'+Date.now(), name: '摄影协会', icon: '📷',
        type: '招新内容审核', submitter: '李负责人',
        submitted: '2026-03-28', status: 'pending',
        content: '发布春季招新计划，招募摄影师/运营/记录共15人',
      });
    }

    // Send notification
    if (e.target.id === 'sendNotifyBtn') {
      const msg = $('notifySendMsg');
      if (msg) { msg.textContent = '✅ 通知已成功发送给全部待审核候选人！'; msg.style.color = 'var(--success)'; }
    }

    // Chat send
    if (e.target.id === 'chatSend') {
      sendChat();
    }
  });

  // Chat input enter key
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.id === 'chatInput') sendChat();
  });

  // Login modal events
  $('loginSubmit').addEventListener('click', () => {
    const inputVal = $('loginUser').value.trim();
    const pass     = $('loginPass').value.trim();
    const errEl    = $('loginErr');
    const target   = state.loginTarget;

    // --- 新生端：只需输入姓名 ---
    if (target === 'student') {
      if (!inputVal) {
        errEl.textContent = '请输入你的姓名';
        $('loginUser').focus();
        return;
      }
      // 取第一个字符作为姓氏，拼接"同学"
      state.studentName = inputVal[0] + '同学';
      closeLoginModal();
      performGoTo('student');
      return;
    }

    // --- 社团端 / 管理端：账号密码验证 ---
    if (!inputVal || !pass) {
      errEl.textContent = '请填写用户名和密码';
      return;
    }
    const creds = {
      club:  { user: 'club@demo',    pass: '123456'    },
      admin: { user: 'admin@school', pass: 'admin2026' },
    };
    if (inputVal !== creds[target].user || pass !== creds[target].pass) {
      errEl.textContent = '账号或密码错误，请参考下方演示账号';
      $('loginPass').value = '';
      $('loginPass').focus();
      return;
    }
    closeLoginModal();
    performGoTo(target);
  });

  $('loginUser').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('loginSubmit').click();
  });
  $('loginPass').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('loginSubmit').click();
  });

  $('loginCancel').addEventListener('click', closeLoginModal);

  $('loginModal').addEventListener('click', e => {
    if (e.target === $('loginModal')) closeLoginModal();
  });

  updateNBadge();
});

function sendChat() {
  const input = $('chatInput');
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  input.value = '';
  const club = CLUBS.find(c => c.id === state.selectedClubId) || CLUBS[0];
  state.chatMsgs.push({ role:'user', text });
  setTimeout(() => {
    state.chatMsgs.push({ role:'bot', text: faqAnswer(club, text) });
    renderStudentTab('s-detail');
    const chatBox = $('chatMsgs');
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, 350);
  renderStudentTab('s-detail');
  const chatBox = $('chatMsgs');
  if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
}

function generateRecommendations() {
  const a = state.assess;
  a.complete = true;
  const scored = CLUBS.map(club => ({
    id: club.id,
    score: scoreClub(club, a),
    reasons: buildReasons(club, a),
    position: getRecommendedPositions(club, a),
  })).sort((x,y) => y.score - x.score).slice(0, 5);
  state.recommendations = scored;
  state.assess.step = 0; // reset for next assessment
  renderStudentTab('s-recommend');
}
