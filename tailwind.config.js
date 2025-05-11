/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',         // Docusaurus src 폴더
    './docs/**/*.{md,mdx}',               // MDX 문서 내 Tailwind 사용 시
    './blog/**/*.{md,mdx}',               // 블로그 기능 사용 시
    './tutorials/**/*.{md,mdx}', 
    './howto/**/*.{md,mdx}', 
    './src/pages/**/*.{js,ts,jsx,tsx}',   // 페이지 컴포넌트
  ],
  corePlugins: {
    preflight: false, // Tailwind 기본 reset 비활성화
  },
  
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
 // plugins: [require('@tailwindcss/typography')],
}
