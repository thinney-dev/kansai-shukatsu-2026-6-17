import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {

  // ▼▼▼ ここから追加（メンテナンス画面の処理） ▼▼▼
  const isMaintenanceMode = true; // メンテナンスを終了する時はここを false にする

  if (isMaintenanceMode) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4 tracking-wider">
          現在メンテナンス中です
        </h1>
        <p className="text-slate-600 leading-relaxed">
          より良いサービスをご提供するため、システムアップデートを行っております。<br />
          ご不便をおかけしますが、完了まで今しばらくお待ちください。
        </p>
      </div>
    );
  }
  // ▲▲▲ ここまで追加 ▲▲▲

  // 以下の本来のコードは一切変更していない（上のreturnが実行されるため、現在は無視される）
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;