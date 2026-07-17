# Graph Report - .  (2026-07-14)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1960 nodes · 2251 edges · 148 communities (122 shown, 26 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.52)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dc223587`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- model.ts
- dependencies
- package.json
- Payload Plugin Development
- Invocation
- payload-types.ts
- devDependencies
- index.ts
- devDependencies
- routeTree.gen.ts
- Issue tracker: GitHub
- package.json
- createPayloadHandler.ts
- devDependencies
- Payload CMS Access Control Reference
- cn
- Payload Field Type Guards Reference
- Triage
- Payload CMS Access Control - Advanced Patterns
- Payload Custom API Endpoints Reference
- Process
- SKILL.md
- outputs
- Advanced Patterns
- What You Must Do When Invoked
- Payload CMS Advanced Features
- Payload CMS Application Development
- __root.tsx
- index.tsx
- package.json
- Codebase Design
- Payload CMS Field Types Reference
- include
- components.json
- During the session
- utils.ts
- HTML Report Format
- scripts
- not-found.tsx
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- Storage Adapters
- dependencies
- links.ts
- dropdown-menu.tsx
- index.ts
- exclude
- index.ts
- users.$userId.tsx
- posts.$postId.tsx
- payload.config.ts
- Diagnosing Bugs
- index.ts
- Test-Driven Development
- Process
- tsconfig.json
- tsconfig.json
- scripts
- index.js
- FileRoutesByPath
- SKILL.md
- tsconfig.json
- package.json
- exports
- devDependencies
- Payload CMS Querying Reference
- Payload Blank Template
- PayloadSDK
- Payload CMS Collections Reference
- Hero.tsx
- typography.tsx
- Ask Matt
- package.json
- graphify reference: extra exports and benchmark
- SKILL.md
- peerDependencies
- admin.e2e.spec.ts
- Process
- Payload CMS Hooks Reference
- route.ts
- package.json
- .prettierrc.json
- onlyBuiltDependencies
- _nested-layout.tsx
- TanStack Start - Basic React Query Example
- tabs.tsx
- graphify reference: query, path, explain
- scripts
- Turborepo kitchen sink starter
- eslint.config.mjs
- ButtonLink.tsx
- index.tsx
- deferred.tsx
- index.ts
- hitl-loop.template.sh
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- GLOSSARY.md Format
- environment.d.ts
- _pathlessLayout.tsx
- route-a.tsx
- posts.index.tsx
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- ./extractors
- ./formatters
- ./transformers
- CLAUDE.md
- cross-env
- graphql
- http-status
- jose
- next
- payload
- @payloadcms/db-postgres
- @payloadcms/next
- @payloadcms/storage-s3
- index.ts
- CLAUDE.md
- CLAUDE.md
- extraction-spec.md
- LICENSE.md
- README.md
- LICENSE.md

## God Nodes (most connected - your core abstractions)
1. `cn()` - 85 edges
2. `FileRoutesByPath` - 19 edges
3. `Payload CMS Field Types Reference` - 19 edges
4. `Payload CMS Access Control Reference` - 15 edges
5. `compilerOptions` - 14 edges
6. `scripts` - 12 edges
7. `compilerOptions` - 12 edges
8. `What You Must Do When Invoked` - 12 edges
9. `Payload Plugin Development` - 12 edges
10. `compilerOptions` - 11 edges

## Surprising Connections (you probably didn't know these)
- `AvatarBadge()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/avatar.tsx → apps/frontend/src/lib/utils.ts
- `AvatarGroup()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/avatar.tsx → apps/frontend/src/lib/utils.ts
- `AvatarGroupCount()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/avatar.tsx → apps/frontend/src/lib/utils.ts
- `CardAction()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/card.tsx → apps/frontend/src/lib/utils.ts
- `DropdownMenuContent()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/dropdown-menu.tsx → apps/frontend/src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (148 total, 26 thin omitted)

### Community 0 - "model.ts"
Cohesion: 0.05
Nodes (13): createStorageKeyByUser(), AbortError, BaseError, ErrorOptions, PostError, Collection, CollectionObject, ExcludedValue (+5 more)

### Community 1 - "dependencies"
Cohesion: 0.04
Nodes (47): dependencies, @base-ui/react, class-variance-authority, clsx, @fontsource-variable/inter, @fontsource-variable/manrope, @jeius-portfolio/api, @jeius-portfolio/enums (+39 more)

### Community 2 - "package.json"
Cohesion: 0.05
Nodes (46): author, default, dependencies, http-status, @payloadcms/sdk, qs-esm, description, devDependencies (+38 more)

### Community 3 - "Payload Plugin Development"
Cohesion: 0.05
Nodes (42): Adapter, Adding Fields to Collections, Adding Hooks, Adding New Collections, Adding Root-Level Endpoints, Admin Components, Best Practices, Client Components (+34 more)

### Community 4 - "Invocation"
Cohesion: 0.05
Nodes (39): Branch, Co-location, Cognitive Load, Completion Criterion, Context Load, Context Pointer, Description, Duplication (+31 more)

### Community 5 - "payload-types.ts"
Cohesion: 0.05
Nodes (36): ApiFetchResponse, ApiMethod, Auth, CollectionsWidget, Config, Experience, ExperiencesSelect, Media (+28 more)

### Community 6 - "devDependencies"
Cohesion: 0.05
Nodes (39): devDependencies, eslint, eslint-config-next, @jeius-portfolio/enums, @jeius-portfolio/eslint-config, @jeius-portfolio/types, @jeius-portfolio/typescript-config, @jeius-portfolio/utilities (+31 more)

### Community 7 - "index.ts"
Cohesion: 0.07
Nodes (12): formatCamelCase(), formatCamelCaseAllCaps(), formatCamelCaseCaps(), splitCamelCase(), MONTHS, MONTHS_SHORT, calculateAge(), formatAge() (+4 more)

### Community 8 - "devDependencies"
Cohesion: 0.05
Nodes (36): devDependencies, @jeius-portfolio/eslint-config, @jeius-portfolio/types, @jeius-portfolio/typescript-config, payload, tailwindcss, @tailwindcss/vite, @types/lodash-es (+28 more)

### Community 9 - "routeTree.gen.ts"
Cohesion: 0.06
Nodes (35): Route, AboutRoute, ApiUsersIdRoute, ApiUsersRoute, ApiUsersRouteChildren, ApiUsersRouteWithChildren, DeferredRoute, FileRoutesByFullPath (+27 more)

### Community 10 - "Issue tracker: GitHub"
Cohesion: 0.06
Nodes (30): Before exploring, read these, Domain Docs, File structure, Flag ADR conflicts, Use the glossary's vocabulary, Conventions, Issue tracker: GitHub, Pull requests as a triage surface (+22 more)

### Community 11 - "package.json"
Cohesion: 0.06
Nodes (34): default, types, author, default, description, devDependencies, eslint, @jeius-portfolio/eslint-config (+26 more)

### Community 12 - "createPayloadHandler.ts"
Cohesion: 0.11
Nodes (22): endpoints, FULL_STACK_MOBILE_DEVELOPER, INTERN_WEB_DEVELOPER, LACTALINK, LACTALINK_SKILLS, TECHNICAL_SKILLS, TMS, TMS_SKILLS (+14 more)

### Community 13 - "devDependencies"
Cohesion: 0.06
Nodes (33): eslint-config-prettier, @eslint/js, eslint-plugin-only-warn, eslint-plugin-prettier, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-turbo, globals (+25 more)

### Community 14 - "Payload CMS Access Control Reference"
Cohesion: 0.06
Nodes (33): Access Control Function Arguments, Advanced Patterns, At a Glance, Auth Collection Patterns, Basic Field Access, Basic Patterns, Best Practices, Collection Access Control (+25 more)

### Community 15 - "cn"
Cohesion: 0.12
Nodes (27): Command(), CommandDialog(), CommandEmpty(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator() (+19 more)

### Community 16 - "Payload Field Type Guards Reference"
Cohesion: 0.06
Nodes (32): Capability Guards, Common Patterns, Container Type Switching, Data Guards, fieldAffectsData, fieldHasMaxDepth, fieldHasSubFields, fieldIsArrayType (+24 more)

### Community 17 - "Triage"
Cohesion: 0.06
Nodes (29): Bad agent brief, Behavioral, not procedural, Complete acceptance criteria, Durability over precision, Examples, Explicit scope boundaries, Good agent brief (bug), Good agent brief (enhancement) (+21 more)

### Community 18 - "Payload CMS Access Control - Advanced Patterns"
Cohesion: 0.06
Nodes (31): Active Subscription Required, Async Operations Impact, Avoid N+1 Queries, Basic Authenticated Collection, Configuration Templates, Context-Aware Access Patterns, createOrgScopedAccess, createRoleBasedAccess (+23 more)

### Community 19 - "Payload Custom API Endpoints Reference"
Cohesion: 0.07
Nodes (30): addDataAndFileToRequest, addLocalesToRequestFromData, Advanced Patterns, Authentication Check, Best Practices, Collection Endpoints, Common Patterns, Conditional Endpoints (+22 more)

### Community 20 - "Process"
Cohesion: 0.07
Nodes (27): 1. State the question, 2. Pick the language, 3. Isolate the logic in a portable module, 4. Build the smallest TUI that exposes the state, 5. Make it runnable in one command, 6. Hand it over, 7. Capture the answer and the prototype, Anti-patterns (+19 more)

### Community 21 - "SKILL.md"
Cohesion: 0.07
Nodes (25): Learning Record Format, Numbering, Optional sections, Supersession, Template, What does _not_ qualify, When to write a learning record, MISSION.md Format (+17 more)

### Community 22 - "outputs"
Cohesion: 0.08
Nodes (28): ^check-types, coverage/**, .env*, ^lint, !.next/cache/**, !.next/dev/**, $TURBO_DEFAULT$, .vercel/** (+20 more)

### Community 23 - "Advanced Patterns"
Cohesion: 0.07
Nodes (28): Access Control & Filtering, Access Control Wrapper Pattern, Admin Folders Override, Admin UI Customization, Advanced Configuration, Advanced Hooks, Advanced Patterns, Async Plugin Function (+20 more)

### Community 24 - "What You Must Do When Invoked"
Cohesion: 0.07
Nodes (26): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+18 more)

### Community 25 - "Payload CMS Advanced Features"
Cohesion: 0.08
Nodes (26): Admin Config, API Keys, Authentication, Available Plugins, Collection Endpoints, Core Configuration Types, Creating Plugins, Custom Components (+18 more)

### Community 26 - "Payload CMS Application Development"
Cohesion: 0.08
Nodes (26): 1. Local API Access Control (CRITICAL), 2. Transaction Failures in Hooks, 3. Infinite Hook Loops, Access Control with Type Safety, Basic Collection, Best Practices, Common Fields, Common Gotchas (+18 more)

### Community 27 - "__root.tsx"
Cohesion: 0.12
Nodes (14): DefaultCatchBoundary(), NotFound(), Button, ButtonProps, Separator(), TooltipContent(), TooltipProvider(), P (+6 more)

### Community 28 - "index.tsx"
Cohesion: 0.14
Nodes (16): HeroImage(), HeroImageProps, HeroSection(), HeroSectionProps, Badge(), badgeVariants, Card(), CardAction() (+8 more)

### Community 29 - "package.json"
Cohesion: 0.08
Nodes (24): author, default, description, devDependencies, eslint, @jeius-portfolio/eslint-config, @jeius-portfolio/typescript-config, typescript (+16 more)

### Community 30 - "Codebase Design"
Cohesion: 0.09
Nodes (21): 1. In-process, 2. Local-substitutable, 3. Remote but owned (Ports & Adapters), 4. True external (Mock), Deepening, Dependency categories, Seam discipline, Testing strategy: replace, don't layer (+13 more)

### Community 31 - "Payload CMS Field Types Reference"
Cohesion: 0.09
Nodes (22): Advanced Lexical Configuration, Array, Blocks, Collapsible (Layout), Conditional Fields, Field Type Guards, Geospatial Queries, Join Fields (+14 more)

### Community 32 - "include"
Cohesion: 0.09
Nodes (21): compilerOptions, paths, plugins, target, exclude, extends, include, dist (+13 more)

### Community 33 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 34 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, CONTEXT.md Format, Rules (+11 more)

### Community 35 - "utils.ts"
Cohesion: 0.14
Nodes (13): InputGroupAddon(), inputGroupAddonVariants, InputGroupButton(), inputGroupButtonVariants, InputGroupInput(), InputGroupText(), InputGroupTextarea(), Input() (+5 more)

### Community 36 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 37 - "scripts"
Cohesion: 0.10
Nodes (19): devDependencies, prettier, turbo, engines, node, prettier, turbo, name (+11 more)

### Community 38 - "not-found.tsx"
Cohesion: 0.13
Nodes (8): dirname, __filename, nextConfig, importMap, Args, Args, Args, .next/**

### Community 39 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, declaration, declarationMap, incremental, jsx, lib, module (+10 more)

### Community 40 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, allowJs, forceConsistentCasingInFileNames, jsx, module, moduleResolution, noEmit, paths (+9 more)

### Community 41 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, composite, declaration, declarationMap, esModuleInterop, forceConsistentCasingInFileNames, inlineSources, isolatedModules (+9 more)

### Community 42 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, allowJs, declaration, declarationMap, incremental, jsx, lib, module (+9 more)

### Community 43 - "Storage Adapters"
Cohesion: 0.12
Nodes (17): AWS S3, Azure Blob Storage, Cloudflare R2, Database Adapters, Email Adapters, Google Cloud Storage, MongoDB, Nodemailer (SMTP) (+9 more)

### Community 44 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, dotenv, lodash-es, @payloadcms/plugin-seo, @payloadcms/richtext-lexical, @payloadcms/ui, react, react-dom (+9 more)

### Community 45 - "links.ts"
Cohesion: 0.25
Nodes (10): internalLink(), links(), LandingPage, aboutTab(), heroTab(), DEFAULT_EDITOR_FEATURES, FeaturesInput, GlobalGroups (+2 more)

### Community 46 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 47 - "index.ts"
Cohesion: 0.18
Nodes (8): apiClient, FindOptions, getExperiences, getFeaturedProjects, getProjects, getSiteSettings, siteSettingsQueryOption, getSkills

### Community 48 - "exclude"
Cohesion: 0.12
Nodes (15): compilerOptions, outDir, rootDir, exclude, extends, include, build/**, dist/** (+7 more)

### Community 49 - "index.ts"
Cohesion: 0.19
Nodes (10): admin(), Experiences, files, Media, Projects, SkillCategories, Skills, globals (+2 more)

### Community 50 - "users.$userId.tsx"
Cohesion: 0.19
Nodes (9): Route, Route, Route, UsersComponent(), Route, UserComponent(), User, userQueryOptions() (+1 more)

### Community 51 - "posts.$postId.tsx"
Cohesion: 0.23
Nodes (11): PostDeepComponent(), Route, PostComponent(), PostErrorComponent(), PostsComponent(), Route, fetchPost, fetchPosts (+3 more)

### Community 52 - "payload.config.ts"
Cohesion: 0.15
Nodes (7): GET, OPTIONS, POST, collections, Users, dirname, filename

### Community 53 - "Diagnosing Bugs"
Cohesion: 0.14
Nodes (13): Completion criterion — a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1 — Build a feedback loop, Phase 2 — Reproduce + minimise, Phase 3 — Hypothesise, Phase 4 — Instrument (+5 more)

### Community 54 - "index.ts"
Cohesion: 0.19
Nodes (5): plugins, config, S3Config, seoPluginConfig, getServerSideURL()

### Community 55 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams — where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 56 - "Process"
Cohesion: 0.15
Nodes (12): 1. Gather context, 2. Explore the codebase (optional), 3. Draft vertical slices, 4. Quiz the user, 5. Publish the tickets to the configured tracker, Acceptance criteria, Blocked by, <NN> — <Ticket title> (+4 more)

### Community 57 - "tsconfig.json"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDeclarationOnly, outDir, strictNullChecks, exclude, extends, include, build (+4 more)

### Community 58 - "tsconfig.json"
Cohesion: 0.15
Nodes (12): compilerOptions, outDir, rootDir, exclude, extends, include, build/**, dist/** (+4 more)

### Community 59 - "scripts"
Cohesion: 0.17
Nodes (12): scripts, build, dev, devsafe, generate:importmap, generate:types, lint, payload (+4 more)

### Community 60 - "index.js"
Cohesion: 0.27
Nodes (4): eslintConfig, config, config, config

### Community 61 - "FileRoutesByPath"
Cohesion: 0.17
Nodes (7): Route, Route, Route, Route, Route, Route, FileRoutesByPath

### Community 62 - "SKILL.md"
Cohesion: 0.17
Nodes (11): Chart the map, Fog of war, Invocation, Out of scope, Plan, don't do, Refer by name, The Map, The map body (+3 more)

### Community 63 - "tsconfig.json"
Cohesion: 0.17
Nodes (11): compilerOptions, outDir, strictNullChecks, exclude, extends, include, build, dist (+3 more)

### Community 64 - "package.json"
Cohesion: 0.17
Nodes (11): author, description, files, dist, src, license, main, name (+3 more)

### Community 65 - "exports"
Cohesion: 0.17
Nodes (12): default, default, types, exports, ./errors, ./filters, ./type-guards, default (+4 more)

### Community 66 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, @jeius-portfolio/enums, @jeius-portfolio/eslint-config, @jeius-portfolio/typescript-config, @types/lodash-es, @types/node, @jeius-portfolio/enums, @jeius-portfolio/eslint-config (+4 more)

### Community 67 - "Payload CMS Querying Reference"
Cohesion: 0.18
Nodes (11): Access Control in Local API, AND/OR Logic, GraphQL, Local API, Nested Properties, Payload CMS Querying Reference, Performance Best Practices, Query Operators (+3 more)

### Community 68 - "Payload Blank Template"
Cohesion: 0.18
Nodes (10): Clone, Collections, Development, Docker, Docker (Optional), How it works, Payload Blank Template, Questions (+2 more)

### Community 71 - "Payload CMS Collections Reference"
Cohesion: 0.20
Nodes (9): Auth Collection, Basic Collection, Document Status, Draft API Usage, Globals, Live Preview, Payload CMS Collections Reference, Upload Collection (+1 more)

### Community 72 - "Hero.tsx"
Cohesion: 0.27
Nodes (7): HeroSectionProps, Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage()

### Community 73 - "typography.tsx"
Cohesion: 0.20
Nodes (9): BlockQuote, H1, H2, H3, H4, InlineCode, SmallText, Span (+1 more)

### Community 74 - "Ask Matt"
Cohesion: 0.20
Nodes (9): Ask Matt, Codebase health, Context hygiene, Crossing sessions, On-ramps, Precondition, Standalone, The main flow: idea → ship (+1 more)

### Community 75 - "package.json"
Cohesion: 0.22
Nodes (8): description, engines, node, pnpm, license, name, type, version

### Community 76 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 77 - "SKILL.md"
Cohesion: 0.22
Nodes (8): Further Notes, Implementation Decisions, Out of Scope, Problem Statement, Process, Solution, Testing Decisions, User Stories

### Community 78 - "peerDependencies"
Cohesion: 0.22
Nodes (9): @jeius-portfolio/types, payload, @jeius-portfolio/types, lodash-es, payload, peerDependencies, @jeius-portfolio/types, lodash-es (+1 more)

### Community 79 - "admin.e2e.spec.ts"
Cohesion: 0.39
Nodes (5): login(), LoginOptions, cleanupTestUser(), seedTestUser(), testUser

### Community 80 - "Process"
Cohesion: 0.25
Nodes (7): 1. Pin the fixed point, 2. Identify the spec source, 3. Identify the standards sources, 4. Spawn both sub-agents in parallel, 5. Aggregate, Process, Why two axes

### Community 81 - "Payload CMS Hooks Reference"
Cohesion: 0.29
Nodes (7): Collection Hooks, Date Field Auto-Set, Field Hooks, Hook Context, Hook Patterns Best Practices, Next.js Revalidation with Context Control, Payload CMS Hooks Reference

### Community 82 - "route.ts"
Cohesion: 0.29
Nodes (6): DELETE, GET, OPTIONS, PATCH, POST, PUT

### Community 83 - "package.json"
Cohesion: 0.29
Nodes (6): license, name, private, publishConfig, access, version

### Community 84 - ".prettierrc.json"
Cohesion: 0.29
Nodes (6): endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 85 - "onlyBuiltDependencies"
Cohesion: 0.33
Nodes (6): sharp, pnpm, onlyBuiltDependencies, esbuild, unrs-resolver, sharp

### Community 87 - "TanStack Start - Basic React Query Example"
Cohesion: 0.33
Nodes (5): Build, Getting Started, Start a new project based on this example, TanStack Query Integration, TanStack Start - Basic React Query Example

### Community 88 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 89 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 90 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, dev:safe, lint, lint:fix

### Community 91 - "Turborepo kitchen sink starter"
Cohesion: 0.33
Nodes (5): Apps and Packages, Turborepo kitchen sink starter, Using this example, Utilities, What's inside?

### Community 92 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 93 - "ButtonLink.tsx"
Cohesion: 0.50
Nodes (4): ButtonLink, ButtonLinkProps, Link(), buttonVariants

### Community 95 - "deferred.tsx"
Cohesion: 0.50
Nodes (3): DeferredQuery(), deferredQueryOptions(), Route

### Community 96 - "index.ts"
Cohesion: 0.40
Nodes (4): Role, Roles, SkillCategories, SkillCategory

### Community 98 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 99 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 100 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 101 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 102 - "GLOSSARY.md Format"
Cohesion: 0.50
Nodes (3): GLOSSARY.md Format, Rules, Structure

### Community 110 - "./extractors"
Cohesion: 0.67
Nodes (3): ./extractors, default, types

### Community 111 - "./formatters"
Cohesion: 0.67
Nodes (3): ./formatters, default, types

### Community 112 - "./transformers"
Cohesion: 0.67
Nodes (3): ./transformers, default, types

## Knowledge Gaps
- **1045 isolated node(s):** `endOfLine`, `printWidth`, `tabWidth`, `singleQuote`, `semi` (+1040 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **26 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `utils.ts`, `Hero.tsx`, `typography.tsx`, `dropdown-menu.tsx`, `tabs.tsx`, `__root.tsx`, `index.tsx`, `ButtonLink.tsx`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `sharp` connect `onlyBuiltDependencies` to `payload.config.ts`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`, `cross-env`, `graphql`, `http-status`, `jose`, `next`, `payload`, `@payloadcms/db-postgres`, `@payloadcms/next`, `@payloadcms/storage-s3`, `onlyBuiltDependencies`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `endOfLine`, `printWidth`, `tabWidth` to the rest of the system?**
  _1045 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `model.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0467687074829932 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.0425531914893617 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.045328399629972246 - nodes in this community are weakly interconnected._