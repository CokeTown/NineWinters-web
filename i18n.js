(() => {
/* global window, document, localStorage, CustomEvent, navigator */
  'use strict';

  const EMAIL = 'ninewinters1212@gmail.com';
  const STEAM_URL = 'https://store.steampowered.com/app/4950160/Nine_Winters/';
  const STEAM_LABEL = 'store.steampowered.com/app/4950160';

  const COPY = {
    ko: {
      metaTitle: 'Nine Winters — 프레스킷',
      metaDescription: '무너진 도시에서 살림을 꾸리고 아홉 번의 겨울을 보내는 코지 포스트아포칼립스 생활 시뮬레이션. KKIRRI Studio 보도자료 키트.',
      language: { button: '언어 · 한국어', title: '언어 선택', help: '프레스킷 전체에 사용할 언어를 선택하세요.', close: '닫기' },
      header: {
        tagline: '무너진 도시에서 살림을 꾸리고 아홉 번의 겨울을 보내는 코지 포스트아포칼립스 생활 시뮬레이션.',
        steam: 'Steam 페이지', assets: '보도 자산',
        note: 'Steam 페이지는 2026년 10월 Steam Next Fest에 맞춰 공개됩니다.'
      },
      sections: { description: '소개', features: '특징', trailer: '트레일러', screenshots: '스크린샷', gifs: 'GIF', brand: '로고 · 브랜딩', facts: '팩트시트', history: '개발 이야기', faq: 'FAQ', contact: '연락처' },
      nav: ['소개', '특징', '트레일러', '스크린샷', 'GIF', '로고 · 브랜딩', '팩트시트', '개발 이야기', 'FAQ', '연락처'],
      facts: {
        heading: 'FACTSHEET', contents: 'CONTENTS',
        labels: ['게임명', '개발', '장르', '플랫폼', '가격', '출시', '데모', 'Steam 페이지', '지원 언어', '난이도', '보도 연락처'],
        values: ['Nine Winters', 'KKIRRI Studio (1인 개발)', '코지 포스트아포칼립스 생활 시뮬레이션', 'Windows (Steam)', '$11.99', '2026년 12월', '2026년 10월 Steam Next Fest', '', '한국어, English, 日本語 (인터페이스 + 자막, 추가 언어 지원 예정)', '코지 / 생존 / 혹한 (3단계) + 무한 / 배경화면 모드', ''],
        steamNote: '(2026년 10월 Steam Next Fest 공개 예정)'
      },
      description: {
        lead: '무너진 도시에서 살림을 꾸리고 아홉 번의 겨울을 보내는 코지 포스트아포칼립스 생활 시뮬레이션입니다.',
        body: '19곳의 폐허를 돌아다니며 쓸 만한 물자를 챙겨 오고 16곳의 거처 중 마음에 드는 곳을 골라 나만의 집으로 만드세요. 겨울이 깊어질수록 새 길이 열리고 도시가 망한 이유도 드러납니다. 아홉 번째 겨울 끝에는 앞으로 살아갈 곳을 정해야 합니다.'
      },
      features: [
        ['1. 끝이 있는 코지', '이야기는 아홉 번의 겨울 동안 이어집니다. 해마다 추위와 도시의 모습이 달라지고 아홉 번째 겨울에 내린 선택에 따라 결말이 바뀝니다.'],
        ['2. 16곳의 거처', '옥탑, 벙커, 버스, 지하철 승강장, 등대와 선박도 집이 됩니다. 마음에 드는 거처를 골라 금 간 곳을 막고 난방과 가구를 들이세요. 차갑고 텅 빈 공간이 조금씩 집처럼 변합니다.'],
        ['3. 살아 있는 날씨', '36곡의 음악이 날씨와 계절, 시간을 따라 흐릅니다. 비가 오면 벽이 젖고 겨울이 오면 창에 서리가 낍니다. 사계절이 돌 때마다 거처 안팎의 풍경이 바뀝니다.'],
        ['4. 돌아오면 살림 돌보기', '끼니와 차를 준비하고 작물을 돌보세요. 천을 꿰매 이불을 만들고 망가진 물건도 손봅니다. 길고양이가 찾아오면 먹이를 주고 함께 지낼 수 있습니다.'],
        ['5. 라디오에 남은 도시의 기록', '주파수를 맞추면 방송과 끊긴 교신, 오래된 녹음이 들려옵니다. 더 먼 곳까지 나갈수록 도시가 왜 망했는지 조금씩 알게 됩니다.'],
        ['6. 19곳을 직접 탐험하기', '위험과 필요한 도구를 살핀 뒤 폐허로 직접 나서세요. 눈이 길을 막으면 물자와 기력을 써 길을 내거나 먼 길을 돌아가야 합니다.'],
        ['7. 내 속도로 보내는 겨울', '코지, 생존, 혹한 가운데 원하는 난이도를 고르세요. 선택에 따라 추위와 자원 압박이 달라집니다. 무한 모드에서는 살림을 계속 이어 가고 배경화면 모드에서는 자원 걱정 없이 거처를 꾸밉니다.'],
        ['8. 바탕화면에 켜 두기', '자동 진행을 켜 두고 하루가 흐르는 모습을 지켜보세요. 완성한 거처를 데스크톱 위젯으로 띄워 둘 수도 있습니다.']
      ],
      trailer: { placeholder: '트레일러 삽입 영역', note: '트레일러 공개 URL이 확정되면 이 자리에 연결합니다.' },
      screenshots: {
        items: [
          ['컨테이너 거처', '컨테이너 거처와 게임 HUD.'], ['설원 로지', '설원 로지 거처와 게임 HUD.'],
          ['펜트하우스', '펜트하우스 거처와 게임 HUD.'], ['온실 거처', '온실 거처와 게임 HUD.'],
          ['그래픽 설정', '디스플레이 항목이 맨 위에 표시된 그래픽 설정 화면.'], ['제작 PDA', '휴대 단말에 열린 제작 화면.'],
          ['탐험 — 어시장', '겨울 어시장을 수색하는 탐험 무대.'], ['도시 관측 지도', '관측 단말에 표시된 얼어붙은 도시 지도.']
        ],
        note: '1920×1080 PNG · 이미지를 누르면 원본이 열립니다. 기사·영상에 별도 허가 없이 쓰셔도 됩니다.'
      },
      gifs: {
        items: [
          ['동부 전경, 노을', '해 질 녘 동부 구역 전경.'], ['24시간 타임랩스', '다리 위 집에 하루가 통째로 흐르는 장면.'],
          ['옥탑에 내리는 비', '옥탑 거처에 비가 고이는 장면.'], ['로지의 눈보라', '스키 로지를 지나가는 눈보라.'],
          ['등대의 밤', '밤에 돌아가는 등대 불빛.'], ['난로 곁의 고양이', '불 켜진 난로 앞에서 잠든 고양이.'],
          ['쓰다듬기와 밥그릇', '밥그릇 옆에서 고양이를 쓰다듬는 장면.'], ['계절에 따른 수위 변화', '계절과 날씨에 따라 수위가 차오르는 항만.']
        ],
        note: '1280×720 · 15fps · 6초 반복 · 실제 게임 렌더러에서 캡처했습니다. 누르면 원본이 열립니다.'
      },
      brand: {
        labels: ['워드마크', '로고', '엠블럼', '메인 캡슐', '헤더 캡슐', '라이브러리 캡슐'],
        alts: ['배경이 투명한 Nine Winters 워드마크.', '배경이 투명한 Nine Winters 로고.', '배경이 투명한 Nine Winters 엠블럼.', 'Nine Winters 메인 캡슐 이미지.', 'Nine Winters 헤더 캡슐 이미지.', 'Nine Winters 세로형 라이브러리 캡슐 이미지.'],
        note: '워드마크와 로고는 어두운 배경 위에 놓아 주시고 색상이나 비율은 바꾸지 말아 주세요.'
      },
      history: [
        'Nine Winters는 KKIRRI Studio가 만드는 1인 개발 게임이다. 게임의 기획과 방향, 최종 검수는 개발자가 직접 맡는다. AI는 일부 모델링 작업을 보조하고 코딩, 기계 번역, 노래 제작에 활용한다.',
        '모든 장면은 실제 게임에서 3D 복셀로 렌더링한다. 스크린샷과 트레일러도 모두 실제 게임 화면이다.',
        '현재 내부 빌드에는 요리와 재배, 청소, 재봉, 사진, 고양이 돌보기 같은 생활과 아홉 번의 겨울을 잇는 기본 진행이 들어가 있다. 출시 전까지는 겨울 탐험의 세부 동선과 후반부 이야기, 영어·일본어 번역, 장기 밸런스 검증과 배포 준비를 다듬는다. 최신 생활 콘텐츠는 본편에서 먼저 검증한 뒤 데모에 옮길 예정이다.'
      ],
      faq: [
        ['Q. 데모에서는 어디까지 해볼 수 있나요?', '데모에서는 거처 하나에 불을 지피고 첫눈과 첫 한파를 맞는 보름(15일)을 보냅니다. 수프를 데우고 벽을 고치고 고양이를 곁에 두는 Nine Winters의 하루가 이 안에 담겨 있습니다. Day 15, 겨울을 살짝 맛본 순간 화면이 잠시 멈춥니다. 여덟 번의 겨울이 남아 있습니다.'],
        ['Q. 출시 시기는 언제인가요?', '2026년 12월 출시 예정입니다. 정확한 날짜는 추후 공개합니다. 2026년 10월 Steam Next Fest에서 데모를 먼저 선보입니다.'],
        ['Q. 어떤 플랫폼에서 플레이할 수 있나요?', 'Steam(Windows)으로 출시합니다.'],
        ['Q. DLC나 업데이트 계획이 있나요?', 'DLC를 준비 중이며 계절에 맞춘 무료 업데이트도 이어갈 계획입니다.'],
        ['Q. AI를 사용한 게임인가요?', '일부 모델링 작업의 보조와 코딩, 기계 번역, 노래 제작에 AI를 사용했습니다. 게임의 기획과 방향, 최종 검수는 개발자가 직접 맡습니다.'],
        ['Q. 지원 언어는 무엇인가요?', '출시 시점에는 한국어, 영어, 일본어를 지원합니다. 이후 다른 언어도 차례로 추가할 계획이며 인터페이스와 자막을 함께 지원합니다.']
      ],
      contact: { note: '이 페이지의 스크린샷과 GIF, 로고는 기사·영상·방송에 별도 허가 없이 쓰실 수 있습니다.' },
      footer: `NINE WINTERS © 2026 KKIRRI Studio · ${EMAIL}`
    },

    en: {
      metaTitle: 'Nine Winters — Press Kit',
      metaDescription: 'Build a life in a ruined city and see nine winters through. A cozy post-apocalyptic life sim by KKIRRI Studio.',
      language: { button: 'LANGUAGE · ENGLISH', title: 'CHOOSE LANGUAGE', help: 'Choose the language used throughout this press kit.', close: 'Close' },
      header: {
        tagline: 'Build a life in a ruined city and see nine winters through. A cozy post-apocalyptic life sim.',
        steam: 'Steam Page', assets: 'Press Assets',
        note: 'The Steam page will go live for Steam Next Fest in October 2026.'
      },
      sections: { description: 'DESCRIPTION', features: 'FEATURES', trailer: 'TRAILER', screenshots: 'SCREENSHOTS', gifs: 'GIFS', brand: 'LOGOS & BRANDING', facts: 'FACTSHEET', history: 'DEVELOPMENT', faq: 'FAQ', contact: 'CONTACT' },
      nav: ['Description', 'Features', 'Trailer', 'Screenshots', 'GIFs', 'Logos & Branding', 'Factsheet', 'Development', 'FAQ', 'Contact'],
      facts: {
        heading: 'FACTSHEET', contents: 'CONTENTS',
        labels: ['Title', 'Developer', 'Genre', 'Platform', 'Price', 'Release', 'Demo', 'Steam Page', 'Languages', 'Difficulty', 'Press Contact'],
        values: ['Nine Winters', 'KKIRRI Studio (solo developer)', 'Cozy Post-Apocalyptic Life Sim', 'Windows (Steam)', '$11.99', 'December 2026', 'Steam Next Fest, October 2026', '', 'Korean, English, Japanese (interface + subtitles; more languages planned)', 'Cozy / Survival / Deep Freeze (3 tiers) + Endless / Wallpaper Mode', ''],
        steamNote: '(page goes live for Steam Next Fest in October 2026)'
      },
      description: {
        lead: 'Build a life in a ruined city and see nine winters through. A cozy post-apocalyptic life sim.',
        body: 'Search 19 ruined districts for anything useful, then settle into one of 16 shelters and make it your own. Each winter grows colder, opening new routes and revealing more of what happened to the city. At the end of the ninth winter, decide where and how to live.'
      },
      features: [
        ['1. A Cozy Game with an Ending', 'The story runs through nine winters. Each year changes the cold and the city, and your choice in the ninth winter determines the ending.'],
        ['2. Sixteen Shelters', 'Choose from a rooftop room, a bunker, a bus, a subway platform, a lighthouse, a ship, and more. Patch the cracks, restore the heat, and furnish an empty space until it feels like home.'],
        ['3. Living Weather', 'Thirty-six tracks follow the weather, the season, and the time of day. Rain wets the walls. Winter frosts the windows. The world inside and outside the shelter shifts with every turn of the seasons.'],
        ['4. Tend to Things at Home', 'Make meals and tea, tend crops, sew a quilt, and repair worn-out belongings. If a stray cat finds your door, feed it and let it stay.'],
        ['5. Records Left on the Radio', 'Tune in to broadcasts, broken calls, and old recordings. The farther you travel, the more you learn about why the city fell.'],
        ['6. Explore Nineteen Areas', 'Weigh the risk, choose your tools, and make each trip yourself. When snow blocks a road, spend supplies and Energy to clear it or take the long way around.'],
        ['7. Play at Your Own Pace', 'Cozy, Survival, and Deep Freeze adjust the pressure from cold and scarce supplies. Endless Mode keeps the household going, while Wallpaper Mode removes resource worries.'],
        ['8. Keep It on Your Desktop', 'Turn on Auto Progress and watch the days pass, or keep a finished shelter on your desktop as a widget.']
      ],
      trailer: { placeholder: 'TRAILER EMBED', note: 'The trailer will be embedded here once the public URL is ready.' },
      screenshots: {
        items: [
          ['Container Shelter', 'Container shelter with the game HUD.'], ['Snowfield Lodge', 'Snowfield lodge shelter with the game HUD.'],
          ['Penthouse', 'Penthouse shelter with the game HUD.'], ['Greenhouse Shelter', 'Greenhouse shelter with the game HUD.'],
          ['Graphics Settings', 'Graphics settings with the Display section shown first.'], ['Crafting PDA', 'Crafting screen open on the handheld terminal.'],
          ['Exploration — Fish Market', 'Exploration stage set in a winter fish market.'], ['City Observation Map', 'Frozen city map displayed on the observation terminal.']
        ],
        note: '1920×1080 PNG · Select an image to open the original. Free to use in articles and videos without separate permission.'
      },
      gifs: {
        items: [
          ['East District at Sunset', 'East District at sunset.'], ['24-Hour Timelapse', 'A full day passing over the bridge house.'],
          ['Rain on the Rooftop', 'Rain pooling around the rooftop shelter.'], ['Lodge Blizzard', 'A blizzard passing over the ski lodge.'],
          ['Lighthouse at Night', 'The lighthouse beam turning at night.'], ['Cat by the Stove', 'A cat asleep in front of the lit stove.'],
          ['Petting & Food Bowl', 'Petting the cat beside its food bowl.'], ['Seasonal Water Levels', 'Harbor water levels rising with the seasons and weather.']
        ],
        note: '1280×720 · 15 fps · 6-second loop · Captured in the live game renderer. Select an image to open the original.'
      },
      brand: {
        labels: ['Wordmark', 'Logo', 'Emblem', 'Main Capsule', 'Header Capsule', 'Library Capsule'],
        alts: ['Nine Winters wordmark on a transparent background.', 'Nine Winters logo on a transparent background.', 'Nine Winters emblem on a transparent background.', 'Nine Winters main capsule image.', 'Nine Winters header capsule image.', 'Nine Winters vertical library capsule image.'],
        note: 'Place the wordmark and logo on a dark background. Do not change their colors or proportions.'
      },
      history: [
        'Nine Winters is a solo-developed game by KKIRRI Studio. The developer is responsible for the game’s design, direction, and final review. AI is used in a limited supporting role for some modeling work, coding, machine translation, and song production.',
        'Every scene is rendered in the game with 3D voxels. Screenshots and trailer footage all come from the game itself.',
        'The current internal build includes home-life systems such as cooking, gardening, cleaning, sewing, photography, and caring for a cat, along with the core progression across nine winters. Work through launch is focused on winter expedition details, the late-game story, English and Japanese localization, long-run balance testing, and release preparation. The latest life-sim features will move into the demo after they have been validated in the full game.'
      ],
      faq: [
        ['Q. How much of the game can I play in the demo?', 'The demo lights one shelter and carries you through fifteen days, ending just as the first snow and the season’s first cold snap arrive. Warming soup, mending a wall, and keeping the cat close are all here. At Day 15, the screen holds still. Eight more winters remain.'],
        ['Q. When does Nine Winters release?', 'Nine Winters is scheduled for release in December 2026. The exact date will be announced later. A playable demo will be available during Steam Next Fest in October 2026.'],
        ['Q. What platforms will the game be on?', 'Nine Winters will launch on Steam for Windows.'],
        ['Q. Are there plans for DLC or updates?', 'DLC is in development, and free seasonal updates are also planned.'],
        ['Q. Was AI used to make the game?', 'AI was used in a limited supporting role for some modeling work, coding, machine translation, and song production. The developer remains responsible for the game’s design, direction, and final review.'],
        ['Q. What languages are supported?', 'Korean, English, and Japanese will be supported at launch, with interface and subtitles available in all three. More languages are planned after release.']
      ],
      contact: { note: 'Screenshots, GIFs, and logos on this page may be used in articles, videos, and broadcasts without separate permission.' },
      footer: `NINE WINTERS © 2026 KKIRRI Studio · ${EMAIL}`
    },

    ja: {
      metaTitle: 'Nine Winters — プレスキット',
      metaDescription: '崩壊した都市で暮らしを整え、九度の冬を越すコージー・ポストアポカリプス生活シミュレーション。KKIRRI Studioプレスキット。',
      language: { button: '言語 · 日本語', title: '言語を選択', help: 'プレスキット全体で使用する言語を選んでください。', close: '閉じる' },
      header: {
        tagline: '崩壊した都市で暮らしを整え、九度の冬を越すコージー・ポストアポカリプス生活シミュレーション。',
        steam: 'Steamページ', assets: 'プレス素材',
        note: 'Steamページは2026年10月のSteam Next Festに合わせて公開予定です。'
      },
      sections: { description: 'ゲーム紹介', features: '特徴', trailer: 'トレーラー', screenshots: 'スクリーンショット', gifs: 'GIF', brand: 'ロゴ・ブランド素材', facts: '基本情報', history: '開発について', faq: 'FAQ', contact: 'お問い合わせ' },
      nav: ['ゲーム紹介', '特徴', 'トレーラー', 'スクリーンショット', 'GIF', 'ロゴ・ブランド素材', '基本情報', '開発について', 'FAQ', 'お問い合わせ'],
      facts: {
        heading: '基本情報', contents: '目次',
        labels: ['タイトル', '開発', 'ジャンル', 'プラットフォーム', '価格', '発売予定', '体験版', 'Steamページ', '対応言語', '難易度', 'プレス窓口'],
        values: ['Nine Winters', 'KKIRRI Studio（個人開発）', 'コージー・ポストアポカリプス生活シミュレーション', 'Windows（Steam）', '$11.99', '2026年12月', 'Steam Next Fest（2026年10月）', '', '韓国語・英語・日本語（インターフェース＋字幕、対応言語は今後追加予定）', 'コージー / サバイバル / 極寒（3段階）＋エンドレス / 壁紙モード', ''],
        steamNote: '（2026年10月のSteam Next Festで公開予定）'
      },
      description: {
        lead: '崩壊した都市に自分の居場所を作り、九度の冬を越えていくコージー・ポストアポカリプス生活シミュレーションです。',
        body: '19か所の廃墟を巡って使えそうな物資を持ち帰り、16か所の住居から気に入った場所を選んで自分の家にしていきます。冬が深まるにつれて新たな道が開き、都市が崩壊した理由も見えてきます。九度目の冬の終わりには、これからどこで、どう生きるかを決めます。'
      },
      features: [
        ['1. 終わりのあるコージーゲーム', '物語は九度の冬を通して進みます。年ごとに寒さと都市の姿が変わり、九度目の冬に下す選択によって結末が変化します。'],
        ['2. 16か所の住居', '屋上部屋、バンカー、バス、地下鉄のホーム、灯台、船などから住む場所を選べます。ひびを塞ぎ、暖房と家具を整えれば、冷たく空っぽだった空間が少しずつ家に変わります。'],
        ['3. 生きている天候', '36曲の音楽が天候、季節、時間帯に合わせて流れます。雨が壁を濡らし、冬には窓に霜がつきます。季節が巡るたびに住居の内外の景色が変わります。'],
        ['4. 帰宅したら暮らしを整える', '食事やお茶を用意し、作物を育てます。布を縫って布団を作り、壊れた物も直します。野良猫が訪ねてきたら、餌をあげて一緒に暮らせます。'],
        ['5. ラジオに残された都市の記録', '周波数を合わせると、放送や途切れた通信、古い録音が聞こえます。遠くまで探索するほど、都市が滅びた理由が少しずつ明らかになります。'],
        ['6. 19か所を自分の足で探索', '危険度と必要な道具を確かめてから廃墟へ向かいます。雪で道が塞がれたら、物資と体力を使って道を開くか、遠回りしなければなりません。'],
        ['7. 自分に合ったペース', 'コージー、サバイバル、極寒で、寒さと資源不足の厳しさを調整できます。エンドレスモードでは暮らしを続け、壁紙モードでは資源を気にせず住居を飾れます。'],
        ['8. デスクトップで眺める', '自動進行をオンにして日々の流れを見守ったり、完成した住居をデスクトップウィジェットとして表示したりできます。']
      ],
      trailer: { placeholder: 'トレーラー埋め込みエリア', note: '公開URLが決まり次第、こちらにトレーラーを掲載します。' },
      screenshots: {
        items: [
          ['コンテナの住居', 'コンテナの住居とゲームHUD。'], ['雪原のロッジ', '雪原のロッジとゲームHUD。'],
          ['ペントハウス', 'ペントハウスの住居とゲームHUD。'], ['温室の住居', '温室の住居とゲームHUD。'],
          ['グラフィック設定', 'ディスプレイ項目が先頭に表示されたグラフィック設定画面。'], ['クラフトPDA', '携帯端末に表示されたクラフト画面。'],
          ['探索 — 魚市場', '冬の魚市場を探索するステージ。'], ['都市観測マップ', '観測端末に表示された凍結都市の地図。']
        ],
        note: '1920×1080 PNG · 画像を選ぶと原寸データが開きます。記事や動画では個別の許可なくご利用いただけます。'
      },
      gifs: {
        items: [
          ['東部エリア・夕暮れ', '夕暮れ時の東部エリア。'], ['24時間タイムラプス', '橋の上の家で一日が流れる様子。'],
          ['屋上に降る雨', '屋上の住居に雨がたまる様子。'], ['ロッジの吹雪', 'スキーロッジを吹雪が通り過ぎる様子。'],
          ['灯台の夜', '夜の灯台で光が回る様子。'], ['ストーブそばの猫', '火のついたストーブの前で眠る猫。'],
          ['撫でる・フードボウル', 'フードボウルのそばで猫を撫でる様子。'], ['季節による水位の変化', '季節と天候に応じて港の水位が上がる様子。']
        ],
        note: '1280×720 · 15fps · 6秒ループ · 実際のゲームレンダラーで撮影。選択すると原寸データが開きます。'
      },
      brand: {
        labels: ['ワードマーク', 'ロゴ', 'エンブレム', 'メインカプセル', 'ヘッダーカプセル', 'ライブラリカプセル'],
        alts: ['背景が透明なNine Wintersのワードマーク。', '背景が透明なNine Wintersのロゴ。', '背景が透明なNine Wintersのエンブレム。', 'Nine Wintersのメインカプセル画像。', 'Nine Wintersのヘッダーカプセル画像。', 'Nine Wintersの縦型ライブラリカプセル画像。'],
        note: 'ワードマークとロゴは暗い背景の上に配置し、色や縦横比を変更しないでください。'
      },
      history: [
        'Nine Wintersは、KKIRRI Studioが個人で開発しているゲームです。企画、方向性、最終確認は開発者本人が担当します。AIは一部のモデリング補助、コーディング、機械翻訳、楽曲制作に限定して使用しています。',
        'すべてのシーンは実際のゲーム内で3Dボクセルとして描画されています。スクリーンショットとトレーラー映像も、すべて実際のゲーム画面です。',
        '現在の内部ビルドには、料理、栽培、掃除、裁縫、写真、猫の世話といった暮らしの要素と、九度の冬をつなぐ基本進行が実装されています。発売までは、冬の探索ルートの細部、終盤の物語、英語・日本語ローカライズ、長期バランステスト、配信準備を整えていきます。最新の生活要素は本編で検証した後、デモ版へ反映する予定です。'
      ],
      faq: [
        ['Q. 体験版ではどこまで遊べますか？', '体験版では一つの住居に火をともし、初雪と最初の寒波を迎えるまでの15日間を過ごします。スープを温め、壁を直し、猫と暮らすNine Wintersの一日を体験できます。Day 15で画面は静かに止まり、残り八度の冬を残して体験版は終了します。'],
        ['Q. 発売時期はいつですか？', '2026年12月発売予定です。正式な発売日は後日発表します。2026年10月のSteam Next Festでは、先行して体験版を公開します。'],
        ['Q. 対応プラットフォームは？', 'Steam（Windows）向けに発売します。'],
        ['Q. DLCやアップデートの予定はありますか？', 'DLCを開発中です。季節に合わせた無料アップデートも予定しています。'],
        ['Q. ゲーム制作にAIを使用していますか？', '一部のモデリング補助、コーディング、機械翻訳、楽曲制作にAIを使用しました。ゲームの企画、方向性、最終確認は開発者本人が担当します。'],
        ['Q. 対応言語は？', '発売時には韓国語、英語、日本語に対応します。いずれもインターフェースと字幕を利用できます。発売後は、ほかの言語も順次追加する予定です。']
      ],
      contact: { note: 'このページのスクリーンショット、GIF、ロゴは、記事・動画・放送で個別の許可なくご利用いただけます。' },
      footer: `NINE WINTERS © 2026 KKIRRI Studio · ${EMAIL}`
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function setText(selector, value, root = document) {
    const element = $(selector, root);
    if (element) element.textContent = value;
  }

  function setFactTable(table, facts) {
    if (!table) return;
    const rows = $$('tr', table);
    rows.forEach((row, index) => {
      const th = $('th', row);
      const td = $('td', row);
      if (!th || !td || !facts.labels[index]) return;
      th.textContent = facts.labels[index];
      td.textContent = facts.values[index] || '';
    });
    if (rows[7]) {
      $('td', rows[7]).innerHTML = `<a href="${STEAM_URL}" target="_blank" rel="noopener">${STEAM_LABEL}</a> ${facts.steamNote}`;
    }
    if (rows[10]) {
      $('td', rows[10]).innerHTML = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
    }
  }

  function setAsideFacts(facts) {
    const card = $('aside .card');
    if (!card) return;
    setText('h2', facts.heading, card);
    const labels = $$('dt', card);
    const values = $$('dd', card);
    const indexes = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
    indexes.forEach((factIndex, index) => {
      if (labels[index]) labels[index].textContent = facts.labels[factIndex];
      if (values[index]) values[index].textContent = facts.values[factIndex] || '';
    });
    if (values[9]) values[9].innerHTML = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
  }

  function applyLanguage(language) {
    const lang = COPY[language] ? language : 'en';
    const copy = COPY[lang];
    document.documentElement.lang = lang;
    document.title = copy.metaTitle;
    const descriptionMeta = $('meta[name="description"]');
    const ogDescription = $('meta[property="og:description"]');
    const ogTitle = $('meta[property="og:title"]');
    if (descriptionMeta) descriptionMeta.content = copy.metaDescription;
    if (ogDescription) ogDescription.content = copy.metaDescription;
    if (ogTitle) ogTitle.content = copy.metaTitle;

    setText('#languageOpen', copy.language.button);
    setText('#languageTitle', copy.language.title);
    setText('#languageHelp', copy.language.help);
    const closeButton = $('#languageClose');
    if (closeButton) closeButton.setAttribute('aria-label', copy.language.close);
    $$('.language-option').forEach((option) => option.setAttribute('aria-pressed', String(option.dataset.language === lang)));

    setText('.tagline', copy.header.tagline);
    setText('.cta .primary', copy.header.steam);
    setText('.cta .btn:not(.primary)', copy.header.assets);
    setText('.cta-note', copy.header.note);

    setAsideFacts(copy.facts);
    setText('nav.card h2', copy.facts.contents);
    $$('nav.card a').forEach((link, index) => { if (copy.nav[index]) link.textContent = copy.nav[index]; });

    const sectionIds = ['description', 'features', 'trailer', 'screenshots', 'gifs', 'brand', 'facts', 'history', 'faq', 'contact'];
    sectionIds.forEach((id) => setText(`#${id} > h2`, copy.sections[id]));

    const descriptionParagraphs = $$('#description > p');
    if (descriptionParagraphs[0]) descriptionParagraphs[0].textContent = copy.description.lead;
    if (descriptionParagraphs[1]) descriptionParagraphs[1].textContent = copy.description.body;

    const featureItems = $$('#features > ul.features > li');
    copy.features.forEach(([title, body], index) => {
      if (featureItems[index]) featureItems[index].innerHTML = `<b>${title}</b>${body}`;
    });

    setText('#trailer .shot', copy.trailer.placeholder);
    setText('#trailer .dl-note', copy.trailer.note);

    const screenshotTiles = $$('#screenshots figure.tile');
    copy.screenshots.items.forEach(([caption, alt], index) => {
      const tile = screenshotTiles[index];
      if (!tile) return;
      const image = $('img', tile);
      const captionNode = $('figcaption span:first-child', tile);
      if (image) image.alt = alt;
      if (captionNode) captionNode.textContent = caption;
    });
    setText('#screenshots .dl-note', copy.screenshots.note);

    const gifTiles = $$('#gifs figure.tile');
    copy.gifs.items.forEach(([caption, alt], index) => {
      const tile = gifTiles[index];
      if (!tile) return;
      const image = $('img', tile);
      const captionNode = $('figcaption span:first-child', tile);
      if (image) image.alt = alt;
      if (captionNode) captionNode.textContent = caption;
    });
    setText('#gifs .dl-note', copy.gifs.note);

    const brandTiles = $$('#brand .brand-tile');
    brandTiles.forEach((tile, index) => {
      const image = $('img', tile);
      const label = $('.meta b', tile);
      if (image && copy.brand.alts[index]) image.alt = copy.brand.alts[index];
      if (label && copy.brand.labels[index]) label.textContent = copy.brand.labels[index];
    });
    setText('#brand > .dl-note', copy.brand.note);

    setFactTable($('#facts > .scroll-x table.facts'), copy.facts);

    const historyParagraphs = $$('#history > p');
    copy.history.forEach((paragraph, index) => {
      if (historyParagraphs[index]) historyParagraphs[index].textContent = paragraph;
    });

    const faqItems = $$('#faq > .qa');
    copy.faq.forEach(([question, answer], index) => {
      const item = faqItems[index];
      if (!item) return;
      setText('.q', question, item);
      setText('.a', answer, item);
    });

    const contactRows = $$('#contact table.facts tr');
    if (contactRows[0]) {
      setText('th', copy.facts.labels[10], contactRows[0]);
      $('td', contactRows[0]).innerHTML = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
    }
    if (contactRows[1]) {
      setText('th', copy.facts.labels[1], contactRows[1]);
      setText('td', copy.facts.values[1], contactRows[1]);
    }
    if (contactRows[2]) {
      setText('th', copy.facts.labels[7], contactRows[2]);
      $('td', contactRows[2]).innerHTML = `<a href="${STEAM_URL}" target="_blank" rel="noopener">${STEAM_LABEL}</a> ${copy.facts.steamNote}`;
    }
    setText('#contact .dl-note', copy.contact.note);
    setText('footer', copy.footer);

    try { localStorage.setItem('nine-winters-presskit-language', lang); } catch (_) { /* file:// may block storage */ }
    window.dispatchEvent(new CustomEvent('presskit-language-change', { detail: { language: lang } }));
  }

  function preferredLanguage() {
    try {
      const saved = localStorage.getItem('nine-winters-presskit-language');
      if (COPY[saved]) return saved;
    } catch (_) { /* file:// may block storage */ }
    const primary = navigator.languages && navigator.languages.length ? navigator.languages[0] : (navigator.language || 'en');
    const code = String(primary).toLowerCase();
    if (code.startsWith('ja')) return 'ja';
    if (code.startsWith('ko')) return 'ko';
    return 'en';
  }

  const modal = $('#languageModal');
  const openButton = $('#languageOpen');
  const closeButton = $('#languageClose');

  function openModal() {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    const selected = $('.language-option[aria-pressed="true"]', modal) || $('.language-option', modal);
    if (selected) selected.focus();
  }

  function closeModal({ restoreFocus = true } = {}) {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (restoreFocus && openButton) openButton.focus();
  }

  if (openButton) openButton.addEventListener('click', openModal);
  if (closeButton) closeButton.addEventListener('click', () => closeModal());
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
  }
  $$('.language-option').forEach((option) => {
    option.addEventListener('click', () => {
      applyLanguage(option.dataset.language);
      closeModal();
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  $$('details.en').forEach((details) => { details.hidden = true; });
  applyLanguage(preferredLanguage());
  window.presskitI18n = { applyLanguage, languages: Object.keys(COPY) };
})();
