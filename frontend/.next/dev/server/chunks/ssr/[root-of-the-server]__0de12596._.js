module.exports = [
"[project]/app/components/WaitingLobby.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaitingLobby
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
"use client";
;
;
;
function WaitingLobby({ players, roomId, maxPlayers }) {
    const playerCount = players.length;
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = async ()=>{
        const inviteLink = `${window.location.origin}/?room=${roomId}`;
        try {
            await navigator.clipboard.writeText(inviteLink);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
            // Fallback: show error to user
            alert("Failed to copy invite link");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen text-(--color-fg)",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-(--color-bg)/60 backdrop-blur-lg border border-(--color-line) rounded-2xl shadow-lg p-6 w-[90%] max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4 text-center text-(--color-purple)",
                    children: "Players in Room"
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitingLobby.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm mb-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-(--color-fg)",
                                children: [
                                    "Players: ",
                                    playerCount,
                                    " / ",
                                    maxPlayers
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/WaitingLobby.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/WaitingLobby.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-(--color-line) rounded-full h-2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-(--color-purple) h-2.5 rounded-full transition-all duration-300 ease-out",
                                style: {
                                    width: `${playerCount / maxPlayers * 100}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/WaitingLobby.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/WaitingLobby.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/WaitingLobby.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-(--color-line) rounded-lg p-3 mb-4 max-h-64 overflow-y-auto",
                    children: players.length > 0 ? players.map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-1 px-2 text-center text-(--color-fg) border-b border-(--color-line) last:border-none",
                            children: val.username
                        }, val.id, false, {
                            fileName: "[project]/app/components/WaitingLobby.tsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-(--color-comment)",
                        children: "Waiting for players..."
                    }, void 0, false, {
                        fileName: "[project]/app/components/WaitingLobby.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/WaitingLobby.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCopy,
                    className: "flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-(--color-purple) hover:bg-(--color-pink) text-white font-medium transition-all duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/app/components/WaitingLobby.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        copied ? "Copied!" : "Copy Invite Link"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/WaitingLobby.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WaitingLobby.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/WaitingLobby.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/room/PlayerList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-ssr] (ecmascript) <export default as UserCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/userGamestore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function PlayerList() {
    const players = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userGamestore"])((s)=>s.gameState?.players ?? []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-line rounded-lg p-6 shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold text-fg border-b border-comment/50 pb-2",
                children: "Players"
            }, void 0, false, {
                fileName: "[project]/app/components/room/PlayerList.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-none p-0 m-0 flex flex-col gap-3 mt-4",
                children: players.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-3 text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    idx + 1,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/room/PlayerList.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"], {
                                className: "text-comment w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/app/components/room/PlayerList.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-fg",
                                children: p.username
                            }, void 0, false, {
                                fileName: "[project]/app/components/room/PlayerList.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/app/components/room/PlayerList.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/room/PlayerList.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/room/PlayerList.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/room/CurrentPlayerHighlight.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CurrentPlayerHighlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/userGamestore.ts [app-ssr] (ecmascript)");
"use client";
;
;
function CurrentPlayerHighlight() {
    const gameState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userGamestore"])((s)=>s.gameState);
    if (!gameState || !gameState.players || gameState.players.length === 0) return null;
    const currentPlayerId = gameState?.currentPlayerId;
    const players = gameState.players;
    const currentPlayer = players.find((p)=>p.id === currentPlayerId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-comment",
                children: "Current Turn:"
            }, void 0, false, {
                fileName: "[project]/app/components/room/CurrentPlayerHighlight.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-purple",
                children: currentPlayer?.username ?? "Waiting..."
            }, void 0, false, {
                fileName: "[project]/app/components/room/CurrentPlayerHighlight.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/room/CurrentPlayerHighlight.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/room/WordHistory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WordHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/userGamestore.ts [app-ssr] (ecmascript)");
"use client";
;
;
function WordHistory() {
    const gameState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userGamestore"])((s)=>s.gameState);
    const history = gameState?.wordHistory ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-line rounded-lg p-6 shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold text-fg border-b border-comment/50 pb-2",
                children: "Word History"
            }, void 0, false, {
                fileName: "[project]/app/components/room/WordHistory.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-none p-0 m-0 max-h-[200px] overflow-y-auto text-comment mt-4",
                children: [
                    history.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "italic text-comment",
                        children: "No words yet"
                    }, void 0, false, {
                        fileName: "[project]/app/components/room/WordHistory.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    history.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "py-1 font-mono",
                            children: word.toUpperCase()
                        }, index, false, {
                            fileName: "[project]/app/components/room/WordHistory.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/room/WordHistory.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/room/WordHistory.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/room/GameInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/userGamestore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/socket.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function GameInput() {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const gameState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userGamestore"])((s)=>s.gameState);
    const mySocketId = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]?.id;
    const currentPlayerId = gameState?.currentPlayerId;
    const isMyTurn = currentPlayerId && mySocketId ? currentPlayerId === mySocketId : false;
    const isAiThinking = gameState?.isAiThinking ?? false;
    const disabled = !isMyTurn || isAiThinking;
    const handleSubmit = ()=>{
        if (!value.trim() || disabled || !gameState) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]?.emit("submitWord", {
            roomId: gameState.roomId,
            word: value.trim(),
            playerId: mySocketId
        });
        setValue("");
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") handleSubmit();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 flex gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `border border-comment/50 rounded-lg bg-line px-3 py-2 text-fg w-64 focus:outline-none focus:border-purple transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : ""}`,
                placeholder: isAiThinking ? "AI is judging..." : !isMyTurn ? "Waiting for other player..." : "Type your word...",
                disabled: disabled,
                value: value,
                onChange: (e)=>setValue(e.target.value),
                onKeyDown: handleKeyDown,
                autoFocus: true
            }, void 0, false, {
                fileName: "[project]/app/components/room/GameInput.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSubmit,
                className: `px-4 py-2 rounded-lg font-semibold transition-all ${disabled ? "bg-comment/20 text-comment cursor-not-allowed" : "bg-purple hover:bg-purple/80 text-white cursor-pointer"}`,
                disabled: disabled,
                children: "Submit"
            }, void 0, false, {
                fileName: "[project]/app/components/room/GameInput.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/room/GameInput.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/room/GameRoom.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/userGamestore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$PlayerList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/room/PlayerList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$CurrentPlayerHighlight$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/room/CurrentPlayerHighlight.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$WordHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/room/WordHistory.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$GameInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/room/GameInput.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function GameRoom() {
    const gameState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userGamestore"])((s)=>s.gameState);
    if (!gameState) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-10 text-fg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading room..."
        }, void 0, false, {
            fileName: "[project]/app/components/room/GameRoom.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/room/GameRoom.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, this);
    const { roomId } = gameState;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen w-full text-fg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-1 p-8 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "shrink-0 w-[300px] flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$PlayerList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/room/GameRoom.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$WordHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/room/GameRoom.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/room/GameRoom.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex-1 flex flex-col justify-center items-center bg-line rounded-lg p-8 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$CurrentPlayerHighlight$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/room/GameRoom.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl font-bold text-fg tracking-wider mt-6",
                                children: "Word Chain Game"
                            }, void 0, false, {
                                fileName: "[project]/app/components/room/GameRoom.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$GameInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/room/GameRoom.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/room/GameRoom.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/room/GameRoom.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-6 bg-line text-fg font-bold w-10 h-10 flex items-center justify-center rounded-full border border-comment/50",
                children: roomId.slice(0, 1).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/app/components/room/GameRoom.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/room/GameRoom.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/components/ModeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModeToggle,
    "playClickSound",
    ()=>playClickSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
"use client";
;
;
const playClickSound = (music)=>{
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
        const sound = new Audio(music);
        console.log(sound);
        sound.volume = 0.4; // not too loud
        sound.currentTime = 0;
        sound.play().catch(()=>{});
    }
};
function ModeToggle({ mode, setMode }) {
    const isMode = mode === "join";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>{
            setMode(isMode ? "create" : "join");
            playClickSound("../../sounds/modechange.mp3");
        },
        className: "flex items-center gap-2 px-4 py-2 rounded-full border transition-all border-(--color-line) bg-(--color-bg) text-(--color-fg) hover:border-(--color-purple)",
        children: isMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {}, void 0, false, {
            fileName: "[project]/app/components/ModeToggle.tsx",
            lineNumber: 28,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {}, void 0, false, {
            fileName: "[project]/app/components/ModeToggle.tsx",
            lineNumber: 28,
            columnNumber: 33
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ModeToggle.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ModeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ModeToggle.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ThemeToggle() {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>setMounted(true), 0);
    }, []);
    if (!mounted) return null;
    const isDracula = theme === "dracula";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>{
            setTheme(isDracula ? "tokyo" : "dracula");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ModeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])("../../sounds/button.mp3");
        },
        className: "flex items-center gap-2 px-4 py-2 rounded-full border transition-all border-(--color-line) bg-(--color-bg) text-(--color-fg) hover:border-(--color-purple)",
        children: isDracula ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            size: 23
        }, void 0, false, {
            fileName: "[project]/app/components/ThemeToggle.tsx",
            lineNumber: 26,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            size: 23
        }, void 0, false, {
            fileName: "[project]/app/components/ThemeToggle.tsx",
            lineNumber: 26,
            columnNumber: 41
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ThemeToggle.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "getClientId",
    ()=>getClientId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ModeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ModeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/socket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/userGamestore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const getClientId = ()=>{
    let id = localStorage.getItem("clientId");
    if (!id) {
        id = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
        localStorage.setItem("clientId", id);
    }
    return id;
};
function Home() {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("create");
    const [username, SetUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [maxPlayers, SetMaxPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const [roomId, SetRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { gameState, setGameState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userGamestore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (state)=>{
            setGameState(state);
            if (state.roomId) {
                localStorage.setItem("lastRoomId", state.roomId);
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].id) {
                localStorage.setItem("lastSocketId", __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].id);
            }
        };
        const errorHandler = (err)=>{
            console.error("Game error:", err);
        };
        // Add event listeners
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on("gameStateUpdate", handler);
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on("gameError", errorHandler);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off("gameStateUpdate", handler);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off("gameError");
        };
    }, [
        setGameState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lastSocketId = localStorage.getItem("lastSocketId");
        const lastRoomId = localStorage.getItem("lastRoomId");
        const onConnect = ()=>{
            if (!gameState && lastSocketId && lastRoomId) {
                console.log("Socket connected and requesting reconnection for socketID:", lastSocketId);
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].emit("reconnectRoom", {
                    roomId: lastRoomId,
                    clientId: getClientId()
                });
            }
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on("connect", onConnect);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off("connect", onConnect);
        };
    }, [
        gameState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gameState?.roomId) {
            router.push(`/${gameState.roomId}`);
        }
    }, [
        gameState,
        router
    ]);
    const handleCreateRoom = ()=>{
        if (!username) return;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].id) {
            localStorage.setItem("lastSocketId", __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].id);
            localStorage.setItem("lastRoomId", gameState?.roomId ?? roomId);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].emit("createRoom", {
            username,
            maxPlayers,
            clientId: getClientId()
        });
    };
    const handleJoinRoom = ()=>{
        if (!username || !roomId) return;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].emit("joinRoom", {
            username,
            roomId,
            getClientId
        })) {}
    };
    const cardVariants = {
        initial: {
            opacity: 0,
            x: mode === "join" ? -30 : 30,
            scale: 0.98
        },
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.25,
                ease: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            }
        },
        exit: {
            opacity: 0,
            x: mode === "join" ? 30 : -30,
            scale: 0.98,
            transition: {
                duration: 0.2,
                ease: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen flex flex-col justify-center items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-purple)_0%,transparent_70%)] blur-3xl opacity-30"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-pink)_0%,transparent_70%)] blur-3xl opacity-30"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex md:flex-row flex-col-reverse absolute top-8 right-8 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ModeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        mode: mode,
                        setMode: setMode
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                initial: false,
                children: mode === "join" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: cardVariants,
                    initial: "initial",
                    animate: "animate",
                    exit: "exit",
                    className: "z-10 bg-(--color-bg)/70 backdrop-blur-lg border border-(--color-line) px-8 py-10 rounded-2xl shadow-xl hover:shadow-(--color-purple)/30 transition-shadow w-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-(--color-fg)",
                                children: "Enter Room"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-(--color-comment) text-sm block mb-2",
                                        children: "Username"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: username,
                                        onChange: (e)=>SetUsername(e.target.value),
                                        className: "w-full bg-transparent border-b border-(--color-comment) focus:border-(--color-green) text-(--color-fg) py-2 outline-none placeholder-(--color-comment) transition-colors duration-200",
                                        placeholder: "Enter your username"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-(--color-comment) text-sm block mb-2",
                                        children: "Room Id"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: roomId,
                                        onChange: (e)=>SetRoomId(e.target.value),
                                        className: "w-full bg-transparent border-b border-(--color-comment) focus:border-(--color-pink) text-(--color-fg) py-2 outline-none placeholder-(--color-comment) transition-colors duration-200",
                                        placeholder: "Enter Room Id"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: handleJoinRoom,
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                transition: {
                                    duration: 0.15
                                },
                                className: "mt-4 w-full py-3 rounded-lg bg-(--color-purple) hover:bg-(--color-pink) text-white font-medium transition-colors duration-200",
                                children: "Join Room"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this)
                }, "join", false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: cardVariants,
                    initial: "initial",
                    animate: "animate",
                    exit: "exit",
                    className: "z-10 bg-(--color-bg)/70 backdrop-blur-lg border border-(--color-line) px-8 py-10 rounded-2xl shadow-xl hover:shadow-(--color-purple)/30 transition-shadow w-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-(--color-fg)",
                                children: "Create Room"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-(--color-comment) text-sm block mb-2",
                                        children: "Username"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: username,
                                        onChange: (e)=>SetUsername(e.target.value),
                                        className: "w-full bg-transparent border-b border-(--color-comment) focus:border-(--color-green) text-(--color-fg) py-2 outline-none placeholder-(--color-comment) transition-colors duration-200",
                                        placeholder: "Enter your username"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-(--color-comment) text-sm block mb-2",
                                        children: "Max Players"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: " text-(--color-fg) text-sm",
                                        children: [
                                            "Selected: ",
                                            maxPlayers
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 2,
                                        max: 7,
                                        step: 1,
                                        value: maxPlayers,
                                        onChange: (e)=>{
                                            SetMaxPlayers(Number(e.target.value));
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ModeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClickSound"])("../sounds/slide sound.wav");
                                        },
                                        className: "w-full bg-transparent border-b border-(--color-comment) focus:border-(--color-pink) text-(--color-fg) py-2 outline-none placeholder-(--color-comment) transition-colors duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: handleCreateRoom,
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                transition: {
                                    duration: 0.15
                                },
                                className: "mt-4 w-full py-3 rounded-lg bg-(--color-purple) hover:bg-(--color-pink) text-white font-medium transition-colors duration-200",
                                children: "Create Room"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 193,
                        columnNumber: 13
                    }, this)
                }, "create", false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[roomId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/socket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$WaitingLobby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/WaitingLobby.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/userGamestore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$GameRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/room/GameRoom.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/page.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function RoomPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { gameState, setGameState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$userGamestore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userGamestore"])();
    const [commentary, setCommentary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleGameStateUpdate = (state)=>{
            setGameState(state);
            localStorage.setItem("lastRoomId", state.roomId);
        };
        const handleGameEnded = ({ gameState, commentary })=>{
            setGameState(gameState);
            setCommentary(commentary);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on("gameStateUpdate", handleGameStateUpdate);
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on("gameEnded", handleGameEnded);
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on("gameError", (err)=>console.error("Game error:", err));
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off("gameStateUpdate", handleGameStateUpdate);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off("gameEnded", handleGameEnded);
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off("gameError");
        };
    }, [
        setGameState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lastRoomId = localStorage.getItem("lastRoomId");
        if (!gameState && lastRoomId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].emit("reconnectRoom", {
                roomId: lastRoomId,
                clientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientId"])()
            });
        }
    }, [
        gameState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lastRoomId = localStorage.getItem("lastRoomId");
        if (!gameState && !lastRoomId) {
            router.push("/");
        }
    }, [
        gameState,
        router
    ]);
    if (!gameState) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-10",
            children: "Loading room..."
        }, void 0, false, {
            fileName: "[project]/app/[roomId]/page.tsx",
            lineNumber: 59,
            columnNumber: 12
        }, this);
    }
    const currentPlayer = gameState.players.find((p)=>p.clientId === (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientId"])());
    const isEliminated = currentPlayer?.isEliminated;
    switch(gameState.status){
        case "LOBBY":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$WaitingLobby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                players: gameState.players,
                roomId: gameState.roomId,
                maxPlayers: gameState.maxPlayers
            }, void 0, false, {
                fileName: "[project]/app/[roomId]/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this);
        case "INGAME":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                children: [
                    isEliminated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed top-0 left-0 w-full h-16 bg-red-600/90 text-white z-50 flex items-center justify-center font-bold text-xl animate-pulse",
                        children: "YOU HAVE BEEN DISQUALIFIED!"
                    }, void 0, false, {
                        fileName: "[project]/app/[roomId]/page.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: isEliminated ? "opacity-75 pointer-events-none grayscale" : "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$room$2f$GameRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/[roomId]/page.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/[roomId]/page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[roomId]/page.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this);
        case "FINISHED":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center min-h-screen p-10 text-center space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-black text-(--color-pink)",
                        children: "GAME OVER"
                    }, void 0, false, {
                        fileName: "[project]/app/[roomId]/page.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl",
                        children: [
                            "Winner:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-green-400",
                                children: gameState.winner
                            }, void 0, false, {
                                fileName: "[project]/app/[roomId]/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[roomId]/page.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    commentary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-(--color-line) p-6 rounded-xl border border-(--color-purple) max-w-2xl mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm uppercase tracking-widest text-(--color-comment) mb-2",
                                children: "AI Commentator"
                            }, void 0, false, {
                                fileName: "[project]/app/[roomId]/page.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl italic font-serif leading-relaxed",
                                children: [
                                    '"',
                                    commentary,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[roomId]/page.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[roomId]/page.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/"),
                        className: "px-6 py-3 bg-(--color-purple) rounded-lg font-bold hover:scale-105 transition",
                        children: "Back to Home"
                    }, void 0, false, {
                        fileName: "[project]/app/[roomId]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[roomId]/page.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Unknown game status!"
            }, void 0, false, {
                fileName: "[project]/app/[roomId]/page.tsx",
                lineNumber: 119,
                columnNumber: 14
            }, this);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0de12596._.js.map