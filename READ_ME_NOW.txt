I have fixed the "<a> cannot be a descendant of <a>" hydration error.

I removed the redundant `<Link>` wrappers from:
- `app/(site)/destination/DestinationList.tsx`
- `app/(site)/tips/page.tsx`

The `DestinationCard` and `TipsCard` components already contained links, causing the nesting issue. The pages should now load correctly.
