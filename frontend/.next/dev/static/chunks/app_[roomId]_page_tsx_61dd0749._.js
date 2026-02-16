(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/[roomId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/userGamestore.ts [app-client] (ecmascript)");
"use client";
;
;
function RoomPage() {
    const { gameState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userGamestore"])();
    if (!gameState) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center text-(--color-fg)",
        children: "Loading gamestate ..."
    }, void 0, false, {
        fileName: "[project]/app/[roomId]/page.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, this);
}
_c = RoomPage;
var _c;
__turbopack_context__.k.register(_c, "RoomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%5BroomId%5D_page_tsx_61dd0749._.js.map