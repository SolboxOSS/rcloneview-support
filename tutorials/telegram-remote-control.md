---
sidebar_position: 9
description: Use Telegram Remote Control in RcloneView to receive job notifications and remotely list, start, stop, and check job status from Telegram.
keywords:
  - rcloneview
  - telegram remote control
  - telegram bot
  - job notifications
  - remote job control
  - rclone job manager
tags:
  - RcloneView
  - Tutorial
  - Telegram
  - Remote-Control
  - Job-Management
date: 2025-12-17
author: tayson
---

# RcloneView Telegram Remote Control

Telegram Remote Control lets you receive RcloneView job notifications and control jobs directly from Telegram — without sitting in front of your PC.

This tutorial covers:

- Creating a Telegram bot (BotFather)
- Finding your Telegram Chat ID
- Enabling Telegram Remote Control in RcloneView
- Using Telegram commands to list/start/stop jobs and check status
- Practical examples and security notes

---

## What is Telegram Remote Control?

Telegram Remote Control is a built-in RcloneView feature that allows you to:

- Receive job start/completion/error notifications
- List jobs
- Start a job remotely
- Stop a running job
- Check job progress/status

If RcloneView is running, you can manage jobs with just your phone.

---

## Requirements

- RcloneView installed and running
- A Telegram account
- Internet connection
- Permission to create a Telegram bot (via BotFather)

---

## Step 1 Create a Telegram Bot (BotFather)

### Step 1-1 Open BotFather

1. Open Telegram.
2. Search for **BotFather**.
3. Open the BotFather chat.

<img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

### Step 1-2 Create a new bot

Use BotFather to create a new bot and set:

- **Bot Name** (display name)
- **Bot Username** (must end with `bot`)

Example:

- Bot Name: `RcloneView_test_bot`
- Bot Username: `rcloneview_test_bot`

<img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

### Step 1-3 Save your bot token (Important)

After the bot is created, BotFather gives you a token like:

```
123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::caution Keep the token secret
This token is required in RcloneView settings. Do not share it publicly.
:::

<img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

---

## Step 2 Start Your Bot in Telegram (Important)

You must start a chat with your bot before you can retrieve your Chat ID via `getUpdates`.

### Step 2-1 Search for your bot

1. Search your bot by name or username.
2. Open the bot chat.

<img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

### Step 2-2 Press Start and send a message

1. Click **Start** (or send `/start`).
2. Send one more message (example: `hi`).

This creates an update record that you can later read from Telegram.

<img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

---

## Step 3 Find Your Telegram Chat ID

### Step 3-1 Open getUpdates in a browser

Open this URL (replace with your token):

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

### Step 3-2 Extract `chat.id`

In the JSON response, find:

```json
"chat": {
  "id": 987654321
}
```

Your **Chat ID** is the number in `chat.id` (example: `987654321`).

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

---

## Step 4 Enable Telegram Remote Control in RcloneView

### Step 4-1 Open settings

1. Open RcloneView.
2. Go to **Settings**.
3. Select **Interfaces & Notifications**.
4. Find **Telegram Remote Control**.

### Step 4-2 Turn it on

Enable **Telegram Remote Control**:

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

### Step 4-3 Enter Token and Chat ID

- **Telegram Bot Token**: from BotFather
- **Telegram Chat ID**: from `getUpdates`

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

### Step 4-4 Send a test message

Click **Send Test Message**. If it works, you will receive:
`RcloneView Telegram Test Message`

<img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

---

## Step 5 Telegram Commands (Job Control)

Type these commands in your Telegram chat with the bot.

### `/help`

Shows all available commands:

```
/help
```

<img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

### `/listjobs`

Lists jobs for the currently selected connection:

```
/listjobs
```

Example output:

```
Total: 3
1) Backup_Photos
2) Sync_Documents
3) Archive_To_NAS
```

<img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

### `/start <jobName>`

Starts a job by name:

```
/start Backup_Photos
```

:::note Job name must match exactly
Use `/listjobs` to copy the exact job name.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

### `/start --index <number>` (Recommended)

Starts a job by index from the latest `/listjobs` result:

```
/start --index 2
```

:::important Run `/listjobs` first
The index is based on the current job list output.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

### `/stop <jobId>`

Stops a running job:

```
/stop 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

### `/status <jobId>`

Shows progress for a running job:

```
/status 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

---

## Automatic Job Notifications

When Telegram Remote Control is enabled, RcloneView can automatically send notifications for:

- Job started
- Job completed successfully
- Job failed with an error

<img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram job notifications" class="img-large img-center" />

---

## Security Notes

- Commands are processed only from the configured **Chat ID**.
- Keep your **Bot Token** private. Treat it like a password.
- If you want to pause remote control, turn off the switch in settings.

---

## Summary

Telegram Remote Control makes RcloneView easier to operate for long-running jobs:

- Manage jobs remotely
- Stay informed with real-time notifications
- Control jobs from mobile without opening your PC

Try it when you run scheduled backups, syncs, or large transfers and want visibility anywhere.
