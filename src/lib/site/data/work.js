/**
 * Work history shown on the homepage.
 * Public-facing summaries only: no customers, metrics, or architecture detail.
 *
 * @typedef {{ org: string; role: string; period: string; summary: string }} WorkEntry
 */

/** @type {WorkEntry[]} */
export const WORK = [
	{
		org: 'Align',
		role: 'Co-Founder & COO',
		period: 'Present',
		summary:
			'A dating app that matches people by astrology and gets them off their phones and onto real dates.'
	},
	{
		org: 'Woosah Technologies',
		role: 'Co-Founder & CPTO',
		period: '2025–2026',
		summary: 'Built the core technology platform for operations-assurance infrastructure.'
	},
	{
		org: 'Atsign',
		role: 'Senior Engineer',
		period: '2021–2025',
		summary:
			'Worked on the atSDK and related open-source tooling across Dart, C, and networking. Continues as an advisor.'
	},
	{
		org: 'Independent consulting',
		role: 'Software consultant',
		period: 'Since 2017',
		summary:
			'Engagements across technology startups, public-sector records, mining services, healthcare, media and entertainment, and recreation.'
	}
];
