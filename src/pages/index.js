// 파일: src/pages/index.js (혹은 SupportPage.js)
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import styles from './Support.module.css';  // CSS 모듈 또는 custom.css에서 클래스 정의

export default function SupportPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="RcloneView Support Center"
      description="Find guides, tutorials, and help for RcloneView."
    >
      <main className="px-0 mt-0 pb-20 bg-white"> {/* 메인 배경 흰색 */}
        {/* 검색창 영역 (흰색 배경) */}
        <div className="bg-white w-screen">
          <div className="py-12 flex flex-col items-center max-w-7xl mx-auto px-0">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
              RcloneView Support Center
            </h1>
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full border border-gray-300 rounded-md px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>
        </div>

        {/* Tutorials 버튼부터 하단 영역까지 전체 회색 배경 */}
        <div className="bg-gray-100 w-screen py-12 min-h-screen"> {/* ✅ min-h-screen 추가 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            <Link
              to="/tutorials/intro/"
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tutorials</h3>
              <p className="text-gray-600">Step-by-step guides to master RcloneView.</p>
            </Link>

            <Link
              to="/howto/intro/"
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-5xl mb-4 text-red-600">❓</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Help Guides</h3>
              <p className="text-gray-600">Learn how to use RcloneView.</p>
            </Link>

            <a
              href="https://forum.rcloneview.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">Join discussions and share your ideas.</p>
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}