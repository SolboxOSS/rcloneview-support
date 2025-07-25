---
sidebar_position: 3
description: Learn how to browse, copy, and manage files across local and cloud storage using RcloneView’s drag-and-drop interface and right-click menu.
keywords:
  - rcloneview
  - file management
  - copy files
  - move files
  - drag and drop
  - cloud file transfer
  - cloud storage
  - file explorer
  - cloud to cloud transfer
  - remote browser
  - upload
  - download
  - purge
  - delete
tags:
  - howto
  - file-management
  - cloud-storage
  - drag-and-drop
  - cloud-file-transfer
  - file-explorer
date: 2025-05-27
author: Jay
---
# File Management with RcloneView  

RcloneView allows you to easily browse, transfer, and organize files between your local disk and multiple cloud storage services using a familiar, Explorer-like interface.   

This guide walks you through:   

- Browsing remote storage
- Copying files using drag & drop
- Managing files with the right-click menu
 
## Browsing Remote Storage

You can open any connected cloud remote and view it like a local folder.

### How to Browse a Remote:

1. Click the **`+`** tab in the **Explorer pane**.
2. Select the remote storage you want to open.
3. The selected remote will open in a new tab, ready for file operations.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file explorer open remote" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file explorer remote open complete" class="img-medium img-center" />
</div>

:::tip View Layout
Go to **`Settings > Layout`** to switch between vertical and horizontal views 
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer view layout" class="img-small img-left" />
:::

## Copying Files using Drag and Drop

You can transfer files between local and cloud storage using simple drag & drop.
#### Copy Between Two Remotes

Drag files from one remote tab to another in RcloneView to copy them across cloud storages.
<video src="/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  rclonview explorer drag and drop
</video>

**👉  For Multi-Select and Bulk Actions**
You can select multiple files at once to perform batch operations.
- Use **`Ctrl + Click`** to select multiple individual files.
- Use **`Shift + Click`** to select a range of files.

**👉  Drag & Drop Behavior **
- **Same remote** = Move operation  
- **Different remotes** = Copy operation


:::tip Hint
-  If you don’t want to see the confirmation popup during copy, uncheck the **Confirm drag and drop** checkbox.
- To re-enable the popup later, go to **Settings > General settings > Confirm drag and drop** and check it again.
:::

#### Copy from Windows Explorer to Remote in RcloneView
- You can also drag files directly from **Windows File Explorer** into a RcloneView tab to upload them to the cloud storage.
<video src="/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  windows explorer drag and drop
</video>
### Managing files with the right-click menu

RcloneView supports full file operations through a convenient right-click menu.

### Available Actions:

- <img src="/support/icons/download-icon.png" alt="download icon" class="inline-icon" />**Download** – Save file(s) to your local disk  
- <img src="/support/icons/upload-icon.png" alt="upload icon" class="inline-icon" />**Upload** – Send local file(s) to a cloud remote  
- <img src="/support/icons/copy icon.png" alt="copy icon" class="inline-icon" />**Copy / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Paste** – Copy files between folders or remotes  
- <img src="/support/icons/cut-icon.png" alt="cut icon" class="inline-icon" />**Cut / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Paste** – Move files to another location  
- <img src="/support/icons/delete-icon.png" alt="delete icon" class="inline-icon" />**Delete** – Remove files or folders  
- <img src="/support/icons/rename-icon.png" alt="rename icon" class="inline-icon" />**Rename** – Rename files or folders  
- <img src="/support/icons/new-folder-icon.png" alt="new folder icon" class="inline-icon" />**New Folder** – Create a new folder  
- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" />**Reload** – Refresh folder contents





