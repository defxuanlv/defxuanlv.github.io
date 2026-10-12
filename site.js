const isProjectPage = document.body.dataset.page === "project";
const assetPrefix = isProjectPage ? "../" : "";

const projectData = {
  "xiaohui-account": {
    slug: "xiaohui-account",
    title: "叫我小辉就好",
    kicker: "个人自媒体 / 剪辑师视角",
    lead: "从一条自我介绍开始，我把自己会的剪辑、正在试的 AI，以及真实工作里遇到的问题，慢慢做成了一个持续更新的内容账号。",
    summary: "一个剪辑师的个人内容账号：讲剪辑、试 AI，也记录真实接单和工作方法。",
    status: "持续更新",
    cover: "assets/projects/xiaohui-account/covers-web/episode-02.jpg",
    coverCaption: "叫我小辉就好｜真实内容封面",
    coverGallery: [
      ["assets/projects/xiaohui-account/covers-web/episode-02.jpg", "信息流剪辑教程封面"],
      ["assets/projects/xiaohui-account/covers-web/episode-06.jpg", "HyperFrames 自动剪辑封面"],
      ["assets/projects/xiaohui-account/covers-web/episode-12.jpg", "剪辑接单全流程封面"],
    ],
    facts: [
      ["身份", "剪辑师 / 内容创作者"],
      ["内容", "剪辑教程 / AI 实测 / 接单经验"],
      ["工作方式", "真实问题 / 亲自实测"],
      ["状态", "持续更新"],
    ],
    storyTitle: "从第一次面对镜头开始",
    story: [],
    note: "",
    gallery: [],
  },
  "commercial-editing": {
    slug: "commercial-editing",
    title: "商业短视频",
    kicker: "马来西亚品牌 / 合作剪辑",
    lead: "不同品牌，剪出各自的味道。",
    summary: "茶月山、海脚人、龙鼎盛、头家：从饮品与菜品，到门店、人物和品牌故事的合作剪辑。",
    status: "合作作品精选",
    cover: "assets/projects/commercial/chayueshan-4.webp",
    coverGallery: [
      ["assets/projects/commercial/chayueshan-4.webp", "茶月山茶文化成片画面"],
      ["assets/projects/commercial/toujia-3.webp", "头家阿嫲系列成片画面"],
    ],
    coverCaption: "茶月山饮品与头家菜品的真实成片画面",
  },
  "motion-library": {
    slug: "motion-library",
    title: "动效素材台",
    kicker: "剪辑工具 / macOS",
    lead: "把复杂动效做好，再拖进剪映。",
    summary: "把在剪映里反复搭建的复杂动效做成可编辑模板，换内容、生成素材，再拖进剪辑使用。",
    status: "本地开发版",
    cover: "assets/projects/motion-workbench/app-terminal-clean.webp",
    coverCaption: "动效素材台的 3D 终端模板编辑界面",
  },
};


const motionData = {
  introUrl: "https://v.douyin.com/gIeGesY4q3g/",
  templates: [
    { id: "counter-confetti", title: "数字冲刺", text: "数字快速增长，落点时迸出纸屑。用来突出一个数值，或庆祝阶段成果。", editable: "目标数字、底部标签、速度" },
    { id: "terminal-3d", title: "3D 终端", text: "命令逐字输入，输出依次出现。把工具运行的过程做成一段有节奏的画面。", editable: "窗口标题、命令、多行输出" },
    { id: "card-flip-reveal", title: "卡片翻转", text: "三张卡片依次翻转、揭晓内容。适合前后对照、步骤说明或展示三个结果。", editable: "正面标题、背面内容" },
  ],
  steps: [
    ["选模板", "找到这条视频需要的效果。"],
    ["改内容", "换上自己的文案、数字或卡片内容。"],
    ["预览渲染", "调好节奏，生成动效片段。"],
    ["放进剪辑", "导出 MOV，用到视频里。"],
  ],
};

const commercialData = [
  {
    id: "chayueshan", name: "茶月山", category: "茶饮 / 品牌文化", title: "把一杯茶，剪成一个故事。", film: "潮汕茶文化", ratio: "3 / 4", duration: "00:52",
    intro: "这条以苹果油柑茶为主角，讲潮汕口味怎样出现在南洋的一杯茶里。我负责将合作方的文案、制茶素材与声音剪成一条完整的产品故事。",
    method: "中段先用杯中的青绿果肉接“潮汕口味”，随后切到加冰动作，再落到成品茶杯。文化来处和实际制作穿插着讲，而不是先讲一整段文化、最后才露出产品。",
    frames: [{ n: 2, time: "00:12", caption: "杯中果肉接住“潮汕口味”的讲述。" }, { n: 3, time: "00:24", caption: "切到加冰动作，延续这杯茶的制作过程。" }],
    scope: "饮品介绍、门店场景、节日内容、茶文化系列",
  },
  {
    id: "haijiaoren", name: "海脚人", category: "海鲜餐饮 / 品牌故事", title: "让品牌故事，落到真实画面。", film: "海脚人品牌故事", ratio: "9 / 16", duration: "00:47",
    intro: "这一条介绍海脚人的门店和菜品。我负责合作剪辑、字幕与声音的组织：开头用招牌和环境建立地点，再把后厨处理食材、菜品上桌和用餐场景接起来。",
    method: "讲“每天清晨”的准备时，画面落在后厨操作；讲到一碗面时，切进酱汁淋下的近景。让观众先看到人在怎样做，再看到端到面前的是什么，门店介绍就有了具体的过程。",
    frames: [{ n: 2, time: "00:12", caption: "后厨操作对应每天准备食材的讲述。" }, { n: 3, time: "00:24", caption: "淋酱近景接入菜品，叙事从后厨走到餐桌。" }],
    scope: "海鲜菜品、门店介绍、品牌故事、用餐场景",
  },
  {
    id: "longdingsheng", name: "龙鼎盛", category: "潮汕菜 / 人物叙事", title: "一道菜背后，也有做菜的人。", film: "二十年，我只磨了一把刀", ratio: "9 / 16", duration: "00:43",
    intro: "《二十年，我只磨了一把刀》讲的是厨师对手艺的理解：从追求刀快，到懂得手稳。我负责把这段人物文案与切菜、翻锅、出餐等素材连成故事，不只展示菜做得多热闹。",
    method: "前段保留大火翻锅的力量感，中段转到细切笋丝。00:20 的切菜近景对应“实则磨的是一身心性”，让人物的变化落到手上的动作里；后段再回到厨师本人，完成从手艺到人的收束。",
    frames: [{ n: 2, time: "00:12", caption: "大火翻锅，先建立后厨操作的力量感。" }, { n: 3, time: "00:20", caption: "切笋丝承接“磨的是一身心性”的讲述。" }],
    scope: "人物故事、后厨手艺、菜品展示、节日聚餐",
  },
  {
    id: "toujia", name: "头家", category: "潮汕大排档 / 家常记忆", title: "家常味道，要剪出烟火气。", film: "阿嫲系列 · 炒粿条", ratio: "540 / 1170", duration: "00:39",
    intro: "这是头家“阿嫲系列”里的炒粿条。我负责将炒制素材与家常记忆的文案剪到一起：从起锅、下料、翻炒到装盘，让一道熟悉的菜有可跟随的制作过程。",
    method: "开头以热锅和醒目的“锅气”进入主题；讲到猛烈火候时，保留粿条翻起的动作，再切到装盘近景。字幕重点落在“锅气”“猛火快炒”，把记忆里的味道对应到眼前的火候，而不是只留一张成品图。",
    frames: [{ n: 1, time: "00:03", caption: "热锅与“锅气”字幕一起确立这条的主题。" }, { n: 4, time: "00:30", caption: "翻炒动作对应“猛火快炒”，保留制作的连贯性。" }],
    scope: "阿嫲系列、菜品介绍、大排档氛围、聚餐主题",
  },
];

function commercialAsset(file) {
  return asset(`assets/projects/commercial/${file}`);
}

function motionAsset(file) {
  return asset(`assets/projects/motion-workbench/${file}`);
}

const xiaohuiAccountData = {
  heroCovers: ["01", "02", "06", "08", "10", "12"],
  works: [
    { id: "01", date: "2026.07.19", title: "第一次自我介绍", tag: "账号成长", cover: "01", url: "https://v.douyin.com/L6mL2ZyRQE4/" },
    { id: "02", date: "2026.07.20", title: "信息流口播怎么剪", tag: "剪辑教程", cover: "02", url: "https://v.douyin.com/AunswPCAno4/" },
    { id: "03", date: "2026.07.24", title: "口播音频怎么调", tag: "剪辑教程", cover: "03", url: "https://v.douyin.com/Ja0msiTUiqQ/" },
    { id: "04", date: "2026.07.28", title: "用豆包精简长视频", tag: "AI 与工具", cover: "04", url: "https://v.douyin.com/Xg3L3qGy9U4/" },
    { id: "05", date: "2026.08.01", title: "网感配音怎么选", tag: "剪辑教程", cover: "05", url: "https://v.douyin.com/w9DsPT0i6tg/" },
    { id: "06", date: "2026.08.03", title: "HyperFrames 自动剪辑", tag: "AI 与工具", cover: "06", url: "https://v.douyin.com/z3hHe-oICyk/" },
    { id: "07", date: "2026.08.08", title: "人物凸出画面怎么做", tag: "剪辑教程", cover: "07", url: "https://v.douyin.com/Ng9FOWN-cvk/" },
    { id: "08", date: "2026.08.08", title: "餐饮视频的重点词", tag: "真实工作", cover: "08", url: "https://v.douyin.com/ZhTzsOkClSo/" },
    { id: "09", date: "工具实测", title: "动效素材台", tag: "AI 与工具", cover: "09", url: "https://v.douyin.com/gIeGesY4q3g/" },
    { id: "10", date: "2026.08.13", title: "把 DeepSeek 接入 Codex", tag: "AI 与工具", cover: "10", description: "记录把 DeepSeek 模型接入 Codex 的配置方法。" },
    { id: "11", date: "2026.08.15", title: "移动物体怎么打马赛克", tag: "剪辑教程", cover: "11", url: "https://v.douyin.com/w510vO1yrds/" },
    { id: "12", date: "2026.08.19", title: "剪辑接单全流程", tag: "真实工作", cover: "12", url: "https://v.douyin.com/SJq0_VuH_9Y/" },
    { id: "13", date: "2026.09 · 制作记录", title: "两个剪映草稿怎么合并", tag: "剪辑教程", cover: "13", description: "从客户合并两条视频的需求出发，比较复合片段和子草稿两种处理方法。" },
    { id: "14", date: "2026.09 · 制作记录", title: "把文案变成可修改的剪映草稿", tag: "AI 与工具", cover: "14", description: "用文案匹配本地素材、建立剪映草稿，保留后续人工修改的空间。" },
    { id: "15", date: "2026.09 · 制作记录", title: "用剪映 AI 扩图做封面", tag: "AI 与工具", cover: "15", description: "用 AI 扩图调整画面比例，记录工具在实际封面制作中的用法。" },
  ],
  timeline: [
    {
      index: "01",
      title: "开始面对镜头",
      text: "第一期从自我介绍开始。那时还写不好文案，也不习惯面对镜头，只想先把自己的剪辑能力讲明白。",
    },
    {
      index: "02",
      title: "先讲会的剪辑",
      text: "从信息流、口播音频、网感配音和长视频精简，到人物凸出与移动马赛克，先把自己每天真的会用、也反复在做的方法讲出来。",
    },
    {
      index: "03",
      title: "把 AI 放进工作流",
      text: "从 HyperFrames 自动剪辑、DeepSeek 接入 Codex，到自己做动效素材台，开始把 AI 放进剪辑流程里，试它能不能接手具体的重复步骤。",
    },
    {
      index: "04",
      title: "回到真实工作",
      text: "从真实餐饮项目里的重点词，到客户沟通和剪辑接单经验。软件技巧之外，也开始讲一个剪辑师在真实工作里怎么判断、沟通和交付。",
    },
  ],
  featured: [
    {
      id: "02",
      title: "信息流剪辑教程",
      role: "第一条形成明显传播结果的剪辑教程",
      metric: "10.49 万播放 · 2389 赞",
      metricNote: "数据截至 2026.08.20",
      url: "https://v.douyin.com/AunswPCAno4/",
      summary: [
        "截至这次记录，它是账号数据最好的一期。它从一段偏长的原始口播出发，讲怎么判断哪些信息应该保留，再用节奏、重点词和画面层级把信息重新组织起来。",
        "10.49 万播放和 2389 赞，让我第一次确认：把自己真正会用的剪辑方法讲清楚，本身就能成为有价值的内容。它也确定了账号最早的一条主线：先从剪辑师真正怎么做开始讲。",
      ],
    },
    {
      id: "06",
      title: "HyperFrames 自动剪辑",
      role: "从传统剪辑教程延伸到 AI 工作流实验",
      metric: "1.3 万播放 · 189 收藏",
      metricNote: "数据截至 2026.08.20",
      url: "https://v.douyin.com/z3hHe-oICyk/",
      summary: [
        "这期视频本身就是用 Codex 和 HyperFrames 做出来的。我把口播交给 Codex，说明想要的风格；风格定下来后，让它按口播拆内容，再用 HyperFrames 做画面效果。需要的图片、视频提前命名放好，并说明用在哪里。",
        "最花时间的是第一次定风格，来回磨合了四五版。它并不是展示“一键剪完”，而是记录一次真实制作：人来定风格和准备素材，AI 参与拆内容与实现效果。这也成为账号从剪辑教程延伸到 AI 制作流程的一个转折。",
      ],
    },
    {
      id: "12",
      title: "剪辑接单全流程",
      role: "从软件教程回到真实职业经验",
      metric: "接单经验 / 客户沟通",
      metricNote: "从需求确认到最终交付",
      url: "https://v.douyin.com/SJq0_VuH_9Y/",
      summary: [
        "这一期把视角从软件技巧拉回剪辑师的真实工作。从客户询价、确认需求和素材，到剪辑、反馈、修改与最终交付，讲的是一次接单怎么真正往下走。",
        "它把软件之外的工作也讲出来：剪辑师要确认什么、怎么理解反馈，以及怎样把项目交付好。和前面的教程、工具实测放在一起，能看到这个账号始终围绕真实的剪辑工作展开。",
      ],
    },
  ],
};

function asset(path) {
  return `${assetPrefix}${path}`;
}

function renderCoverMedia(project, variant) {
  const items = project.coverGallery || [[project.cardCover || project.cover, project.coverCaption]];
  if (items.length === 1) {
    const [src, alt] = items[0];
    return `<img src="${asset(src)}" alt="${alt}" loading="${variant === "card" ? "lazy" : "eager"}">`;
  }

  const collageClass = project.slug === "commercial-editing" ? "commercial-card-collage" : variant === "detail"
    ? "cover-collage cover-collage--detail"
    : "cover-collage cover-collage--card";
  return `
    <div class="${collageClass}" aria-label="${project.coverCaption}">
      ${items
        .map(
          ([src, alt]) => `<img src="${asset(src)}" alt="${alt}" loading="${variant === "card" ? "lazy" : "eager"}">`,
        )
        .join("")}
    </div>
  `;
}

function renderProjectCards() {
  const grid = document.querySelector("#project-grid");
  if (!grid) return;

  const projects = Object.values(projectData);
  grid.innerHTML = projects
    .map(
      (project, index) => `
        <a class="project-card reveal" href="projects/${project.slug}.html" aria-label="查看${project.title}项目详情">
          <div class="project-media">
            <span class="project-index">0${index + 1}</span>
            <span class="project-arrow" aria-hidden="true">↗</span>
            ${renderCoverMedia(project, "card")}
          </div>
          <div class="project-info">
            <div class="project-kicker">${project.kicker}</div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="project-foot">
              <strong>${project.status}</strong>
              <span>查看项目 <span aria-hidden="true">→</span></span>
            </div>
          </div>
        </a>
      `,
    )
    .join("");
}

function accountCover(id) {
  return `${asset(`assets/projects/xiaohui-account/covers-web/episode-${id}.jpg`)}?v=20261007-portfolio`;
}

function renderXiaohuiAccountPage(root) {
  const project = projectData["xiaohui-account"];
  const heroCovers = xiaohuiAccountData.heroCovers
    .map((id, index) => {
      const work = xiaohuiAccountData.works.find((item) => item.id === id);
      return `<img src="${accountCover(id)}" alt="${work.title}封面" ${index > 2 ? 'loading="lazy"' : 'fetchpriority="high"'}>`;
    })
    .join("");

  const timeline = xiaohuiAccountData.timeline
    .map(
      (chapter) => `
        <article class="account-timeline-row reveal">
          <div class="account-timecode">${chapter.index}</div>
          <div class="account-timeline-copy">
            <h3>${chapter.title}</h3>
            <p>${chapter.text}</p>
          </div>
        </article>
      `,
    )
    .join("");

  const featured = xiaohuiAccountData.featured
    .map(
      (item, index) => `
        <article class="account-featured-item reveal">
          <figure class="account-featured-cover">
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="在抖音观看${item.title}"><img src="${accountCover(item.id)}" alt="${item.title}封面" loading="lazy"></a>
          </figure>
          <div class="account-featured-copy">
            <span class="account-featured-index">代表作 0${index + 1}</span>
            <h3>${item.title}</h3>
            <p class="account-featured-role">${item.role}</p>
            <div class="account-result"><strong>${item.metric}</strong><span>${item.metricNote}</span></div>
            <div class="account-featured-description">
              ${item.summary.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
            <a class="account-douyin-link" href="${item.url}" target="_blank" rel="noopener noreferrer">在抖音观看 <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      `,
    )
    .join("");

  const renderWork = (work) => `
        <article class="account-work-card reveal${work.pending ? " is-pending" : ""}">
          <${work.url ? 'a' : 'div'} class="account-work-cover" ${work.url ? `href="${work.url}" target="_blank" rel="noopener noreferrer" aria-label="在抖音观看${work.title}"` : ''}>
            <img src="${accountCover(work.cover)}" alt="${work.title}封面" loading="lazy">
            <span>${work.id}</span>
          </${work.url ? 'a' : 'div'}>
          <div class="account-work-meta"><time>${work.date}</time><span>${work.tag}</span></div>
          <h3>${work.title}</h3>
          ${work.description ? `<p class="account-work-description">${work.description}</p>` : ''}
          ${
            work.url
              ? `<a href="${work.url}" target="_blank" rel="noopener noreferrer">在抖音观看 <span aria-hidden="true">↗</span></a>`
              : work.pending ? `<span class="account-work-unlinked">待发布</span>` : ""
          }
        </article>
      `;
  // 首批展示不同题材与近期记录，完整目录由原生展开控件承接。
  const selectedIds = ["01", "03", "05", "13", "14", "15"];
  const works = xiaohuiAccountData.works.filter((work) => selectedIds.includes(work.id)).map(renderWork).join("");
  const moreWorks = xiaohuiAccountData.works.filter((work) => !selectedIds.includes(work.id)).map(renderWork).join("");

  root.innerHTML = `
    <div class="account-page">
      <section class="account-hero page-shell">
        <div class="account-hero-copy">
          <a class="detail-back" href="../index.html#work">← 返回作品</a>
          <h1>${project.title}</h1>
          <p>${project.lead}</p>
          <dl class="account-facts" aria-label="账号摘要">
            ${project.facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}
          </dl>
          <nav class="account-jump-nav" aria-label="账号内容导航">
            <a href="#account-featured-title">三条代表作 ↓</a><a href="#account-latest-title">近期实践 ↓</a><a href="#account-all-title">内容精选 ↓</a>
          </nav>
        </div>
        <div class="account-film-wall" aria-label="六期真实内容封面组成的胶片墙">
          ${heroCovers}
        </div>
      </section>

      <section class="account-origin account-section page-shell reveal" aria-labelledby="account-origin-title">
        <div class="account-origin-copy">
          <h2 id="account-origin-title">先把自己会的剪辑讲出来。</h2>
          <blockquote>“不是什么 AI 博主。就是你看我剪得还行，关注一下；遇到好用的 AI 工具，我也跟你聊聊。”</blockquote>
          <p>最开始只是想做一条自我介绍：文案还写不顺，面对镜头也不自然，但想先让别人知道我会剪辑。</p>
        </div>
      </section>

      <section class="account-timeline account-section" aria-labelledby="account-timeline-title">
        <div class="page-shell">
          <div class="account-section-head">
            <div><h2 id="account-timeline-title">从出镜，到真实工作。</h2></div>
          </div>
          <div class="account-timeline-list">${timeline}</div>
        </div>
      </section>

      <section class="account-featured account-section page-shell" aria-labelledby="account-featured-title">
        <div class="account-section-head">
            <div><h2 id="account-featured-title">三条内容，展开讲讲。</h2></div>
        </div>
        <div class="account-featured-list">${featured}</div>
      </section>

      <section class="account-section page-shell account-latest" aria-labelledby="account-latest-title">
        <h2 id="account-latest-title">近期的制作尝试。</h2>
        <div class="account-latest-grid">
          <article><h3>客户要合并两条视频</h3><p>从一次临时修改需求，讲清复合片段和子草稿两种方法。教程来自工作中真正遇到的问题。</p></article>
          <article><h3>让 AI 接手粗剪</h3><p>把文案和本地素材变成还能继续修改的剪映草稿，先解决素材匹配、建草稿这些重复步骤。</p></article>
          <article><h3>把封面制作也记录下来</h3><p>尝试用剪映 AI 扩图处理画面的比例，把工具用到具体制作环节里，再把做法讲出来。</p></article>
        </div>
      </section>

      <section class="account-all account-section" aria-labelledby="account-all-title">
        <div class="page-shell">
          <div class="account-section-head">
            <div><h2 id="account-all-title">账号目前走过的范围。</h2></div>
          </div>
          <div class="account-work-grid">${works}</div>
          <details class="account-more"><summary>查看更多内容（9）</summary><div class="account-work-grid">${moreWorks}</div></details>
        </div>
      </section>

      <section class="account-process account-section page-shell" aria-labelledby="account-process-title">
        <div class="account-process-copy">
          <h2 id="account-process-title">每一期，都是从一个具体问题开始。</h2>
          <p>选题不一定来自热点，也可能来自今天剪片时重复做了三遍的步骤。先把问题讲清楚，再决定它适合拍成教程、工具实测，还是一段真实工作记录。</p>
        </div>
        <ol class="account-process-track" aria-label="内容制作流程">
          ${["选题", "文案", "拍摄", "剪辑", "发布", "复盘"].map((step, index) => `<li><span>0${index + 1}</span><strong>${step}</strong></li>`).join("")}
        </ol>
      </section>
    </div>
  `;
}


function renderCommercialPage(root) {
  const project = projectData["commercial-editing"];
  const posters = { chayueshan:4, haijiaoren:1, longdingsheng:4, toujia:3 };
  root.innerHTML = `
    <div class="commercial-page page-shell">
      <section class="commercial-hero" aria-labelledby="commercial-title">
        <a class="detail-back" href="../index.html#work">← 返回作品</a>
        <div class="commercial-hero-copy"><h1 id="commercial-title">${project.title}</h1><div><p class="commercial-lead">${project.lead}</p><p>为马来西亚餐饮与茶饮品牌做合作剪辑。我负责剪辑、节奏与字幕包装；拍摄素材由合作方提供。</p></div></div>
        <nav class="commercial-brand-nav" aria-label="合作品牌成片">${commercialData.map((item)=>`<a href="#case-${item.id}">${item.name} <span aria-hidden="true">↓</span></a>`).join("")}</nav>
      </section>
      <div class="commercial-cases">${commercialData.map((item,index)=>`
        <section class="commercial-case commercial-section reveal" id="case-${item.id}" aria-labelledby="title-${item.id}">
          <div class="commercial-case-heading"><span>0${index+1} / ${item.category}</span><h2 id="title-${item.id}">${item.name}</h2><h3>${item.title}</h3></div>
          <div class="commercial-case-layout">
            <figure class="commercial-film"><video controls playsinline preload="none" poster="${commercialAsset(`${item.id}-${posters[item.id]}.webp`)}" style="aspect-ratio:${item.ratio}" aria-label="${item.name}《${item.film}》完整成片"><source src="${commercialAsset(item.id + '.mp4')}?v=20261008" type="video/mp4">当前浏览器不支持播放此视频。</video><figcaption><strong>${item.film}</strong><span>完整成片 · ${item.duration}</span></figcaption></figure>
            <div class="commercial-case-copy"><p>${item.intro}</p><h4>这一条怎么剪</h4><p>${item.method}</p><div class="commercial-stills">${item.frames.map((frame)=>`<figure><img src="${commercialAsset(`${item.id}-${frame.n}.webp`)}?v=20261008" alt="${item.name}成片 ${frame.time}：${frame.caption}" style="aspect-ratio:${item.ratio}" loading="lazy"><figcaption><time>${frame.time}</time>${frame.caption}</figcaption></figure>`).join("")}</div><p class="commercial-scope"><strong>其他合作内容</strong>${item.scope}</p></div>
          </div>
        </section>`).join("")}</div>
      <section class="commercial-section commercial-handoff reveal" aria-labelledby="commercial-handoff-title"><h2 id="commercial-handoff-title">从素材，到能交付的成片。</h2><ol><li><span>01</span><h3>理解内容</h3><p>看文案与素材，确认这一条要讲什么、给谁看。</p></li><li><span>02</span><h3>整理节奏</h3><p>把讲述和画面连起来，删去重复，保留该看的细节。</p></li><li><span>03</span><h3>完成包装</h3><p>整理字幕、音乐与重点信息，让画面和声音一起表达。</p></li><li><span>04</span><h3>反馈交付</h3><p>根据反馈调整，输出对应比例的最终成片。</p></li></ol><a class="button button-primary" href="../index.html#contact">聊聊你的剪辑项目 <span aria-hidden="true">↗</span></a><a class="commercial-back" href="../index.html#work">返回其他作品 →</a></section>
    </div>`;
}

function initCommercialMedia() {
  const videos = document.querySelectorAll(".commercial-film video");
  videos.forEach((video) => video.addEventListener("play", () => videos.forEach((other) => { if (other !== video) other.pause(); })));
}

function renderMotionPage(root) {
  const project = projectData["motion-library"];
  root.innerHTML = `
    <div class="motion-page page-shell">
      <section class="motion-hero" aria-labelledby="motion-title">
        <a class="detail-back" href="../index.html#work">← 返回作品</a>
        <div class="motion-hero-copy">
          <div><h1 id="motion-title">${project.title}</h1><p>${project.lead}</p><a class="button button-primary motion-intro-link" href="${motionData.introUrl}" target="_blank" rel="noopener noreferrer">在抖音看介绍 <span aria-hidden="true">↗</span></a></div>
          <img class="motion-app-icon" src="${motionAsset("app-icon.png")}" alt="动效素材台应用图标">
        </div>
        <button class="motion-screen-button" type="button" data-motion-screenshot="app-terminal-clean.webp" data-motion-caption="3D 终端模板的真实编辑界面" aria-label="放大查看模板编辑界面">
          <img src="${motionAsset("app-terminal-clean.webp")}" alt="动效素材台的 3D 终端模板：左侧选择效果，中间预览，右侧修改命令与输出" fetchpriority="high">
          <span>放大查看 <span aria-hidden="true">↗</span></span>
        </button>
        <dl class="motion-facts" aria-label="项目规格">
          <div><dt>精选示例</dt><dd>3 段动效</dd></div>
          <div><dt>模板画布</dt><dd>1920 × 1080 · 30fps</dd></div>
          <div><dt>交付文件</dt><dd>透明 ProRes 4444 MOV</dd></div>
          <div><dt>使用方式</dt><dd>原生 macOS · 本地渲染</dd></div>
        </dl>
      </section>

      <section id="motion-templates" class="motion-section" aria-labelledby="motion-templates-title">
        <h2 id="motion-templates-title">三个效果，直接看。</h2>
        <p class="motion-reason">剪映里搭复杂动效，需要一层层做画面、反复调关键帧。我把效果用代码做成可编辑模板，换上内容、生成素材，再拖进剪映继续剪。</p>
        <div class="motion-template-grid">
          ${motionData.templates.map((template) => `<article class="motion-template reveal">
            <div class="motion-template-media"><video controls playsinline preload="none" poster="${motionAsset(template.id + ".webp")}" aria-label="${template.title}五秒效果演示"><source src="${motionAsset(template.id + ".mp4?v=20261007-small")}" type="video/mp4">当前浏览器不支持视频播放。</video></div>
            <div class="motion-template-copy"><h3>${template.title}</h3><p>${template.text}</p><div class="motion-editable"><strong>可编辑</strong><span>${template.editable}</span></div></div>
          </article>`).join("")}
        </div>
        <p class="motion-demo-note">数字为演示示例。</p>
      </section>

      <section class="motion-section motion-workflow" aria-labelledby="motion-flow-title">
        <h2 id="motion-flow-title">从想法，到一段能用的动效。</h2>
        <ol class="motion-steps">${motionData.steps.map(([title, text], index) => `<li class="reveal"><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></li>`).join("")}</ol>
      </section>

      <section class="motion-section motion-editing reveal" aria-labelledby="motion-edit-title">
        <button class="motion-screen-button" type="button" data-motion-screenshot="app-cards.webp" data-motion-caption="卡片翻转模板的专属参数与实时预览" aria-label="放大查看卡片模板编辑界面">
          <img src="${motionAsset("app-cards.webp")}" alt="在卡片模板里修改三张卡片的正面标题与背面内容" loading="lazy"><span>放大查看 <span aria-hidden="true">↗</span></span>
        </button>
        <div>
          <h2 id="motion-edit-title">内容和参数都能改。</h2>
          <p>数字冲刺改数值，终端改命令和输出，卡片逐张改正反面。再调整颜色、速度和时长，让同一个效果适合不同的视频。</p>
        </div>
      </section>

      <section class="motion-section motion-split motion-build reveal" aria-labelledby="motion-build-title">
        <h2 id="motion-build-title">先把重复步骤<br>做成能复用的工具。</h2>
        <div>
          <p>我借助 AI，把剪辑里反复要做的动效整理成模板。这个项目想解决的事很具体：换一条视频，还能用同一套方法快速做出需要的效果。</p>
          <div class="motion-current"><h3>当前进展</h3><p>参数编辑、预览与导出已接入。目前为本地开发版，暂未提供独立安装包。</p></div>
          <a class="button button-secondary" href="../index.html#work">返回其他作品 <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
    <dialog class="contact-lightbox motion-lightbox" id="motion-lightbox" aria-labelledby="motion-lightbox-title">
      <div class="contact-lightbox-panel">
        <div class="contact-lightbox-head"><h2 id="motion-lightbox-title">模板编辑界面</h2><button class="contact-lightbox-close" type="button" data-close-motion aria-label="关闭界面大图">×</button></div>
        <div class="motion-lightbox-media"><img src="${motionAsset("app-terminal-clean.webp")}" alt="3D 终端模板编辑界面大图"></div>
      </div>
    </dialog>`;
}

function initMotionMedia() {
  const dialog = document.querySelector("#motion-lightbox");
  if (!dialog) return;
  let activeButton;
  document.querySelectorAll("[data-motion-screenshot]").forEach((button) => {
    button.addEventListener("click", () => {
      activeButton = button;
      const caption = button.dataset.motionCaption;
      dialog.querySelector("img").src = motionAsset(button.dataset.motionScreenshot);
      dialog.querySelector("img").alt = caption;
      dialog.querySelector("h2").textContent = caption;
      dialog.showModal();
    });
  });
  dialog.querySelector("[data-close-motion]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => activeButton?.focus());
  const videos = document.querySelectorAll(".motion-template video");
  videos.forEach((video) => video.addEventListener("play", () => videos.forEach((other) => { if (other !== video) other.pause(); })));
}

function renderProjectPage() {
  const root = document.querySelector("#project-root");
  const slug = document.body.dataset.project;
  const project = projectData[slug];
  if (!root || !project) return;

  if (slug === "xiaohui-account") {
    renderXiaohuiAccountPage(root);
    return;
  }

  if (slug === "motion-library") {
    renderMotionPage(root);
    return;
  }

  if (slug === "commercial-editing") {
    renderCommercialPage(root);
    return;
  }

  const gallery = project.gallery.length
    ? `
      <section class="detail-gallery page-shell" aria-label="项目画面">
        ${project.gallery
          .map(
            ([src, caption]) => `
              <figure class="gallery-card reveal">
                <img src="${asset(src)}" alt="${caption}" loading="lazy">
                <figcaption>${caption}</figcaption>
              </figure>
            `,
          )
          .join("")}
      </section>
    `
    : "";

  root.innerHTML = `
    <div class="page-shell">
      <section class="project-hero">
        <div>
          <a class="detail-back" href="../index.html#work">← 返回作品</a>
          <div class="detail-kicker">${project.kicker}</div>
          <h1>${project.title}</h1>
          <p class="project-hero-lede">${project.lead}</p>
        </div>
        <div class="project-hero-meta" aria-label="项目摘要">
          ${project.facts
            .map(
              ([label, value]) => `
                <div class="meta-row"><span>${label}</span><strong>${value}</strong></div>
              `,
            )
            .join("")}
        </div>
      </section>

      <figure class="detail-feature reveal">
        <div class="media-frame">
          ${renderCoverMedia(project, "detail")}
        </div>
        <figcaption class="detail-feature-caption">
          <strong>${project.coverCaption}</strong>
          <span>${project.status}</span>
        </figcaption>
      </figure>

      <section class="detail-body">
        <article class="detail-story reveal">
          <div class="section-label">项目现场</div>
          <h2>${project.storyTitle}</h2>
          ${project.story.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          <div class="detail-note">${project.note}</div>
        </article>
        <aside class="detail-aside reveal">
          <h3>我在这里做什么</h3>
          <ul class="detail-list">
            ${project.facts
              .map(
                ([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`,
              )
              .join("")}
          </ul>
        </aside>
      </section>
    </div>
    ${gallery}
  `;
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -30px" },
  );

  elements.forEach((element) => observer.observe(element));
}

function initDeskTilt() {
  const scene = document.querySelector("[data-tilt]");
  if (!scene || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(hover: hover)").matches) return;

  let frame = null;
  let targetX = 0;
  let targetY = 0;

  const paint = () => {
    scene.style.setProperty("--tilt-x", `${targetX.toFixed(2)}deg`);
    scene.style.setProperty("--tilt-y", `${targetY.toFixed(2)}deg`);
    frame = null;
  };

  scene.addEventListener("pointermove", (event) => {
    const bounds = scene.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    targetX = x * 3.2;
    targetY = y * -2.4;
    if (!frame) frame = window.requestAnimationFrame(paint);
  });

  scene.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
    if (!frame) frame = window.requestAnimationFrame(paint);
  });
}

function initContactLightbox() {
  const dialog = document.querySelector("#wechat-lightbox");
  const openButton = document.querySelector("[data-open-qr]");
  const closeButton = document.querySelector("[data-close-qr]");
  if (!dialog || !openButton || !closeButton) return;

  openButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    event.preventDefault();
    dialog.close();
  });

  dialog.addEventListener("close", () => {
    openButton.focus();
  });
}

if (isProjectPage) {
  renderProjectPage();
} else {
  renderProjectCards();
}

initReveal();
initDeskTilt();
initContactLightbox();
initMotionMedia();
initCommercialMedia();
