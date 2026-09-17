(function () {
  "use strict";

  var translations = {
    zh: {
      pageTitle: "寻美旅行社｜GUMIHO TRAVEL",
      pageDescription: "寻美旅行社韩国旅行概念网站：首尔、济州与釜山的双语定制行程灵感。",
      skipLink: "跳到主要内容",
      brandHome: "寻美旅行社首页",
      brandName: "寻美旅行社",
      mainNavigation: "主要导航",
      mobileNavigation: "移动端导航",
      languageChoice: "语言选择",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      navServices: "旅行服务",
      navRoutes: "热门路线",
      navProcess: "预约流程",
      navAbout: "关于我们",
      navFaq: "常见问题",
      navConsult: "咨询行程",
      heroEyebrow: "韩国在地旅行 · 双语沟通",
      heroLine1: "你所向往的韩国，",
      heroLine2: "不止一种打开方式。",
      heroLead: "从首尔的晨光到济州的海风，以你的节奏规划一次更自在、更有温度的韩国旅行。",
      heroPrimary: "聊聊你的旅行",
      heroSecondary: "看看路线灵感",
      heroNoteLabel: "行程设计说明",
      heroNoteTitle: "从一份空白行程开始",
      heroNoteText: "告诉我们想去的城市、旅行天数和偏好，一起梳理适合你的旅行节奏。",
      serviceOverview: "服务概览",
      dockFlight: "机票规划",
      dockFlightSub: "航班时间建议",
      dockStay: "住宿建议",
      dockStaySub: "匹配区域与预算",
      dockTransfer: "接送协调",
      dockTransferSub: "衔接移动节奏",
      dockTheme: "主题路线",
      dockThemeSub: "自然、美食与文化",
      dockLanguage: "双语支持",
      dockLanguageSub: "中文与韩文沟通",
      servicesEyebrow: "OUR SERVICES · 旅行服务",
      servicesTitle: "把行程变成值得回味的日常",
      servicesIntro: "不追赶景点清单，从你的兴趣、同行成员与旅行步调出发，整理每一天的重点。",
      imageSeoul: "首尔城市风景示意图",
      imageJeju: "济州海岸风景示意图",
      imageFood: "韩国街巷与餐食氛围示意图",
      imageCulture: "韩国传统建筑与文化体验示意图",
      citySeoul: "首尔 SEOUL",
      cityJeju: "济州 JEJU",
      themeTaste: "风味 TASTE",
      themeCulture: "文化 CULTURE",
      serviceCityTitle: "城市慢游",
      serviceCityText: "古宫、街区与设计空间交错，把熟悉的城市走出自己的路线。",
      serviceNatureTitle: "自然休息",
      serviceNatureText: "海岸、森林与小村落之间，留出真正可以放慢脚步的时间。",
      serviceTasteTitle: "风味地图",
      serviceTasteText: "从传统市场到街区小店，让一顿饭成为认识一座城的入口。",
      serviceCultureTitle: "文化相遇",
      serviceCultureText: "看展、手作与传统体验，找到景点之外更真实的韩国切面。",
      serviceLink: "告诉我们你的偏好",
      routesEyebrow: "ROUTE INSPIRATION · 路线灵感",
      routesTitle: "从这些旅行节奏开始想象",
      routesIntro: "以下为路线方向示例，不是固定套餐。最终内容将根据季节、同行成员与实际条件调整。",
      routeImageSeoul: "首尔宫殿与城市路线示意图",
      routeImageJeju: "济州海岸路线示意图",
      routeImageBusan: "韩国传统市场与美食路线示意图",
      routeThemes: "路线主题",
      routeSeoulMeta: "首尔 · 4日节奏示例",
      routeSeoulTitle: "城市与传统，刚好相遇",
      routeSeoulText: "古宫散步、街区咖啡、设计小店与汉江黄昏，在新与旧之间自由切换。",
      routeJejuMeta: "济州 · 4日节奏示例",
      routeJejuTitle: "把日程交给海风",
      routeJejuText: "沿海散步、自然风景与安静小店，给身体和心情都留一点空白。",
      routeBusanMeta: "首尔 · 2日主题示例",
      routeBusanTitle: "在市场与夜色里开胃",
      routeBusanText: "传统市场、街区小店与夜间散步，用味觉记住首尔最鲜活的一面。",
      tagArchitecture: "建筑",
      tagNeighborhood: "街区",
      tagDesign: "设计",
      tagNature: "自然",
      tagWalk: "徒步",
      tagRelax: "放松",
      tagLocal: "在地",
      tagFood: "美食",
      tagMarket: "市场",
      brandIdea: "品牌理念",
      imageHanok: "韩国传统建筑示意图",
      quoteEyebrow: "TRAVEL, MADE PERSONAL",
      quoteText: "“好的旅行，不是去过多少地方，而是留下些什么感受。”",
      quoteSub: "寻美旅行社，陪你找到适合自己的韩国旅行方式。",
      processEyebrow: "HOW IT WORKS · 预约流程",
      processTitle: "四步，把想法变成清晰行程",
      processIntro: "先理解你，再讨论路线。每一步都保留调整空间。",
      process1Title: "分享期待",
      process1Text: "告诉我们城市、日期、同行成员与旅行偏好。",
      process2Title: "梳理方向",
      process2Text: "一起确认重点、节奏与需要协助的事项。",
      process3Title: "确认安排",
      process3Text: "根据可用情况核对细节，再确定最终计划。",
      process4Title: "自在出发",
      process4Text: "带着清楚的路线与必要信息，开始韩国之旅。",
      reasonsEyebrow: "WHY GUMIHO · 选择理由",
      reasonsTitle: "旅行里最重要的，是恰到好处",
      reasonsIntro: "不堆满日程，也不套用同一份模板，把注意力放回旅行者本身。",
      reason1Title: "双语沟通",
      reason1Text: "以中文理解需求，以韩文衔接当地信息，减少沟通落差。",
      reason2Title: "灵活节奏",
      reason2Text: "根据同行成员、季节与体力安排每天的行走密度。",
      reason3Title: "兴趣优先",
      reason3Text: "从自然、饮食、文化或购物兴趣出发，建立路线重点。",
      reason4Title: "信息清楚",
      reason4Text: "把交通、时间与注意事项整理成容易理解的旅行信息。",
      aboutEyebrow: "ABOUT US · 公司介绍",
      aboutTitle: "在陌生城市里，给你一份熟悉感",
      aboutText1: "寻美旅行社专注于韩国旅行的路线策划与信息整理。我们相信，真正适合的旅程不在于景点数量，而在于每一天是否符合你的兴趣与状态。",
      aboutText2: "从首尔、济州到釜山，我们以中文与韩文协助沟通，让出发前的想法更清楚，也让旅途中的选择更从容。",
      imageAbout: "首尔街区旅行氛围示意图",
      serviceInfo: "服务信息",
      factLanguageLabel: "沟通语言",
      factLanguageValue: "中文 · 한국어",
      factAreaLabel: "路线方向",
      factAreaValue: "首尔 · 济州 · 釜山",
      factHoursLabel: "咨询时间",
      factHoursValue: "09:00–23:00",
      faqEyebrow: "FAQ · 常见问题",
      faqTitle: "出发前，先把这些问题说清楚",
      faqIntro: "具体服务范围、费用与预订条款，请以正式咨询时提供的信息为准。",
      faq1Question: "可以用中文沟通吗？",
      faq1Answer: "可以。网站与咨询流程计划提供中文和韩文沟通支持，也可以通过页面所列社媒主页了解最新信息。",
      faq2Question: "可以只做路线规划吗？",
      faq2Answer: "可以先说明需要协助的范围，我们会根据实际服务内容确认是否适合承接。",
      faq3Question: "行程内容是固定的吗？",
      faq3Answer: "不是。页面中的路线仅作灵感展示，实际安排会根据季节、可用情况和个人偏好调整。",
      faq4Question: "网站上的图片和信息已经是最终版本吗？",
      faq4Answer: "目前是概念预览。企业资料、服务条款与授权图片会在正式发布前完成核对与替换。",
      contactEyebrow: "START YOUR JOURNEY",
      contactTitle: "下一段旅程，从一个想法开始",
      contactText: "先整理目的地、月份与最想体验的事。这个预览表单不会上传或保存个人信息；整理后可通过下方社交媒体与我们联系。",
      contactNote: "咨询请通过下方社交媒体联系我们。",
      contactDetailsLabel: "公司信息与社交媒体",
      consultationHoursLabel: "咨询时间",
      consultationHoursValue: "09:00–23:00",
      companyLocationLabel: "公司位置",
      companyAddress: "GUMIHO INC. · 韩国首尔特别市城东区往十里路 222 号",
      viewOnGoogleMaps: "在 Google 地图中查看",
      mapLinkAria: "在 Google 地图查看 GUMIHO INC.（新窗口打开）",
      socialChannelsLabel: "社交媒体",
      instagramProfileAria: "在 Instagram 查看 @gumihotirp（新窗口打开）",
      xiaohongshuProfileAria: "在小红书查看 @寻美旅行社（新窗口打开）",
      xiaohongshuName: "小红书",
      formDestination: "想去哪里？",
      formDestinationSeoul: "首尔",
      formDestinationJeju: "济州",
      formDestinationBusan: "釜山",
      formDestinationMulti: "多城市",
      formDestinationUnsure: "还没决定",
      formMonth: "预计月份",
      formInterests: "最期待什么？",
      formInterestsPlaceholder: "例如：传统建筑、海边散步、咖啡店与当地市场",
      formSubmit: "整理我的旅行想法",
      formResultPrefix: "已整理：",
      formResultEmpty: "请先选择目的地，或写下一点旅行想法。",
      formResultSuffix: "。概念预览不会提交这些内容；请通过页面所列社交媒体与我们联系。",
      footerTagline: "把韩国旅行，写成属于你的故事。",
      footerNavigate: "快速导航",
      footerCredits: "图片来源与许可",
      footerContact: "地址与社媒",
      footerHours: "咨询时间：09:00–23:00",
      footerXiaohongshu: "小红书 · @寻美旅行社",
      footerPreview: "概念预览 · 暂未公开收录"
    },
    ko: {
      pageTitle: "구미호 여행사 | GUMIHO TRAVEL",
      pageDescription: "서울, 제주, 부산을 위한 한중 이중 언어 맞춤 여행 아이디어를 만나보세요.",
      skipLink: "본문으로 바로가기",
      brandHome: "구미호 여행사 홈",
      brandName: "구미호 여행사",
      mainNavigation: "주요 메뉴",
      mobileNavigation: "모바일 메뉴",
      languageChoice: "언어 선택",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
      navServices: "여행 서비스",
      navRoutes: "추천 코스",
      navProcess: "예약 과정",
      navAbout: "회사 소개",
      navFaq: "자주 묻는 질문",
      navConsult: "여행 상담",
      heroEyebrow: "한국 현지 여행 · 한중 소통",
      heroLine1: "당신이 바라던 한국,",
      heroLine2: "여행하는 방법은 하나가 아니니까.",
      heroLead: "서울의 아침부터 제주의 바람까지, 나만의 속도로 더 편안하고 따뜻한 한국 여행을 그려보세요.",
      heroPrimary: "여행 이야기 나누기",
      heroSecondary: "코스 아이디어 보기",
      heroNoteLabel: "여행 설계 안내",
      heroNoteTitle: "빈 일정표에서 시작합니다",
      heroNoteText: "가고 싶은 도시, 여행 일수와 취향을 알려주시면 어울리는 여행 리듬을 함께 정리합니다.",
      serviceOverview: "서비스 한눈에 보기",
      dockFlight: "항공 일정",
      dockFlightSub: "항공편 시간 제안",
      dockStay: "숙소 제안",
      dockStaySub: "지역과 예산에 맞게",
      dockTransfer: "이동 연계",
      dockTransferSub: "동선을 자연스럽게",
      dockTheme: "테마 코스",
      dockThemeSub: "자연·미식·문화",
      dockLanguage: "이중 언어",
      dockLanguageSub: "중국어·한국어 소통",
      servicesEyebrow: "OUR SERVICES · 여행 서비스",
      servicesTitle: "여행을 오래 기억할 일상으로",
      servicesIntro: "관광지 목록을 좇기보다 관심사, 동행자와 여행 속도에 맞춰 하루의 포인트를 정리합니다.",
      imageSeoul: "서울 도심 풍경 예시 이미지",
      imageJeju: "제주 해안 풍경 예시 이미지",
      imageFood: "한국 골목과 음식 분위기 예시 이미지",
      imageCulture: "한국 전통 건축과 문화 체험 예시 이미지",
      citySeoul: "서울 SEOUL",
      cityJeju: "제주 JEJU",
      themeTaste: "미식 TASTE",
      themeCulture: "문화 CULTURE",
      serviceCityTitle: "도시 산책",
      serviceCityText: "고궁, 동네와 디자인 공간을 엮어 익숙한 도시에서도 나만의 길을 찾습니다.",
      serviceNatureTitle: "자연 속 쉼",
      serviceNatureText: "해안과 숲, 작은 마을 사이에서 천천히 머물 수 있는 시간을 남깁니다.",
      serviceTasteTitle: "미식 지도",
      serviceTasteText: "전통시장부터 동네 작은 식당까지, 한 끼로 도시를 알아갑니다.",
      serviceCultureTitle: "문화와의 만남",
      serviceCultureText: "전시, 공예와 전통 체험으로 명소 너머의 한국을 만납니다.",
      serviceLink: "취향 알려주기",
      routesEyebrow: "ROUTE INSPIRATION · 코스 아이디어",
      routesTitle: "이런 여행 리듬부터 상상해 보세요",
      routesIntro: "아래 내용은 고정 상품이 아닌 코스 방향 예시입니다. 계절, 동행자와 실제 여건에 따라 조정됩니다.",
      routeImageSeoul: "서울 궁궐과 도심 코스 예시 이미지",
      routeImageJeju: "제주 해안 코스 예시 이미지",
      routeImageBusan: "한국 전통시장과 미식 코스 예시 이미지",
      routeThemes: "코스 테마",
      routeSeoulMeta: "서울 · 4일 일정 예시",
      routeSeoulTitle: "도시와 전통이 알맞게 만나는 순간",
      routeSeoulText: "고궁 산책, 동네 카페, 디자인 숍과 한강의 저녁을 오가며 새로움과 익숙함을 함께 즐깁니다.",
      routeJejuMeta: "제주 · 4일 일정 예시",
      routeJejuTitle: "일정을 바닷바람에 맡기기",
      routeJejuText: "해안 산책과 자연 풍경, 조용한 작은 가게 사이에서 몸과 마음에 여백을 남깁니다.",
      routeBusanMeta: "서울 · 2일 테마 예시",
      routeBusanTitle: "시장과 밤거리에서 입맛 깨우기",
      routeBusanText: "전통시장, 동네 식당과 밤 산책으로 서울의 가장 생생한 표정을 맛봅니다.",
      tagArchitecture: "건축",
      tagNeighborhood: "동네",
      tagDesign: "디자인",
      tagNature: "자연",
      tagWalk: "산책",
      tagRelax: "휴식",
      tagLocal: "로컬",
      tagFood: "미식",
      tagMarket: "시장",
      brandIdea: "브랜드 철학",
      imageHanok: "한국 전통 건축 예시 이미지",
      quoteEyebrow: "TRAVEL, MADE PERSONAL",
      quoteText: "“좋은 여행은 얼마나 많이 보았는지가 아니라, 어떤 느낌을 남겼는가에 있습니다.”",
      quoteSub: "구미호 여행사가 나에게 맞는 한국 여행 방식을 함께 찾습니다.",
      processEyebrow: "HOW IT WORKS · 예약 과정",
      processTitle: "네 단계로 생각을 선명한 일정으로",
      processIntro: "먼저 여행자를 이해하고 코스를 이야기합니다. 모든 단계에 조정할 여지를 둡니다.",
      process1Title: "기대 나누기",
      process1Text: "도시, 날짜, 동행자와 여행 취향을 알려주세요.",
      process2Title: "방향 정리",
      process2Text: "여행의 포인트와 속도, 필요한 도움을 함께 확인합니다.",
      process3Title: "일정 확인",
      process3Text: "이용 가능 여부와 세부 사항을 확인한 뒤 최종 계획을 정합니다.",
      process4Title: "편안한 출발",
      process4Text: "정리된 동선과 필요한 정보를 챙겨 한국 여행을 시작합니다.",
      reasonsEyebrow: "WHY GUMIHO · 선택 이유",
      reasonsTitle: "여행에서 중요한 건 알맞은 균형",
      reasonsIntro: "일정을 빼곡히 채우거나 같은 틀을 반복하지 않고 여행자에게 다시 집중합니다.",
      reason1Title: "한중 소통",
      reason1Text: "중국어로 니즈를 이해하고 한국어로 현지 정보를 연결해 소통의 간극을 줄입니다.",
      reason2Title: "유연한 리듬",
      reason2Text: "동행자, 계절과 체력을 고려해 하루의 이동 밀도를 조절합니다.",
      reason3Title: "취향 우선",
      reason3Text: "자연, 음식, 문화 또는 쇼핑 취향에서 출발해 코스의 중심을 세웁니다.",
      reason4Title: "선명한 정보",
      reason4Text: "교통, 시간과 유의 사항을 이해하기 쉬운 여행 정보로 정리합니다.",
      aboutEyebrow: "ABOUT US · 회사 소개",
      aboutTitle: "낯선 도시에서 느끼는 익숙한 편안함",
      aboutText1: "구미호 여행사는 한국 여행 코스 기획과 정보 정리에 집중합니다. 좋은 여행은 명소의 수가 아니라 하루하루가 나의 취향과 상태에 맞는지에 달려 있다고 믿습니다.",
      aboutText2: "서울, 제주에서 부산까지 중국어와 한국어로 소통을 돕고, 출발 전 생각은 더 선명하게 여행 중 선택은 더 여유롭게 만듭니다.",
      imageAbout: "서울 동네 여행 분위기 예시 이미지",
      serviceInfo: "서비스 정보",
      factLanguageLabel: "상담 언어",
      factLanguageValue: "中文 · 한국어",
      factAreaLabel: "코스 지역",
      factAreaValue: "서울 · 제주 · 부산",
      factHoursLabel: "상담 시간",
      factHoursValue: "09:00–23:00",
      faqEyebrow: "FAQ · 자주 묻는 질문",
      faqTitle: "출발 전, 이것부터 확인하세요",
      faqIntro: "구체적인 서비스 범위, 비용과 예약 조건은 정식 상담 시 안내되는 정보를 기준으로 합니다.",
      faq1Question: "중국어로 상담할 수 있나요?",
      faq1Answer: "네. 웹사이트와 상담 과정에서 중국어와 한국어 소통을 지원할 예정이며, 페이지에 안내된 소셜 채널에서 최신 소식도 확인할 수 있습니다.",
      faq2Question: "코스 기획만 요청할 수 있나요?",
      faq2Answer: "필요한 도움의 범위를 먼저 알려주시면 실제 서비스 내용에 따라 진행 가능 여부를 확인합니다.",
      faq3Question: "일정은 고정되어 있나요?",
      faq3Answer: "아닙니다. 페이지의 코스는 아이디어 예시이며 실제 일정은 계절, 이용 가능 여부와 개인 취향에 따라 달라집니다.",
      faq4Question: "웹사이트의 이미지와 정보는 최종본인가요?",
      faq4Answer: "현재는 콘셉트 미리보기입니다. 회사 정보, 서비스 약관과 사용 허가된 이미지는 정식 공개 전에 확인하고 교체합니다.",
      contactEyebrow: "START YOUR JOURNEY",
      contactTitle: "다음 여행은 하나의 생각에서 시작됩니다",
      contactText: "목적지, 여행 시기와 가장 기대하는 일을 먼저 정리해 보세요. 이 미리보기 양식은 개인정보를 전송하거나 저장하지 않으며, 정리 후 아래 소셜 채널로 문의할 수 있습니다.",
      contactNote: "상담은 아래 소셜 채널로 문의해 주세요.",
      contactDetailsLabel: "회사 정보 및 소셜 채널",
      consultationHoursLabel: "상담 시간",
      consultationHoursValue: "09:00–23:00",
      companyLocationLabel: "오시는 길",
      companyAddress: "GUMIHO INC. · 서울특별시 성동구 왕십리로 222",
      viewOnGoogleMaps: "Google 지도에서 보기",
      mapLinkAria: "Google 지도에서 GUMIHO INC. 보기(새 창에서 열림)",
      socialChannelsLabel: "소셜 채널",
      instagramProfileAria: "Instagram에서 @gumihotirp 프로필 보기(새 창에서 열림)",
      xiaohongshuProfileAria: "샤오홍슈에서 @寻美旅行社 프로필 보기(새 창에서 열림)",
      xiaohongshuName: "샤오홍슈",
      formDestination: "어디로 가고 싶나요?",
      formDestinationSeoul: "서울",
      formDestinationJeju: "제주",
      formDestinationBusan: "부산",
      formDestinationMulti: "여러 도시",
      formDestinationUnsure: "아직 미정",
      formMonth: "예상 여행 월",
      formInterests: "무엇이 가장 기대되나요?",
      formInterestsPlaceholder: "예: 전통 건축, 바닷가 산책, 카페와 로컬 시장",
      formSubmit: "나의 여행 생각 정리하기",
      formResultPrefix: "정리된 내용: ",
      formResultEmpty: "목적지를 선택하거나 간단한 여행 생각을 적어 주세요.",
      formResultSuffix: ". 콘셉트 미리보기에서는 이 내용을 전송하지 않습니다. 페이지에 안내된 소셜 채널로 문의해 주세요.",
      footerTagline: "한국 여행을 나만의 이야기로 써 내려갑니다.",
      footerNavigate: "바로가기",
      footerCredits: "사진 출처 및 라이선스",
      footerContact: "주소 및 소셜 채널",
      footerHours: "상담 시간: 09:00–23:00",
      footerXiaohongshu: "샤오홍슈 · @寻美旅行社",
      footerPreview: "콘셉트 미리보기 · 검색 노출 안 됨"
    }
  };

  var root = document.documentElement;
  var menuButton = document.querySelector(".menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var header = document.querySelector("[data-header]");
  var mainContent = document.getElementById("main-content");
  var siteFooter = document.querySelector(".site-footer");
  var desktopMediaQuery = window.matchMedia("(min-width: 1101px)");
  var form = document.getElementById("inquiry-form");
  var formStatus = document.getElementById("form-status");
  var currentLanguage = "zh";

  function safeGetLanguage() {
    try {
      return window.localStorage.getItem("gumiho-language");
    } catch (error) {
      return null;
    }
  }

  function safeSaveLanguage(language) {
    try {
      window.localStorage.setItem("gumiho-language", language);
    } catch (error) {
      return;
    }
  }

  function setPageBehindMenuInert(isInert) {
    [mainContent, siteFooter].forEach(function (element) {
      if (element) {
        element.toggleAttribute("inert", isInert);
      }
    });
  }

  function closeMenu(restoreFocus) {
    if (!menuButton || !mobileMenu) {
      return;
    }

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", translations[currentLanguage].openMenu);
    mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
    setPageBehindMenuInert(false);

    if (restoreFocus && menuButton.offsetParent !== null) {
      menuButton.focus();
    }
  }

  function openMenu() {
    if (!menuButton || !mobileMenu) {
      return;
    }

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", translations[currentLanguage].closeMenu);
    mobileMenu.hidden = false;
    document.body.classList.add("menu-open");
    setPageBehindMenuInert(true);

    var firstLink = mobileMenu.querySelector("a");
    if (firstLink) {
      firstLink.focus();
    }
  }

  function applyLanguage(language) {
    var dictionary = translations[language];

    if (!dictionary) {
      return;
    }

    currentLanguage = language;
    root.lang = language === "ko" ? "ko" : "zh-CN";
    document.title = dictionary.pageTitle;

    var metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", dictionary.pageDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-aria");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute("aria-label", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-placeholder");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute("placeholder", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-lang]").forEach(function (button) {
      var isActive = button.getAttribute("data-lang") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (formStatus) {
      formStatus.textContent = "";
    }

    safeSaveLanguage(language);
    closeMenu();
  }

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang"));
    });
  });

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      var willOpen = menuButton.getAttribute("aria-expanded") !== "true";
      if (willOpen) {
        openMenu();
      } else {
        closeMenu(false);
      }
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        closeMenu(true);
      }
    });

    var closeMenuAtDesktop = function (event) {
      if (!event.matches || menuButton.getAttribute("aria-expanded") !== "true") {
        return;
      }

      var focusWasInMenu = mobileMenu.contains(document.activeElement);
      closeMenu(false);
      if (focusWasInMenu) {
        var brandLink = document.querySelector(".site-header .brand");
        if (brandLink) {
          brandLink.focus();
        }
      }
    };

    if (typeof desktopMediaQuery.addEventListener === "function") {
      desktopMediaQuery.addEventListener("change", closeMenuAtDesktop);
    } else {
      desktopMediaQuery.addListener(closeMenuAtDesktop);
    }
  }

  window.addEventListener(
    "scroll",
    function () {
      if (header) {
        header.classList.toggle("is-scrolled", window.scrollY > 12);
      }
    },
    { passive: true }
  );

  document.querySelectorAll(".faq-list details").forEach(function (detail) {
    detail.addEventListener("toggle", function () {
      if (!detail.open) {
        return;
      }

      document.querySelectorAll(".faq-list details").forEach(function (otherDetail) {
        if (otherDetail !== detail) {
          otherDetail.open = false;
        }
      });
    });
  });

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var dictionary = translations[currentLanguage];
      var destinationSelect = document.getElementById("destination");
      var monthInput = document.getElementById("travel-month");
      var interestsInput = document.getElementById("interests");
      var destination = destinationSelect.options[destinationSelect.selectedIndex].text;
      var month = monthInput.value;
      var interests = interestsInput.value.trim();
      var summaryParts = [destination];

      if (month) {
        summaryParts.push(month);
      }

      if (interests) {
        summaryParts.push(interests);
      }

      if (!destination && !interests) {
        formStatus.textContent = dictionary.formResultEmpty;
        return;
      }

      formStatus.textContent =
        dictionary.formResultPrefix +
        summaryParts.join(currentLanguage === "ko" ? " · " : " · ") +
        dictionary.formResultSuffix;
    });
  }

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealElements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("will-reveal");
    });

    var observer = new IntersectionObserver(
      function (entries, activeObserver) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            activeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px"
      }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  }

  var yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  var savedLanguage = safeGetLanguage();
  var browserPrefersKorean = window.navigator.language.toLowerCase().indexOf("ko") === 0;
  applyLanguage(savedLanguage === "ko" || savedLanguage === "zh" ? savedLanguage : browserPrefersKorean ? "ko" : "zh");
})();
