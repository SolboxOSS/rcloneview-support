---
slug: reference-rcloneview-content-style
title: "Reference: RcloneView Blog/Tutorial Content Style Guide"
unlisted: true
description: Internal reference for generating RcloneView blog/tutorial articles with consistent CTA imports, imagery, and helpful links.
authors:
  - jay
tags:
  - reference
  - rcloneview
  - content-style
---
import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Reference: RcloneView Blog/Tutorial Content Style Guide

Use this when generating new RcloneView articles. Keep CTAs, imports, imagery, and links consistent.

## Writing Tips

- Always follow the `CTA & Component Template (required)` rules (imports, RvCta block, `<CloudSupportGrid />`).
- From the GUI Image Reference list, place the image link that best matches the section you’re writing.
- Add related guide links from the How-to list that match the topic you’re covering.
- For existing documents, replace images with the closest matches from the image list.
- For existing documents, add or swap guide links using the closest matches from the How-to list.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## CTA & Component Template (required)

- Place imports immediately after front-matter, with exactly one blank line after the front-matter block, and do not duplicate them:  
  `import CloudSupportGrid from '../src/components/CloudSupportGrid';`  
  `import cloudIcons from '../src/contexts/cloudIcons';`  
  `import RvCta from '../src/components/RvCta';`
- After `<!-- truncate -->`, insert the RvCta block above.
- End the document with `<CloudSupportGrid />` on its own line.

## RcloneView GUI Image References

Use these to show the actual UI (sourced from Jay-authored posts). Copy-paste the HTML image tags:

- **New Remote screen**:  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

- **Two-pane Explorer (remotes open)**:  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />


- **Drag & Drop in Explorer**:  
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

- **Compare folders and copy**:  
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

- **Job Management, Job Execution**
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />


- **Job execution monitoring**:  
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

- **Job scheduling & automation setup**:  
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

- **Create Mount**
  - Directly mount from opened remote/folder
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

  - Mount with Mount Manager
<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

- RcloneView Connecting with Embedded Rclone

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />


- RcloneView Connecting with External Rclone

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />
- Synology NAS Connection. 
<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="synology nas autodection and connection" class="img-large img-center" />



## Core How-to Links (use descriptive link text)

- Remote setup  
  - [Add Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)  
  - [Add OneDrive headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [Add AWS S3 and S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)  
  - [Add WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)

- Explorer basics  
  - [Browse & Manage Remotes](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)  
  - [Drag & Drop files](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

- Compare & Copy  
  - [Compare folder contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)  

- Instant Sync  
- [Synchronize Remote Storages Instantly](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

- Jobs & Scheduling  
  - [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)  
  - [Execute & Manage Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)  
  - [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)  
  - [Real-time Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
  - [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

- Mount cloud storage as local drive.  
	- [Mount Cloud Storage as a Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

- Adding Auto-login remote with External Rclone on Headless system (without web browser).
  - [External rclone example (GoogleDrive → AWS S3)](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)  
  - [Headless Google Drive](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)

- App security  
  - [Enable App Lock](https://rcloneview.com/support/tutorials/enable-app-lock)  

- Synology Nas Connection Guide   
  - [Synology NAS Auto Detection and Connection](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)





<CloudSupportGrid />
