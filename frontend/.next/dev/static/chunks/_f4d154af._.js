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
    const e = new Error("Cannot find module '../components/room/GameRoom'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../page'");
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
;
;
function RoomPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { gameState, setGameState } = userGamestore();
    const [commentary, setCommentary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 1. HANDLE GAME EVENTS & ERRORS
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            const handleGameStateUpdate = {
                "RoomPage.useEffect.handleGameStateUpdate": (state)=>{
                    console.log("Game state updated:", state);
                    setGameState(state);
                    // Save valid room ID for valid reconnections later
                    localStorage.setItem("lastRoomId", state.roomId);
                }
            }["RoomPage.useEffect.handleGameStateUpdate"];
            const handleGameEnded = {
                "RoomPage.useEffect.handleGameEnded": ({ gameState, commentary })=>{
                    setGameState(gameState);
                    setCommentary(commentary);
                }
            }["RoomPage.useEffect.handleGameEnded"];
            const handleGameError = {
                "RoomPage.useEffect.handleGameError": (err)=>{
                    console.error("Game error received:", err);
                    // CRITICAL FIX: If game is not found (stale ID), clear storage and go home
                    if (err === "game not found" || err.includes("not found")) {
                        console.warn("Invalid room detected. Clearing storage and redirecting.");
                        localStorage.removeItem("lastRoomId");
                        router.push("/");
                    }
                }
            }["RoomPage.useEffect.handleGameError"];
            socket.on("gameStateUpdate", handleGameStateUpdate);
            socket.on("gameEnded", handleGameEnded);
            socket.on("gameError", handleGameError);
            return ({
                "RoomPage.useEffect": ()=>{
                    socket.off("gameStateUpdate", handleGameStateUpdate);
                    socket.off("gameEnded", handleGameEnded);
                    socket.off("gameError", handleGameError);
                }
            })["RoomPage.useEffect"];
        }
    }["RoomPage.useEffect"], [
        setGameState,
        router
    ]);
    // 2. HANDLE RECONNECTION (On Refresh Only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            // Only try to reconnect if we have NO state but DO have a stored ID
            const lastRoomId = localStorage.getItem("lastRoomId");
            if (!gameState && lastRoomId) {
                console.log("Attempting to reconnect to:", lastRoomId);
                socket.emit("reconnectRoom", {
                    roomId: lastRoomId,
                    clientId: getClientId()
                });
            }
        }
    }["RoomPage.useEffect"], [
        gameState
    ]); // Keep this dependency to check only when state is missing
    // 3. HANDLE CLEANUP / LEAVE ROOM
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            const lastRoomId = localStorage.getItem("lastRoomId");
            // If we have no state and no stored ID, we shouldn't be here -> Go Home
            if (!gameState && !lastRoomId) {
                router.push("/");
            }
            // Cleanup function: ONLY runs when component unmounts (Refresh/Back Button)
            return ({
                "RoomPage.useEffect": ()=>{
                    // We check if gameState exists roughly to see if we were in a game
                    // (Using the ref or just firing leaveRoom safely)
                    if (gameState?.roomId) {
                        console.log("Leaving room...");
                        socket.emit("leaveRoom", {
                            roomId: gameState.roomId,
                            clientId: getClientId()
                        });
                    }
                }
            })["RoomPage.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["RoomPage.useEffect"], []); // <--- CRITICAL FIX: Empty dependency array prevents kicking player on every render
    // 4. RENDER LOADING STATE
    if (!gameState) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-10 text-fg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading room..."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    localStorage.removeItem("lastRoomId");
                    router.push("/");
                },
                className: "mt-4 text-sm text-purple underline cursor-pointer",
                children: "Stuck? Click here to go Home"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 100,
        columnNumber: 7
    }, this);
    const currentPlayer = gameState.players.find((p)=>p.clientId === getClientId());
    const isEliminated = currentPlayer?.isEliminated;
    switch(gameState.status){
        case "LOBBY":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaitingLobby, {
                players: gameState.players,
                roomId: gameState.roomId,
                maxPlayers: gameState.maxPlayers
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this);
        case "INGAME":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                children: [
                    isEliminated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed top-0 left-0 w-full h-16 bg-red-600/90 text-white z-50 flex items-center justify-center font-bold text-xl animate-pulse",
                        children: "YOU HAVE BEEN DISQUALIFIED!"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: isEliminated ? "opacity-75 pointer-events-none grayscale" : "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameRoom, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this);
        case "FINISHED":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center min-h-screen p-10 text-center space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-black text-(--color-pink)",
                        children: "GAME OVER"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl",
                        children: [
                            "Winner:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-green-400",
                                children: gameState.winner
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this),
                    commentary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-(--color-line) p-6 rounded-xl border border-(--color-purple) max-w-2xl mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm uppercase tracking-widest text-(--color-comment) mb-2",
                                children: "AI Commentator"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl italic font-serif leading-relaxed",
                                children: [
                                    '"',
                                    commentary,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            localStorage.removeItem("lastRoomId"); // Clean up so we don't reconnect to finished game
                            router.push("/");
                        },
                        className: "px-6 py-3 bg-(--color-purple) rounded-lg font-bold hover:scale-105 transition",
                        children: "Back to Home"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Unknown game status!"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 176,
                columnNumber: 14
            }, this);
    }
}
_s(RoomPage, "iEwRGt4v/BPh03FdDf60WRSHp68=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RoomPage;
var _c;
__turbopack_context__.k.register(_c, "RoomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_f4d154af._.js.map