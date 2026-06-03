import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {

  // ===== 復旧時削除ここから（仮面部分） =====

  // 復旧時は、この return ブロックを丸ごと削除するだけで元の画面に戻る。

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="text-center p-8 bg-white shadow-md rounded-lg">

        <h1 className="text-2xl font-bold text-gray-800 mb-4">現在メンテナンス中です</h1>

        <p className="text-gray-600">アクセスいただいたページは、現在一時的に公開を停止しております。</p>

      </div>

    </div>

  );

  // ===== 復旧時削除ここまで =====

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