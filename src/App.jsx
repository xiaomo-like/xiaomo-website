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
  ArrowUp
} from 'lucide-react';

// --- 1. 核心常量与主题配置 ---
const COLORS = {
  accent: "#4189B0",
  lightAccent: "#72B1D3",
};

const GRADIENT_TEXT = "bg-gradient-to-r from-[#4189B0] to-[#72B1D3] bg-clip-text text-transparent";
const GRADIENT_BG = "bg-gradient-to-r from-[#4189B0] to-[#72B1D3]";

const THEME = {
  radius: "rounded-[1.25rem]",
  bgPC: "bg-gradient-to-tr from-[#F2F2F2] via-white to-white",
  bgMobile: "bg-gradient-to-b from-[#F2F2F2] via-white to-white",
  noiseOverlay: "fixed inset-0 z-[-1] opacity-[0.05] md:opacity-[0.08] pointer-events-none mix-blend-multiply",
  lightGlass: "bg-white/70 backdrop-blur-md border border-white/40 shadow-xl",
  achievementBlock: "bg-white border border-neutral-100 shadow-lg p-6 md:p-10 transition-all hover:shadow-2xl",
};

const LAYOUT = {
  container: "max-w-7xl mx-auto px-6 sm:px-12 lg:px-16",
  sectionPadding: "py-14 md:py-32 border-t border-neutral-100"
};

const TYPO = {
  h1: "text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.2em] leading-[1.1] text-neutral-900",
  h2: "text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900",
  h3: "text-lg md:text-2xl font-bold tracking-tight text-neutral-800",
  body: "text-neutral-700 text-[13px] sm:text-base font-medium leading-relaxed",
  label: "text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] text-neutral-400",
};

// --- 2. 数据中心 ---
const DATA = {
  profile: {
    name: "潇墨",
    enName: "XIAOMO",
    titles: ["用户增长运营", "AI 内容实践者", "前 Brand 设计师"],
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    description: "从品牌设计转型用户运营，专注内容增长、社群运营与 AI 应用实践。擅长通过数据拆解与 AI 工作流，实现内容的高效分发与转化。",
    tags: ["用户增长", "内容运营", "AI工作流", "视觉设计"],
    metrics: [
      { label: "品牌设计经验", value: 3, unit: "年", icon: Award },
      { label: "用户运营深耕", value: 1.5, unit: "年", icon: TrendingUp },
      { label: "年度优秀员工", value: 1, unit: "次", icon: Target },
      { label: "绩效评级记录", value: 2, displayValue: "S/A级", icon: Sparkles },
      { label: "职级晋升记录", value: 1, displayValue: "年度", icon: Cpu },
    ],
    wechatQr: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=xiaomo_work"
  },
  skills: [
    { name: "用户增长", desc: "基于 AARRR 模型的全链路转化优化与漏斗拆解。", score: 85, icon: Users },
    { name: "内容运营", desc: "爆款笔记拆解、SOP 标准化作业，AI 提效 5 倍。", score: 90, icon: PenTool },
    { name: "社群运营", desc: "高活跃私域体系搭建、分层管理与路径设计。", score: 75, icon: MessageCircle },
    { name: "AI 应用", desc: "Prompt Engineering 与多场景自动化业务流搭建。", score: 95, icon: Zap },
    { name: "视觉设计", desc: "品牌视觉体系构建、高转化营销素材设计。", score: 80, icon: Palette }
  ],
  experience: [
    {
      period: "2024.07 - 至今",
      company: "生财有术",
      role: "用户运营",
      duties: ["负责社群拉新与促活，优化引导流程。", "主导 AI 内容专题，通过工作流产出素材。", "建立反馈闭环，协助产品迭代优化。"],
      achievements: ["入职半年获年度优秀员工奖。", "连续两季度绩效获得最高评级 S/A。", "2025 年初完成职级晋升。"]
    },
    {
      period: "2022 - 2024",
      company: "自由职业 / 工作室", 
      role: "品牌设计师",
      duties: ["为 20+ 初创品牌提供视觉识别系统 (VI) 设计。", "负责大型活动物料及营销页面视觉。"],
      achievements: ["项目交付率 100%，协助融资品牌圆满亮相。"]
    }
  ],
  projects: [
    { 
      id: "p1", 
      title: "小红书内容增长项目：AI规模化实践", 
      author: "潇墨墨墨mo",
      date: "2026年2月24日",
      tags: ["内容", "AI"], 
      cover: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800", 
      result: "单月涨粉 5000+", 
      details: [
        { type: 'text', content: '最近发现日常工作中能碰到很多有通用卡点的圈友。既然他们都能遇到，说明大部分人也能遇到。' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800' },
        { type: 'text', content: '结合 AI 工作流快速生成高质量文案与配图，账号从 0 启动。' }
      ] 
    },
    { id: "p2", title: "私域社群课程转化率倍增计划", author: "潇墨墨墨mo", date: "2026年1月15日", tags: ["转化", "私域"], cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", result: "转化率提升 130%", details: [{ type: 'text', content: '重构社群转化漏斗，将标准化 SOP 引入运营环节。' }] },
    { id: "p3", title: "AI 内容分发自动化工作流", author: "潇墨墨墨mo", date: "2025年12月10日", tags: ["AI", "效率"], cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", result: "人效提升 400%", details: [{ type: 'text', content: '基于 Coze 搭建多代理系统实现素材全自动化。' }] }
  ],
  aiLab: {
    stats: [
      { label: "累计 AI 沟通", value: 12400, suffix: "+次" },
      { label: "AI 落地项目", value: 12, suffix: "个" },
      { label: "节省人力成本", value: 650, suffix: "h/月" },
      { label: "Prompt 集成", value: 150, suffix: "+条" }
    ],
    skills: [
      { title: "提示词", icon: <MessageCircle />, items: ["框架设计", "思维链优化"] },
      { title: "工作流", icon: <Workflow />, items: ["Coze编排", "API自动化"] },
      { title: "AI生图", icon: <Palette />, items: ["MJ控制", "SD重绘"] },
      { title: "协作编程", icon: <Terminal />, items: ["Cursor工具", "脚本落地"] }
    ],
    cases: [
      { id: "a1", title: "自动化日报生成器", desc: "自动抓取业务数据，生成深度日报摘要。", cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", details: [{ type: 'text', content: '自动化详情内容。' }] },
      { id: "a2", title: "AI 行业研究员", desc: "自动资讯生成深度调研报告系统。", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", details: [{ type: 'text', content: '研报自动化详情内容。' }] }
    ]
  },
  contents: [
    { title: "用 AI 构建你的第二大脑", type: "方法论", desc: "关于知识管理与 AI 助手的深度思考。", cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=400", link: "#" },
    { title: "用户增长的底层逻辑拆解", type: "深度", desc: "跳出工具看增长，寻找业务破局点。", cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=400", link: "#" },
    { title: "跨界思维下的运营实践", type: "分享", desc: "从设计师到运营职场转型的核心秘诀。", cover: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=400", link: "#" }
  ]
};

const menuItems = [
  { label: '能力', id: '能力' },
  { label: '经历', id: '经历' },
  { label: '项目', id: '项目' },
  { label: 'AI实验室', id: 'AI实验室' },
  { label: '分享', id: '分享' },
  { label: '联系', id: '联系' },
];

// --- 3. 功能组件 ---

const CustomGlobalCSS = () => (
  <style>{`
    ::-webkit-scrollbar { width: 5px; height: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.1); border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.2); }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    
    /* 优化 AI 实验室图标尺寸：手机端更小，PC端保持原样 */
    .lab-icon-style {
      width: 28px !important;
      height: 28px !important;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @media (min-width: 768px) {
      .lab-icon-style {
        width: 38px !important;
        height: 38px !important;
      }
    }

    .group:hover .lab-icon-style {
      transform: scale(1.1) translateY(-3px);
      filter: drop-shadow(0 6px 12px rgba(65, 137, 176, 0.15));
    }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in { animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  `}</style>
);

const Noise = () => (
  <svg className="fixed inset-0 z-[-1] opacity-[0.05] md:opacity-[0.08] pointer-events-none mix-blend-multiply">
    <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

const CountUp = ({ end, duration = 1500, colorClass = "text-neutral-900" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { window.requestAnimationFrame(step); observer.disconnect(); } }, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return <span ref={elementRef} className={colorClass}>{count.toLocaleString()}</span>;
};

const DelicateSkillItem = ({ s }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setTimeout(() => setWidth(s.score), 200); observer.disconnect(); } });
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [s.score]);

  return (
    <div className="flex items-start gap-5 md:gap-8 group active:translate-x-1 transition-transform">
      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
         <s.icon size={26} className="text-[#4189B0]" />
      </div>
      <div className="flex-grow space-y-2.5 text-left text-neutral-900 font-bold">
        <div className="flex items-center justify-between">
          <h3 className="text-[14px] md:text-xl font-black">{s.name}</h3>
          <span className={`${GRADIENT_TEXT} font-mono text-[11px] md:text-xs font-black`}>{s.score}%</span>
        </div>
        <p className="text-neutral-400 text-[13px] leading-tight font-medium line-clamp-1">{s.desc}</p>
        <div ref={barRef} className="h-[2px] bg-neutral-100 rounded-full overflow-hidden mt-2">
          <div style={{ width: `${width}%` }} className={`h-full ${GRADIENT_BG} transition-all duration-1000 ease-out`} />
        </div>
      </div>
    </div>
  );
};

const AnimatedRadarChart = ({ data }) => {
  const size = 280; const center = size / 2; const radius = size * 0.35; const angleStep = (Math.PI * 2) / 5;
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { let start = null; const animate = (t) => { if (!start) start = t; const p = Math.min((t - start) / 1200, 1); setProgress(1 - Math.pow(1 - p, 3)); if (p < 1) requestAnimationFrame(animate); }; requestAnimationFrame(animate); observer.disconnect(); } });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);
  const points = data.map((d, i) => { const angle = angleStep * i - Math.PI / 2; const r = (d.score / 100) * radius * progress; return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle), angle }; });
  return (
    <div ref={containerRef} className="flex justify-center items-center w-full h-full overflow-visible">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible text-neutral-900">
        {[...Array(5)].map((_, i) => { const r = ((i + 1) / 5) * radius; const grid = [...Array(5)].map((_, j) => { const a = angleStep * j - Math.PI / 2; return `${center + r * Math.cos(a)},${center + r * Math.sin(a)}`; }).join(' '); return <polygon key={i} points={grid} fill="none" stroke="#000" strokeOpacity="0.05" strokeWidth="1" />; })}
        <polygon points={points.map(p => `${p.x},${p.y}`).join(' ')} fill="rgba(65, 137, 176, 0.1)" stroke={COLORS.accent} strokeWidth={2} />
        {points.map((p, i) => (<g key={i} style={{ opacity: progress > 0.3 ? 1 : 0 }} className="transition-opacity duration-500 font-black"><circle cx={p.x} cy={p.y} r="3" fill={COLORS.accent} /><text x={center + (radius + 25) * Math.cos(p.angle)} y={center + (radius + 25) * Math.sin(p.angle)} textAnchor="middle" className="text-[11px] uppercase tracking-widest font-bold fill-neutral-400">{data[i].name}</text></g>))}
      </svg>
    </div>
  );
};

const CopyableContact = ({ label, value, center = false }) => {
  const [status, setStatus] = useState('idle');
  const onCopy = () => {
    const el = document.createElement("textarea"); el.value = value; document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el);
    setStatus('copied'); setTimeout(() => setStatus('idle'), 2000);
  };
  return (
    <div className={`relative group cursor-pointer flex flex-col ${center ? 'items-center' : 'items-start'}`} onClick={onCopy}>
      <p className={TYPO.label + " mb-1"}>{label}</p>
      <div className="flex items-center gap-2 active:scale-95 transition-transform text-neutral-900 relative">
        <p className={`text-lg md:text-3xl font-black tracking-tight underline decoration-neutral-200 underline-offset-4 ${GRADIENT_TEXT}`}>{value}</p>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none duration-300 transform group-hover:-translate-y-2 whitespace-nowrap z-[10]">
           <div className="bg-neutral-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 ring-1 ring-white/20">
              {status === 'copied' ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
              {status === 'copied' ? '已复制' : '点击复制'}
           </div>
           <div className="w-2 h-2 bg-neutral-800 rotate-45 mx-auto -mt-1 ring-r ring-b ring-white/10" />
        </div>
      </div>
    </div>
  );
};

const DetailModal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 text-left text-neutral-900">
      <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md transition-opacity" onClick={onClose} />
      <div className={`relative w-full sm:max-w-3xl h-[94vh] sm:h-auto sm:max-h-[90vh] bg-white rounded-t-[1.25rem] sm:${THEME.radius} shadow-2xl overflow-hidden flex flex-col animate-fade-in border border-neutral-100`}>
        <button onClick={onClose} className="absolute top-6 right-6 z-[101] p-2.5 bg-neutral-100/50 backdrop-blur-md hover:bg-neutral-200 rounded-full transition-all duration-300 text-neutral-900"><X size={20} /></button>
        <div className="overflow-y-auto flex-grow no-scrollbar bg-[#FFFFFF]">
          <div className="px-6 py-10 sm:px-12 sm:py-16 space-y-10">
            <div className="space-y-4 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 leading-[1.3]">{item.title}</h2>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-[13px] font-medium">
                <span className={`${GRADIENT_TEXT} font-black`}>原创</span>
                <span className="text-neutral-500 font-bold">{item.author || '潇墨墨墨mo'}</span>
                <span className="text-neutral-300 font-bold">{item.date || '2026年3月6日'}</span>
              </div>
            </div>
            <div className="space-y-8 text-neutral-800 text-[15px] sm:text-[17px] leading-[1.9] tracking-wide font-medium">
              {item.details?.map((s, i) => (
                <div key={i}>
                  {s.type === 'text' ? <p>{s.content}</p> : <div className={`${THEME.radius} overflow-hidden shadow-lg border border-neutral-100 my-4`}><img src={s.url} className="w-full h-auto object-cover" alt="Detail" /></div>}
                </div>
              ))}
            </div>
            <div className="pt-20 border-t border-neutral-100 flex flex-col items-center gap-4">
               <div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-200">
                  <img src={DATA.profile.heroImage} className="w-full h-full object-cover" alt="avatar" />
               </div>
               <p className="text-neutral-300 text-[11px] font-bold uppercase tracking-[0.3em]">End of Story</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QrModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [copied, setCopied] = useState(false);
  const copyId = () => { 
    const el = document.createElement("textarea"); 
    el.value = "xiaomo_work"; 
    document.body.appendChild(el); 
    el.select(); 
    document.execCommand('copy'); 
    document.body.removeChild(el); 
    setCopied(true); 
    setTimeout(() => setCopied(false), 2000); 
  };
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 text-center">
      <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-xl" onClick={onClose} />
      <div className={`relative w-full max-sm:mx-4 max-w-sm bg-white ${THEME.radius} shadow-2xl p-10 animate-fade-in flex flex-col items-center border border-neutral-100 text-neutral-900 font-black`}>
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-all hover:rotate-90"><X size={18} /></button>
        <div className="space-y-1 mb-8 text-neutral-900 text-center">
          <h3 className="text-xl font-black">扫码立即对话</h3>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Connect on WeChat</p>
        </div>
        <div className={`w-40 aspect-square bg-neutral-50 ${THEME.radius} p-4 border border-neutral-100 mb-8 shadow-inner`}>
          <img src={DATA.profile.wechatQr} alt="QR" className="w-full h-full object-contain" />
        </div>
        <button onClick={copyId} className={`w-full py-4 text-white ${THEME.radius} font-black text-[12px] tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg ${GRADIENT_BG}`}>
          {copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? '复制成功' : '复制微信 ID'}
        </button>
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

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) { setScrollProgress((winScroll / height) * 100); }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (selectedItem || isQrModalOpen) ? 'hidden' : 'unset';
  }, [selectedItem, isQrModalOpen]);

  const scrollTo = (id, label) => {
    const el = document.getElementById(id);
    if (el) { 
      window.scrollTo({ top: id === '首页' ? 0 : el.offsetTop - 80, behavior: 'smooth' }); 
      setActiveTab(label); 
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#4189B0]/20 selection:text-neutral-900 overflow-x-hidden font-sans text-neutral-900 relative">
      <CustomGlobalCSS />
      <div className={`fixed inset-0 z-[-1] ${THEME.bgPC} md:block hidden`} />
      <div className={`fixed inset-0 z-[-1] ${THEME.bgMobile} md:hidden block`} />
      <Noise />
      
      <DetailModal item={selectedItem} isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} />
      <QrModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />

      {/* 网页端置顶标志 */}
      {scrollProgress > 10 && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`hidden lg:flex fixed bottom-10 right-10 z-[160] w-12 h-12 items-center justify-center bg-white/70 backdrop-blur-md border border-white/50 shadow-2xl ${THEME.radius} text-[#4189B0] hover:scale-110 active:scale-95 transition-all duration-300 group`}
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* 手机端置顶标志 (划到底部右上角出现) */}
      {scrollProgress > 90 && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`lg:hidden fixed top-24 right-6 z-[160] w-10 h-10 flex items-center justify-center bg-white/85 backdrop-blur-md border border-[#4189B0]/20 shadow-2xl rounded-full text-[#4189B0] active:scale-90 transition-all animate-fade-in`}
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* 1. PC 端导航 */}
      <nav className={`hidden lg:flex fixed top-0 w-full z-[100] transition-all duration-500 ${scrollProgress > 2 ? THEME.lightGlass + ' py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className={LAYOUT.container + " flex justify-between items-center w-full relative"}>
          <div className="flex-1 flex justify-start items-center">
             <div className="flex items-center gap-1 group cursor-pointer" onClick={() => scrollTo('首页', '能力')}>
                <span className="font-black text-2xl tracking-tighter text-neutral-900 uppercase">
                  {DATA.profile.name} <span className="text-neutral-400 font-light text-xl ml-1">{DATA.profile.enName}</span>
                </span>
             </div>
          </div>
          <div className="flex items-center gap-12 text-neutral-400 font-bold">
            {menuItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id, item.label)} 
                className={`text-[14px] hover:text-neutral-900 transition-colors relative ${activeTab === item.label ? 'text-neutral-900' : ''}`}
              >
                {item.label}
                {activeTab === item.label && <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 ${GRADIENT_BG} rounded-full`} />}
              </button>
            ))}
          </div>
          <div className="flex-1 flex justify-end">
             <button onClick={() => setIsQrModalOpen(true)} className={`text-white px-8 py-2.5 ${THEME.radius} shadow-lg active:shadow-inner text-[13px] font-black hover:scale-105 transition-all ${GRADIENT_BG}`}>联系我</button>
          </div>
        </div>
        <div className={`absolute bottom-0 left-0 h-[2px] ${GRADIENT_BG} transition-all duration-100 ease-out origin-left`} style={{ width: `${scrollProgress}%` }} />
      </nav>

      {/* 2. 手机端底部 Dock */}
      <nav className="lg:hidden fixed bottom-8 left-6 right-6 z-[150]">
        <div className="bg-white/85 backdrop-blur-md border border-white/50 p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex justify-between items-center ring-1 ring-black/5 px-4 h-14 relative overflow-hidden">
          <div className={`absolute top-0 left-0 h-[2px] ${GRADIENT_BG} transition-all duration-100 ease-out origin-left`} style={{ width: `${scrollProgress}%` }} />
          {menuItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id, item.label)} className={`text-[10px] transition-all duration-300 py-2.5 px-3 rounded-full font-bold ${activeTab === item.label ? `text-white scale-110 shadow-lg ${GRADIENT_BG}` : 'text-neutral-500'}`}>
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="relative">
        {/* 1. 首页 (Hero) */}
        <section id="首页" className="min-h-[85vh] md:min-h-screen flex items-center justify-center pt-12 pb-10 md:pt-40 md:pb-40 text-center lg:text-left overflow-hidden relative">
          <div className={LAYOUT.container + " w-full"}>
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center lg:items-center">
              <div className="lg:col-span-5 flex justify-center lg:justify-start order-1 w-full">
                <div className={`w-[70%] sm:w-full max-w-[260px] md:max-w-none aspect-[3/4] md:aspect-[4/5] ${THEME.radius} border-4 border-white overflow-hidden shadow-2xl bg-white transform rotate-2 hover:rotate-0 transition-all duration-700 active:scale-[0.98]`}>
                  <img src={DATA.profile.heroImage} alt="Profile" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start animate-fade-in order-2 text-neutral-900 font-bold">
                <div className="space-y-6 md:space-y-8">
                  <h1 className={TYPO.h1}>{DATA.profile.name}</h1>
                  <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-x-3 text-base sm:text-3xl font-black leading-[1.8] md:leading-[1.8] ${GRADIENT_TEXT} md:whitespace-nowrap px-6 md:px-0`}>
                    {DATA.profile.titles.map((t, i) => (
                      <React.Fragment key={i}>
                        <span>{t}</span>
                        {i < DATA.profile.titles.length - 1 && <span className="text-neutral-200 font-thin opacity-30 mx-1">|</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <p className="max-w-2xl text-neutral-500 text-[14px] sm:text-base md:text-2xl font-medium leading-[1.8] px-6 lg:px-0 mt-6 md:mt-10">
                  {DATA.profile.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6 md:mt-10">
                  {DATA.profile.tags.map(t => <span key={t} className={`px-3 py-1 bg-neutral-100 border border-neutral-200 ${THEME.radius} text-[12px] font-bold text-neutral-400 uppercase tracking-widest`}>{t}</span>)}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:grid md:grid-cols-5 gap-y-6 gap-x-6 md:gap-10 pt-10 md:pt-32 border-t border-neutral-100 mt-12 text-neutral-900 text-center">
              {DATA.profile.metrics.map((m, i) => (
                <div key={i} className={`flex flex-col items-center space-y-2 active:scale-95 transition-transform ${i < 3 ? 'w-[28%] md:w-auto' : 'w-[40%] md:w-auto'}`}>
                  <div style={{ backgroundColor: "#F8F8F8" }} className={`w-11 h-11 md:w-14 md:h-14 flex items-center justify-center ${THEME.radius} border border-neutral-50 active:bg-[#4189B0] active:text-white transition-all shadow-sm`}>
                    <m.icon size={22} className="text-[#4189B0] group-active:text-white" />
                  </div>
                  <div>
                    <div className="text-[14px] md:text-3xl font-black tracking-tight text-neutral-900">
                      {m.displayValue ? m.displayValue : <><CountUp end={m.value} />{m.unit}</>}
                    </div>
                    <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-neutral-400 opacity-60 text-center w-full">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-transparent">
          <div className={LAYOUT.container}>
            
            {/* 2. 能力 (Skills) */}
            <section id="能力" className={LAYOUT.sectionPadding}>
              <div className="flex items-center gap-4 mb-12 text-left">
                <div style={{ backgroundColor: COLORS.accent }} className="w-1.5 h-8 rounded-full" />
                <h2 className={TYPO.h2}>能力 <span className="text-neutral-200 ml-3 uppercase text-lg md:text-3xl font-black tracking-widest">Skills</span></h2>
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-24 items-center">
                <div className="lg:col-span-7 space-y-6 md:space-y-10 w-full text-left">
                  {DATA.skills.map((s, i) => (<DelicateSkillItem key={i} s={s} />))}
                </div>
                <div className="lg:col-span-5 w-full flex justify-center"><AnimatedRadarChart data={DATA.skills} /></div>
              </div>
            </section>

            {/* 3. 经历 (Experience) */}
            <section id="经历" className={LAYOUT.sectionPadding}>
              <div className="flex items-center gap-4 mb-12 text-left">
                <div style={{ backgroundColor: COLORS.accent }} className="w-1.5 h-8 rounded-full" />
                <h2 className={TYPO.h2}>经历 <span className="text-neutral-200 ml-2 uppercase text-lg md:text-3xl font-black tracking-widest">Exp</span></h2>
              </div>
              <div className="space-y-16 md:space-y-32">
                {DATA.experience.map((exp, i) => (
                  <div key={i} className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
                    <div className="lg:col-span-7 space-y-4 w-full py-2">
                      <div>
                        <span className={TYPO.label}>{exp.period}</span>
                        <h3 className="flex items-center flex-wrap gap-2 md:gap-5 mt-2 text-neutral-900">
                          <span className="text-lg sm:text-3xl md:text-5xl font-black">{exp.role}</span>
                          <span className={`text-sm sm:text-xl md:text-3xl font-bold ${GRADIENT_TEXT}`}>@ {exp.company}</span>
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {exp.duties.map((d, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-neutral-500 text-[13px] sm:text-[14px] md:text-base leading-relaxed">
                            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${GRADIENT_BG}`} />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-5 w-full">
                      <div className={`${THEME.achievementBlock} ${THEME.radius}`}>
                        <h4 className="text-[12px] font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b border-neutral-100 pb-2">成果 / Achievements</h4>
                        <ul className="space-y-4 text-neutral-900">
                          {exp.achievements.map((a, idx) => (
                            <li key={idx} className="flex items-start gap-3 active:translate-x-1 transition-transform">
                              <div style={{ color: COLORS.accent }} className="bg-neutral-50 p-1 rounded-md flex-shrink-0 shadow-sm">
                                <ArrowUpRight size={14} />
                              </div>
                              <span className="text-[13px] sm:text-base md:text-lg leading-tight font-black">{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. 项目 (Projects) */}
            <section id="项目" className={LAYOUT.sectionPadding}>
              <div className="flex items-center gap-4 mb-10 text-left">
                <div style={{ backgroundColor: COLORS.accent }} className="w-1.5 h-8 rounded-full" />
                <h2 className={TYPO.h2}>项目</h2>
                <span className="text-neutral-200 uppercase text-lg md:text-2xl font-black tracking-[0.3em] opacity-40 ml-2">Projects</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 text-left">
                {DATA.projects.map((proj) => (
                  <div key={proj.id} onClick={() => setSelectedItem(proj)} className="group cursor-pointer space-y-4 active:translate-y-[-4px] transition-transform">
                    <div className={`aspect-[16/9] w-full ${THEME.radius} overflow-hidden border border-neutral-100 relative shadow-lg bg-neutral-50`}>
                       <img src={proj.cover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={proj.title} />
                       <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                         <button className={`text-white px-5 py-2 ${THEME.radius} font-black text-[12px] uppercase tracking-widest shadow-2xl ${GRADIENT_BG}`}>View Story</button>
                       </div>
                    </div>
                    <div className="space-y-1.5 px-1">
                      <div className="flex gap-2 text-neutral-400 uppercase text-[12px] font-bold tracking-widest">
                        {proj.tags.map(t => <span key={t} className={GRADIENT_TEXT + " font-black"}>{t}</span>)}
                      </div>
                      <h4 className="text-[15px] md:text-2xl font-black group-hover:text-[#4189B0] transition-colors leading-tight">{proj.title}</h4>
                      <div className={`text-[12px] md:text-[13px] flex items-center gap-2 font-bold ${GRADIENT_TEXT}`}>
                        <TrendingUp size={10} className="text-[#4189B0]" /> <span>{proj.result}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. AI 实验室 (AI Lab) */}
            <section id="AI实验室" className={LAYOUT.sectionPadding}>
              <div className="flex flex-col items-start space-y-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h2 className={`${TYPO.h2} ${GRADIENT_TEXT}`}>AI 实验室</h2>
                    <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200 rounded-md font-bold text-[10px] text-neutral-400 ml-2">Lab</span>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-lg md:text-xl font-medium">不止工具，更是重塑业务流程的效率杠杆。</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 w-full py-8 border-t border-neutral-100 text-center">
                  {DATA.aiLab.stats.map((s, i) => (
                    <div key={i} className="flex flex-col items-center group active:scale-105 transition-transform">
                      <div className="text-lg sm:text-3xl md:text-5xl font-black tracking-tighter text-neutral-900">
                        <CountUp end={s.value} />
                        <span className="text-neutral-900 text-[10px] sm:text-xs font-black uppercase ml-1.5 tracking-widest">{s.suffix}</span>
                      </div>
                      <div className="text-[12px] font-bold text-neutral-400 opacity-60 text-center w-full">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="w-full space-y-6">
                  <h4 className="text-[12px] md:text-lg font-black uppercase tracking-tight text-neutral-300 border-b border-neutral-100 pb-2">掌握技能 / Capabilities</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-neutral-900">
                    {DATA.aiLab.skills.map((skill, i) => (
                      <div key={i} className={`bg-white p-6 md:p-8 ${THEME.radius} border border-neutral-50 space-y-4 flex flex-col items-center text-center shadow-sm backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 group`}>
                        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-[#4189B0]">
                           {React.cloneElement(skill.icon, { className: 'lab-icon-style' })}
                        </div>
                        <div className="space-y-1 md:space-y-4">
                          <h4 className={`text-[12px] md:text-xl font-black leading-tight uppercase tracking-widest ${GRADIENT_TEXT}`}>{skill.title}</h4>
                          <div className="hidden md:block space-y-1 mt-2">
                             {skill.items?.map((it, idx) => (<p key={idx} className="text-[13px] text-neutral-400 font-medium opacity-80">· {it}</p>))}
                          </div>
                          <p className="md:hidden text-[11px] text-neutral-400 font-medium leading-tight line-clamp-2 mt-1 px-0.5">{skill.items?.join('·')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full pt-6">
                  {DATA.aiLab.cases.map((c, i) => (
                    <div key={i} onClick={() => setSelectedItem(c)} className="group cursor-pointer flex flex-col md:flex-row gap-5 items-start active:opacity-80 transition-opacity text-left">
                      <div className={`w-full md:w-48 aspect-[16/9] md:aspect-square ${THEME.radius} overflow-hidden flex-shrink-0 border border-neutral-100 shadow-md bg-neutral-50`}>
                        <img src={c.cover} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt={c.title} />
                      </div>
                      <div className="space-y-2 py-1">
                        <h4 className="text-base md:text-2xl font-black group-hover:text-[#4189B0] transition-colors">{c.title}</h4>
                        <p className="text-neutral-400 text-[13px] md:text-base leading-relaxed line-clamp-2">{c.desc}</p>
                        <div className={`flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest ${GRADIENT_TEXT}`}>
                          Explore <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. 分享 (Content) */}
            <section id="分享" className={LAYOUT.sectionPadding}>
              <div className="flex items-center gap-4 mb-10 text-left">
                <div style={{ backgroundColor: COLORS.accent }} className="w-1.5 h-8 rounded-full" />
                <h2 className={TYPO.h2}>分享</h2>
                <span className="text-neutral-200 uppercase text-lg md:text-2xl font-black tracking-[0.3em] opacity-40 ml-2">Content</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
                {DATA.contents.map((post, i) => (
                  <a key={i} href={post.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-start space-y-3 active:opacity-80 transition-all text-left">
                    <div className={`aspect-[16/9] w-full ${THEME.radius} overflow-hidden relative shadow-lg bg-neutral-50`}>
                      <img src={post.cover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={post.title} />
                      <div className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <ArrowUpRight size={18} className="text-[#4189B0]" />
                      </div>
                    </div>
                    <div className="space-y-2 px-1">
                      <span className={`px-2 py-0.5 bg-neutral-100 border border-neutral-100 rounded-md text-[12px] font-bold uppercase tracking-widest ${GRADIENT_TEXT}`}>{post.type}</span>
                      <h4 className="text-sm md:text-2xl font-black group-hover:text-[#4189B0] transition-colors leading-tight">{post.title}</h4>
                      <p className="text-neutral-400 text-[13px] md:text-base leading-relaxed">{post.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* 7. 联系 */}
            <section id="联系" className="py-12 md:py-32 border-t border-neutral-50 text-center">
              <div className="space-y-6 md:space-y-12 max-w-5xl animate-fade-in mx-auto">
                <div className="space-y-4">
                   <h2 className="text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-tight md:leading-tight uppercase">期待与你<br/>沟通对话</h2>
                   <p className="text-neutral-400 text-xs sm:text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto px-4 mt-20 md:mt-52">如果你对内容增长、AI 自动化工作流感兴趣，欢迎随时建立联系。</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 pt-4 items-center justify-center">
                  <CopyableContact label="Wechat ID" value="xiaomo_work" center={true} />
                  <CopyableContact label="Email Address" value="hi@xiaomo.me" center={true} />
                </div>
                <div className="pt-6">
                  <button onClick={() => setIsQrModalOpen(true)} className={`inline-flex items-center px-10 py-4 text-white ${THEME.radius} font-black active:scale-95 transition-all text-[11px] tracking-widest shadow-xl shadow-blue-500/20 uppercase ${GRADIENT_BG}`}>联系我</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-neutral-50 py-12 md:pb-40 md:pt-20 text-neutral-400">
        <div className={LAYOUT.container + " flex flex-col md:flex-row justify-between items-center md:items-center gap-8"}>
          <div className="text-[10px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-neutral-600 text-center md:text-left">
            © 2024 XIAO MO / 潇墨 | <span className={`${GRADIENT_TEXT} font-black`}>Precision Refined</span> Edition
          </div>
          <div className="flex gap-6 text-neutral-400">
            <Twitter size={16} className="hover:text-neutral-900 transition-colors cursor-pointer" />
            <Globe size={16} className="hover:text-neutral-900 transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}