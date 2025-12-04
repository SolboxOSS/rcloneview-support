---
sidebar_position: 7
description: Learn how to add Azure File Storage in RcloneView.
keywords:
  - rcloneview
  - azure file storage
  - azure files
  - smb
  - cloud storage
  - remote storage
  - Remote Connection
  - rclone
tags:
  - azure
  - azure-files
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-12-03
author: tayson
---

# Azure File Storage

## How to Add Azure File Storage Using RcloneView

Azure File Storage uses SMB and needs three items to connect:

- **Azure Storage Account Name**
- **Storage Account Shared Key**
- **Azure File Share Name**

You can copy all three from the **Azure Portal** (Storage account > **Access keys** for the shared key, and **File shares** for the share name).

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="get azure storage account name and account shared key" class="img-large img-center" />

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="get azure storage share name" class="img-large img-center" />

### Step 1: Open the New Remote Window

- Click **`+ New Remote`** from the top menu under **`Remote`**.
- Or click the **`+`** button in the Explorer pane and choose **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-large img-center" />
</div>

### Step 2: Select Azure File Storage as the Storage Provider

1. In the **Search Provider** bar, type `Azure File Storage`.
2. Click on the **Azure File Storage** option from the list.

You’ll then be taken to the configuration screen for Azure File Storage.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="select azure file storage to add remote" class="img-large img-center" />

### Step 3: Configure Your Azure File Storage Remote

Fill out the required information in the form:

- **Remote name**: A friendly name for your remote (e.g., `MyAzureFileStorage`)
- **account**: Azure Storage **Account Name**. Set this to the Azure Storage Account Name in use.
- **key**: **Storage Account Shared Key**
- **share_name**: **Azure Files Share Name**. This is required and is the name of the share to access.

After entering all values, click **`Add Remote`** to complete the setup.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="remote configure azure file storage" class="img-large img-center" />

### Step 4: Confirm the Added Remote

Once added, your new Azure File Storage remote (e.g., `MyAzure`) will appear in the **Remote Manager** list.

You can now:

- Click **`Open`** to browse your files.
- Use it in sync, copy, or mount jobs.
- Manage or delete the remote at any time.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="remote manager azure file storage view" class="img-large img-center" />

✅ **Done!** You’ve successfully connected your **Azure File Storage** storage to **RcloneView**.

**Done!** You can now browse and transfer files in your Azure File Share directly from RcloneView.
