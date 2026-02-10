import svgPaths from "./imports/svg-kvslezqatk";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import closeIcon from './assets/close-icon.png';
import dailyRewardBg from './assets/daily-reward-bg.png';

// ============== 类型定义 ==============

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  text: string;
}

interface PromotionCard {
  id: string;
  title: string;
  backgroundImage: string;
  overlayImage?: string;
}

// ============== Mock Data ==============

const featuresData: FeatureItem[] = [
  {
    id: 'feature-1',
    icon: <IconAiVideo />,
    text: '输入灵感，智能生视频'
  },
  {
    id: 'feature-2',
    icon: <IconAvatar />,
    text: '无需出镜，数字人视频'
  },
  {
    id: 'feature-3',
    icon: <IconAiDesign />,
    text: 'AI 图片设计'
  },
  {
    id: 'feature-4',
    icon: <IconImageTalk />,
    text: '会说话的照片'
  },
  {
    id: 'feature-5',
    icon: <IocnBackground />,
    text: 'AI 轻松换背景'
  }
];

const promotionData: PromotionCard = {
  id: 'promo-1',
  title: '岭南的荔枝',
  backgroundImage: '40cee8670ce6c6ffc6d2fda288343fc4d4a6f5b8.png',
  overlayImage: '00d5ca9412208a1fe4e5cbc4a82730e023638ee2.png'
};

// ============== Icon Components ==============

function IconAiVideo() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p329af380} fill="#B8ADFF" />
          <path d="M16 12L10 15.5L10 8.5L16 12Z" fill="black" />
          <path d={svgPaths.p188f3700} fill="black" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1045 16.667">
        <g>
          <path d={svgPaths.p3f224a00} fill="#AFA3FF" />
          <path d={svgPaths.p7c798c0} fill="black" />
        </g>
      </svg>
    </div>
  );
}

function IconAiDesign() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p2c438200} fill="#AC9CFC" />
          <path d={svgPaths.p23b32070} fill="black" />
        </g>
      </svg>
    </div>
  );
}

function IconImageTalk() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d={svgPaths.p2236bef0} fill="#B8ADFF" stroke="#B8ADFF" strokeWidth="2" />
          <path d={svgPaths.p784c780} fill="black" />
        </g>
      </svg>
    </div>
  );
}

function IocnBackground() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0002 24">
        <g>
          <path d={svgPaths.p3848e100} fill="#AFA3FF" />
          <path d={svgPaths.p28ae6580} fill="black" />
        </g>
      </svg>
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="h-[30px] relative shrink-0 w-[24px]">
      <div className="absolute left-0 size-[22.815px] top-[4.07px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8148 22.8159">
          <g>
            <path d={svgPaths.p15737800} fill="black" />
            <circle cx="11.736" cy="7.86787" fill="white" r="4.30947" />
            <path d={svgPaths.p174f3d70} fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowUpIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path clipRule="evenodd" d={svgPaths.p2595e200} fill="white" fillOpacity="0.8" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

// ============== Status Bar Components ==============

function StatusBar() {
  return (
    <div className="h-[54px] relative shrink-0 w-full">
      <div className="-translate-y-1/2 absolute h-[54px] left-0 right-[64.25%] top-1/2">
        <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[33.96%_36.71%_25.3%_36.96%] leading-[22px] text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          9:41
        </p>
      </div>
      <div className="-translate-y-1/2 absolute h-[54px] left-[64.25%] right-0 top-1/2">
        <BatteryIndicator />
        <WifiIndicator />
        <CellularIndicator />
      </div>
    </div>
  );
}

function BatteryIndicator() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[33.33%] contents left-[calc(50%+24.41px)] top-[42.59%]">
      <div className="-translate-x-1/2 absolute border border-black border-solid bottom-[33.33%] left-[calc(50%+23.25px)] opacity-35 rounded-[4.3px] top-[42.59%] w-[25px]" />
      <div className="-translate-x-1/2 absolute bottom-[41.01%] left-[calc(50%+37.41px)] top-[51.45%] w-[1.328px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4.07547">
          <path d={svgPaths.p193f1400} fill="black" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-black bottom-[37.04%] left-[calc(50%+23.25px)] rounded-[2.5px] top-[46.3%] w-[21px]" />
    </div>
  );
}

function WifiIndicator() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[33.4%] left-[calc(50%-4.98px)] top-[43.77%] w-[17.142px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
        <path clipRule="evenodd" d={svgPaths.p18b35300} fill="black" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function CellularIndicator() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[33.77%] left-[calc(50%-30.65px)] top-[43.58%] w-[19.2px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
        <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="black" fillRule="evenodd" />
      </svg>
    </div>
  );
}

// ============== Navigation Bar ==============

function GlowingCapsule({ isAnimating, children }: { isAnimating: boolean; children: React.ReactNode }) {
  return (
    <div className="relative inline-flex overflow-visible">
      {children}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="block size-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 110 32">
          <defs>
            <linearGradient id="capsule-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsla(255, 100%, 72.5%, 0.75)" />
              <stop offset="50%" stopColor="hsla(297, 100%, 93.5%, 0.7)" />
              <stop offset="100%" stopColor="hsla(220, 100%, 90%, 1)" />
            </linearGradient>
            <filter id="capsule-inner-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <clipPath id="capsule-clip">
              <rect x="0.5" y="0.5" width="109" height="31" rx="16" ry="16" />
            </clipPath>
          </defs>
          <rect
            x="0.5"
            y="0.5"
            width="109"
            height="31"
            rx="16"
            ry="16"
            fill="none"
            stroke="url(#capsule-gradient)"
            strokeWidth="11"
            strokeLinecap="round"
            pathLength="2"
            strokeDasharray="1 1"
            strokeDashoffset="2.4"
            filter="url(#capsule-inner-glow)"
            clipPath="url(#capsule-clip)"
            className={isAnimating ? "capsule-glow opacity-100 animate-play-smooth" : "capsule-glow opacity-0"}
          />
          <rect
            x="0.5"
            y="0.5"
            width="109"
            height="31"
            rx="16"
            ry="16"
            fill="none"
            stroke="url(#capsule-gradient)"
            strokeWidth="0.5"
            strokeLinecap="round"
            pathLength="2"
            strokeDasharray="1 1"
            strokeDashoffset="2.4"
            opacity="0.8"
            className={isAnimating ? "capsule-glow opacity-100 animate-play-smooth" : "capsule-glow opacity-0"}
          />
        </svg>
      </div>
    </div>
  );
}

function NavigationBar({ onOpenModal, creditCount, isStarRotated, isCapsuleAnimating }: { onOpenModal: () => void; creditCount: number; isStarRotated: boolean; isCapsuleAnimating: boolean }) {
  return (
    <div className="h-[44px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative size-full">
          <div className="content-stretch flex h-[44px] items-center justify-center relative shrink-0">
            <div 
              onClick={onOpenModal}
              className="flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-black whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
            >
              <p className="leading-[1.35]">创作</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <GlowingCapsule isAnimating={isCapsuleAnimating}>
              <motion.div 
                initial={false}
                animate={{
                  width: isStarRotated ? '124px' : '110px'
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 64,
                  mass: 1
                }}
                className="relative flex items-center justify-between h-[32px] pl-[10px] pr-[12px] rounded-[100px] cursor-pointer hover:bg-[#e8e4f9] active:bg-[#ddd8f5] overflow-visible"
              >
                <div className="absolute inset-0 rounded-[100px] bg-[#f1eefc]" />
                <div className="flex items-center gap-[4px] shrink-0">
                  <motion.img
                    src="https://cdn-tos-cn.bytedance.net/obj/ies-semi/images/mlgcmvwc-m387oc4.svg"
                    alt=""
                    animate={{
                      rotate: isStarRotated ? -180 : 0,
                      x: isStarRotated ? -1 : 0
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 64,
                      mass: 1
                    }}
                    className="shrink-0 w-[14px] h-[14px] relative z-10"
                  />
                  <motion.p 
                    key={creditCount}
                    initial={false}
                    animate={{ scale: 1 }}
                    className="font-['PingFang_SC',sans-serif] font-[500] leading-[18px] text-[14px] text-black shrink-0 min-w-[9px] text-right relative z-10"
                  >
                    <AnimatePresence mode='popLayout'>
                      <motion.span
                        key={creditCount}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 64,
                          mass: 1
                        }}
                        className="inline-block"
                      >
                        {creditCount}
                      </motion.span>
                    </AnimatePresence>
                  </motion.p>
                </div>
                <div className="flex items-center shrink-0 w-[1px] h-[1px] pt-[6px] pb-[5px] relative z-10">
                  <div className="bg-[rgba(0,0,0,0.06)] w-[12px] h-[1px] -ml-[6px] rotate-90" />
                </div>
                <p className="font-['PingFang_SC',sans-serif] font-[500] leading-[18px] text-[14px] text-black shrink-0 min-w-[42px] relative z-10">开会员</p>
              </motion.div>
            </GlowingCapsule>
            <div className="relative shrink-0 size-[44px] cursor-pointer hover:opacity-80 transition-opacity">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                <circle cx="22" cy="22" fill="#D9D9D9" r="16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============== Feature Button Component ==============

function FeatureButton({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <button className="bg-[rgba(0,0,0,0.04)] content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[20px] py-[8px] relative rounded-[84px] shrink-0 hover:bg-[rgba(0,0,0,0.08)] active:bg-[rgba(0,0,0,0.12)] transition-colors">
      {icon}
      <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[1.3]">{text}</p>
      </div>
    </button>
  );
}

// ============== Promotion Card Component ==============

function PromotionCard({ data }: { data: PromotionCard }) {
  return (
    <div className="content-stretch flex gap-[20px] h-[128px] items-end overflow-clip px-[20px] py-[12px] relative rounded-[22px] shrink-0 w-[256px] cursor-pointer hover:scale-[1.02] transition-transform">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[22px]">
        <div className="absolute inset-0 overflow-hidden rounded-[22px]">
          <img alt="" className="absolute h-[174.84%] left-0 max-w-none top-[-30.39%] w-full" src={data.backgroundImage} />
        </div>
        {data.overlayImage && (
          <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={data.overlayImage} />
        )}
        <div className="absolute bg-[rgba(255,195,127,0.1)] inset-0 rounded-[22px]" />
      </div>
      <div className="absolute backdrop-blur-[2.5px] bottom-0 h-[128px] left-0 w-[256px]" style={{ backgroundImage: "linear-gradient(184.632deg, rgba(237, 70, 58, 0) 60.593%, rgb(255, 116, 60) 100.14%)" }}>
        <img 
          src="https://images.unsplash.com/photo-1706694939235-08f76217cf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxseWNoZWUlMjBmcnVpdCUyMGNsb3NldXB8ZW58MXx8fHwxNzcwNzEzMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="absolute bottom-0 left-0 w-full h-auto object-cover"
        />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
            <p className="leading-[1.3]">{data.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============== Main Content Section ==============

function MainContent({ onStartTask }: { onStartTask: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start justify-end left-[18px] top-[196px] w-[357px]">
      {/* Header with Logo and Title */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pr-[48px] relative w-full">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-end size-full">
              <div className="content-stretch flex gap-[4px] items-end pl-[2px] relative w-full">
                <LogoIcon />
                <div className="content-stretch flex items-center justify-center pt-[4px] relative shrink-0">
                  <p className="font-['PingFang_SC:Medium',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[19px] text-black">我是小云雀</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pl-[2px] relative w-full">
                <p className="flex-[1_0_0] font-['PingFang_SC:Light',sans-serif] leading-[1.3] min-h-px min-w-px not-italic relative text-[17px] text-[rgba(0,0,0,0.6)] whitespace-pre-wrap">随时为你的创作灵感助力!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotion and Features */}
      <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
        <PromotionCard data={promotionData} />
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
            {featuresData.map((feature) => (
              <FeatureButton key={feature.id} icon={feature.icon} text={feature.text} />
            ))}
          </div>
          <button
            type="button"
            onClick={onStartTask}
            className="bg-black flex items-center justify-center h-[44px] px-[20px] rounded-[84px] text-[15px] text-white font-['PingFang_SC:Medium',sans-serif] leading-[1.3]"
          >
            开始任务
          </button>
        </div>
      </div>
    </div>
  );
}

// ============== Bottom Navigation ==============

function TabIcon({ icon, label, isActive }: { icon: React.ReactNode; label: string; isActive?: boolean }) {
  return (
    <button className="h-[49px] relative rounded-[18px] shrink-0 w-[48px] hover:opacity-80 active:opacity-60 transition-opacity">
      <div className="absolute left-[9.5px] size-[28px] top-[6px]">
        {icon}
      </div>
      <p className="-translate-x-1/2 absolute font-['PingFang_SC:Medium',sans-serif] leading-[1.3] left-[24px] not-italic text-[10px] text-black text-center top-[36px]">{label}</p>
    </button>
  );
}

function BottomTabBar() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[48px] relative w-full">
          <TabIcon 
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                <path d={svgPaths.p363d2b0} fill="black" />
              </svg>
            } 
            label="灵感" 
          />
          <TabIcon 
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                <g>
                  <path d={svgPaths.p960fd80} fill="black" />
                  <path d={svgPaths.p23234200} fill="white" />
                </g>
              </svg>
            } 
            label="创作" 
            isActive 
          />
          <TabIcon 
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                <path d={svgPaths.pf6ef00} fill="black" />
              </svg>
            } 
            label="作品" 
          />
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[34px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[139px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-black h-[5px] rounded-[100px] w-[139px]" />
        </div>
      </div>
    </div>
  );
}

// ============== Floating Input Bar ==============

function FloatingInputBar() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.9)] h-[64px] left-1/2 rounded-[32px] top-[12px] w-[365px]">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
              <IconAiVideo />
              <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.4)] whitespace-nowrap">
                <p className="leading-[1.3]">输入灵感，智能生视频</p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[rgba(0,0,0,0.12)] content-stretch flex items-center p-[10px] relative rounded-[24px] shrink-0 hover:bg-[rgba(0,0,0,0.2)] active:bg-[rgba(0,0,0,0.3)] transition-colors">
          <ArrowUpIcon />
        </button>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

// ============== Bottom Section (with gradient overlay) ==============

function BottomSection() {
  return (
    <div className="absolute bottom-0 h-[171px] left-0 w-[393px]">
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[88px] left-0 to-[65.038%] to-white top-0 w-[393px]" />
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-0 w-[393px]">
        <BottomTabBar />
        <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-full">
          <HomeIndicator />
        </div>
      </div>
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-center justify-end left-0 right-0">
        <HomeIndicator />
      </div>
      <FloatingInputBar />
    </div>
  );
}

// ============== Modal Component ==============

function RewardModal({ isOpen, onClose, onRewardAction }: { isOpen: boolean; onClose: () => void; onRewardAction: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 30,
                mass: 1.1
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[279px] h-[346px] overflow-visible"
            >
              <div className="relative w-full h-full rounded-[24px] overflow-visible">
                <img src={dailyRewardBg} alt="背景" className="absolute inset-0 w-full h-full object-cover rounded-[24px]" />
                <div className="relative z-20 flex justify-end p-[6px]">
                  <button
                    onClick={onClose}
                    className="w-[44px] h-[44px] flex items-center justify-center shrink-0 hover:opacity-80 active:opacity-60 transition-opacity"
                  >
                    <img
                      src={closeIcon}
                      alt="关闭"
                      className="w-full h-full object-contain block"
                    />
                  </button>
                </div>
                
                <button
                  onClick={() => {
                    onRewardAction();
                    onClose();
                  }}
                  className="absolute bg-black rounded-[16px] flex items-center justify-center z-10 hover:opacity-90 active:opacity-80 transition-opacity"
                  style={{
                    width: '231px',
                    height: '52px',
                    top: '236px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: '16px',
                    cornerSmoothing: '100%',
                    WebkitCornerSmoothing: '100%'
                  } as React.CSSProperties}
                  type="button"
                >
                  <span className="text-white text-[14px] font-medium" style={{ fontFamily: "PingFang SC", fontWeight: 500 }}>积分领取中</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ============== Main App Component ==============

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [creditCount, setCreditCount] = useState(0);
  const [isStarRotated, setIsStarRotated] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'done'>('idle');

  const handleRewardAction = () => {
    setCreditCount(100);
    setIsStarRotated(true);
    setStatus('idle');
    requestAnimationFrame(() => setStatus('processing'));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status !== 'processing') {
      return;
    }
    const timer = setTimeout(() => {
      setStatus('done');
    }, 1600);
    return () => clearTimeout(timer);
  }, [status]);

  const handleTaskStart = () => {
    setStatus('idle');
    requestAnimationFrame(() => setStatus('processing'));
  };

  const handleOpenModal = () => {
    setCreditCount(0);
    setIsStarRotated(false);
    setStatus('idle');
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white relative w-[393px] h-[852px] mx-auto overflow-hidden">
      {/* Top Fixed Section */}
      <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-0 w-[393px]">
        <StatusBar />
        <NavigationBar onOpenModal={handleOpenModal} creditCount={creditCount} isStarRotated={isStarRotated} isCapsuleAnimating={status === 'processing'} />
      </div>

      {/* Main Scrollable Content */}
      <MainContent onStartTask={handleTaskStart} />

      {/* Bottom Fixed Section */}
      <BottomSection />

      {/* Modal */}
      <RewardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onRewardAction={handleRewardAction} />
    </div>
  );
}
