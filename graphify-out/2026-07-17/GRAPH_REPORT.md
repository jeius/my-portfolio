# Graph Report - /home/jeius/Projects/my-portfolio  (2026-07-17)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 2346 nodes · 2961 edges · 202 communities (159 shown, 43 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 105 edges (avg confidence: 0.7)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f7ee42ed`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- gray
- core.py
- dependencies
- model.ts
- package.json
- slide_search_core.py
- devDependencies
- routeTree.gen.ts
- index.ts
- devDependencies
- Payload CMS Collections Reference
- package.json
- createPayloadHandler.ts
- spacing
- devDependencies
- Payload CMS Access Control Reference
- payload-types.ts
- Payload CMS Access Control - Advanced Patterns
- Payload Custom API Endpoints Reference
- TestTailwindConfigGenerator
- outputs
- cn
- html-token-validator.py
- Payload CMS Advanced Features
- Payload CMS Application Development
- about.tsx
- package.json
- Payload CMS Field Types Reference
- components.json
- index.tsx
- command.tsx
- FileRoutesByPath
- include
- generate-slide.py
- scripts
- color
- main
- design_system.py
- DesignSystemGenerator
- compilerOptions
- __root.tsx
- fetch-background.py
- TailwindConfigGenerator
- compilerOptions
- compilerOptions
- Storage Adapters
- Payload Field Type Guards Reference
- dependencies
- card
- index.ts
- payload.config.ts
- dropdown-menu.tsx
- compilerOptions
- generate.py
- fontSize
- TestShadcnInstaller
- exclude
- Advanced Patterns
- users.$userId.tsx
- posts.$postId.tsx
- utils.ts
- extract-colors.cjs
- validate-asset.cjs
- Payload Plugin Development
- not-found.tsx
- links.ts
- index.ts
- input-group.tsx
- design-tokens-starter.json
- .add_components
- tsconfig.json
- tsconfig.json
- scripts
- validate-tokens.cjs
- ShadcnInstaller
- tsconfig.json
- package.json
- exports
- devDependencies
- Plugin Patterns
- Payload CMS Querying Reference
- Payload Blank Template
- inject-brand-context.cjs
- embed-tokens.cjs
- primitive
- test_tailwind_config_gen.py
- _search_csv
- PayloadSDK
- ._base_config
- typography.tsx
- generate.py
- generate-tokens.cjs
- button
- package.json
- sync-brand-to-tokens.cjs
- _run
- BM25
- preferences.ts
- peerDependencies
- Best Practices
- admin.e2e.spec.ts
- input
- radius
- .generate_config_string
- Payload CMS Hooks Reference
- Common Plugin Types
- Admin UI Customization
- route.ts
- package.json
- .prettierrc.json
- Advanced Configuration
- onlyBuiltDependencies
- index.ts
- TanStack Start - Basic React Query Example
- shadow
- _generate_intelligent_overrides
- react.js
- scripts
- Turborepo kitchen sink starter
- Common Patterns
- Data Guards
- Option & Value Guards
- eslint.config.mjs
- deferred.tsx
- radius
- lg
- index.ts
- Testing Plugins
- layout.tsx
- padding-y
- xl
- $type
- none
- environment.d.ts
- test_sync_brand_to_tokens.py
- main
- destructive
- md
- destructive-foreground
- muted
- primary-foreground
- ring
- shadcn_add.py
- .__init__
- .test_list_installed_empty
- .test_get_installed_components_empty
- search.py
- ./extractors
- ./formatters
- ./transformers
- CLAUDE.md
- secondary-foreground
- graphql
- http-status
- jose
- next
- payload
- @payloadcms/db-postgres
- @payloadcms/next
- @payloadcms/storage-s3
- importMap.js
- index.ts
- eslint.config.mjs
- CLAUDE.md
- .test_add_components_subprocess_error
- .test_add_components_npx_not_found
- dotenv
- .test_init_dry_run
- .test_check_shadcn_config_exists
- .test_add_components_no_components
- .test_add_fonts
- .test_add_spacing
- .test_add_breakpoints
- .test_recommend_plugins
- .test_recommend_plugins_nextjs
- .test_validate_config_empty_theme
- .test_init_javascript
- .test_write_config_creates_content
- .test_custom_output_path
- .test_add_colors
- LICENSE.md
- README.md
- LICENSE.md
- .test_add_components_already_installed

## God Nodes (most connected - your core abstractions)
1. `cn()` - 85 edges
2. `TailwindConfigGenerator` - 57 edges
3. `TestTailwindConfigGenerator` - 35 edges
4. `ShadcnInstaller` - 33 edges
5. `TestShadcnInstaller` - 26 edges
6. `FileRoutesByPath` - 19 edges
7. `Payload CMS Field Types Reference` - 19 edges
8. `Payload CMS Access Control Reference` - 15 edges
9. `color` - 15 edges
10. `compilerOptions` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Command()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/command.tsx → apps/frontend/src/lib/utils.ts
- `CommandDialog()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/command.tsx → apps/frontend/src/lib/utils.ts
- `CommandInput()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/command.tsx → apps/frontend/src/lib/utils.ts
- `CommandList()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/command.tsx → apps/frontend/src/lib/utils.ts
- `CommandEmpty()` --calls--> `cn()`  [EXTRACTED]
  apps/frontend/src/components/ui/command.tsx → apps/frontend/src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (202 total, 43 thin omitted)

### Community 0 - "gray"
Cohesion: 0.05
Nodes (53): $type, $value, $type, $value, $type, $value, $type, $value (+45 more)

### Community 1 - "core.py"
Cohesion: 0.06
Nodes (42): BM25, detect_domain(), get_cip_brief(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection (+34 more)

### Community 2 - "dependencies"
Cohesion: 0.04
Nodes (49): dependencies, @base-ui/react, class-variance-authority, clsx, @fontsource-variable/inter, @fontsource-variable/manrope, @jeius-portfolio/api, @jeius-portfolio/enums (+41 more)

### Community 3 - "model.ts"
Cohesion: 0.05
Nodes (13): createStorageKeyByUser(), AbortError, BaseError, ErrorOptions, PostError, Collection, CollectionObject, ExcludedValue (+5 more)

### Community 4 - "package.json"
Cohesion: 0.05
Nodes (45): http-status, author, dependencies, http-status, @payloadcms/sdk, qs-esm, description, devDependencies (+37 more)

### Community 5 - "slide_search_core.py"
Cohesion: 0.08
Nodes (36): format_context(), format_result(), main(), Format a single search result for display, Format contextual recommendations for display., BM25, calculate_pattern_break(), detect_domain() (+28 more)

### Community 6 - "devDependencies"
Cohesion: 0.05
Nodes (39): devDependencies, eslint, eslint-config-next, @jeius-portfolio/enums, @jeius-portfolio/eslint-config, @jeius-portfolio/types, @jeius-portfolio/typescript-config, @jeius-portfolio/utilities (+31 more)

### Community 7 - "routeTree.gen.ts"
Cohesion: 0.05
Nodes (37): Route, Route, AboutRoute, ApiUsersIdRoute, ApiUsersRoute, ApiUsersRouteChildren, ApiUsersRouteWithChildren, DeferredRoute (+29 more)

### Community 8 - "index.ts"
Cohesion: 0.07
Nodes (12): formatCamelCase(), formatCamelCaseAllCaps(), formatCamelCaseCaps(), splitCamelCase(), MONTHS, MONTHS_SHORT, calculateAge(), formatAge() (+4 more)

### Community 9 - "devDependencies"
Cohesion: 0.05
Nodes (36): devDependencies, @jeius-portfolio/eslint-config, @jeius-portfolio/types, @jeius-portfolio/typescript-config, payload, tailwindcss, @tailwindcss/vite, @types/lodash-es (+28 more)

### Community 10 - "Payload CMS Collections Reference"
Cohesion: 0.07
Nodes (28): Auth Collection, Basic Collection, Document Status, Draft API Usage, Globals, Live Preview, Payload CMS Collections Reference, Upload Collection (+20 more)

### Community 11 - "package.json"
Cohesion: 0.06
Nodes (34): default, types, author, default, description, devDependencies, eslint, @jeius-portfolio/eslint-config (+26 more)

### Community 12 - "createPayloadHandler.ts"
Cohesion: 0.11
Nodes (22): endpoints, FULL_STACK_MOBILE_DEVELOPER, INTERN_WEB_DEVELOPER, LACTALINK, LACTALINK_SKILLS, TECHNICAL_SKILLS, TMS, TMS_SKILLS (+14 more)

### Community 13 - "spacing"
Cohesion: 0.06
Nodes (34): $type, $value, $type, $value, $type, $value, $type, $value (+26 more)

### Community 14 - "devDependencies"
Cohesion: 0.06
Nodes (33): eslint-config-prettier, @eslint/js, eslint-plugin-only-warn, eslint-plugin-prettier, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-turbo, globals (+25 more)

### Community 15 - "Payload CMS Access Control Reference"
Cohesion: 0.06
Nodes (33): Access Control Function Arguments, Advanced Patterns, At a Glance, Auth Collection Patterns, Basic Field Access, Basic Patterns, Best Practices, Collection Access Control (+25 more)

### Community 16 - "payload-types.ts"
Cohesion: 0.06
Nodes (31): Auth, CollectionsWidget, Config, Experience, ExperiencesSelect, Media, MediaSelect, PayloadKv (+23 more)

### Community 17 - "Payload CMS Access Control - Advanced Patterns"
Cohesion: 0.06
Nodes (31): Active Subscription Required, Async Operations Impact, Avoid N+1 Queries, Basic Authenticated Collection, Configuration Templates, Context-Aware Access Patterns, createOrgScopedAccess, createRoleBasedAccess (+23 more)

### Community 18 - "Payload Custom API Endpoints Reference"
Cohesion: 0.07
Nodes (30): addDataAndFileToRequest, addLocalesToRequestFromData, Advanced Patterns, Authentication Check, Best Practices, Collection Endpoints, Common Patterns, Conditional Endpoints (+22 more)

### Community 19 - "TestTailwindConfigGenerator"
Cohesion: 0.07
Nodes (15): Test adding colors multiple times., Test TailwindConfigGenerator class., Test that adding same plugin twice doesn't duplicate., Test generating TypeScript configuration., Test generating JavaScript configuration., Test generating config with custom colors., Test generating config with plugins., Test validating valid configuration. (+7 more)

### Community 20 - "outputs"
Cohesion: 0.08
Nodes (28): ^check-types, coverage/**, .env*, ^lint, !.next/cache/**, !.next/dev/**, $TURBO_DEFAULT$, .vercel/** (+20 more)

### Community 21 - "cn"
Cohesion: 0.13
Nodes (23): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), SelectContent(), SelectGroup() (+15 more)

### Community 22 - "html-token-validator.py"
Cohesion: 0.14
Nodes (24): get_context(), is_allowed_exception(), is_allowed_rgba(), is_inside_block(), load_css_variables(), main(), print_result(), print_summary() (+16 more)

### Community 23 - "Payload CMS Advanced Features"
Cohesion: 0.08
Nodes (26): Admin Config, API Keys, Authentication, Available Plugins, Collection Endpoints, Core Configuration Types, Creating Plugins, Custom Components (+18 more)

### Community 24 - "Payload CMS Application Development"
Cohesion: 0.08
Nodes (26): 1. Local API Access Control (CRITICAL), 2. Transaction Failures in Hooks, 3. Infinite Hook Loops, Access Control with Type Safety, Basic Collection, Best Practices, Common Fields, Common Gotchas (+18 more)

### Community 25 - "about.tsx"
Cohesion: 0.14
Nodes (13): Card(), CardContent(), apiClient, FindOptions, Route, getExperiences, getProfile, profileQueryOptions (+5 more)

### Community 26 - "package.json"
Cohesion: 0.09
Nodes (22): eslint, author, description, devDependencies, eslint, @jeius-portfolio/eslint-config, @jeius-portfolio/typescript-config, typescript (+14 more)

### Community 27 - "Payload CMS Field Types Reference"
Cohesion: 0.09
Nodes (22): Advanced Lexical Configuration, Array, Blocks, Collapsible (Layout), Conditional Fields, Field Type Guards, Geospatial Queries, Join Fields (+14 more)

### Community 28 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 29 - "index.tsx"
Cohesion: 0.14
Nodes (15): AnimatedBorderWrapper(), ButtonLink, ButtonLinkProps, Link(), HeroImage(), HeroImageProps, HeroSection(), HeroSectionProps (+7 more)

### Community 30 - "command.tsx"
Cohesion: 0.12
Nodes (16): Command(), CommandDialog(), CommandEmpty(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator() (+8 more)

### Community 31 - "FileRoutesByPath"
Cohesion: 0.10
Nodes (9): Route, Route, Route, Route, Route, Route, Route, Route (+1 more)

### Community 32 - "include"
Cohesion: 0.10
Nodes (19): compilerOptions, paths, plugins, target, exclude, extends, include, dist (+11 more)

### Community 33 - "generate-slide.py"
Cohesion: 0.15
Nodes (19): _e(), generate_chart_slide(), generate_cta_slide(), generate_deck(), generate_metrics_slide(), generate_problem_slide(), generate_solution_slide(), generate_testimonial_slide() (+11 more)

### Community 34 - "scripts"
Cohesion: 0.10
Nodes (19): devDependencies, prettier, turbo, engines, node, prettier, turbo, name (+11 more)

### Community 35 - "color"
Cohesion: 0.11
Nodes (19): $type, $value, background, foreground, muted-foreground, primary, primary-hover, secondary (+11 more)

### Community 36 - "main"
Cohesion: 0.13
Nodes (8): main(), Add custom font families.          Args:             fonts: Dict of font_type: [, Add custom spacing values.          Args:             spacing: Dict of name: val, Add custom breakpoints.          Args:             breakpoints: Dict of name: wi, Add plugin requirements.          Args:             plugins: List of plugin name, Get plugin recommendations based on configuration.          Returns:, Validate configuration.          Returns:             Tuple of (valid, message), Add custom colors to theme.          Args:             colors: Dict of color_nam

### Community 37 - "design_system.py"
Cohesion: 0.15
Nodes (18): ansi_ljust(), format_ascii_box(), format_markdown(), format_master_md(), generate_design_system(), hex_to_ansi(), persist_design_system(), Convert hex color to ANSI True Color swatch (██) with fallback. (+10 more)

### Community 38 - "DesignSystemGenerator"
Cohesion: 0.14
Nodes (11): DesignSystemGenerator, Find matching reasoning rule for a category., Apply reasoning rules to search results., Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation.          variance/motion/density, Bucket a 1-10 dial value into its tier config. Returns None if value is None., Generates design system recommendations from aggregated searches. (+3 more)

### Community 39 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, declaration, declarationMap, incremental, jsx, lib, module (+10 more)

### Community 40 - "__root.tsx"
Cohesion: 0.19
Nodes (10): DefaultCatchBoundary(), NotFound(), Button, ButtonProps, P, getRouter(), Register, @tanstack/react-router (+2 more)

### Community 41 - "fetch-background.py"
Cohesion: 0.17
Nodes (17): generate_css_for_background(), get_background_image(), get_curated_images(), get_overlay_css(), get_pexels_search_url(), load_backgrounds_config(), load_brand_colors(), main() (+9 more)

### Community 42 - "TailwindConfigGenerator"
Cohesion: 0.12
Nodes (9): Generate Tailwind CSS configuration files., Add full color palette (50-950 shades) for a base color.          Args:, TailwindConfigGenerator, Test adding full color palette., Test initialization with default settings., Test generating complete TypeScript configuration., Test initialization with different frameworks., Test base configuration structure. (+1 more)

### Community 43 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, composite, declaration, declarationMap, esModuleInterop, forceConsistentCasingInFileNames, inlineSources, isolatedModules (+9 more)

### Community 44 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, allowJs, declaration, declarationMap, incremental, jsx, lib, module (+9 more)

### Community 45 - "Storage Adapters"
Cohesion: 0.12
Nodes (17): AWS S3, Azure Blob Storage, Cloudflare R2, Database Adapters, Email Adapters, Google Cloud Storage, MongoDB, Nodemailer (SMTP) (+9 more)

### Community 46 - "Payload Field Type Guards Reference"
Cohesion: 0.12
Nodes (17): Capability Guards, fieldHasMaxDepth, fieldHasSubFields, fieldIsArrayType, fieldIsBlockType, fieldIsGroupType, fieldIsSidebar, fieldIsVirtual (+9 more)

### Community 47 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, cross-env, lodash-es, @payloadcms/plugin-seo, @payloadcms/richtext-lexical, @payloadcms/ui, react, react-dom (+9 more)

### Community 48 - "card"
Cohesion: 0.20
Nodes (12): $type, $value, bg, bg, padding, shadow, card, bg (+4 more)

### Community 49 - "index.ts"
Cohesion: 0.25
Nodes (8): admin(), Experiences, files, Media, collections, Projects, SkillCategories, Skills

### Community 50 - "payload.config.ts"
Cohesion: 0.14
Nodes (8): GET, OPTIONS, POST, Users, DEFAULT_EDITOR_FEATURES, FeaturesInput, dirname, filename

### Community 51 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 52 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowJs, forceConsistentCasingInFileNames, jsx, module, moduleResolution, noEmit, paths (+7 more)

### Community 53 - "generate.py"
Cohesion: 0.20
Nodes (15): apply_color(), apply_viewbox_size(), extract_svgs(), generate_batch(), generate_icon(), generate_sizes(), load_env(), main() (+7 more)

### Community 54 - "fontSize"
Cohesion: 0.12
Nodes (16): $type, $value, $type, $value, $type, $value, $type, $value (+8 more)

### Community 55 - "TestShadcnInstaller"
Cohesion: 0.14
Nodes (8): Test adding components in dry run mode., Test successful component addition., Test ShadcnInstaller class., Test adding all components without config., Create temporary project structure., Test initialization with default project root., Test getting installed components without config., TestShadcnInstaller

### Community 56 - "exclude"
Cohesion: 0.12
Nodes (15): compilerOptions, outDir, rootDir, exclude, extends, include, build/**, dist/** (+7 more)

### Community 57 - "Advanced Patterns"
Cohesion: 0.13
Nodes (15): Access Control & Filtering, Access Control Wrapper Pattern, Admin Folders Override, Advanced Hooks, Advanced Patterns, Background Jobs & Async Operations, BaseFilter Composition, Field & Collection Modifications (+7 more)

### Community 58 - "users.$userId.tsx"
Cohesion: 0.19
Nodes (9): Route, Route, Route, UsersComponent(), Route, UserComponent(), User, userQueryOptions() (+1 more)

### Community 59 - "posts.$postId.tsx"
Cohesion: 0.23
Nodes (11): PostDeepComponent(), Route, PostComponent(), PostErrorComponent(), Route, PostsComponent(), fetchPost, fetchPosts (+3 more)

### Community 60 - "utils.ts"
Cohesion: 0.16
Nodes (6): Badge(), badgeVariants, Label(), Toggle(), toggleVariants, TooltipContent()

### Community 61 - "extract-colors.cjs"
Cohesion: 0.22
Nodes (11): calculateCompliance(), colorDistance(), displayPalette(), extractHexColors(), findNearestBrandColor(), fs, generateImageMagickCommand(), hexToRgb() (+3 more)

### Community 62 - "validate-asset.cjs"
Cohesion: 0.25
Nodes (13): checkManifest(), formatBytes(), formatOutput(), fs, main(), parseFilename(), path, RULES (+5 more)

### Community 63 - "Payload Plugin Development"
Cohesion: 0.15
Nodes (12): Client Components, Custom Field Component, Exhaustive Structure, Export Types, Package.json Configuration, Payload Plugin Development, Plugin Architecture, Plugin Config Types (+4 more)

### Community 64 - "not-found.tsx"
Cohesion: 0.15
Nodes (6): dirname, __filename, nextConfig, Args, Args, .next/**

### Community 65 - "links.ts"
Cohesion: 0.33
Nodes (8): internalLink(), links(), LandingPage, aboutTab(), heroTab(), GlobalGroups, InternalLinks, LinkTypes

### Community 66 - "index.ts"
Cohesion: 0.19
Nodes (5): plugins, config, S3Config, seoPluginConfig, getServerSideURL()

### Community 67 - "input-group.tsx"
Cohesion: 0.21
Nodes (10): InputGroup(), InputGroupAddon(), inputGroupAddonVariants, InputGroupButton(), inputGroupButtonVariants, InputGroupInput(), InputGroupText(), InputGroupTextarea() (+2 more)

### Community 68 - "design-tokens-starter.json"
Cohesion: 0.15
Nodes (12): component, $type, $value, dark, semantic, $schema, $type, $value (+4 more)

### Community 69 - ".add_components"
Cohesion: 0.22
Nodes (7): main(), Add all available shadcn/ui components.          Args:             overwrite: If, List installed components.          Returns:             Tuple of (success, mess, Check if shadcn is initialized in project.          Returns:             True if, Get list of already installed components.          Returns:             List of, Read shadcn version from project package.json; fall back to a pinned default., Add shadcn/ui components.          Args:             components: List of compone

### Community 70 - "tsconfig.json"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDeclarationOnly, outDir, strictNullChecks, exclude, extends, include, build (+4 more)

### Community 71 - "tsconfig.json"
Cohesion: 0.15
Nodes (12): compilerOptions, outDir, rootDir, exclude, extends, include, build/**, dist/** (+4 more)

### Community 72 - "scripts"
Cohesion: 0.17
Nodes (12): scripts, build, dev, devsafe, generate:importmap, generate:types, lint, payload (+4 more)

### Community 73 - "validate-tokens.cjs"
Cohesion: 0.24
Nodes (11): extensions, formatReport(), fs, getFiles(), main(), parseArgs(), path, patterns (+3 more)

### Community 74 - "ShadcnInstaller"
Cohesion: 0.17
Nodes (7): Handle shadcn/ui component installation., ShadcnInstaller, Test adding components without shadcn config., Test adding components with overwrite flag., Test successful addition of all components., Test initialization with custom project root., Test checking for non-existent shadcn config.

### Community 75 - "tsconfig.json"
Cohesion: 0.17
Nodes (11): compilerOptions, outDir, strictNullChecks, exclude, extends, include, build, dist (+3 more)

### Community 76 - "package.json"
Cohesion: 0.17
Nodes (11): author, description, files, dist, src, license, main, name (+3 more)

### Community 77 - "exports"
Cohesion: 0.17
Nodes (12): default, default, types, exports, ./errors, ./filters, ./type-guards, default (+4 more)

### Community 78 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, @jeius-portfolio/eslint-config, @jeius-portfolio/typescript-config, payload, @types/lodash-es, @types/node, @jeius-portfolio/eslint-config, @jeius-portfolio/typescript-config (+4 more)

### Community 79 - "Plugin Patterns"
Cohesion: 0.18
Nodes (11): Adding Fields to Collections, Adding Hooks, Adding New Collections, Adding Root-Level Endpoints, Admin Components, Disable Plugin Pattern, Field Overrides with Defaults, onInit Hook (+3 more)

### Community 80 - "Payload CMS Querying Reference"
Cohesion: 0.18
Nodes (11): Access Control in Local API, AND/OR Logic, GraphQL, Local API, Nested Properties, Payload CMS Querying Reference, Performance Best Practices, Query Operators (+3 more)

### Community 81 - "Payload Blank Template"
Cohesion: 0.18
Nodes (10): Clone, Collections, Development, Docker, Docker (Optional), How it works, Payload Blank Template, Questions (+2 more)

### Community 82 - "inject-brand-context.cjs"
Cohesion: 0.31
Nodes (10): extractColorsFromTable(), extractCoreAttributes(), extractHexColors(), extractImageStyle(), extractTypography(), extractVoice(), fs, generatePromptAddition() (+2 more)

### Community 83 - "embed-tokens.cjs"
Cohesion: 0.20
Nodes (9): args, extractTokens(), fs, minimal, MINIMAL_TOKENS, path, projectRoot, tokensPath (+1 more)

### Community 84 - "primitive"
Cohesion: 0.18
Nodes (11): fast, normal, slow, $type, $value, $type, $value, primitive (+3 more)

### Community 85 - "test_tailwind_config_gen.py"
Cohesion: 0.20
Nodes (7): Tests for tailwind_config_gen.py, Reduce a generated TS/JS config to a bare assignable object so it can be     han, Regression guard for the missing-comma bug between the ``theme`` block and     `, The property preceding ``plugins`` must end with a comma (pure-Python         ch, The emitted config parses as valid JS via ``node --check``., _strip_to_object(), TestGeneratedConfigIsValidJs

### Community 86 - "_search_csv"
Cohesion: 0.25
Nodes (10): detect_domain(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection, Search stack-specific guidelines, search() (+2 more)

### Community 88 - "._base_config"
Cohesion: 0.22
Nodes (6): Any, Path, Initialize generator.          Args:             typescript: If True, generate ., Determine default output path., Create base configuration structure., Get default content paths for framework.

### Community 90 - "typography.tsx"
Cohesion: 0.20
Nodes (9): BlockQuote, H1, H2, H3, H4, InlineCode, SmallText, Span (+1 more)

### Community 91 - "generate.py"
Cohesion: 0.29
Nodes (9): enhance_prompt(), generate_batch(), generate_logo(), load_env(), main(), Enhance the logo prompt with style and industry modifiers, Generate a logo using Gemini models with image generation      Args:         asp, Generate multiple logo variants with different styles (+1 more)

### Community 92 - "generate-tokens.cjs"
Cohesion: 0.36
Nodes (9): flattenTokens(), fs, generateCSS(), generateTailwind(), main(), parseArgs(), path, resolveReference() (+1 more)

### Community 93 - "button"
Cohesion: 0.20
Nodes (10): fg, font-size, hover-bg, button, $type, $value, $type, $value (+2 more)

### Community 94 - "package.json"
Cohesion: 0.22
Nodes (8): description, engines, node, pnpm, license, name, type, version

### Community 95 - "sync-brand-to-tokens.cjs"
Cohesion: 0.33
Nodes (8): adjustBrightness(), { execFileSync }, extractColorsFromMarkdown(), fs, generateColorScale(), main(), path, updateDesignTokens()

### Community 96 - "_run"
Cohesion: 0.28
Nodes (8): Path, Regression tests for validate-tokens.cjs.  The validator used to skip any line c, A hardcoded hex on the same line as a var() token is still a violation., A line that references only tokens produces no false positives., _run(), test_flags_hardcoded_hex_sharing_line_with_token(), test_token_only_line_reports_no_violation(), CompletedProcess

### Community 97 - "BM25"
Cohesion: 0.28
Nodes (5): BM25, BM25 ranking algorithm for text search, Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query

### Community 98 - "preferences.ts"
Cohesion: 0.25
Nodes (5): ApiFetchResponse, ApiMethod, GetPreference, Preference, UpdatePreference

### Community 99 - "peerDependencies"
Cohesion: 0.22
Nodes (9): @jeius-portfolio/enums, @jeius-portfolio/types, @jeius-portfolio/enums, @jeius-portfolio/types, lodash-es, peerDependencies, @jeius-portfolio/enums, @jeius-portfolio/types (+1 more)

### Community 100 - "Best Practices"
Cohesion: 0.25
Nodes (8): Best Practices, Conditional Logic, Field Path Imports, Hook Composition, onInit Pattern, Preserve Existing Config, Respect User Overrides, Type Safety

### Community 101 - "admin.e2e.spec.ts"
Cohesion: 0.39
Nodes (5): login(), LoginOptions, cleanupTestUser(), seedTestUser(), testUser

### Community 102 - "input"
Cohesion: 0.29
Nodes (8): padding-x, input, $type, $value, focus-ring, padding-x, $type, $value

### Community 103 - "radius"
Cohesion: 0.29
Nodes (8): $type, $value, $type, $value, radius, default, full, default

### Community 104 - ".generate_config_string"
Cohesion: 0.20
Nodes (6): Generate configuration file content.          Returns:             Configuration, Generate TypeScript configuration., Generate JavaScript configuration., Format plugins array for config.          Validates each plugin name against a s, Add indentation to JSON string., Write configuration to file.          Returns:             Tuple of (success, me

### Community 105 - "Payload CMS Hooks Reference"
Cohesion: 0.29
Nodes (7): Collection Hooks, Date Field Auto-Set, Field Hooks, Hook Context, Hook Patterns Best Practices, Next.js Revalidation with Context Control, Payload CMS Hooks Reference

### Community 106 - "Common Plugin Types"
Cohesion: 0.29
Nodes (7): Adapter, Collection Provider, Common Plugin Types, Field Enhancer, Hook Injector, Integration, UI Enhancer

### Community 107 - "Admin UI Customization"
Cohesion: 0.29
Nodes (7): Admin UI Customization, Conditional Component Rendering, Custom Actions, Custom Collection Endpoints, Custom List Item Views, Custom Provider Pattern, Metadata Storage Pattern

### Community 108 - "route.ts"
Cohesion: 0.29
Nodes (6): DELETE, GET, OPTIONS, PATCH, POST, PUT

### Community 109 - "package.json"
Cohesion: 0.29
Nodes (6): license, name, private, publishConfig, access, version

### Community 110 - ".prettierrc.json"
Cohesion: 0.29
Nodes (6): endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 111 - "Advanced Configuration"
Cohesion: 0.33
Nodes (6): Advanced Configuration, Async Plugin Function, Collection Override with Async Support, Collection Slug Mapping, Config Sanitization Pattern, Multi-Collection Configuration

### Community 112 - "onlyBuiltDependencies"
Cohesion: 0.33
Nodes (6): sharp, pnpm, onlyBuiltDependencies, esbuild, unrs-resolver, sharp

### Community 113 - "index.ts"
Cohesion: 0.47
Nodes (3): globals, Profile, SiteSettings

### Community 114 - "TanStack Start - Basic React Query Example"
Cohesion: 0.33
Nodes (5): Build, Getting Started, Start a new project based on this example, TanStack Query Integration, TanStack Start - Basic React Query Example

### Community 115 - "shadow"
Cohesion: 0.47
Nodes (6): sm, shadow, sm, sm, $type, $value

### Community 116 - "_generate_intelligent_overrides"
Cohesion: 0.33
Nodes (6): _detect_page_type(), format_page_override_md(), _generate_intelligent_overrides(), Format a page-specific override file with intelligent AI-generated content., Generate intelligent overrides based on page type using layered search., Detect page type from context and search results.

### Community 117 - "react.js"
Cohesion: 0.47
Nodes (3): config, config, config

### Community 118 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, dev:safe, lint, lint:fix

### Community 119 - "Turborepo kitchen sink starter"
Cohesion: 0.33
Nodes (5): Apps and Packages, Turborepo kitchen sink starter, Using this example, Utilities, What's inside?

### Community 120 - "Common Patterns"
Cohesion: 0.40
Nodes (5): Common Patterns, Container Type Switching, Filter Data-Bearing Fields, Recursive Field Traversal, Safe Property Access

### Community 121 - "Data Guards"
Cohesion: 0.40
Nodes (5): Data Guards, fieldAffectsData, fieldIsHiddenOrDisabled, fieldIsID, fieldIsPresentationalOnly

### Community 122 - "Option & Value Guards"
Cohesion: 0.40
Nodes (5): Option & Value Guards, optionIsObject, optionIsValue, optionsAreObjects, valueIsValueWithRelation

### Community 123 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 124 - "deferred.tsx"
Cohesion: 0.50
Nodes (3): DeferredQuery(), deferredQueryOptions(), Route

### Community 125 - "radius"
Cohesion: 0.60
Nodes (5): radius, radius, radius, $type, $value

### Community 126 - "lg"
Cohesion: 0.60
Nodes (5): lg, $type, $value, lg, lg

### Community 127 - "index.ts"
Cohesion: 0.40
Nodes (4): Role, Roles, SkillCategories, SkillCategory

### Community 128 - "Testing Plugins"
Cohesion: 0.50
Nodes (4): End-to-End Tests (Playwright), Integration Tests (Vitest) (optional), Local Development with dev/ Directory (optional), Testing Plugins

### Community 131 - "padding-y"
Cohesion: 0.67
Nodes (4): padding-y, padding-y, $type, $value

### Community 132 - "xl"
Cohesion: 0.67
Nodes (4): xl, xl, $type, $value

### Community 133 - "$type"
Cohesion: 0.60
Nodes (5): $type, $value, border, border, border

### Community 134 - "none"
Cohesion: 0.67
Nodes (4): $type, $value, none, none

### Community 138 - "destructive"
Cohesion: 0.67
Nodes (3): destructive, $type, $value

### Community 139 - "md"
Cohesion: 0.67
Nodes (4): $type, $value, md, md

### Community 140 - "destructive-foreground"
Cohesion: 0.67
Nodes (3): destructive-foreground, $type, $value

### Community 141 - "muted"
Cohesion: 0.67
Nodes (3): muted, $type, $value

### Community 142 - "primary-foreground"
Cohesion: 0.67
Nodes (3): primary-foreground, $type, $value

### Community 143 - "ring"
Cohesion: 0.67
Nodes (3): ring, $type, $value

### Community 149 - "./extractors"
Cohesion: 0.67
Nodes (3): ./extractors, default, types

### Community 150 - "./formatters"
Cohesion: 0.67
Nodes (3): ./formatters, default, types

### Community 151 - "./transformers"
Cohesion: 0.67
Nodes (3): ./transformers, default, types

### Community 155 - "secondary-foreground"
Cohesion: 0.67
Nodes (3): secondary-foreground, $type, $value

## Knowledge Gaps
- **896 isolated node(s):** `name`, `version`, `description`, `license`, `type` (+891 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **43 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `primitive` connect `primitive` to `gray`, `design-tokens-starter.json`, `radius`, `spacing`, `shadow`, `fontSize`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Why does `Payload Plugin Development` connect `Payload Plugin Development` to `Testing Plugins`, `Best Practices`, `Common Plugin Types`, `Plugin Patterns`, `Advanced Patterns`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Why does `search()` connect `_search_csv` to `_generate_intelligent_overrides`, `DesignSystemGenerator`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Are the 36 inferred relationships involving `TailwindConfigGenerator` (e.g. with `TestGeneratedConfigIsValidJs` and `.test_node_check_parses_generated_config()`) actually correct?**
  _`TailwindConfigGenerator` has 36 INFERRED edges - model-reasoned connections that need verification._
- **Are the 23 inferred relationships involving `ShadcnInstaller` (e.g. with `TestShadcnInstaller` and `.test_add_all_components_dry_run()`) actually correct?**
  _`ShadcnInstaller` has 23 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _896 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `gray` be split into smaller, more focused modules?**
  _Cohesion score 0.05370101596516691 - nodes in this community are weakly interconnected._