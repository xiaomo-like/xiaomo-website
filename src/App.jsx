import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  TrendingUp, 
  Cpu, 
  MessageCircle,
  Globe, 
  ArrowUpRight, 
  Target, 
  Sparkles, 
  Zap, 
  Palette, 
  Terminal, 
  Twitter, 
  Users, 
  PenTool, 
  Workflow, 
  X,
  Copy,
  Check,
  ArrowUp,
  Plus,
  Quote,
  Sun,
  Moon,
  Mail,
  QrCode,
  Share2
} from 'lucide-react';

// --- 1. 核心常量与主题配置 ---
const COLORS = {
  accent: "#4189B0",
  lightAccent: "#72B1D3",
};

const GRADIENT_TEXT = "bg-gradient-to-r from-[#4189B0] to-[#72B1D3] bg-clip-text text-transparent";
const GRADIENT_BG = "bg-gradient-to-r from-[#4189B0] to-[#72B1D3]";

const THEME = {
  radius: "rounded-[1.5rem]",
  bgLight: "bg-gradient-to-tr from-[#F2F2F2] via-white to-white",
  bgDark: "bg-[#131314]", 
  surfaceLight: "bg-neutral-50/50", 
  surfaceDark: "bg-[#1e1f20]", 
  borderDark: "border-white/5",
  noiseOverlay: "fixed inset-0 z-[-1] opacity-[0.03] md:opacity-[0.05] pointer-events-none mix-blend-overlay",
};

const LAYOUT = {
  container: "max-w-7xl mx-auto px-6 sm:px-12 lg:px-16",
  sectionPadding: "py-16 md:py-32 border-t border-neutral-100 dark:border-white/5"
};

const TYPO = {
  h1: "text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.2em] leading-[1.1]",
  h2: "text-2xl sm:text-4xl md:text-5xl font-black tracking-tight",
  h3: "text-lg md:text-2xl font-bold tracking-tight",
  body: "text-[13px] sm:text-base font-medium leading-relaxed",
  label: "text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-neutral-400",
};

// --- 2. 数据中心 ---
const DATA = {
  profile: {
    name: "潇墨",
    enName: "XIAOMO",
    titles: ["用户增长运营", "AI内容实践者", "前品牌设计师"],
    heroImage: "https://i.ibb.co/H5PZ0Ft/20260309213738-1584-114.jpg",
    description: "从品牌设计转型用户运营，专注用户增长运营、内容运营与 AI 应用实践。擅长通过数据拆解与 AI 工作流，实现内容的高效分发与转化。",
    tags: ["用户运营", "私域转化", "课程运营", "活动策划", "内容运营", "AI工作流"],
    metrics: [
      { label: "用户运营深耕", value: 1.5, displayValue: "1.5", unit: "年", icon: Award },
      { label: "用户管理规模", value: 5000, suffix: "+", icon: TrendingUp },
      { label: "AI 实践项目", value: 6, unit: "次", icon: Target },
      { label: "单篇最高曝光", value: 10, displayValue: "10w+", icon: Sparkles },
      { label: "设计自动化流程", value: 11, unit: "次", icon: Cpu },
    ],
    wechatQr: "https://i.ibb.co/5X64jnJ0/Snipaste-2026-03-10-00-40-31.png",
    wechatId: "xiao1205mo",
    email: "254719009@qq.com",
    publicAccount: "潇墨墨墨mo"
  },
  experience: [
    {
      period: "2024.7 — 至今",
      company: "生财有术",
      role: "用户运营",
      summary: "负责用户增长与私域续费体系建设，围绕用户分层、课程运营与内容策略推动用户转化，并探索 AI 在运营场景中的提效应用。",
      duties: [
        { label: "用户运营与续费增长：", detail: "负责 5000+ 用户运营与续费管理，建立用户分层体系（高价值 / 潜力 / 沉寂），通过差异化沟通策略与持续触达提升常态化续费率至 60%。" },
        { label: "年度续费活动统筹：", detail: "参与统筹年度双 11 续费专项活动，通过多轮触达与价值表达，在 11.1-11.11 期间完成 894 单续费，整体目标完成度 89%。" },
        { label: "课程产品策划与交付：", detail: "参与并主导轻量化课程产品从 0-1 设计与交付，累计完成 3 期课程，服务 500+ 用户，多期课程 NPS 稳定在 70%-86%。" },
        { label: "高客单用户转化支持：", detail: "参与高客单产品（单客价 1w+）转化路径设计，通过用户筛选与需求判断，在 2 个月内完成 8 位高潜用户转化。" },
        { label: "个人 IP 与私域信任建设：", detail: "搭建朋友圈内容输出机制与运营 SOP，通过持续内容表达提升用户信任度，私域沟通中用户主动互动率提升约 50%。" },
        { label: "AI 提效与自动化工作流建设：", detail: "设计多类 AI 智能体（内容、项目管理、职业规划等），并结合飞书多维表搭建自动化流程，实现任务提醒、信息整合与数据分析自动化，显著减少重复沟通成本。" },
        { label: "朋友圈内容统筹与增长管理：", detail: "负责朋友圈内容矩阵与排期管理，通过数据分析优化内容策略，将朋友圈从单一宣发渠道升级为可复盘的增长渠道。" }
      ],
      achievements: [
        "入职半年获年度优秀员工奖",
        "连续两季度绩效获得最高评级 S/A。",
        "转岗 1 年后完成职级晋升 P5"
      ]
    },
    {
      period: "2023.7 — 2024.7",
      company: "生财有术",
      role: "品牌设计师",
      summary: "负责知识付费相关视觉设计，包括课程海报、直播视觉、线下大会物料等，支持内容传播与品牌活动。",
      duties: [],
      achievements: []
    },
    {
      period: "2022 — 2023",
      company: "西子电商 / 中电金信",
      role: "平面设计师",
      summary: "从事电商与品牌视觉设计工作，参与电商包装设计与互联网企业外包设计项目，负责品牌海报、活动视觉及相关设计产出。",
      duties: [],
      achievements: []
    }
  ],
  projects: [
    { 
      id: "p1", 
      title: "用户分层与续费增长策略项目", 
      result: "常态续费率提升至 40%", 
      tags: ["用户增长"], 
      cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", 
      externalLink: "https://my.feishu.cn/wiki/CTZXwupu6iuJ9Dkwl8pcS57en5d?from=from_copylink"
    },
    { 
      id: "p2", 
      title: "统筹双11续费增长专项项目", 
      result: "总体目标完成度 89%，往期用户续费完成度超过 110%", 
      tags: ["活动运营"], 
      cover: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800", 
      externalLink: "https://my.feishu.cn/wiki/SO4qwSnHfiAoSmkGMlscaqeCnUg?from=from_parent_docx"
    },
    { 
      id: "p3", 
      title: "轻量化课程产品 0-1 策划与交付", 
      result: "服务用户 500+，NPS 好评 70%", 
      tags: ["课程运营"], 
      cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", 
      externalLink: "https://my.feishu.cn/wiki/NFHKwEvjki8WJNkczOgczYKEnhe?from=from_copylink"
    }
  ],
  aiLab: {
    stats: [
      { label: "累计AI沟通次数", value: "3000", suffix: "+" },
      { label: "AI工具测试", value: "50", suffix: "+" },
      { label: "AI项目实践", value: "6", suffix: "+" },
      { label: "AI运营提效场景", value: "3", suffix: "+" }
    ],
    skills: [
      { title: "AI智能体设计", desc: "AI自定义智能体，赋能内容创作与运营决策", icon: <Cpu size={28} /> },
      { title: "AI工作流", desc: "搭建 AI + 多维表自动化运营流程，运用到各项业务内", icon: <Workflow size={28} /> },
      { title: "AI内容生成", desc: "赋能文章、封面与脚本等内容生产", icon: <Palette size={28} /> },
      { title: "AI协作编程", desc: "使用 AI 快速搭建简单工具与页面，助力提效工具落地", icon: <Terminal size={28} /> }
    ],
    cases: [
      { 
        id: "a1", 
        title: "自定义 AI 智能体赋能项目", 
        desc: "根据不同业务场景设计 AI 智能体工具，提升内容与运营效率。", 
        cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
        externalLink: "https://my.feishu.cn/wiki/S2rbwTouwiwga2kIlxrcTkTHnZd?from=from_copylink"
      },
      { 
        id: "a2", 
        title: "AI 自动化运营工作流", 
        desc: "结合飞书多维表与 AI 字段，实现任务流转与数据处理自动化。", 
        cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
        externalLink: "https://my.feishu.cn/wiki/DCbmwZT22itjKLkAubzckNlynFd?from=from_copylink"
      }
    ]
  },
  contents: [
    { 
      id: "c1", 
      title: "人生只要主动，都是轻松的", 
      type: "思考", 
      desc: "生活的答案，就藏在我们主动去爱的每个片段里", 
      cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=400", 
      externalLink: "https://mp.weixin.qq.com/s/H5uL-zj8UhZ2uLnrigULGg"
    },
    { 
      id: "c2", 
      title: "挑战给100位圈友做副业指导", 
      type: "实践", 
      desc: "学习商业认知赋能工作给用户做咨询", 
      cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=400", 
      externalLink: "https://mp.weixin.qq.com/s/11btvhNO9qWIpSClpUq4uQ"
    },
    { 
      id: "c3", 
      title: "普通人也能玩转AI智能体（简单且实用版）", 
      type: "实践", 
      desc: "不懂技术也能搭建自己的AI搭子，别再单打独斗，让AI成为你的第二大脑和内容外援", 
      cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=400", 
      externalLink: "https://mp.weixin.qq.com/s/SWdkQCXM1-lSGJcZ70yKLQ"
    },
    { 
      id: "c4", 
      title: "职场路越走越宽：新人成长的四个关键能力", 
      type: "复盘", 
      desc: "那些在职场敢说话、不设限的人，后面都怎么样了", 
      cover: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=400", 
      externalLink: "https://mp.weixin.qq.com/s/QMcbevOU0CXoX7DEKdbmmg"
    }
  ],
  skillsList: [
    { name: "用户增长", desc: "从用户分层与转化路径设计入手，搭建可持续增长与复盘的用户续费模型", score: 85, icon: Users },
    { name: "内容运营", desc: "围绕用户需求设计内容结构，搭建公众号与私域内容体系，提升用户参与度", score: 90, icon: PenTool },
    { name: "课程运营", desc: "设计课程策划到交付优化持续提升学习体验", score: 75, icon: MessageCircle },
    { name: "AI应用", desc: "搭建AI运营工作流、智能体赋能各项工作", score: 95, icon: Zap },
    { name: "设计审美", desc: "通过设计审美优化内容表达与信息呈现", score: 80, icon: Palette }
  ]
};

// --- 导航配置 (已去掉关于) ---
const menuItems = [
  { label: '能力', id: '能力' }, 
  { label: '经历', id: '经历' }, 
  { label: '项目', id: '项目' }, 
  { label: 'AI实验室', id: 'AI实验室' }, 
  { label: '分享', id: '分享' }, 
  { label: '联系', id: '联系' },
];

// --- 3. 功能组件定义 ---

const CustomGlobalCSS = () => (
  <style>{`
    ::-webkit-scrollbar { width: 3px; height: 3px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { 
      background: rgba(65, 137, 176, 0.2); 
      border-radius: 10px; 
      transition: background 0.3s;
    }
    ::-webkit-scrollbar-thumb:hover { background: rgba(65, 137, 176, 0.5); }
    .dark ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); }
    
    @media (max-width: 768px) {
      ::-webkit-scrollbar { display: none; width: 0; height: 0; }
      * { scrollbar-width: none; -ms-overflow-style: none; }
    }

    .no-scrollbar::-webkit-scrollbar { display: none; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .theme-transition { transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease; }
  `}</style>
);

const Noise = ({ isDarkMode }) => (
  <svg className={`fixed inset-0 z-[-1] ${isDarkMode ? 'opacity-[0.03]' : 'opacity-[0.05]'} pointer-events-none mix-blend-overlay`}>
    <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

const SectionTitle = ({ title, subtitle, isDarkMode }) => (
  <div className="flex items-center gap-4 mb-12 text-left animate-fade-in font-black">
    <div style={{ backgroundColor: COLORS.accent }} className="w-1.5 h-8 rounded-full" />
    <h2 className={`${TYPO.h2} ${isDarkMode ? 'text-neutral-100' : 'text-neutral-900'} font-black`}>
      {title} <span className="text-neutral-300 dark:text-white/20 ml-3 uppercase text-lg md:text-3xl font-black tracking-widest">{subtitle}</span>
    </h2>
  </div>
);

const CountUp = ({ end, duration = 1500, colorClass = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = progress * end;
      setCount(end % 1 === 0 ? Math.floor(currentValue) : currentValue.toFixed(1));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) { 
        window.requestAnimationFrame(step); 
        observer.disconnect(); 
      } 
    }, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return <span ref={elementRef} className={colorClass}>{count}</span>;
};

const DelicateSkillItem = ({ s, isDarkMode }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) { 
        setTimeout(() => setWidth(s.score), 200); 
        observer.disconnect(); 
      } 
    });
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [s.score]);
  return (
    <div className="flex items-start gap-5 md:gap-8 group active:translate-x-1 transition-transform font-black">
      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
        <s.icon size={26} className="text-[#4189B0]" />
      </div>
      <div className={`flex-grow space-y-2.5 text-left ${isDarkMode ? 'text-neutral-100' : 'text-neutral-900'}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-[14px] md:text-xl font-black">{s.name}</h3>
          <span className={`${GRADIENT_TEXT} font-mono text-[11px] md:text-xs font-black`}>{s.score}%</span>
        </div>
        <p className="text-neutral-400 text-[13px] font-medium line-clamp-1">{s.desc}</p>
        <div ref={barRef} className={`h-[2px] ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-100'} rounded-full overflow-hidden mt-2`}>
          <div style={{ width: `${width}%` }} className={`h-full ${GRADIENT_BG} transition-all duration-1000 ease-out`} />
        </div>
      </div>
    </div>
  );
};

const AnimatedRadarChart = ({ data, isDarkMode }) => {
  const size = 280; const center = size / 2; const radius = size * 0.35; const angleStep = (Math.PI * 2) / 5;
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) { 
        let start = null; 
        const animate = (t) => { 
          if (!start) start = t; 
          const p = Math.min((t - start) / 1200, 1); 
          setProgress(1 - Math.pow(1 - p, 3)); 
          if (p < 1) requestAnimationFrame(animate); 
        }; 
        requestAnimationFrame(animate); 
        observer.disconnect(); 
      } 
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);
  const points = data.map((d, i) => { 
    const angle = angleStep * i - Math.PI / 2; 
    const r = (d.score / 100) * radius * progress; 
    return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle), angle }; 
  });
  return (
    <div ref={containerRef} className="flex justify-center items-center w-full h-full overflow-visible">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {[...Array(5)].map((_, i) => { 
          const r = ((i + 1) / 5) * radius; 
          const grid = [...Array(5)].map((_, j) => { 
            const a = angleStep * j - Math.PI / 2; 
            return `${center + r * Math.cos(a)},${center + r * Math.sin(a)}`; 
          }).join(' '); 
          return <polygon key={i} points={grid} fill="none" stroke={isDarkMode ? "#fff" : "#000"} strokeOpacity={isDarkMode ? "0.1" : "0.05"} strokeWidth="1" />; 
        })}
        <polygon points={points.map(p => `${p.x},${p.y}`).join(' ')} fill="rgba(65, 137, 176, 0.1)" stroke={COLORS.accent} strokeWidth={2} />
        {points.map((p, i) => (
          <g key={i} style={{ opacity: progress > 0.3 ? 1 : 0 }} className="transition-opacity duration-500">
            <circle cx={p.x} cy={p.y} r="3" fill={COLORS.accent} />
            <text x={center + (radius + 25) * Math.cos(p.angle)} y={center + (radius + 25) * Math.sin(p.angle)} textAnchor="middle" className="text-[11px] uppercase tracking-widest font-bold fill-neutral-400">{data[i].name}</text>
          </g>
        ))}
      </svg>
    </div>
  );
};

const CopyableContact = ({ label, value, icon: Icon, isDarkMode }) => {
  const [status, setStatus] = useState('idle');
  const onCopy = () => {
    const el = document.createElement("textarea"); 
    el.value = value; 
    document.body.appendChild(el); 
    el.select(); 
    document.execCommand('copy'); 
    document.body.removeChild(el);
    setStatus('copied'); 
    setTimeout(() => setStatus('idle'), 2000);
  };
  return (
    <div 
      className={`group relative flex items-center gap-4 md:gap-6 p-4 md:p-8 ${THEME.radius} border transition-all duration-500 cursor-pointer active:scale-95 ${isDarkMode ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10 font-black' : 'bg-white border-neutral-100 hover:shadow-2xl hover:shadow-black/5'}`}
      onClick={onCopy}
    >
      <div className={`w-10 h-10 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center rounded-xl md:rounded-2xl transition-all duration-500 ${isDarkMode ? 'bg-white/5 text-[#72B1D3] group-hover:bg-[#72B1D3] group-hover:text-white' : 'bg-neutral-50 text-[#4189B0] group-hover:bg-[#4189B0] group-hover:text-white'}`}>
        <Icon size={20} className="md:w-7 md:h-7" />
      </div>
      <div className="flex flex-col gap-0.5 text-left overflow-hidden">
        <p className={`${TYPO.label} opacity-60 text-[10px] md:text-[13px] font-black`}>{label}</p>
        <p className={`text-sm md:text-2xl font-black tracking-tight truncate ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>{value}</p>
      </div>
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest shadow-xl transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-top-5 ${status === 'copied' ? 'bg-green-500 text-white' : 'bg-black text-white'}`}>
        {status === 'copied' ? '已成功复制' : '点击即可复制'}
        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 -mt-1 ${status === 'copied' ? 'bg-green-500' : 'bg-black'}`}></div>
      </div>
    </div>
  );
};

const QrModal = ({ isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null;
  const [copied, setCopied] = useState(false);
  const copyId = () => { 
    const el = document.createElement("textarea"); 
    el.value = DATA.profile.wechatId; 
    document.body.appendChild(el); 
    el.select(); 
    document.execCommand('copy'); 
    document.body.removeChild(el); 
    setCopied(true); 
    setTimeout(() => setCopied(false), 2000); 
  };
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 text-center theme-transition">
      <div className="absolute inset-0 bg-[#0b0b0b]/80 backdrop-blur-xl transition-opacity" onClick={onClose} />
      <div className={`relative w-full max-sm:mx-4 max-w-sm ${isDarkMode ? 'bg-[#1e1f20] border-white/10 text-white' : 'bg-white border-neutral-100 text-neutral-900'} ${THEME.radius} shadow-2xl p-10 animate-fade-in flex flex-col items-center border font-black`}>
        <button onClick={onClose} className={`absolute top-6 right-6 p-2 ${isDarkMode ? 'bg-white/5 hover:bg-white/10 text-neutral-400' : 'bg-neutral-100 hover:bg-neutral-200'} rounded-full transition-all`}><X size={18} /></button>
        <div className="space-y-1 mb-8 text-center"><h3 className="text-xl font-black">扫码立即对话</h3><p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Connect on WeChat</p></div>
        <div className="w-44 aspect-square bg-white border border-neutral-100 shadow-xl rounded-xl p-4 mb-8 flex items-center justify-center">
          <img src={DATA.profile.wechatQr} alt="QR" className="w-full h-full object-contain" />
        </div>
        <button onClick={copyId} className={`w-full py-4 text-white ${THEME.radius} font-black text-[12px] tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg ${GRADIENT_BG}`}>
          {copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? '复制成功' : '复制微信 ID'}
        </button>
      </div>
    </div>
  );
};

const DetailModal = ({ item, isOpen, onClose, isDarkMode }) => {
  if (!isOpen || !item) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 text-left font-black">
      <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md transition-opacity" onClick={onClose} />
      <div className={`relative w-full sm:max-w-3xl h-[94vh] sm:h-auto sm:max-h-[90vh] ${isDarkMode ? 'bg-[#1e1f20] border-white/10 text-neutral-100 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'bg-white border-neutral-100 text-neutral-900 shadow-2xl'} rounded-t-[1.25rem] sm:${THEME.radius} overflow-hidden flex flex-col animate-fade-in border`}>
        <button onClick={onClose} className={`absolute top-6 right-6 z-[101] p-2.5 ${isDarkMode ? 'bg-neutral-800 text-neutral-400 hover:text-white' : 'bg-neutral-100/50 text-neutral-900 hover:bg-neutral-200'} backdrop-blur-md rounded-full transition-all duration-300`}><X size={20} /></button>
        <div className="overflow-y-auto flex-grow no-scrollbar">
          <div className="px-6 py-10 sm:px-12 sm:py-16 space-y-10">
            <div className="space-y-4 text-center sm:text-left">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black leading-[1.3]`}>{item.title}</h2>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-[13px] font-medium">
                <span className={`${GRADIENT_TEXT} font-black`}>详细资料</span>
                <span className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'} font-bold`}>{item.author || '潇墨'}</span>
                <span className="text-neutral-300 font-bold">2026年</span>
              </div>
            </div>
            <div className="space-y-8">
              {item.details?.map((s, i) => (
                <div key={i}>
                  {s.type === 'h3' && <h3 className={`text-xl md:text-2xl font-black mt-12 mb-4 pb-2 border-b-2 ${isDarkMode ? 'border-white/5 text-white' : 'border-neutral-100 text-neutral-900'}`}>{s.content}</h3>}
                  {s.type === 'h4' && <h4 className={`text-base md:text-lg font-black mt-6 mb-2 flex items-center gap-2 ${isDarkMode ? 'text-[#72B1D3]' : 'text-[#4189B0]'}`}><span className="w-1.5 h-1.5 rounded-full bg-current" /> {s.content}</h4>}
                  {s.type === 'p' && <p className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} text-sm md:text-base leading-[2] whitespace-pre-line`}>{s.content}</p>}
                  {s.type === 'image' && <div className={`${THEME.radius} overflow-hidden shadow-lg border ${isDarkMode ? 'border-white/5' : 'border-neutral-100'} my-6 max-w-2xl mx-auto`}><img src={s.url} className="w-full h-auto object-cover" alt="Detail" /></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 4. 主程序 ---
export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('能力');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) { setScrollProgress((winScroll / height) * 100); }

      const scrollPosition = window.scrollY + 200;
      const sections = menuItems.map(m => document.getElementById(m.id)).filter(Boolean);
      
      let currentSectionId = activeTab;
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          currentSectionId = section.id;
        }
      });
      if (currentSectionId !== activeTab) setActiveTab(currentSectionId);

      const skillsEl = document.getElementById('能力');
      if (skillsEl) {
        setIsSkillsVisible(winScroll >= skillsEl.offsetTop - 100);
      }
      setIsBottom(winScroll >= height - 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  useEffect(() => { 
    document.body.style.overflow = (selectedItem || isQrModalOpen) ? 'hidden' : 'unset'; 
  }, [selectedItem, isQrModalOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) { window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // 通用点击处理逻辑：优先跳转外链
  const handleItemClick = (item) => {
    if (item.externalLink) {
      window.open(item.externalLink, '_blank');
    } else if (item.details && item.details.length > 0) {
      setSelectedItem(item);
    }
  };

  const renderExpCard = (exp) => (
    <div className={`theme-transition p-8 md:p-12 h-full ${THEME.radius} border transition-all duration-500 font-black ${isDarkMode ? THEME.surfaceDark + ' ' + THEME.borderDark + ' shadow-2xl' : 'bg-neutral-50/50 border-neutral-100 shadow-sm'}`}>
      <div className="flex flex-col gap-4 mb-8 border-b border-neutral-100 dark:border-white/5 pb-8">
        <span className={`${TYPO.label} text-[#4189B0] dark:text-[#72B1D3]`}>{exp.period}</span>
        <div className="flex flex-col gap-3">
          <h3 className={`text-2xl sm:text-4xl font-black leading-snug ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>{exp.role}</h3>
          <span className={`text-lg font-bold ${GRADIENT_TEXT}`}>@ {exp.company}</span>
        </div>
      </div>
      <div className="space-y-12">
        {(exp.summary || (exp.duties && exp.duties.length > 0)) && (
          <div>
            <h4 className={`text-[11px] font-black mb-6 uppercase tracking-widest ${isDarkMode ? 'text-white/30' : 'text-neutral-400'}`}>主要工作内容</h4>
            <div className="space-y-10">
              {exp.summary && <div className={`text-sm md:text-base leading-relaxed font-black ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>{exp.summary}</div>}
              {exp.duties && exp.duties.length > 0 && exp.duties.map((duty, idx) => (
                <div key={idx} className="group">
                  <div className={`text-base md:text-xl font-black mb-3 flex items-center gap-3 ${isDarkMode ? 'text-[#72B1D3]' : 'text-[#4189B0]'}`}>
                     <div className="w-1.5 h-1.5 rounded-full bg-current" /> {duty.label}
                  </div>
                  <div className={`text-sm md:text-base pl-4.5 border-l-2 ml-0.5 leading-relaxed font-black ${isDarkMode ? 'text-neutral-400 border-white/5' : 'text-neutral-500 border-neutral-100'}`}>{duty.detail}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {exp.achievements && exp.achievements.length > 0 && (
          <div className={`pt-10 border-t ${isDarkMode ? 'border-white/5' : 'border-neutral-200'}`}>
            <h4 className={`text-[11px] font-black mb-8 uppercase tracking-widest ${isDarkMode ? 'text-white/30' : 'text-neutral-400'}`}>关键成果</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {exp.achievements.map((a, idx) => (
                <div key={idx} className={`p-6 ${THEME.radius} flex items-start gap-4 transition-all hover:translate-y-[-4px] ${isDarkMode ? 'bg-white/5' : 'bg-white shadow-sm border border-neutral-100'}`}>
                  <div className="mt-1 text-[#4189B0] flex-shrink-0"><Check size={18} /></div>
                  <span className={`text-sm md:text-base font-black leading-snug ${isDarkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={`theme-transition min-h-screen ${isDarkMode ? 'dark ' + THEME.bgDark : THEME.bgLight} font-black`}>
      <CustomGlobalCSS />
      <Noise isDarkMode={isDarkMode} />
      
      {/* PC 置顶按钮 */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`hidden lg:flex fixed bottom-10 right-10 z-[150] w-14 h-14 items-center justify-center rounded-full shadow-2xl transition-all duration-500 border backdrop-blur-md ${scrollProgress > 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'} ${isDarkMode ? 'bg-[#1e1f20] border-white/10 text-white' : 'bg-white border-neutral-100 text-neutral-900'}`}
      >
        <ArrowUp size={24} />
      </button>

      {/* 手机端控制台 */}
      <div className="lg:hidden fixed top-6 right-6 z-[160] flex flex-col gap-4 font-black">
        <button onClick={toggleTheme} className={`w-12 h-12 flex items-center justify-center rounded-full shadow-2xl transition-all duration-500 border backdrop-blur-xl ${!isSkillsVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'} ${isDarkMode ? 'bg-neutral-800/80 border-white/10 text-yellow-400' : 'bg-white/80 border-black/5 text-neutral-900'}`}>{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`w-12 h-12 flex items-center justify-center rounded-full shadow-2xl transition-all duration-500 border backdrop-blur-xl ${isBottom ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 -translate-y-10 pointer-events-none'} ${isDarkMode ? 'bg-neutral-800/80 border-white/10 text-white' : 'bg-white/80 border-black/5 text-neutral-900'}`}><ArrowUp size={20} /></button>
      </div>

      <nav className={`hidden lg:flex fixed top-0 w-full z-[100] transition-all duration-500 ${scrollProgress > 2 ? (isDarkMode ? 'bg-[#131314]/85 border-white/5' : 'bg-white/70 border-black/5') + ' py-3 shadow-sm backdrop-blur-md border-b' : 'bg-transparent py-6'}`}>
        <div className={LAYOUT.container + " flex justify-between items-center w-full relative"}>
          <div className="flex-1 flex justify-start items-center">
             <div className="flex items-center gap-1 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className={`font-black text-2xl tracking-tighter uppercase transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                  {DATA.profile.name} <span className="text-neutral-400 dark:text-neutral-600 font-light text-xl ml-1">{DATA.profile.enName}</span>
                </span>
             </div>
          </div>
          <div className="flex items-center gap-12 font-bold">
            {menuItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`text-[14px] hover:text-[#4189B0] transition-all relative font-black ${activeTab === item.id ? (isDarkMode ? 'text-white' : 'text-neutral-900') : 'text-neutral-400'}`}>
                {item.label}
                {activeTab === item.id && <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 ${GRADIENT_BG} rounded-full`} />}
              </button>
            ))}
          </div>
          <div className="flex-1 flex justify-end items-center gap-6">
             <button onClick={toggleTheme} className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${isDarkMode ? 'bg-neutral-800 text-yellow-400 border-white/10' : 'bg-neutral-100 text-neutral-900 border-black/10'} border shadow-sm`}><Sun size={18} className={isDarkMode ? 'block' : 'hidden'} /><Moon size={18} className={isDarkMode ? 'hidden' : 'block'} /></button>
             <button onClick={() => setIsQrModalOpen(true)} className={`text-white px-8 py-2.5 ${THEME.radius} shadow-lg active:shadow-inner text-[13px] font-black hover:scale-105 transition-all ${GRADIENT_BG}`}>联系我</button>
          </div>
        </div>
        <div className={`absolute bottom-0 left-0 h-[1.5px] ${GRADIENT_BG} transition-all duration-150 ease-out origin-left shadow-[0_0_8px_rgba(65,137,176,0.4)]`} style={{ width: `${scrollProgress}%` }} />
      </nav>

      {/* 手机导航栏 */}
      <nav className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] w-[90%] max-w-sm">
        <div className={`backdrop-blur-2xl border px-4 h-16 rounded-[2rem] shadow-2xl flex justify-between items-center relative overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-black/40 border-white/10 ring-1 ring-white/5' : 'bg-white/70 border-black/5 ring-1 ring-black/5'}`}>
          <div className={`absolute top-0 left-0 h-[2px] ${GRADIENT_BG} transition-all duration-100 ease-out origin-left`} style={{ width: `${scrollProgress}%` }} />
          {menuItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className={`text-[10px] transition-all duration-300 py-2.5 px-3 rounded-full font-bold ${activeTab === item.id ? `text-white scale-110 shadow-lg ${GRADIENT_BG}` : 'text-neutral-400 font-black'}`}>{item.label}</button>
          ))}
        </div>
      </nav>

      <main className="relative">
        {/* Hero */}
        <section id="首页" className="min-h-[85vh] md:min-h-screen flex items-center justify-center pt-12 pb-10 md:pt-40 md:pb-40 text-center lg:text-left overflow-hidden relative">
          <div className={LAYOUT.container + " w-full"}>
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center lg:items-center">
              <div className="lg:col-span-5 flex justify-center lg:justify-start order-1 w-full">
                <div className={`w-[70%] sm:w-full max-w-[260px] md:max-w-none aspect-[3/4] md:aspect-[4/5] ${THEME.radius} border-4 ${isDarkMode ? 'border-white/5 bg-neutral-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'border-white bg-white shadow-2xl'} overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700`}>
                  <img src={DATA.profile.heroImage} alt="Profile" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start animate-fade-in order-2">
                <div className="space-y-6 md:space-y-8">
                  <h1 className={`${TYPO.h1} ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>{DATA.profile.name}</h1>
                  <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-x-2 text-base sm:text-3xl font-black leading-tight ${GRADIENT_TEXT} md:whitespace-nowrap`}>
                    {DATA.profile.titles.map((t, i) => (
                      <React.Fragment key={i}>
                        <span>{t}</span>
                        {i < DATA.profile.titles.length - 1 && (
                          <span className={`mx-1 text-transparent bg-clip-text ${GRADIENT_BG}`}>|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <p className={`max-w-2xl text-[14px] sm:text-base md:text-2xl font-medium leading-[2.2] px-6 lg:px-0 mt-6 md:mt-10 transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {DATA.profile.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6 md:mt-10">
                  {DATA.profile.tags.map(t => <span key={t} className={`px-3 py-1 ${isDarkMode ? 'bg-white/5 border-white/10 text-neutral-400' : 'bg-neutral-100 border-neutral-200 text-neutral-400'} border ${THEME.radius} text-[12px] font-bold uppercase tracking-widest`}>{t}</span>)}
                </div>
              </div>
            </div>
            
            <div className={`flex flex-wrap justify-center md:grid md:grid-cols-5 gap-y-12 gap-x-6 md:gap-10 pt-10 md:pt-32 border-t ${isDarkMode ? 'border-white/5' : 'border-neutral-100'} mt-12 text-center`}>
              {DATA.profile.metrics.map((m, i) => (
                <div key={i} className={`flex flex-col items-center group transition-all ${i < 3 ? 'w-[28%] md:w-auto' : 'w-[40%] md:w-auto'}`}>
                  <div className={`w-11 h-11 md:w-14 md:h-14 flex items-center justify-center ${THEME.radius} border transition-all shadow-sm ${isDarkMode ? 'bg-white/5 border-white/10 text-[#4189B0]' : 'bg-[#F8F8F8] border-neutral-50 text-[#4189B0]'}`}><m.icon size={22} /></div>
                  <div className="mt-1.5 md:mt-6"> 
                    <div className={`text-xl md:text-3xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                      {m.displayValue ? m.displayValue : <CountUp end={parseFloat(m.value)} />}
                      {m.unit && <span className="ml-0.5">{m.unit}</span>}{m.suffix && m.suffix}
                    </div>
                    <div className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.1em] text-neutral-400 opacity-60 text-center w-full mt-1 md:mt-2"> {m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 关于我 板块 (作为页面内容保留，但已从导航栏去掉) */}
        <section id="关于" className={LAYOUT.sectionPadding}>
          <div className={LAYOUT.container}>
            <div className="flex items-center gap-4 mb-12 text-left animate-fade-in font-black">
              <div style={{ backgroundColor: COLORS.accent }} className="w-1.5 h-8 rounded-full" />
              <h2 className={`${TYPO.h2} ${isDarkMode ? 'text-neutral-100' : 'text-neutral-900'} font-black`}>
                关于我 <span className="text-neutral-300 dark:text-white/20 ml-3 uppercase text-lg md:text-3xl font-black tracking-widest">STORY</span>
              </h2>
            </div>
            
            <div className="space-y-10 max-w-5xl font-black">
              <p className={`text-sm sm:text-base md:text-xl leading-[2.2] font-medium ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                3 年设计背景 + 2 年用户运营经验，运营期间长期负责用户续费增长、活动策划、新业务验证与私域运营。
              </p>
              <p className={`text-sm sm:text-base md:text-xl leading-[2.2] font-medium ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                24 年 7 月转岗做用户运营，转岗后半年拿到优秀员工奖，后续拿到 2 次季度奖项，一次S 一次A，转岗 1 年多 P4 成功晋升 P5。专注用户增长运营、内容运营与 AI 应用实践，曾负责过多项 0-1 项目起盘，后续并持续正常运转。擅长通过数据拆解与 AI 工作流，实现内容的高效分发与转化。
              </p>
              <p className={`text-sm sm:text-base md:text-xl leading-[2.2] font-medium ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                擅长从用户行为中判断真实转化意愿，通过用户分层与差异化策略提升续费与转化效率。在增长与活动项目中，能快速验证方案并沉淀可复用流程，稳定放大结果。同时通过工具与 AI 优化重复性工作，把精力集中在关键判断与增长节点上。
              </p>
            </div>
          </div>
        </section>

        {/* 能力板块 */}
        <section id="能力" className={LAYOUT.sectionPadding}>
          <div className={LAYOUT.container}>
            <SectionTitle title="能力" subtitle="Skills" isDarkMode={isDarkMode} />
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-24 items-center font-black">
              <div className="lg:col-span-7 space-y-6 md:space-y-10 w-full text-left">{DATA.skillsList.map((s, i) => (<DelicateSkillItem key={i} s={s} isDarkMode={isDarkMode} />))}</div>
              <div className="lg:col-span-5 w-full flex justify-center"><AnimatedRadarChart data={DATA.skillsList} isDarkMode={isDarkMode} /></div>
            </div>
          </div>
        </section>

        {/* 经历板块 */}
        <section id="经历" className={LAYOUT.sectionPadding}>
          <div className={LAYOUT.container}>
            <SectionTitle title="经历" subtitle="Exp" isDarkMode={isDarkMode} />
            <div className="space-y-12 md:space-y-20">
              <div className="w-full">{renderExpCard(DATA.experience[0])}</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                {DATA.experience.slice(1).map((exp, idx) => (<div key={idx}>{renderExpCard(exp)}</div>))}
              </div>
            </div>
          </div>
        </section>

        {/* 项目板块 */}
        <section id="项目" className={LAYOUT.sectionPadding}>
          <div className={LAYOUT.container}>
            <SectionTitle title="项目" subtitle="Projects" isDarkMode={isDarkMode} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {DATA.projects.map((proj) => (
                <div key={proj.id} onClick={() => handleItemClick(proj)} className="group relative flex flex-col items-start space-y-3 cursor-pointer active:opacity-80 transition-all text-left font-black">
                  <div className={`aspect-[16/9] w-full ${THEME.radius} overflow-hidden relative shadow-lg ${isDarkMode ? 'bg-[#1e1f20]' : 'bg-neutral-100'}`}>
                    <img src={proj.cover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={proj.title} />
                    <div className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg text-neutral-900"><ArrowUpRight size={18} className="text-[#4189B0]" /></div>
                  </div>
                  <div className="space-y-2 px-1 w-full font-black">
                    <span className={`px-2 py-0.5 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-neutral-100 border-neutral-100'} border rounded-md text-[10px] font-bold uppercase tracking-widest ${GRADIENT_TEXT}`}>{proj.tags[0]}</span>
                    <h4 className={`text-base md:text-lg font-black group-hover:text-[#4189B0] transition-colors leading-tight ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>{proj.title}</h4>
                    <div className="relative group/tooltip w-full">
                      <p className="text-neutral-400 text-[13px] md:text-sm leading-relaxed truncate font-medium">{proj.result}</p>
                      <div className={`absolute bottom-full left-0 mb-3 w-max max-w-[280px] p-4 rounded-xl shadow-2xl opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-all duration-300 z-[100] border backdrop-blur-xl ${isDarkMode ? 'bg-neutral-900/95 border-white/10 text-neutral-100' : 'bg-white/95 border-neutral-200 text-neutral-800'}`}>
                        <p className="text-[12px] font-black leading-relaxed font-bold">{proj.result}</p>
                        <div className={`absolute top-full left-4 w-2 h-2 rotate-45 -mt-1 ${isDarkMode ? 'bg-neutral-900' : 'bg-white'} border-r border-b ${isDarkMode ? 'border-white/10' : 'border-neutral-200'}`}></div>
                      </div>
                    </div>
                    <div className={`pt-2 border-t ${isDarkMode ? 'border-white/5' : 'border-neutral-50'} mt-2`}><span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest group-hover:text-[#4189B0] transition-colors flex items-center gap-2"><Plus size={10} /> 点击查看详情</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI 实验室 */}
        <section id="AI实验室" className="py-14 md:py-32 font-black">
          <div className={LAYOUT.container}>
            <div className={`theme-transition ${isDarkMode ? THEME.surfaceDark + ' ' + THEME.borderDark : 'bg-neutral-50 border-neutral-100/50'} rounded-[2rem] md:rounded-[4rem] border py-16 px-6 md:py-24 md:px-12 lg:px-20 shadow-sm relative overflow-hidden transition-all duration-500 font-black`}>
              <div className="relative z-10 text-center space-y-4 mb-16 animate-fade-in">
                <h2 className={`text-3xl md:text-5xl font-black ${GRADIENT_TEXT}`}>AI 实验室</h2>
                <div className={`inline-block px-4 py-1.5 ${isDarkMode ? 'bg-white/5 border-white/10 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-400'} border rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm`}>LAB PROJECTS</div>
                <p className={`text-[13px] sm:text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed mt-6 transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-400'}`}>我不仅是将 AI 作为工具，更将其视为业务逻辑的基座。展示我通过提示词工程与自动化流提升效率的实践。</p>
              </div>
              <div className={`relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full py-12 border-y ${isDarkMode ? 'border-white/5' : 'border-neutral-200/50'} text-center mb-24`}>
                {DATA.aiLab.stats.map((s, i) => (
                  <div key={i} className="flex flex-col items-center group transition-transform">
                    <div className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter flex items-baseline ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>
                      <CountUp end={parseFloat(s.value)} />
                      <span className="text-neutral-400 text-[12px] sm:text-sm font-bold uppercase ml-1.5 tracking-widest">{s.suffix}</span>
                    </div>
                    <div className="text-[11px] md:text-[14px] font-bold text-neutral-400 uppercase tracking-widest mt-3"> {s.label}</div>
                  </div>
                ))}
              </div>
              <div className="relative z-10 w-full space-y-12 mb-24">
                <div className="text-center font-bold text-neutral-300 dark:text-neutral-600 uppercase tracking-[0.2em] text-[11px] md:text-[13px]">核心 AI 技能 / AI Core Skills</div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {DATA.aiLab.skills.map((skill, i) => (
                    <div key={i} className={`${isDarkMode ? 'bg-[#131314] border-white/5 shadow-2xl' : 'bg-white border-neutral-100 shadow-sm'} p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 group`}>
                      <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center text-[#4189B0] mb-4 md:mb-6">{skill.icon}</div>
                      <h4 className={`text-[13px] md:text-xl font-black mb-2 ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>{skill.title}</h4>
                      <p className="text-[10px] md:text-[13px] text-neutral-400 leading-relaxed font-medium">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 w-full space-y-12">
                <div className="text-center font-bold text-neutral-300 dark:text-neutral-600 uppercase tracking-[0.2em] text-[11px] md:text-[13px]">案例研究 / Case Studies</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                  {DATA.aiLab.cases.map((c, i) => (
                    <div key={i} onClick={() => handleItemClick(c)} className="group flex flex-col items-start space-y-4 text-left cursor-pointer active:opacity-80 transition-all font-black">
                      <div className={`aspect-[16/9] w-full ${THEME.radius} overflow-hidden relative shadow-md ${isDarkMode ? 'bg-[#131314]' : 'bg-neutral-100'}`}>
                        <img src={c.cover} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt={c.title} />
                        <div className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg text-neutral-900"><ArrowUpRight size={18} className="text-[#4189B0]" /></div>
                      </div>
                      <div className="space-y-2 px-1 w-full">
                        <h4 className={`text-lg md:text-2xl font-black ${isDarkMode ? 'text-white' : 'text-neutral-800'}`}>{c.title}</h4>
                        <p className="text-neutral-400 text-[13px] md:text-base leading-relaxed line-clamp-2 font-medium">{c.desc}</p>
                        <div className={`pt-2 border-t ${isDarkMode ? 'border-white/5' : 'border-neutral-50'} mt-2`}><span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest group-hover:text-[#4189B0] transition-colors flex items-center gap-2"><Plus size={10} /> 点击查看详情</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 分享板块 */}
        <section id="分享" className={`${LAYOUT.sectionPadding} font-black`}>
          <div className={LAYOUT.container}>
            <SectionTitle title="分享" subtitle="Content" isDarkMode={isDarkMode} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              {DATA.contents.map((post, idx) => (
                <div key={idx} onClick={() => handleItemClick(post)} className="group relative flex flex-col items-start space-y-3 cursor-pointer active:opacity-80 transition-all text-left font-black">
                  <div className={`aspect-[16/9] w-full ${THEME.radius} overflow-hidden relative shadow-lg ${isDarkMode ? 'bg-[#1e1f20]' : 'bg-neutral-100'}`}>
                    <img src={post.cover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={post.title} />
                    <div className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg text-neutral-900"><ArrowUpRight size={18} className="text-[#4189B0]" /></div>
                  </div>
                  <div className="space-y-2 px-1 w-full font-black">
                    <span className={`px-2 py-0.5 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-neutral-100 border-neutral-100'} border rounded-md text-[10px] font-bold uppercase tracking-widest ${GRADIENT_TEXT}`}>{post.type}</span>
                    <h4 className={`text-base md:text-lg font-black group-hover:text-[#4189B0] transition-colors leading-tight ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>{post.title}</h4>
                    <div className="relative group/tooltip w-full">
                      <p className="text-neutral-400 text-[13px] md:text-sm leading-relaxed truncate font-medium">{post.desc}</p>
                      <div className={`absolute bottom-full left-0 mb-3 w-max max-w-[280px] p-4 rounded-xl shadow-2xl opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-all duration-300 z-[100] border backdrop-blur-xl ${isDarkMode ? 'bg-neutral-900/95 border-white/10 text-neutral-100' : 'bg-white/95 border-neutral-200 text-neutral-800'}`}>
                        <p className="text-[12px] font-black leading-relaxed font-bold">{post.desc}</p>
                        <div className={`absolute top-full left-4 w-2 h-2 rotate-45 -mt-1 ${isDarkMode ? 'bg-neutral-900' : 'bg-white'} border-r border-b ${isDarkMode ? 'border-white/10' : 'border-neutral-200'}`}></div>
                      </div>
                    </div>
                    <div className={`pt-2 border-t ${isDarkMode ? 'border-white/5' : 'border-neutral-50'} mt-2`}><span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest group-hover:text-[#4189B0] transition-colors flex items-center gap-2"><Plus size={10} /> 点击阅读原文</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系板块 */}
        <section id="联系" className={`py-20 md:py-40 border-t ${isDarkMode ? 'border-white/5' : 'border-neutral-100'} font-black`}>
          <div className={LAYOUT.container}>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
              <div className="space-y-12 animate-fade-in text-center lg:text-left">
                <h2 className={`text-4xl sm:text-7xl md:text-8xl font-black tracking-widest leading-[1.2] uppercase ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>期待与你<br/>沟通对话</h2>
                <div className="mt-16 md:mt-40">
                  <p className={`text-base md:text-xl font-medium leading-loose tracking-wide max-w-lg mx-auto lg:mx-0 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>如果你对探索 AI、用户增长和运营、内容创作感兴趣，或者有其他想法，欢迎联系我</p>
                </div>
              </div>
              
              <div className="w-full space-y-6">
                <CopyableContact label="微信 WeChat" value={DATA.profile.wechatId} icon={MessageCircle} isDarkMode={isDarkMode} />
                <CopyableContact label="邮箱 Email" value={DATA.profile.email} icon={Mail} isDarkMode={isDarkMode} />
                <div className={`group relative flex items-center gap-4 md:gap-6 p-4 md:p-8 ${THEME.radius} border transition-all duration-500 ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-white border-neutral-100'}`}>
                  <div className={`w-10 h-10 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center rounded-xl md:rounded-2xl transition-all duration-500 ${isDarkMode ? 'bg-white/5 text-[#72B1D3]' : 'bg-neutral-50 text-[#4189B0]'}`}>
                    <Share2 size={20} className="md:w-7 md:h-7" />
                  </div>
                  <div className="flex flex-col gap-0.5 text-left">
                    <p className={`${TYPO.label} opacity-60 text-[10px] md:text-[13px] font-black`}>公众号</p>
                    <p className={`text-sm md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>{DATA.profile.publicAccount}</p>
                  </div>
                </div>
                <button onClick={() => setIsQrModalOpen(true)} className={`w-full flex items-center justify-between p-5 md:p-8 ${THEME.radius} text-white font-black text-xs md:text-sm tracking-[0.2em] shadow-2xl transition-all hover:scale-[1.02] active:scale-95 ${GRADIENT_BG}`}>
                  <span className="flex items-center gap-4"><QrCode size={20} className="md:w-6 md:h-6" /> 即刻扫码添加</span>
                  <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`border-t transition-colors ${isDarkMode ? 'bg-[#131314] border-white/5' : 'bg-white border-neutral-50'} py-12 md:py-20 text-neutral-400`}>
        <div className={LAYOUT.container + " flex flex-col md:flex-row justify-between items-center md:items-center gap-8"}>
          <div className={`text-[10px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-center md:text-left ${isDarkMode ? 'text-neutral-600' : 'text-neutral-500'}`}>© 2024 XIAO MO / 潇墨 | <span className={`${GRADIENT_TEXT} font-black`}>Precision Refined</span> Edition</div>
          <div className="flex gap-6 text-neutral-400">
            <Twitter size={16} className="hover:text-[#4189B0] transition-colors cursor-pointer" />
            <Globe size={16} className="hover:text-[#4189B0] transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>

      <DetailModal item={selectedItem} isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} isDarkMode={isDarkMode} />
      <QrModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} isDarkMode={isDarkMode} />
    </div>
  );
}