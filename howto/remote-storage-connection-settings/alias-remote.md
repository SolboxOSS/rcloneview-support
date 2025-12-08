---
sidebar_position: 1
description: Create Alias Remotes in RcloneView to bookmark deep cloud folders as virtual remotes for faster access and cleaner organization.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - alias remote
  - virtual remote
  - quick access
  - cloud remote shortcut
  - remote shortcut
  - cloud storage
  - remote manager
  - bookmark
tags:
  - RcloneView
  - alias
  - remote-storage
  - shortcut
  - virtual-remote
date: 2025-12-05
author: tayson
---

# Alias

## How to Add Alias Using RcloneView

An **Alias Remote** is a virtual remote that bookmarks a specific folder inside an existing cloud remote. Instead of drilling down a deep folder tree every time, click the Alias and the target folder opens immediately.

Use Alias when you:

- Revisit deep project folders frequently.
- Keep complex folder structures and need quick entry points.
- Manage many remotes and want a cleaner layout.
- Want to select specific folders faster in Sync / Compare / Jobs.

**Summary:** Alias = cloud folder bookmark.

---

### Add an Alias Remote (via New Remote)

#### Step 1 — Open **New Remote** and choose **Virtual > Alias**

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="alias remote selection" class="img-large img-center" />

#### Step 2 — Enter Alias info

1. **Remote name**: Enter the Alias name (e.g., `MyAlias`).
2. **Remote (target folder)**: Click the folder icon and pick the existing remote and folder you want.  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="select target remote and folder" class="img-medium img-center" />

   After selecting, confirm the Alias details:  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="alias input window" class="img-large img-center" />

3. Click **Add Remote** to create the Alias.

#### Step 3 — Check the Alias in Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="remote manager alias" class="img-large img-center" />

Open it in the file browser to confirm it points to the exact target folder:  
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="alias file browser" class="img-large img-center" />

---

### Make an Alias Faster from the Explorer

You can quickly create an Alias Remote to bookmark frequently used remote folders for faster and easier access.

1. In the **Explorer** pane, click the **`☆` Alias** icon on the right side of the Path Bar.
2. Enter a name for your new **Alias**.
3. The remote will be instantly added and opened as an **Alias Remote**, ready for use.
<div class="img-grid-3">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote.png" alt="add new alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-name.png" alt="add new alias remote name" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-complete.png" alt="add new alias remote complete" class="img-large img-center" />
</div>

---

### Verify the Added Alias Remote in RcloneView

The added Alias Remote can be verified the same way as any other cloud remote in RcloneView.

1. From the top menu, click **`Remote Manager`** under the **`Remote`** tab.
2. Confirm that your newly created **Alias Remote** appears in the **`Remote Manager`** window.
3. Alternatively, open a new tab in the Explorer pane using the **`☆`** button and verify that the Alias Remote is available for browsing.

<div class="img-grid-3">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-verify.png" alt="added alias remote verify" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-explorer-verify.png" alt="added alias remote explorer verify" class="img-medium img-center" />
</div>

---

### Why Use Alias Remotes

- Save time: jump into deep folders with one click.
- Keep Remote Manager tidy by surfacing key paths as separate entries.
- Ideal for complex team/shared-drive structures.
- Fully usable in Sync / Compare / Job workflows like any remote.

---

### Summary

| Feature                    | Description                                  |
| -------------------------- | -------------------------------------------- |
| **Alias via New Remote**   | Create a dedicated remote for a deep folder  |
| **Alias via Explorer**     | Add the current folder as an Alias instantly |
| **Remote Manager display** | Listed like any other remote                 |
| **Use cases**              | Fast access, organization, automation        |

Alias is simple but powerful—flatten complex trees, jump straight to what matters, and speed up every cloud task.
