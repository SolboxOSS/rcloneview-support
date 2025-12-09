---
slug: transfer-yandex-and-google-drive-with-rcloneview
title: "Transfer Files Between Yandex Disk and Google Drive with RcloneView"
authors:
  - tayson
description: "Migrate and sync files between Yandex Disk and Google Drive using RcloneView’s GUI—native Yandex login, OAuth for Google, drag-and-drop, Compare, Sync, and scheduled Jobs."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud migration
  - cloud sync
  - rclone
  - cloud transfer
  - multi cloud
  - cloud to cloud transfer
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-migration
  - Tutorial
  - yandex
  - google-drive
  - cloud-to-cloud
---

import RvCta from '../src/components/RvCta';

# Transfer Files Between Yandex Disk and Google Drive with RcloneView

> Move or sync files between Yandex Disk ↔ Google Drive without using the command line.  
> RcloneView provides side-by-side Explorer panes, Compare, Sync, and scheduled Jobs—while handling Yandex browser login and Google OAuth for you.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why use RcloneView for Yandex ↔ Google Drive transfers?

- **Native Yandex login through your browser** (no WebDAV, no manual tokens).
- **Secure OAuth** login for Google Drive.
- **Side-by-side Explorer panes** for intuitive drag-and-drop.
- **Compare** mode to preview differences before copying or deleting.
- **Sync** with dry-run, filters, and checksum support.
- **Reusable Jobs & scheduling** for recurring backups and automation.
- **Full progress visibility** through logs, retries, and bandwidth controls.

RcloneView builds a visual workflow on top of rclone so even complex multi-cloud transfers feel effortless.

---

## Before you start

- Ensure you can sign into your **Yandex account**—setup uses browser login, not WebDAV.
- Check your **Google Drive** quota and note Google’s daily 750 GB upload limit.
- Install the latest RcloneView build from:  
  👉 https://rcloneview.com/src/download.html
- For large jobs, keep your computer awake and prefer stable networks.

---

## Step 1: Add your cloud remotes

### Connect Yandex Disk (browser-based login)

1. Open **Remote → + New Remote**.
2. Select **Yandex Disk** as the provider.
3. Click **Connect**, which opens a Yandex login page in your browser.
4. Sign in and grant access.
5. Save the remote once RcloneView confirms the authentication is complete.

### Connect Google Drive

1. Click **+ New Remote** again.
2. Choose **Google Drive**.
3. Press **Connect**, complete OAuth login in the browser, and allow permissions.
4. Save the remote.

👉 Guide: [Add Google Drive Remote](/support/howto/#step-2-adding-remote-storage-google-drive-example)

---

## Step 2: Open both clouds in the Explorer pane

1. Go to the **Browse** tab.
2. Click the **+** icon in the left pane → select **Yandex Disk**.
3. Click the **+** icon in the right pane → select **Google Drive**.
4. Navigate to the folders you want to move or sync.

---

## Four ways to transfer files

### Method 1: Drag & drop between Explorer panes

1. In the Yandex pane, select files or folders.
2. Drag them into the Google Drive pane (or the opposite direction).
3. Watch progress under **Transfer**.

👉 Reference: [Browse & Manage Remote Storage](/support/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### Method 2: Compare, then copy or delete

1. Open the source folder in Yandex Disk (left) and target folder in Google Drive (right).
2. Select **Compare**.
3. RcloneView will highlight:
   - Items present only on one side
   - Items that differ in size
   - Matching files
4. Click **Copy →** or **← Copy** depending on direction.
5. Use **Delete** carefully when cleaning up duplicates.

👉 Guide: [Compare Folder Contents](/support/howto/rcloneview-basic/compare-folder-contents)

---

### Method 3: Sync or save as a Job

1. Select a **Yandex folder** as the source and a **Google Drive folder** as the destination.
2. Click **Sync**.
3. Choose:
   - One-way sync (Yandex → Google Drive)
   - One-way sync (Google Drive → Yandex)
   - Two-way sync
4. Preview the planned operations using dry-run.
5. Run the sync, or click **Save to Jobs** to reuse it later.

👉 Learn more:

- [Synchronize Remote Storages](/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/support/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/support/howto/rcloneview-basic/execute-manage-job)

---

### Method 4: Schedule recurring sync jobs

1. Open **Job Manager → Add Job**.
2. Select Yandex as the source and Google Drive as the destination (or reverse).
3. Set an interval (e.g., daily, hourly, weekly).
4. Enable the job.
5. Review logs and Job History for results.

👉 Learn more: [Job Scheduling and Execution](/support/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## Tips for smooth transfers

- Use **dry-run** before large one-way syncs.
- Google Drive API may throttle very large bursts; reduce concurrency if needed.
- For shared Google Drive folders, ensure you have **Editor** permissions.
- Keep RcloneView running for scheduled Jobs.

---

## Summary

RcloneView makes transferring files between **Yandex Disk** and **Google Drive** simple and reliable.  
With native login for both services, visual Explorer panes, Compare, Sync, and Jobs, you can migrate or maintain your multi-cloud workflows without touching a command line.
