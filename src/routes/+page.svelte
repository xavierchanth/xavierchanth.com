<script>
	import LinkRow from '$lib/site/components/LinkRow.svelte';
	import PostList from '$lib/site/components/PostList.svelte';
	import ProjectList from '$lib/site/components/ProjectList.svelte';
	import Section from '$lib/site/components/Section.svelte';
	import WorkList from '$lib/site/components/WorkList.svelte';
	import { PROJECTS } from '$lib/site/data/projects.js';
	import { WORK } from '$lib/site/data/work.js';
	import { CONTACT_LINKS, EDUCATION, NAME, PORTRAIT } from '$lib/site/data/profile.js';
	import { BLOG_DESCRIPTION, BLOG_URL, CONSULTING_BUSINESS_NAME } from '$lib/metadata';

	let { data } = $props();

	const TITLE = 'Xavier Chanthavong';
	const DESCRIPTION = BLOG_DESCRIPTION;
	const canonical = `${BLOG_URL}/`;

	/** @type {{ label: string; href: string }[]} */
	const writingLinks = [
		{ label: 'All posts', href: '/posts' },
		{ label: 'RSS', href: '/rss.xml' }
	];
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={TITLE} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:url" content={canonical} />

	<meta name="twitter:title" content={TITLE} />
	<meta name="twitter:description" content={DESCRIPTION} />
</svelte:head>

<div class="site-shell">
	<div class="site-intro">
		<div class="site-intro-head">
			<img
				class="site-portrait"
				src={PORTRAIT.src}
				alt={PORTRAIT.alt}
				width={PORTRAIT.width}
				height={PORTRAIT.height}
			/>
			<h1 class="site-title">{NAME}</h1>
		</div>

		<div class="site-intro-body">
			<p>
				I am the co-founder and COO of <a
					href="https://comealign.com"
					target="_blank"
					rel="noopener noreferrer">Align</a
				>, a dating app that matches people by astrology and gets them off their phones and onto
				real dates. I lead operations, venue partnerships, and customer success. I love all kinds of
				software and have spent time deepening my knowledge across full-stack development, systems
				programming, and data science and machine learning. I write about how software is designed,
				shipped, and maintained.
			</p>
			<p>
				Before Align, I co-founded Woosah, where I built the core technology platform, and before
				that I was a senior engineer at Atsign, where I continue as an advisor. Through {CONSULTING_BUSINESS_NAME},
				I've served clients across technology startups, public-sector records, mining services,
				healthcare, media and entertainment, and recreation since 2017.
			</p>
			<LinkRow links={CONTACT_LINKS} label="Contact" />
		</div>
	</div>

	<Section id="writing" title="Writing">
		<PostList posts={data.posts} />
		<LinkRow links={writingLinks} class="site-section-footer" label="More writing" />
	</Section>

	<Section id="work" title="Work">
		<WorkList entries={WORK} />
	</Section>

	<Section id="open-source" title="Open source">
		<ProjectList projects={PROJECTS} />
	</Section>

	<Section id="colophon" title="Colophon">
		<div class="site-colophon site-small site-muted site-section-footer">
			<p>{EDUCATION}</p>
		</div>
	</Section>
</div>
