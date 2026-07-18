# Domain Documentation

## Layout: Multi-context

This repository uses a multi-context domain documentation structure:

- Root `CONTEXT-MAP.md` file that references per-context `CONTEXT.md` files
- Each subsystem/bounded context has its own `CONTEXT.md` file
- Architecture Decision Records (ADRs) are stored in `docs/adr/` directory

### Structure
```
.
├── CONTEXT-MAP.md          # Root context map linking to subsystem contexts
├── CONTEXT.md              # Root context (optional, for cross-cutting concerns)
├── docs/
│   └── adr/                # Architecture Decision Records
│       ├── 0001-use-kafka.md
│       └── 0002-migrate-to-postgres.md
├── packages/
│   ├── auth/
│   │   └── CONTEXT.md      # Auth service context
│   ├── api/
│   │   └── CONTEXT.md      # API service context
│   └── web/
│       └── CONTEXT.md      # Web app context
└── apps/
    ├── web/
    │   └── CONTEXT.md      # Web application context
    └── mobile/
        └── CONTEXT.md      # Mobile application context
```

## Consumer Rules

Skills that consume domain documentation should:

1. **Read `CONTEXT-MAP.md` first** to understand the overall structure
2. **Follow links to context-specific `CONTEXT.md` files** for domain-specific details
3. **Check `docs/adr/` for architectural decisions** that affect implementation
4. **Respect context boundaries** when making changes
5. **Update the appropriate `CONTEXT.md`** when modifying domain-specific code
6. **Add ADRs** for significant architectural decisions

### Reading Context Files

When reading context files:
- Look for domain models, ubiquitous language, and core concepts
- Note any architectural constraints or principles
- Check for API contracts or interface definitions
- Identify shared kernel or anti-corruption layers

### Making Changes

When modifying code:
1. Determine which bounded context the change belongs to
2. Update the corresponding `CONTEXT.md` if domain knowledge changes
3. Consider if an ADR is needed for architectural decisions
4. Update any relevant API contracts or interface documentation

---
*Configuration managed by mattpocock-skills:setup-matt-pocock-skills*