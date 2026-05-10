import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, Presentation, File, Cuboid, Mail, Briefcase, 
  GraduationCap, Award, BookOpen, ExternalLink, User, 
  MapPin, Calendar, Languages, MonitorDot, Coffee
} from 'lucide-react';

const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/d/10lrx8OVicC0Jr-lOQd6esyhhwCNHRMOK";

const projects = [
  {
    id: 1,
    title: "清明連假旅行規劃 Word",
    date: "2026/03/09",
    url: "https://drive.google.com/file/d/1fw7qdT-_L0XICJ4XfZJIBkCbmwjwD1-i/view",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: 2,
    title: "清明連假旅行規劃 簡報",
    date: "2026/03/17",
    url: "https://docs.google.com/presentation/d/1ah96SQlHrZtaTVJFVWZmFPAnCZRpnAQKpivA01la6NI/present?slide=id.p1",
    icon: Presentation,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    id: 3,
    title: "Gamma 清明連假 PDF",
    date: "2026/03/23",
    url: "https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/view",
    icon: File,
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    id: 4,
    title: "Manus清明連假 PPT",
    date: "2026/03/23",
    url: "https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/view",
    icon: Presentation,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    id: 5,
    title: "Notebook LM清明連假 PDF",
    date: "2026/03/23",
    url: "https://drive.google.com/file/d/1fr0knU9DIZxv2RhPy2MhnBkXp4e9HOhy/view",
    icon: FileText,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  },
  {
    id: 6,
    title: "清明連假 PPT",
    date: "2026/04/05",
    url: "https://docs.google.com/presentation/d/1iWbri1niIekE2YaWTMw3Mcjfak9uSmPO/edit?slide=id.p3#slide=id.p3",
    icon: Presentation,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    id: 7,
    title: "3D公仔",
    date: "2026/04/13",
    url: "https://studio.tripo3d.ai/3d-model/12705dfd-ecfa-4486-a8fe-9091f9c2e1dd?invite_code=5OKBBA",
    icon: Cuboid,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

const Section = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12 bg-[#111] p-8 rounded-sm shadow-sm border border-white/5"
  >
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
      <div className="p-2 bg-[#BF9B30]/10 text-[#BF9B30] rounded-sm">
        <Icon size={24} />
      </div>
      <h2 className="font-serif text-3xl font-semibold border-l-4 border-[#BF9B30] pl-3 text-white">{title}</h2>
    </div>
    {children}
  </motion.section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-[#BF9B30]/30 selection:text-white">
      {/* Header / Hero */}
      <header className="relative overflow-hidden bg-[#0A0A0A] border-b border-white/10 text-white pb-24 pt-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            {/* Avatar Placeholder */}
            <div className="w-32 h-32 rounded-sm bg-[#111] border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xl relative group">
              {PROFILE_IMAGE_URL ? (
                <img src={PROFILE_IMAGE_URL} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <User size={48} className="text-[#BF9B30]/50" />
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-wide">陳宣諭 <span className="text-[#BF9B30] font-medium ml-2 font-sans text-3xl md:text-4xl">HSUAN YU CHEN</span></h1>
              <div className="h-[1px] w-40 bg-[#BF9B30] mx-auto md:mx-0 mt-4 mb-4 opacity-50" />
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400 font-mono text-[10px] uppercase tracking-widest mt-6">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-sm border border-white/5">
                  <User size={14} className="text-[#BF9B30]" /> 雙魚座 / A型
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-sm border border-white/5">
                  <Calendar size={14} className="text-[#BF9B30]" /> 2007-02-28
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-sm border border-white/5">
                  <Mail size={14} className="text-[#BF9B30]" /> A111182112@nkust.edu.tw
                </div>
              </div>
              
              <p className="max-w-2xl text-gray-400 font-light leading-relaxed mt-6 text-sm tracking-wide">
                您好，我是陳宣諭，目前就讀大學，個性主動積極，對於學習新事物充滿熱情，樂於與不同人交流合作在挑戰中成長，持續提升自己能力。
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 -mt-12 relative z-20 pb-24">
        
        {/* Projects / 影片與學期作業 (Target Links Section) */}
        <Section title="學期作業" icon={BookOpen}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col justify-between overflow-hidden rounded-sm border border-white/5 bg-[#111] shadow-sm hover:border-[#BF9B30]/30 hover:bg-[#161616] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center mb-6 bg-white/5 text-gray-400 group-hover:text-[#BF9B30] group-hover:bg-[#BF9B30]/10 transition-colors`}>
                    <project.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                      <Calendar size={12} className="inline" /> {project.date}
                    </div>
                    <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-sm text-gray-400 border border-white/5 uppercase tracking-wider">{project.title.includes('PDF') ? 'PDF' : project.title.includes('Word') ? 'WORD' : project.title.includes('PPT') || project.title.includes('簡報') ? 'SLIDE' : 'ASSET'}</span>
                  </div>
                  <h3 className="font-serif text-xl tracking-wide text-white line-clamp-2 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#BF9B30]">
                  <span>Access File</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#111] p-8 rounded-sm shadow-sm border border-white/5 h-full"
          >
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2 bg-[#BF9B30]/10 text-[#BF9B30] rounded-sm">
                <Briefcase size={24} />
              </div>
              <h2 className="font-serif text-3xl font-semibold border-l-4 border-[#BF9B30] pl-3 text-white">工作經歷</h2>
            </div>
            
            <div className="relative pl-6 border-l border-white/10 space-y-8 mt-6">
              <div className="relative">
                <div className="absolute -left-[28.5px] top-1.5 h-2 w-2 rounded-full bg-[#BF9B30] shadow-[0_0_8px_rgba(191,155,48,0.6)]" />
                <div className="flex flex-col mb-2">
                  <span className="text-[10px] font-mono text-[#BF9B30] uppercase tracking-widest mb-1">2024-07 - 現在</span>
                  <h3 className="font-serif text-2xl font-semibold text-white">六合小玲</h3>
                  <span className="text-gray-500 text-xs tracking-widest uppercase mt-1">服務業</span>
                </div>
                <ul className="list-none text-gray-400 space-y-3 mt-4 text-sm font-light">
                  <li className="flex gap-3"><span className="text-[#BF9B30]">▪</span> 協助門市日常營運執行，執行標準化作業流程維護顧客體驗</li>
                  <li className="flex gap-3"><span className="text-[#BF9B30]">▪</span> 負責 POS 操作，飲品調製與現場流程管理</li>
                  <li className="flex gap-3"><span className="text-[#BF9B30]">▪</span> 負責門市營銷執行，包含顧客服務、飲品製作及品質控管，確保出餐效率</li>
                </ul>
              </div>
            </div>
          </motion.div>

           {/* Education */}
           <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#111] p-8 rounded-sm shadow-sm border border-white/5 h-full"
          >
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2 bg-[#BF9B30]/10 text-[#BF9B30] rounded-sm">
                <GraduationCap size={24} />
              </div>
              <h2 className="font-serif text-3xl font-semibold border-l-4 border-[#BF9B30] pl-3 text-white">學歷</h2>
            </div>
            
            <div className="relative pl-6 border-l border-white/10 space-y-8 mt-6">
              <div className="relative">
                <div className="absolute -left-[28.5px] top-1.5 h-2 w-2 rounded-full bg-[#BF9B30] shadow-[0_0_8px_rgba(191,155,48,0.6)]" />
                <div className="flex flex-col mb-2">
                  <span className="text-[10px] font-mono text-[#BF9B30] uppercase tracking-widest mb-1">2022 - 現在</span>
                  <h3 className="font-serif text-2xl font-semibold text-white">國立高雄科技大學</h3>
                  <span className="text-gray-500 text-xs tracking-widest uppercase mt-1">航運技術系</span>
                </div>
                <p className="text-gray-400 mt-4 text-sm font-light">
                  就讀五專部四年級。
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills & Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Skills */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="bg-[#111] p-8 rounded-sm shadow-sm border border-white/5 h-full"
          >
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2 bg-[#BF9B30]/10 text-[#BF9B30] rounded-sm">
                <MonitorDot size={24} />
              </div>
              <h2 className="font-serif text-3xl font-semibold border-l-4 border-[#BF9B30] pl-3 text-white">技能與語言</h2>
            </div>

            <div className="space-y-8 mt-6">
              <div>
                <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-white mb-4"><Languages size={18} className="text-[#BF9B30]"/> 語言能力</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-sm text-center border border-white/10">
                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">英文</div>
                    <div className="text-sm text-white font-light tracking-wide">TOEIC</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-sm text-center border border-white/10">
                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">中文</div>
                    <div className="text-sm text-white font-light tracking-wide">精通</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-sm text-center border border-white/10">
                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">台語</div>
                    <div className="text-sm text-white font-light tracking-wide">精通</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-white mb-4"><MonitorDot size={18} className="text-[#BF9B30]"/> 電腦技能</h3>
                <div className="space-y-4 relative pl-4 border-l border-white/10">
                  <div>
                    <span className="text-[10px] font-mono text-[#BF9B30] uppercase tracking-widest block mb-1">辦公應用</span> 
                    <span className="text-gray-400 text-sm font-light">Word, Excel, PowerPoint</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#BF9B30] uppercase tracking-widest block mb-1">專業應用</span> 
                    <span className="text-gray-400 text-sm font-light">Google Workspace (Gmail, Drive, Meet)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="bg-[#111] p-8 rounded-sm shadow-sm border border-white/5 h-full"
          >
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2 bg-[#BF9B30]/10 text-[#BF9B30] rounded-sm">
                <Award size={24} />
              </div>
              <h2 className="font-serif text-3xl font-semibold border-l-4 border-[#BF9B30] pl-3 text-white">專業證照</h2>
            </div>

            <ul className="space-y-6 mt-6">
              {[
                { zh: "進階滅火", en: "Advanced Fire Fighting" },
                { zh: "基礎訓練", en: "Basic Safety Training" },
                { zh: "油輪與化學輪貨物操作基本訓練", en: "Basic Training for Tanker Cargo Operations" },
                { zh: "保全職責", en: "Designated Security Duties" }
              ].map((cert, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BF9B30]" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-light tracking-wide">{cert.zh}</div>
                    <div className="text-gray-500 text-[10px] uppercase font-mono tracking-widest mt-1">{cert.en}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Autobiography */}
        <Section title="自傳" icon={User}>
          <div className="max-w-none text-gray-400 space-y-8 leading-loose text-justify font-light text-sm tracking-wide mt-6">
            <p className="first-letter:font-serif first-letter:text-6xl first-letter:text-[#BF9B30] first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] mt-2">
              我目前就讀國立高雄科技大學五專部四年級，在一個氣氛很輕鬆的家庭長大，跟家人相處比較像朋友，很多事情都可以直接說出來討論，而不是用責罵的方式解決，也因為這樣，我習慣先聽別人的想法，再慢慢說出自己的意見，遇到問題時，比起衝動反應，我會先想一想再行動。
            </p>
            <p>
              以前的我其實很愛玩，常常只在意當下開不開心，對未來沒有想太多。但隨著年紀慢慢長大，開始發現時間過得很快，也開始思考自己到底想要什麼樣的生活。這幾年我變得很喜歡去健身房打球，也意識到自己不能只是過一天算一天，而是要為之後的目標慢慢提升實力，這樣的轉變，讓我發現自己真的有在長大。
            </p>
            <p>
              平常我喜歡看散步，對我來說散步不只是運動，而是一種讓自己靜下來的方式。有時候心情很煩，跑一跑反而會想通很多事情。除了這個之外，我也是很喜歡的運動之一，雖然常常會遇到挫折，但每次成功做出新的動作時都會很有成就感。這些興趣讓我學會堅持，也讓我發現很多事情不是一次就能做好。
            </p>
            <p>
              對未來，我希望能找到一份穩定的工作，讓自己有安全感，也能照顧好家人。等到退休之後，如果有機會，我想去環遊世界，去看看不同地方的生活方式。我覺得努力工作不只是為了賺錢，也是為了讓未來有更多選擇。
            </p>
            <p>
              我知道自己還在成長的過程中，還有很多不足的地方，但我也會慢慢改進，希望在接下來的學習階段能，能讓自己變得更成熟、更有方向。
            </p>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-12 text-center text-gray-500">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[10px] uppercase font-mono tracking-widest text-[#BF9B30] mb-2">Personal Digital Portfolio</p>
          <p className="font-light text-sm">© {new Date().getFullYear()} 陳宣諭 Hsuan Yu Chen. All Rights Reserved.</p>
          <div className="mt-6 flex justify-center items-center gap-4 text-xs font-mono tracking-widest uppercase">
            <a href="mailto:A111182112@nkust.edu.tw" className="hover:text-[#BF9B30] transition-colors flex items-center gap-2 border border-white/10 px-4 py-2 bg-white/5 hover:bg-white/10 hover:border-[#BF9B30]/30 rounded-sm">
              <Mail size={14} /> Contact Me
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

