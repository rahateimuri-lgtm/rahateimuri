# 👋 Hey Raha — this is your website, and now it's yours to run

Welcome! This little guide hands your portfolio website over to **you**, so it lives on **your own accounts** and nobody else has to babysit it. 

You do **not** need to know how to code. I promise. If you can post a carousel and use Canva, you can do this. We'll go slow, click by click. ☕

Here's the whole thing in one breath:

> Your website is just a **folder of files**. We're going to (1) put that folder in a free cloud locker called **GitHub**, (2) connect it to a free service called **Vercel** that turns the folder into a real, live website, and (3) put your own web address **rahateimuri.com** on top.

That's it. Three steps. Let's go.

---

## 🧠 First, the only 4 words you need to know

I'll use these a few times. No need to memorize — just so they're not scary:

| Word | What it actually means |
|------|------------------------|
| **Repository** (or "repo") | A folder, but stored in the cloud. Think "the Google Drive folder that holds your website." |
| **GitHub** | The free service that stores that folder. |
| **Vercel** | The free service that takes the folder and makes it a live website on the internet. |
| **Deploy** | A fancy word for "publish / make it live." |

Done. You now speak enough. 💅

---

## 📦 What you got

Sven sent you a file called **`raha-website.zip`**.

**Double-click it** to unzip it. You'll get a folder called **`raha`**. Inside are all the files that make up your website. Don't open or change anything in there yet — just know it's sitting on your computer (e.g. in Downloads or on your Desktop). We'll need it in a minute.

---

## ✅ What you need before starting

Two free accounts. Both take 2 minutes to make. Use the **same email** for both to keep life simple.

1. A **GitHub** account → https://github.com  
2. A **Vercel** account → https://vercel.com

You don't need to pay for anything. Your site fits comfortably in the free plans.

---

# PART 1 — Put your website into GitHub (the cloud locker)

The easiest way (no scary code windows) is a friendly little app called **GitHub Desktop**.

### Step 1.1 — Install GitHub Desktop
1. Go to **https://desktop.github.com**
2. Click the big download button, install it like any app, and open it.
3. When it asks you to sign in, **sign in (or sign up) with your GitHub account**. If you don't have one yet, it'll walk you through making one — just follow along.

### Step 1.2 — Add your website folder
1. In GitHub Desktop, click the top menu: **File → Add Local Repository…**
2. Click **Choose…** and select the **`raha`** folder you unzipped earlier. Click Open.
3. GitHub Desktop will say something like *"This directory does not appear to be a Git repository. Would you like to create one?"* — Click the blue link **"create a repository"**.
4. A little form appears. Leave everything as-is and click **Create Repository**.

### Step 1.3 — Publish it (upload to the cloud)
1. Now look at the top-right of the app for a button that says **Publish repository**. Click it.
2. A box pops up:
   - **Name**: you can leave it as `raha` or rename it to something like `raha-portfolio`. Your choice.
   - There's a checkbox **"Keep this code private."** Tick it if you want it private (recommended), or untick it if you don't mind people seeing the files. Either works.
3. Click **Publish repository**.

🎉 Wait a few seconds. Your whole website folder is now safely in your GitHub. Part 1 done!

*(If you ever want to see it: go to github.com, log in, and you'll find your `raha` repository there.)*

---

# PART 2 — Make it LIVE with Vercel (the part that feels like magic)

### Step 2.1 — Sign up the smart way
1. Go to **https://vercel.com** and click **Sign Up**.
2. Choose **"Continue with GitHub."** ← this is important, it links the two accounts so they talk to each other.
3. Click **Authorize** when it asks. (You're just giving Vercel permission to read your folder.)

### Step 2.2 — Import your website
1. Once you're in, click the **Add New…** button (top right) and choose **Project**.
2. You'll see a list of your GitHub repositories. Find **`raha`** (or whatever you named it) and click **Import** next to it.
   - *If you don't see it, click "Adjust GitHub App Permissions" / "Configure" and give Vercel access to the repo, then come back.*

### Step 2.3 — Deploy (= publish)
1. Vercel will show a settings screen. **You don't need to change anything.** It already knows what to do (it recognizes the website automatically).
2. Click the big **Deploy** button.
3. Wait about a minute while it does its thing (you'll see logs scrolling — totally normal, ignore them).
4. You'll get a **"Congratulations!"** screen with a screenshot of your site. Click **Continue to Dashboard**, then **Visit** (or the link ending in `.vercel.app`).

🎉🎉 **Your website is LIVE on the internet.** Right now it has an address like `raha-something.vercel.app`. That's a real, shareable link — send it to anyone.

Next we'll put your pretty address on it.

---

# PART 3 — Put your web address on it: rahateimuri.com

You have **two** web addresses:

- **`rahateimuri.com`** — you bought this on Porkbun. It is **100% yours**, in your own account. This is your main address. 👑
- **`raha.fyi`** — a little bonus Sven set up and is covering for a year. Nice to have, but `rahateimuri.com` is the one that's truly yours, so let's put *that* on your site.

Because `rahateimuri.com` is in **your** Porkbun account, **you can do this whole thing yourself** — no waiting on anyone.

There are two ways. Pick one.

---

### 🤖 Option A (recommended): let Claude do it for you

The same AI assistant that **built** this website (it's called **Claude Code**) can also connect your domain for you. You literally talk to it in normal English and it does the technical clicking.

> 💡 **What is Claude Code?** It's an AI helper that can read and change your website project for you. If it's set up on your computer, you open your `raha` project folder with it and just type. (If it isn't set up yet, this is the one tool worth installing once — search "Claude Code install" — and then you'll never need to touch scary settings again.)

Open your project with Claude Code and **paste this exactly**:

```
I'm not technical. I own the domain rahateimuri.com on Porkbun (my own account),
and this website is deployed on my own Vercel account. Please connect
rahateimuri.com AND www.rahateimuri.com to my Vercel project, end to end:

1. Add both domains to my Vercel project.
2. Read the EXACT DNS records Vercel asks for (use the project-specific values
   Vercel shows me, not generic ones).
3. Set those records on Porkbun for me. If you need a Porkbun API key + secret,
   tell me click-by-click where to create them. If you can't do it automatically,
   give me the exact records plus click-by-click Porkbun steps.
4. Make rahateimuri.com the primary domain, make www redirect to it, and update
   the site's canonical/sitemap to use rahateimuri.com.
5. Wait, then confirm it loads over https and tell me it's done.

Explain everything in plain language and assume I know zero technical terms.
```

Then just answer its questions (mostly "yes, go ahead"). It handles the scary parts. ✨

---

### ✋ Option B: do it yourself by hand (also totally fine)

**On the Vercel side:**
1. In Vercel, open your project, click **Settings** → **Domains**.
2. Type **`rahateimuri.com`** → **Add**. Then add **`www.rahateimuri.com`** too (if it offers to make www "redirect" to the main one, say yes).
3. Vercel now shows a little box of **DNS records** (an "A" record and/or a "CNAME" — some letters and numbers). **Leave this tab open** — you'll copy these *exact* values. Always use what Vercel shows you; the values are specific to your project.

**On the Porkbun side** (this is *your* account, so you have full access):
1. Go to **porkbun.com**, log in, find **rahateimuri.com**, and open its **DNS records** (look for "DNS" or "Details").
2. **Delete the default records Porkbun made** — any **A** record on the root, any **CNAME/ALIAS** on `www`, and any **"URL forwarding."** (These are just the parking page; they'll fight your site.)
3. **Add the records exactly as Vercel showed you** in that open tab:
   - the **root** record (Host left blank), and
   - the **www** record.
   Copy Vercel's values character-for-character.
4. **Save.** Now wait — anywhere from a few minutes to a couple of hours.
5. Back on Vercel's **Domains** screen, the domain turns into a green **✓ Valid** when it's connected. The little padlock (https) sets itself up automatically. ✅

> 🛜 **If it loads for everyone else but not on your own wifi:** that's just your home router remembering the old "this doesn't exist" answer. Restart your router, or check the site on your phone with wifi turned **off**. Not a real problem.

---

**About `raha.fyi`:** it's a freebie Sven runs for a year and it already points at the original site. Your real, fully-owned address is **rahateimuri.com** — share that one. If you ever want `raha.fyi` pointed at your project too, just paste a similar prompt to Claude (swap the domain name).

Until your domain finishes connecting, your `.vercel.app` link works perfectly — share that in the meantime.

---

# ✏️ How to change things later (this is the fun part)

Here's the beautiful part: **whenever you edit a file, your live website updates by itself in about a minute.** No re-deploying, no asking anyone. You edit → it saves → it's live.

The easiest way to make small text edits is right on the GitHub **website** (no apps):

### The universal "edit some text" recipe
1. Go to **github.com**, log in, open your **`raha`** repository.
2. Click your way into the file you want (folders open when you click them).
3. Click the **pencil icon ✏️** (top-right of the file) — this is "edit."
4. Change the words. **Only change the words inside the "quotation marks."** Leave the quotes, commas, and brackets alone.
5. Scroll down, click the green **Commit changes** button. (Commit = save.)
6. Wait ~1 minute, refresh your site. Done. 🪄

### Where your stuff lives (plain English)

**Your contact info, bio, tools, and services**
→ File: **`src` → `data` → `site.ts`**
This holds your email, phone, LinkedIn link, your "About" bio, the tools list, and the little service descriptions. To change your email, find the line with your email and change what's between the quotes. Easy.

**Your case studies (the project stories)**
→ Folder: **`src` → `content` → `projects`**
There's one file per project (e.g. `monetization.mdx`, `viral-videos.mdx`). Open one and you'll see:
- A top section between two `---` lines = the settings (the big stat number, the links, the little tags). 
- Below that = the actual story (Context / What I did / Result). 
You can rewrite the story freely. In the settings, just change the words inside quotes (e.g. the stat or a link).

**Your CV (the PDF people download)**
→ Folder: **`public`**, file named **`raha-teimuri-cv.pdf`**
To swap in a new CV: delete that file and upload your new one, but **name it exactly `raha-teimuri-cv.pdf`** (same name!). 
⚠️ *Small note:* the little preview picture of the CV won't refresh by itself. Easiest fix — open the project with Claude and paste:
```
I replaced my CV at public/raha-teimuri-cv.pdf. Please regenerate the
first-page preview image so the website shows the new one, then redeploy.
```

**Your photos**
→ Folder: **`public` → `img`** (and your portrait is also in `src` → `assets`)
Swapping photos is a touch more advanced (the file names have to match exactly). Easiest by far — open the project with Claude, drop your new image in, and paste:
```
Here's a new photo. Please use it as my portrait (or in [wherever]) on the
site, resize/optimize it properly, keep everything working, and redeploy.
```

---

# 😅 "Help, I think I broke it"

You almost certainly didn't, and even if a change looks wrong, **nothing is ever permanently broken** — every old version is saved and you can snap back in seconds:

1. Go to your project in **Vercel**.
2. Click **Deployments** (top menu).
3. Find the version from *before* your change (they're listed by time, each with a ✓).
4. Click the **`···`** menu on the right of that one → **Promote to Production** (some accounts call it "Rollback").
5. Your site is instantly back to that older, working version. 😮‍💨

So: experiment freely. The undo button is always there.

---

# ❓ Quick FAQ

**Does any of this cost money?**
GitHub: free. Vercel: free for a personal site like this. The `raha.fyi` address: Sven's covering it for a year.

**Is my site fast / can it handle a lot of visitors?**
Yes — it's built to be very fast and can handle big spikes (great for when a post pops off).

**Do I need to keep my computer on?**
Nope. Once it's live on Vercel, it lives on the internet 24/7 on its own.

**Can I edit from my phone?**
You can do small text edits via the GitHub website on a phone browser, but it's comfiest on a laptop.

**Do I have to renew my domain?**
`rahateimuri.com` is yours — keep it by renewing it on Porkbun once a year (it's cheap, about the price of two coffees ☕☕). Porkbun emails you a reminder; you can also turn on auto-renew in your Porkbun account so you never think about it. `raha.fyi` is just a bonus Sven covers for a year — if it ever lapses, no big deal, your real address `rahateimuri.com` keeps working and nothing disappears.

**Something's confusing / I'm stuck / I want to change something I can't find.**
Open the project with **Claude** and just describe what you want in plain English — it built this entire site, so it can change literally anything for you. For example:
```
Make the [section] say [new text] instead. Then publish it.
```
or
```
I want to [whatever you're imagining]. Walk me through it and just do it for me.
```
No need to know the right words — describe it like you'd explain it to a friend. 💬

---

You've got this, gurl. Go make it yours. 🚀
