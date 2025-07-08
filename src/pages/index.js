// 파일: src/pages/index.js (혹은 SupportPage.js)
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Footer from "../components/footer";
// import styles from './Support.module.css';  // CSS 모듈 또는 custom.css에서 클래스 정의

export default function SupportPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="RcloneView Support Center" description="Find guides, tutorials, and help for RcloneView.">
      <main className="px-0 mt-0 bg-white" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {/* 메인 배경 흰색 */}
        {/* 검색창 영역 (흰색 배경) */}
        <div
          className="bg-white w-screen"
          style={{ height: 270, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
        >
          <article>
            <h1 className="text-center mb-6 text-gray-900" style={{ fontSize: 46, color: "#555", fontFamily: "Poppins", fontWeight: 600 }}>
              RcloneView Support Center
            </h1>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/howto/intro/" style={{ fontFamily: "Poppins" }}>
                RcloneView Tutorial - 3min ⏱️
              </Link>
            </div>
          </article>
        </div>
        {/* Tutorials 버튼부터 하단 영역까지 전체 회색 배경 */}
        <div className="bg-gray-100 w-full py-12" style={{ flex: 1 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            <Link
              to="/tutorials/intro/"
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 text-center hover:no-underline"
            >
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "Poppins" }}>
                Tutorials
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Poppins" }}>
                Step-by-step guides to master RcloneView.
              </p>
            </Link>

            <Link
              to="/howto/intro/"
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 text-center hover:no-underline"
            >
              <div className="text-5xl mb-4 text-red-600">❓</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "Poppins" }}>
                Help Guides
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Poppins" }}>
                Learn how to use RcloneView.
              </p>
            </Link>

            <a
              href="https://forum.rcloneview.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 text-center hover:no-underline "
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "Poppins" }}>
                Community
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Poppins" }}>
                Join discussions and share your ideas.
              </p>
            </a>
          </div>
        </div>
        {/* 푸터 추가. /support 에서만 */}
      </main>
      <Footer />
    </Layout>
  );
}
