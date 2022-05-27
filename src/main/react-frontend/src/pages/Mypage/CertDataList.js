const certList = [
  {
    id: 1,
    lssuance: "발급가능",
    title: "아름다운 우리 아이들의 미용 봉사",
    organ: "경기 퍼피랜드",
    date: "2022.03.01 (화) 15:00 ~ 2022.03.01 (화) 18:00",
    time: "총 3시간",
    count: "총 1회",
    content: "유기견 목욕, 털 깎기 등 미용 봉사",
  },
  {
    id: 2,
    lssuance: "발급가능",
    title: "2월 정기 산책 봉사자를 모집합니다.",
    organ: "마포 유기견 행복 지킴이",
    date: "2022.02.05 (토) 10:00 ~ 2022.02.26 (토) 12:00",
    time: "총 8시간",
    count: "총 3회",
    content: "유기견 산책",
  },
  {
    id: 3,
    lssuance: "발급가능",
    title:
      "경기도 반려동물 입양센터(수원) 유기견 관리(홍보봉사) - 유기동물 프로필 작성",
    organ: "수원 도우미견 나눔센터",
    date: "2022.01.24 (화) 10:00 ~ 2022.01.24 (화) 10:00 18:00",
    time: "총 8시간",
    count: "총 2회",
    content: "유기견 관리 및 홍보 봉사 활동",
  },
  {
    id: 4,
    lssuance: "발급가능",
    title: "‘생명공감’ 보호소 봉사 - 견사 청소, 밥·물그릇 청소, 밥주기 ",
    organ: "경기 유기동물 보호소",
    date: "2021.12.19 (일) 13:00 ~ 2021.12.19 (일) 17:00",
    time: "총 4시간",
    count: "총 1회",
    content: "견사 청소, 밥·물그릇 청소, 밥주기 ",
  },
  {
    id: 5,
    lssuance: "발급가능",
    title: "대구 유기견 봉사 함께해요.",
    date: "2022.02.06 (일) 09:00 ~ 2022.02.06 (일) 12:00",
    organ: "대구 경산쉼터 유기견 보호소",
    time: "총 3시간",
    count: "총 1회",
    content: "유기견 목욕, 털 깎기 등 미용 봉사",
  },
  {
    id: 6,
    lssuance: "발급가능",
    title: "아직 엄마 품이 필요한 고양이들에게 도움을 주세요",
    organ: "사랑냥이 보호센터",
    date: "2022.02.06 (일) 09:00 ~ 2022.02.06 (일) 12:00 ",
    time: "총 3시간",
    count: "총 2회",
    content: "고양이 목욕, 밥·물그릇 청소, 밥주기 ",
  },
];

const getCertificateById = (id) => {
  const array = certList.filter((x) => x.id == id);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { certList, getCertificateById };
