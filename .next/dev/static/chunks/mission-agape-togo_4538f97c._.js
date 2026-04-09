(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mission-agape-togo/components/DocumentContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentContent",
    ()=>DocumentContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mission-agape-togo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mission-agape-togo/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mission-agape-togo/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mission-agape-togo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mission-agape-togo/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DocumentContent({ title, content, className = '', children }) {
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentContent.useEffect": ()=>{
            setIsMounted(true);
        }
    }["DocumentContent.useEffect"], []);
    const renderContent = ()=>{
        return content.map((item, index)=>{
            if (typeof item === 'string') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    className: "mb-4 leading-relaxed",
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.1 + index * 0.05,
                        duration: 0.3
                    },
                    children: item
                }, `text-${index}`, false, {
                    fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this);
            }
            if (item.type === 'image') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex justify-center my-6",
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.2 + index * 0.05,
                        duration: 0.4
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: item.src,
                        alt: item.alt,
                        width: 800,
                        height: 500,
                        className: `max-w-full h-auto rounded-lg shadow-lg ${item.className || ''}`
                    }, void 0, false, {
                        fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this)
                }, `img-${index}`, false, {
                    fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this);
            }
            return null;
        });
    };
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: `py-12 bg-background ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-primary mb-8 text-center",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-lg max-w-none text-foreground/90",
                        children: renderContent()
                    }, void 0, false, {
                        fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        className: `py-12 bg-background ${className}`,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        transition: {
            duration: 0.5
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    className: "text-3xl md:text-4xl font-bold text-primary mb-8 text-center",
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.1,
                        duration: 0.5
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-lg max-w-none text-foreground/90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: renderContent()
                    }, void 0, false, {
                        fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mission-agape-togo/components/DocumentContent.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(DocumentContent, "h7njlszr1nxUzrk46zHyBTBrvgI=");
_c = DocumentContent;
var _c;
__turbopack_context__.k.register(_c, "DocumentContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mission-agape-togo/app/documents/prospectus/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProspectusPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mission-agape-togo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$components$2f$DocumentContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mission-agape-togo/components/DocumentContent.tsx [app-client] (ecmascript)");
'use client';
;
;
function ProspectusPage() {
    const content = [
        "ÉCOLE D'ÉVANGÉLISATION MISSION AGAPE",
        "Présentation\nL'École d'Évangélisation de Mission Agape forme des évangélistes compétents pour annoncer l'Évangile avec puissance et pertinence dans notre contexte actuel.",
        "Objectifs de la formation :\n- Acquérir une solide formation biblique et théologique\n- Développer des compétences pratiques en prédication et enseignement\n- Maîtriser les outils d'évangélisation contemporains\n- Vivre une expérience missionnaire sur le terrain",
        "Programme de formation :\n1. Fondements bibliques de l'évangélisation\n2. Théologie de la mission\n3. Méthodes d'évangélisation\n4. Communication de l'Évangile\n5. Ministère pratique\n6. Stage sur le terrain",
        "Durée de la formation :\n- Formation intensive de 6 mois\n- 4 mois de cours théoriques\n- 2 mois de stage pratique\n- Début des cours : [Date]",
        "Conditions d'admission :\n- Avoir au moins 18 ans\n- Être membre actif d'une église locale\n- Lettre de recommandation pastorale\n- Entretien de motivation",
        "Frais de scolarité :\n- Frais d'inscription : [Montant]\n- Frais de scolarité mensuels : [Montant]\n- Possibilité de bourses d'études sous conditions"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$components$2f$DocumentContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentContent"], {
            title: "Prospectus de l'École d'Évangélisation",
            content: content,
            className: "py-16"
        }, void 0, false, {
            fileName: "[project]/mission-agape-togo/app/documents/prospectus/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mission-agape-togo/app/documents/prospectus/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ProspectusPage;
var _c;
__turbopack_context__.k.register(_c, "ProspectusPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mission-agape-togo_4538f97c._.js.map