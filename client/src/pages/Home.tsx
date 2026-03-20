import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, AlertCircle, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

interface FuturesData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  currency: string;
  timestamp: string;
}

interface NewsItem {
  id: string;
  title: string;
  category: string;
  impact: "high" | "medium" | "low";
  description: string;
  timestamp: string;
}

interface ProbabilityData {
  symbol: string;
  up: number;
  down: number;
  neutral: number;
}

export default function Home() {
  const [futuresData] = useState<FuturesData[]>([
    {
      symbol: "YM1!",
      name: "E-迷你道瓊指數",
      price: 46448,
      change: 107,
      changePercent: 0.23,
      volume: "5.95K",
      currency: "USD",
      timestamp: "2026-03-20 03:26 GMT"
    },
    {
      symbol: "NQ1!",
      name: "E-迷你納斯達克100",
      price: 24603.75,
      change: 23.75,
      changePercent: 0.10,
      volume: "29.14K",
      currency: "USD",
      timestamp: "2026-03-20 03:26 GMT"
    },
    {
      symbol: "TXF1!",
      name: "台灣加權指數期貨",
      price: 33738,
      change: 179,
      changePercent: 0.53,
      volume: "296.15K",
      currency: "TWD",
      timestamp: "2026-03-20 03:21 GMT"
    }
  ]);

  const [newsData] = useState<NewsItem[]>([
    {
      id: "1",
      title: "美聯儲維持利率不變，上調通膨預測",
      category: "美聯儲決策",
      impact: "high",
      description: "美聯儲在3月19日FOMC會議上維持基準利率在3.50%-3.75%區間不變，但上調2026年通膨預測，引發市場升息預期增強。",
      timestamp: "2026-03-19 20:00"
    },
    {
      id: "2",
      title: "油價飆升至101美元/桶，推高通膨擔憂",
      category: "能源市場",
      impact: "high",
      description: "布倫特原油價格飆升至101.92美元/桶，中東地緣政治局勢緊張推高原油價格，引發市場對通脹的擔憂。",
      timestamp: "2026-03-19 18:30"
    },
    {
      id: "3",
      title: "美國製造業數據意外向好",
      category: "經濟數據",
      impact: "medium",
      description: "費城聯準銀行公布的3月製造業調查指數意外彈升至18.1，顯示美國製造業活動強勁，經濟韌性顯現。",
      timestamp: "2026-03-19 14:00"
    },
    {
      id: "4",
      title: "科技股面臨升息預期壓力",
      category: "股市分析",
      impact: "medium",
      description: "升息預期對高估值科技股打擊最大，納斯達克期貨承壓。投資者關注後續經濟數據和美聯儲政策信號。",
      timestamp: "2026-03-19 16:45"
    }
  ]);

  const [probabilities] = useState<ProbabilityData[]>([
    { symbol: "YM1!", up: 35, down: 55, neutral: 10 },
    { symbol: "NQ1!", up: 25, down: 65, neutral: 10 },
    { symbol: "TXF1!", up: 45, down: 40, neutral: 15 }
  ]);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const getChangeColor = (change: number) => {
    return change > 0 ? "text-green-500" : change < 0 ? "text-red-500" : "text-gray-500";
  };

  const getProbabilityColor = (value: number, type: "up" | "down") => {
    if (type === "up") {
      return value > 50 ? "bg-green-500/20 border-green-500" : "bg-green-500/10 border-green-500/50";
    } else {
      return value > 50 ? "bg-red-500/20 border-red-500" : "bg-red-500/10 border-red-500/50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">國際金融期貨日報</h1>
              <p className="text-slate-400">Futures Daily Report | 2026年3月20日</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">最後更新</p>
              <p className="text-lg font-mono text-slate-300">03:26 GMT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Futures Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-500" />
            三大期貨實時行情
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futuresData.map((future) => (
              <Card key={future.symbol} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-2xl font-mono">{future.symbol}</CardTitle>
                      <CardDescription className="text-slate-400">{future.name}</CardDescription>
                    </div>
                    {future.changePercent > 0 ? (
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-white font-mono">
                        {future.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-slate-500">{future.currency}</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div>
                        <p className={`text-lg font-bold font-mono ${getChangeColor(future.change)}`}>
                          {future.change > 0 ? "+" : ""}{future.change.toFixed(2)}
                        </p>
                        <p className={`text-sm font-mono ${getChangeColor(future.change)}`}>
                          {future.changePercent > 0 ? "+" : ""}{future.changePercent.toFixed(2)}%
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-500">成交量</p>
                        <p className="text-sm text-slate-300 font-mono">{future.volume}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-700">
                      <p className="text-xs text-slate-500">{future.timestamp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Probability Analysis */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-yellow-500" />
            今日走勢機率評估
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {probabilities.map((prob) => (
              <Card key={prob.symbol} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl font-mono">{prob.symbol}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Up Probability */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-green-400 font-semibold">上漲</span>
                        <span className="text-lg font-bold text-green-500">{prob.up}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${prob.up}%` }}
                        />
                      </div>
                    </div>

                    {/* Down Probability */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-red-400 font-semibold">下跌</span>
                        <span className="text-lg font-bold text-red-500">{prob.down}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${prob.down}%` }}
                        />
                      </div>
                    </div>

                    {/* Neutral Probability */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400 font-semibold">震盪</span>
                        <span className="text-lg font-bold text-slate-400">{prob.neutral}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-slate-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${prob.neutral}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* News Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">國際金融新聞</h2>
          
          <div className="space-y-4">
            {newsData.map((news) => (
              <Card key={news.id} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      news.impact === "high" ? "bg-red-500" : 
                      news.impact === "medium" ? "bg-yellow-500" : 
                      "bg-green-500"
                    }`} />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{news.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300">
                              {news.category}
                            </span>
                            <span className={`text-xs font-semibold ${getImpactColor(news.impact)}`}>
                              {news.impact === "high" ? "高影響" : news.impact === "medium" ? "中影響" : "低影響"}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-400 text-sm mb-3">{news.description}</p>
                      
                      <p className="text-xs text-slate-500">{news.timestamp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Analysis Summary */}
        <section className="mb-8">
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">走勢分析摘要</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">昨日主要驅動因素</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>美聯儲維持利率不變，但上調通膨預測</li>
                    <li>油價飆升至100美元以上，引發通脹擔憂</li>
                    <li>製造業數據意外向好，經濟韌性顯現</li>
                    <li>市場對升息機率重新評估</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <h4 className="font-semibold text-white mb-2">關鍵風險因素</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>油價波動：若繼續上漲至110美元/桶以上，通膨預期將進一步升溫</li>
                    <li>地緣政治：中東局勢若進一步惡化，油價可能突破150美元/桶</li>
                    <li>經濟數據：後續就業數據和消費者信心指數將影響升息預期</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className="text-center py-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            本報告由自動化系統生成 | 數據來源：TradingView、Reuters、美聯儲官方
          </p>
          <p className="text-slate-600 text-xs mt-2">
            免責聲明：本報告僅供參考，不構成投資建議。交易涉及風險，請謹慎決策。
          </p>
        </div>
      </div>
    </div>
  );
}
