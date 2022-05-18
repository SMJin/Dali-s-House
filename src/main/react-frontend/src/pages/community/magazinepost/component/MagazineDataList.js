const MagazineDataList = [
  {
    id: 1,
    category: "보호소",
    title1: "해피퍼피 보호소에",
    title2: "새 친구들이 들어왔어요!",
    organ: "해피퍼피 보호소",
  },
  {
    id: 2,
    category: "봉사활동",
    title1: "다들 여기서 모하개?",
    title2: "함께하는 산책봉사!",
    organ: "하리네 쉼터",
  },
  {
    id: 3,
    category: "입양후기",
    title1: "새로운 집에서 빠르게",
    title2: "적응한 호앙이네 비법은?!",
    organ: "우리사랑 보호소",
  },
  {
    id: 4,
    category: "입양후기",
    title1: "귀여운 쿠마는 무럭무럭",
    title2: "건강하게 크고 있어요!",
    organ: "우리사랑 보호소",
  },
  {
    id: 5,
    category: "보호소",
    title1: "해피퍼피 보호소에",
    title2: "새 친구들이 들어왔어요!",
    organ: "해피퍼피 보호소",
  },
  {
    id: 6,
    category: "봉사활동",
    title1: "다들 여기서 모하개?",
    title2: "함께하는 산책봉사!",
    organ: "하리네 쉼터",
  },
  {
    id: 7,
    category: "입양후기",
    title1: "새로운 집에서 빠르게",
    title2: "적응한 호앙이네 비법은?!",
    organ: "우리사랑 보호소",
  },
  {
    id: 8,
    category: "입양후기",
    title1: "귀여운 쿠마는 무럭무럭",
    title2: "건강하게 크고 있어요!",
    organ: "우리사랑 보호소",
  },
];

const getMagazineDataById = (id) => {
  const array = MagazineDataList.filter((x) => x.id == id);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { MagazineDataList, getMagazineDataById };
