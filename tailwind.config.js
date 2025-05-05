/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',         // Docusaurus src 폴더
    './docs/**/*.{md,mdx}',               // MDX 문서 내 Tailwind 사용 시
    './blog/**/*.{md,mdx}',               // 블로그 기능 사용 시
    './src/pages/**/*.{js,ts,jsx,tsx}',   // 페이지 컴포넌트
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
