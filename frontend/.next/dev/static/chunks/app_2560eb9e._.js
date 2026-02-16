(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/lib/socket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
const backend_url = ("TURBOPACK compile-time value", "http://192.168.31.111:3001");
console.log(backend_url);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(backend_url, {
    transports: [
        "websocket"
    ]
});
const __TURBOPACK__default__export__ = socket;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/store/userGamestore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userGamestore",
    ()=>userGamestore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const userGamestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        gameState: null,
        gameError: null,
        setGameState: (state)=>set({
                gameState: state
            }),
        setGameError: (error)=>set({
                gameError: error
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/providers/socketProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocketProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/userGamestore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SocketProvider({ children }) {
    _s();
    const { setGameState, setGameError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userGamestore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SocketProvider.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].connect();
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("gameStateUpdate", setGameState);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("gameError", setGameError);
            return ({
                "SocketProvider.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("gameStateUpdate");
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("gameError");
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disconnect();
                }
            })["SocketProvider.useEffect"];
        }
    }["SocketProvider.useEffect"], [
        setGameState,
        setGameError
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(SocketProvider, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SocketProvider;
var _c;
__turbopack_context__.k.register(_c, "SocketProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_2560eb9e._.js.map