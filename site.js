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
      ["已完成", "12 期内容"],
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
    kicker: "头家大排档 / 多项目精选",
    lead: "把客户素材剪成有现场感、能把信息说清楚的短视频。",
    summary: "从头家大排档「阿嬷味道系列」开始，整理餐饮内容从素材到成片的剪辑过程。",
    status: "素材整理中",
    cover: "assets/projects/taijia-brief.jpg",
    cardCover: "assets/projects/taijia-brief-card.jpg",
    coverCaption: "头家大排档｜阿嬷味道系列真实文案素材",
    facts: [
      ["内容类型", "餐饮 / 生活方式"],
      ["工作环节", "素材整理 / 剪辑 / 配音节奏"],
      ["公开范围", "按客户授权逐步补齐"],
    ],
    storyTitle: "先把现场剪出来，再把信息放到该出现的位置",
    story: [
      "餐饮内容里有火候、声音、动作和人的记忆。剪辑先要让这些细节成立，再把地址、菜品等信息放到观众需要的位置。",
      "目前先放头家大排档「阿嬷味道系列」的真实文案素材，让你看到项目从哪里开始。其他客户名称和成片，会按可公开范围补齐；没有确认的内容就先不放。",
    ],
    note: "公开素材还在整理。页面只放已经确认的内容，不虚构客户数量、播放量或合作评价。",
    gallery: [],
  },
  "motion-library": {
    slug: "motion-library",
    title: "小辉动效素材台",
    kicker: "剪辑工具 / Vibe Coding",
    lead: "把剪辑里反复做的动效，整理成下次可以直接用的工具。",
    summary: "一个原生 macOS 动效素材工具。模板可以编辑、预览和渲染，透明 MOV 导出后可以在访达中管理，也能继续拖进剪映使用。",
    status: "正在迭代",
    cover: "assets/projects/motion-library-preview.jpg",
    coverCaption: "小辉动效素材台｜真实应用预览截图",
    facts: [
      ["技术方向", "SwiftUI / AppKit 界面开发"],
      ["媒体能力", "AVFoundation / ProRes 4444 视频处理"],
      ["模板方向", "Remotion 动效模板 / 可编辑字段"],
    ],
    storyTitle: "先解决下一次还会遇到的重复工作",
    story: [
      "做剪辑时，很多动效本身并不难，麻烦的是每次都要重新找、重新改、重新导出。这个素材台先解决这几个重复步骤，把常用模板放进一个像工作台一样的界面里。",
      "我会用 AI 和 Vibe Coding 辅助开发，先把字段、预览、渲染和透明通道跑通，再补模板。每一步都要回到真实剪辑里验证，能用再继续。",
    ],
    note: "截图来自当前应用预览。透明 MOV、可编辑字段和拖入剪映的流程，还在边做边验证。",
    gallery: [],
  },
};

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
    { id: "09", date: "待发布", title: "小辉动效素材台", tag: "AI 与工具", cover: "09", pending: true },
    { id: "10", date: "2026.08.13", title: "把 DeepSeek 接入 Codex", tag: "AI 与工具", cover: "10" },
    { id: "11", date: "2026.08.15", title: "移动物体怎么打马赛克", tag: "剪辑教程", cover: "11", url: "https://v.douyin.com/w510vO1yrds/" },
    { id: "12", date: "2026.08.19", title: "剪辑接单全流程", tag: "真实工作", cover: "12", url: "https://v.douyin.com/SJq0_VuH_9Y/" },
  ],
  timeline: [
    {
      index: "01",
      title: "开始面对镜头",
      text: "第一期从自我介绍开始。那时还写不好文案，也不习惯面对镜头，只想先把自己的剪辑能力讲明白。",
      covers: ["01"],
    },
    {
      index: "02",
      title: "先讲会的剪辑",
      text: "从信息流、口播音频、网感配音和长视频精简，到人物凸出与移动马赛克，先把自己每天真的会用、也反复在做的方法讲出来。",
      covers: ["02", "03", "04", "05", "07", "11"],
    },
    {
      index: "03",
      title: "把 AI 放进工作流",
      text: "从 HyperFrames 自动剪辑、DeepSeek 接入 Codex，到自己做小辉动效素材台，AI 不再只是选题，而是被放进真实剪辑流程里验证。",
      covers: ["06", "10", "09"],
    },
    {
      index: "04",
      title: "回到真实工作",
      text: "从真实餐饮项目里的重点词，到客户沟通和剪辑接单经验。软件技巧之外，也开始讲一个剪辑师在真实工作里怎么判断、沟通和交付。",
      covers: ["08", "12"],
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
        "这是账号目前数据最好的一期。它从一段偏长的原始口播出发，讲怎么判断哪些信息应该保留，再用节奏、重点词和画面层级把信息重新组织起来。",
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
        "HyperFrames 是账号从传统剪辑教程走向 AI 工作流的一次明显转折。这一期不只是展示工具，而是把一条真实口播交给它处理，看它能不能接手粗剪、节奏整理等重复步骤。",
        "1.3 万播放和 189 收藏，说明观众关心的不只是“又有一个 AI 工具”，而是它究竟能为剪辑师省下哪些工作。它也让后面的内容更明确：AI 要放进真实流程里测，不只讲功能。",
      ],
    },
    {
      id: "12",
      title: "剪辑接单全流程",
      role: "从软件教程回到真实职业经验",
      metric: "最新内容 / 复盘中",
      metricNote: "暂不展示表现数据",
      url: "https://v.douyin.com/SJq0_VuH_9Y/",
      summary: [
        "这一期把视角从软件技巧拉回剪辑师的真实工作。从客户询价、确认需求和素材，到剪辑、反馈、修改与最终交付，讲的是一次接单怎么真正往下走。",
        "它代表账号现在更想做的事：不只讲一个效果怎么做，也把价格、沟通、修改和交付里的真实问题讲出来。这条仍在复盘中，所以这里只记录它对内容方向的意义，不提前下数据结论。",
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

  const collageClass = variant === "detail"
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
  return `${asset(`assets/projects/xiaohui-account/covers-web/episode-${id}.jpg`)}?v=20260820-manual-crop`;
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
          <div class="account-track" aria-label="${chapter.title}相关内容">
            ${chapter.covers
              .map((id) => {
                const work = xiaohuiAccountData.works.find((item) => item.id === id);
                return `<figure><img src="${accountCover(id)}" alt="${work.title}封面" loading="lazy"><figcaption>${work.title}</figcaption></figure>`;
              })
              .join("")}
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
            <img src="${accountCover(item.id)}" alt="${item.title}封面" loading="lazy">
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

  const works = xiaohuiAccountData.works
    .map(
      (work) => `
        <article class="account-work-card reveal${work.pending ? " is-pending" : ""}">
          <div class="account-work-cover">
            <img src="${accountCover(work.cover)}" alt="${work.title}封面" loading="lazy">
            <span>${work.id}</span>
          </div>
          <div class="account-work-meta"><time>${work.date}</time><span>${work.tag}</span></div>
          <h3>${work.title}</h3>
          ${
            work.url
              ? `<a href="${work.url}" target="_blank" rel="noopener noreferrer">在抖音观看 <span aria-hidden="true">↗</span></a>`
              : `<span class="account-work-unlinked">${work.pending ? "待发布" : "暂未添加公开链接"}</span>`
          }
        </article>
      `,
    )
    .join("");

  root.innerHTML = `
    <div class="account-page">
      <section class="account-hero page-shell">
        <div class="account-hero-copy">
          <a class="detail-back" href="../index.html#work">← 返回作品</a>
          <div class="detail-kicker">${project.kicker}</div>
          <h1>${project.title}</h1>
          <p>${project.lead}</p>
          <dl class="account-facts" aria-label="账号摘要">
            ${project.facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}
          </dl>
        </div>
        <div class="account-film-wall" aria-label="六期真实内容封面组成的胶片墙">
          ${heroCovers}
        </div>
      </section>

      <section class="account-origin account-section page-shell reveal" aria-labelledby="account-origin-title">
        <figure>
          <img src="${accountCover("01")}" alt="第一期自我介绍画面" loading="lazy">
          <figcaption>01 / 第一次面对镜头</figcaption>
        </figure>
        <div class="account-origin-copy">
          <div class="section-label">为什么开始</div>
          <h2 id="account-origin-title">它一开始，并不是一个规划好的“AI 账号”。</h2>
          <blockquote>“不是什么 AI 博主。就是你看我剪得还行，关注一下；遇到好用的 AI 工具，我也跟你聊聊。”</blockquote>
          <p>最开始只是想做一条自我介绍：文案还写不顺，面对镜头也不自然，但想先让别人知道我会剪辑。</p>
          <p>后来讲的东西越来越多——剪辑技巧、AI 工具、客户项目和接单经验。账号的方向不是提前包装出来的，而是在一期期真实内容里慢慢长出来的。</p>
        </div>
      </section>

      <section class="account-timeline account-section" aria-labelledby="account-timeline-title">
        <div class="page-shell">
          <div class="account-section-head">
            <div><div class="section-label">内容成长时间线</div><h2 id="account-timeline-title">从出镜，到真实工作。</h2></div>
            <p>这里借用剪辑轨道的组织方式，把十二期内容放回它们出现的顺序里。</p>
          </div>
          <div class="account-timeline-list">${timeline}</div>
        </div>
      </section>

      <section class="account-featured account-section page-shell" aria-labelledby="account-featured-title">
        <div class="account-section-head">
          <div><div class="section-label">三条代表内容</div><h2 id="account-featured-title">三条内容，展开讲讲。</h2></div>
          <p>和下面的作品索引不同，这里保留它们为什么重要，以及它们怎么改变了账号后面的方向。</p>
        </div>
        <div class="account-featured-list">${featured}</div>
      </section>

      <section class="account-all account-section" aria-labelledby="account-all-title">
        <div class="page-shell">
          <div class="account-section-head">
            <div><div class="section-label">全部内容</div><h2 id="account-all-title">账号目前走过的范围。</h2></div>
            <p>作品墙只说明每一期在讲什么。数据留给真正能支持故事的代表作。</p>
          </div>
          <div class="account-work-grid">${works}</div>
        </div>
      </section>

      <section class="account-process account-section page-shell" aria-labelledby="account-process-title">
        <div class="account-process-copy">
          <div class="section-label">幕后工作方式</div>
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

function renderProjectPage() {
  const root = document.querySelector("#project-root");
  const slug = document.body.dataset.project;
  const project = projectData[slug];
  if (!root || !project) return;

  if (slug === "xiaohui-account") {
    renderXiaohuiAccountPage(root);
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
