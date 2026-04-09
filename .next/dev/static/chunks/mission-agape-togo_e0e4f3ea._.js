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
"[project]/mission-agape-togo/app/documents/statuts/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatutsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mission-agape-togo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$components$2f$DocumentContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mission-agape-togo/components/DocumentContent.tsx [app-client] (ecmascript)");
'use client';
;
;
function StatutsPage() {
    const content = [
        "TITRE I : DÉNOMINATION, SIÈGE, DURÉE, OBJET",
        "Article 1 : Dénomination\nIl est créé une association à but non lucratif régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, ayant pour dénomination : MISSION AGAPE.",
        "Article 2 : Siège\nLe siège social est fixé à [Adresse complète]. Il pourra être transféré par simple décision du Conseil d'Administration.",
        "Article 3 : Durée\nLa durée de l'association est illimitée.",
        "Article 4 : Objet\nL'association a pour objet :\n- La formation biblique et théologique\n- L'évangélisation\n- L'aide humanitaire\n- Le développement communautaire",
        "TITRE II : COMPOSITION - ADMISSION - RADIATION",
        "Article 5 : Composition\nL'association se compose de membres actifs, bienfaiteurs et d'honneur.",
        "Article 6 : Admission\nToute personne désirant faire partie de l'association doit adresser une demande écrite au Conseil d'Administration.",
        "Article 7 : Radiation\nLa qualité de membre se perd par démission ou radiation prononcée par le Conseil d'Administration.",
        "TITRE III : RESSOURCES",
        "Article 8 : Ressources\nLes ressources de l'association comprennent :\n- Les cotisations des membres\n- Les dons manuels\n- Les subventions\n- Toutes les ressources autorisées par la loi"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mission$2d$agape$2d$togo$2f$components$2f$DocumentContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentContent"], {
            title: "Statuts et Règlement Intérieur",
            content: content,
            className: "py-16"
        }, void 0, false, {
            fileName: "[project]/mission-agape-togo/app/documents/statuts/page.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mission-agape-togo/app/documents/statuts/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = StatutsPage;
var _c;
__turbopack_context__.k.register(_c, "StatutsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mission-agape-togo_e0e4f3ea._.js.map