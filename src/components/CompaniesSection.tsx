import React from "react";

const CompaniesSection = () => {
  // ▼▼▼ 出展企業リスト ▼▼▼
  const companies = [
    { 
      id: 1, 
      name: (
        <>
          PwCコンサルティング
        </>
      ), 
      tags: ["外資系", "戦略部門"], 
      logoImage: "/logo-PWC.png",
    },
    { 
      id: 2, 
      name: "野村證券", 
      tags: ["国内最大手証券", "金融"], 
      logoImage: "/logo-野村證券.png",
    },
    { 
      id: 3, 
      name: (
        <>
          デロイト トーマツ ベンチャーサポート
        </>
      ), 
      tags: ["官公庁支援", "新規事業"], 
      logoImage: "/logo-delo.png",
    },
    { 
      id: 4, 
      name: (
        <>
          EYストラテジー・アンド・コンサルティング
        </>
      ), 
      tags: ["外資系", "戦略部門"],
      logoImage: "/logo-EY.png",
    },
    { 
      id: 5, 
      name: "富士通", 
      tags: ["IT・通信", "グローバルSIer"], 
      logoImage: "/logo-富士通.png",
    },
    {
      id: 6,
      name: "損害保険ジャパン",
      tags: ["保険", "損保"],
      logoImage: "/logo-損保.png",
    },
    {
      id: 7,  
      name: "レイスグループ",   
      tags: ["経営コンサル", "ベンチャー"],  
      logoImage: "/logo-RACE.png",   
    },
    {
      id: 8,
      name: "TENTIAL",
      tags: ["D2C", "ヘルスケア"],
      logoImage: "/logo-tential.png",
    },
    {
      id: 9,
      name: "シービーアールイー",
      tags: ["不動産", "外資"],
      logoImage: "/logo-CBRE.png",
    },
    {
      id: 10,
      name: "", // 👈 下部のテキストを非表示にするため空文字に変更
      textLogo: "coming soon...", 
      tags: [], // 👈 タグを非表示にするため空配列に変更
    },
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
           
           <p className="text-sm md:text-base font-bold text-[#0B1E46] leading-loose tracking-tight mt-2">
             <span className="inline-block whitespace-nowrap">業界最大手から戦略コンサルまで</span>
             <br />
             <span className="inline-block whitespace-nowrap">最難関企業が多数出展</span>
           </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5 mb-8">
          {companies.map((company: any) => (
            <div
              key={company.id} 
              className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center gap-3 md:gap-4 shadow-sm min-h-44 md:min-h-48 w-full group overflow-hidden"
            >
              <div className="w-full h-14 md:h-16 flex items-center justify-center px-2">
                {company.logoImage ? (
                  <img 
                    src={company.logoImage} 
                    alt={`${company.name} ロゴ`}
                    className="max-w-full max-h-full object-contain opacity-90 transition-opacity mix-blend-multiply" 
                  />
                ) : company.textLogo ? (
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-xl md:text-2xl text-slate-400 tracking-wider transition-colors">
                      {company.textLogo}
                    </span>
                    <span className="text-[9px] text-slate-400 font-medium mt-1">
                      {company.logoSubText}
                    </span>
                  </div>
                ) : (
                  <span className="font-black text-xl md:text-3xl text-slate-300 transition-colors">
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
                 <p className="text-[11px] md:text-sm font-bold text-slate-600 mt-1 w-full leading-tight break-words whitespace-normal text-center line-clamp-3 md:line-clamp-none min-h-[2.2rem] md:min-h-0 px-1">
                    {company.name}
                 </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-slate-400 text-center font-medium">
            ＊参加企業は変更になる可能性があります。
        </p>
      </div>
    </section>
  );
};

export default CompaniesSection;