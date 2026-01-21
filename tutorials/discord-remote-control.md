---
sidebar_position: 11
description: Use Discord Remote Control in RcloneView to receive job notifications and remotely list, start, stop, and check job status from Discord.
keywords:
  - rcloneview
  - discord remote control
  - discord bot
  - job notifications
  - remote job control
  - rclone job manager
tags:
  - RcloneView
  - Tutorial
  - Discord
  - Remote-Control
  - Job-Management
date: 2026-01-20
author: steve
---

# RcloneView Discord Remote Control

Discord Remote Control lets you receive RcloneView job notifications and control jobs directly from Discord — without sitting in front of your PC.

This tutorial covers:

- Creating a Discord application and bot
- Setting the Installation Context to **Guild Install**
- Getting the required IDs (Bot Token, Application ID, Discord User ID)
- Enabling Discord Remote Control in RcloneView
- Using Discord commands to list/start/stop jobs and check status

---

## What is Discord Remote Control?

Discord Remote Control is a built-in RcloneView feature that allows you to:

- Receive real-time notifications for job start, completion, and errors
- List registered jobs
- Start a job remotely
- Stop a running job
- Check job progress and status on demand

As long as RcloneView is running, you can manage your cloud jobs from your Discord client.

---

## Requirements

- RcloneView installed and running (Desktop or Headless)
- A Discord account
- Permission to create and install a Discord bot in a server (Guild Install)
- Internet connection

---

## Step 1: Create a Discord Application and Bot

### Step 1-1 Open the Discord Developer Portal

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click **New Application** and name it (e.g., `RcloneView`).
   <img src="/support/images/en/tutorials/discord/discord-new-application.png" class="img-large img-center" />

### Step 1-2 Set Installation Context to Guild Install

1. In the left menu, open **Installation**.
2. Under **Installation Contexts**, select **Guild Install**. (Disable User Install if it is on.)
3. Save your changes.
   <img src="/support/images/en/tutorials/discord/discord-installation-context.png" class="img-large img-center" />

### Step 1-3 Add a Bot and issue the Bot Token

1. Open the **Bot** tab.
2. Click **Add Bot** and confirm.
3. Click **Reset Token** (or **Copy Token**) to get your **Discord Bot Token**. Keep it secret.
   <img src="/support/images/en/tutorials/discord/discord-bot-token.png" class="img-large img-center" />

### Step 1-4 Allow the bot to read messages (recommended)

If you plan to send text commands (instead of slash commands), enable **MESSAGE CONTENT INTENT** in the Bot tab so RcloneView can read your command text in DMs or channels.
   <img src="/support/images/en/tutorials/discord/discord-privileged-intent.png" class="img-large img-center" />

---

## Step 2: Install the Bot to Your Discord Server

1. Open **OAuth2 > URL Generator**.
2. Select scopes such as **bot** (and **applications.commands** if you use slash commands).
3. In **Bot Permissions**, choose **Send Messages** and **Use Slash Commands**.
4. Copy the generated URL, open it, pick the server, and authorize. The bot now lives in that guild.

---

## Step 3: Collect the Values RcloneView Needs

- **Discord Bot Token**: From **Bot** tab (Step 1-3).
- **Discord Application ID**: From **General Information** in the Developer Portal.
- **My Discord User ID (Snowflake)**: A long number that uniquely identifies you.

### How to get your Discord User ID

To get your `Discord User ID`, first enable Developer Mode:

1. Open Discord (Desktop or Web).
2. Click **User Settings** (⚙️) at the bottom left.
3. In **App Settings**, open **Advanced**.
4. Toggle **Developer Mode** to **On**.

Then copy your ID:

1. Right-click your **Profile Picture** or **Username** (in the bottom left or in a chat/member list).
2. Click **Copy User ID**.
3. Save the long numeric string (example: `123456789012345678`).
   <img src="/support/images/en/tutorials/discord/discord-copy-userid.png" class="img-large img-center" />

Why is this ID needed?

- Security: Only commands from your account are processed by the Flutter app.
- Direct Notifications: The bot knows exactly which user to send DMs to when a job starts or fails.

---

## Step 4: Enable Discord Remote Control in RcloneView

### Step 4-1 Open Settings

1. Launch RcloneView.
2. Go to **Settings** -> **Interfaces & Notifications**.

### Step 4-2 Enter credentials

1. Toggle on **Discord Remote Control**.
2. Enter:
   - **Discord Bot Token**: `...`
   - **Discord Application ID**: From **General Information**.
   - **My Discord User ID**: `123456789012345678`

### Step 4-3 Send a test message

Click **Send Test Message**. If successful, you will receive a DM from the bot in Discord.
   <img src="/support/images/en/tutorials/discord/discord-test-message-received.png" class="img-large img-center" />

---

## Step 5: Discord Commands (Job Control)

Send commands to the bot (DM is recommended for privacy, but you can also use a channel where the bot is present and you have permission to run it).

### `/help`

Shows all available commands.

### `/joblist`

Lists jobs for the currently selected connection.

### `/start <jobName>`

Starts a specific job by its name.

### `/start #<number>` (Recommended)

Starts a job using the index from the latest `/joblist` result (example: `/start #1`).

### `/stop <JobId>`

Stops a running job.

### `/jobstatus <JobId>`

Checks the real-time progress and statistics of a specific job.

---

## Automatic Job Notifications

Once enabled, RcloneView automatically sends notifications for:

- Job started
- Job completed successfully
- Job failed with an error

---

## Security Notes

- Commands are only processed if they come from the configured **Discord User ID**.
- Keep your **Discord Bot Token** and **Application ID** private.
- If you need to pause remote control, simply turn off the toggle in settings.

---

## Summary

Discord Remote Control lets you operate long-running transfers without being at your PC:

- Remote job management from Discord
- Real-time status updates through notifications
- Instant control via mobile or desktop Discord

Set it up once and manage your cloud automation from anywhere.
