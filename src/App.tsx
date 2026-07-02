import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Share2,
  Users,
  ThumbsUp,
  MousePointer,
  TrendingUp,
  AlertTriangle,
  Globe,
  UserCheck,
  RotateCcw,
  Timer,
  Award,
  Flame,
  Calendar,
  ChevronRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Share,
  Link,
  MessageSquare,
  Sparkles,
  X
} from "lucide-react";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div id="app-root" className="min-h-screen bg-[#F4F5F7] font-sans text-[#2D3436] antialiased selection:bg-[#E67E22] selection:text-white">
      
      {/* EXECUTIVE CONTROL BAR */}
      <div id="executive-control-bar" className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3">
            <div className="bg-[#0B3C5D] p-1.5 rounded-lg flex items-center justify-center">
              <img 
                src="https://i.imgur.com/bHgn9TM.png" 
                alt="Logo da Empresa" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-6 w-px bg-gray-200"></div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] font-bold tracking-wider text-gray-400 uppercase"></span>
                <span className="inline-block h-1 w-1 rounded-full bg-emerald-500"></span>
              </div>
              <h1 className="text-xs font-bold tracking-tight text-[#2C3E50] sm:text-sm">Churrascômetro • Junho 2026</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-gray-400 font-mono hidden sm:inline uppercase tracking-wider">Desenvolvido por</span>
            <img 
              src="https://i.imgur.com/lAyMWKF.png" 
              alt="Logo da Agência" 
              className="h-6 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>

      {/* DASHBOARD PREVIEW */}
      <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
        >
          
          {/* HEADER HERO */}
          <div id="dashboard-hero" className="relative mb-6 overflow-hidden rounded-xl bg-white p-5 text-[#2D3436] shadow-sm border border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-l-8 border-l-[#E67E22]">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="bg-[#E1F5FE] text-[#0288D1] px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                  Relatório Executivo
                </span>
                <span className="bg-[#FFF3E0] text-[#E67E22] px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider italic">
                  Junho 2026
                </span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl text-[#2C3E50]">
                Dashboard de Performance: <span className="text-[#E67E22]">Churrascômetro</span>
              </h2>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-gray-500">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3 text-[#E67E22]" /> Junho de 2026</span>
                <span className="text-gray-300">•</span>
                <span>Divulgação Digital</span>
              </div>
            </div>
            <div className="md:max-w-md border-t md:border-t-0 md:border-l border-gray-150 pt-3 md:pt-0 md:pl-4">
              <p className="text-xs leading-relaxed text-gray-500">
                Análise consolidada e minuciosa de impacto do tráfego oriundo de campanhas digitais multiplataforma e a validação empírica da reformulação completa de usabilidade e layout implementada no site da ferramenta.
              </p>
            </div>
          </div>

          {/* SEÇÃO 1: REDES SOCIAIS */}
          <section id="react-section-social" className="mb-8">
            
            <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#2C3E50] border-l-4 border-[#E67E22] pl-3 uppercase tracking-tight">1. Divulgação nas Redes Sociais</h3>
                <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-400 font-medium hidden sm:inline">Foco em Atração & Conversão</span>
              </div>
              <span className="text-[9px] bg-gray-100 px-2 py-0.5 rounded text-gray-400 font-bold tracking-wider uppercase">ALCANCE MULTIPLATAFORMA</span>
            </div>

            <p className="text-xs text-gray-600 mb-4 italic leading-relaxed">
              A estratégia multiplataforma dividiu com precisão o papel de cada rede social na jornada da campanha: o <strong className="text-gray-800 font-semibold">Feed do Instagram</strong> gerou reconhecimento de marca de forma massiva, o <strong className="text-gray-800 font-semibold">Facebook</strong> obteve engajamento fora de qualquer média de mercado, e os <strong className="text-gray-800 font-semibold">Stories do Instagram</strong> atuaram como o motor definitivo de conversão de tráfego direto. <strong className="text-gray-800 font-semibold">O caminho do usuário até a ferramenta era realizado através de redirecionamento dos links inseridos nos posts publicados.</strong>
            </p>

            {/* BIG NUMBERS SOCIAL */}
            <div className="mb-4 grid gap-3 grid-cols-1 sm:grid-cols-3">
              
              <div className="bg-white p-3.5 rounded-xl border border-gray-150 shadow-xs">
                <div className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Alcance Total</div>
                <div className="text-xl font-black text-[#27AE60]">+538.000</div>
                <div className="text-[9px] text-gray-500 font-medium">Pessoas Impactadas / Atração em Massa</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-gray-150 shadow-xs">
                <div className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Engajamento</div>
                <div className="text-xl font-black text-[#2980B9]">+16.900</div>
                <div className="text-[9px] text-gray-500 font-medium">Interações Diretas / Alta Sintonia</div>
              </div>

              <div className="bg-[#FFF3E0]/35 p-3.5 rounded-xl border border-orange-100 shadow-xs">
                <div className="text-[10px] font-bold text-orange-400 uppercase mb-0.5">Cliques Link</div>
                <div className="text-xl font-black text-[#E67E22]">1.825</div>
                <div className="text-[9px] text-orange-600 font-medium">Tráfego Direto Stories / Conversão</div>
              </div>

            </div>

            {/* TABELA DE MÉTRICAS */}
            <div className="mb-4 overflow-hidden rounded-xl border border-gray-150 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-150 text-[9px] font-bold uppercase tracking-wider text-gray-500">
                      <th className="px-4 py-2.5">Plataforma / Canal</th>
                      <th className="px-4 py-2.5">Métrica Base</th>
                      <th className="px-4 py-2.5">Interações</th>
                      <th className="px-4 py-2.5">Detalhamento das Ações do Usuário</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white font-bold text-[9px] shadow-xs">
                            ig
                          </div>
                          <div>
                            <span className="font-bold text-gray-800">Instagram Feed</span>
                            <span className="block text-[9px] text-gray-400">Reels / Conteúdo Impulsionado</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <span className="font-bold text-gray-800">315.498</span>
                        <span className="ml-1 text-[9px] text-gray-400">Alcance</span>
                      </td>
                      <td className="px-4 py-2 font-bold text-gray-700">5.334</td>
                      <td className="px-4 py-2">
                        <div className="flex flex-wrap gap-1">
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 4.650 Curtidas</span>
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><MessageSquare className="h-2.5 w-2.5 text-gray-400" /> 70 Comentários</span>
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Send className="h-2.5 w-2.5 text-gray-400" /> 393 Envios</span>
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Bookmark className="h-2.5 w-2.5 text-gray-400" /> 221 Salvos</span>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-orange-500 to-pink-500 text-white font-bold text-[9px] shadow-xs">
                            st
                          </div>
                          <div>
                            <span className="font-bold text-gray-800">Instagram Stories</span>
                            <span className="block text-[9px] text-gray-400">Orgânico / Link Bio-Stories</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <span className="font-bold text-gray-800">174.140</span>
                        <span className="ml-1 text-[9px] text-gray-400">Alcance</span>
                      </td>
                      <td className="px-4 py-2 font-bold text-gray-700">3.403</td>
                      <td className="px-4 py-2">
                        <div className="flex flex-wrap gap-1">
                          <span className="inline-flex items-center gap-0.5 rounded bg-orange-50 px-1.5 py-0.5 text-[9px] font-semibold text-orange-700 border border-orange-100 shadow-xs"><Link className="h-2.5 w-2.5 text-orange-500" /> 1.825 Cliques no link (Motor)</span>
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 272 Curtidas</span>
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><MessageSquare className="h-2.5 w-2.5 text-gray-400" /> 22 Respostas</span>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-white font-bold text-[9px] shadow-xs">
                            fb
                          </div>
                          <div>
                            <span className="font-bold text-gray-800">Facebook</span>
                            <span className="block text-[9px] text-gray-400">Post Estático / Impulsionado</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <span className="font-bold text-gray-800">48.401</span>
                        <span className="ml-1 text-[9px] text-gray-400">Alcance</span>
                      </td>
                      <td className="px-4 py-2 font-bold text-green-600">8.129</td>
                      <td className="px-4 py-2">
                        <div className="flex flex-wrap gap-1">
                          <span className="inline-flex items-center gap-0.5 rounded bg-green-50 px-1.5 py-0.5 text-[9px] font-semibold text-green-700 border border-green-100 shadow-xs"><TrendingUp className="h-2.5 w-2.5 text-green-500" /> Taxa de engajamento: 16,8%</span>
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 7.678 Curtidas</span>
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><MessageSquare className="h-2.5 w-2.5 text-gray-400" /> 195 Comentários</span>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded bg-black text-white font-bold text-[9px] shadow-xs">
                            tt
                          </div>
                          <div>
                            <span className="font-bold text-gray-800">TikTok</span>
                            <span className="block text-[9px] text-gray-400">Vídeo / Entrega Orgânica</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <span className="font-bold text-gray-800">1.292</span>
                        <span className="ml-1 text-[9px] text-gray-400">Visualizações</span>
                      </td>
                      <td className="px-4 py-2 font-bold text-gray-700">38</td>
                      <td className="px-4 py-2">
                        <div className="flex flex-wrap gap-1">
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 33 Curtidas</span>
                          <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Share className="h-2.5 w-2.5 text-gray-400" /> 5 Compartilhamentos</span>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* TABELA DETALHADA DE MÉTRICAS POR POST */}
            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                <h3 className="text-sm font-bold text-[#2C3E50] border-l-4 border-[#E67E22] pl-3 uppercase tracking-tight">Tabela Detalhada de Métricas por Post (Visão Individual de cada Publicação)</h3>
                <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-400 font-medium">Performance por Post</span>
              </div>
              
              <div className="overflow-hidden rounded-xl border border-gray-150 bg-white shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-gray-150 text-[9px] font-bold uppercase tracking-wider text-gray-500">
                        <th className="px-4 py-3">Data</th>
                        <th className="px-4 py-3">Criativo</th>
                        <th className="px-4 py-3">Plataforma</th>
                        <th className="px-4 py-3">Formato</th>
                        <th className="px-4 py-3 text-right">Alcance / Vis.</th>
                        <th className="px-4 py-3 text-right">Interações</th>
                        <th className="px-4 py-3">Detalhamento das Métricas</th>
                        <th className="px-4 py-3 text-center">Engajamento</th>
                        <th className="px-4 py-3 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      
                      {/* Post 1 */}
                      <tr className="bg-white hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-2.5 font-medium text-gray-600">05/06/2026</td>
                        <td className="px-4 py-2.5">
                          <img 
                            src="https://i.imgur.com/g8uRczn.png" 
                            alt="Criativo Post 1" 
                            className="h-15 w-15 object-cover rounded-md border border-gray-200 shadow-xs hover:scale-125 transition-transform duration-200 cursor-zoom-in"
                            referrerPolicy="no-referrer"
                            onClick={() => setSelectedImage("https://i.imgur.com/g8uRczn.png")}
                          />
                        </td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white font-bold text-[8px] shadow-xs">
                              ig
                            </div>
                            <span className="font-bold text-gray-800">Instagram Feed</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-gray-500 font-medium">Reels</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">315.498</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">5.334</td>
                        <td className="px-4 py-2.5">
                          <div className="flex flex-wrap gap-1">
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 4.650 Curtidas</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><MessageSquare className="h-2.5 w-2.5 text-gray-400" /> 70 Comentários</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Send className="h-2.5 w-2.5 text-gray-400" /> 393 Envios</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Bookmark className="h-2.5 w-2.5 text-gray-400" /> 221 Salvos</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-center font-bold text-gray-800">1,69%</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="inline-flex items-center rounded-full bg-orange-50 px-2 py-0.5 text-[9px] font-bold text-orange-700 border border-orange-100 shadow-xs">
                            Impulsionado
                          </span>
                        </td>
                      </tr>

                      {/* Post 2 */}
                      <tr className="bg-slate-50/45 hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-2.5 font-medium text-gray-600">05/06/2026</td>
                        <td className="px-4 py-2.5">
                          <img 
                            src="https://i.imgur.com/k1bbZy5.png" 
                            alt="Criativo Post 2" 
                            className="h-15 w-15 object-cover rounded-md border border-gray-200 shadow-xs hover:scale-125 transition-transform duration-200 cursor-zoom-in"
                            referrerPolicy="no-referrer"
                            onClick={() => setSelectedImage("https://i.imgur.com/k1bbZy5.png")}
                          />
                        </td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-white font-bold text-[8px] shadow-xs">
                              fb
                            </div>
                            <span className="font-bold text-gray-800">Facebook</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-gray-500 font-medium">Estático</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">48.401</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-green-600">8.129</td>
                        <td className="px-4 py-2.5">
                          <div className="flex flex-wrap gap-1">
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 7.678 Curtidas</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><MessageSquare className="h-2.5 w-2.5 text-gray-400" /> 195 Comentários</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-center font-bold text-gray-800">16,80%</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="inline-flex items-center rounded-full bg-orange-50 px-2 py-0.5 text-[9px] font-bold text-orange-700 border border-orange-100 shadow-xs">
                            Impulsionado
                          </span>
                        </td>
                      </tr>

                      {/* Post 3 */}
                      <tr className="bg-white hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-2.5 font-medium text-gray-600">05/06/2026</td>
                        <td className="px-4 py-2.5">
                          <img 
                            src="https://i.imgur.com/WDliDHF.png" 
                            alt="Criativo Post 3" 
                            className="h-15 w-15 object-cover rounded-md border border-gray-200 shadow-xs hover:scale-125 transition-transform duration-200 cursor-zoom-in"
                            referrerPolicy="no-referrer"
                            onClick={() => setSelectedImage("https://i.imgur.com/WDliDHF.png")}
                          />
                        </td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-orange-500 to-pink-500 text-white font-bold text-[8px] shadow-xs">
                              st
                            </div>
                            <span className="font-bold text-gray-800">Instagram Stories</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-gray-500 font-medium">Story</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">65.163</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">1.210</td>
                        <td className="px-4 py-2.5">
                          <div className="flex flex-wrap gap-1">
                            <span className="inline-flex items-center gap-0.5 rounded bg-orange-50 px-1.5 py-0.5 text-[9px] font-semibold text-orange-700 border border-orange-100 shadow-xs"><Link className="h-2.5 w-2.5 text-orange-500" /> 655 Cliques no Link</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 110 Curtidas</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100">420 Visitas Perfil</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><MessageSquare className="h-2.5 w-2.5 text-gray-400" /> 14 Respostas</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Share2 className="h-2.5 w-2.5 text-gray-400" /> 11 Compartilhamentos</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-center font-bold text-gray-800">1,86%</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold text-green-700 border border-green-100 shadow-xs">
                            Orgânico
                          </span>
                        </td>
                      </tr>

                      {/* Post 4 */}
                      <tr className="bg-slate-50/45 hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-2.5 font-medium text-gray-600">05/06/2026</td>
                        <td className="px-4 py-2.5">
                          <img 
                            src="https://i.imgur.com/WDliDHF.png" 
                            alt="Criativo Post 4" 
                            className="h-15 w-15 object-cover rounded-md border border-gray-200 shadow-xs hover:scale-125 transition-transform duration-200 cursor-zoom-in"
                            referrerPolicy="no-referrer"
                            onClick={() => setSelectedImage("https://i.imgur.com/WDliDHF.png")}
                          />
                        </td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded bg-black text-white font-bold text-[8px] shadow-xs">
                              tt
                            </div>
                            <span className="font-bold text-gray-800">TikTok</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-gray-500 font-medium">Vídeo</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">1.292</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">38</td>
                        <td className="px-4 py-2.5">
                          <div className="flex flex-wrap gap-1">
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 33 Curtidas</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Share className="h-2.5 w-2.5 text-gray-400" /> 5 Compartilhamentos</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100">0 Comentários</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-center font-bold text-gray-800">2,94%</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold text-green-700 border border-green-100 shadow-xs">
                            Orgânico
                          </span>
                        </td>
                      </tr>

                      {/* Post 5 */}
                      <tr className="bg-white hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-2.5 font-medium text-gray-600">20/06/2026</td>
                        <td className="px-4 py-2.5">
                          <img 
                            src="https://i.imgur.com/3POoo5F.png" 
                            alt="Criativo Post 5" 
                            className="h-15 w-15 object-cover rounded-md border border-gray-200 shadow-xs hover:scale-125 transition-transform duration-200 cursor-zoom-in"
                            referrerPolicy="no-referrer"
                            onClick={() => setSelectedImage("https://i.imgur.com/3POoo5F.png")}
                          />
                        </td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-orange-500 to-pink-500 text-white font-bold text-[8px] shadow-xs">
                              st
                            </div>
                            <span className="font-bold text-gray-800">Instagram Stories</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-gray-500 font-medium">Story</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">55.323</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">873</td>
                        <td className="px-4 py-2.5">
                          <div className="flex flex-wrap gap-1">
                            <span className="inline-flex items-center gap-0.5 rounded bg-orange-50 px-1.5 py-0.5 text-[9px] font-semibold text-orange-700 border border-orange-100 shadow-xs"><Link className="h-2.5 w-2.5 text-orange-500" /> 358 Cliques no Link</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 85 Curtidas</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100">425 Visitas Perfil</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><MessageSquare className="h-2.5 w-2.5 text-gray-400" /> 3 Respostas</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Share2 className="h-2.5 w-2.5 text-gray-400" /> 2 Compartilhamentos</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-center font-bold text-gray-800">1,58%</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold text-green-700 border border-green-100 shadow-xs">
                            Orgânico
                          </span>
                        </td>
                      </tr>

                      {/* Post 6 */}
                      <tr className="bg-slate-50/45 hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-2.5 font-medium text-gray-600">26/06/2026</td>
                        <td className="px-4 py-2.5">
                          <img 
                            src="https://i.imgur.com/pHogznU.png" 
                            alt="Criativo Post 6" 
                            className="h-15 w-15 object-cover rounded-md border border-gray-200 shadow-xs hover:scale-125 transition-transform duration-200 cursor-zoom-in"
                            referrerPolicy="no-referrer"
                            onClick={() => setSelectedImage("https://i.imgur.com/pHogznU.png")}
                          />
                        </td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-orange-500 to-pink-500 text-white font-bold text-[8px] shadow-xs">
                              st
                            </div>
                            <span className="font-bold text-gray-800">Instagram Stories</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-gray-500 font-medium">Story</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">53.654</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-gray-800">1.320</td>
                        <td className="px-4 py-2.5">
                          <div className="flex flex-wrap gap-1">
                            <span className="inline-flex items-center gap-0.5 rounded bg-orange-50 px-1.5 py-0.5 text-[9px] font-semibold text-orange-700 border border-orange-100 shadow-xs"><Link className="h-2.5 w-2.5 text-orange-500" /> 812 Cliques no Link</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Heart className="h-2.5 w-2.5 text-gray-400" /> 77 Curtidas</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100">425 Visitas Perfil</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><MessageSquare className="h-2.5 w-2.5 text-gray-400" /> 5 Respostas</span>
                            <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-600 border border-gray-100"><Share2 className="h-2.5 w-2.5 text-gray-400" /> 1 Compartilhamento</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-center font-bold text-gray-800">2,46%</td>
                        <td className="px-4 py-2.5 text-center">
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold text-green-700 border border-green-100 shadow-xs">
                            Orgânico
                          </span>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* PURE CSS PROGRESS INFOGRAPHIC */}
            <div className="mb-4 rounded-xl border border-gray-150 bg-white p-4 shadow-xs">
              <h4 className="flex items-center gap-2 text-xs font-bold text-[#2C3E50] mb-3 uppercase tracking-wider">
                <Share2 className="h-3.5 w-3.5 text-[#E67E22]" />
                Participação de Distribuição de Alcance Multiplataforma
              </h4>
              <div className="space-y-3">
                
                <div>
                  <div className="mb-0.5 flex items-center justify-between text-[10px] font-bold text-gray-500">
                    <span className="flex items-center gap-1">Instagram Feed (Pago)</span>
                    <span>315.498 alcançados (58.6%)</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-[#E67E22]" style={{ width: "58.6%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="mb-0.5 flex items-center justify-between text-[10px] font-bold text-gray-500">
                    <span className="flex items-center gap-1">Instagram Stories (Orgânico)</span>
                    <span>174.140 alcançados (32.4%)</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full bg-[#0288D1]" style={{ width: "32.4%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="mb-0.5 flex items-center justify-between text-[10px] font-bold text-gray-500">
                    <span className="flex items-center gap-1">Facebook Impulsionado</span>
                    <span>48.401 alcançados (9.0%)</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full bg-[#E67E22]" style={{ width: "9.0%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="mb-0.5 flex items-center justify-between text-[10px] font-bold text-gray-500">
                    <span className="flex items-center gap-1">TikTok Orgânico</span>
                    <span>1.292 alcançados (0.2%)</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full bg-slate-800" style={{ width: "0.2%" }}></div>
                  </div>
                </div>

              </div>
            </div>

            {/* BLOCK OF INSIGHTS (REDES) */}
            <div className="grid gap-3 md:grid-cols-3 mt-4">
              
              <div className="flex gap-2.5 rounded-lg border-l-4 border-[#E67E22] bg-orange-50/50 p-3 border-y border-r border-gray-100">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E67E22]">
                  <Flame className="h-3 w-3" />
                </div>
                <div>
                  <h5 className="font-bold text-[#2C3E50] text-xs"><span className="text-[#E67E22]">Massa Crítica:</span> Reels pago em 05/06</h5>
                  <p className="mt-0.5 text-[10px] text-gray-500 leading-relaxed">
                    O impulsionamento inicial do Reels pago construiu a audiência de marca e injetou volume inicial na base de usuários.
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-3 border-y border-r border-gray-100">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                  <TrendingUp className="h-3 w-3" />
                </div>
                <div>
                  <h5 className="font-bold text-[#2C3E50] text-xs"><span className="text-blue-600">Facebook de Elite:</span> Engajamento</h5>
                  <p className="mt-0.5 text-[10px] text-gray-500 leading-relaxed">
                    Alcançamos uma taxa de engajamento de 16,8% no Facebook impulsionado, demonstrando excelente sintonia com essa persona.
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5 rounded-lg border-l-4 border-[#E67E22] bg-orange-50/30 p-3 border-y border-r border-gray-100">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF3E0] text-[#E67E22]">
                  <Calendar className="h-3 w-3" />
                </div>
                <div>
                  <h5 className="font-bold text-[#2C3E50] text-xs"><span className="text-orange-600">Pico Semanal:</span> Stories de sexta (26/06)</h5>
                  <p className="mt-0.5 text-[10px] text-gray-500 leading-relaxed">
                    Registramos o pico absoluto de tráfego orgânico com 812 cliques diretos. Ativação perfeita do gatilho mental de fim de semana.
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* SEÇÃO 2: PERFORMANCE DO SITE */}
          <section id="react-section-site" className="mb-8">
            
            <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#2C3E50] border-l-4 border-[#E67E22] pl-3 uppercase tracking-tight">2. Performance do Site</h3>
                <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-400 font-medium hidden sm:inline">O Impacto da Reformulação</span>
              </div>
              <span className="text-[9px] bg-gray-100 px-2 py-0.5 rounded text-gray-400 font-bold tracking-wider uppercase"></span>
            </div>

            <p className="text-xs text-gray-600 mb-3 italic leading-relaxed">
              Em junho de 2026, a página principal do <strong className="text-gray-800 font-semibold">Churrascômetro</strong> passou por uma reformulação de layout, focado em reduzir barreiras cognitivas e melhorar o fluxo de entrada de dados de ingredientes e convidados. Os dados mostram o sucesso da iniciativa.
            </p>

            {/* ALERTA CRÍTICO */}
            <div className="mb-4 flex gap-3 rounded-lg bg-amber-50/70 border-l-4 border-amber-500 p-3 shadow-xs">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <AlertTriangle className="h-3.5 w-3.5" />
              </div>
              <div>
                <h4 className="font-extrabold text-amber-900 uppercase tracking-wider text-[10px]">Impacto Comercial</h4>
                <p className="mt-0.5 text-xs text-amber-800 leading-normal font-semibold">
                  FATO: Os resultados de APENAS UM ÚNICO MÊS (Junho de 2026) superaram com folga e quase DOBRARAM os números gerados durante o ANO INTEIRO de 2025 somado.
                </p>
              </div>
            </div>

            {/* BIG NUMBERS SITE */}
            <div className="mb-4 grid gap-3 grid-cols-2 lg:grid-cols-4">
              
              <div className="bg-white p-3 rounded-xl border border-gray-150 shadow-xs">
                <div className="text-[9px] font-bold text-gray-400 uppercase mb-0.5">Sessões (Acessos)</div>
                <div className="text-lg font-black text-gray-800">6.571</div>
                <div className="text-[9px] flex items-center gap-1 mt-0.5">
                  <span className="font-bold text-green-600">+68%</span>
                  <span className="text-gray-400">vs todo ano 2025</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-150 shadow-xs">
                <div className="text-[9px] font-bold text-gray-400 uppercase mb-0.5">Usuários Ativos</div>
                <div className="text-lg font-black text-gray-800">5.679</div>
                <div className="text-[9px] flex items-center gap-1 mt-0.5">
                  <span className="font-bold text-green-600">+64%</span>
                  <span className="text-gray-400">únicos ativos</span>
                </div>
              </div>

              <div className="bg-[#FFF3E0]/35 p-3 rounded-xl border border-orange-100 shadow-xs">
                <div className="text-[9px] font-bold text-orange-400 uppercase mb-0.5">Recorrência</div>
                <div className="text-lg font-black text-[#E67E22]">1.707</div>
                <div className="text-[9px] flex items-center gap-1 mt-0.5">
                  <span className="font-bold text-orange-600">+219%</span>
                  <span className="text-orange-500">fidelizados</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-150 shadow-xs">
                <div className="text-[9px] font-bold text-gray-400 uppercase mb-0.5">Retenção Média</div>
                <div className="text-lg font-black text-gray-800">54s</div>
                <div className="text-[9px] flex items-center gap-1 mt-0.5">
                  <span className="font-bold text-green-600">+31%</span>
                  <span className="text-gray-400">tempo médio</span>
                </div>
              </div>

            </div>

            {/* TABELA COMPARATIVA SITE */}
            <div className="mb-4 overflow-hidden rounded-xl border border-gray-150 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-150 text-[9px] font-bold uppercase tracking-wider text-gray-500">
                      <th className="px-4 py-2">Métrica de Performance de UX</th>
                      <th className="px-4 py-2 text-center">Ano Todo de 2025</th>
                      <th className="px-4 py-2 text-center">Apenas Junho de 2026</th>
                      <th className="px-4 py-2 text-center">Crescimento</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2 font-bold text-gray-800">Acessos Totais (Sessões)</td>
                      <td className="px-4 py-2 text-center text-gray-400 font-mono">3.904</td>
                      <td className="px-4 py-2 text-center font-bold text-gray-800 font-mono">6.571</td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center gap-0.5 rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-bold text-green-700 border border-green-100">
                          <TrendingUp className="h-2.5 w-2.5" /> +68%
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2 font-bold text-gray-800">Usuários Ativos (Únicos)</td>
                      <td className="px-4 py-2 text-center text-gray-400 font-mono">3.460</td>
                      <td className="px-4 py-2 text-center font-bold text-gray-800 font-mono">5.679</td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center gap-0.5 rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-bold text-green-700 border border-green-100">
                          <TrendingUp className="h-2.5 w-2.5" /> +64%
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2 font-bold text-gray-800">Recorrência (Fidelização)</td>
                      <td className="px-4 py-2 text-center text-gray-400 font-mono">535</td>
                      <td className="px-4 py-2 text-center font-bold text-orange-600 font-mono">1.707</td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center gap-0.5 rounded bg-orange-50 px-1.5 py-0.5 text-[10px] font-bold text-orange-800 border border-orange-100 shadow-xs">
                          <TrendingUp className="h-2.5 w-2.5" /> +219% (3x mais)
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2 font-bold text-gray-800">Tempo Médio de Retenção</td>
                      <td className="px-4 py-2 text-center text-gray-400 font-mono">41s</td>
                      <td className="px-4 py-2 text-center font-bold text-gray-800 font-mono">54s</td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center gap-0.5 rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-bold text-green-700 border border-green-100">
                          <TrendingUp className="h-2.5 w-2.5" /> +31%
                        </span>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-2 font-bold text-gray-800">Taxa de Engajamento Interno</td>
                      <td className="px-4 py-2 text-center text-gray-400 font-mono">66,19%</td>
                      <td className="px-4 py-2 text-center font-bold text-gray-800 font-mono">65,36%</td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center gap-0.5 rounded bg-gray-50 px-1.5 py-0.5 text-[10px] font-bold text-gray-500 border border-gray-100">
                          Estável (-0,83%)
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* COMPARATIVO DE PERFORMANCE COMPARADA */}
            <div className="mb-4 rounded-xl border border-gray-150 bg-white p-4 shadow-xs">
              <h4 className="flex items-center gap-2 text-xs font-bold text-[#2C3E50] mb-3 uppercase tracking-wider">
                <Globe className="h-3.5 w-3.5 text-[#E67E22]" />
                Histórico de Crescimento: 2025 Inteiro vs Apenas Junho de 2026
              </h4>
              <div className="space-y-4">
                
                <div>
                  <h5 className="mb-1 text-[10px] font-bold text-gray-400 uppercase">Acessos ao Site (Sessões)</h5>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-gray-500">
                      <span>Ano Todo de 2025</span>
                      <span className="font-mono">3.904</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-slate-300" style={{ width: "37%" }}></div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-semibold text-gray-800">
                      <span className="flex items-center gap-1 font-bold">Apenas Junho de 2026 <span className="text-green-600 text-[9px] bg-green-50 px-1 rounded border border-green-100 font-black">+68%</span></span>
                      <span className="font-mono font-bold text-[#E67E22]">6.571</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-[#E67E22]" style={{ width: "63%" }}></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="mb-1 text-[10px] font-bold text-gray-400 uppercase">Volume de Recorrência (Fidelização do Usuário)</h5>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-gray-500">
                      <span>Ano Todo de 2025</span>
                      <span className="font-mono">535</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-slate-300" style={{ width: "23%" }}></div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-semibold text-gray-800">
                      <span className="flex items-center gap-1 font-bold">Apenas Junho de 2026 <span className="text-orange-600 text-[9px] bg-orange-50 px-1 rounded border border-orange-100 font-black">+219%</span></span>
                      <span className="font-mono font-bold text-orange-600">1.707</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-[#E67E22]" style={{ width: "77%" }}></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* BLOCK OF INSIGHTS (SITE) */}
            <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/20 p-3.5 border-y border-r border-gray-100">
              <div className="flex gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Award className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h5 className="font-bold text-[#2C3E50] text-xs">Análise de Impacto: Fidelização & Retenção</h5>
                  <p className="mt-0.5 text-[10px] text-gray-500 leading-relaxed">
                    A reformulação de layout e a inclusão da ferramenta de calculadora, reduziu de forma substancial o atrito prático no uso do <strong>Churrascômetro</strong>. O tempo médio gasto subiu para <strong>54 segundos</strong> (+31%), o que se traduz em maior tempo de tela calculando o evento. O fato de termos <strong>1.707 usuários recorrentes</strong> (um aumento estrondoso de +219% em relação ao ano inteiro anterior) comprova cientificamente que as pessoas encontraram valor real, memorizaram a ferramenta e voltaram a utilizá-la em múltiplos eventos.
                  </p>
                </div>
              </div>
            </div>

          </section>

          {/* FOOTER */}
          <footer className="mt-8 border-t border-gray-200 pt-4 text-center text-[10px] text-gray-400">
            <p><strong>Relatório Gerencial de Performance</strong> • Campanha Churrascômetro • Junho de 2026.</p>
          </footer>

        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-1.5 shadow-2xl flex items-center justify-center"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/80 hover:scale-105 active:scale-95 border border-white/15 z-10"
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4" />
                </button>
                <img
                  src={selectedImage}
                  alt="Criativo Ampliado"
                  className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-inner"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

    </div>
  );
}
