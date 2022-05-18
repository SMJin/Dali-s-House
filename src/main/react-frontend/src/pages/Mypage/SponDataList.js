const sponList = [
    {
    id:1,
    code:"DJA20220228-157651",
    title:"목우촌펫 펫9단 애견사료 전연령견용 20kg 외 2건",
    place:"빛나라 수원 유기동물 보호소",
    delivery:"배송완료",
    date:"22.05.18",  
    total_amount:"155,210원"
    
    },
    {
    id:2,
    code:"DJA20220215-452414",
    title:"굿데이 건강한육포 반려견간식 5p 300g 외2건",
    place:"빛나라 수원 유기동물 보호소",
    delivery:"배송완료",
    date:"22.02.01", 
    total_amount:"112,400원"
    },
    {
    id:3,
    code:"DJA20220215-452414",
    title:"목우촌펫 펫9단 애견사료 전연령견용 20kg 외 1건",
    place:"빛나라 수원 유기동물 보호소",
    delivery:"배송준비중",
    total_amount:"96,210원"
    },
];

const getSponById = id => {
    const array = sponList.filter(x => x.id == id);
    if(array.length == 1) {
        return array[0];
    }
    return null;
}

export {
    sponList, 
    getSponById
};
