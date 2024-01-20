import { useState, useRef, useEffect } from "react";
import Particles from "react-particles";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import * as THREE from "three";
import gsap from "gsap";
import HeaderFooter from "../components/HeaderFooter"
import NumberScroller from "number-scroller";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Thumbs, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";


const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        1e4
      );
      const renderer = new THREE.WebGLRenderer({
        antialias: !0,
      });

      const settings = {
        progress: 0.3,
        hauteur: 1.9,
        raymarching_steps: 10,
        map_coef: 1,
        amplitude: 0.6,
        frequency: 2,
        ray_origin_x: 0,
        ray_origin_y: 0,
        ray_origin_z: 2,
        grainamount: 0.09,
        lightrays: 1.4,
        lightrays_amp: 0.55,
        lightPos_x: 8,
        lightPos_y: 3,
        lightPos_z: -3,
        lightAngle: -0.2,
      };

      var width = window.innerWidth;
      var height = window.innerHeight;
      // console.log(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.setClearColor(15658734, 0);
      renderer.outputEncoding = THREE.sRGBEncoding;
      containerRef.current?.children.length == 0 &&
        containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;

      const geometry = new THREE.PlaneGeometry(16, 8);
      const material = new THREE.ShaderMaterial({
        extensions: {
          derivatives: true,
        },
        vertexShader:
          "#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nvoid main() \n{   \n    vUv = uv;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n }",
        fragmentShader:
          "#define GLSLIFY 1\nuniform float time;\nuniform float progress;\nuniform float hauteur;\nuniform vec2 resolution;\n\nuniform int raymarching_steps;\nuniform int map_coef;\nuniform float amplitude;\nuniform float frequency;\nuniform float grainamount;\nuniform float lightrays; // intensity\nuniform float lightrays_amp;\n\nuniform vec3 ray_origin;\nuniform vec3 lightPos;\nuniform float lightAngle;\n\nvarying vec2 vUv;\n\n// Created by greenbird10\n// https://www.shadertoy.com/view/4dX3zN\n\nfloat hash(vec2 p) {\n\treturn 0.5*(\n    sin(dot(p, vec2(271.319, 413.975)) + 1217.13*p.x*p.y)\n    ) + 0.5;\n}\n\nfloat noise(vec2 p) {\n  vec2 w = fract(p);\n  w = w * w * (3.0 - 2.0*w);\n  p = floor(p);\n  return mix(\n    mix(hash(p+vec2(0,0)), hash(p+vec2(1,0)), w.x),\n    mix(hash(p+vec2(0,1)), hash(p+vec2(1,1)), w.x), w.y);\n}\n\n// wave octave inspiration\n// Alexander Alekseev - Seascape\n// https://www.shadertoy.com/view/Ms2SD1\nfloat map_octave(vec2 uv) {\n  uv = (uv + noise(uv)) / 2.5;\n  uv = vec2(uv.x*0.6-uv.y*0.8, uv.x*0.8+uv.y*0.6);\n  vec2 uvsin = 1.0 - abs(sin(uv));\n  vec2 uvcos = abs(cos(uv));\n  uv = mix(uvsin, uvcos, uvsin);\n  float val = 1.0 - pow(uv.x * uv.y, 0.65);\n  return val;\n}\n\nfloat map(vec3 p) {\n  vec2 uv = p.xz + time/2.;\n  float amp = amplitude, freq = frequency, val = 0.0;\n  for(int i = 0; i < map_coef; ++i) {\n    val += map_octave(uv) * amp;\n    amp *= 0.3;\n    uv *= freq;\n    // uv = vec2(uv.x*0.6-uv.y*0.8, uv.x*0.8+uv.y*0.6);\n  }\n  uv = p.xz - 1000. - time/2.;\n  amp = amplitude, freq = frequency;\n  for(int i = 0; i < map_coef; ++i) {\n    val += map_octave(uv) * amp;\n    amp *= 0.3;\n    uv *= freq;\n    // uv = vec2(uv.x*0.6-uv.y*0.8, uv.x*0.8+uv.y*0.6);\n  }\n  return val + 3.0 - p.y;\n}\n\nvec3 getNormal(vec3 p) {\n  float eps = 1./resolution.x;\n  vec3 px = p + vec3(eps, 0, 0);\n  vec3 pz = p + vec3(0, 0, eps);\n  return normalize(vec3(map(px),eps,map(pz)));\n}\n\n// raymarch inspiration\n// Alexander Alekseev - Seascape\n// https://www.shadertoy.com/view/Ms2SD1\nfloat raymarch(vec3 ro, vec3 rd, out vec3 outP, out float outT) {\n    float l = 0., r = 26.;\n    int i = 0;\n    float dist = 1000000.;\n    for(i = 0; i < raymarching_steps; ++i) {\n        float mid = (r+l)/2.;\n        float mapmid = map(ro + rd * mid);\n        dist = min(dist, abs(mapmid));\n        if(mapmid > 0.) {\n        \tl = mid;\n        }\n        else {\n        \tr = mid;\n        }\n        if(r - l < 1./resolution.x) break;\n    }\n    outP = ro + rd*l;\n    outT = l;\n    return dist;\n}\n\nfloat fbm(vec2 n) {\n\tfloat total = 0.0, amplitude = 1.;\n\tfor (int i = 0; i < 5; i++) {\n\t\ttotal += noise(n) * amplitude; \n\t\tn += n;\n\t\tamplitude *= lightrays_amp; \n\t}\n\treturn total;\n}\n\nfloat lightShafts(vec2 st) {\n    float angle = lightAngle;\n    vec2 _st = st;\n    float t = time / 16.;\n    st = vec2(st.x * cos(angle) - st.y * sin(angle), \n              st.x * sin(angle) + st.y * cos(angle));\n    float val = fbm(vec2(st.x*2. + 200. + t, st.y/4.));\n    val += fbm(vec2(st.x*2. + 200. - t, st.y/4.));\n    val = val / 3.;\n    float mask = pow(clamp(1.0 - abs(_st.y-0.15), 0., 1.)*0.49 + 0.5, 2.0);\n    mask *= clamp(1.0 - abs(_st.x+0.2), 0., 1.) * 0.49 + 0.5;\n\treturn pow(val*mask, lightrays);\n}\n\nvec2 bubble(vec2 uv, float scale) {\n    if(uv.y > 0.2) return vec2(0.);\n    float t = time/4.;\n    vec2 st = uv * scale;\n    vec2 _st = floor(st);\n    vec2 bias = vec2(0., 4. * sin(_st.x*128. + t));\n    float mask = smoothstep(0.1, 0.2, -cos(_st.x*128. + t));\n    st += bias;\n    vec2 _st_ = floor(st);\n    st = fract(st);\n    float size = noise(_st_)*0.07+0.01;\n    vec2 pos = vec2(noise(vec2(t, _st_.y*64.1)) * 0.8 + 0.1, 0.5);\n    if(length(st.xy - pos) < size) {\n        return (st + pos) * vec2(.1, .2) * mask;\n    }\n    return vec2(0.);\n}\n\nfloat gelfond_rand(vec2 p) {\n    vec2 k1 = vec2(\n        23.14069263277926, // e^pi (Gelfond's constant)\n        2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)\n    );\n    return fract(\n        cos(dot(p, k1)) * 12345.6789\n    );\n}\n\nvoid main() {\n    // vec3 ro = vec3(0.,0.,2.);\n    vec3 ro = ray_origin;\n    // vec3 lightPos = vec3(8, 3, -3);\n    vec3 lightPos = lightPos;\n    vec3 lightDir = normalize(lightPos - ro);\n\n    // adjust uv\n    // vec2 uv = vUv * 0.5;\n    vec2 uv = gl_FragCoord.xy;\n    uv = (-resolution.xy + hauteur * uv) / resolution.y;\n    uv.y *= 0.5;\n    uv.x *= 0.45;\n    // uv += bubble(uv, 12.) + bubble(uv, 24.); // add bubbles\n\n    // ray direction\n    vec3 rd = normalize(vec3(uv*2., -1.));\n    // vec3 rd = normalize(vec3(uv, -1.));\n    vec3 hitPos;\n    float hitT;\n    vec3 seaColor = vec3(11,82,142)/255.;\n    vec3 color;\n    \n    // waves\n    float dist = raymarch(ro, rd, hitPos, hitT);\n    float diffuse = dot(getNormal(hitPos), rd) * 0.5 + 0.5;\n    color = mix(seaColor, vec3(15,120,152)/255., diffuse);\n    color += pow(diffuse, 12.0);\n    \n\t// refraction\n    vec3 ref = normalize(refract(hitPos-lightPos, getNormal(hitPos), 0.05));\n    float refraction = clamp(dot(ref, rd), 0., 1.0);\n    color += vec3(245,250,220)/255. * 0.4 * pow(refraction, 1.5);\n\n    vec3 col = vec3(0.);\n    col = mix(color, seaColor, pow(clamp(0., 1., dist), 0.2)); // glow edge\n    col += vec3(225,230,200)/255. * lightShafts(uv); // light shafts\n\n    // tone map\n    col = (col*col + sin(col))/vec3(1.8, 1.8, 1.9);\n    \n    // dark gradient from top\n    // col *= vec3(1.8, 1.8, 1.9) * (1.-vUv.y);\n    // dark gradient from bottom\n    col -= (1. -(( vec3(1.8, 1.8, 1.9) * ( vUv.y )) * 0.2)) * progress;\n\n    // rand noise\n    uv.y = gelfond_rand( vec2( uv.y, 0.4 ) );\n    col.rgb += gelfond_rand( uv ) * ( grainamount * vUv.y );\n    \n    // vignette\n    // inigo quilez - Stop Motion Fox \n    // https://www.shadertoy.com/view/3dXGWB\n    vec2 q = vUv / resolution.xy;\n    col *= 0.7+0.3*pow(16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y),0.2);\n\n    gl_FragColor = vec4(col,1.0);\n    // gl_FragColor = vec4(0.,vUv.y,0.,1.0);\n}",
        uniforms: {
          time: {
            value: 0,
          },
          progress: {
            value: settings.progress,
          },
          hauteur: {
            value: settings.hauteur,
          },
          resolution: {
            value: new THREE.Vector2(2 * width, 2 * height),
          },
          raymarching_steps: {
            value: settings.raymarching_steps,
          },
          map_coef: {
            value: settings.map_coef,
          },
          amplitude: {
            value: settings.amplitude,
          },
          frequency: {
            value: settings.frequency,
          },
          ray_origin: {
            value: new THREE.Vector3(
              settings.ray_origin_x,
              settings.ray_origin_y,
              settings.ray_origin_z
            ),
          },
          grainamount: {
            value: settings.grainamount,
          },
          lightrays: {
            value: settings.lightrays,
          },
          lightrays_amp: {
            value: settings.lightrays_amp,
          },
          lightPos: {
            value: new THREE.Vector3(
              settings.ray_origin_x,
              settings.ray_origin_y,
              settings.ray_origin_z
            ),
          },
          lightAngle: {
            value: settings.lightAngle,
          },
        },
        side: 2,
      });

      const addObjects = () => {
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
      };

      const render = () => {
        (material.uniforms.time.value = 1),
          // (material.uniforms.time.value = 0.001 * 10),
          renderer.render(scene, camera),
          window.requestAnimationFrame(render.bind(this));
      };

      const resize = () => {
        width = Number(containerRef.current?.offsetWidth);
        height = Number(containerRef.current?.offsetHeight);
        renderer.setSize(width, height);
        camera.aspect = width / height;
        material.uniforms.resolution.value.x = 2 * width;
        material.uniforms.resolution.value.y = 2 * height;
        camera.updateProjectionMatrix();
      };

      const setupResize = () => {
        window.addEventListener("resize", resize.bind(this));
      };

      var td = gsap;

      const animate = () => {
        td.from(settings, {
          duration: 5,
          lightrays: 3,
          lightrays_amp: 0,
          ray_origin_y: 4,
          progress: 1,
          hauteur: 0,
          ease: "power3.out",
          onUpdate: () => {
            (material.uniforms.progress.value = settings.progress),
              (material.uniforms.lightrays.value = settings.lightrays),
              (material.uniforms.lightrays_amp.value = settings.lightrays_amp),
              (material.uniforms.ray_origin.value.y = settings.ray_origin_y);
          },
        });
      };

      addObjects();
      resize();
      render();
      setupResize();
      animate();

      let t = 0;
      document.addEventListener("scroll", (e) => {
        (t = window.scrollY),
          t < 1500 &&
          window.requestAnimationFrame(() => {
            var e, n, i;
            (e = Math.round(t)),
              (settings.hauteur =
                ((e - (n = 0)) * (0.1 - (i = 1.9))) / (1400 - n) + i),
              (material.uniforms.hauteur.value = settings.hauteur);
          }),
          (material.uniforms.raymarching_steps.value =
            t > 1500 ? 1 : settings.raymarching_steps);
      });
    }
  }, []);

  return <div className="fixed top-0 -z-20" ref={containerRef} />;
};

export default function Home() {
  const [revenue, setRevenue] = useState([
    {
      num: 1,
      icon: "/icon1.png",
      subTitle: "Service revenue ",
      title: "Service revenue",
      desc: "Stable annual income of millions of dollars is expected.",
    },
    {
      num: 2,
      icon: "/icon2.png",
      subTitle: "Investment returns",
      title: "Investment returns",
      desc: "Lower investment costs than funds and higher investment returns than funds.",
    },
  ]);

  const [advantage, setAdvantage] = useState([
    {
      icon: "/rabbit.svg",
      title: "We are good at pulling a rabbit out of a hat.",
      desc: "For current industry hot spots, we can make quick respond and quickly output what the market wants from operational fundamentals, KOL advertising channels, matching economic models, and products.",
    },
    {
      icon: "/water.svg",
      title: "We have flow and KOLs from all over the world.",
      desc: "We have super Top KOLs and communities of SoutheastAsia, Chinese-speaking area, Japan and South Korea, nextto emerging regions such as Africa.",
    },
    {
      icon: "/rush.svg",
      title:
        "Fighting on the front line, improving the success rate of our portfolio.",
      desc: "On the public traffic battlefield, we are clear about the focus of users in community operations and which channels and media advertising are more effective. ",
    },
    {
      icon: "/gold.svg",
      title: "A prudent financial system in operation.",
      desc: "We are good at helping projects cold start and cross the gap from 0 to 1.",
    },
  ]);

  const [team, setTeam] = useState([
    {
      avatar: "/lin.jpg",
      name: "Lin",
      title: "Founding Partner", 
      linken: "https://www.linkedin.com/in/lin-yang-95bb84294",
      background: [
        '· Perking university, KU LEUVEN University, MBA.',
        '· 15 years of experience in well-known financial investment industry, with multiple IPOs from well-known technology companies.',
        '· Established Aqua Venture at San Francisco from 2018, Web3 focus.'
      ],
    },
    {
      avatar: "/blue.jpg",
      name: "Blue",
      title: "Founding Partner",
      linken: "https://www.linkedin.com/in/blue-zhu", 
      background: [
        '· Graduated from the School of Management, Fudan University.',
        '· 10 years of investment experience, early blockchain participants and influencer.',
        '· Established K24 ventures from 2018, invested more than 50 well-known projects.'
      ],
    },
    {
      avatar: "/aemoe.jpg",
      name: "Aemoe",
      title: "Founding Partner", 
      linken:"https://www.linkedin.com/in/bo-lian",
      background: [
        '· San José State University, CS Master.',
        '· Years of well-known enterprise front-end architect and blockchain architect.',
        '· Google Plus members.',
        '· Partner of unparalleled fund in the world.'
      ],
    },
    {
      avatar: "/anglina.jpg",
      name: "Angelina",
      title: "Venture Partner", 
      linken:"https://www.linkedin.com/in/angelina-zhang",
      background: [
        '· Graduated from Edinburgh Napier University - BA in Accounting',
        '· Used to work with HSBC, BNYM, BlackRock, etc. top-brand banks, and AUM in the UK. ',
        '· Partner of the unparalleled fund in the world.',
      ],
    }
  ]);

  const [project, setProject] = useState([
    {
      icon: "/Yuliverse.png",
      title: "Yuliverse",
      desc: "Yuliverse is an alternative reality metaverse that runs parallel to the physical world, offering a new kind of lifestyle through immersive gameplay and social interaction. With thousands of exciting storylines to explore, players can earn $ARG and $ART as they complete quests and assume different roles within the game.",
      tips: "GameFi",
      href: "https://yuliverse.com/",
      img: "/Yuliverse_img.png",
    },
    {
      icon: "/Skyark.png",
      title: "SkyArk",
      desc: "SkyArk Chronicles is a Triple A fantasy JRPG Game with Interoperable NFTs. The SkyArk Chronicles is a Trilogy of 2 GameFi(“House of Heroes” and “Legends Arise”) and 1 SocialFi Metaverse (“RE: SkyArkVerse”).",
      tips: "GameFi",
      href: "https://skyarkchronicles.com/",
      img: "/Skyark_img.png",
    },
    {
      icon: "/Demole.png",
      title: "Demole",
      desc: "This world exists as a multiverse. However, each universe is independent and has never known the existence of the other. Until one day, for unknown reasons, a supermassive cosmic explosion broke out, causing the walls between the universes to be accidentally broken. This created portals from the rifts of spacetime - passages that link the universes together. The exciting journey to explore the universe will start here. Who will you be in the expedition? A erudite and arrogant ELF? A fiery dragon warrior? A mysterious ghost or a timid tree tribe that stands up to everyone when in danger? What will be your decision when participating in the exploration of the universe and seeking the maximum energy to bring your race to the peak of domination?",
      tips: "GameFi",
      href: "https://demole.io/",
      img: "/Demole_img.png",
    },
    {
      icon: "/Halo.png",
      title: "Halo",
      desc: "HALOWORLD is a hyper-realistic metaverse based on Unreal Engine 5, in which the avatar is not only the body in the metaverse but another you in the parallel world of itself. HALOWORLD will create a huge ecosystem of digital citizens and rapidly promote the arrival of the AI era. In the future, you can use AI Chat to chat with another self in the virtual world in real-time, and you can also generate another self through AI photo generation technology in the metaverse.",
      tips: "GameFi",
      href: "https://halonft.art/",
      img: "/Halo_img.png",
    },
    {
      icon: "/Blocksport.png",
      title: "BLOCKSPORT",
      desc: "Blocksport is a Sports technology company with a headquarter in Zug, Switzerland. Blockport is building the largest Sports NFTs aggregation platform in the world. Collectibles, merchandise, and other NFTs of sports clubs can be collected by their fans using the NFTs platforms. Also, Blocksport offers an App-as-a-Service platform and launching services for sports clubs, leagues, federations, sports celebrities, and other clients to engage their fans. The platform also collaborates with sports clubs to launch fan tokens for their supporters with the holders having the right to participate in governance. There is also a mobile-based NFTs marketplace where users can buy and sell NFTs.",
      tips: "GameFi",
      href: "https://blocksport.io/",
      img: "/Blocksport_img.png",
    },
    {
      icon: "/Bounce.png",
      title: "Bounce Finance",
      desc: "On the way of pursuing a completely decentralized financial environment, the DeFi community has made tremendous progress by introducing elegant economic designs. I admire projects and individuals in the DeFi space and appreciate the architectures people built. I especially appreciate PlutusDefi’s bonding curve listing strategy and yearn.finance’s 5NO design (no founder’s allocation, no premise, no partnership allocation, no ICO, no advisor tokens), and it incentivized me to create bounce.finance. [Not as a job, but for fun. It is only an experiment so far.]",
      tips: "NFT",
      href: "https://bounce.finance/",
      img: "/Bounce_img.png",
    },

    {
      icon: "/UneMeata.png",
      title: "Une Meta",
      desc: "UneMeta is a curated social and NFT market space for quality and established IPs and Icons, aiming to create higher quality experience with NFT to everyone. ",
      tips: "NFT",
      href: "https://unemeta.com",
      img: "/UneMeata_img.png",
    },
    {
      icon: "/Juggernaut.png",
      title: "Juggernaut DeFi",
      desc: "The next evolution of DeFi will go beyond pure finance and into real-life financial use-cases and abstractions of all assets and innovations. Juggernaut (JGN) aims to build the next generation of blockchain infrastructure to make DeFi & NFTs unstoppable.",
      tips: "NFT",
      href: "https://jgndefi.com/",
      img: "/Juggernaut_img.png",
    },
    {
      icon: "/XCarnival.png",
      title: "XCarnival",
      desc: "One-stop NFTFi Liquidity Integration Platform.",
      tips: "NFT",
      href: "https://xcarnival.fi/",
      img: "/XCarnival_img.png",
    },
    {
      icon: "/yuziswap.png",
      title: "Yuzuswap",
      desc: " YuzuSwap is a decentralized exchange on the Oasis Emerald paratime that includes incentives like liquidity & and trade mining. YuzuSwap follows a non-custodial, peer-to-peer, automated-market-maker model, and aims to provide a safe, swift, low-cost tool to discover and swap tokens within the Oasis ecosystem. The YuzuSwap platform itself is fully open to developers and members of the Yuzu DAO. ",
      tips: "Defi",
      href: " https://yuzu-swap.com/",
      img: "/yuziswap_img.png",
    },
    {
      icon: "/etha.png",
      title: "ETHA",
      desc: "ETHA Lend is a chain agnostic yield optimizer that abstracts the complexity in DeFi to provide algorithmically optimal yields. The platform is currently powered by the Polygon network. Its suite of DeFi features leverage state-of-the-art automation and hybrid strategies enforced by smart contracts to deliver a simple yet elegant experience for users.",
      tips: "Defi",
      href: "https://ethalend.org/",
      img: "/etha_img.png",
    },
    {
      icon: "/way.png",
      title: "Way Network",
      desc: "Way Network is a universal solution to enable interchain transaction with trustless and valid delivery. It's the first zkOmnichain interoperability protocol that provides a powerful communication primitive on which to build various sets of omnichain applications. With this new primitive, developers can implement seamless cross-chain applications, such as cross-chain DEX or multi-chain revenue aggregators, without relying on trusted custodians or intermediate transactions. Way Network enables direct transactions across all chains trustlessly. Allowing transactions to flow freely between chains provides users with the opportunity to consolidate decentralized liquidity while also leveraging applications on independent chains. With Way Network, we provide the network architecture underlying the fully-connected omnichain ecosystem of the future.",
      tips: "Infra",
      href: "https://way.network/",
      img: "/way_img.png",
    },
    {
      icon: "/metis.png",
      title: "Metis",
      desc: "Powering dApps, Businesses, and Communities with Decentralization by scaling Ethereum to what it’s meant to be. Boundless.",
      tips: "Infra",
      href: "https://metis.io",
      img: "/metis_img.png",
    },
    {
      icon: "/EpiK.png",
      title: "EpiK Protocol",
      desc: "EpiK Protocol is an AI-first blockchain that aims at an open and collaborative AI data network accessible to all AI. It provides the infrastructure for community members to curate high-quality human-labeled AI training data and contribute to AI.",
      tips: "Infra",
      href: "https://epik-protocol.io/",
      img: "/EpiK_img.png",
    },
    {
      icon: "/chia.png",
      title: "Chia Network",
      desc: "Chia is a cryptocurrency and blockchain with smart transaction capabilities. It was designed from the ground up to make cryptocurrency easier to use (and harder to lose) than cash. Its Proof of Space and Time is the only Nakamoto consensus algorithm since Proof of Work, while also having a much lower energy consumption. Part of Chia's vision involves improving the carbon footprint of the blockchain industry. Chia's mainnet was launched on March 19, 2021. Development of its ecosystem is ongoing, with primitives released for CATs, NFTs, Offers, and DIDs.",
      tips: "Infra",
      href: "https://chia.net/",
      img: "/chia_img.png",
    },
  ]);

  const [isMobile, setIsMobile] = useState(false);

  const [showProject, setShowProject] = useState(false);


  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container);
    },
    []
  );

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    console.log("useEffect");
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
      setShowProject(true)
    } else {
      setIsMobile(false);
      setShowProject(true);
    }
  }, []);


  return (
    <HeaderFooter>
      <main className="flex flex-col justify-center">
        <ThreeScene />
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {},
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  value: "#fff",
                },
                opacity: 1,
              },
              enable: false,
            },
            defaultThemes: {},
            delay: 0,
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: false,
                  mode: "repulse",
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: false,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                },
                resize: {
                  delay: 0.5,
                  enable: true,
                },
              },
              modes: {
                trail: {
                  delay: 1,
                  pauseOnStop: false,
                  quantity: 1,
                },
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1,
                },
                bounce: {
                  distance: 200,
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
                    selectors: [],
                  },
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                  },
                },
                push: {
                  default: false,
                  groups: [],
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
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
                    selectors: [],
                  },
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
                light: {
                  area: {
                    gradient: {
                      start: {
                        value: "#ffffff",
                      },
                      stop: {
                        value: "#000000",
                      },
                    },
                    radius: 1000,
                  },
                  shadow: {
                    color: {
                      value: "#000000",
                    },
                    length: 2000,
                  },
                },
              },
            },
            manualParticles: [],
            particles: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              collisions: {
                absorb: {
                  speed: 2,
                },
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0,
                },
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
                    sync: true,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    delay: 0,
                    decay: 0,
                    sync: true,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    delay: 0,
                    decay: 0,
                    sync: true,
                  },
                },
              },
              groups: {},
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 600,
                  },
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0,
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
                  maxSpeed: 50,
                },
                path: {
                  clamp: true,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                  options: {},
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: true,
                size: false,
                speed: 1,
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fill: {},
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
                limit: 0,
                value: 160,
              },
              opacity: {
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: {
                  min: 0,
                  max: 1,
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
                  minimumValue: 0,
                },
              },
              reduceDuplicates: false,
              shadow: {
                blur: 0,
                color: {
                  value: "#000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                close: true,
                fill: true,
                options: {},
                type: "circle",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 1,
                },
                value: {
                  min: 0.5,
                  max: 1,
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
                  minimumValue: 0.3,
                },
              },
              stroke: {
                width: 0,
              },
              zIndex: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
              destroy: {
                bounds: {},
                mode: "none",
                split: {
                  count: 1,
                  factor: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 3,
                  },
                  rate: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: {
                      min: 4,
                      max: 9,
                    },
                  },
                  sizeOffset: true,
                  particles: {},
                },
              },
              roll: {
                darken: {
                  enable: false,
                  value: 0,
                },
                enable: false,
                enlighten: {
                  enable: false,
                  value: 0,
                },
                mode: "vertical",
                speed: 25,
              },
              tilt: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: "clockwise",
                enable: false,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: {
                  angle: 50,
                  move: 10,
                },
              },
              life: {
                count: 0,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  sync: false,
                },
                duration: {
                  random: {
                    enable: false,
                    minimumValue: 0.0001,
                  },
                  value: 0,
                  sync: false,
                },
              },
              rotate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
              },
              orbit: {
                animation: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: false,
                },
                enable: false,
                opacity: 1,
                rotation: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 45,
                },
                width: 1,
              },
              links: {
                blink: false,
                color: {
                  value: "#ffffff",
                },
                consent: false,
                distance: 150,
                enable: false,
                frequency: 1,
                opacity: 0.4,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#000",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
              repulse: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
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
                value: true,
              },
            },
          }}
        />
        <div className=" fixed left-0 top-0 bottom-0 right-0 opacity-40 -z-10 bg-gradient-to-b from-[#18203d] to-[#030348]"></div>
        <div className="pb-24 text-center text-white pt-14 sm:pt-28 sm:pb-48 ">
          <h1 className=" font-[GT-America-Extended-Black] uppercase text-5xl sm:text-8xl drop-shadow py-8">
            Aqua Labs
          </h1>
          <h1 className="leading-tight text-3xl sm:text-5xl font-[GT-America-Compressed-Medium]  drop-shadow uppercase">
            Free flow increasing engine
          </h1>
          <p className="w-10/12 sm:w-8/12 pt-12 m-auto text-xs sm:text-xl drop-shadow  font-[GT-America-Extended-Regular]">
            We helping Web3 projects build global competitive advantages. We are
            rooted in Africa, South America, and Southeast Asia, promoting the
            rapid growth of projects.
          </p>
        </div>
        <div
          id="mission"
          className=" h-96 flex flex-col justify-between w-10/12 gap-2 mx-auto my-0 text-white  sm:flex-row sm:w-10/12 sm:my-10"
        >
          <div className="w-10/12 sm:w-7/12">
            <h1 className="font-[GT-America-Bold] text-4xl sm:text-6xl uppercase mt-2">
              Our Mission
            </h1>
            <p className=" font-[GT-America-Extended-Regular]  mt-4 sm:mt-8  text-xs sm:text-xl">
              Help{" "}
              <b className="text-2xl text-blue-400 ">
                {/* <NumberScroller to={100} timeout={1000} />+ */}
                100+
              </b>{" "}
              partners with dreams to fulfill their entrepreneurial goals.
              Empower 200+ web3 projects in Africa, Asia and the Americas. Help them become the best in the world.
            </p>
          </div>
          <div className="w-full mt-4 overflow-hidden rounded-lg sm:w-5/12 drop-shadow sm:mt-0">
            <Swiper
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img src="/img1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img4.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img5.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img6.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img7.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img8.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img9.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img10.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img11.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img12.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img13.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img14.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img15.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img16.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img17.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img18.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img19.png" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div
          id="version"
          className=" h-96 flex flex-col-reverse justify-between w-10/12 gap-2 mx-auto mb-2 text-white flex-co sm:flex-row sm:my-10"
        >
          <div className="w-full overflow-hidden rounded-lg sm:w-5/12 drop-shadow ">
            <Swiper
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img src="/img20.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img21.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img22.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img23.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img24.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img25.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img27.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img28.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img29.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img30.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img31.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img32.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img33.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img34.png" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full mt-4 mb-4 text-left sm:w-7/12 sm:text-right sm:mt-0 sm:mb-0">
            <h1 className="font-[GT-America-Bold] text-4xl sm:text-6xl uppercase mt-4">
              Our Vision
            </h1>
            <p className=" font-[GT-America-Extended-Regular] mt-4 sm:mt-8 text-xs sm:text-xl">
              Gathering global top talents to make Web3 an indispensable
              productive force in human social development.
            </p>
          </div>
        </div>
        <div id="why_us" className="mb-10 mt-12 text-center ">
          <h1 className=" font-[GT-America-Bold]  text-4xl sm:text-6xl text-white drop-shadow-md uppercase">
            Why Us?
          </h1>
          {/* <h2 className="text-sm text-white opacity-50">
          Spline is constantly growing just like the possibilities of what you
          can achieve.
        </h2> */}
          <ul className="flex flex-col w-10/12 gap-6 pt-12 m-auto text-white sm:flex-row">
            {advantage.map((el, index) => (
              <li
                key={index}
                className="flex flex-col w-full px-8 py-8 bg-[#02000b] bg-opacity-30 rounded-xl sm:w-4/12 drop-shadow"
              >
                <i className="flex justify-center p-4 m-auto ">
                  <img src={el.icon} className="w-16 h-16" alt="icon" />
                </i>
                <h1 className="h-18 sm:h-24 mt-4 font-bold text-lg font-[GT-America-Bold] leading-normal">
                  {el.title}
                </h1>
                <p className="h-32 sm:h-40 mt-2 text-sm text-left text-white opacity-50 font-[GT-America-Extended-Regular]">
                  {el.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="pb-10 mt-0 overflow-hidden text-center sm:pb-20 flex sm:flex-row flex-col w-10/12 mx-auto sm:mt-20 gap-10"
        >
          <div className="sm:w-4/12 w-full">
            <h1 className=" font-[GT-America-Bold]  text-4xl sm:text-6xl text-white drop-shadow-md uppercase">
              OUR TEAM
            </h1>
            <h2 className=" text-xs sm:text-lg text-white font-[GT-America-Extended-Regular] mt-6">
            We are a web3 accelerator. We have experienced three crypto cycles and have invested in and incubated 100+ projects. We have more experience in coaching tech builders and supporting mainstream chain grants. We also have close relationships with top venture capital firms in Asia and North America. 
            </h2>
          </div>
          <ul className="flex flex-col w-full sm:w-8/12 gap-2  text-white  ">
            {team.map((el, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row w-full px-0 sm:px-8 py-2 text-left gap-4"
              >
                <img src={el.avatar} className="w-32 h-32 rounded-md" alt="icon" />
                <div>
                  <h1 className="font-bold text-lg font-[GT-America-Bold] leading-normal">
                    {el.name}
                    <span className="ml-2 opacity-50 font-normal font-[GT-America-Extended-Regular] text-sm">{el.title}</span>
                    <a target="_blank" href={el.linken}><img src="/in.svg" className="w-4 h-4 inline-block ml-2" /></a>
                  </h1>
                  {el.background.map((el,index)=><p key={index} className=" mt-2 text-xs  text-left text-white opacity-50 font-[GT-America-Extended-Regular]">
                    {el}
                  </p>)}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {showProject && (
          <div
            id="projects"
            className="pb-10 mt-0 overflow-hidden text-center sm:pb-10 sm:mt-16"
          >
            <h1 className=" font-[GT-America-Bold]  text-4xl sm:text-6xl text-white drop-shadow-md uppercase">
              Project Case
            </h1>
            <h2 className=" text-xs sm:text-xl text-white font-[GT-America-Extended-Regular] mt-6">
              We have experienced three crypto cycles and have invested in and
              incubated 100+ projects.
            </h2>
            <div className="flex flex-col justify-between w-10/12 mx-auto my-4  sm:w-8/12 sm:flex-row sm:my-20">
              <div className="w-10/12 mx-auto sm:w-4/12 h-96 sm:h-auto">
                <Swiper
                  // effect={"cards"}
                  cssMode={isMobile}
                  loop={true}
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                  }}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[Autoplay, Thumbs]}
                  className="!h-full w-full  bg-transparent rounded-xl"
                >
                  {project.map((el, index) => (
                    <SwiperSlide
                      key={index}
                      className="relative w-full bg-transparent rounded-2xl h-96 swiper-slide-transform"
                    >
                      <img
                        src={el.img}
                        className="object-cover w-full h-full"
                      />
                      <h1
                        className="font-[GT-America-Compressed-Medium] absolute text-white  text-center  left-0 right-0 bottom-0 text-4xl drop-shadow 
                      bg-gradient-to-b from-[#01020300] to-[#010203b1] py-10
                    "
                      >
                        <img src={el.icon} className="w-full" />
                        <span>{el.title}</span>
                      </h1>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-10/12 m-auto mt-6 text-left text-white sm:w-6/12 sm:mt-0">
                <Swiper
                  className="w-full"
                  onSwiper={setThumbsSwiper}
                  allowTouchMove={false}
                >
                  {project.map((el, index) => (
                    <SwiperSlide key={index} className="">
                      <h1 className="font-[GT-America-Compressed-Medium] text-4xl  text-left">
                        {el.title}
                        {el.tips == "GameFi" && (
                          <i className="ml-2 px-3 py-1 not-italic bg-blue-500 rounded-md mr-2 font-[GT-America-Compressed-Medium] text-xl">
                            {el.tips}
                          </i>
                        )}
                        {el.tips == "NFT" && (
                          <i className="ml-2 px-3 py-1 not-italic bg-green-500 rounded-md mr-2 font-[GT-America-Compressed-Medium] text-xl">
                            {el.tips}
                          </i>
                        )}
                        {el.tips == "Defi" && (
                          <i className="ml-2 px-3 py-1 not-italic bg-blue-500 rounded-md mr-2 font-[GT-America-Compressed-Medium] text-xl">
                            {el.tips}
                          </i>
                        )}
                        {el.tips == "Infra" && (
                          <i className="ml-2 px-3 py-1 not-italic bg-orange-500 rounded-md mr-2 font-[GT-America-Compressed-Medium] text-xl">
                            {el.tips}
                          </i>
                        )}
                      </h1>
                      <h2 className="mt-2 text-left">
                        <a
                          href={el.href}
                          target="_blank"
                          className="font-[GT-America-Extended-Regular] text-base"
                        >
                          {el.href}
                        </a>
                      </h2>
                      <p className="font-[GT-America-Extended-Regular] mt-5  text-xs sm:text-base text-left text-white">
                        {el.desc}
                      </p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

        )}

      </main>
    </HeaderFooter>
  );
}
