# Codebase Cleanup Audit Report

**Date:** November 21, 2025  
**Purpose:** Identify unused pages, components, and sections for potential removal to maintain a clean, efficient codebase.

---

## 📊 Executive Summary

This audit identified **significant cleanup opportunities** across the codebase:

- **2 complete archived page directories** ready for deletion
- **2 legacy page versions** (v2 files) that can be removed
- **15+ section components** that are imported but commented out/unused
- **2 data files** that are only referenced in archived pages
- **Multiple shared components** that are imported but never used

**Estimated cleanup:** ~5,000+ lines of unused code

---

## 🗑️ HIGH PRIORITY: Archived Pages (Safe to Delete)

### 1. Blog Archive Directory

**Path:** `/app/blog.archived/`

**Status:** ✅ Complete directory marked as archived

**Files:**

- `page.tsx` (378 lines)
- `metadata.ts`

**Details:**

- Fully functional blog page with carousel, filtering, and grid layout
- Uses placeholder content (dummy blog posts)
- No active navigation links to this page
- Directory name clearly indicates archived status

**Recommendation:** **DELETE ENTIRE DIRECTORY**  
**Risk Level:** ⚠️ LOW - Clearly archived, no dependencies

---

### 2. Resources Archive Directory

**Path:** `/app/resources.archived/`

**Status:** ✅ Complete directory marked as archived

**Files:**

- `page.tsx` (825 lines - massive resources directory page)
- `page-full.tsx` (alternative version)
- `layout.tsx`
- `metadata.ts`

**Details:**

- Comprehensive AI tools directory with 100+ tools across 17 categories
- Beautiful Netflix-style carousel interface
- Only referenced in blog archive CTA (which is also archived)
- Directory name clearly indicates archived status

**Recommendation:** **DELETE ENTIRE DIRECTORY**  
**Risk Level:** ⚠️ LOW - Clearly archived, dependencies only in other archived files

**Note:** Consider if you want to revive this feature in the future - it's a complete, polished implementation

---

## 🔄 MEDIUM PRIORITY: Legacy/Duplicate Pages

### 3. Legacy Case Study V2 Files

**Paths:**

- `/app/case-studies/legacy-repairs-remodeling-v2/page.tsx` (3,007 lines)
- `/app/customer-stories/legacy-repairs-remodeling-v2/page.tsx` (likely similar)

**Status:** ⚠️ V2 versions suggest these are outdated

**Details:**

- These are full-page implementations for a single case study client
- "V2" in filename suggests an older version
- The main case studies page uses dynamic routing with `/[slug]/` instead
- Uses inline data instead of pulling from `caseStudies.ts` data file

**Current Case Study System:**

- Main pages use dynamic routing: `/case-studies/[slug]/page.tsx`
- Data comes from `/data/caseStudies.ts`
- Uses proper data-driven approach

**Recommendation:** **DELETE V2 FILES** after confirming the dynamic slug pages cover this content  
**Risk Level:** ⚠️ MEDIUM - Verify content is available via slug routing first

**Action Required:** Check if "legacy-repairs-remodeling" exists as a proper case study slug

---

## 📦 MEDIUM PRIORITY: Unused Section Components

### 4. Home Page Sections (Commented Out)

These sections are **imported** in `/app/page.tsx` but **commented out** in the JSX:

#### Currently Commented Out:

1. **CustomGPTIntro2** - "ChatGPT is intelligent but it doesn't know you"
2. **FitFlowchart** - "Is Piecewise Right for You?"
3. **ToolsPartnership** - "Tools That Work With You"
4. **PartnershipShowcase** - "Home Services, Commercial Services, etc."
5. **WhatWeOffer** - General offering section
6. **Benefits** - "How Our CustomGPTs Help You"
7. **Explainer** - "What is a CustomGPT?"
8. **UseCases** - "Real-World Examples"
9. **Testimonial** - Success stories section (different from testimonials)
10. **MissionStatement** - Mission statement section
11. **BlogPreview** - Blog preview section
12. **ContactFAQ** - Dark background accordion FAQ

#### Also Imported but Unused:

- **QualificationFlowchart** - Not even commented out, just imported

**Files to Consider:**

```
sections/home/CustomGPTIntro.tsx
sections/home/CustomGPTIntro2.tsx
sections/home/FitFlowchart.tsx
sections/home/ToolsPartnership.tsx
sections/home/PartnershipShowcase.tsx
sections/home/WhatWeOffer.tsx
sections/home/Benefits.tsx
sections/home/Explainer.tsx
sections/home/UseCases.tsx
sections/home/MissionStatement.tsx
sections/home/BlogPreview.tsx
sections/home/QualificationFlowchart.tsx
```

**Recommendation:**

- **ARCHIVE** these files to a `/sections/home/archived/` subdirectory first
- Or **DELETE** if you're confident they won't be reused
- Remove imports from `/app/page.tsx`

**Risk Level:** ⚠️ MEDIUM-LOW - Already not being used, but may want to reference later

---

### 5. About Page Sections (Commented Out)

These sections are **imported** in `/app/about/page.tsx` but **commented out**:

1. **CoreValues** - Core values section
2. **MissionVision** - Mission and vision section
3. **AboutIntro** - "Why This Exists" section
4. **FounderNote** - Founder's note section

**Files to Consider:**

```
sections/about/CoreValues.tsx
sections/about/MissionVision.tsx
sections/about/AboutIntro.tsx
sections/about/FounderNote.tsx
```

**Also Unused (Imported but Never Referenced):**

- **AboutCTA** - Custom about page CTA
- **TeamMembers** - Team members section
- **ClientTestimonials** - Client testimonials
- **CompanyValues** - Company values section

**Files to Consider:**

```
sections/about/AboutCTA.tsx
sections/about/TeamMembers.tsx
sections/about/ClientTestimonials.tsx
sections/about/CompanyValues.tsx
```

**Recommendation:**

- **ARCHIVE** to `/sections/about/archived/`
- Or **DELETE** if certain they won't be used

**Risk Level:** ⚠️ MEDIUM-LOW

---

### 6. Contact Page Sections (Unused)

These sections are **exported** in `/sections/contact/index.ts` but **never imported anywhere**:

1. **ContactCallSteps** - Call steps component
2. **ContactAlt** - Alternative contact layout
3. **ContactDetails** - Contact details section

**Files to Consider:**

```
sections/contact/ContactCallSteps.tsx
sections/contact/ContactAlt.tsx
sections/contact/ContactDetails.tsx
```

**Currently Active Contact Sections:**

- ContactIntro ✅
- ContactOptions ✅
- ContactForm ✅
- ContactFAQ (archived on homepage)
- ContactFAQSimple ✅

**Recommendation:** **DELETE** these unused contact sections  
**Risk Level:** ⚠️ LOW - Never imported anywhere in active code

---

### 7. Shared Sections (Potentially Unused)

**Path:** `/sections/shared/`

#### Comparison Component

- **File:** `Comparison.tsx`
- **Usage:** Only imported in `/app/about/page.tsx` and commented out
- **Also:** Referenced in legacy v2 case study pages

**Recommendation:**

- Move to archived if you're archiving about sections
- Or delete if removing legacy v2 pages

#### Testimonials vs Testimonial

- **Testimonials.tsx** - Exported but usage unclear
- **Testimonial.tsx** - Used in commented-out sections

**Recommendation:** Audit both testimonial components for actual usage

---

## 📄 LOW PRIORITY: Data Files

### 8. Data File Cleanup

**Files Potentially Affected:**

1. **`/data/homePageData.ts`**
   - Exports data for Benefits, Explainer, UseCases
   - Only used if those sections are re-enabled
   - **Keep for now** (data is small, may be referenced later)

2. **`/data/aboutPageData.ts`**
   - Exports data for archived about sections
   - Only used if those sections are re-enabled
   - **Keep for now** (data is small, may be referenced later)

3. **`/data/aiTools.ts`**
   - Large file with 100+ AI tools
   - Only used in `resources.archived/`
   - **DELETE** if resources directory is removed

4. **`/data/faqData.ts`**
   - Check if this is used in ContactFAQSimple (which IS active)
   - **Keep if in use**

**Recommendation:** Delete `aiTools.ts` only if resources.archived is deleted

---

## 🎯 Recommended Cleanup Order

### Phase 1: Safe Deletions (Do Immediately)

1. ✅ Delete `/app/blog.archived/` directory
2. ✅ Delete `/app/resources.archived/` directory
3. ✅ Delete `/data/aiTools.ts` (after resources deleted)
4. ✅ Delete unused contact sections:
   - `sections/contact/ContactCallSteps.tsx`
   - `sections/contact/ContactAlt.tsx`
   - `sections/contact/ContactDetails.tsx`

**Estimated Cleanup:** ~2,000+ lines

### Phase 2: Verify & Delete Legacy Pages

1. ⚠️ Verify `legacy-repairs-remodeling` exists as proper slug route
2. ✅ Delete `/app/case-studies/legacy-repairs-remodeling-v2/` directory
3. ✅ Delete `/app/customer-stories/legacy-repairs-remodeling-v2/` directory

**Estimated Cleanup:** ~3,000+ lines

### Phase 3: Archive or Delete Unused Sections

1. 📦 Create `sections/home/archived/` directory
2. 📦 Create `sections/about/archived/` directory
3. 📦 Move commented-out sections to archived folders
4. 🧹 Clean up imports in page files
5. 🧹 Update index.ts exports

**Estimated Cleanup:** ~2,000+ lines (or just organized better)

### Phase 4: Final Cleanup

1. 🗑️ Remove unused data files if their sections are gone
2. 🧹 Clean up section index.ts exports
3. 📝 Update documentation

---

## 🔍 Additional Observations

### Duplicate Concepts

- **Two FAQ Components:** `ContactFAQ` (dark) vs `ContactFAQSimple` (light)
  - Both exist, one is used, one is commented out
  - Consider deleting the unused one

- **Two Logo Strip Components:** One in `home/`, one in `shared/`
  - Verify which is actually being used

- **Two Testimonial Components:** `Testimonial` vs `Testimonials`
  - Check actual usage patterns

### Import Patterns to Fix

After cleanup, you'll need to:

1. Remove unused imports from `/app/page.tsx`
2. Remove unused imports from `/app/about/page.tsx`
3. Update `/sections/home/index.ts`
4. Update `/sections/about/index.ts`
5. Update `/sections/contact/index.ts`
6. Update `/data/index.ts` if deleting aiTools

---

## 📝 Before You Delete: Backup Checklist

✅ **Create a git branch** for this cleanup work  
✅ **Commit current state** before any deletions  
✅ **Consider creating a `/archived` directory** at root to move (not delete) major features  
✅ **Test the site** after each phase  
✅ **Check for broken imports** with TypeScript  
✅ **Verify no broken links** in navigation

---

## 🎉 Expected Benefits After Cleanup

1. **Reduced Repository Size** - ~5,000+ fewer lines
2. **Clearer Codebase** - Only active code remains
3. **Faster Development** - Less confusion about what's in use
4. **Better Performance** - Smaller bundle sizes (unused imports removed)
5. **Easier Maintenance** - Less code to maintain and update
6. **Better IDE Performance** - Faster autocomplete and navigation

---

## ❓ Questions to Answer Before Cleanup

1. **Resources Page:** Do you plan to bring back the AI tools directory?
   - If YES: Keep `resources.archived/` and `aiTools.ts`
   - If NO: Delete immediately

2. **Blog:** Do you plan to have a blog in the future?
   - If YES: Keep `blog.archived/`
   - If NO: Delete immediately

3. **Archived Sections:** Any of these you're actively considering re-enabling?
   - Make a list and only archive those, delete the rest

4. **Legacy Case Studies:** Confirm the v2 versions are truly obsolete
   - Check that slug routing covers all needed content

---

## 🚀 Ready to Start?

I can help you execute this cleanup in phases. Just let me know:

1. Which phase you'd like to start with
2. Whether you want me to delete or archive components
3. If you need me to verify anything specific first

**Recommended First Step:** Start with Phase 1 (Safe Deletions) - these are clearly marked as archived and safe to remove.
