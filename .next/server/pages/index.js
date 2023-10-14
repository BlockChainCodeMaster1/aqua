"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3162);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4178);
/* harmony import */ var private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2603);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_HeaderFooter)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header.tsx



function Header() {
    const [showNav, setShowNav] = (0,external_react_.useState)(false);
    const [isMobile, setIsMobile] = (0,external_react_.useState)(false);
    const [nav, setNav] = (0,external_react_.useState)([
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Our Mission",
            href: "/#mission"
        },
        {
            name: "Our Vision",
            href: "/#version"
        },
        {
            name: "Why Us",
            href: "/#why_us"
        },
        {
            name: "Project Case",
            href: "/#projects"
        }
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log("useEffect");
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "w-full sm:w-10/12 mx-auto flex items-center justify-between px-4 py-6 font-[GT-America-Bold] ",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: "/logo.png",
                width: 140,
                height: 100,
                alt: "logo"
            }),
            isMobile && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: " bg-[#02000b] bg-opacity-30  fixed left-0 right-0 top-0 bottom-0 z-40",
                onClick: ()=>{
                    setShowNav(false);
                    setIsMobile(false);
                }
            }),
            showNav && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: " justify-start sm:justify-center gap-4 text-basic bg-[#02000b] bg-opacity-30 sm:bg-transparent bottom-0 z-50  sm:bg-opacity-100  text-white flex fixed right-0 top-0 sm:relative w-40 sm:w-auto flex-col sm:flex-row backdrop-blur-sm  sm:backdrop-blur-none p-4 sm:p-0 overflow-hidden",
                children: nav.map((el, index)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: el.href,
                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "border-r border-transparent sm:border-white px-4 border-opacity-30 leading-none -mr-1",
                            children: el.name
                        })
                    }, index))
            }),
            !showNav && /*#__PURE__*/ jsx_runtime.jsx("i", {
                className: "block cursor-pointer text-white not-italic",
                onClick: ()=>{
                    setShowNav(true);
                    setIsMobile(true);
                },
                children: "三"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/footer.tsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "flex flex-col justify-center",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "bg-[#040813] w-full -mt-10 relative z-50",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between w-10/12 h-10 m-auto sm:w-7/12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-row  gap-3 justify-center items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/footer_logo.png",
                                className: "w-14 h-2",
                                alt: "logo"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                target: "_blank",
                                href: "https://twitter.com/AquaLabs_",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bg-[url('/twitter.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/twitter_hover.png')]"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                target: "_blank",
                                href: "https://t.me/AquaLabs_Announcement",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bg-[url('/telegram.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/telegram_hover.png')]"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "mailto:contact@alab.fund",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "bg-[url('/email.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/email_hover.png')]"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-xs text-[#8897AB]",
                        children: "\xa9 2023 Aqua Labs"
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/HeaderFooter.tsx




const HeaderFooter = (props)=>{
    const { activeIndex } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const components_HeaderFooter = (HeaderFooter);


/***/ }),

/***/ 2603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3979);
/* harmony import */ var react_particles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7998);
/* harmony import */ var tsparticles_slim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2949);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_HeaderFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1654);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3015);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2184);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7644);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8456);
/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_7__, swiper_modules__WEBPACK_IMPORTED_MODULE_8__]);
([three__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_7__, swiper_modules__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ThreeScene = ()=>{
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) { var td, height, width; }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed top-0 -z-20",
        ref: containerRef
    });
};
function Home() {
    const [revenue, setRevenue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            num: 1,
            icon: "/icon1.png",
            subTitle: "Service revenue ",
            title: "Service revenue",
            desc: "Stable annual income of millions of dollars is expected."
        },
        {
            num: 2,
            icon: "/icon2.png",
            subTitle: "Investment returns",
            title: "Investment returns",
            desc: "Lower investment costs than funds and higher investment returns than funds."
        }
    ]);
    const [advantage, setAdvantage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            icon: "/rabbit.svg",
            title: "We are good at pulling a rabbit out of a hat.",
            desc: "For current industry hot spots, we can make quick respond and quickly output what the market wants from operational fundamentals, KOL advertising channels, matching economic models, and products."
        },
        {
            icon: "/water.svg",
            title: "We have flow and KOLs from all over the world.",
            desc: "We have super Top KOLs and communities of SoutheastAsia, Chinese-speaking area, Japan and South Korea, nextto emerging regions such as Africa."
        },
        {
            icon: "/rush.svg",
            title: "Fighting on the front line, improving the success rate of our portfolio.",
            desc: "On the public traffic battlefield, we are clear about the focus of users in community operations and which channels and media advertising are more effective. "
        },
        {
            icon: "/gold.svg",
            title: "A prudent financial system in operation.",
            desc: "We are good at helping projects cold start and cross the gap from 0 to 1."
        }
    ]);
    const [team, setTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            avatar: "/lin.jpg",
            name: "Lin",
            title: "Founding Partner",
            linken: "https://www.linkedin.com/in/lin-yang/",
            background: [
                "\xb7 Perking university, KU LEUVEN University, MBA.",
                "\xb7 15 years of experience in well-known financial investment industry, with multiple IPOs from well-known technology companies.",
                "\xb7 Established Aqua Venture at San Francisco from 2018, Web3 focus."
            ]
        },
        {
            avatar: "/blue.jpg",
            name: "Blue",
            title: "Founding Partner",
            linken: "https://www.linkedin.com/in/blue-zhu",
            background: [
                "\xb7 Graduated from the School of Management, Fudan University.",
                "\xb7 10 years of investment experience, early blockchain participants and influencer.",
                "\xb7 Established K24 ventures from 2018, invested more than 50 well-known projects."
            ]
        },
        {
            avatar: "/aemoe.jpg",
            name: "Aemoe",
            title: "Founding Partner",
            linken: "https://www.linkedin.com/in/bo-lian",
            background: [
                "\xb7 San Jos\xe9 State University, CS Master.",
                "\xb7 Years of well-known enterprise front-end architect and blockchain architect.",
                "\xb7 Google Plus members.",
                "\xb7 Partner of unparalleled fund in the world."
            ]
        },
        {
            avatar: "/anglina.jpg",
            name: "Angelina",
            title: "Venture Partner",
            linken: "https://www.linkedin.com/in/angelina-zhang",
            background: [
                "\xb7 Napier University of Edinburgh, Bachelor's degree in Accounting",
                "\xb7 Senior Administrator at Bank of New York Mellon Accounting Associate for ASO funding at BlackRock",
                "\xb7 Tax Administrator at HSBC Securities Services",
                "\xb7 Partner of unparalleled fund in the world."
            ]
        }
    ]);
    const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            icon: "/Yuliverse.png",
            title: "Yuliverse",
            desc: "Yuliverse is an alternative reality metaverse that runs parallel to the physical world, offering a new kind of lifestyle through immersive gameplay and social interaction. With thousands of exciting storylines to explore, players can earn $ARG and $ART as they complete quests and assume different roles within the game.",
            tips: "GameFi",
            href: "https://yuliverse.com/",
            img: "/Yuliverse_img.png"
        },
        {
            icon: "/Skyark.png",
            title: "SkyArk",
            desc: "SkyArk Chronicles is a Triple A fantasy JRPG Game with Interoperable NFTs. The SkyArk Chronicles is a Trilogy of 2 GameFi(“House of Heroes” and “Legends Arise”) and 1 SocialFi Metaverse (“RE: SkyArkVerse”).",
            tips: "GameFi",
            href: "https://skyarkchronicles.com/",
            img: "/Skyark_img.png"
        },
        {
            icon: "/Demole.png",
            title: "Demole",
            desc: "This world exists as a multiverse. However, each universe is independent and has never known the existence of the other. Until one day, for unknown reasons, a supermassive cosmic explosion broke out, causing the walls between the universes to be accidentally broken. This created portals from the rifts of spacetime - passages that link the universes together. The exciting journey to explore the universe will start here. Who will you be in the expedition? A erudite and arrogant ELF? A fiery dragon warrior? A mysterious ghost or a timid tree tribe that stands up to everyone when in danger? What will be your decision when participating in the exploration of the universe and seeking the maximum energy to bring your race to the peak of domination?",
            tips: "GameFi",
            href: "https://demole.io/",
            img: "/Demole_img.png"
        },
        {
            icon: "/Halo.png",
            title: "Halo",
            desc: "HALOWORLD is a hyper-realistic metaverse based on Unreal Engine 5, in which the avatar is not only the body in the metaverse but another you in the parallel world of itself. HALOWORLD will create a huge ecosystem of digital citizens and rapidly promote the arrival of the AI era. In the future, you can use AI Chat to chat with another self in the virtual world in real-time, and you can also generate another self through AI photo generation technology in the metaverse.",
            tips: "GameFi",
            href: "https://halonft.art/",
            img: "/Halo_img.png"
        },
        {
            icon: "/Blocksport.png",
            title: "BLOCKSPORT",
            desc: "Blocksport is a Sports technology company with a headquarter in Zug, Switzerland. Blockport is building the largest Sports NFTs aggregation platform in the world. Collectibles, merchandise, and other NFTs of sports clubs can be collected by their fans using the NFTs platforms. Also, Blocksport offers an App-as-a-Service platform and launching services for sports clubs, leagues, federations, sports celebrities, and other clients to engage their fans. The platform also collaborates with sports clubs to launch fan tokens for their supporters with the holders having the right to participate in governance. There is also a mobile-based NFTs marketplace where users can buy and sell NFTs.",
            tips: "GameFi",
            href: "https://blocksport.io/",
            img: "/Blocksport_img.png"
        },
        {
            icon: "/Bounce.png",
            title: "Bounce Finance",
            desc: "On the way of pursuing a completely decentralized financial environment, the DeFi community has made tremendous progress by introducing elegant economic designs. I admire projects and individuals in the DeFi space and appreciate the architectures people built. I especially appreciate PlutusDefi’s bonding curve listing strategy and yearn.finance’s 5NO design (no founder’s allocation, no premise, no partnership allocation, no ICO, no advisor tokens), and it incentivized me to create bounce.finance. [Not as a job, but for fun. It is only an experiment so far.]",
            tips: "NFT",
            href: "https://bounce.finance/",
            img: "/Bounce_img.png"
        },
        {
            icon: "/UneMeata.png",
            title: "Une Meta",
            desc: "UneMeta is a curated social and NFT market space for quality and established IPs and Icons, aiming to create higher quality experience with NFT to everyone. ",
            tips: "NFT",
            href: "https://unemeta.com",
            img: "/UneMeata_img.png"
        },
        {
            icon: "/Juggernaut.png",
            title: "Juggernaut DeFi",
            desc: "The next evolution of DeFi will go beyond pure finance and into real-life financial use-cases and abstractions of all assets and innovations. Juggernaut (JGN) aims to build the next generation of blockchain infrastructure to make DeFi & NFTs unstoppable.",
            tips: "NFT",
            href: "https://jgndefi.com/",
            img: "/Juggernaut_img.png"
        },
        {
            icon: "/XCarnival.png",
            title: "XCarnival",
            desc: "One-stop NFTFi Liquidity Integration Platform.",
            tips: "NFT",
            href: "https://xcarnival.fi/",
            img: "/XCarnival_img.png"
        },
        {
            icon: "/yuziswap.png",
            title: "Yuzuswap",
            desc: " YuzuSwap is a decentralized exchange on the Oasis Emerald paratime that includes incentives like liquidity & and trade mining. YuzuSwap follows a non-custodial, peer-to-peer, automated-market-maker model, and aims to provide a safe, swift, low-cost tool to discover and swap tokens within the Oasis ecosystem. The YuzuSwap platform itself is fully open to developers and members of the Yuzu DAO. ",
            tips: "Defi",
            href: " https://yuzu-swap.com/",
            img: "/yuziswap_img.png"
        },
        {
            icon: "/etha.png",
            title: "ETHA",
            desc: "ETHA Lend is a chain agnostic yield optimizer that abstracts the complexity in DeFi to provide algorithmically optimal yields. The platform is currently powered by the Polygon network. Its suite of DeFi features leverage state-of-the-art automation and hybrid strategies enforced by smart contracts to deliver a simple yet elegant experience for users.",
            tips: "Defi",
            href: "https://ethalend.org/",
            img: "/etha_img.png"
        },
        {
            icon: "/way.png",
            title: "Way Network",
            desc: "Way Network is a universal solution to enable interchain transaction with trustless and valid delivery. It's the first zkOmnichain interoperability protocol that provides a powerful communication primitive on which to build various sets of omnichain applications. With this new primitive, developers can implement seamless cross-chain applications, such as cross-chain DEX or multi-chain revenue aggregators, without relying on trusted custodians or intermediate transactions. Way Network enables direct transactions across all chains trustlessly. Allowing transactions to flow freely between chains provides users with the opportunity to consolidate decentralized liquidity while also leveraging applications on independent chains. With Way Network, we provide the network architecture underlying the fully-connected omnichain ecosystem of the future.",
            tips: "Infra",
            href: "https://way.network/",
            img: "/way_img.png"
        },
        {
            icon: "/metis.png",
            title: "Metis",
            desc: "Powering dApps, Businesses, and Communities with Decentralization by scaling Ethereum to what it’s meant to be. Boundless.",
            tips: "Infra",
            href: "https://metis.io",
            img: "/metis_img.png"
        },
        {
            icon: "/EpiK.png",
            title: "EpiK Protocol",
            desc: "EpiK Protocol is an AI-first blockchain that aims at an open and collaborative AI data network accessible to all AI. It provides the infrastructure for community members to curate high-quality human-labeled AI training data and contribute to AI.",
            tips: "Infra",
            href: "https://epik-protocol.io/",
            img: "/EpiK_img.png"
        },
        {
            icon: "/chia.png",
            title: "Chia Network",
            desc: "Chia is a cryptocurrency and blockchain with smart transaction capabilities. It was designed from the ground up to make cryptocurrency easier to use (and harder to lose) than cash. Its Proof of Space and Time is the only Nakamoto consensus algorithm since Proof of Work, while also having a much lower energy consumption. Part of Chia's vision involves improving the carbon footprint of the blockchain industry. Chia's mainnet was launched on March 19, 2021. Development of its ecosystem is ongoing, with primitives released for CATs, NFTs, Offers, and DIDs.",
            tips: "Infra",
            href: "https://chia.net/",
            img: "/chia_img.png"
        }
    ]);
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showProject, setShowProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const particlesInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (engine)=>{
        // console.log(engine);
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await (0,tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__.loadSlim)(engine);
    }, []);
    const particlesLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (container)=>{
    // await console.log(container);
    }, []);
    const [thumbsSwiper, setThumbsSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("useEffect");
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setIsMobile(true);
            setShowProject(true);
        } else {
            setIsMobile(false);
            setShowProject(true);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeaderFooter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: "flex flex-col justify-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThreeScene, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_particles__WEBPACK_IMPORTED_MODULE_2___default()), {
                    id: "tsparticles",
                    init: particlesInit,
                    loaded: particlesLoaded,
                    options: {
                        autoPlay: true,
                        background: {},
                        backgroundMask: {
                            composite: "destination-out",
                            cover: {
                                color: {
                                    value: "#fff"
                                },
                                opacity: 1
                            },
                            enable: false
                        },
                        defaultThemes: {},
                        delay: 0,
                        fullScreen: {
                            enable: true,
                            zIndex: -1
                        },
                        detectRetina: true,
                        duration: 0,
                        fpsLimit: 120,
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "repulse"
                                },
                                onDiv: {
                                    selectors: [],
                                    enable: false,
                                    mode: [],
                                    type: "circle"
                                },
                                onHover: {
                                    enable: false,
                                    mode: "bubble",
                                    parallax: {
                                        enable: false,
                                        force: 2,
                                        smooth: 10
                                    }
                                },
                                resize: {
                                    delay: 0.5,
                                    enable: true
                                }
                            },
                            modes: {
                                trail: {
                                    delay: 1,
                                    pauseOnStop: false,
                                    quantity: 1
                                },
                                attract: {
                                    distance: 200,
                                    duration: 0.4,
                                    easing: "ease-out-quad",
                                    factor: 1,
                                    maxSpeed: 50,
                                    speed: 1
                                },
                                bounce: {
                                    distance: 200
                                },
                                bubble: {
                                    distance: 250,
                                    duration: 2,
                                    mix: false,
                                    opacity: 0,
                                    size: 0,
                                    divs: {
                                        distance: 200,
                                        duration: 0.4,
                                        mix: false,
                                        selectors: []
                                    }
                                },
                                connect: {
                                    distance: 80,
                                    links: {
                                        opacity: 0.5
                                    },
                                    radius: 60
                                },
                                grab: {
                                    distance: 400,
                                    links: {
                                        blink: false,
                                        consent: false,
                                        opacity: 1
                                    }
                                },
                                push: {
                                    default: false,
                                    groups: [],
                                    quantity: 4
                                },
                                remove: {
                                    quantity: 2
                                },
                                repulse: {
                                    distance: 400,
                                    duration: 0.4,
                                    factor: 100,
                                    speed: 1,
                                    maxSpeed: 50,
                                    easing: "ease-out-quad",
                                    divs: {
                                        distance: 200,
                                        duration: 0.4,
                                        factor: 100,
                                        speed: 1,
                                        maxSpeed: 50,
                                        easing: "ease-out-quad",
                                        selectors: []
                                    }
                                },
                                slow: {
                                    factor: 3,
                                    radius: 200
                                },
                                light: {
                                    area: {
                                        gradient: {
                                            start: {
                                                value: "#ffffff"
                                            },
                                            stop: {
                                                value: "#000000"
                                            }
                                        },
                                        radius: 1000
                                    },
                                    shadow: {
                                        color: {
                                            value: "#000000"
                                        },
                                        length: 2000
                                    }
                                }
                            }
                        },
                        manualParticles: [],
                        particles: {
                            bounce: {
                                horizontal: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.1
                                    },
                                    value: 1
                                },
                                vertical: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.1
                                    },
                                    value: 1
                                }
                            },
                            collisions: {
                                absorb: {
                                    speed: 2
                                },
                                bounce: {
                                    horizontal: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0.1
                                        },
                                        value: 1
                                    },
                                    vertical: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0.1
                                        },
                                        value: 1
                                    }
                                },
                                enable: false,
                                maxSpeed: 50,
                                mode: "bounce",
                                overlap: {
                                    enable: true,
                                    retries: 0
                                }
                            },
                            color: {
                                value: "#ffffff",
                                animation: {
                                    h: {
                                        count: 0,
                                        enable: false,
                                        offset: 0,
                                        speed: 1,
                                        delay: 0,
                                        decay: 0,
                                        sync: true
                                    },
                                    s: {
                                        count: 0,
                                        enable: false,
                                        offset: 0,
                                        speed: 1,
                                        delay: 0,
                                        decay: 0,
                                        sync: true
                                    },
                                    l: {
                                        count: 0,
                                        enable: false,
                                        offset: 0,
                                        speed: 1,
                                        delay: 0,
                                        decay: 0,
                                        sync: true
                                    }
                                }
                            },
                            groups: {},
                            move: {
                                angle: {
                                    offset: 0,
                                    value: 90
                                },
                                attract: {
                                    distance: 200,
                                    enable: false,
                                    rotate: {
                                        x: 600,
                                        y: 600
                                    }
                                },
                                center: {
                                    x: 50,
                                    y: 50,
                                    mode: "percent",
                                    radius: 0
                                },
                                decay: 0,
                                distance: {},
                                direction: "none",
                                drift: 0,
                                enable: true,
                                gravity: {
                                    acceleration: 9.81,
                                    enable: false,
                                    inverse: false,
                                    maxSpeed: 50
                                },
                                path: {
                                    clamp: true,
                                    delay: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0
                                        },
                                        value: 0
                                    },
                                    enable: false,
                                    options: {}
                                },
                                outModes: {
                                    default: "out",
                                    bottom: "out",
                                    left: "out",
                                    right: "out",
                                    top: "out"
                                },
                                random: true,
                                size: false,
                                speed: 1,
                                spin: {
                                    acceleration: 0,
                                    enable: false
                                },
                                straight: false,
                                trail: {
                                    enable: false,
                                    length: 10,
                                    fill: {}
                                },
                                vibrate: false,
                                warp: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    width: 1920,
                                    height: 1080
                                },
                                limit: 0,
                                value: 160
                            },
                            opacity: {
                                random: {
                                    enable: true,
                                    minimumValue: 0.1
                                },
                                value: {
                                    min: 0,
                                    max: 1
                                },
                                animation: {
                                    count: 0,
                                    enable: true,
                                    speed: 1,
                                    decay: 0,
                                    delay: 0,
                                    sync: false,
                                    mode: "auto",
                                    startValue: "random",
                                    destroy: "none",
                                    minimumValue: 0
                                }
                            },
                            reduceDuplicates: false,
                            shadow: {
                                blur: 0,
                                color: {
                                    value: "#000"
                                },
                                enable: false,
                                offset: {
                                    x: 0,
                                    y: 0
                                }
                            },
                            shape: {
                                close: true,
                                fill: true,
                                options: {},
                                type: "circle"
                            },
                            size: {
                                random: {
                                    enable: true,
                                    minimumValue: 1
                                },
                                value: {
                                    min: 0.5,
                                    max: 1
                                },
                                animation: {
                                    count: 0,
                                    enable: false,
                                    speed: 4,
                                    decay: 0,
                                    delay: 0,
                                    sync: false,
                                    mode: "auto",
                                    startValue: "random",
                                    destroy: "none",
                                    minimumValue: 0.3
                                }
                            },
                            stroke: {
                                width: 0
                            },
                            zIndex: {
                                random: {
                                    enable: false,
                                    minimumValue: 0
                                },
                                value: 0,
                                opacityRate: 1,
                                sizeRate: 1,
                                velocityRate: 1
                            },
                            destroy: {
                                bounds: {},
                                mode: "none",
                                split: {
                                    count: 1,
                                    factor: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0
                                        },
                                        value: 3
                                    },
                                    rate: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0
                                        },
                                        value: {
                                            min: 4,
                                            max: 9
                                        }
                                    },
                                    sizeOffset: true,
                                    particles: {}
                                }
                            },
                            roll: {
                                darken: {
                                    enable: false,
                                    value: 0
                                },
                                enable: false,
                                enlighten: {
                                    enable: false,
                                    value: 0
                                },
                                mode: "vertical",
                                speed: 25
                            },
                            tilt: {
                                random: {
                                    enable: false,
                                    minimumValue: 0
                                },
                                value: 0,
                                animation: {
                                    enable: false,
                                    speed: 0,
                                    decay: 0,
                                    sync: false
                                },
                                direction: "clockwise",
                                enable: false
                            },
                            twinkle: {
                                lines: {
                                    enable: false,
                                    frequency: 0.05,
                                    opacity: 1
                                },
                                particles: {
                                    enable: false,
                                    frequency: 0.05,
                                    opacity: 1
                                }
                            },
                            wobble: {
                                distance: 5,
                                enable: false,
                                speed: {
                                    angle: 50,
                                    move: 10
                                }
                            },
                            life: {
                                count: 0,
                                delay: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0
                                    },
                                    value: 0,
                                    sync: false
                                },
                                duration: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.0001
                                    },
                                    value: 0,
                                    sync: false
                                }
                            },
                            rotate: {
                                random: {
                                    enable: false,
                                    minimumValue: 0
                                },
                                value: 0,
                                animation: {
                                    enable: false,
                                    speed: 0,
                                    decay: 0,
                                    sync: false
                                },
                                direction: "clockwise",
                                path: false
                            },
                            orbit: {
                                animation: {
                                    count: 0,
                                    enable: false,
                                    speed: 1,
                                    decay: 0,
                                    delay: 0,
                                    sync: false
                                },
                                enable: false,
                                opacity: 1,
                                rotation: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0
                                    },
                                    value: 45
                                },
                                width: 1
                            },
                            links: {
                                blink: false,
                                color: {
                                    value: "#ffffff"
                                },
                                consent: false,
                                distance: 150,
                                enable: false,
                                frequency: 1,
                                opacity: 0.4,
                                shadow: {
                                    blur: 5,
                                    color: {
                                        value: "#000"
                                    },
                                    enable: false
                                },
                                triangles: {
                                    enable: false,
                                    frequency: 1
                                },
                                width: 1,
                                warp: false
                            },
                            repulse: {
                                random: {
                                    enable: false,
                                    minimumValue: 0
                                },
                                value: 0,
                                enabled: false,
                                distance: 1,
                                duration: 1,
                                factor: 1,
                                speed: 1
                            }
                        },
                        pauseOnBlur: true,
                        pauseOnOutsideViewport: true,
                        responsive: [],
                        smooth: false,
                        style: {},
                        themes: [],
                        zLayers: 100,
                        motion: {
                            disable: false,
                            reduce: {
                                factor: 4,
                                value: true
                            }
                        }
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " fixed left-0 top-0 bottom-0 right-0 opacity-40 -z-10 bg-gradient-to-b from-[#18203d] to-[#030348]"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pb-24 text-center text-white pt-14 sm:pt-28 sm:pb-48 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: " font-[GT-America-Extended-Black] uppercase text-5xl sm:text-8xl drop-shadow py-8",
                            children: "Aqua Labs"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "leading-tight text-3xl sm:text-5xl font-[GT-America-Compressed-Medium]  drop-shadow uppercase",
                            children: "Free flow increasing engine"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "w-10/12 sm:w-8/12 pt-12 m-auto text-xs sm:text-xl drop-shadow  font-[GT-America-Extended-Regular]",
                            children: "We helping Web3 projects build global competitive advantages. We are rooted in Africa, South America, and Southeast Asia, promoting the rapid growth of projects."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "mission",
                    className: " h-96 flex flex-col justify-between w-10/12 gap-2 mx-auto my-0 text-white  sm:flex-row sm:w-10/12 sm:my-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-10/12 sm:w-7/12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-[GT-America-Bold] text-4xl sm:text-6xl uppercase mt-2",
                                    children: "Our Mission"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: " font-[GT-America-Extended-Regular]  mt-4 sm:mt-8  text-xs sm:text-xl",
                                    children: [
                                        "Help",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            className: "text-2xl text-blue-400 ",
                                            children: "100+"
                                        }),
                                        " ",
                                        "partners with dreams to fulfill their entrepreneurial goals."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full mt-4 overflow-hidden rounded-lg sm:w-5/12 drop-shadow sm:mt-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
                                loop: true,
                                autoplay: {
                                    delay: 10000,
                                    disableOnInteraction: false
                                },
                                modules: [
                                    swiper_modules__WEBPACK_IMPORTED_MODULE_8__.Autoplay
                                ],
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img1.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img2.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img3.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img4.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img5.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img6.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img7.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img8.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img9.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img10.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img11.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img12.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img13.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img14.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img15.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img16.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img17.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img18.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img19.png"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "version",
                    className: " h-96 flex flex-col-reverse justify-between w-10/12 gap-2 mx-auto mb-2 text-white flex-co sm:flex-row sm:my-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full overflow-hidden rounded-lg sm:w-5/12 drop-shadow ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
                                loop: true,
                                autoplay: {
                                    delay: 10000,
                                    disableOnInteraction: false
                                },
                                modules: [
                                    swiper_modules__WEBPACK_IMPORTED_MODULE_8__.Autoplay
                                ],
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img20.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img21.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img22.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img23.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img24.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img25.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img27.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img28.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img29.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img30.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img31.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img32.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img33.png"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img34.png"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full mt-4 mb-4 text-left sm:w-7/12 sm:text-right sm:mt-0 sm:mb-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-[GT-America-Bold] text-4xl sm:text-6xl uppercase mt-4",
                                    children: "Our Vision"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: " font-[GT-America-Extended-Regular] mt-4 sm:mt-8 text-xs sm:text-xl",
                                    children: "Gathering global top talents to make Web3 an indispensable productive force in human social development."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "why_us",
                    className: "mb-10 mt-12 text-center ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: " font-[GT-America-Bold]  text-4xl sm:text-6xl text-white drop-shadow-md uppercase",
                            children: "Why Us?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex flex-col w-10/12 gap-6 pt-12 m-auto text-white sm:flex-row",
                            children: advantage.map((el, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "flex flex-col w-full px-8 py-8 bg-[#02000b] bg-opacity-30 rounded-xl sm:w-4/12 drop-shadow",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "flex justify-center p-4 m-auto ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: el.icon,
                                                className: "w-16 h-16",
                                                alt: "icon"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "h-18 sm:h-24 mt-4 font-bold text-lg font-[GT-America-Bold] leading-normal",
                                            children: el.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "h-32 sm:h-40 mt-2 text-sm text-left text-white opacity-50 font-[GT-America-Extended-Regular]",
                                            children: el.desc
                                        })
                                    ]
                                }, index))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pb-10 mt-0 overflow-hidden text-center sm:pb-20 flex sm:flex-row flex-col w-10/12 mx-auto sm:mt-20 gap-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sm:w-4/12 w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: " font-[GT-America-Bold]  text-4xl sm:text-6xl text-white drop-shadow-md uppercase",
                                    children: "OUR TEAM"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: " text-xs sm:text-lg text-white font-[GT-America-Extended-Regular] mt-6",
                                    children: "We are a web3 accelerator. We have experienced three crypto cycles and have invested in and incubated 100+ projects. We have more experience in coaching tech builders and supporting mainstream chain grants. We also have close relationships with top venture capital firms in Asia and North America."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex flex-col w-full sm:w-8/12 gap-2  text-white  ",
                            children: team.map((el, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "flex flex-col sm:flex-row w-full px-0 sm:px-8 py-2 text-left gap-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: el.avatar,
                                            className: "w-32 h-32 rounded-md",
                                            alt: "icon"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "font-bold text-lg font-[GT-America-Bold] leading-normal",
                                                    children: [
                                                        el.name,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "ml-2 opacity-50 font-normal font-[GT-America-Extended-Regular] text-sm",
                                                            children: el.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            target: "_blank",
                                                            href: el.linken,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/in.svg",
                                                                className: "w-4 h-4 inline-block ml-2"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                el.background.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: " mt-2 text-xs  text-left text-white opacity-50 font-[GT-America-Extended-Regular]",
                                                        children: el
                                                    }, index))
                                            ]
                                        })
                                    ]
                                }, index))
                        })
                    ]
                }),
                showProject && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "projects",
                    className: "pb-10 mt-0 overflow-hidden text-center sm:pb-10 sm:mt-16",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: " font-[GT-America-Bold]  text-4xl sm:text-6xl text-white drop-shadow-md uppercase",
                            children: "Project Case"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: " text-xs sm:text-xl text-white font-[GT-America-Extended-Regular] mt-6",
                            children: "We have experienced three crypto cycles and have invested in and incubated 100+ projects."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col justify-between w-10/12 mx-auto my-4  sm:w-8/12 sm:flex-row sm:my-20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-10/12 mx-auto sm:w-4/12 h-96 sm:h-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
                                        // effect={"cards"}
                                        cssMode: isMobile,
                                        loop: true,
                                        autoplay: {
                                            delay: 10000,
                                            disableOnInteraction: false
                                        },
                                        thumbs: {
                                            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                                        },
                                        modules: [
                                            swiper_modules__WEBPACK_IMPORTED_MODULE_8__.Autoplay,
                                            swiper_modules__WEBPACK_IMPORTED_MODULE_8__.Thumbs
                                        ],
                                        className: "!h-full w-full  bg-transparent rounded-xl",
                                        children: project.map((el, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                                className: "relative w-full bg-transparent rounded-2xl h-96 swiper-slide-transform",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: el.img,
                                                        className: "object-cover w-full h-full"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        className: "font-[GT-America-Compressed-Medium] absolute text-white  text-center  left-0 right-0 bottom-0 text-4xl drop-shadow  bg-gradient-to-b from-[#01020300] to-[#010203b1] py-10 ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: el.icon,
                                                                className: "w-full"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: el.title
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-10/12 m-auto mt-6 text-left text-white sm:w-6/12 sm:mt-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
                                        className: "w-full",
                                        onSwiper: setThumbsSwiper,
                                        allowTouchMove: false,
                                        children: project.map((el, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        className: "font-[GT-America-Compressed-Medium] text-4xl  text-left",
                                                        children: [
                                                            el.title,
                                                            el.tips == "GameFi" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "ml-2 px-3 py-1 not-italic bg-blue-500 rounded-md mr-2 font-[GT-America-Compressed-Medium] text-xl",
                                                                children: el.tips
                                                            }),
                                                            el.tips == "NFT" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "ml-2 px-3 py-1 not-italic bg-green-500 rounded-md mr-2 font-[GT-America-Compressed-Medium] text-xl",
                                                                children: el.tips
                                                            }),
                                                            el.tips == "Defi" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "ml-2 px-3 py-1 not-italic bg-blue-500 rounded-md mr-2 font-[GT-America-Compressed-Medium] text-xl",
                                                                children: el.tips
                                                            }),
                                                            el.tips == "Infra" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "ml-2 px-3 py-1 not-italic bg-orange-500 rounded-md mr-2 font-[GT-America-Compressed-Medium] text-xl",
                                                                children: el.tips
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "mt-2 text-left",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: el.href,
                                                            target: "_blank",
                                                            className: "font-[GT-America-Extended-Regular] text-base",
                                                            children: el.href
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-[GT-America-Extended-Regular] mt-5  text-xs sm:text-base text-left text-white",
                                                        children: el.desc
                                                    })
                                                ]
                                            }, index))
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3979:
/***/ ((module) => {

module.exports = require("react-particles");

/***/ }),

/***/ 7998:
/***/ ((module) => {

module.exports = require("tsparticles-slim");

/***/ }),

/***/ 6703:
/***/ ((module) => {

module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ 9867:
/***/ ((module) => {

module.exports = import("@web3modal/react");;

/***/ }),

/***/ 2184:
/***/ ((module) => {

module.exports = import("swiper/modules");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = import("three");;

/***/ }),

/***/ 8998:
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ 7697:
/***/ ((module) => {

module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,639,163], () => (__webpack_exec__(1496)));
module.exports = __webpack_exports__;

})();