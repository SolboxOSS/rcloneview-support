---
slug: transfer-wasabi-to-google-drive-rcloneview
title: "Transfer Files Between Wasabi and Google Drive with RcloneView"
authors:
  - tayson
description: "Move or back up data between Wasabi buckets and Google Drive with RcloneView—set up remotes quickly, optimize S3 uploads, compare before syncing, and schedule ongoing jobs."
keywords:
  - Wasabi to Google Drive transfer
  - Wasabi cloud migration
  - cloud-to-cloud backup
  - rcloneview
  - rclone s3
  - google drive migration
  - cloud sync
  - wasabi google drive transfer
  - s3 multipart upload
  - cloud automation
tags:
  - RcloneView
  - cloud-migration
  - cloud-storage
  - backup
  - Wasabi
  - google-drive
  - sync
---

import RvCta from '../src/components/RvCta';

# Transfer Files Between Wasabi and Google Drive with RcloneView

> Move terabytes from Wasabi to Google Drive (or back) without juggling command lines. RcloneView layers rclone’s speed and S3 tuning into a guided GUI so you can compare, sync, and schedule migrations confidently.

RcloneView supports both S3-compatible storage like Wasabi and Google Drive’s OAuth flow. Open both remotes side-by-side, choose Explorer/Compare/Sync based on your workflow, and apply S3-friendly chunking to keep large uploads stable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wasabi vs Google Drive at a glance

- **Wasabi**: S3 API, fast ingest, low storage cost, per-bucket endpoints (e.g., `s3.us-east-1.wasabisys.com`).
- **Google Drive / Workspace**: Familiar sharing, strong collaboration, API quotas to consider during bursts.
- **RcloneView**: One UI for both—compare before syncing, drag-and-drop, run dry runs, and schedule repeat jobs.

## Add a Wasabi remote (S3-compatible)

1. Click **`+ New Remote`** → choose **S3**.
2. Enter your **Access Key** / **Secret Key**, bucket region, and endpoint (e.g., `s3.wasabisys.com` or region-specific URL).
3. Save as `Wasabi_Archive` (or similar) for clarity.  
   <img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="New remote wizard" class="img-large img-center" />

Reference setup: [/support/howto/remote-storage-connection-settings/s3](/support/howto/remote-storage-connection-settings/s3)

## Connect Google Drive with OAuth

1. In **`+ New Remote`**, pick **Google Drive**.
2. Sign in via the browser OAuth prompt and confirm the account or Workspace you’ll migrate to.
3. Name it (e.g., `GDrive_Workspace`).

More detail: [/support/howto/remote-storage-connection-settings/add-oath-online-login](/support/howto/remote-storage-connection-settings/add-oath-online-login)

## Open both clouds side-by-side

1. In **Explorer → Browse**, open your **Wasabi** remote on one side and **Google Drive** on the other.
2. Navigate to the source bucket/folder and the target Drive folder.  
   <img src="/support/images/en/blog/open-proton-drive-and-google-drive.png" alt="Two remotes side by side" class="img-medium img-center" />

## Choose the best transfer method

- **Drag & Drop (Explorer)**: Quick copies for selected folders. Progress appears in **Transfer** logs.
- **Compare → Copy**: Preview differences first; copy missing/newer files with confidence.
- **Sync**: One-way mirror for ongoing backups (Wasabi → Drive or reverse). Add **`--dry-run`** first to validate.
- Need a walkthrough? See the multi-cloud tutorial flow: [/support/tutorials/transfer-files-between-mega-and-google-drive](/support/tutorials/transfer-files-between-mega-and-google-drive)

## Optimize large Wasabi uploads and downloads

- **Multipart uploads**: Increase chunk size for fewer parts on huge files (e.g., `--s3-chunk-size=64M`) and tune concurrency (e.g., `--s3-upload-concurrency=8`).
- **Parallelism**: Start with `--transfers=4 --checkers=8` for steady throughput; reduce if you see throttling.
- **Checksum safety**: Enable checksum comparison on supported objects; pair with `--size-only` if hashing is slow on massive libraries.
- **Network stability**: Add retries (`--retries=10 --low-level-retries=20`) for long runs over VPNs or distant regions.

## Build a scheduled backup job

1. After a successful Sync, click **Save to Jobs**.
2. Open **Job Manager** → **Add Job** (or edit the saved one) and set the schedule (e.g., nightly).
3. Keep **Backup Dir** or versioned folders to preserve changed/deleted items on Drive.
4. Monitor in **Job Monitor** (Transfer/Completed/API logs) and **History** for per-file outcomes.
   - Guides: [/support/howto/rcloneview-basic/create-sync-jobs](/support/howto/rcloneview-basic/create-sync-jobs), [/support/howto/rcloneview-advanced/job-scheduling-and-execution](/support/howto/rcloneview-advanced/job-scheduling-and-execution), [/support/howto/rcloneview-basic/real-time-transfer-monitoring](/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## Migration checklist (integrity + safety)

- Run a **Compare** first to see what will move; export results if needed.
- Start with **`--dry-run`** on Sync to avoid surprises.
- For critical data, validate with `rclone check source: dest:` in the built-in Terminal and review **API logs**.
- Use distinct destination folders (e.g., `Wasabi_Archive_2025`) until you verify integrity.
- Document jobs with clear names (`Wasabi→GDrive_Nightly`) and keep endpoints/keys scoped to the needed bucket.

## Wrap-up

With RcloneView, Wasabi’s S3 performance and Google Drive’s collaboration live in one interface. Create both remotes, preview changes, tune S3 uploads, and schedule recurring jobs—all without editing configs or CLI flags. Start your Wasabi → Google Drive migration today and keep every run verifiable.
