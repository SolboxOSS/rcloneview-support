---
sidebar_position: 14
description: Copy complete folder paths—including the remote name—in one step from the RcloneView Path bar for precise commands and automation.
keywords:
  - rcloneview
  - rclone
  - copy path
  - remote path
  - path bar
  - automation
  - terminal
tags:
  - RcloneView
  - path-bar
  - copy-path
  - rclone
date: 2025-12-05
author: tayson
---

# Using the Copy Full Path Feature in RcloneView

The **Copy Full Path** feature lets you grab the entire folder path — optionally with the remote name — in a single action. It’s perfect for writing `rclone` commands, running Terminal tests, sharing exact cloud paths, and avoiding mistakes in scripts.

---

## Where to Find Copy Full Path

You can access Copy Full Path from the **Path bar** at the top of the Remote File Browser.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path.png" alt="copy full path path bar" class="img-medium img-center" />

Right-click the Path bar to see these options:

- **Cut**
- **Copy**
- **Paste**
- **Copy Full Path (with Remote)**
- **Select All**

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-all.png" alt="copy full path context menu" class="img-medium img-center" />

---

## Select All — Highlight the Entire Path

Choosing **Select All** highlights the entire text in the Path field so you can copy it quickly.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-all.png" alt="copy full path select all" class="img-medium img-center" />

After copying and pasting (e.g., into Notepad), the local folder name (e.g., `Meet recordings`) appears exactly as shown.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-notepad.png" alt="copy full path notepad" class="img-medium img-center" />

---

## Copy Full Path (with Remote) — Remote + Folder Path

**Copy Full Path (with Remote)** captures:

- Remote name
- Full folder path
- Exact `remote:path` format for `rclone`

Example result:

```
mygoogledrive:Meet recordings
```

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path.png" alt="copy full path with remote" class="img-medium img-center" />

Pasting into Notepad shows the ready-to-use path:  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path-notepad.png" alt="copy full path with remote notepad" class="img-medium img-center" />

This format works directly in commands such as:

```bash
rclone copy "mygoogledrive:Meet recordings" /local/backup
```

---

## When to Use This Feature

- **Writing `rclone` commands**: Paste accurate remote paths instantly.
- **Testing paths in Terminal**: Use `remote:path` without retyping.
- **Avoiding script mistakes**: Prevent typos in automation or batch jobs.
- **Sharing paths with teammates**: Send precise locations for support or collaboration.

---

## Quick Reference

| Action                           | What It Does                              |
| -------------------------------- | ----------------------------------------- |
| **Copy**                         | Copies selected text in the Path bar      |
| **Select All**                   | Selects the entire path text              |
| **Copy Full Path (with Remote)** | Copies `remote:path` format (recommended) |
| **Paste**                        | Inserts clipboard text into the Path bar  |

The Copy Full Path feature looks simple, but for automation, scripting, and precise transfers, it’s one of the fastest productivity boosters in RcloneView.
