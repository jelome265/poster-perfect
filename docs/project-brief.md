# Project brief

## Purpose

Poster Perfect is the company portfolio website for a graphic design business. It represents the company at business level, not an individual designer's personal portfolio. Its purpose is to present the company's approved identity, positioning, creative capabilities and selected work, communicate its availability for new projects, establish confidence, and attract prospective customers through a clear route for making enquiries.

The project owner confirmed this company-level purpose on 2026-10-30. The supplied Canva design remains the visual and content reference for the website, but it does not replace the separately confirmed business purpose or authorize unverified business claims.

The implementation direction is React with TypeScript (TSX), using a component-based structure that remains understandable and maintainable as the approved company portfolio is translated into a responsive website.

## Business objectives

1. Represent Poster Perfect as a graphic design company, not as one individual's personal portfolio.
2. Communicate the company's owner-approved positioning, capabilities and service offering to prospective customers.
3. Present selected creative work that the company is authorized to publish.
4. Communicate whether the company is accepting new work, using availability information confirmed before publication.
5. Give prospective customers a clear, accessible route to make an enquiry or discuss a project.
6. Establish confidence through accurate, approved company information and work samples without fabricating clients, credentials, results or endorsements.

These objectives define the business purpose. They do not prescribe a page count, navigation model, specific service categories, portfolio categories, or contact technology.

## Website and engineering objectives

1. Translate the supplied Canva design faithfully, including its visual hierarchy, typography, imagery, color relationships, spacing, and content where approved.
2. Adapt the composition to supported viewport sizes without relying on a fixed desktop canvas.
3. Use semantic, accessible HTML and native browser behavior wherever practical.
4. Keep content, reusable presentation, and page composition separated where that separation improves clarity.
5. Keep dependencies and application complexity proportionate to confirmed requirements.

## Confirmed decisions

| Area | Decision |
| --- | --- |
| Project / represented brand | Poster Perfect |
| Business type | Graphic design company / business |
| Website purpose | Company portfolio and prospective-customer acquisition |
| Positioning | Company-level presentation; not an individual designer's personal portfolio |
| Availability | Open to new work as confirmed by the project owner on 2026-10-30; reconfirm before publication |
| Repository | jelome265/poster-perfect |
| Frontend | React |
| Language | TypeScript, including TSX |
| Structure | Component-based |
| Primary quality goals | Accurate company presentation, design fidelity, responsive behavior, accessibility, maintainability |
| Design source | Canva design supplied by the project owner |

## Business details to confirm in Phase 0

The following are not established by the company-level clarification and must not be invented:

- Specific target customer segments, industries, or geographic markets.
- Approved company description, positioning statement, and differentiators.
- Exact services, specializations, and the wording used to describe capabilities.
- Which portfolio projects, images, client names, or logos may be published, and the required permissions or confidentiality restrictions.
- Whether testimonials, case studies, awards, credentials, client lists, metrics, or other proof are available and authorized for publication.
- Current availability wording and the date on which it was reconfirmed.
- Preferred enquiry action, contact channel, destination, and expected hand-off.
- Whether any additional company information or website content is required beyond what appears in the Canva source.

Do not infer company registration status, size, team structure, individual biographies, client relationships, project outcomes, prices, turnaround times, or service guarantees.

## Not yet specified

The following implementation and content details must be confirmed from the source design or an explicit owner decision:

- Whether the source represents one page, multiple pages, or a reusable page template.
- The exact page, section, and navigation structure.
- Exact copy, calls to action, links, destinations, and interactive behavior.
- Colors, typography, spacing, dimensions, assets, and responsive adaptations.
- Portfolio categories and the specific work samples to publish.
- The final service list and target customer segments.
- Contact channel and whether enquiry handling is a simple external hand-off or requires a separately approved integration.
- Routing, rendering model, styling approach, bundler, package manager, hosting, and browser support.
- Whether any backend, API, form submission, analytics, or content-management capability is required.

## Scope boundary

The initial product scope is a responsive frontend company portfolio for a graphic design business, based on the supplied Canva design and the owner-approved business requirements. It is intended to help prospective customers understand the company and make contact about work.

Backend services, authentication, persistence, payment processing, CMS integration, analytics, remote form submission, CRM integration, and other external services are not assumed. A contact link or external hand-off may be included only after its destination and behavior are confirmed. Add a remote integration only when a separate requirement and owner approval make it necessary.

## Acceptance criteria

The project is ready for implementation when:

- The reference design can be inspected at sufficient resolution.
- The company-level purpose and positioning are reflected in the approved project brief.
- Target customer segments, service information, publishable portfolio work, availability wording, and enquiry path are confirmed or explicitly excluded/recorded as accepted limitations.
- The page and content structure are documented in the information architecture and content inventory.
- The design tokens and required assets are inventoried.
- Interactive elements and their expected outcomes and destinations are identified.
- The responsive interpretation and supported viewport range are agreed.
- Company claims and portfolio material have owner approval and appropriate publication permission.
- The implementation toolchain is selected and its verification commands are available.

The finished website is acceptable when its rendered output has been compared with the reference at agreed viewports, the company is represented accurately, approved content and work are presented as specified, the enquiry path behaves as documented, accessibility checks have been performed, and the project's automated quality gates pass.
