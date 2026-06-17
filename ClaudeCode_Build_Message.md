# Claude Code build message — Magic Speed Cleaning Services LLC

Finalize the **Magic Speed Cleaning Services LLC** website (cleaning company, Champaign IL). The site is mostly built. Do the final checkups, polish, and make it beautiful. Use **design reference 3** (the option the client approved. Make sure that reference is in the project before you start). I am setting up Vercel and the GHL number in parallel, so build clean and deploy ready.

## Business info
- Legal name: Magic Speed Cleaning Services LLC
- Owner: Nyangbe Barnes, Owner
- Niche: residential cleaning, commercial cleaning, post-construction cleanup
- Address: 2701 Willow Park Dr, Champaign, IL 61822
- Service area: Champaign, Urbana, Savoy, Mahomet
- Public phone: (217) 600-2981 (tel:+12176002981)
- Public email: magicspeedcleaningservice@gmail.com
- Insured: yes, through Pekin Insurance
- Pricing: quote only. Do NOT put fixed prices anywhere. Every job is custom with a free quote.
- Response time promise: within 24 hours
- Logo: none yet. Leave logo spots clean, do not invent a logo.
- Reviews: none yet. Do not add fake reviews or testimonials. Leave the review section off for now.
- Domain: [INSERT WEBSITE DOMAIN once Vercel is set]

## Pages to build (all indexable)
Home, Services, About, Contact, Privacy Policy, Terms of Service.
Do NOT add a no-index tag to Home, Services, About, Contact, Privacy, or Terms. Every page must be crawlable.

## Forms (GHL / LeadConnector — embed exactly as-is)

Main Quote Request form (use on the Contact page and anywhere a quote CTA belongs):
```html
<iframe src="https://api.leadconnectorhq.com/widget/form/zScqBPS6vYPSj6wAYXYu" style="width:100%;height:100%;border:none;border-radius:4px" id="inline-zScqBPS6vYPSj6wAYXYu" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Main Quote Request Form" data-height="1117" data-layout-iframe-id="inline-zScqBPS6vYPSj6wAYXYu" data-form-id="zScqBPS6vYPSj6wAYXYu" title="Main Quote Request Form"></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

Customer Feedback form:
```html
<iframe src="https://api.leadconnectorhq.com/widget/form/ANPzwBbSckAaNDkcD0UH" style="width:100%;height:100%;border:none;border-radius:4px" id="inline-ANPzwBbSckAaNDkcD0UH" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Customer Feedback Form" data-height="1199" data-layout-iframe-id="inline-ANPzwBbSckAaNDkcD0UH" data-form-id="ANPzwBbSckAaNDkcD0UH" title="Customer Feedback Form"></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```
Load `form_embed.js` only once per page even if both forms are on the same page.

## Chat widget (GHL LeadConnector)
```html
<script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="6a32f52ece10212d7a5ae46e" data-source="WEB_USER"></script>
```
Only load this chat widget on pages that do NOT have a contact or quote form on them. On any page with the Main Quote Request form or Customer Feedback form embedded, leave the chat widget off so they do not compete. Add it to the other pages (Home, Services, About) only.

## Privacy Policy and Terms of Service (CRITICAL for A2P / SMS 10DLC approval)
Create two dedicated pages with the EXACT content below. These must be live and publicly reachable for A2P registration.
- Privacy Policy at `/privacy`
- Terms of Service at `/terms`
- Do NOT no-index these pages. The carrier reviewer must be able to reach and crawl them.
- Link both in the site footer.
- Keep the SMS language word for word (express opt-in, consent not a condition of purchase, message frequency, STOP, HELP, message and data rates, and the "never shared for marketing" clauses). That is exactly what carriers check.
- In the Terms SMS section, replace [INSERT WEBSITE DOMAIN] with the live domain so the privacy link resolves to `yourdomain.com/privacy`.

### PRIVACY POLICY (paste as the /privacy page content)

Last updated June 17, 2026

This Privacy Policy explains how Magic Speed Cleaning Services LLC ("we," "us," or "our") collects, uses and protects information when you contact us, request a quote, or use our website. We respect your privacy and are committed to handling your information responsibly.

Information We Collect

We may collect the following information when you choose to share it with us:
- Contact details such as your name, phone number and email address when you call, email or request a quote.
- Service details such as the type of cleaning you need (residential, commercial or post-construction), property information, and your preferred time.
- Basic website usage data, such as pages visited, collected through standard analytics to help us improve our site.

How We Use Your Information
- To prepare quotes and to schedule, confirm and manage your cleaning services.
- To respond to your questions and provide customer service.
- To send appointment reminders or updates if you have asked us to.
- To improve our website and services.

SMS Text Messaging

If you provide your mobile number and opt in, we may send you service related text messages, such as quote follow-ups, confirmations and reminders. Your consent to receive text messages is not a condition of any purchase.
- Opt in: You agree to receive text messages from Magic Speed Cleaning Services LLC only after you give express consent, for example by checking a box or sending us your number for this purpose.
- Message frequency: Message frequency varies based on your requests and scheduled services.
- Opt out: You can opt out at any time by replying STOP to any message. After you reply STOP, we will send one confirmation message and will not send further texts unless you opt in again.
- Help: Reply HELP for assistance, or contact us at (217) 600-2981.
- Rates: Message and data rates may apply, depending on your mobile carrier and plan.
- No sharing of opt-in data: We do not share or sell your mobile opt-in information or phone number with third parties or affiliates for their marketing purposes. Text messaging consent and phone numbers collected for SMS are never shared with anyone for marketing.

How We Share Information

We do not sell, rent or share your personal information, and we do not engage in lead sharing or affiliate marketing. We may share information only with trusted service providers who help us operate, such as a scheduling or messaging platform, and only to the extent needed to provide that service. We may also disclose information if required by law.

Cookies and Analytics

Our website may use cookies and similar technologies to understand how visitors use the site so we can improve it. You can control cookies through your browser settings.

Data Security

We take reasonable steps to protect your information. No method of transmission or storage is completely secure, but we work to keep your information safe.

Your Choices

You may ask us to update or delete your contact information, and you may opt out of text messages at any time as described above. To make a request, contact us using the details below.

Children's Privacy

Our website is not directed to children under 13, and we do not knowingly collect personal information from children.

Changes to This Policy

We may update this Privacy Policy from time to time. When we do, we will revise the date at the top of this page.

Contact Us

If you have questions about this Privacy Policy, please reach out:
- Magic Speed Cleaning Services LLC
- 2701 Willow Park Dr, Champaign, IL 61822
- Phone: (217) 600-2981
- Email: magicspeedcleaningservice@gmail.com

### TERMS OF SERVICE (paste as the /terms page content)

Last updated June 17, 2026

Welcome to Magic Speed Cleaning Services LLC. By using our website or booking our services, you agree to these Terms of Service. Please read them carefully. If you do not agree, please do not use the site.

Our Services

Magic Speed Cleaning Services LLC provides residential cleaning, commercial cleaning and post-construction cleanup, serving Champaign, Urbana, Savoy and Mahomet, Illinois. We are insured through Pekin Insurance. Service availability and offerings may change over time.

Quotes and Scheduling
- Quotes can be requested by phone, email or through our website form, and we respond within 24 hours.
- Please be available at your scheduled time so we can complete your service as planned.
- If you need to cancel or reschedule, we appreciate a courtesy call as early as possible.

Pricing

Every job is custom. We provide a free quote and confirm pricing with you before any work begins. Final pricing may vary based on the size and condition of the space, the type of cleaning and any add-ons. Prices are subject to change without notice.

SMS Text Messaging Program

If you opt in, Magic Speed Cleaning Services LLC may send service related text messages such as quote follow-ups, confirmations and reminders. By providing your mobile number and opting in, you agree to the following terms.
- Consent: You consent to receive text messages only after providing express opt in. Consent is not a condition of purchasing any service.
- Message frequency: Frequency varies based on your requests and scheduled services.
- STOP: Reply STOP at any time to cancel. You will receive one confirmation message and no further texts unless you opt in again.
- HELP: Reply HELP for help, or call us at (217) 600-2981.
- Rates: Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.
- Privacy: We do not share or sell your mobile opt-in data or phone number with third parties or affiliates for marketing. See our Privacy Policy at [INSERT WEBSITE DOMAIN]/privacy for details.

No Lead Sharing or Affiliate Marketing

We do not sell, rent or share your information for lead generation, and we do not participate in affiliate marketing programs that share your personal data.

Website Use and Intellectual Property

The content on this website, including text, graphics and the Magic Speed Cleaning Services name and branding, is owned by us or our licensors and is provided for your personal, non-commercial use. Please do not copy or reuse our content without permission.

Disclaimers

We strive to provide excellent service and accurate information, but our website is provided on an "as is" basis without warranties of any kind.

Limitation of Liability

To the fullest extent permitted by law, Magic Speed Cleaning Services LLC is not liable for any indirect or incidental damages arising from your use of the website. Nothing in these terms limits liability that cannot be limited under applicable law.

Governing Law

These Terms are governed by the laws of the State of Illinois, without regard to conflict of law principles.

Changes to These Terms

We may update these Terms from time to time. Updates take effect when posted, and we will revise the date at the top of this page.

Contact Us
- Magic Speed Cleaning Services LLC
- 2701 Willow Park Dr, Champaign, IL 61822
- Phone: (217) 600-2981
- Email: magicspeedcleaningservice@gmail.com

## Build requirements
- Develop and design indexable pages for Magic Speed Cleaning Services LLC (cleaning niche).
- Do NOT add a no-index tag to Home, Services, About, Contact, Privacy, or Terms.
- Do not design or develop anything that violates Google policies.
- Do not use em dashes anywhere in the text.
- Make the design unique and emerging, not a template look.
- Content copy must be unique and different from competitors. No copied or spun text.
- All pages must be indexable and load fast.
- Properly optimized code with correct semantic HTML tags: one H1 per page, proper heading hierarchy, descriptive alt text, meta titles and descriptions, clean internal linking.

## Final checkups before you call it done
- Both GHL forms render and submit.
- Chat widget appears only on pages without a form.
- Privacy reaches `/privacy` and Terms reaches `/terms`, both linked in the footer, neither no-indexed.
- The Terms privacy link points to the live domain `/privacy`.
- NAP (name, address, phone) is consistent everywhere. Phone (217) 600-2981 and email are clickable.
- No fixed prices anywhere. No fake reviews. No invented logo.
- No em dashes, no broken links, no leftover placeholder text, no broken layout from empty logo spots.
- Run a Lighthouse pass for performance, SEO and accessibility and fix obvious issues.
- Confirm it is ready to deploy to Vercel.
