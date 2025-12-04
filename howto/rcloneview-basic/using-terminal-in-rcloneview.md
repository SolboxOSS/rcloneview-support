---
sidebar_position: 13
description: Run rclone CLI commands directly inside RcloneView’s built-in Terminal for testing, managing remotes, and troubleshooting.
keywords:
  - rcloneview
  - rclone
  - terminal
  - cli
  - remote management
  - troubleshooting
  - rclone config
tags:
  - RcloneView
  - Terminal
  - CLI
  - rclone
  - troubleshooting
date: 2025-12-04
author: tayson
---

# Using the Terminal in RcloneView

RcloneView includes a built-in Terminal so you can run full `rclone` CLI commands without opening CMD, PowerShell, or a system shell. It is ideal for quick tests, managing remotes, or capturing logs while staying inside the app.

This guide covers how to open the Terminal, run `rclone` commands, expand/shrink the view, and use copy options to share results.

---

## Open the Terminal

- Click the **`Terminal`** tab at the bottom of RcloneView.  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="terminal bottom" class="img-medium img-center" />
- The Terminal works like the standard `rclone` command-line interface and runs commands in the current RcloneView context.

---

## List Available rclone Commands

Type rclone and press the space bar to automatically display all supported commands.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="terminal input rclone" class="img-medium img-center" />

---

## View Help and Remote Details (`rclone about`)

- For general help on `about`:  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about.png" alt="terminal input rclone about" class="img-medium img-center" />
- To get storage info for a specific remote (example: `mygoogle`):
  ```bash
  rclone about "mygoogle:"
  ```
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="terminal input rclone about my google" class="img-medium img-center" />

Result example:  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle-result.png" alt="terminal about my google result" class="img-medium img-center" />

---

## List All Configured Remotes

Use the `listremotes` command to confirm which remotes are available:

```bash
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes" class="img-medium img-center" />

---

## Expand or Shrink the Terminal View

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="terminal expand" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="terminal shrink" class="img-medium img-center" />
</div>

- **Expand**: Switch to full-screen Terminal for long outputs.
- **Shrink**: Return to the default layout.

---

## Create a Remote via CLI (`rclone config create`)

Example: create a Google Drive remote named `mygoogledrive` and verify it:

```bash
rclone config create mygoogledrive drive
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="rclone config create drive" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-check.png" alt="rclone config create check" class="img-medium img-center" />

---

## Copy, Paste, and Copy All

Select any Terminal output to open the context menu and choose **Copy**, **Paste**, or **Copy All**.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="terminal select copy" class="img-medium img-center" />

This is helpful for sharing logs with support or saving results to documentation.

---

## Recommended Use Cases

- Test advanced `rclone` commands (`lsf`, `tree`, backend flags) before automating.
- Validate scripts or server-side commands inside RcloneView.
- Quickly manage or create remotes when the GUI path is slower.

:::caution Be careful with destructive commands
Commands such as `delete`, `purge`, or incorrect `sync` flags can remove data permanently. Double-check paths and remotes before running them in the Terminal.
:::
