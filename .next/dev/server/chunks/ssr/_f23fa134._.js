module.exports = [
"[project]/lib/ecoles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ecoles",
    ()=>ecoles,
    "getEcoleBySlug",
    ()=>getEcoleBySlug
]);
const ecoles = [
    {
        slug: 'evangelisation',
        title: 'École d\'Évangélisation',
        shortTitle: 'Évangélisation',
        description: 'Devenir un témoin efficace de l\'Évangile. Rentrée le 5 septembre 2026.',
        href: '/ecoles',
        status: 'En cours',
        statusColor: 'bg-green-100 text-green-800'
    },
    {
        slug: 'communication',
        title: 'École de Communication',
        shortTitle: 'Communication',
        description: 'Inspirer et influencer positivement votre audience.',
        href: '/ecoles/communication',
        status: 'Disponible',
        statusColor: 'bg-green-100 text-green-800'
    },
    {
        slug: 'bible-inductive',
        title: 'École Inductive de la Bible',
        shortTitle: 'Bible inductive',
        description: 'Étude biblique profonde avec la méthode inductive.',
        href: '/ecoles/bible-inductive',
        status: 'Disponible',
        statusColor: 'bg-green-100 text-green-800'
    },
    {
        slug: 'relation-aide',
        title: 'École Relation d\'Aide',
        shortTitle: 'Relation d\'aide',
        description: 'Accompagner et soutenir ceux qui font face à des défis.',
        href: '/ecoles/relation-aide',
        status: 'Disponible',
        statusColor: 'bg-green-100 text-green-800'
    },
    {
        slug: 'intersession',
        title: 'École d\'Intersession',
        shortTitle: 'Intersession',
        description: 'Sessions courtes et intensives tout au long de l\'année.',
        href: '/ecoles/intersession',
        status: 'Disponible',
        statusColor: 'bg-green-100 text-green-800'
    }
];
function getEcoleBySlug(slug) {
    return ecoles.find((e)=>e.slug === slug);
}
}),
"[project]/components/ecoles/EcolesSubNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EcolesSubNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ecoles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ecoles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function EcolesSubNav() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const otherEcoles = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ecoles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ecoles"].filter((e)=>e.href !== '/ecoles');
    const tabs = [
        {
            href: '/ecoles',
            label: 'Évangélisation'
        },
        ...otherEcoles.map((e)=>({
                href: e.href,
                label: e.shortTitle
            }))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md shadow-sm print:hidden",
        "aria-label": "Navigation des écoles",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 py-3 overflow-x-auto scrollbar-thin",
                children: tabs.map((tab)=>{
                    const active = tab.href === '/ecoles' ? pathname === '/ecoles' : pathname === tab.href || pathname.startsWith(`${tab.href}/`);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: tab.href,
                        className: `shrink-0 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${active ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20' : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'}`,
                        children: tab.label
                    }, tab.href, false, {
                        fileName: "[project]/components/ecoles/EcolesSubNav.tsx",
                        lineNumber: 26,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ecoles/EcolesSubNav.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ecoles/EcolesSubNav.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ecoles/EcolesSubNav.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_f23fa134._.js.map