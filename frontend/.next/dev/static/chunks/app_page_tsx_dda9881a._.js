(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/socket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/WaitingLobby'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../store/userGamestore'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/GameRoom'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function RoomPage() {
    _s();
    const { gameState, setGameState } = userGamestore();
    // Store gameState updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            const handler = {
                "RoomPage.useEffect.handler": (state)=>{
                    setGameState(state);
                    localStorage.setItem("lastRoomId", state.roomId);
                    localStorage.setItem("lastSocketId", socket.id);
                }
            }["RoomPage.useEffect.handler"];
            socket.on("gameStateUpdate", handler);
            socket.on("gameError", {
                "RoomPage.useEffect": (err)=>console.error("Game error:", err)
            }["RoomPage.useEffect"]);
            return ({
                "RoomPage.useEffect": ()=>{
                    socket.off("gameStateUpdate", handler);
                    socket.off("gameError");
                }
            })["RoomPage.useEffect"];
        }
    }["RoomPage.useEffect"], []);
    // Reconnect properly when socket connects again
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            const lastSocketId = localStorage.getItem("lastSocketId");
            const lastRoomId = localStorage.getItem("lastRoomId");
            const onConnect = {
                "RoomPage.useEffect.onConnect": ()=>{
                    if (!gameState && lastSocketId && lastRoomId) {
                        console.log("Socket connected → requesting reconnection");
                        socket.emit("reconnectRoom", lastSocketId);
                    }
                }
            }["RoomPage.useEffect.onConnect"];
            socket.on("connect", onConnect);
            return ({
                "RoomPage.useEffect": ()=>socket.off("connect", onConnect)
            })["RoomPage.useEffect"];
        }
    }["RoomPage.useEffect"], []);
    if (!gameState) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center",
        children: "Loading game..."
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 48,
        columnNumber: 7
    }, this);
    switch(gameState.status){
        case "LOBBY":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaitingLobby, {
                players: gameState.players,
                roomId: gameState.roomId,
                maxPlayers: gameState.maxPlayers
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this);
        case "INGAME":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameRoom, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 63,
                columnNumber: 14
            }, this);
        case "FINISHED":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Game Finished!"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 65,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Unknown game status."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 67,
                columnNumber: 14
            }, this);
    }
}
_s(RoomPage, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = RoomPage;
var _c;
__turbopack_context__.k.register(_c, "RoomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_tsx_dda9881a._.js.map