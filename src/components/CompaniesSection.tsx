import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Building2, Lightbulb } from "lucide-react";
import React from "react";

const CompaniesSection = () => {
  const [selectedCompany, setSelectedCompany] = useState<any | null>(null);

  // 安全対策
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      const menuBtn = document.getElementById('mobile-menu-btn');
      if (menuBtn) {
        menuBtn.style.opacity = '1';
        menuBtn.style.pointerEvents = 'auto';
      }
    };
  }, []);

  const openModal = (company: any) => {
    if (company.isComingSoon) return;
    setSelectedCompany(company);
    document.body.style.overflow = 'hidden';
    
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.style.opacity = '0';
      menuBtn.style.pointerEvents = 'none';
    }
  };

  const closeModal = () => {
    setSelectedCompany(null);
    document.body.style.overflow = 'unset';
    
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.style.opacity = '1';
      menuBtn.style.pointerEvents = 'auto';
    }
  };

  // ▼▼▼ 6月LP用：出展企業リスト（P&Gを追加） ▼▼▼
  const companies = [
    { 
      id: 1, 
      name: "PwCコンサルティング", 
      tags: ["戦略コンサル", "外資系"], 
      logoImage: "/logo-PwC.png",
      url: "https://www.pwc.com/jp/ja/about-us/member/consulting.html",
      details: {
        catchphrase: "世界を牽引する戦略コンサルティング部門（Strategy&）",
        stats: [
          { label: "グローバルネットワーク", value: "世界151カ国、約36.4万人" },
          { label: "提供価値", value: "全社戦略から実行まで一気通貫" },
          { label: "成長環境", value: "圧倒的スピードでのプロフェッショナル育成" },
          { label: "採用難易度", value: "最難関（内定者の大半が東大等トップ層）" }
        ],
        strength: "PwCコンサルティングの中でも、旧ブーズ・アンド・カンパニーの流れを汲む『Strategy&（戦略コンサルティング部門）』は、例年内定者の大半が東大生で占められる超難関部門です。グローバルな知見と圧倒的な思考力・実行力を武器に、CEOアジェンダと呼ばれる企業の最重要課題（M&A、全社改革、新規事業創出など）に切り込みます。若手のうちから経営トップと対峙し、社会にインパクトを与えるダイナミックな成長環境がここにあります。"
      }
    },
    { 
      id: 2, 
      name: "デロイトトーマツ", 
      tags: ["総合コンサル", "BIG4"], 
      logoImage: "/logo-delo.png",
      url: "https://www2.deloitte.com/jp/ja.html",
      details: {
        catchphrase: "日本最大級のプロフェッショナルファーム",
        stats: [
          { label: "グループ人員", value: "約20,000名（国内）" },
          { label: "提供サービス", value: "監査、税務、法務、コンサルティング" },
          { label: "グローバル基盤", value: "世界150以上の国・地域に展開" },
          { label: "成長性", value: "国内コンサル市場を牽引する圧倒的規模" }
        ],
        strength: "世界最大規模のプロフェッショナルネットワークであるデロイト トウシュ トーマツ リミテッドのメンバーファームです。戦略策定からテクノロジー実装、M&Aアドバイザリーまで、企業のあらゆる経営課題に対してエンドツーエンドで価値を提供します。圧倒的なナレッジと多様な専門家が集う環境で、日本のビジネスの変革を最前線でリードする経験が積めます。"
      }
    },
    { 
      id: 3, 
      name: "P&G", 
      tags: ["外資系", "マーケティング"], 
      logoImage: "/logo-P&G.png",
      url: "https://jp.pg.com/",
      details: {
        catchphrase: "世界をリードするマーケティング・人材輩出企業",
        stats: [
          { label: "グローバルブランド", value: "アリエール、パンパース等多数" },
          { label: "ビジネスモデル", value: "世界最大級の消費財メーカー" },
          { label: "成長環境", value: "若手から数億円規模の裁量権" },
          { label: "キャリア", value: "世界最高峰のリーダー育成機関" }
        ],
        strength: "世界最大級の消費財メーカーであり、世界トップクラスのマーケティング・リーダーシップ育成環境を誇ります。入社1年目から大きな裁量権が与えられ、数億円規模の予算を動かすなど、圧倒的なスピードで成長できる環境が整っています。P&G出身のリーダーが世界中の名だたる企業のCEOを務めていることから『CEO輩出企業』としても知られています。"
      }
    },
    { 
      id: 4, 
      name: "富士通", 
      tags: ["IT・通信", "グローバルSIer"], 
      logoImage: "/logo-富士通.png",
      url: "https://www.fujitsu.com/jp/",
      details: {
        catchphrase: "テクノロジーで社会課題を解決する、日本を代表するDX企業",
        stats: [
          { label: "連結売上収益", value: "3兆7,560億円（2023年度）" },
          { label: "従業員数", value: "約124,000名（グローバル）" },
          { label: "事業領域", value: "AI、クラウド、セキュリティ等最先端技術" },
          { label: "パーパス", value: "イノベーションによって社会に信頼をもたらす" }
        ],
        strength: "日本トップ、世界トップクラスのITサービス企業として、官公庁から金融、製造、流通まで、あらゆる産業のデジタル変革（DX）を裏側で支えています。近年は「IT企業」から「DX企業」への変革を強力に推し進めており、AI（Fujitsu Kozuchi）や量子インスパイアード技術などの最先端テクノロジーを駆使して、持続可能な社会の実現（サステナビリティ・トランスフォーメーション）に挑むスケールの大きな仕事が魅力です。"
      }
    },
    { id: 5, name: "Coming Soon", tags: ["？？？", "？？？"], isComingSoon: true },
    { id: 6, name: "Coming Soon", tags: ["？？？", "？？？"], isComingSoon: true },
    { id: 7, name: "Coming Soon", tags: ["？？？", "？？？"], isComingSoon: true },
    { id: 8, name: "Coming Soon", tags: ["？？？", "？？？"], isComingSoon: true },
  ];

  return (
    <section className="py-12 px-6 md:px-10 bg-slate-50 relative">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-10">
           <div className="mb-6">
             <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
               出展企業
             </h2>
             <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase">
               COMPANIES
             </p>
           </div>
           
           <p className="text-sm font-bold text-slate-500 mb-6 bg-white inline-block px-4 py-1.5 rounded-full shadow-sm border border-slate-200">
             タップすると各企業の詳細データを確認できます
           </p>

           <p className="text-sm md:text-base font-bold text-[#0B1E46] leading-loose tracking-tight mt-2">
             <span className="inline-block whitespace-nowrap">業界最大手から戦略コンサルまで</span>
             <br />
             <span className="inline-block whitespace-nowrap">最難関企業が多数出展</span>
           </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5 mb-8">
          {companies.map((company: any) => (
            <button
              key={company.id} 
              onClick={() => openModal(company)}
              className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center gap-3 md:gap-4 shadow-sm hover:shadow-md transition-all h-44 md:h-48 w-full cursor-pointer group overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50"
            >
              <div className="w-full h-14 md:h-16 flex items-center justify-center px-2">
                {company.logoImage ? (
                  <img 
                    src={company.logoImage} 
                    alt={`${company.name} ロゴ`}
                    className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity mix-blend-multiply" 
                  />
                ) : (
                  <span className="font-black text-xl md:text-3xl text-slate-300 group-hover:text-slate-400 transition-colors">
                    {company.name}
                  </span>
                )}
              </div>
              
              <div className="w-full space-y-2 text-center shrink-0">
                 <div className="flex justify-center gap-1 w-full px-1">
                    {company.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 border border-slate-200 rounded bg-slate-50 text-slate-500 font-bold whitespace-nowrap flex-shrink-0 truncate max-w-[100px]">
                            {tag}
                        </span>
                    ))}
                 </div>
                 <p className="text-xs md:text-sm font-bold text-slate-600 mt-1 truncate w-full">
                    {company.name}
                 </p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-[10px] text-slate-400 text-center font-medium">
            ＊参加企業は変更になる可能性があります。
        </p>
      </div>

      {selectedCompany && typeof document !== 'undefined'
        ? createPortal(
            <div 
              className="fixed inset-0 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
              style={{ zIndex: 9999 }} 
              onClick={closeModal}
            >
              <div 
                className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative pt-8 pb-4 px-6 border-b border-slate-100 flex flex-col items-center bg-slate-50/50">
                  <button 
                    onClick={closeModal}
                    className="absolute top-3 right-3 z-10 p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="h-12 md:h-16 w-full max-w-[80%] flex justify-center mb-3">
                    <img 
                      src={selectedCompany.logoImage} 
                      alt={selectedCompany.name} 
                      className="h-full w-auto object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1E46] text-center">{selectedCompany.name}</h3>
                  <p className="text-xs font-bold text-[#B8860B] mt-1.5 text-center px-4">{selectedCompany.details.catchphrase}</p>
                </div>

                <div className="p-6 overflow-y-auto space-y-5 flex-1 bg-white">
                  <div className="grid grid-cols-2 gap-3">
                    {selectedCompany.details.stats.map((stat: any, i: number) => (
                      <div key={i} className="bg-white border border-[#B8860B]/20 rounded-lg p-3 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#B8860B]/70"></div>
                        <p className="text-[10px] font-bold text-slate-400 mb-1 pl-1">{stat.label}</p>
                        <p className="text-[11px] sm:text-[13px] font-bold text-[#0B1E46] leading-snug pl-1">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#0B1E46]/5 rounded-lg p-4 border border-[#0B1E46]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-[#B8860B]" />
                      <h4 className="font-bold text-[#0B1E46] text-sm">ここが強み・特徴</h4>
                    </div>
                    <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedCompany.details.strength}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedCompany.tags.map((tag: string, i: number) => (
                      <span key={i} className="text-xs px-2.5 py-1 border border-slate-200 rounded-md bg-slate-50 text-slate-500 font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50">
                  <a 
                    href={selectedCompany.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-[#0B1E46] text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                  >
                    <Building2 className="w-4 h-4" />
                    企業ホームページを見る
                    <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                  </a>
                </div>
              </div>
            </div>,
            document.body 
          )
        : null}

    </section>
  );
};

export default CompaniesSection;