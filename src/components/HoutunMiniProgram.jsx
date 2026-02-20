import React, { useState } from 'react';
import { 
  Map, 
  CalendarCheck, 
  ShoppingBag, 
  User, 
  Volume2, 
  PlayCircle, 
  Globe, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Plus,
  Type
} from 'lucide-react';

const HoutunMiniProgram = () => {
  const [activeTab, setActiveTab] = useState('guide');
  const [lang, setLang] = useState('zh');
  const [isLargeFont, setIsLargeFont] = useState(false);

  const t = {
    zh: {
      guide: '智慧导览',
      reserve: '研学预约',
      shop: '助农商城',
      profile: '我的',
      welcome: '欢迎来到后屯村红色文旅基地',
      spot1: '李兆麟故居',
      spot1_desc: '展示建筑沿革、少年青年成长、革命活动等核心价值。',
      spot2: '军事装备博览园',
      spot2_desc: '沉浸式国防教育与军事装备展示。',
      spot3: '红色双创中心',
      spot3_desc: '农文旅融合数字化创新中心展示。',
      audio_tour: '语音讲解',
      vr_tour: 'VR全景',
      book_title: '机关/团体研学预约',
      book_submit: '提交预约',
      shop_title: '本地特色农产品',
      add_cart: '加入购物车',
      my_orders: '我的订单',
      my_courses: '党课学习记录',
      feedback: '意见反馈',
      large_font: '适老化大字版',
      language: '多语言切换',
    },
    en: {
      guide: 'Guide',
      reserve: 'Book',
      shop: 'Shop',
      profile: 'Profile',
      welcome: 'Welcome to Houtun Village Base',
      spot1: 'Former Residence of Li Zhaolin',
      spot1_desc: 'Displaying architectural history, youth, and revolutionary activities.',
      spot2: 'Military Equipment Expo',
      spot2_desc: 'Immersive national defense education.',
      spot3: 'Red Innovation Center',
      spot3_desc: 'Integration of agriculture, culture and tourism.',
      audio_tour: 'Audio',
      vr_tour: 'VR Tour',
      book_title: 'Group Booking',
      book_submit: 'Submit',
      shop_title: 'Local Products',
      add_cart: 'Add to Cart',
      my_orders: 'My Orders',
      my_courses: 'Course History',
      feedback: 'Feedback',
      large_font: 'Large Font',
      language: 'Language',
    },
    jp: {
      guide: 'ガイド',
      reserve: '予約',
      shop: 'ショップ',
      profile: 'マイページ',
      welcome: '後屯村へようこそ',
      spot1: '李兆麟旧居',
      spot1_desc: '建築の歴史、青少年期、革命活動の展示。',
      spot2: '軍事装備博覧園',
      spot2_desc: '国防教育と軍事装備の展示。',
      spot3: 'レッドイノベーションセンター',
      spot3_desc: '農業、文化、観光の統合。',
      audio_tour: '音声案内',
      vr_tour: 'VRツアー',
      book_title: '団体予約',
      book_submit: '予約する',
      shop_title: '特産品',
      add_cart: 'カートに入れる',
      my_orders: '注文履歴',
      my_courses: '学習履歴',
      feedback: 'フィードバック',
      large_font: '大きな文字',
      language: '言語切替',
    }
  };

  const currentT = t[lang];
  const textSize = isLargeFont ? 'text-lg' : 'text-sm';
  const titleSize = isLargeFont ? 'text-2xl' : 'text-xl';

  const renderTabBar = () => (
    <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-16 pb-safe">
      <button onClick={() => setActiveTab('guide')} className={`flex flex-col items-center ${activeTab === 'guide' ? 'text-red-700' : 'text-gray-500'}`}>
        <Map size={24} />
        <span className="text-xs mt-1">{currentT.guide}</span>
      </button>
      <button onClick={() => setActiveTab('reserve')} className={`flex flex-col items-center ${activeTab === 'reserve' ? 'text-red-700' : 'text-gray-500'}`}>
        <CalendarCheck size={24} />
        <span className="text-xs mt-1">{currentT.reserve}</span>
      </button>
      <button onClick={() => setActiveTab('shop')} className={`flex flex-col items-center ${activeTab === 'shop' ? 'text-red-700' : 'text-gray-500'}`}>
        <ShoppingBag size={24} />
        <span className="text-xs mt-1">{currentT.shop}</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-red-700' : 'text-gray-500'}`}>
        <User size={24} />
        <span className="text-xs mt-1">{currentT.profile}</span>
      </button>
    </div>
  );

  const renderGuide = () => (
    <div className="flex-1 overflow-y-auto pb-20 bg-gray-50">
      <div className="bg-red-700 text-white p-4 pt-8 sticky top-0 z-10 flex justify-between items-center shadow-md">
        <h1 className={`font-bold ${titleSize}`}>{currentT.welcome}</h1>
        <button onClick={() => setLang(lang === 'zh' ? 'en' : (lang === 'en' ? 'jp' : 'zh'))} className="p-2 rounded-full bg-red-600">
          <Globe size={20} />
        </button>
      </div>
      
      <div className="w-full h-48 bg-green-100 relative border-b-4 border-green-600">
        <div className="absolute inset-0 flex items-center justify-center flex-col text-green-800">
          <MapPin size={40} className="mb-2 text-red-600 animate-bounce" />
          <span className="font-bold">手绘地图 & 导航 API 接入区</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {[
          { title: currentT.spot1, desc: currentT.spot1_desc, img: 'bg-orange-200' },
          { title: currentT.spot2, desc: currentT.spot2_desc, img: 'bg-green-200' },
          { title: currentT.spot3, desc: currentT.spot3_desc, img: 'bg-blue-200' },
        ].map((spot, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-4 flex gap-4">
            <div className={`w-24 h-24 rounded-lg flex-shrink-0 ${spot.img} flex items-center justify-center text-gray-500`}>
              [配图]
            </div>
            <div className="flex-1">
              <h3 className={`font-bold text-gray-800 ${isLargeFont ? 'text-xl' : 'text-lg'}`}>{spot.title}</h3>
              <p className={`text-gray-600 mt-1 line-clamp-2 ${textSize}`}>{spot.desc}</p>
              <div className="flex gap-2 mt-3">
                <button className="flex items-center text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full">
                  <Volume2 size={14} className="mr-1"/> {currentT.audio_tour}
                </button>
                <button className="flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                  <PlayCircle size={14} className="mr-1"/> {currentT.vr_tour}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReserve = () => (
    <div className="flex-1 overflow-y-auto pb-20 bg-gray-50">
      <div className="bg-red-700 text-white p-4 pt-8 sticky top-0 z-10">
        <h1 className={`font-bold ${titleSize}`}>{currentT.book_title}</h1>
      </div>
      
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-sm p-5 space-y-5">
          <div>
            <label className={`block text-gray-700 font-bold mb-2 ${textSize}`}>单位名称</label>
            <input type="text" placeholder="如：某某小学 / 某某企事业单位" className={`w-full border border-gray-300 rounded-lg p-3 ${textSize}`} />
          </div>
          
          <div>
            <label className={`block text-gray-700 font-bold mb-2 ${textSize}`}>参观时长</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2"><input type="radio" name="duration" defaultChecked className="w-5 h-5 accent-red-600"/> 半天</label>
              <label className="flex items-center gap-2"><input type="radio" name="duration" className="w-5 h-5 accent-red-600"/> 全天</label>
            </div>
          </div>

          <div>
            <label className={`block text-gray-700 font-bold mb-2 ${textSize}`}>解说服务 (勾选)</label>
            <select className={`w-full border border-gray-300 rounded-lg p-3 bg-white ${textSize}`}>
              <option>不需要解说</option>
              <option>10人以上 (¥200/名)</option>
              <option>30人以上 (¥300/名)</option>
            </select>
          </div>

          <div>
            <label className={`block text-gray-700 font-bold mb-2 ${textSize}`}>餐饮服务 标准</label>
            <select className={`w-full border border-gray-300 rounded-lg p-3 bg-white ${textSize}`}>
              <option>不在村内用餐</option>
              <option>¥78/位 (标餐)</option>
              <option>¥88/位 (特色餐)</option>
            </select>
          </div>

          <div>
            <label className={`block text-gray-700 font-bold mb-2 ${textSize}`}>出行方式</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2"><input type="radio" name="transport" defaultChecked className="w-5 h-5 accent-red-600"/> 自驾</label>
              <label className="flex items-center gap-2"><input type="radio" name="transport" className="w-5 h-5 accent-red-600"/> 村内客车接送</label>
            </div>
          </div>

          <button className={`w-full bg-red-700 text-white font-bold rounded-lg py-4 mt-6 ${textSize}`}>
            {currentT.book_submit}
          </button>

          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
            <Phone className="text-green-700 mt-1" size={20} />
            <p className={`text-green-800 ${textSize}`}>散客或普通团体如需人工对接，请直接拨打客服电话：<br/><span className="font-bold text-lg">0451-XXXX-XXXX</span></p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="flex-1 overflow-y-auto pb-20 bg-gray-50">
       <div className="bg-red-700 text-white p-4 pt-8 sticky top-0 z-10">
        <h1 className={`font-bold ${titleSize}`}>{currentT.shop_title}</h1>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        {[
          { name: '后屯本地小米营养粉', price: '¥29.9' },
          { name: '手工小米锅巴', price: '¥15.0' },
          { name: '纯正小米油 (500ml)', price: '¥58.0' },
          { name: '农家散养土鸡蛋', price: '¥45.0' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="h-32 bg-yellow-100 flex items-center justify-center text-yellow-700 text-sm">
              [商品图]
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <h4 className={`font-bold text-gray-800 ${textSize}`}>{item.name}</h4>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-red-600 font-bold">{item.price}</span>
                <button className="bg-green-600 text-white p-1.5 rounded-full shadow-sm hover:bg-green-700">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="flex-1 overflow-y-auto pb-20 bg-gray-50">
      <div className="bg-red-700 p-8 pt-12 pb-16 rounded-b-[2rem] text-white flex items-center gap-4 shadow-md">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-red-300">
          <User size={32} className="text-gray-400" />
        </div>
        <div>
          <h2 className={`font-bold ${isLargeFont ? 'text-2xl' : 'text-xl'}`}>微信用户</h2>
          <p className="opacity-80 mt-1">138****8888</p>
        </div>
      </div>

      <div className="px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><CalendarCheck size={20} /></div>
              <span className={`font-bold text-gray-700 ${textSize}`}>{currentT.my_orders}</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="border-b border-gray-100 p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg text-green-600"><PlayCircle size={20} /></div>
              <span className={`font-bold text-gray-700 ${textSize}`}>{currentT.my_courses}</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Phone size={20} /></div>
              <span className={`font-bold text-gray-700 ${textSize}`}>{currentT.feedback}</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        <h3 className="text-gray-500 font-bold mt-6 mb-3 px-2 text-sm">系统设置</h3>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 p-4 flex justify-between items-center">
             <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg text-gray-600"><Type size={20} /></div>
              <span className={`font-bold text-gray-700 ${textSize}`}>{currentT.large_font}</span>
            </div>
            <div 
              onClick={() => setIsLargeFont(!isLargeFont)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isLargeFont ? 'bg-green-500' : 'bg-gray-300'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isLargeFont ? 'translate-x-6' : ''}`}></div>
            </div>
          </div>
           <div className="p-4 flex justify-between items-center">
             <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg text-gray-600"><Globe size={20} /></div>
              <span className={`font-bold text-gray-700 ${textSize}`}>{currentT.language}</span>
            </div>
            <div className="flex bg-gray-100 rounded-lg p-1 text-sm">
              <button onClick={() => setLang('zh')} className={`px-3 py-1 rounded-md ${lang === 'zh' ? 'bg-white shadow text-red-600 font-bold' : 'text-gray-500'}`}>中</button>
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-md ${lang === 'en' ? 'bg-white shadow text-red-600 font-bold' : 'text-gray-500'}`}>En</button>
              <button onClick={() => setLang('jp')} className={`px-3 py-1 rounded-md ${lang === 'jp' ? 'bg-white shadow text-red-600 font-bold' : 'text-gray-500'}`}>日</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="w-full max-w-[400px] h-[800px] max-h-[90vh] bg-black rounded-[3rem] p-2 shadow-2xl relative overflow-hidden border-4 border-gray-700">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-50"></div>
        
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col relative">
          {activeTab === 'guide' && renderGuide()}
          {activeTab === 'reserve' && renderReserve()}
          {activeTab === 'shop' && renderShop()}
          {activeTab === 'profile' && renderProfile()}
          {renderTabBar()}
        </div>
      </div>
    </div>
  );
};

export default HoutunMiniProgram;
