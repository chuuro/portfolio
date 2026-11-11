export type Photo = {
  src: string
  alt: string
  /** crop은 16:9로 채우고, natural은 원본 비율, portrait는 세로 화면 */
  fit?: 'crop' | 'natural' | 'portrait'
  /** portrait를 가로 사진 옆에 둘지, 아래에 둘지 */
  layout?: 'beside' | 'below'
}

export type CaseStudy = {
  id: string
  title: string
  summary: string
  company: string
  period: string
  role: string
  tech: string[]
  images: Photo[]
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
  image?: Photo
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
  updated: '2026. 11',
  photo: {
    src: '/photos/profile.jpg?v=3',
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
  '현재는 한국데이터산업진흥원 공공 데이터 포털의 개발과 이용자 CS를 리드하고 있습니다. 화면 하나를 고치더라도 문의가 어디서 들어올지 먼저 생각하게 됐습니다.',
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
    body: '현재는 공공 데이터 포털의 개발과 이용자 CS를 리드하고 있습니다.',
    tags: ['개발·운영', 'CS', '풀스택'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'public-portal',
    title: '공공 데이터 포털 사업 기능 전담',
    summary: '해마다 바뀌는 참가 신청은 그해 화면으로 나누고, 이미 있는 콘텐츠 3,000여 건의 목록과 검색은 그대로 둔 프로젝트',
    company: '도로시 · AI데이터 문제해결은행',
    period: '2026. 06 – 2026. 12',
    role: '개발과 이용자 CS',
    tech: ['Java 17', 'Spring Boot', 'Spring Cloud', 'JPA', 'React', 'TypeScript', 'MySQL', 'Docker', 'GitLab', 'Jenkins'],
    images: [
      {
        src: '/photos/portal-home.jpg',
        alt: 'AI·데이터 문제해결은행 홈. 데이터 레시피, 워크 스튜디오, AX전문가 지원, 공유 인사이트가 한 화면에 있음.',
        fit: 'crop',
      },
      {
        src: '/photos/portal-poster.jpg',
        alt: '2026 데이터+AI 혁신 챌린지 통합경진대회 데이터 문제해결 부문 공고.',
        fit: 'portrait',
        layout: 'beside',
      },
    ],
    flow: ['사업 공고', '참가 신청', '레시피 작성', '최종 제출 검증', '관리자 검토'],
    problem: [
      '경진대회·맞춤지원은 해마다 참가 신청 항목이 바뀜',
      '레시피·활용사례 3,000여 건의 목록과 검색은 그대로 둬야 함',
      '협력사(KMAC) 엑셀과 DB의 코드·일련번호가 달라 손으로 고치다 빠지는 건이 반복됨',
    ],
    options: [
      '목록과 검색까지 그해 양식으로 바꾸기: 3,000여 건과 검색을 같이 고쳐야 함',
      '참가 신청·상세 화면만 그해 양식으로 나누기: 목록과 검색은 그대로 둠. 이 방식을 선택',
    ],
    action: [
      '이미 있는 목록과 검색은 그대로 두고, 참가 신청·상세 화면만 그해 양식으로 나눠 운영',
      '검증, 백업, 반영, 원복 순서로 이관 프로그램을 만들어 1,400여 건을 반영',
      'Gateway, 인증, 회원, 게시판 쪽 6개 서비스 배포를 GitLab과 Jenkins로 맞추고, 문제 있으면 이전 이미지로 되돌리게 함',
    ],
    result: [
      '참가 신청·상세만 그해 양식으로 운영',
      'KMAC 데이터 1,400여 건 반영',
      'STG 배포 30분 → 5분',
    ],
  },
  {
    id: 'mbc-nps',
    title: '방송 원본 영상 업로드·변환 파이프라인',
    summary: '중간에 끊기면 처음부터 다시 올리던 대용량 원본을 이어서 올리게 하고, 변환 진행률은 서버가 보내게 바꾼 프로젝트',
    company: '제머나이소프트 · MBC 차세대 제작 NPS',
    period: '2024. 07 – 2025. 09',
    role: '업로드·변환 화면 및 서버 개발',
    tech: ['PHP Laravel', 'Vue.js 3', 'TypeScript', 'Redis', 'Tus', 'Oracle'],
    images: [
      {
        src: '/photos/mbc-nps.jpg?v=4',
        alt: 'MBC NPS 미디어 검색. 보도영상 미리보기가 격자로 보임.',
        fit: 'crop',
      },
      {
        src: '/photos/mbc-detail.jpg',
        alt: 'NPS 영상을 편집기에서 연 상세 화면.',
        fit: 'natural',
      },
    ],
    flow: ['브라우저', 'Tus 분할 업로드', '원본 저장', 'Redis 큐', '변환', '진행률 전달'],
    problem: [
      '기존 시스템에서는 대용량 원본이 중간에 끊기면 처음부터 다시 올려야 했음',
      '화면이 몇 초마다 변환 상태를 조회해서 요청이 쌓임',
      '등록된 인제스트가 수만 건이라 목록을 한 번에 그리면 화면이 버거움',
    ],
    options: [
      '끊기면 파일 전체를 다시 올리기: 원본이 클수록 실패가 반복됨',
      'Tus로 나눠 올리고 끊긴 지점부터 이어 올리기. 이 방식을 선택',
    ],
    action: [
      'Tus로 나눠 올리고 끊긴 지점부터 이어 올리게 함',
      '변환은 Redis 큐로 빼고, 진행률은 화면이 묻기 전에 서버가 보내게 변경',
      '보이는 줄만 그리게 함',
      '수정 요청이 메신저와 메일로 흩어져 있어, 영상 장면에 그림과 글을 남기게 함',
    ],
    result: ['업로드 성공률 99.9%', '변환 상태 반복 조회 제거', '목록 메모리 사용 70% 감소'],
  },
  {
    id: 'hanjin-lcc',
    title: 'LCC 항공권 통합 조회 응답 5초 → 1.5초',
    summary: '항공사를 하나씩 기다리던 조회를 같이 호출하게 바꿔, 늦게 오는 항공사만 빼고 먼저 내려준 프로젝트',
    company: '블루컴 · 한진 토파스 LCC 통합 플랫폼',
    period: '2024. 04 – 2024. 05',
    role: '항공사 연동 및 통합 조회 API 개발',
    tech: ['Java', 'Spring Framework', 'Oracle'],
    images: [
      {
        src: '/photos/hyundai.jpg?v=4',
        alt: '현대트레블 인천-도쿄 왕복 조회. 제주항공 운임과 항공사직판 배지가 같은 목록에 있음.',
        fit: 'crop',
      },
    ],
    flow: ['조회 요청', '항공사 API 동시 호출', '늦은 항공사만 제외', '같은 항목으로 맞춤', '응답'],
    problem: [
      '국내 LCC(제주항공, 진에어, 티웨이 등)를 아마데우스를 거치지 않고 항공사 API로 붙여야 함',
      '항공사를 하나씩 기다리다 보니 제일 느린 곳 기준으로 5초까지 걸림',
      '응답이 XML인 곳과 JSON인 곳이 있음',
    ],
    options: [
      '항공사를 순서대로 기다린 뒤 한 번에 내려주기: 제일 느린 곳이 전체를 붙잡음',
      'CompletableFuture로 같이 호출하고, 늦게 오는 항공사는 그 건만 빼서 먼저 내려주기. 이 방식을 선택',
    ],
    action: [
      'CompletableFuture로 같이 호출하고, 늦게 오는 항공사는 그 건만 빼서 먼저 내려줌',
      '응답이 XML인 곳과 JSON인 곳이 있어서, 화면에는 같은 항목으로 보이게 맞춤',
    ],
    result: ['응답 5초 → 1.5초', '국내 LCC는 항공사 API로 바로 연동'],
  },
  {
    id: 'kb-edoc',
    title: '금융 전자문서 발송 안정화',
    summary: '계열사마다 다르던 발송 Agent와, 실패하면 전체를 다시 돌리던 월말 배치, 중복이 나던 재발송을 정리한 프로젝트',
    company: '토피도 · KB 전자문서 시스템',
    period: '2022. 07 – 2023. 11',
    role: '발송 Agent·배치 개발 및 운영',
    tech: ['Java', 'Spring Boot', 'Spring Batch', 'JPA', 'Vue.js 2', 'Oracle', 'Docker'],
    images: [
      {
        src: '/photos/kb-structure.png',
        alt: '전자문서 유통 구조. 기관 연계 에이전트, 중계시스템, KISA 유통 허브, 이용자 모바일.',
        fit: 'crop',
      },
      {
        src: '/photos/kb-app.jpg',
        alt: '공공알리미 받은 문서 화면. KB증권과 KB국민카드 전자문서가 모여 있음.',
        fit: 'portrait',
        layout: 'below',
      },
    ],
    flow: ['발송 대상', '일정 건수마다 커밋', 'KISA 중계 / 앱 Push', '발송 결과 저장', '실패 건만 재발송'],
    problem: [
      '계열사마다 OS·JDK가 달라 같은 Agent가 다르게 동작',
      '고지 때 수십만 건을 한 건씩 보내 배치가 4시간 걸리고, 중간에 실패하면 이미 처리한 건까지 포함해 전체를 다시 실행해야 함',
      'KISA 중계나 앱 Push에 장애가 나면 운영자가 실패 건을 찾아 다시 보냈고, 이미 도달한 문서가 또 나감',
    ],
    options: [
      '계열사마다 이미지를 다시 빌드하기: 접속 정보만 달라도 설치가 길어짐',
      '이미지는 하나로 두고 접속 정보는 설정 파일로 빼기. 이 방식을 선택',
    ],
    action: [
      '이미지로 묶고 계열사별 접속 정보는 설정 파일로 분리. 이미지를 다시 빌드하지 않고 설정만 교체',
      '일정 건수마다 커밋하고, 마지막에 커밋된 지점부터 다시 돌리게 변경',
      '건마다 발송 결과를 남기고, 성공한 건은 제외한 뒤 실패 건만 다시 보냄',
    ],
    result: ['새 계열사 설치 3일 → 반나절', '발송 배치 4시간 → 1시간', '도달률 97% → 99.8%'],
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
          '레시피·활용사례 3,000여 건의 목록·검색은 그대로 두고, 참가 신청·상세만 그해 양식으로 운영',
          'KMAC 엑셀 이관을 검증, 백업, 반영, 원복 순서로 만들어 1,400여 건 반영',
          '6개 서비스 STG 배포를 GitLab·Jenkins로 맞추고, 배포 30분 → 5분',
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
          'Tus로 나눠 올리고 끊긴 지점부터 이어 올려 업로드 성공률 99.9%',
          '변환은 Redis 큐로 빼고, 진행률은 서버가 먼저 보내게 변경',
          '인제스트 목록은 보이는 줄만 그려 메모리 사용 70% 감소',
        ],
        tech: ['Laravel', 'Vue.js 3', 'TypeScript', 'Redis', 'Tus'],
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
        points: [
          'CompletableFuture로 같이 호출하고, 늦은 항공사만 빼서 응답 5초 → 1.5초',
          '국내 LCC(제주항공, 진에어, 티웨이 등)는 항공사 API로 바로 연동',
        ],
        tech: ['Java', 'Spring', 'Oracle'],
        caseId: 'hanjin-lcc',
      },
      {
        name: 'SKT ifland Admin 고도화',
        period: '2024. 01 – 2024. 03',
        desc: '메타버스 플랫폼 이프랜드의 운영자용 관리자 시스템 고도화',
        points: [
          '목록·검색·입력 폼을 Vue 공통 컴포넌트로 빼고, 백엔드 응답 형식도 맞춰 화면 개발 기간 약 40% 단축',
          '권한 없는 메뉴는 숨기고, 주소를 직접 입력해도 서버에서 거절',
          'Jenkins Pipeline으로 빌드부터 배포까지 묶어 20분 → 5분',
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
          '접속 정보는 설정 파일로 빼고, 이미지 재빌드 없이 새 계열사 설치 3일 → 반나절',
          '일정 건수마다 커밋하고 마지막 커밋 지점부터 재시작해 배치 4시간 → 1시간',
          '성공 건은 제외하고 실패 건만 다시 보내 도달률 97% → 99.8%',
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
        image: {
          src: '/photos/lotte.jpg',
          alt: '롯데마트 캠페인 화면. 타겟팅, 상품 추천 설정, 채널 발송이 한 흐름으로 이어짐.',
          fit: 'crop',
        },
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
      'CompletableFuture로 항공사를 같이 호출하고, 늦은 건만 제외 (한진 토파스)',
      '발송 결과를 건마다 남기고, 성공 건은 제외한 뒤 실패 건만 재발송 (KB)',
      '알림톡 실패 시 문자 자동 대체 발송 (롯데마트)',
      '그룹 SSO, SOAP 기반 ERP 인터페이스 (두산인프라코어)',
    ],
  },
  {
    title: '대량 데이터와 배치',
    items: [
      '월말 수십만 건 발송을 일정 건수마다 커밋하고, 마지막 커밋 지점부터 재시작 (KB)',
      '실행 계획 기반 캠페인 타겟 추출 쿼리 튜닝 (롯데마트)',
      '협력사 데이터 1,400여 건 검증·백업·원복 단계를 갖춘 이관 (공공 포털)',
      '수만 행 엑셀 스트리밍 업로드와 행 단위 검증 (대한항공)',
    ],
  },
  {
    title: '운영 중인 서비스 확장',
    items: [
      '목록·검색은 그대로 두고 참가 신청·상세만 그해 양식으로 운영 (공공 포털)',
      'XML·JSON 응답을 화면에서는 같은 항목으로 맞춤 (한진 토파스)',
      'Vue 공통 컴포넌트와 같은 형식의 목록·검색 응답, 역할별 메뉴 권한 (SKT ifland)',
    ],
  },
  {
    title: '배포와 실행 환경',
    items: [
      '6개 마이크로서비스 GitLab–Jenkins 배포 파이프라인, 헬스체크·롤백 (공공 포털)',
      'Jenkins Pipeline으로 빌드부터 배포까지 한 흐름 (SKT ifland)',
      '계열사별 발송 Agent Docker 이미지 표준화 (KB)',
    ],
  },
]

export const skills = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Batch', 'JPA', 'MyBatis', 'PHP Laravel'] },
  { group: 'Frontend', items: ['React', 'Vue.js 3', 'TypeScript'] },
  { group: 'Database', items: ['Oracle', 'MySQL', 'Redis'] },
  { group: 'DevOps', items: ['Docker', 'Jenkins', 'GitLab', 'Linux'] },
  { group: '연동', items: ['Tus', 'SOAP', 'SSO', 'KISA 공인전자문서'] },
]

export const workStyle = [
  {
    title: '되돌릴 수 있게 작업합니다',
    body: '운영 DB를 건드리는 작업에는 검증, 백업, 반영, 원복 순서를 함께 만듭니다. 공공 포털의 협력사 데이터 이관도 이 순서로 1,400여 건을 반영했습니다.',
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
