# Deploying pakfiler.online to Cloudflare Pages

This Next.js website is pre-configured with `output: 'export'` for 100% static edge hosting on Cloudflare Pages. This delivers sub-millisecond loading worldwide, zero server costs, and extreme reliability.

---

## Quick Method 1: Direct Upload using Wrangler CLI (Fastest, 1 Minute)

1. Open your terminal in the project directory:
   ```bash
   cd C:\Users\Master\.gemini\antigravity\scratch\pakfiler-online
   ```

2. Build the website:
   ```bash
   npm run build
   ```

3. Deploy the `out` directory directly to Cloudflare Pages:
   ```bash
   npx wrangler pages deploy out --project-name=pakfiler-online
   ```
   *(If it's your first time running Wrangler, it will prompt you to log into your Cloudflare account in your browser).*

---

## Quick Method 2: Git Integration via Cloudflare Dashboard (Automatic CI/CD)

1. Push this project repository to your GitHub or GitLab account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for pakfiler.online"
   git remote add origin https://github.com/<your-username>/pakfiler-online.git
   git push -u origin main
   ```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) ➔ **Compute (Workers & Pages)** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
3. Select your repository `pakfiler-online`.
4. Configure Build Settings:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Click **Save and Deploy**. Cloudflare will automatically build and publish your site at `<your-project>.pages.dev` and on your custom domain `pakfiler.online`.

---

## Adding Custom Domain (`pakfiler.online`)

1. In your Cloudflare Pages project dashboard, click the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `pakfiler.online` (or `www.pakfiler.online`).
4. Cloudflare will automatically configure the SSL/TLS certificate and DNS routing.

---

## Local Development & Testing

To run the live development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

To test the production static export locally:
```bash
npx serve out
```
