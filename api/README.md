# GoDaddy / PHP backend (admission form)

## Refresh / direct URL pe 500 na aaye

**Problem:** Koi bhi page refresh karne pe "500 Internal Server Error" aa raha ho.

**Fix:** Project mein **`public/.htaccess`** add hai. `npm run build` ke baad ye **`out`** folder ke andar copy ho jata hai. Upload karte waqt **`out`** ki **saari** contents (index.html, .htaccess, contact/, admissions/, etc.) site root pe daalo. .htaccess ki wajah se `/contact`, `/admissions` jaisi direct/refresh requests sahi file (e.g. contact/index.html) se serve Hongi, 500 nahi aayega.

---

## Option 1: Resend (recommended – free 3000 emails/month, works on GoDaddy)

1. Sign up at **[resend.com](https://resend.com)** (free).
2. Dashboard → **API Keys** → Create API Key → copy the key (starts with `re_`).
3. In **submit.php** (top config), set:
   ```php
   define('RESEND_API_KEY', 're_xxxxxxxx');  // your key
   ```
4. (Optional) In Resend dashboard add and verify domain **gi-smart.com** so emails show From: info@gi-smart.com. Without this, Resend may use a default sender.
5. Upload **submit.php** to GoDaddy. Form submit will send email via Resend (HTTPS, no SMTP port needed).

---

## Option 2: Formspree (no submit.php – form posts from browser)

If `submit.php` email never works (GoDaddy blocking SMTP, etc.):

1. Go to **[formspree.io](https://formspree.io)** and sign up (free).
2. Click **New form**, set email to **jasmeet@landmarkglobal.co.in**, create.
3. Copy the **Form ID** from the form URL (e.g. `https://formspree.io/f/xyzabc` → ID is `xyzabc`).
4. In the project root create or edit **`.env.local`** and add:
   ```env
   NEXT_PUBLIC_FORMSPREE_FORM_ID=xyzabc
   ```
   (Use your actual Form ID.)
5. Run **`npm run build`**, upload the **`out`** folder to GoDaddy as before.
6. Form will submit to Formspree; Formspree will email you. No `submit.php` or SMTP needed.

Free tier: 50 submissions/month. File uploads need a paid plan; form fields will still be emailed.

---

## Deploy on GoDaddy (with submit.php)

0. **Static build (one-time)** – GoDaddy runs only PHP/HTML, not Node. In `next.config.js` add:
   ```js
   output: 'export',
   ```
   Then run:
   ```bash
   set NEXT_PUBLIC_SUBMIT_URL=https://yourdomain.com/submit.php
   npm run build
   ```
   Upload the **`out`** folder (entire contents) to your hosting (e.g. `public_html`).

1. **Upload `submit.php`** to your hosting root (e.g. `public_html/submit.php` or same folder where your site is).

2. **Edit the config** at the top of `submit.php`:
   - `NOTIFICATION_TO` – already `jasmeet@landmarkglobal.co.in`
   - `FROM_EMAIL` – set to your domain email (e.g. `info@gismart.com` or `noreply@yourdomain.com`) so emails don’t go to spam
   - If PHP `mail()` doesn’t work on GoDaddy, set `USE_SMTP` to `true` and fill `SMTP_USER` / `SMTP_PASS` (Gmail app password or GoDaddy email)

3. **Frontend (build)** – point the form to this PHP URL when you build for GoDaddy:
   ```bash
   set NEXT_PUBLIC_SUBMIT_URL=https://yourdomain.com/submit.php
   npm run build
   ```
   Replace `yourdomain.com` with your real domain and the path where you uploaded `submit.php`.

4. Upload your built site (e.g. `out/` or `build/` folder) to GoDaddy. The form will POST to `submit.php` and you’ll get the email at `jasmeet@landmarkglobal.co.in` with attachments.
