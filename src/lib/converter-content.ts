export interface ConverterContent {
  fromDesc: string;
  toDesc: string;
  whyConvert: string[];
  faqs: { q: string; a: string }[];
}

export const converterContent: Record<string, ConverterContent> = {
  "pdf-to-jpg": {
    fromDesc: "PDF (Portable Document Format) is a file format developed by Adobe that presents documents including text, images, and fonts consistently across all devices and operating systems. PDFs are the global standard for sharing read-only documents — from business reports to academic papers — because they look identical whether viewed on Windows, Mac, iPhone, or Android.",
    toDesc: "JPG (also called JPEG) is the most widely used image format in the world. It uses efficient lossy compression to produce small file sizes while maintaining excellent visual quality, making it ideal for photographs and complex images. JPG files are supported by every image viewer, browser, email client, and device on the planet.",
    whyConvert: [
      "View PDF pages as images: Share or display individual PDF pages on websites, in presentations, or embed them in other documents.",
      "No PDF reader required: JPG images open instantly on any device without Adobe Reader or any special software.",
      "Social media sharing: Social platforms accept JPG images but often struggle with PDFs.",
      "Create document thumbnails: Generate preview thumbnails of PDF pages for file management systems or website galleries.",
    ],
    faqs: [
      { q: "Does converting PDF to JPG reduce quality?", a: "ZapConvert renders PDF pages at 2× resolution (200 DPI equivalent), which produces sharp, high-quality JPG images suitable for screen viewing, presentations, and web use. For professional print at very large sizes, a dedicated desktop application with higher DPI settings may serve better." },
      { q: "Can I convert a multi-page PDF to JPG?", a: "Yes. If your PDF has multiple pages, ZapConvert converts all pages and delivers them as a ZIP archive containing one JPG per page, named page-01.jpg, page-02.jpg, and so on." },
      { q: "Will the JPG include text that can be searched or copied?", a: "No. Converting a PDF to JPG creates a raster image — the text becomes part of the image and is no longer searchable or selectable. If you need editable text, convert PDF to Word instead." },
      { q: "What is the maximum PDF file size I can convert?", a: "ZapConvert supports PDF files up to 25 MB. For larger files, try compressing the PDF first before converting." },
      { q: "Is my PDF kept private?", a: "Absolutely. Your PDF is uploaded securely over HTTPS, converted on our servers, and automatically deleted within 1 hour. We never read, store, or share the contents of your files." },
    ],
  },

  "jpg-to-pdf": {
    fromDesc: "JPG (JPEG) is the world's most popular image format, used universally for photographs from digital cameras and smartphones. It uses lossy compression to achieve small file sizes while maintaining good visual quality. JPG files are natively supported by every device, camera, and software application.",
    toDesc: "PDF (Portable Document Format) is the global standard for sharing documents. PDFs look identical on every device and are universally accepted by offices, schools, governments, and organizations worldwide. PDF is the preferred format for official documents, forms, resumes, and archiving.",
    whyConvert: [
      "Create a professional document: Turn photos or scanned images into a polished PDF that looks professional and is accepted everywhere.",
      "Universal acceptance: PDFs are required for most official submissions — job applications, government forms, university admissions, and more.",
      "Email as a document: Sending a PDF attachment is more professional than sending a raw image file.",
      "Preserve image quality: PDFs embed images without additional compression, maintaining the original visual quality.",
    ],
    faqs: [
      { q: "Can I convert multiple JPG images into one PDF?", a: "Currently ZapConvert converts one image at a time into a single-page PDF. To combine multiple images into one PDF, convert each separately and then use a PDF merge tool." },
      { q: "Will converting JPG to PDF reduce image quality?", a: "No. ZapConvert embeds your JPG image directly into the PDF without additional compression. The PDF page is sized to match your image exactly, preserving the original visual quality." },
      { q: "What page size will the PDF be?", a: "The PDF page is sized to exactly match your image dimensions — no white margins or fixed page sizes are applied. This ensures your image fills the entire PDF page perfectly." },
      { q: "Can I convert a photo from my phone?", a: "Yes. ZapConvert runs in any mobile browser on iPhone and Android. Simply visit the site, upload your photo, and download the PDF — no app installation needed." },
      { q: "Is the conversion free?", a: "Yes. Converting JPG to PDF on ZapConvert is completely free, with no signup required and no hidden fees." },
    ],
  },

  "png-to-pdf": {
    fromDesc: "PNG (Portable Network Graphics) is a lossless image format that supports transparent backgrounds, making it popular for logos, icons, illustrations, and screenshots. Unlike JPG, PNG preserves every pixel perfectly with no compression artifacts — making it the preferred format for graphics that require crisp, clean edges.",
    toDesc: "PDF (Portable Document Format) is the universal standard for sharing documents. PDFs look identical on every device and operating system, are accepted by institutions worldwide, and are the go-to format for professional and official document submissions.",
    whyConvert: [
      "Submit screenshots as official documents: Convert screenshots, diagrams, or charts into a professional PDF for reports or presentations.",
      "Official submission requirements: Universities, employers, and government agencies often require documents in PDF format rather than image files.",
      "Archiving: PDFs are the standard archival format, ensuring your images remain accessible and viewable decades from now.",
      "Combine with other documents: PDFs are easy to merge, sign, and annotate — things not possible with raw image files.",
    ],
    faqs: [
      { q: "What happens to the transparent background in my PNG?", a: "Transparent areas in your PNG are filled with white when converted to PDF. This creates a clean, professional document. If you need transparency preserved, keep the PNG format." },
      { q: "Will my PNG quality be preserved in the PDF?", a: "Yes. ZapConvert embeds your PNG image in the PDF without any additional compression, preserving the full lossless quality of your original file." },
      { q: "Can I convert a PNG logo to PDF for printing?", a: "Absolutely. The resulting PDF is sized to match your PNG dimensions, making it ready for professional printing or embedding in other documents." },
      { q: "What is the maximum PNG file size?", a: "ZapConvert supports PNG files up to 25 MB for this conversion." },
      { q: "Can I do this on my phone?", a: "Yes. ZapConvert runs entirely in your mobile browser and works on iOS and Android without any app installation." },
    ],
  },

  "pdf-to-word": {
    fromDesc: "PDF (Portable Document Format) is a read-only document format designed to look the same on every device. While PDFs are excellent for sharing finished documents, they are not designed for editing — which is where PDF to Word conversion becomes essential for students, professionals, and anyone who needs to work with PDF content.",
    toDesc: "DOCX is the Microsoft Word document format used by hundreds of millions of people worldwide. Word documents are fully editable and support rich formatting including tables, images, fonts, columns, and styles. DOCX files are compatible with Microsoft Word, Google Docs, LibreOffice Writer, and Apple Pages.",
    whyConvert: [
      "Edit PDF content: Fix typos, update information, or add new content that was locked inside a read-only PDF.",
      "Reformat documents: Apply new fonts, spacing, colors, and layouts to match your brand or style guide.",
      "Translate documents: Translation tools and services work much better with editable DOCX files than with PDFs.",
      "Extract tables and data: Get table data in an editable format rather than as a fixed image embedded in a PDF.",
    ],
    faqs: [
      { q: "Will the formatting be perfectly preserved?", a: "For PDFs originally created from Word or similar programs (called 'digital PDFs'), text, headings, and basic formatting are typically well preserved. Complex layouts with multiple columns, precise positioning, or unusual fonts may need minor manual adjustment after conversion. Scanned PDFs (photos of physical documents) require OCR technology and produce variable results." },
      { q: "Can you convert a scanned PDF to Word?", a: "Scanned PDFs are essentially images of physical documents. ZapConvert uses pdf2docx which can extract underlying digital text when present, but for true scanned document conversion you need OCR. A free option: upload the PDF to Google Drive, right-click and open with Google Docs — Google applies OCR automatically." },
      { q: "What is the maximum PDF size for this conversion?", a: "ZapConvert supports PDF files up to 25 MB for PDF to Word conversion. Files with many pages may take up to 60 seconds to process." },
      { q: "Will the DOCX work in Google Docs?", a: "Yes. The converted DOCX file is compatible with Microsoft Word, Google Docs, LibreOffice Writer, and Apple Pages." },
      { q: "Can I convert a password-protected PDF?", a: "No. Password-protected PDFs must have the password removed before conversion. Open the PDF in a PDF viewer with the password, print it to PDF (without password), and then convert the new unprotected file." },
    ],
  },

  "word-to-pdf": {
    fromDesc: "DOCX is the Microsoft Word format — the most widely used word processing format globally. Word documents are editable and flexible, but their appearance can shift depending on which software or operating system opens them, making them unreliable for final distribution where consistent appearance matters.",
    toDesc: "PDF (Portable Document Format) is the gold standard for sharing finished documents. A PDF looks exactly the same on every device, operating system, and printer. It preserves your fonts, images, layout, and formatting perfectly — making it the professional choice for contracts, reports, resumes, and official communications.",
    whyConvert: [
      "Consistent appearance everywhere: Your carefully formatted document looks identical whether opened on Windows, Mac, iPhone, or Android.",
      "Professional standard: Employers, clients, and institutions expect resumes, reports, and contracts as PDFs, not Word files.",
      "Prevent accidental edits: Share a read-only version that recipients cannot accidentally modify.",
      "Print-ready output: PDFs are designed for printing and guarantee your document prints exactly as designed.",
    ],
    faqs: [
      { q: "Will my Word formatting be preserved in the PDF?", a: "Yes. ZapConvert uses LibreOffice to convert Word files to PDF, which preserves text formatting, fonts, tables, images, headings, and page layout with high fidelity." },
      { q: "Can I convert a DOCX that contains images and tables?", a: "Yes. Images, tables, bullet lists, headers, footers, and most Word formatting elements are fully supported in the conversion." },
      { q: "What Word file formats are supported?", a: "ZapConvert supports both modern .docx (Office Open XML) and legacy .doc (Word 97–2003) formats." },
      { q: "Is there a page limit for the Word document?", a: "There is no page limit. Files must be under 25 MB, which accommodates most typical Word documents easily." },
      { q: "Can the resulting PDF be opened in Adobe Reader?", a: "Yes. The converted PDF is fully compatible with Adobe Acrobat Reader, Chrome, Edge, Safari, Preview, and any other PDF viewer." },
    ],
  },

  "ppt-to-pdf": {
    fromDesc: "PPTX is the Microsoft PowerPoint format used by students, businesses, and educators worldwide. PowerPoint files are editable and require PowerPoint or compatible software to open correctly — which creates problems when sharing with audiences who may not have Microsoft Office installed.",
    toDesc: "PDF ensures every slide appears exactly as you designed it on any device, without needing PowerPoint. PDF is ideal for sharing presentations with clients, submitting academic assignments, printing handouts, and archiving completed presentations.",
    whyConvert: [
      "No PowerPoint required: Recipients view your presentation on any device without needing Microsoft Office installed.",
      "Preserve design exactly: Fonts, colors, and slide layouts are perfectly preserved in the PDF output.",
      "Academic submission: Universities and institutions commonly require presentations submitted as PDFs.",
      "Reduce file size: PowerPoint files with embedded media can be very large; PDF conversion often significantly reduces the file size.",
    ],
    faqs: [
      { q: "Will animations and transitions be included in the PDF?", a: "No. Animations and transitions are interactive PowerPoint features that cannot be represented in a static PDF. Each slide appears as a static page showing the final state — this is the standard behavior for any PowerPoint-to-PDF conversion." },
      { q: "Will speaker notes appear in the PDF?", a: "No. Speaker notes are not included in the converted PDF — only the slide content is exported." },
      { q: "What file formats are supported?", a: "ZapConvert supports .pptx (PowerPoint 2007+) and .ppt (PowerPoint 97–2003) files." },
      { q: "My presentation uses custom fonts — will they appear correctly?", a: "ZapConvert uses LibreOffice which includes a broad set of fonts. Very unusual or proprietary fonts may be substituted with visually similar fonts. For best results, embed fonts in your PowerPoint before converting (File → Options → Save → Embed fonts)." },
      { q: "What is the maximum file size?", a: "ZapConvert supports PowerPoint files up to 50 MB for PDF conversion." },
    ],
  },

  "excel-to-pdf": {
    fromDesc: "XLSX is the Microsoft Excel spreadsheet format used for data analysis, financial modeling, budgeting, and reporting. Excel files require Microsoft Excel or compatible software to display correctly, and formulas, cell formatting, and grid lines may render differently across software versions and devices.",
    toDesc: "PDF ensures your spreadsheet is displayed exactly as you designed it on every device and printer. Converting Excel to PDF is essential for sharing financial reports, invoices, and data tables with colleagues or clients who should not see or modify the underlying formulas.",
    whyConvert: [
      "Share professional reports: Send polished, print-ready financial reports and data summaries as PDFs.",
      "Hide formulas: PDF recipients see only the calculated values, not the underlying Excel formulas.",
      "Consistent layout: Guarantee that column widths, row heights, and page breaks appear exactly as intended.",
      "Official submissions: Invoices, tax forms, and financial statements are typically required in PDF format.",
    ],
    faqs: [
      { q: "Will all sheets be converted?", a: "ZapConvert converts the default active sheet (the first visible sheet) in your Excel file. To convert all sheets, consider printing each sheet to PDF within Excel separately and then combining them." },
      { q: "Will charts and graphs be included?", a: "Yes. Charts, graphs, and visualizations embedded in your Excel sheet are included in the converted PDF." },
      { q: "What Excel formats are supported?", a: "ZapConvert supports .xlsx (Excel 2007+) and .xls (Excel 97–2003) formats." },
      { q: "My spreadsheet is wider than a standard page — how will it fit?", a: "ZapConvert uses LibreOffice's default page size settings. For very wide spreadsheets, set the print area and page orientation within Excel before converting, or adjust the scaling to fit to page width using the Page Layout options in Excel." },
      { q: "Is the conversion secure?", a: "Yes. Your Excel file is encrypted in transit, converted on our servers, and automatically deleted within 1 hour. We never access the contents of your files." },
    ],
  },

  // ── Images ───────────────────────────────────────────────────────────────────

  "jpg-to-png": {
    fromDesc: "JPG (JPEG) is the most common image format, designed for photographs and images with many colors. It uses lossy compression to keep file sizes small, which means some image detail is permanently discarded — this can cause slight blurring or artifacts, especially around sharp edges and text.",
    toDesc: "PNG (Portable Network Graphics) is a lossless image format that preserves every pixel perfectly. It supports transparent backgrounds, making it the preferred format for logos, icons, illustrations, screenshots, and any image that requires crisp edges or a transparent background.",
    whyConvert: [
      "Need a transparent background: PNG supports transparent areas; JPG always has a solid background.",
      "Sharper text and edges: Text, logos, and line art look crisper in PNG due to lossless compression — no blurring artifacts.",
      "Editing and re-saving: If you plan to edit and re-save an image multiple times, PNG prevents the quality degradation that occurs with repeated JPG saves.",
      "Screenshots and UI design: Screenshots and user interface graphics look cleaner as PNGs.",
    ],
    faqs: [
      { q: "Will converting JPG to PNG improve the image quality?", a: "No. Converting from JPG to PNG will not recover quality lost during original JPG compression — that data is permanently gone. PNG will preserve the current quality without any further degradation, but it cannot enhance the original." },
      { q: "Why is the PNG file larger than the original JPG?", a: "PNG uses lossless compression which preserves all pixel data, resulting in larger files than JPG's lossy compression. For the same image, PNG is typically 2–5× larger than JPG. This is normal and expected." },
      { q: "Will the PNG have a transparent background?", a: "The original JPG contains no transparency data — JPG cannot store transparency. When converted to PNG, the background remains exactly as it appears in the JPG (usually white or the original background color)." },
      { q: "Is there a limit on how many files I can convert?", a: "No. ZapConvert is free to use with no daily limits or conversion counts." },
      { q: "What is the maximum file size?", a: "ZapConvert supports image files up to 25 MB for JPG to PNG conversion." },
    ],
  },

  "png-to-jpg": {
    fromDesc: "PNG (Portable Network Graphics) is a lossless image format that perfectly preserves all image data and supports transparent backgrounds. It is commonly used for logos, illustrations, screenshots, and graphics. PNG files are typically larger than equivalent JPG files due to their lossless compression algorithm.",
    toDesc: "JPG is the most widely used image format for photographs and complex images. It achieves dramatically smaller file sizes through lossy compression, making it ideal for sharing photos online, uploading to social media, and embedding in websites and documents where file size matters.",
    whyConvert: [
      "Dramatically reduce file size: JPG files can be 5–10× smaller than equivalent PNGs, making them faster to upload, share, and load.",
      "Social media uploads: Most social platforms display JPG images fastest and most reliably.",
      "Email attachments: Smaller JPG files attach faster and are less likely to be blocked by email size limits.",
      "Website performance: JPG images load faster on web pages, improving user experience and search engine rankings.",
    ],
    faqs: [
      { q: "What happens to the transparent background in my PNG?", a: "JPG does not support transparency. Transparent areas in your PNG are filled with a white background when converted to JPG. If you need to preserve transparency, keep the PNG format." },
      { q: "Will the image quality be affected?", a: "ZapConvert converts PNG to JPG at 90% quality, which produces excellent visual results with significant file size savings. Some very slight quality loss may occur in areas with fine detail, but it is generally imperceptible." },
      { q: "Should I convert a PNG logo to JPG?", a: "Usually no — logos with transparent backgrounds become white-background JPGs, losing the transparency. For logos, PNG is the better format to preserve transparency. Convert to JPG only if transparency is not needed." },
      { q: "How much smaller will the JPG be?", a: "It varies. Photographs with gradients and complex colors typically see 60–80% file size reduction. Simple graphics with large flat-color areas may see less reduction." },
      { q: "Is conversion instant?", a: "Yes. Image conversions typically complete in 1–3 seconds for files under 10 MB." },
    ],
  },

  "png-to-webp": {
    fromDesc: "PNG is a lossless image format widely used for graphics, logos, icons, and screenshots. While it produces high-quality images with transparency support, PNG files can be quite large compared to modern formats — which can slow down website loading times.",
    toDesc: "WebP is Google's modern image format that delivers files 26% smaller than PNG while maintaining the same visual quality. Crucially, WebP also supports transparency just like PNG, and is now supported by all major browsers including Chrome, Firefox, Safari, and Edge — covering over 97% of web users.",
    whyConvert: [
      "Faster website loading: Smaller WebP files reduce page load times, improving user experience and Google PageSpeed scores.",
      "Transparency preserved: Unlike JPG, WebP fully supports transparent backgrounds just like PNG — making it a drop-in replacement for web graphics.",
      "Better compression algorithm: WebP achieves better file size reduction than PNG without any visible quality loss.",
      "Lower bandwidth costs: Serving WebP images reduces data transfer for your website visitors and reduces CDN costs.",
    ],
    faqs: [
      { q: "Does WebP support transparency like PNG?", a: "Yes. WebP fully supports transparent backgrounds (alpha channel), so logos, icons, and graphics with transparent areas convert perfectly from PNG to WebP while preserving transparency." },
      { q: "Is WebP supported by all browsers?", a: "Yes. WebP is supported by Chrome, Firefox, Safari (since version 14), Edge, and Opera — covering over 97% of web users globally. It is safe to use on any modern website." },
      { q: "How much smaller will the WebP file be compared to PNG?", a: "WebP typically produces files that are 25–35% smaller than equivalent PNGs at the same visual quality. The exact savings depend on image content." },
      { q: "Can I use WebP images in Microsoft Office documents?", a: "Older versions of Microsoft Office do not support WebP. For documents created in Word or PowerPoint, JPG or PNG is recommended. WebP is primarily a web format." },
      { q: "Will converting PNG to WebP reduce quality?", a: "ZapConvert uses lossless WebP compression for PNG conversion, which preserves 100% of the original visual quality while still reducing file size." },
    ],
  },

  "jpg-to-webp": {
    fromDesc: "JPG is the most common format for digital photographs and is nearly universal in its device support. However, WebP's more advanced compression technology achieves better image quality at smaller file sizes — making WebP the recommended upgrade for web-optimized images.",
    toDesc: "WebP is Google's modern image format that typically produces files 25–35% smaller than equivalent JPG files at the same visual quality. It is supported by all major browsers and is Google's recommended format for web images — actively flagged by PageSpeed Insights as a performance optimization.",
    whyConvert: [
      "Better web performance: Smaller file sizes mean pages load faster, reducing bounce rates and improving SEO scores.",
      "Google PageSpeed: Google's PageSpeed Insights tool actively recommends serving images in next-gen formats like WebP.",
      "Same quality, smaller size: WebP matches JPG visual quality at 25–34% smaller file sizes.",
      "Modern standard: WebP is increasingly adopted as the web image standard alongside AVIF.",
    ],
    faqs: [
      { q: "How much smaller will my WebP images be compared to JPG?", a: "WebP images are typically 25–34% smaller than equivalent JPG images at the same visual quality. For a website with many images, this can significantly improve page load speed and lower hosting costs." },
      { q: "Will the conversion change how my images look?", a: "At ZapConvert's default 85% quality setting, WebP images look virtually identical to the original JPG to the human eye, while being noticeably smaller in file size." },
      { q: "Can I use WebP on my WordPress website?", a: "Modern WordPress versions (5.8+) and popular image optimization plugins like ShortPixel, Imagify, and WebP Converter support WebP natively. Many hosting providers also serve WebP automatically." },
      { q: "What if some users have older browsers that don't support WebP?", a: "All major browsers released after 2020 support WebP. If you must support very old browsers, use the HTML <picture> element with a WebP source and a JPG fallback." },
      { q: "Is this conversion free?", a: "Yes. Converting JPG to WebP on ZapConvert is completely free with no limits and no signup." },
    ],
  },

  "webp-to-png": {
    fromDesc: "WebP is a modern image format developed by Google and optimized for web browsers. While excellent for websites, WebP is not universally supported by all desktop software — particularly older applications, image editors, and document processors — which is where conversion to PNG becomes necessary.",
    toDesc: "PNG is a universally supported lossless image format compatible with every image viewer, editor, and application ever made. Converting WebP to PNG gives you maximum compatibility for use in documents, presentations, design software, and any desktop application that does not support WebP.",
    whyConvert: [
      "Software compatibility: Many older image editors, design tools, and office applications cannot open WebP files. PNG works everywhere without exception.",
      "Document embedding: Word, PowerPoint, and other office applications work best with PNG or JPG images, not WebP.",
      "Design workflows: Professional image editing tools like older Photoshop versions require PNG as their working format.",
      "Printing services: Print shops and professional software universally support PNG; WebP support may be absent.",
    ],
    faqs: [
      { q: "Will converting WebP to PNG preserve transparency?", a: "Yes. If your WebP file has a transparent background, the transparency is fully preserved when converting to PNG. Both formats support alpha channel (transparency)." },
      { q: "Will the quality be identical to the original?", a: "If the original WebP was losslessly compressed, quality will be identical. If the WebP was lossy, the existing quality level is preserved exactly — PNG conversion will not degrade it further, but it also cannot recover any already-lost detail." },
      { q: "Why would I need to convert WebP to PNG?", a: "Common reasons: needing to open the image in older software, embedding in a document that does not support WebP, sending to someone whose device cannot display WebP, or using it in a design workflow that requires PNG." },
      { q: "Will the PNG file be larger than the WebP?", a: "Yes. PNG uses lossless compression while WebP achieves better compression overall. Expect the PNG to be noticeably larger. This is the trade-off for wider software compatibility." },
      { q: "Is this conversion free?", a: "Yes. Converting WebP to PNG on ZapConvert is completely free, with no signup required." },
    ],
  },

  "webp-to-jpg": {
    fromDesc: "WebP is an excellent web image format, but some software, email clients, and older systems do not support it. When you need an image that is guaranteed to open on any device — including older computers, phones, and specialized software — converting to JPG is the reliable solution.",
    toDesc: "JPG is the most universally supported image format in the world. Every device, operating system, browser, email client, camera, and software application can display JPG images — making it the safest choice when you need maximum compatibility across all environments.",
    whyConvert: [
      "Email compatibility: Most email clients display JPG images inline. WebP may appear as a generic file attachment that recipients cannot preview.",
      "Universal sharing: JPG is guaranteed to open on any device or software — no exceptions.",
      "Social media: Older social media upload flows and some platforms work best with JPG.",
      "Offline software: Desktop applications, image editors, and specialized tools universally support JPG.",
    ],
    faqs: [
      { q: "Will the JPG have a white background instead of transparency?", a: "Yes. JPG does not support transparent backgrounds. Any transparent areas in the WebP will be filled with white. If you need to preserve transparency, convert to PNG instead." },
      { q: "Will the image quality be affected?", a: "ZapConvert uses 90% JPG quality, which produces excellent visual results. Some minimal quality loss occurs due to JPG's lossy compression, but it is generally not noticeable." },
      { q: "Why can't some programs open my WebP file?", a: "WebP is a relatively modern format (released by Google in 2010) and older software was never updated to support it. JPG has been a universal standard since 1992 and is supported by virtually every program ever written." },
      { q: "How quickly does the conversion happen?", a: "Image conversions are nearly instant — most complete in under 2 seconds." },
      { q: "Is there a file size limit?", a: "ZapConvert supports WebP files up to 25 MB." },
    ],
  },

  "heic-to-jpg": {
    fromDesc: "HEIC (High Efficiency Image Container) is Apple's default photo format on iPhone and iPad, introduced with iOS 11 in 2017. HEIC files use the advanced HEVC (H.265) codec to store photos at roughly half the file size of equivalent JPG images — helping iPhone users store more photos without sacrificing quality. However, HEIC is not widely supported outside Apple's ecosystem.",
    toDesc: "JPG is the universal image standard supported by every device, operating system, application, and website. Converting HEIC to JPG makes your iPhone photos instantly viewable and shareable with anyone, on any device, without requiring any special software.",
    whyConvert: [
      "Windows compatibility: Windows PCs do not natively open HEIC files. JPG works on every Windows version without any additional software.",
      "Upload to websites: Most websites, social platforms, and web services accept JPG but may reject HEIC uploads.",
      "Email photos: HEIC attachments may not display correctly in email clients on non-Apple devices.",
      "Use in documents: Word, PowerPoint, Google Docs, and most other applications work natively with JPG images.",
    ],
    faqs: [
      { q: "What is HEIC and why does my iPhone use it?", a: "HEIC is Apple's photo format that saves storage space — HEIC photos are about half the file size of JPG photos at the same visual quality. Apple introduced it in iOS 11 to help users store more photos. The downside is it is not universally supported outside Apple's ecosystem." },
      { q: "How do I share iPhone photos that everyone can open?", a: "Two options: (1) Use ZapConvert to convert HEIC photos to JPG. (2) On your iPhone go to Settings → Camera → Formats and select 'Most Compatible' — your camera will then save new photos as JPG instead of HEIC." },
      { q: "Will my photo lose quality when converted to JPG?", a: "ZapConvert converts HEIC to JPG at 90% quality, which is visually excellent. Some minimal quality loss occurs because JPG uses lossy compression, but the difference is generally not noticeable in normal photo viewing." },
      { q: "Why do some HEIC files fail to convert?", a: "Some HEIC files from newer iPhone models use advanced HDR and computational photography features that require specialized processing. If conversion fails, share the photo from the iPhone Photos app — tap Share, then 'Save to Files', which often exports as JPG automatically." },
      { q: "Is HEIC the same as HEIF?", a: "They are closely related. HEIF is the container format specification; HEIC is the specific file extension Apple uses for still images stored in that container. For practical purposes, they are the same thing." },
    ],
  },

  "svg-to-png": {
    fromDesc: "SVG (Scalable Vector Graphics) is an XML-based vector format where images are defined by mathematical formulas rather than pixels. SVG images scale perfectly to any size without pixelation and are widely used for logos, icons, and illustrations. However, SVG requires modern software support and cannot be used everywhere.",
    toDesc: "PNG is a universal raster image format supported by every application, device, and platform. Converting SVG to PNG creates a pixel-based image at a specific resolution, making it suitable for use in documents, presentations, emails, and any software that does not support the vector SVG format.",
    whyConvert: [
      "Universal compatibility: PNG is supported by every image viewer, email client, and application. SVG requires a browser or vector-capable software.",
      "Social media uploads: Most platforms accept PNG directly but cannot render SVG consistently.",
      "Document embedding: Word, PowerPoint, and Google Slides handle PNG images reliably; SVG compatibility varies.",
      "Specific pixel dimensions: When you need an image at an exact pixel size (such as a 512×512 icon), PNG lets you work with precise raster dimensions.",
    ],
    faqs: [
      { q: "Will the SVG edges look sharp in the PNG?", a: "ZapConvert renders SVGs at 2× the image's intrinsic size using anti-aliasing, which produces crisp, high-quality PNG output. Logos and icons look sharp at normal viewing sizes." },
      { q: "What if my SVG has a transparent background?", a: "SVG transparent backgrounds are fully preserved in the PNG output. PNG supports alpha channel transparency, so your logo or icon will have a transparent background in the converted file." },
      { q: "Can I convert an SVG icon for use in an app?", a: "Yes. SVG to PNG conversion is commonly used to produce app icons, favicons, and UI assets that require raster images at specific dimensions." },
      { q: "The PNG looks blurry — what went wrong?", a: "This usually happens when the SVG has no defined width or height attributes and defaults to a very small size. Ensure your SVG has explicit width and height set to the desired output dimensions for the best result." },
      { q: "What is the file size limit for SVG?", a: "ZapConvert supports SVG files up to 10 MB." },
    ],
  },

  "svg-to-jpg": {
    fromDesc: "SVG (Scalable Vector Graphics) is a vector format that scales to any size without quality loss, ideal for logos and icons. While SVG is excellent for web use, it is not supported by all applications — particularly older software, email clients, and platforms that require standard raster image formats.",
    toDesc: "JPG is the most widely supported image format, compatible with every device, application, and platform without exception. Converting SVG to JPG creates a universally accessible raster image suitable for sharing, printing, and use in any application.",
    whyConvert: [
      "Broad compatibility: JPG is universally supported; SVG requires a browser or vector-capable software to render correctly.",
      "Messaging and email: JPG images display inline in messaging apps and email clients; SVG may not.",
      "Print services: Most print shops and services accept JPG or PNG, not SVG.",
      "Social media: Platforms like Instagram and Facebook accept JPG images directly without issue.",
    ],
    faqs: [
      { q: "Will the SVG render at full quality in JPG?", a: "ZapConvert renders the SVG at its native resolution. JPG uses lossy compression, so there may be minimal artifacts around very sharp edges. For logos and icons, PNG generally produces better results than JPG." },
      { q: "What happens to transparent backgrounds?", a: "JPG does not support transparency. Transparent areas in your SVG render with a white background in the JPG. If you need transparency, convert to PNG instead." },
      { q: "When should I choose SVG to JPG vs SVG to PNG?", a: "Choose JPG when you need smaller file sizes and do not need transparency (web graphics, social sharing). Choose PNG when you need transparency or lossless quality (logos on documents, icons)." },
      { q: "Is the conversion free and immediate?", a: "Yes. SVG to JPG conversion on ZapConvert is completely free and completes in seconds." },
      { q: "What is the file size limit?", a: "ZapConvert supports SVG files up to 10 MB." },
    ],
  },

  "bmp-to-jpg": {
    fromDesc: "BMP (Bitmap) is an uncompressed raster image format developed by Microsoft for Windows. BMP files store every pixel's full color data with absolutely no compression, resulting in very large file sizes. A single high-resolution BMP image can easily be 10–50 MB — making it impractical for sharing, email, or web use.",
    toDesc: "JPG is the most efficient format for photographic images, achieving significant file size reduction through intelligent lossy compression. JPG files are typically 80–95% smaller than equivalent BMP files, while maintaining excellent visual quality — making them practical for storage, sharing, and web use.",
    whyConvert: [
      "Dramatically reduce file size: A 10 MB BMP often becomes a 200–500 KB JPG with no visible quality difference to the human eye.",
      "Share via email or messaging: JPG files are small enough to attach to emails and send via any messaging app.",
      "Web use: BMP files are not suitable for websites; JPG is the universal web photograph standard.",
      "Storage savings: Converting large collections of BMP files to JPG can free many gigabytes of disk space.",
    ],
    faqs: [
      { q: "How much smaller will the JPG be compared to the BMP?", a: "Typically 80–95% smaller. A 10 MB BMP file commonly converts to a JPG of 200–800 KB depending on image complexity and content." },
      { q: "Will I notice any quality difference between BMP and JPG?", a: "At ZapConvert's 90% quality setting, the difference is virtually undetectable to the human eye during normal viewing. Only pixel-level comparison would reveal any differences." },
      { q: "Why are BMP files so large in the first place?", a: "BMP stores every pixel's full 24-bit color data with zero compression. A 1920×1080 image stores over 6 million pixels × 3 bytes each = approximately 18 MB of raw pixel data. No compression is applied whatsoever." },
      { q: "Should I convert to JPG or PNG?", a: "For photos and complex images: JPG (smaller file). For graphics, text, logos, or screenshots: PNG (lossless quality). Both are dramatically smaller than BMP." },
      { q: "What is the maximum BMP file size?", a: "ZapConvert supports files up to 25 MB. Very large BMP files may exceed this — consider splitting them or using a desktop tool for those cases." },
    ],
  },

  "bmp-to-png": {
    fromDesc: "BMP (Bitmap) is an uncompressed Windows image format with file sizes that are far larger than necessary. BMP files are rarely used today except in specific Windows system contexts, because modern lossless formats like PNG achieve the same perfect image quality with files that are 5–10× smaller.",
    toDesc: "PNG (Portable Network Graphics) is the modern standard for lossless images. PNG supports transparent backgrounds, achieves excellent compression while preserving every pixel of quality, and is supported by every platform, operating system, and application — making it the ideal modern replacement for BMP.",
    whyConvert: [
      "Dramatically smaller files: PNG uses efficient lossless compression; BMP has none. PNG files are typically 5–10× smaller than equivalent BMPs.",
      "Universal support: PNG works on every platform. BMP is a Windows-specific format with limited support on Mac, Linux, and mobile.",
      "Transparency support: PNG supports transparent backgrounds; BMP does not.",
      "Web and application use: PNG is the standard for graphics on websites, apps, and modern documents.",
    ],
    faqs: [
      { q: "Does converting BMP to PNG preserve quality?", a: "Yes, completely. Both BMP and PNG are lossless formats. Converting BMP to PNG preserves 100% of the original image quality — not a single pixel of data is lost." },
      { q: "Why is PNG smaller than BMP if both are lossless?", a: "BMP stores raw pixel data with no compression. PNG uses DEFLATE lossless compression to reduce file size without losing any data — similar to how a ZIP file compresses documents without changing their content." },
      { q: "Should I convert BMP to PNG or JPG?", a: "PNG if your BMP contains graphics, logos, screenshots, or text — PNG preserves quality completely. JPG if your BMP contains photographs and you want the smallest possible file size." },
      { q: "Can Windows open PNG files natively?", a: "Yes. Windows 10 and 11 open PNG files natively in Photos and Windows Photo Viewer. PNG is fully supported across all modern operating systems." },
      { q: "What is the file size limit?", a: "ZapConvert supports BMP files up to 25 MB." },
    ],
  },

  "tiff-to-jpg": {
    fromDesc: "TIFF (Tagged Image File Format) is a high-quality lossless image format commonly used in professional photography, printing, scanning, and publishing. TIFF files preserve maximum image detail but are very large — often 20–100 MB per image — making them impractical for everyday sharing or web use.",
    toDesc: "JPG is the ideal format for sharing, web use, and everyday distribution — achieving 10–20× file size reduction through intelligent compression. At 90% quality, JPG images look excellent for screen viewing and standard printing while being a fraction of the TIFF file size.",
    whyConvert: [
      "Share photos easily: TIFF files are too large to share via email or messaging apps. JPG makes sharing fast and practical.",
      "Web uploads: Websites and social platforms require JPG or similarly compact formats; TIFF is not suitable for web use.",
      "Storage savings: Converting TIFF archives to JPG can save many gigabytes of disk space.",
      "Client distribution: Clients and colleagues may not have software that opens TIFF; JPG opens on every device.",
    ],
    faqs: [
      { q: "Will I lose quality converting TIFF to JPG?", a: "At ZapConvert's 90% JPG quality setting, the result looks excellent for screen viewing and standard printing. Professional photographers preserving maximum quality for further editing should keep the original TIFF. For final distribution images, JPG at high quality is effectively indistinguishable to most viewers." },
      { q: "What is the maximum TIFF file size supported?", a: "ZapConvert supports TIFF files up to 50 MB, accommodating most standard photographs and scans." },
      { q: "Does ZapConvert support multi-page TIFF files?", a: "ZapConvert converts the first frame of a TIFF file. For multi-page TIFF documents (common in fax and scanning workflows), only the first page is converted." },
      { q: "Can I convert a scanned document from TIFF to JPG?", a: "Yes. Scanned TIFF files convert to JPG normally, preserving all the visual information from the scan at the chosen quality level." },
      { q: "Should I convert TIFF to JPG or PNG?", a: "JPG for photographs — much smaller file size. PNG for documents with text, line art, or where lossless quality is required." },
    ],
  },

  "tiff-to-png": {
    fromDesc: "TIFF is a professional-grade lossless image format used extensively by photographers, scanners, and publishing workflows. TIFF files are very large due to their uncompressed or minimally compressed storage, making them ideal for archiving but impractical for sharing.",
    toDesc: "PNG is a lossless format that uses efficient compression to achieve significantly smaller files than TIFF without losing any image data. PNG is universally supported and ideal for lossless images that need to be shared, embedded in documents, or used on websites.",
    whyConvert: [
      "Smaller lossless files: PNG files are typically 40–60% smaller than equivalent TIFF files while preserving 100% of image quality.",
      "Universal compatibility: PNG is supported by every application; TIFF requires specific professional software.",
      "Web and document use: PNG is the standard for high-quality images on websites and in office documents.",
      "Transparency support: PNG supports transparent backgrounds, while TIFF transparency support varies significantly by application.",
    ],
    faqs: [
      { q: "Is any quality lost when converting TIFF to PNG?", a: "No. Both TIFF and PNG are lossless formats. Converting TIFF to PNG preserves 100% of the image quality — no pixel data is changed or lost in any way." },
      { q: "How much smaller will the PNG be compared to TIFF?", a: "PNG files are typically 40–60% smaller than uncompressed TIFF files. Images with large areas of similar colors compress particularly well." },
      { q: "What is the file size limit for TIFF conversion?", a: "ZapConvert supports TIFF files up to 50 MB." },
      { q: "Does TIFF to PNG preserve embedded color profiles?", a: "ZapConvert performs a pixel-level conversion. Embedded ICC color profiles may not be transferred. For color-critical professional work, use dedicated tools like Photoshop or GIMP." },
      { q: "Can I convert a scanned document from TIFF to PNG?", a: "Yes. Scanned TIFF documents convert to PNG perfectly, preserving all text and visual detail from the scan." },
    ],
  },

  "gif-to-jpg": {
    fromDesc: "GIF (Graphics Interchange Format) is an older image format that supports simple animation but is limited to only 256 colors. GIF is widely used for animated reaction images on the web, but for static images it is generally outperformed by modern formats in both quality and efficiency.",
    toDesc: "JPG is the most widely compatible static image format, supporting 16.7 million colors and used universally by cameras, phones, websites, and applications worldwide. JPG is the standard for photographs and complex images across all platforms.",
    whyConvert: [
      "Better color accuracy: JPG supports 16.7 million colors compared to GIF's limitation of 256 — producing more realistic and vibrant images.",
      "Broader software compatibility: JPG is universally supported for printing, documents, and any software that may not handle GIF for static use.",
      "Smaller file size for photos: For photographic content, JPG is typically smaller than GIF while looking significantly better.",
      "Document embedding: Office applications and most software prefer JPG over GIF for embedded static images.",
    ],
    faqs: [
      { q: "What happens to animated GIFs when converting to JPG?", a: "Only the first frame of an animated GIF is converted to JPG. JPG is a static image format and cannot store animation. If you need to preserve animation, keep the GIF format or consider converting to WebP." },
      { q: "Why does GIF look limited in colors even after conversion?", a: "GIF images are already limited to 256 colors — this limitation is baked into the source file. Converting to JPG cannot add colors that were never stored in the original GIF. The JPG will reflect the color palette of the original GIF." },
      { q: "Can JPG show a transparent area from a GIF?", a: "No. JPG does not support transparency. Transparent areas in the GIF will become white in the JPG. If you need transparency preserved, convert to PNG instead." },
      { q: "When is GIF better than JPG?", a: "GIF is essential when you need animation. For static images, JPG or PNG is almost always the better choice." },
      { q: "Is converting GIF to JPG free?", a: "Yes. Completely free on ZapConvert with no signup required." },
    ],
  },

  "gif-to-png": {
    fromDesc: "GIF is an older format limited to 256 colors and commonly used for simple animations. For static graphics, GIF has largely been superseded by modern formats that offer better compression, higher color depth, and superior quality.",
    toDesc: "PNG is a modern lossless format supporting millions of colors, transparent backgrounds, and efficient compression. Converting a static GIF to PNG typically produces a better-looking image with a smaller or similar file size, and far greater compatibility.",
    whyConvert: [
      "Full color support: PNG supports 16.7 million colors versus GIF's 256 — producing much more accurate and vibrant images.",
      "Transparency preserved perfectly: PNG supports full alpha channel transparency, preserving GIF's transparent areas with complete accuracy.",
      "Better compression for many image types: For logos and graphics, PNG often produces smaller files than GIF while looking better.",
      "Future compatibility: PNG is the modern lossless standard; GIF is a legacy format from 1987.",
    ],
    faqs: [
      { q: "Does GIF to PNG conversion preserve transparency?", a: "Yes. PNG fully supports alpha transparency, so any transparent areas in your GIF are correctly preserved in the PNG output." },
      { q: "What happens to animated GIFs when converting to PNG?", a: "Only the first frame of an animated GIF is converted to PNG. PNG is a static image format. To preserve animation, keep the GIF or convert to animated WebP." },
      { q: "Will PNG look better than the original GIF?", a: "The underlying image data is the same, but PNG renders it without GIF's lossy palette dithering artifacts. For images with smooth gradients or photography, the difference can be noticeable." },
      { q: "Will the PNG file be smaller or larger than the GIF?", a: "It depends on the image. Simple graphics with flat colors often result in smaller PNGs. Complex images with dithering patterns may produce larger PNGs. Results vary." },
      { q: "Is this conversion free?", a: "Yes. GIF to PNG conversion is completely free on ZapConvert." },
    ],
  },

  // ── Audio ────────────────────────────────────────────────────────────────────

  "mp3-to-wav": {
    fromDesc: "MP3 is the world's most popular compressed audio format, using lossy compression to achieve roughly 10× smaller file sizes than uncompressed audio. MP3 is universally supported on every device and software, making it the standard for music distribution, podcasts, and streaming.",
    toDesc: "WAV (Waveform Audio File Format) is an uncompressed audio format that stores raw audio data without any quality loss. WAV is the preferred format for professional audio editing, digital audio workstations (DAWs), and applications that require the highest possible audio fidelity.",
    whyConvert: [
      "Professional audio editing: DAWs like Audacity, Pro Tools, Logic Pro, and GarageBand work best with uncompressed WAV files for editing.",
      "Required by specific software: Some audio applications, games, and hardware devices specifically require WAV format as input.",
      "Avoid re-compression artifacts: Working with WAV during editing prevents the quality degradation caused by repeatedly compressing already-compressed audio.",
      "Hardware compatibility: Audio interfaces, mixers, and professional equipment commonly accept WAV as their standard input format.",
    ],
    faqs: [
      { q: "Will converting MP3 to WAV improve audio quality?", a: "No. WAV is uncompressed, but it cannot recover audio data already discarded by MP3 compression. The WAV file will sound identical to the MP3 — it simply stores the same audio in an uncompressed format, preventing any further quality loss during editing." },
      { q: "Why is the WAV file so much larger than the MP3?", a: "MP3 uses lossy compression to achieve roughly 10× size reduction. WAV stores raw uncompressed audio data. A 5 MB MP3 at 192kbps becomes approximately 50–60 MB as WAV. This is completely normal and expected." },
      { q: "What sample rate and bit depth will the WAV have?", a: "ZapConvert converts to 16-bit WAV at the original sample rate of the MP3 (typically 44,100 Hz — CD quality). This is suitable for the vast majority of professional audio applications." },
      { q: "Can I use the converted WAV in video editing software?", a: "Yes. WAV files are universally accepted by all video editing software including Adobe Premiere, DaVinci Resolve, Final Cut Pro, and iMovie." },
      { q: "What is the maximum MP3 file size supported?", a: "ZapConvert supports audio files up to 50 MB for this conversion." },
    ],
  },

  "wav-to-mp3": {
    fromDesc: "WAV (Waveform Audio File Format) is an uncompressed audio format that preserves every detail of the original audio signal. WAV files are used in professional audio production but are very large — a 3-minute WAV file can be 30–50 MB — making them impractical for everyday sharing and portable device storage.",
    toDesc: "MP3 is the universal standard for compressed audio. At 192kbps, MP3 files are typically 10× smaller than equivalent WAV files with audio quality that is excellent for all casual and most professional listening purposes. MP3 is supported by every music player, phone, car stereo, and streaming service.",
    whyConvert: [
      "Massive file size reduction: A 50 MB WAV becomes approximately 5 MB as MP3 at the same perceived listening quality.",
      "Share via email or messaging: MP3 files are small enough to share via any method — email, WhatsApp, Dropbox, or direct download.",
      "Universal device compatibility: Every music player, smartphone, car audio system, and streaming platform plays MP3.",
      "Streaming and podcasting: MP3 is the standard format for audio streaming, podcasts, and online music distribution.",
    ],
    faqs: [
      { q: "What bitrate does ZapConvert use for the MP3 output?", a: "ZapConvert converts WAV to MP3 at 192kbps, which is considered high quality — most listeners cannot distinguish it from the original WAV in normal listening conditions." },
      { q: "Will I notice the quality difference between WAV and MP3?", a: "At 192kbps, most listeners cannot perceive the quality difference in casual listening. Only in very quiet passages or through high-end audiophile equipment might trained ears detect subtle differences." },
      { q: "Is WAV to MP3 conversion reversible?", a: "No. MP3 compression permanently discards some audio data. Converting back to WAV produces a larger file that still has MP3-level quality — the discarded data cannot be recovered." },
      { q: "Can I convert WAV recordings from a voice recorder to MP3?", a: "Yes. Voice recordings, podcasts, lectures, interviews, and music — all WAV audio files work with ZapConvert's converter." },
      { q: "What is the maximum WAV file size?", a: "ZapConvert supports WAV files up to 50 MB for MP3 conversion." },
    ],
  },

  "m4a-to-mp3": {
    fromDesc: "M4A (MPEG-4 Audio) is Apple's audio format used by iTunes, iPhone voice memos, and Mac for music and recordings. M4A files use the AAC codec which delivers better quality than MP3 at the same bitrate. However, M4A compatibility is more limited than MP3 — particularly on non-Apple devices and older equipment.",
    toDesc: "MP3 is the universal audio format supported by literally every device, car stereo, music player, and platform ever made. Converting M4A to MP3 ensures your audio files work everywhere, regardless of the device or software used to play them.",
    whyConvert: [
      "Universal compatibility: MP3 plays on every device including older MP3 players, car stereos, and any non-Apple device.",
      "Share with anyone: Recipients on any device or platform can play MP3 without needing Apple software or hardware.",
      "Older equipment: Classic iPods, legacy MP3 players, and car stereos from before 2010 may not support M4A.",
      "Platform uploads: Many audio platforms and services specifically require MP3 format for uploads.",
    ],
    faqs: [
      { q: "Will the audio quality be worse in MP3 compared to M4A?", a: "Converting from AAC (M4A) to MP3 involves re-encoding from one lossy format to another, causing some generation loss. At ZapConvert's 192kbps output, the quality remains excellent for everyday listening — most people cannot detect the difference." },
      { q: "Can I convert DRM-protected iTunes M4A files?", a: "No. DRM-protected iTunes purchases are encrypted and cannot be converted. ZapConvert works only for M4A files you created yourself or downloaded without copy protection — such as iPhone voice memos, GarageBand recordings, or DRM-free music files." },
      { q: "Where do M4A files typically come from?", a: "M4A files come from Apple devices (iPhone voice memos, GarageBand recordings), older iTunes music purchases, and any recording software using AAC encoding." },
      { q: "Is there a technical quality difference between M4A and MP3?", a: "AAC (M4A) is technically more efficient than MP3 — achieving slightly better quality at the same bitrate. However, at 192kbps the practical listening difference is negligible for normal use." },
      { q: "What is the file size limit?", a: "ZapConvert supports audio files up to 50 MB for M4A to MP3 conversion." },
    ],
  },

  "ogg-to-mp3": {
    fromDesc: "OGG Vorbis is a free, open-source audio format created as a royalty-free alternative to MP3. It is commonly used in video games, open-source software, Linux systems, and web applications. While OGG produces excellent audio quality, it is not as universally supported as MP3 — particularly on older devices and non-Linux systems.",
    toDesc: "MP3 is the most universally compatible audio format in the world. Every device, platform, car stereo, and media player supports MP3 without any additional software, making it the best format when maximum playback compatibility is the goal.",
    whyConvert: [
      "Maximum compatibility: MP3 plays on every device and platform; OGG requires specific software support that is not always available.",
      "Windows and Mac users: OGG is not natively supported on Windows or macOS without installing additional codec software.",
      "Car stereos and older players: Most car audio systems and portable music players only read MP3 natively.",
      "Podcast and audio platform uploads: Most streaming and audio publishing platforms specifically require MP3 format.",
    ],
    faqs: [
      { q: "Is OGG Vorbis better quality than MP3?", a: "At the same bitrate, OGG Vorbis generally produces slightly better audio quality than MP3 due to a more efficient codec. However, converting OGG to MP3 involves re-encoding from one lossy format to another, so the output reflects the OGG source quality rather than a theoretical quality advantage." },
      { q: "Where are OGG files commonly found?", a: "OGG files appear in video games (sound effects and music), Linux media players, some web streaming, and audio created with open-source tools like Audacity." },
      { q: "Does Windows support OGG natively?", a: "No. Windows does not natively play OGG files — you need a third-party player like VLC. MP3 plays natively in Windows without any additional software." },
      { q: "What bitrate does ZapConvert use for the output MP3?", a: "ZapConvert converts at 192kbps, which is high quality for MP3 and suitable for music, voice, and all general audio use." },
      { q: "What is the maximum file size for OGG conversion?", a: "ZapConvert supports OGG files up to 50 MB." },
    ],
  },

  "wav-to-ogg": {
    fromDesc: "WAV is an uncompressed audio format with very large file sizes — a 3-minute stereo WAV at 44100 Hz takes approximately 30–40 MB, making it impractical for streaming, online sharing, or situations where storage and bandwidth are limited.",
    toDesc: "OGG Vorbis is a free, open-source compressed audio format that achieves excellent quality at significantly smaller file sizes. OGG is widely used in open-source software, Linux systems, and game development environments where patent-free audio is preferred.",
    whyConvert: [
      "Dramatically reduce file size: OGG compresses efficiently — a 40 MB WAV becomes approximately 4–6 MB as OGG.",
      "Open source and patent-free: OGG Vorbis is completely free to use without licensing fees, preferred by open-source projects.",
      "Game audio: Many game engines including Godot use OGG as their native audio format for background music.",
      "Web use: OGG is natively supported in Firefox and Chrome for HTML5 audio elements.",
    ],
    faqs: [
      { q: "What quality level does ZapConvert use for OGG output?", a: "ZapConvert encodes OGG at a quality level equivalent to approximately 192kbps, which delivers excellent audio quality for both music and voice recordings." },
      { q: "Is OGG supported on iPhone and Mac?", a: "Natively, no — iOS and macOS do not include OGG support. VLC for iOS/Mac can play OGG files. For Apple devices, MP3 or M4A is generally a better choice." },
      { q: "Can I use OGG files in a game engine?", a: "Yes. Godot uses OGG Vorbis as its native audio format. Unity supports OGG with its built-in audio system. Web-based games using HTML5 audio also support OGG in Chrome and Firefox." },
      { q: "Will WAV to OGG conversion lose quality?", a: "Yes — OGG uses lossy compression, so some audio data is discarded. At high quality settings the difference is minimal and generally imperceptible during normal listening." },
      { q: "What is the maximum WAV file size for conversion?", a: "ZapConvert supports WAV files up to 50 MB." },
    ],
  },

  "mp3-to-ogg": {
    fromDesc: "MP3 is the universal audio format, but it is based on patented technology. Some open-source projects, game developers, and Linux-focused applications prefer OGG Vorbis as a completely royalty-free alternative that achieves comparable or better audio quality.",
    toDesc: "OGG Vorbis is an open-source, patent-free audio compression format that delivers excellent audio quality. It is the preferred format for open-source applications, game audio pipelines, and Linux environments where software freedom and royalty-free licenses matter.",
    whyConvert: [
      "Open source compliance: OGG's patent-free nature avoids licensing concerns for software built under open-source licenses.",
      "Game audio assets: OGG is widely used in game audio pipelines for background music and ambient sound effects.",
      "Linux native: OGG is natively supported across Linux distributions without requiring additional codec installations.",
      "Smaller files at equivalent quality: OGG Vorbis can achieve slightly better quality than MP3 at the same file size.",
    ],
    faqs: [
      { q: "Will the audio quality be better in OGG?", a: "OGG Vorbis is technically more efficient than MP3 at the same bitrate. However, converting from MP3 to OGG re-encodes already-compressed audio, so the result reflects the original MP3 quality rather than gaining a theoretical OGG advantage." },
      { q: "Can everyone play OGG files?", a: "OGG is supported by Firefox, Chrome, VLC, and Linux players natively. It is not natively supported on Windows, Mac, or iOS without additional software. If broad compatibility is your priority, MP3 is the better choice." },
      { q: "Why would a game developer prefer OGG over MP3?", a: "MP3 was historically covered by patents requiring licensing fees (patents expired in 2017). OGG has always been completely free and open. Game engines like Godot adopted OGG as their native audio format precisely because of its royalty-free status." },
      { q: "What file size limit applies?", a: "ZapConvert supports MP3 files up to 50 MB for conversion." },
      { q: "Is the conversion free?", a: "Yes, completely free on ZapConvert with no signup required." },
    ],
  },

  "ogg-to-wav": {
    fromDesc: "OGG Vorbis is a compressed open-source audio format commonly used in games, Linux applications, and open-source software. While OGG is compact and efficient, it uses lossy compression — which makes it less suitable for professional audio editing where uncompressed working files are standard.",
    toDesc: "WAV is an uncompressed audio format that preserves every detail of the audio signal with zero quality loss. WAV is the professional standard input format for digital audio workstations, recording software, and hardware audio processing equipment.",
    whyConvert: [
      "Professional audio editing: Digital audio workstations and professional editing software work best with uncompressed WAV files.",
      "Hardware compatibility: Audio interfaces, DJ equipment, and professional audio hardware commonly require WAV format input.",
      "Game audio modification: Convert game audio assets to WAV for editing before re-encoding.",
      "Avoid quality accumulation: Working in WAV during editing prevents additional quality loss from repeated lossy re-encoding.",
    ],
    faqs: [
      { q: "Will converting OGG to WAV improve the audio quality?", a: "No. WAV cannot recover audio data discarded during OGG compression. The WAV will sound identical to the OGG — it simply stores the same audio without further compression, which prevents any additional quality loss during editing workflows." },
      { q: "Why would I want WAV if it sounds the same as the OGG?", a: "WAV is the professional working format. When you edit and re-save OGG files, each encode introduces additional quality loss. Working in WAV lets you edit freely without accumulating degradation, then export to your desired final format once done." },
      { q: "How much larger will the WAV be compared to the OGG?", a: "Significantly larger. A 3 MB OGG file typically expands to 30–50 MB as uncompressed WAV. This is completely normal and expected." },
      { q: "What is the maximum OGG file size for conversion?", a: "ZapConvert supports OGG files up to 50 MB." },
      { q: "Is this conversion free?", a: "Yes. OGG to WAV conversion is free on ZapConvert with no limits." },
    ],
  },

  "flac-to-mp3": {
    fromDesc: "FLAC (Free Lossless Audio Codec) is a lossless compression format that preserves 100% of the original audio quality while achieving roughly 40–60% of the size of uncompressed WAV files. FLAC is the gold standard for music archivists and audiophiles who need perfect quality. However, FLAC files are still large and not supported by all devices.",
    toDesc: "MP3 at 192kbps delivers excellent audio quality in files typically 5–8× smaller than FLAC. MP3 is supported by every device, car stereo, streaming service, and music player — making it the practical everyday listening format when file size matters more than absolute quality.",
    whyConvert: [
      "Device compatibility: Many devices — older MP3 players, car stereos, and some smartphones — do not support FLAC playback.",
      "Storage savings: FLAC files are large; converting to MP3 can significantly reduce storage requirements on phones and portable players.",
      "Streaming and sharing: MP3 files are small enough to stream efficiently, share via email, and upload quickly.",
      "Broader platform support: Streaming services, podcast platforms, and audio hosts universally accept MP3.",
    ],
    faqs: [
      { q: "Does converting FLAC to MP3 cause quality loss?", a: "Yes. MP3 is a lossy format, so some audio data is discarded. However, at ZapConvert's 192kbps output, the quality loss is minimal — most listeners cannot distinguish MP3 from FLAC in normal listening conditions." },
      { q: "Should I delete my FLAC files after converting to MP3?", a: "No — we strongly recommend keeping your original FLAC files archived. FLAC is your master copy. You can always create new MP3 files from FLAC later, but you cannot recover lossless quality from MP3." },
      { q: "What bitrate does ZapConvert use for the MP3 output?", a: "ZapConvert converts FLAC to MP3 at 192kbps, which is considered high quality and suitable for most listening purposes on all equipment." },
      { q: "What is the maximum FLAC file size?", a: "ZapConvert supports audio files up to 100 MB for FLAC to MP3 conversion, accommodating even large lossless audio files." },
      { q: "Can I play the converted MP3 on my iPhone?", a: "Yes. MP3 files play natively on iPhone, iPad, and all Apple devices through the Music app and any third-party audio player." },
    ],
  },

  // ── Video ────────────────────────────────────────────────────────────────────

  "mp4-to-mp3": {
    fromDesc: "MP4 (MPEG-4 Part 14) is the most common video container format, used for online videos, streaming, camera recordings, and screen captures. MP4 files contain both a video track and one or more audio tracks — making it straightforward to extract just the audio when you only need the sound.",
    toDesc: "MP3 is the universal audio format. Extracting audio from an MP4 video as an MP3 gives you just the sound — perfect for music, lectures, interviews, or any audio content embedded in a video file that you want to listen to without watching the video.",
    whyConvert: [
      "Extract music from videos: Get the audio track from a music video, live concert recording, or music performance as a standalone MP3.",
      "Save lectures and talks: Convert video lectures, conference talks, or tutorials to audio for listening while commuting or exercising.",
      "Reduce file size: A 500 MB video becomes a 10–30 MB MP3 audio file.",
      "Play audio-only: Listen to content in your car, on a plane, or with a music player without needing video playback capability.",
    ],
    faqs: [
      { q: "What audio quality will the extracted MP3 have?", a: "ZapConvert extracts the audio and encodes it at 192kbps MP3, which delivers excellent quality for music, speech, and general listening." },
      { q: "Can I convert YouTube videos this way?", a: "You should only convert videos that you have the right to use. Converting copyrighted YouTube videos without permission violates YouTube's terms of service and copyright law. This tool is intended for your own video recordings, legally downloaded content, or videos with appropriate open licenses." },
      { q: "What is the maximum MP4 file size?", a: "ZapConvert supports MP4 files up to 100 MB for audio extraction." },
      { q: "How long does the conversion take?", a: "Audio extraction is fast. A 30-minute video (under 100 MB) typically converts in 30–90 seconds." },
      { q: "What if the video has multiple audio tracks?", a: "ZapConvert extracts the default (first) audio track from the MP4, which is typically the main audio track." },
    ],
  },

  "mov-to-mp4": {
    fromDesc: "MOV (QuickTime Movie) is Apple's video format developed for QuickTime Player. MOV files are commonly created by iPhone cameras, Mac screen recorders, and Apple video software. While MOV produces excellent quality, it is Apple-centric and may not play on Windows PCs or Android devices without additional software like VLC.",
    toDesc: "MP4 is the universal video standard supported by every device, platform, streaming service, and video player. Converting MOV to MP4 makes your Apple videos immediately compatible with Windows PCs, Android phones, smart TVs, YouTube, and virtually every other platform.",
    whyConvert: [
      "Windows compatibility: MOV files do not play natively on Windows without QuickTime or VLC. MP4 plays natively in Windows Media Player and Edge.",
      "Social media uploads: Instagram, YouTube, TikTok, and most social platforms strongly prefer or require MP4.",
      "Android device playback: Android phones and tablets play MP4 natively; MOV often requires a dedicated app.",
      "Universal sharing: MP4 is the universally expected video format for sharing across all platforms and devices.",
    ],
    faqs: [
      { q: "Will video quality be maintained when converting MOV to MP4?", a: "ZapConvert converts MOV to MP4 using H.264 codec at CRF 23, which is a high-quality setting. The result is visually excellent and very close to the original MOV quality. Some minimal change may occur due to re-encoding." },
      { q: "Will the audio track be preserved?", a: "Yes. The audio from your MOV file is preserved in the MP4, encoded in AAC format." },
      { q: "My MOV was recorded on iPhone — will it convert correctly?", a: "Yes. iPhone MOV files are among the most common inputs ZapConvert handles. HEVC (H.265) MOV files from recent iPhones are converted to standard H.264 MP4 for maximum compatibility." },
      { q: "What is the maximum file size?", a: "ZapConvert supports video files up to 100 MB for MOV to MP4 conversion." },
      { q: "How long does video conversion take?", a: "Video conversion time depends on file length and complexity. A 1-minute MOV typically converts in 30–60 seconds. Longer files may take a few minutes." },
    ],
  },

  "avi-to-mp4": {
    fromDesc: "AVI (Audio Video Interleave) is a classic video format developed by Microsoft in 1992. Many older video files, security cameras, and Windows applications still produce AVI. AVI files are typically large and use older codecs that do not play efficiently on modern smartphones, streaming platforms, or smart TVs.",
    toDesc: "MP4 with H.264 encoding is the modern universal video standard — compact, high quality, and compatible with every smartphone, streaming platform, smart TV, and media player made in the last decade.",
    whyConvert: [
      "Modern device compatibility: AVI may not play on iOS, Android, or smart TVs without additional apps. MP4 works natively everywhere.",
      "Smaller file size: MP4 with H.264 encoding is typically 2–5× smaller than equivalent AVI files.",
      "Platform uploads: YouTube, Vimeo, and social media platforms strongly prefer MP4 for video uploads.",
      "Mobile playback: Smartphones handle MP4 efficiently; AVI files may stutter or refuse to play.",
    ],
    faqs: [
      { q: "Why are AVI files so large?", a: "AVI was designed in 1992 when storage was abundant and modern compression was unavailable. AVI files often use older codecs (DivX, Xvid, uncompressed) that produce much larger files compared to modern H.264 in MP4." },
      { q: "Will video quality be preserved in the MP4?", a: "ZapConvert converts AVI to MP4 at a high quality setting (CRF 23 H.264). The result looks very similar to the original, though some minimal change occurs during re-encoding." },
      { q: "What AVI codecs are supported?", a: "ZapConvert uses FFmpeg which supports a very wide range of AVI codecs including DivX, Xvid, MPEG-4, and uncompressed AVI. Most AVI files you encounter will convert successfully." },
      { q: "What is the maximum file size?", a: "ZapConvert supports AVI files up to 100 MB." },
      { q: "Can I play the resulting MP4 on my TV?", a: "Yes. Smart TVs, Chromecast, Roku, Apple TV, and game consoles all support MP4/H.264 video natively." },
    ],
  },

  "webm-to-mp4": {
    fromDesc: "WebM is an open-source video format developed by Google for web browser playback. WebM files are commonly downloaded from websites, created by browser screen recorders, or exported from web-based video tools. Outside of web browsers, WebM support is very limited on standalone devices.",
    toDesc: "MP4 is the universal video format compatible with every device — smartphones, tablets, smart TVs, game consoles, and all media players. Converting WebM to MP4 ensures your video plays anywhere and works in any video editing software.",
    whyConvert: [
      "Device playback: Most devices cannot play WebM outside of a browser. MP4 works natively on every device.",
      "Video editing software: Desktop video editors handle MP4 far more reliably and universally than WebM.",
      "Social media uploads: Instagram, TikTok, and most platforms prefer MP4 for video uploads.",
      "Share with anyone: Recipients on any device can play MP4; WebM playback requires a browser or VLC player.",
    ],
    faqs: [
      { q: "Will quality be maintained when converting WebM to MP4?", a: "ZapConvert uses a high quality setting (CRF 23 H.264) for the MP4 output. The result is visually very close to the original WebM. Minimal quality change occurs due to re-encoding between codecs." },
      { q: "Where do WebM files typically come from?", a: "WebM files come from: browser-based screen recorders, Google Meet/Zoom web recordings, certain website video downloads, and web-based video creation tools." },
      { q: "My video editor won't import WebM — what should I do?", a: "Convert it to MP4 first using ZapConvert, then import the MP4 into your video editing application." },
      { q: "What is the maximum WebM file size?", a: "ZapConvert supports WebM files up to 100 MB." },
      { q: "How long does the conversion take?", a: "A 5-minute WebM file typically takes 1–3 minutes to convert depending on resolution and complexity." },
    ],
  },

  "mp4-to-webm": {
    fromDesc: "MP4 is the universal video standard, but for embedding video in websites and web applications, WebM offers advantages including open-source licensing, efficient VP9 compression, and native support in all major browsers without requiring patented codecs.",
    toDesc: "WebM (using VP9 video codec) is Google's open-source video format designed for the web. WebM is the preferred format for HTML5 video elements, web applications, and any context where open-source, patent-free video is preferred.",
    whyConvert: [
      "HTML5 web embedding: WebM is a native web format that plays in Chrome and Firefox without any plugin or licensing requirement.",
      "Open source compliance: WebM/VP9 is completely patent-free; H.264/MP4 requires licensing (though widely available at no cost for end users).",
      "Better web compression: VP9 (WebM) achieves better compression than H.264 (MP4) at equivalent visual quality.",
      "Web application development: WebM can reduce bandwidth usage when serving video in web applications.",
    ],
    faqs: [
      { q: "Is WebM supported by all browsers?", a: "Chrome, Firefox, and Chromium-based Edge all support WebM natively. Safari has supported WebM since Safari 14 (macOS Big Sur, 2020). For maximum compatibility, provide both WebM and MP4 sources using the HTML5 <video> element's <source> tags." },
      { q: "Will quality be affected when converting to WebM?", a: "ZapConvert converts using VP9 codec at a high quality setting. The visual quality is excellent, though any re-encoding between formats involves minimal change." },
      { q: "Is WebM good for social media uploads?", a: "Most social platforms (Instagram, TikTok, YouTube) prefer MP4 for uploads. WebM is best suited for web applications and HTML5 video, not social media." },
      { q: "What is the file size limit?", a: "ZapConvert supports MP4 files up to 100 MB for WebM conversion." },
      { q: "Is this free?", a: "Yes. MP4 to WebM conversion is completely free on ZapConvert." },
    ],
  },

  "mov-to-webm": {
    fromDesc: "MOV is Apple's QuickTime video format produced by iPhones, Macs, and Apple software. While high quality, MOV is Apple-centric and requires conversion for cross-platform web use, particularly when open-source video formats are preferred.",
    toDesc: "WebM is the open-source web video format used natively in Chrome and Firefox. Converting MOV to WebM makes Apple video files suitable for embedding in websites, web applications, and open-source projects.",
    whyConvert: [
      "Web embedding: WebM is a native HTML5 browser format ideal for the <video> element on websites.",
      "Open source: WebM/VP9 is completely patent-free, making it the preferred choice for open-source web projects.",
      "Cross-browser web delivery: Chrome, Firefox, and modern browsers handle WebM efficiently with native codec support.",
      "Web app video: WebM is a solid open-source choice for video in web applications where bandwidth efficiency matters.",
    ],
    faqs: [
      { q: "Will the audio from my MOV be preserved in the WebM?", a: "Yes. The audio from your MOV file is preserved in the WebM output, encoded using the Vorbis audio codec which is native to the WebM container." },
      { q: "What quality can I expect from the converted WebM?", a: "ZapConvert uses VP9 codec at a high quality setting, producing excellent WebM output that is visually close to the original MOV." },
      { q: "Should I provide WebM or MP4 for my website?", a: "Best practice is to provide both formats: a WebM source for Chrome/Firefox and an MP4 source as fallback for Safari and other browsers. Use the HTML5 <video> element with multiple <source> tags." },
      { q: "What is the maximum file size?", a: "ZapConvert supports MOV files up to 100 MB for WebM conversion." },
      { q: "Is this free?", a: "Yes. MOV to WebM conversion is completely free on ZapConvert." },
    ],
  },

  "avi-to-webm": {
    fromDesc: "AVI is a legacy Windows video format from 1992 that produces large files using older compression codecs. Converting AVI files to modern formats reduces file size dramatically, improves compatibility, and enables web use.",
    toDesc: "WebM is the modern open-source web video format. Converting old AVI files to WebM can reduce file sizes by 50–80% while making the video suitable for browser-native web embedding and modern playback environments.",
    whyConvert: [
      "Modernize legacy files: Convert old AVI files to a current, web-compatible format that works in modern browsers.",
      "Web embedding: WebM enables browser-native HTML5 video playback without plugins.",
      "Significant file size reduction: Modern VP9 compression in WebM can reduce AVI file sizes by 50–80%.",
      "Open source: WebM/VP9 is completely patent-free and freely usable in any project.",
    ],
    faqs: [
      { q: "How much smaller will the WebM be compared to AVI?", a: "WebM typically achieves 50–80% file size reduction compared to typical DivX/Xvid AVI files while maintaining similar visual quality thanks to modern VP9 compression." },
      { q: "What AVI codecs are supported for conversion?", a: "ZapConvert uses FFmpeg which supports a wide range of AVI codecs. Standard AVI files using DivX, Xvid, MPEG-4, or H.264 in AVI container will all convert successfully." },
      { q: "Can I embed the resulting WebM in a web page?", a: "Yes. Use the HTML5 <video> element with the WebM file as a source. For maximum browser compatibility, also provide an MP4 version as fallback for Safari." },
      { q: "What is the maximum AVI file size?", a: "ZapConvert supports AVI files up to 100 MB." },
      { q: "Is this free?", a: "Yes. AVI to WebM conversion is free on ZapConvert." },
    ],
  },

  "mp4-to-gif": {
    fromDesc: "MP4 is the standard video format for recordings, screen captures, and shared video content. Short video clips are often more effective shared as animated GIFs in contexts where video autoplay is blocked or where a simple looping animation is what is needed.",
    toDesc: "GIF (Graphics Interchange Format) is a widely supported animated image format that loops silently and plays automatically without requiring a video player. GIFs are universally supported in chat apps, social media, email clients, and websites — making them ideal for short, looping visual communication.",
    whyConvert: [
      "Messaging apps: GIFs play automatically and silently in iMessage, WhatsApp, Telegram, Slack, and Discord — no video player needed.",
      "Memes and reactions: Short looping GIFs are the standard format for memes, reaction images, and funny moments.",
      "Email embedding: GIFs animate inline in emails; video attachments often do not play automatically.",
      "Product demos: Short GIF demos of software or UI interactions are easy to embed in documentation and websites.",
    ],
    faqs: [
      { q: "Will the GIF have audio?", a: "No. GIF is a silent format and cannot store audio. Only the video track from your MP4 is converted." },
      { q: "What quality and size will the GIF have?", a: "ZapConvert creates GIFs at 10 frames per second, scaled to 480 pixels wide, with an optimized color palette using the palettegen/paletteuse technique. GIF is inherently limited to 256 colors, so it will not match the quality of the original MP4." },
      { q: "Why is my GIF file so large?", a: "GIF animation is surprisingly uncompressed — each frame stores full pixel data. A 10-second MP4 can produce a 20–50 MB GIF. For sharing, trim the video to just the key 2–5 seconds before converting to keep the GIF size manageable." },
      { q: "What is the maximum MP4 size for GIF conversion?", a: "ZapConvert supports MP4 files up to 50 MB for GIF conversion." },
      { q: "Will the GIF loop continuously?", a: "Yes. ZapConvert creates GIFs with infinite looping enabled, which is the expected behavior for GIFs on all platforms." },
    ],
  },
};
