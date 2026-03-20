import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, AlertCircle, BarChart3, ChevronDown, Target, TrendingUpIcon, Shield, Zap } from "lucide-react";
import { useState } from "react";

interface FuturesData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  currency: string;
  timestamp: string;
  support: string;
  resistance: string;
}

interface NewsItem {
  id: string;
  title: string;
  category: string;
  impact: "high" | "medium" | "low";
  description: string;
  details: string;
  timestamp: string;
}

interface ProbabilityData {
  symbol: string;
  up: number;
  down: number;
  neutral: number;
  support: string;
  resistance: string;
}

interface AnalysisPoint {
  title: string;
  content: string;
}

interface InvestmentAdvice {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

export default function Home() {
  const [expandedNews, setExpandedNews] = useState<string | null>(null);

  const futuresData: FuturesData[] = [
    {
      symbol: "YM1!",
      name: "E-迷你道瓊指數",
      price: 46420,
      change: 120,
      changePercent: 0.26,
      volume: "3.51K",
      currency: "USD",
      timestamp: "2026-03-20 07:59 (台灣時間)",
      support: "46200",
      resistance: "46600"
    },
    {
      symbol: "NQ1!",
      name: "E-迷你納斯達克100",
      price: 24619.5,
      change: 49,
      changePercent: 0.2,
      volume: "19.32K",
      currency: "USD",
      timestamp: "2026-03-20 07:59 (台灣時間)",
      support: "24400",
      resistance: "24800"
    },
    {
      symbol: "TXF1!",
      name: "台灣加權指數期貨",
      price: 33738,
      change: 179,
      changePercent: 0.53,
      volume: "296.15K",
      currency: "TWD",
      timestamp: "2026-03-20 07:21 (台灣時間)",
      support: "33500",
      resistance: "34000"
    }
  ];

  const newsData: NewsItem[] = [
    {
      id: "1",
      title: "美聯儲維持利率不變，上調通膨預測",
      category: "美聯儲決策",
      impact: "high",
      description: "聯邦基金利率維持在3.50%-3.75%區間不變，11比1投票結果。上調2026年通膨預測，小幅上調GDP預期至2.4%。",
      details: "美聯儲在3月18-19日(台灣時間凌晨02:00)宣布利率決議。決策委員會上調了2026年通膨預測，同時小幅上調經濟增長預期。鮑威爾表示需要更多時間評估油價衝擊。市場預期2026年僅降息1次(相比之前預期的2次)。升息預期增強，科技股等高估值資產面臨估值壓力。",
      timestamp: "2026-03-19 10:00 (台灣時間)"
    },
    {
      id: "2",
      title: "油價飆升至110美元/桶，中東局勢升級",
      category: "能源市場",
      impact: "high",
      description: "布倫特原油盤中飆升至119.13美元/桶，逼近3年半高點。WTI原油結算後交易中漲幅擴大至4%。",
      details: "伊朗攻擊事件引發中東地緣政治局勢升級。布倫特原油最終收於108.65美元/桶(+1.18%)，結算後交易中漲幅擴大至7%報111.32美元/桶。美國柴油突破每加侖5美元。花旗集團預測油價可能進一步漲至130美元/桶。若油價維持在110美元/桶，標普500成分股盈利預期將下降2-5%。通膨預期升溫，對美聯儲政策形成約束。",
      timestamp: "2026-03-20 02:30 (台灣時間)"
    },
    {
      id: "3",
      title: "美股下跌，標普500創新低，科技股領跌",
      category: "股市行情",
      impact: "high",
      description: "標普500下跌1.36%至6,624.70點，創2025年11月以來新低。納斯達克100下跌1.46%至22,152.42點。",
      details: "美股在3月19日普遍下跌。標普500指數下跌1.36%(91.39點)至6,624.70點，為2024年12月以來最差決策日表現。納斯達克100指數下跌1.46%(327.11點)至22,152.42點。必需消費品股領跌，科技股普遍下跌(亞馬遜跌2.5%)，費城半導體指數下跌。VIX指數上升，市場風險情緒升溫。升息預期和地緣政治風險是主要拖累因素。",
      timestamp: "2026-03-20 06:00 (台灣時間)"
    },
    {
      id: "4",
      title: "美國製造業數據意外向好，經濟韌性顯現",
      category: "經濟數據",
      impact: "medium",
      description: "費城聯準銀行3月製造業調查指數彈升至18.1，新訂單與新出口訂單轉強。",
      details: "費城Fed製造業指數遠高於市場預期。新訂單與新出口訂單同步轉強，客戶庫存明顯下滑。數據顯示美國內需與外需皆有改善跡象，經濟韌性顯現。這為美聯儲提供了保持高利率的理由，同時也為股市提供了基本面支撐。製造業數據向好為YM1!和TXF1!提供了上漲動力。",
      timestamp: "2026-03-19 22:00 (台灣時間)"
    },
    {
      id: "5",
      title: "投行觀點：降息預期調整，年內僅降息1次",
      category: "市場分析",
      impact: "medium",
      description: "高盛仍預計年內降息2次，但市場普遍預期僅降息1次。惠譽表示若油價衝擊短暫，美聯儲或於6月降息。",
      details: "市場對美聯儲政策路徑的預期出現調整。高盛維持年內降息2次的預測，但市場普遍預期僅降息1次。惠譽評級表示，如果中東戰爭引發的油價上漲被證明是暫時性的，美聯儲在6月降息是一個現實可能。荷蘭國際則表示，若中東衝突持續，將對黃金構成下行風險。投行觀點分歧反映市場對油價和地緣政治風險的不確定性。",
      timestamp: "2026-03-20 00:00 (台灣時間)"
    }
  ];

  const probabilities: ProbabilityData[] = [
    { 
      symbol: "YM1!", 
      up: 40, 
      down: 50, 
      neutral: 10,
      support: "46200",
      resistance: "46600"
    },
    { 
      symbol: "NQ1!", 
      up: 30, 
      down: 60, 
      neutral: 10,
      support: "24400",
      resistance: "24800"
    },
    { 
      symbol: "TXF1!", 
      up: 50, 
      down: 35, 
      neutral: 15,
      support: "33500",
      resistance: "34000"
    }
  ];

  const analysisPoints: AnalysisPoint[] = [
    {
      title: "美聯儲政策轉向",
      content: "聯準會維持利率不變在3.5%-3.75%，但上調2026年PCE通膨預測至2.7%，釋放鷹派訊號。長期中性利率從3.0%上調至3.1%，市場解讀為'利率更高更久'。"
    },
    {
      title: "油價劇烈波動",
      content: "伊朗衝突升溫導致油價飆升，布蘭特原油盤中觸及119.13美元（3年半高點），最終收在108.65美元。美國財政部允許部分俄羅斯原油流通，油價自高點回落。"
    },
    {
      title: "美股承壓下跌",
      content: "道瓊工業指數下跌203.72點（-0.44%），標普500下滑18.21點（-0.27%），那斯達克跌幅控制在0.5%以內。通膨預期升溫打擊科技股，但經濟韌性提供支撐。"
    },
    {
      title: "台股失守月線",
      content: "台股大盤下跌658.9點，失守月線。鮑爾放鷹言論推升通膨憂慮，塑化油電族群逆勢稱雄。"
    }
  ];

  const investmentAdvice: InvestmentAdvice[] = [
    {
      title: "短期策略",
      icon: <TrendingUpIcon className="w-5 h-5" />,
      color: "from-blue-600 to-blue-700",
      items: [
        "謹慎操作：控制風險敞口，美聯儲鷹派立場增加市場不確定性",
        "設置止損：控制下行風險不超過2%，防範突發事件衝擊",
        "分批布局：在支撐位(YM1: 46200、NQ1: 24400、TXF1: 33500)分批介入",
        "動態調整：根據政策信號實時調整倉位，密切關注後續經濟數據"
      ]
    },
    {
      title: "交易機會",
      icon: <Zap className="w-5 h-5" />,
      color: "from-green-600 to-green-700",
      items: [
        "反彈機會：經濟數據向好提供反彈機會，特別是製造業數據",
        "台指期超配：相對抗跌，製造業受惠，建議超配台指期",
        "能源股機會：油價上漲受益，能源相關個股值得關注",
        "選擇性做多：在支撐位布局優質個股，等待反彈"
      ]
    },
    {
      title: "風險規避",
      icon: <Shield className="w-5 h-5" />,
      color: "from-red-600 to-red-700",
      items: [
        "科技股風險：升息預期打擊高估值科技股，應適度減持",
        "避免高槓桿：市場波動性較大，避免過度槓桿操作",
        "避免追高：等待回調後介入，不要在高點追進",
        "地緣政治：密切關注中東局勢，防範油價再度飆升"
      ]
    },
    {
      title: "倉位配置",
      icon: <Target className="w-5 h-5" />,
      color: "from-yellow-600 to-yellow-700",
      items: [
        "台指期：40% (相對抗跌，製造業受惠)",
        "小道瓊：35% (經濟韌性提供支撐)",
        "小那指：25% (科技股承壓，風險較大)",
        "現金儲備：10-20% (保持靈活性，等待機會)"
      ]
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">國際金融期貨日報</h1>
              <p className="text-slate-400">Futures Daily Report | 2026年3月20日 (GMT+8)</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">最後更新</p>
              <p className="text-lg font-mono text-slate-300">2026-03-20 07:59 (台灣時間)</p>
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

                    <div className="pt-3 border-t border-slate-700 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">支撐</span>
                        <span className="text-slate-300 font-mono">{future.support}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">阻力</span>
                        <span className="text-slate-300 font-mono">{future.resistance}</span>
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

        {/* Analysis Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">昨日走勢分析</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analysisPoints.map((point, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm leading-relaxed">{point.content}</p>
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

                    <div className="pt-3 border-t border-slate-700 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">支撐</span>
                        <span className="text-slate-300 font-mono">{prob.support}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">阻力</span>
                        <span className="text-slate-300 font-mono">{prob.resistance}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Investment Advice */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">投資建議</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentAdvice.map((advice, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-slate-400">{advice.icon}</div>
                    <CardTitle className="text-white text-lg">{advice.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {advice.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-300">
                        <span className="text-slate-500 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              <Card 
                key={news.id} 
                className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedNews(expandedNews === news.id ? null : news.id)}
              >
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
                        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${expandedNews === news.id ? 'rotate-180' : ''}`} />
                      </div>
                      
                      <p className="text-slate-400 text-sm mb-3">{news.description}</p>

                      {expandedNews === news.id && (
                        <div className="pt-3 border-t border-slate-700 mt-3">
                          <p className="text-slate-300 text-sm leading-relaxed mb-3">{news.details}</p>
                        </div>
                      )}
                      
                      <p className="text-xs text-slate-500">{news.timestamp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Risk Factors */}
        <section className="mb-8">
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">風險提示與監控點</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">短期風險(24小時內)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>油價波動：若繼續上漲至115美元/桶以上，通膨預期將進一步升溫</li>
                    <li>中東局勢：伊朗-以色列衝突若升級，油價可能突破120美元/桶</li>
                    <li>美聯儲政策信號：鮑威爾後續言論將影響升息預期</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <h4 className="font-semibold text-white mb-2">關鍵監控指標</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>WTI原油：關鍵位在100美元/桶</li>
                    <li>布倫特原油：關鍵位在110美元/桶</li>
                    <li>美元指數：強勢美元對黃金和新興市場的影響</li>
                    <li>VIX指數：市場風險情緒晴雨表</li>
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
          <p className="text-slate-600 text-xs mt-2">
            下次更新：2026年3月21日 06:00 (台灣時間)
          </p>
        </div>
      </div>
    </div>
  );
}
