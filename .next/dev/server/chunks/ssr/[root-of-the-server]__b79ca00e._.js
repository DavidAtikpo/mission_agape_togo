module.exports = [
"[project]/components/admin/InscriptionStatusForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InscriptionStatusForm",
    ()=>InscriptionStatusForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
'use client';
;
;
;
;
const labels = {
    NOUVELLE: 'Nouvelle',
    EN_COURS: 'En cours',
    TRAITEE: 'Traitée'
};
function InscriptionStatusForm({ id, current }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(current);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setStatus(current);
    }, [
        current
    ]);
    async function save() {
        setMessage('');
        setSuccess(false);
        setSaving(true);
        try {
            const res = await fetch(`/api/admin/inscriptions/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status
                })
            });
            if (!res.ok) {
                const d = await res.json().catch(()=>({}));
                setMessage(d.error || 'Erreur');
                return;
            }
            setSuccess(true);
            setMessage('Enregistré');
            router.refresh();
        } catch  {
            setMessage('Erreur réseau');
        } finally{
            setSaving(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: "status-select",
                value: status,
                onChange: (e)=>{
                    setStatus(e.target.value);
                    setSuccess(false);
                    setMessage('');
                },
                className: "rounded-md border border-input bg-background px-2 py-1.5 text-xs w-full sm:w-40",
                children: Object.keys(labels).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: s,
                        children: labels[s]
                    }, s, false, {
                        fileName: "[project]/components/admin/InscriptionStatusForm.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/admin/InscriptionStatusForm.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: save,
                disabled: saving || status === current,
                className: "inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50",
                children: [
                    saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-3.5 w-3.5 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/InscriptionStatusForm.tsx",
                        lineNumber: 75,
                        columnNumber: 19
                    }, this) : null,
                    "Enregistrer"
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/InscriptionStatusForm.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-flex items-center gap-1 text-xs ${success ? 'text-emerald-600' : 'text-destructive'}`,
                children: [
                    success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/InscriptionStatusForm.tsx",
                        lineNumber: 80,
                        columnNumber: 22
                    }, this) : null,
                    message
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/InscriptionStatusForm.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/InscriptionStatusForm.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/(protected)/data:b610ac [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"408e71dd0d0c89c8f7077d35f13532af18da64d548":"deleteInscription"},"app/admin/(protected)/actions.ts",""] */ __turbopack_context__.s([
    "deleteInscription",
    ()=>deleteInscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteInscription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("408e71dd0d0c89c8f7077d35f13532af18da64d548", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteInscription"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnXHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXHJcbmltcG9ydCB7IEFETUlOX1NFU1NJT05fQ09PS0lFIH0gZnJvbSAnQC9saWIvYWRtaW4tc2Vzc2lvbidcclxuaW1wb3J0IHsgZ2V0QWRtaW5TZXNzaW9uVmFsaWQgfSBmcm9tICdAL2xpYi9hZG1pbi1hdXRoJ1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGliL3ByaXNtYSdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXRBZG1pbigpIHtcclxuICA7KGF3YWl0IGNvb2tpZXMoKSkuZGVsZXRlKEFETUlOX1NFU1NJT05fQ09PS0lFKVxyXG4gIHJlZGlyZWN0KCcvYWRtaW4vbG9naW4nKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5zY3JpcHRpb24oZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgaWYgKCEoYXdhaXQgZ2V0QWRtaW5TZXNzaW9uVmFsaWQoKSkpIHtcclxuICAgIHJlZGlyZWN0KCcvYWRtaW4vbG9naW4nKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJylcclxuICBjb25zdCByZWRpcmVjdFRvID0gZm9ybURhdGEuZ2V0KCdyZWRpcmVjdFRvJylcclxuXHJcbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgIWlkLnRyaW0oKSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLmluc2NyaXB0aW9uLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBpZC50cmltKCkgfSB9KVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2luc2NyaXB0aW9ucycpXHJcbiAgcmV2YWxpZGF0ZVBhdGgoYC9hZG1pbi9pbnNjcmlwdGlvbnMvJHtpZC50cmltKCl9YClcclxuXHJcbiAgaWYgKHR5cGVvZiByZWRpcmVjdFRvID09PSAnc3RyaW5nJyAmJiByZWRpcmVjdFRvLnN0YXJ0c1dpdGgoJy9hZG1pbicpKSB7XHJcbiAgICByZWRpcmVjdChyZWRpcmVjdFRvKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJTQWNzQiJ9
}),
"[project]/components/admin/DeleteInscriptionButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteInscriptionButton",
    ()=>DeleteInscriptionButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f28$protected$292f$data$3a$b610ac__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/admin/(protected)/data:b610ac [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
function DeleteInscriptionButton({ id, label, redirectTo, variant = 'discreet', className = '' }) {
    function handleSubmit(e) {
        const confirmed = window.confirm(`Supprimer définitivement l'inscription de ${label} ?\n\nCette action ne peut pas être annulée.`);
        if (!confirmed) {
            e.preventDefault();
            return;
        }
        const secondConfirm = window.confirm('Dernière confirmation : voulez-vous vraiment supprimer ce dossier ?');
        if (!secondConfirm) {
            e.preventDefault();
        }
    }
    const classNames = variant === 'table' ? 'inline-flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground hover:text-destructive underline-offset-2 hover:underline cursor-pointer bg-transparent border-0 p-0' : 'inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive underline-offset-2 hover:underline cursor-pointer bg-transparent border-0 p-0';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f28$protected$292f$data$3a$b610ac__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteInscription"],
        onSubmit: handleSubmit,
        className: `inline ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "id",
                value: id
            }, void 0, false, {
                fileName: "[project]/components/admin/DeleteInscriptionButton.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            redirectTo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "redirectTo",
                value: redirectTo
            }, void 0, false, {
                fileName: "[project]/components/admin/DeleteInscriptionButton.tsx",
                lineNumber: 45,
                columnNumber: 21
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: classNames,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        className: "h-3 w-3 shrink-0 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/DeleteInscriptionButton.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    "Supprimer le dossier"
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/DeleteInscriptionButton.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/DeleteInscriptionButton.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[project]/lib/inscription-labels.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INSCRIPTION_FIELD_LABELS",
    ()=>INSCRIPTION_FIELD_LABELS,
    "entriesFromData",
    ()=>entriesFromData,
    "formatInscriptionValue",
    ()=>formatInscriptionValue,
    "labelForInscriptionKey",
    ()=>labelForInscriptionKey,
    "statusLabel",
    ()=>statusLabel
]);
const INSCRIPTION_FIELD_LABELS = {
    nom: 'Nom',
    prenom: 'Prénom(s)',
    dateNaissance: 'Date de naissance',
    lieuNaissance: 'Lieu de naissance',
    adresse: 'Adresse',
    telephone: 'Téléphone',
    email: 'E-mail',
    niveauEtude: 'Dernier diplôme obtenu',
    egliseLocale: 'Église locale',
    pasteurResponsable: 'Pasteur responsable',
    formationSouhaitee: 'Formation souhaitée',
    motivation: 'Motivation',
    situationFamiliale: 'Situation familiale',
    nombreEnfants: "Nombre d'enfants à charge",
    profession: 'Profession actuelle',
    employeur: 'Employeur',
    adresseProfessionnelle: 'Adresse professionnelle',
    telephoneProfessionnel: 'Téléphone professionnel',
    personneContact: 'Personne à contacter',
    telephoneContact: 'Téléphone du contact',
    lienParente: 'Lien de parenté',
    groupeSanguin: 'Groupe sanguin',
    allergies: 'Allergies',
    traitementMedical: 'Traitement médical',
    experienceChretienne: 'Expérience chrétienne',
    ministeres: 'Ministères',
    attentes: 'Attentes',
    nomComplet: 'Nom complet',
    responsableLegal: 'Responsable légal',
    telephoneResponsable: 'Téléphone du responsable',
    accepteReglement: 'Acceptation du règlement intérieur',
    autoriseUtilisationImage: 'Autorisation utilisation d’image',
    date: 'Date',
    signature: 'Signature (nom / mention)'
};
function labelForInscriptionKey(key) {
    return INSCRIPTION_FIELD_LABELS[key] ?? key.replace(/([A-Z])/g, ' $1').replace(/^./, (c)=>c.toUpperCase()).trim();
}
function formatInscriptionValue(value) {
    if (value === null || value === undefined || value === '') return '—';
    if (typeof value === 'boolean') return value ? 'Oui' : 'Non';
    if (typeof value === 'object') return JSON.stringify(value, null, 2);
    return String(value);
}
function statusLabel(status) {
    if (status === 'NOUVELLE') return 'Nouvelle';
    if (status === 'EN_COURS') return 'En cours';
    if (status === 'TRAITEE') return 'Traitée';
    return status;
}
function entriesFromData(data) {
    if (data === null || typeof data !== 'object' || Array.isArray(data)) {
        return [
            [
                'Contenu',
                formatInscriptionValue(data)
            ]
        ];
    }
    const entries = Object.entries(data);
    if (entries.length === 0) return [
        [
            '—',
            'Aucune donnée'
        ]
    ];
    return entries.map(([key, value])=>[
            labelForInscriptionKey(key),
            formatInscriptionValue(value)
        ]);
}
}),
"[project]/lib/inscription-pdf.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadInscriptionPdf",
    ()=>downloadInscriptionPdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inscription$2d$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/inscription-labels.ts [app-ssr] (ecmascript)");
;
;
;
const LOGO_PATH = '/imageagape.jpeg';
const BRAND_RED = [
    215,
    31,
    42
];
function slugify(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
}
async function loadLogoDataUrl() {
    try {
        const res = await fetch(LOGO_PATH, {
            cache: 'force-cache'
        });
        if (!res.ok) return null;
        const blob = await res.blob();
        const dataUrl = await new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
        const format = blob.type.includes('png') ? 'PNG' : 'JPEG';
        return {
            dataUrl,
            format
        };
    } catch  {
        return null;
    }
}
function addSection(doc, title, startY, rows) {
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = startY;
    if (y > pageHeight - 40) {
        doc.addPage();
        y = 18;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(30, 30, 30);
    doc.text(title, 14, y);
    y += 2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: y + 4,
        body: rows,
        theme: 'grid',
        styles: {
            fontSize: 9,
            cellPadding: 2.5,
            overflow: 'linebreak',
            valign: 'top',
            textColor: [
                30,
                30,
                30
            ]
        },
        columnStyles: {
            0: {
                cellWidth: 58,
                fontStyle: 'bold',
                fillColor: [
                    250,
                    250,
                    250
                ]
            },
            1: {
                cellWidth: 'auto'
            }
        },
        margin: {
            left: 14,
            right: 14
        }
    });
    return doc.lastAutoTable.finalY + 10;
}
function drawPdfHeader(doc, row, dateReception, logo) {
    const logoSize = 18;
    const logoX = 14;
    const logoY = 10;
    if (logo) {
        doc.addImage(logo.dataUrl, logo.format, logoX, logoY, logoSize, logoSize, undefined, 'FAST');
    }
    const textX = logo ? logoX + logoSize + 5 : logoX;
    doc.setTextColor(...BRAND_RED);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.text('MISSION AGAPE', textX, 16);
    doc.setTextColor(90, 90, 90);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Togo — Formation & discipolat', textX, 22);
    const lineY = logoY + logoSize + 4;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.4);
    doc.line(14, lineY, 196, lineY);
    let y = lineY + 7;
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text("Dossier d'inscription", 14, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(`Réf. dossier : ${row.id}`, 14, y);
    y += 5;
    doc.text(`Reçu le ${dateReception}`, 14, y);
    return y + 10;
}
async function downloadInscriptionPdf(row) {
    const logo = await loadLogoDataUrl();
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsPDF"]({
        format: 'a4',
        unit: 'mm'
    });
    const createdAt = row.createdAt instanceof Date ? row.createdAt : new Date(row.createdAt);
    const dateReception = new Intl.DateTimeFormat('fr-FR', {
        dateStyle: 'long',
        timeStyle: 'short'
    }).format(createdAt);
    const dateDocument = new Intl.DateTimeFormat('fr-FR', {
        dateStyle: 'long'
    }).format(new Date());
    let y = drawPdfHeader(doc, row, dateReception, logo);
    y = addSection(doc, 'Synthèse administrative', y, [
        [
            'Statut du dossier',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inscription$2d$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statusLabel"])(row.status)
        ],
        [
            'Nom complet',
            `${row.prenom} ${row.nom}`
        ],
        [
            'E-mail',
            row.email
        ],
        [
            'Téléphone',
            row.telephone
        ],
        [
            'Formation souhaitée',
            row.formationSouhaitee ?? '—'
        ]
    ]);
    y = addSection(doc, "Étape 1 — Formulaire d'inscription", y, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inscription$2d$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entriesFromData"])(row.inscriptionData));
    y = addSection(doc, 'Étape 2 — Fiche de renseignements', y, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inscription$2d$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entriesFromData"])(row.renseignementsData));
    addSection(doc, 'Étape 3 — Décharge de consentement', y, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inscription$2d$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["entriesFromData"])(row.consentementData));
    const pageCount = doc.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++){
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(120, 120, 120);
        doc.text(`Document généré le ${dateDocument} — Mission Agapé Togo — Page ${i}/${pageCount}`, 14, doc.internal.pageSize.getHeight() - 8);
    }
    const filename = `inscription-${slugify(row.nom)}-${slugify(row.prenom)}.pdf`;
    doc.save(filename);
}
}),
"[project]/components/admin/PrintPdfButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintPdfButton",
    ()=>PrintPdfButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inscription$2d$pdf$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/inscription-pdf.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function PrintPdfButton({ row }) {
    const [downloading, setDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleDownload() {
        setDownloading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$inscription$2d$pdf$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadInscriptionPdf"])(row);
        } finally{
            setTimeout(()=>setDownloading(false), 600);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-1.5 print:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>void handleDownload(),
                disabled: downloading,
                className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60",
                children: [
                    downloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-3.5 w-3.5 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/PrintPdfButton.tsx",
                        lineNumber: 31,
                        columnNumber: 24
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/PrintPdfButton.tsx",
                        lineNumber: 31,
                        columnNumber: 75
                    }, this),
                    downloading ? '…' : 'PDF'
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/PrintPdfButton.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>window.print(),
                className: "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium hover:bg-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/PrintPdfButton.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    "Imprimer"
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/PrintPdfButton.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/PrintPdfButton.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b79ca00e._.js.map