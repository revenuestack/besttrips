# BestTrips.org Deployment Checklist

## Status: 🔄 In Progress

### ✅ Completed
- [x] Repository created and code pushed to GitHub
- [x] Local build tested successfully (Next.js static export)
- [x] First travel guide page validated (Lyon family hotels)
- [x] Pre-commit syntax validation in place

### 🔄 In Progress
- [ ] Cloudflare Pages project created
- [ ] D1 database created and migrated
- [ ] D1 bound to Pages project
- [ ] Custom domain configured (besttrips.org)
- [ ] First deployment live

---

## Step-by-Step Deployment

### 1. Create Cloudflare Pages Project

**Via Dashboard:**
1. Go to: https://dash.cloudflare.com/
2. Navigate to: Workers & Pages → Create application → Pages → Connect to Git
3. Select repository: `revenuestack/besttrips`
4. Configure build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npx @cloudflare/next-on-pages`
   - **Build output directory:** `.vercel/output/static`
   - **Root directory:** (leave empty)
   - **Environment variables:** None needed initially
5. Click "Save and Deploy"

**Expected result:** First build will start automatically. Should complete in ~2-3 minutes.

---

### 2. Create D1 Database

```bash
# Create the database
wrangler d1 create besttrips-db

# Expected output will include:
# database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

# Copy that ID and update wrangler.toml:
# Replace "database_id = 'TBD'" with the actual ID

# Run migration to create tables
wrangler d1 execute besttrips-db --file=migrations/0001_init.sql --remote

# Verify tables created
wrangler d1 execute besttrips-db --command="SELECT name FROM sqlite_master WHERE type='table';" --remote
```

**Expected tables:**
- destinations
- places
- content_pages

**Sample data included:**
- 1 destination (Lyon, France)
- 5 sample hotels for testing

---

### 3. Update wrangler.toml with Database ID

After creating D1 database, update `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "besttrips-db"
database_id = "YOUR-ACTUAL-DATABASE-ID-HERE"  # Replace this
```

Commit and push the change:
```bash
git add wrangler.toml
git commit -m "Add D1 database ID to wrangler config"
git push origin main
```

---

### 4. Bind D1 to Cloudflare Pages

**Via Dashboard:**
1. Go to: Cloudflare Pages → besttrips → Settings
2. Navigate to: Functions → D1 database bindings
3. Click "Add binding"
4. Configure:
   - **Variable name:** `DB`
   - **D1 database:** Select `besttrips-db` from dropdown
5. Click "Save"

**Note:** Pages will redeploy automatically after binding is added.

---

### 5. Configure Custom Domain

**Via Dashboard:**
1. Go to: Cloudflare Pages → besttrips → Custom domains
2. Click "Set up a custom domain"
3. Enter: `besttrips.org`
4. Click "Continue"
5. Cloudflare will automatically configure DNS

**Expected result:** Site accessible at https://besttrips.org within 5-10 minutes.

---

### 6. Verify Deployment

**Test these URLs:**

✅ **Homepage:**
- https://besttrips.org
- Should show landing page with destination cards

✅ **First guide page:**
- https://besttrips.org/best-hotels-families-lyon
- Should render complete Lyon family hotels guide (2,000+ words)

✅ **Build status:**
- Check Cloudflare Pages dashboard for green deployment badge

---

## Post-Deployment Configuration

### GitHub Actions (Optional)

If you want build notifications, add GitHub Actions workflow:

```yaml
name: Notify on Deploy

on:
  push:
    branches: [main]

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Cloudflare Pages build
        run: echo "Cloudflare Pages will auto-build and deploy"
```

### Environment Variables (When Needed)

Future additions (not needed for initial launch):
- `GOOGLE_ANALYTICS_ID` - For analytics tracking
- `AWIN_API_KEY` - If integrating affiliate links
- `SENTRY_DSN` - For error tracking

Add via: Pages → Settings → Environment variables

---

## Troubleshooting

### Build Fails
- Check build logs in Cloudflare Pages dashboard
- Verify `package.json` has correct dependencies
- Test build locally: `npm run build`

### Pages Show 404
- Verify build output directory is `.vercel/output/static`
- Check that `next.config.js` has `output: 'export'`
- Ensure trailing slashes configured: `trailingSlash: true`

### D1 Connection Fails
- Verify D1 binding is configured (Variable name: `DB`)
- Check database_id in wrangler.toml matches actual D1 database
- Confirm migration ran successfully

---

## Agent Generation System (Next Phase)

Once deployment is validated, we can enable autonomous content generation:

### Prerequisites
- [ ] Site deployed and accessible
- [ ] D1 database populated with destinations/places
- [ ] First test page confirmed working

### Setup Steps
1. Create sub-agent prompt template
2. Build queue management system
3. Test with 5 pages
4. Enable autonomous generation

**Location:** See `/root/.openclaw/workspace/besttrips-plan.md` for full generation system design.

---

## Monitoring

**Health checks to implement:**
- [ ] Automated deployment monitoring (every 15 min)
- [ ] Page accessibility tests (HTTP 200 checks)
- [ ] Build failure alerts
- [ ] Content quality validation

**Daily reports:**
- Pages deployed
- Build success rate
- Traffic metrics (once analytics enabled)

---

## Current Status

**Last updated:** 2026-02-05 15:11 UTC

**Repository:** https://github.com/revenuestack/besttrips
**Target domain:** besttrips.org
**Cloudflare Account:** b5fe2730abe939760f63f12da4ba1def

**Next action:** Create Cloudflare Pages project and connect to GitHub repository.
