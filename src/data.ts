export type Photo = {
  src: string
  alt: string
}

export type CaseStudy = {
  id: string
  title: string
  summary: string
  company: string
  period: string
  role: string
  tech: string[]
  image: Photo
  flow: string[]
  problem: string[]
  options: string[]
  action: string[]
  result: string[]
}

export type Project = {
  name: string
  period: string
  desc: string
  points: string[]
  tech: string[]
  caseId?: string
}

export type Career = {
  company: string
  position: string
  period: string
  duration: string
  note?: string
  projects: Project[]
}

export const profile = {
  name: '유성환',
  title: '풀스택 개발자',
  tagline: '외부 시스템과 맞물리는 구간을 안정적으로 만드는 일을 해왔습니다.',
  email: 'chuuro@naver.com',
  github: 'https://github.com/chuuro',
  resumePdf: '/resume.pdf',
  updated: '2026. 10',
  photo: {
    src: '/photos/profile.jpg?v=2',
    alt: '계곡가에서 선글라스를 쓰고 뒤를 돌아본 상반신. 흰 셔츠.',
  } satisfies Photo,
}

export const stats = [
  { value: '7년차', label: '개발 경력' },
  { value: '5개', label: '방송·금융·항공·유통·공공' },
  { value: '9개', label: '참여 프로젝트' },
  { value: '3,000+', label: '현재 운영 중인 콘텐츠' },
]

export const intro = [
  '방송·금융·항공·유통·공공 분야에서 Java/Spring 백엔드와 Vue·React 프론트엔드를 함께 개발해 왔습니다. 항공사 API, 공인전자문서 중계, ERP처럼 제 코드 밖에 있는 시스템과 맞물리는 구간을 주로 맡았고, 그 사이에서 생기는 지연과 장애를 구조로 흡수하는 데 시간을 많이 썼습니다.',
  '지금은 한국데이터산업진흥원의 공공 데이터 포털에서 경진대회·데이터레시피·맞춤지원 사업 기능을 책임지고 있습니다. 사업 담당자와 요구사항을 정리하는 일부터 개발, 배포, 이용자 문의 전화 응대까지 하다 보니, 화면 하나를 고치더라도 문의가 어디서 들어올지 먼저 생각하게 됐습니다.',
  '운영 중인 서비스를 고칠 때는 되돌릴 방법부터 만들어 두는 편입니다. DB 작업에는 백업과 원복 스크립트를 같이 남기고, 다음 사람이 이어받을 수 있도록 문서로 정리합니다.',
]

export const keywords = [
  {
    title: '외부 시스템과 맞물리는 구간',
    body: '항공사 API, 공인전자문서 중계, ERP처럼 제어할 수 없는 시스템의 지연과 장애가 서비스 전체로 번지지 않게 설계했습니다.',
    tags: ['병렬 호출', '재시도', '중복 방지'],
  },
  {
    title: '운영 중인 서비스를 멈추지 않고',
    body: '기존 데이터와 화면은 그대로 두고 필요한 부분만 확장하는 방식을 먼저 검토하고, 원복 경로를 같이 만듭니다.',
    tags: ['확장 설계', '데이터 이관', '롤백'],
  },
  {
    title: '개발부터 문의 응대까지',
    body: '현재 프로젝트에서는 사업 기능을 책임지고 요구사항 정리, 개발, 배포, 이용자 CS까지 직접 처리하고 있습니다.',
    tags: ['개발·운영', 'CS', '풀스택'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'public-portal',
    title: '공공 데이터 포털 사업 기능 전담',
    summary: '해마다 양식이 바뀌는 사업을 기존 콘텐츠 3,000여 건에 영향 없이 열고, 개발부터 문의 응대까지 맡은 프로젝트',
    company: '도로시 · AI데이터 문제해결은행',
    period: '2026. 06 – 2026. 12',
    role: '사업 기능 개발·운영, 이용자 CS',
    tech: ['Java 17', 'Spring Boot', 'Spring Cloud', 'JPA', 'React', 'TypeScript', 'MySQL', 'Docker', 'GitLab', 'Jenkins'],
    image: {
      src: '/photos/kdata.jpg',
      alt: 'AI·데이터 문제해결은행 홈. 데이터 레시피, 워크 스튜디오, 활용사례가 보이는 공개 포털 화면.',
    },
    flow: ['사업 공고', '참가 신청', '레시피 작성', '최종 제출 검증', '관리자 검토'],
    problem: [
      '경진대회·맞춤지원 등 사업마다 신청 항목이 해마다 달라짐',
      'AI레시피·활용사례 등 3,000여 건의 콘텐츠가 같은 구조를 쓰고 있고, 검색·추천 화면도 이 구조에 의존',
      '사업 관련 문의 전화와 메일을 개발자가 직접 받아야 하는 운영 구조',
    ],
    options: [
      '기존 구조에 항목 추가: 검색·추천 쿼리까지 수정 범위가 넓어지고 문제가 생기면 되돌리기 어려움',
      '사업별로 구조를 새로 만들기: 화면과 API가 사업 수만큼 늘어남',
      '같은 키를 쓰는 확장 구조 하나만 추가: 기존 코드를 건드리지 않고, 확장 데이터가 있을 때만 신규 양식으로 표시. 이 방식을 선택',
    ],
    action: [
      '확장 구조와 상세 화면 분기를 만들고, 다음 연도 사업에서도 쓸 수 있게 테이블 정의서 양식을 남김',
      '협력사(KMAC)에서 받은 엑셀 원본을 검증·백업·반영·원복 단계로 처리하는 이관 프로그램 개발',
      'Gateway·인증·회원·게시판 등 6개 마이크로서비스의 STG 배포를 GitLab–Jenkins 파이프라인으로 전환',
      '자주 들어오는 문의를 유형별로 정리해 화면 안내 문구와 관리자 기능에 반영',
    ],
    result: [
      '데이터 이관 없이 신규 사업 오픈, 문제 시 확장 구조 하나만 지우면 원복',
      'AI레시피·활용사례 1,400여 건 재작업 없이 반영',
      'STG 배포 시간 30분 → 5분',
    ],
  },
  {
    id: 'mbc-nps',
    title: '방송 원본 영상 업로드·변환 파이프라인',
    summary: '끊기면 처음부터 다시 올려야 했던 대용량 방송 원본 업로드와, 몇 초마다 상태를 묻던 변환 진행률 구조를 바꾼 프로젝트',
    company: '제머나이소프트 · MBC 차세대 제작 NPS',
    period: '2024. 07 – 2025. 09',
    role: '업로드·변환 화면 및 서버 개발',
    tech: ['PHP Laravel', 'Vue.js 3', 'TypeScript', 'Inertia.js', 'Redis Queue', 'SSE', 'Tus', 'Oracle'],
    image: {
      src: '/photos/mbc-nps.jpg?v=2',
      alt: 'MBC NPS 검색 화면. 영상 목록과 미리보기가 격자로 보이는 인제스트 결과.',
    },
    flow: ['브라우저', 'Tus 분할 업로드', '원본 저장', 'Redis 큐', '변환 워커', 'SSE로 진행률 전달'],
    problem: [
      '대용량 원본 파일이 네트워크가 한 번 끊기면 처음부터 다시 업로드됨',
      '화면이 몇 초마다 변환 상태를 조회해 서버 요청이 계속 쌓임',
      '수만 건 인제스트(방송 소재 등록) 목록을 한 번에 그려 화면이 느려짐',
    ],
    options: [
      '업로드 재개를 직접 구현 vs Tus 표준 사용: 재개 규약과 클라이언트 라이브러리가 이미 있는 Tus 선택',
      '진행률 전달에 WebSocket vs SSE: 서버에서 화면으로 가는 단방향 전송이고 끊기면 자동 재연결되는 SSE 선택',
    ],
    action: [
      'Tus 기반 분할 업로드와 이어올리기 적용',
      '변환 작업을 Redis 큐 워커로 분리하고, 진행 상태는 SSE로 서버가 직접 전달',
      '가상 스크롤로 보이는 행만 렌더링',
      '영상 스틸컷 위에 그림과 코멘트를 남기는 제작진 피드백 기능 개발 (Canvas API)',
    ],
    result: ['업로드 성공률 99.9%', '주기적 상태 조회 요청 제거', '목록 화면 메모리 사용량 70% 절감'],
  },
  {
    id: 'hanjin-lcc',
    title: 'LCC 항공권 통합 조회 응답 5초 → 1.5초',
    summary: '가장 느린 항공사에 전체 응답이 묶이던 순차 호출 구조를 병렬 호출과 항공사별 타임아웃으로 바꾼 프로젝트',
    company: '블루컴 · 한진 토파스 LCC 통합 플랫폼',
    period: '2024. 04 – 2024. 05',
    role: '항공사 연동 및 통합 조회 API 개발',
    tech: ['Java', 'Spring Framework', 'CompletableFuture', 'Oracle'],
    image: {
      src: '/photos/hyundai.jpg',
      alt: '현대트레블 인천-도쿄 왕복 조회. 대한항공·제주항공 결과와 함께 항공사직판 배지가 붙은 운임이 같은 목록에 있음.',
    },
    flow: ['조회 요청', '항공사별 어댑터 동시 호출', '타임아웃 넘은 항공사 제외', '공통 운임 모델로 병합', '응답'],
    problem: [
      '여행사 예약 시스템(토파스)에 제주항공·진에어 등 LCC 운임을 GDS(아마데우스)를 거치지 않고 직접 붙여야 함',
      '항공사 API를 순서대로 호출해 가장 느린 항공사 기준으로 전체 응답이 5초까지 늘어남',
      '항공사마다 응답 형식(XML/JSON)과 필드 구성이 다름',
    ],
    options: [
      '조회 결과 캐싱: 운임과 좌석이 자주 바뀌어 적중률이 낮고, 오래된 운임을 보여줄 위험',
      '병렬 호출 + 항공사별 타임아웃: 늦은 항공사만 빼고 먼저 응답할 수 있음. 이 방식을 선택',
    ],
    action: [
      'CompletableFuture로 항공사별 호출을 병렬화하고 전용 스레드풀로 분리',
      '항공사별 타임아웃을 두고, 시간을 넘긴 항공사는 빈 결과와 로그로 처리',
      '항공사별 응답을 공통 운임 모델로 바꾸는 어댑터 구조 설계',
    ],
    result: ['통합 조회 응답 5초 → 1.5초', 'GDS 경유 수수료 절감', '신규 항공사는 어댑터 하나만 추가'],
  },
  {
    id: 'kb-edoc',
    title: '금융 전자문서 발송 안정화',
    summary: '계열사마다 다르게 동작하던 발송 Agent, 업무 시간까지 이어지던 배치, 수작업 재발송을 함께 정리한 프로젝트',
    company: '토피도 · KB 전자문서 시스템',
    period: '2022. 07 – 2023. 11',
    role: '발송 Agent·배치 개발 및 운영',
    tech: ['Java', 'Spring Boot', 'Spring Batch', 'JPA', 'Vue.js 2', 'Oracle', 'Docker'],
    image: {
      src: '/photos/kb-flow.png',
      alt: '전자문서 발송 흐름. 대상 추출, 배치, 공인전자문서 중계, 앱 Push, 실패 건 재시도. 같은 문서는 한 번만 발송.',
    },
    flow: ['발송 대상 추출', '청크 단위 문서 생성', 'KISA 중계 / 앱 Push', '결과 저장', '실패 건 재시도'],
    problem: [
      '손보·캐피탈 등 계열사마다 OS·JDK 버전이 달라 같은 Agent가 다르게 동작',
      '월말 고지 시점 수십만 건을 건별로 처리해 배치가 4시간 걸리고, 실패하면 처음부터 다시 실행',
      '외부 기관(KISA)·Push 서버 장애 때마다 실패 건을 수동으로 찾아 재발송, 이 과정에서 중복 발송 발생',
    ],
    options: [
      '재시도 간격 고정 vs 점점 늘리기: 외부 장애 중에 부하를 더하지 않도록 간격을 늘리는 방식 선택',
      '재시도할 때 이미 보낸 문서가 다시 나가지 않도록 문서 고유키로 중복을 막기로 결정',
    ],
    action: [
      'Agent와 실행 환경을 Docker 이미지로 묶고 계열사별 차이는 설정 파일로 분리',
      'Spring Batch 청크 단위 병렬 처리와 실패 지점 재시작 구조로 변경',
      '건별 발송 상태(대기·성공·실패) 이력 관리, 실패 건 자동 재시도, 최종 실패만 운영자 알림',
    ],
    result: ['신규 계열사 설치 3일 → 반나절', '발송 배치 4시간 → 1시간', '문서 도달률 97% → 99.8%'],
  },
]

export const careers: Career[] = [
  {
    company: '도로시',
    position: '책임 · 프리랜서',
    period: '2026. 06 – 현재',
    duration: '2026. 12 종료 예정',
    note: '한국데이터산업진흥원 공공 데이터 포털',
    projects: [
      {
        name: 'AI데이터 문제해결은행 유지보수 및 추가개발',
        period: '2026. 06 – 2026. 12',
        desc: 'Spring Cloud 기반 MSA 공공 데이터 포털의 사업 기능 개발·운영 전담',
        points: [
          '경진대회·맞춤지원 등 사업 기능을 콘텐츠 3,000여 건 영향 없이 확장, 문의 응대까지 담당',
          '협력사(KMAC) 데이터 1,400여 건 이관 프로그램 개발',
          '6개 마이크로서비스 STG 배포를 GitLab–Jenkins로 전환, 배포 시간 30분 → 5분',
        ],
        tech: ['Java 17', 'Spring Boot', 'Spring Cloud', 'React', 'MySQL', 'Docker', 'Jenkins'],
        caseId: 'public-portal',
      },
    ],
  },
  {
    company: '제머나이소프트',
    position: '과장 · 프리랜서',
    period: '2024. 07 – 2025. 09',
    duration: '1년 3개월',
    projects: [
      {
        name: 'MBC 차세대 제작 NPS',
        period: '2024. 07 – 2025. 09',
        desc: '방송 제작 시스템 차세대 구축 중 영상 업로드·변환 및 제작 협업 화면 개발',
        points: [
          'Tus 분할 업로드와 이어올리기로 업로드 성공률 99.9%',
          'Redis 큐 기반 변환 처리와 SSE 진행률 전달로 주기적 조회 요청 제거',
          '가상 스크롤로 수만 건 목록 메모리 사용량 70% 절감',
        ],
        tech: ['Laravel', 'Vue.js 3', 'TypeScript', 'Redis', 'SSE', 'Tus'],
        caseId: 'mbc-nps',
      },
    ],
  },
  {
    company: '블루컴',
    position: '과장 · 프리랜서',
    period: '2024. 01 – 2024. 05',
    duration: '5개월',
    projects: [
      {
        name: '한진 토파스 LCC 통합 플랫폼',
        period: '2024. 04 – 2024. 05',
        desc: '여행사용 항공 예약 시스템에 국내 LCC 항공권 통합 조회 구축',
        points: ['병렬 호출과 항공사별 타임아웃으로 통합 조회 응답 5초 → 1.5초', '항공사별 응답을 공통 모델로 바꾸는 어댑터 구조 설계'],
        tech: ['Java', 'Spring', 'CompletableFuture', 'Oracle'],
        caseId: 'hanjin-lcc',
      },
      {
        name: 'SKT ifland Admin 고도화',
        period: '2024. 01 – 2024. 03',
        desc: '메타버스 플랫폼 이프랜드의 운영자용 관리자 시스템 고도화',
        points: [
          'Vue 3 공통 컴포넌트로 신규 관리 화면 개발 기간 약 40% 단축',
          '운영자 역할별 메뉴·기능 권한 관리',
          'Jenkins Pipeline 코드화로 배포 시간 20분 → 5분',
        ],
        tech: ['Spring Boot', 'Vue.js 3', 'TypeScript', 'MySQL', 'Jenkins'],
      },
    ],
  },
  {
    company: '토피도',
    position: '대리 · 프리랜서',
    period: '2022. 07 – 2023. 11',
    duration: '1년 5개월',
    projects: [
      {
        name: 'KB 전자문서 시스템 개발 및 유지보수',
        period: '2022. 07 – 2023. 11',
        desc: 'KB 금융 계열사의 안내문·고지서를 공인전자문서로 발송하는 시스템',
        points: [
          '발송 Agent Docker 표준화로 신규 계열사 설치 3일 → 반나절',
          'Spring Batch 전환으로 발송 배치 4시간 → 1시간',
          '자동 재시도와 중복 발송 차단으로 도달률 97% → 99.8%',
        ],
        tech: ['Spring Boot', 'Spring Batch', 'JPA', 'Vue.js 2', 'Oracle', 'Docker'],
        caseId: 'kb-edoc',
      },
    ],
  },
  {
    company: '휘스코앤드비즈파크',
    position: '선임 · 정직원',
    period: '2020. 01 – 2022. 06',
    duration: '2년 6개월',
    note: '대기업 SI 화면·기능 개발로 시작해 2년 차부터 캠페인 발송 시스템 핵심 모듈 담당',
    projects: [
      {
        name: '롯데마트 캠페인 플랫폼',
        period: '2022. 01 – 2022. 06',
        desc: '고객 대상 마케팅 캠페인의 타겟 추출 및 메시지 발송 플랫폼',
        points: ['조건 모듈화와 실행 계획 기반 튜닝으로 타겟 추출 20분 → 3분', '알림톡 실패 건 문자 자동 대체 발송'],
        tech: ['Java', 'Spring', 'MyBatis', 'Oracle'],
      },
      {
        name: '대한항공 · LX판토스 · 두산인프라코어',
        period: '2020. 03 – 2021. 12',
        desc: '원가 관리·물류 분석·ERP 연동 업무 시스템',
        points: [
          '기내식 단가 DB 일원화, 수만 행 엑셀 스트리밍 업로드',
          '물류 원가 웹 리포트로 월 보고서 작성 2일 → 2시간',
          '그룹 SSO·SOAP 기반 ERP 연동',
        ],
        tech: ['Java', 'Spring', 'JSP', 'Oracle', 'SSO', 'SOAP'],
      },
    ],
  },
]

export const competencies = [
  {
    title: '외부 시스템 연동과 장애 대응',
    items: [
      '항공사 API 병렬 호출과 항공사별 타임아웃, 부분 응답 (한진 토파스)',
      '공인전자문서 중계·앱 Push 자동 재시도와 문서 고유키 기반 중복 발송 차단 (KB)',
      '알림톡 실패 시 문자 자동 대체 발송 (롯데마트)',
      '그룹 SSO, SOAP 기반 ERP 인터페이스 (두산인프라코어)',
    ],
  },
  {
    title: '대량 데이터와 배치',
    items: [
      '월말 수십만 건 전자문서 발송 배치 Spring Batch 전환 (KB)',
      '실행 계획 기반 캠페인 타겟 추출 쿼리 튜닝 (롯데마트)',
      '협력사 데이터 1,400여 건 검증·백업·원복 단계를 갖춘 이관 (공공 포털)',
      '수만 행 엑셀 스트리밍 업로드와 행 단위 검증 (대한항공)',
    ],
  },
  {
    title: '운영 중인 서비스 확장',
    items: [
      '기존 콘텐츠 3,000여 건에 영향 없는 확장 구조로 신규 사업 오픈 (공공 포털)',
      '신규 항공사를 어댑터 하나로 붙이는 구조 (한진 토파스)',
      '관리 화면 공통 컴포넌트와 역할별 권한 관리 (SKT ifland)',
    ],
  },
  {
    title: '배포와 실행 환경',
    items: [
      '6개 마이크로서비스 GitLab–Jenkins 배포 파이프라인, 헬스체크·롤백 (공공 포털)',
      'Jenkins Pipeline(Groovy) 코드화 (SKT ifland)',
      '계열사별 발송 Agent Docker 이미지 표준화 (KB)',
    ],
  },
]

export const skills = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Batch', 'JPA', 'QueryDSL', 'MyBatis', 'PHP Laravel'] },
  { group: 'Frontend', items: ['React', 'Vue.js 3', 'TypeScript', 'Inertia.js', 'Canvas API'] },
  { group: 'Database', items: ['Oracle', 'MySQL', 'Redis'] },
  { group: 'DevOps', items: ['Docker', 'Jenkins', 'GitLab', 'Linux'] },
  { group: '연동', items: ['SSE', 'Tus', 'SOAP', 'SSO', 'KISA 공인전자문서'] },
]

export const workStyle = [
  {
    title: '되돌릴 수 있게 작업합니다',
    body: '운영 DB를 건드리는 작업에는 사전 점검, 백업, 원복 스크립트를 함께 만듭니다. 공공 포털의 사업 테이블 추가, 관리자 메뉴 복구, 협력사 데이터 이관 모두 같은 순서로 진행했습니다.',
  },
  {
    title: '다음 사람이 이어받을 수 있게 남깁니다',
    body: '로컬 MSA 개발 환경과 Redis 클러스터 구성, 개발 PC 설치 가이드, 연도별로 재사용할 테이블 정의서 양식을 문서로 남겼습니다.',
  },
  {
    title: '문의가 오면 원인까지 확인합니다',
    body: '이용자 문의는 직접 재현해 보고 화면 문구로 풀 문제인지 코드를 고칠 문제인지 나눠 처리합니다. 모의해킹과 서버 취약점 점검 결과도 조치 후 증적까지 정리해 전달했습니다.',
  },
]

export const education = [
  { when: '2021. 06', what: 'SQLD (SQL 개발자)', where: '한국데이터산업진흥원' },
  { when: '2016', what: '안양대학교 졸업', where: '' },
]
