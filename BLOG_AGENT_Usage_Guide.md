Codex Blog Generation Command Guide / Codex 블로그 생성 명령어 가이드

이 문서는 VS Code Codex(챗GPT 기반 코드 어시스턴트)를 사용하여 RcloneView 블로그 글을 자동 생성하는 방법을 설명합니다. 동시에 영어와 한국어로 작성되어 있습니다.
This document explains how to use VS Code Codex (ChatGPT Code Companion) to automatically generate RcloneView blog posts, written in both Korean and English.

🧩 Overview / 개요

Codex는 BLOG_AGENT.md의 규칙을 읽고, RcloneView용 SEO 최적화 블로그 글을 자동으로 생성할 수 있습니다.
Codex can read rules from BLOG_AGENT.md and automatically create SEO‑optimized blog articles for RcloneView.
Codex는 다음을 지원합니다: / Codex can do:

- 자동 주제 선택 / automatic topic selection
- 직접 입력한 주제 기반 생성 / topic-based generation (when you provide one)
- Docusaurus 스타일의 완성된 Markdown 파일 생성 / generates complete Markdown in Docusaurus format

🧩 Basic Command / 기본 명령어

아래 명령어를 Codex에 입력하면 자동으로 블로그 글을 생성합니다.
Use this command to have Codex generate a blog post automatically:

Please read BLOG_AGENT.md in this repo.
Follow its instructions to generate a new RcloneView blog post now.
Use "tayson" as the author for this article.

🧩 Command With a Custom Topic / 주제를 직접 지정하는 명령어

주제를 직접 입력하면 STEP 1(주제 제안)을 생략하고 바로 아웃라인 생성으로 넘어갑니다.
If you provide a topic, Codex skips STEP 1 and begins with STEP 2.

Please read BLOG_AGENT.md in this repo.
Follow its instructions to generate a new RcloneView blog post now.
Use "tayson" as the author for this article.
Use this topic: <YOUR_TOPIC_HERE>

Example / 예시
Use this topic: RcloneView mount performance optimization for S3 and R2.

🧩 When No Topic Is Provided / 주제를 비워두면

아무 주제도 입력하지 않으면 Codex가 자동으로 주제를 생성합니다.
If you do NOT provide a topic, Codex will:

- analyze /blog, /howto, /tutorials
- avoid duplicates
- propose 3–5 SEO-friendly topics
- choose one automatically
- continue through STEP 2 → STEP 3

사용 예 / Example:
Please read BLOG_AGENT.md in this repo.
Follow its instructions to generate a new RcloneView blog post now.
Use "tayson" as the author for this article.
Topic:

🧩 Output Result / 출력 결과

Codex는 최종적으로 아래 형식의 마크다운을 출력합니다:
Codex creates the final Markdown file with:

- Docusaurus frontmatter
- SEO title & tags
- internal links reused from workspace
- placeholder comments if links are missing

저장은 수동으로 /blog 폴더에 넣으면 됩니다: Save the final output manually under:
/blog/YYYY-MM-DD-<slug>.md

🧩 Tips / 사용 팁

BLOG_AGENT.md를 최신 규칙으로 유지하세요. / Keep BLOG_AGENT.md updated.
Codex가 워크스페이스 파일을 읽을 수 있어야 합니다. / Ensure Codex can read workspace files.
주제를 직접 입력하면 원하는 방향으로 더 빠르게 만들 수 있습니다. / Providing a topic produces faster targeted results.
