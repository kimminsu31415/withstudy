/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // 모바일은 0~413px
      mobile: { max: "413px" },
      // 태블릿은 414~820px
      tablet: { min: "414px", max: "820px" },
      // 데스크톱은 821px 이상
      desktop: { min: "821px" },
    },
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
        SBAggro: ["SBAggro"],
      },
    },
  },
  plugins: [],
};
