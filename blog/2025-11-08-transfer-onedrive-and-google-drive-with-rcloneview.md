---
slug: transfer-onedrive-and-google-drive-with-rcloneview
title: "Transfer Files Between OneDrive and Google Drive with RcloneView"
authors:
  - tayson
description: "Move files between Microsoft OneDrive and Google Drive without downloads—use RcloneView drag-and-drop, Compare, Sync, and scheduled Jobs for reliable cloud-to-cloud transfers."
keywords:
  - onedrive to google drive transfer
  - google drive to onedrive migration
  - rcloneview
  - cloud to cloud sync
  - drag and drop transfer
  - scheduled sync jobs
  - compare folders
  - resumable uploads
  - oauth login
tags:
  - RcloneView
  - cloud-migration
  - onedrive
  - google-drive
  - sync
  - automation
---

import RvCta from '../src/components/RvCta';

# Transfer Files Between OneDrive and Google Drive with RcloneView

> Switch clouds without re-downloading gigabytes. RcloneView gives you a two-pane Explorer, Compare, Sync, and scheduled Jobs so OneDrive ↔ Google Drive moves stay fast and predictable—no CLI required.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image placeholder: add `/support/images/en/tutorials/transfer-files-between-onedrive-and-google-drive.png` if available -->
<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="transfer files between onedrive and google drive" class="img-medium img-center" />

## Why use RcloneView for OneDrive ↔ Google Drive?

- Secure OAuth logins for both clouds; no tokens to paste.
- Resumable transfers with progress logging, retries, and bandwidth limits.
- Two-pane Explorer for drag-and-drop moves without scripts.
- Compare to highlight new/changed files before copying.
- One-way or two-way Sync plus reusable Jobs and scheduling.
- Optional dry-run and filters to control exactly what moves.

RcloneView layers a guided UI on top of rclone, so even large migrations stay reliable while engineers still get advanced switches when needed.

## Before you start

- Sign in to both OneDrive and Google Drive accounts.
- Install RcloneView from the latest build: [Download](https://rcloneview.com/src/download.html).
- Check cloud quotas and per-day API limits (Google Drive enforces 750 GB/day per user for uploads).
- For best throughput, keep RcloneView running during long jobs and prefer wired networks.

## Step 1: Connect both cloud remotes

1. Open **Remote → + New Remote**.
2. Under **Provider**, pick **OneDrive**, then click **Connect** to complete the Microsoft OAuth sign-in.
3. Repeat for **Google Drive** and finish the OAuth flow.
4. Confirm both remotes appear in Remote Manager.

👉 Learn more: [Add Google Drive Remote](/support/howto/#step-2-adding-remote-storage-google-drive-example)

## Step 2: Open both remotes in the Explorer pane

1. Go to the **Browse** tab.
2. In the left pane, click **+** and open your **OneDrive** remote.
3. In the right pane, click **+** and open your **Google Drive** remote.
4. Browse into the source and destination folders you plan to sync.

## Four ways to move files

### Method 1: Drag & drop between Explorer panes

1. Select files or folders in the OneDrive pane.
2. Drag them into the Google Drive pane (or the opposite direction).
3. Watch progress in the **Transfer** tab; pause/resume if needed.

👉 More details: [Browse & Manage Remote Storage](/support/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Method 2: Compare, then copy or delete

1. Open the source folder on the left and destination on the right.
2. Click **Compare** on the toolbar.
3. RcloneView highlights unique files, size mismatches, and matches.
4. Select items to move, then choose **Copy →** or **← Copy**.
5. Use **Delete** with caution to clean up old data.

👉 Learn more: [Compare Folder Contents](/support/howto/rcloneview-basic/compare-folder-contents)

### Method 3: Sync or save as a Job

1. Select your OneDrive source and Google Drive destination.
2. Click **Sync** and choose one-way (OneDrive → Google Drive) or two-way.
3. Review the preview, adjust filters (include/exclude), then start.
4. Click **Save to Jobs** to reuse the same sync later.

👉 Learn more:

- [Synchronize Remote Storages](/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/support/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/support/howto/rcloneview-basic/execute-manage-job)

### Method 4: Schedule automatic sync jobs

1. Open **Job Manager → Add Job**.
2. Set **OneDrive** as source and **Google Drive** as destination (or reverse).
3. Choose a schedule (hourly, daily, weekly, or cron-style).
4. Save and enable the job; RcloneView will run it automatically.
5. Review logs and history for verification.

👉 Learn more: [Job Scheduling and Execution](/support/howto/rcloneview-advanced/job-scheduling-and-execution)

## Tips for smooth multi-cloud transfers

- Use **dry-run** before large syncs to confirm what will change.
- For shared OneDrive/Drive folders, ensure you have edit permissions on both sides.
- Use **bandwidth limits** during work hours to avoid throttling.
- If Google Drive hits the 750 GB/day cap, split the job across days or accounts.
- Keep the **Transfer** tab open to track retries and throughput.

## Summary

RcloneView removes the download/re-upload shuffle between **OneDrive** and **Google Drive**. With side-by-side browsing, Compare, Sync, reusable Jobs, and scheduling, you can execute one-off moves or recurring backups with confidence—no command line required.
