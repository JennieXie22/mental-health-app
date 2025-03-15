import React from 'react';
import { Heart, Smile, Compass, User, BookOpen, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const MoodSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-orange-800 mb-6 mt-16">今天感觉如何？</h1>
        <div className="text-4xl space-x-3 mb-10 opacity-80">
          {/* Emoji background */}
          <span>😊</span>
          <span>🥰</span>
          <span>😌</span>
          <span>🤗</span>
          <span>😴</span>
          <span>🥺</span>
          <span>😢</span>
        </div>
        <div className="space-y-4 mt-8">
          <button 
            className="w-full bg-white/70 backdrop-blur-sm hover:bg-white/90 text-orange-700 font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300"
            onClick={() => console.log('Record mood')}
          >
            记录心情
          </button>
          <button 
            className="w-full bg-white/70 backdrop-blur-sm hover:bg-white/90 text-orange-700 font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300"
            onClick={() => console.log('Analyze trends')}
          >
            趋势分析
          </button>
        </div>
      </div>
    </div>
  );
};

const RelaxSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex space-x-4 justify-center mb-8">
          <button className="bg-white/70 backdrop-blur-sm hover:bg-white/90 text-orange-700 font-semibold py-2 px-6 rounded-2xl shadow-md transition duration-300">
            冥想
          </button>
          <button className="bg-white/70 backdrop-blur-sm hover:bg-white/90 text-orange-700 font-semibold py-2 px-6 rounded-2xl shadow-md transition duration-300">
            对话
          </button>
          <button className="bg-white/70 backdrop-blur-sm hover:bg-white/90 text-orange-700 font-semibold py-2 px-6 rounded-2xl shadow-md transition duration-300">
            助眠
          </button>
        </div>
        {/* Default meditation content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 min-h-[400px] shadow-lg">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-orange-800">早晨冥想</h2>
            <p className="text-orange-700">让我们开始今天的冥想之旅吧～</p>
            <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto flex items-center justify-center mt-8">
              <button className="text-4xl text-orange-500">▶️</button>
            </div>
            <p className="text-sm text-orange-600 mt-4">时长：10分钟</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiscoverSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2 items-center">
            <BookOpen size={20} className="text-orange-700" />
            <h2 className="text-xl font-semibold text-orange-800">今日阅读</h2>
          </div>
          <button className="flex items-center space-x-1 text-sm text-orange-600">
            <MessageCircle size={16} />
            <span>热门话题</span>
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-orange-800 text-lg mb-2">每日冥想的好处</h3>
            <p className="text-orange-600 text-sm mb-4">探索如何通过冥想提升专注力和幸福感...</p>
            <img 
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80"
              alt="Meditation"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center text-sm text-orange-500">
              <span>阅读时间：5分钟</span>
              <button className="hover:text-orange-700 transition-colors">查看全文</button>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-orange-800 text-lg mb-2">如何培养积极心态？</h3>
            <p className="text-orange-600 text-sm">探索保持乐观的实用技巧，让生活充满阳光...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center">
              <User size={40} className="text-orange-700" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-orange-800">我的账户</h2>
              <p className="text-orange-600 text-sm">点击头像修改～</p>
            </div>
          </div>
          <div className="space-y-4">
            <button className="w-full bg-white/50 hover:bg-white/70 text-orange-700 font-semibold py-3 px-6 rounded-2xl transition duration-300">
              心情自测
            </button>
            <button className="w-full bg-white/50 hover:bg-white/70 text-orange-700 font-semibold py-3 px-6 rounded-2xl transition duration-300">
              设置
            </button>
            <button className="w-full bg-white/50 hover:bg-white/70 text-orange-700 font-semibold py-3 px-6 rounded-2xl transition duration-300">
              联系我们
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('mood');

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Main content */}
      {activeTab === 'mood' && <MoodSection />}
      {activeTab === 'relax' && <RelaxSection />}
      {activeTab === 'discover' && <DiscoverSection />}
      {activeTab === 'profile' && <ProfileSection />}

      {/* Navigation bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex justify-around">
            <button
              onClick={() => setActiveTab('mood')}
              className={`flex flex-col items-center space-y-1 ${
                activeTab === 'mood' ? 'text-orange-600' : 'text-gray-500'
              }`}
            >
              <Heart size={24} />
              <span className="text-xs">心情</span>
            </button>
            <button
              onClick={() => setActiveTab('relax')}
              className={`flex flex-col items-center space-y-1 ${
                activeTab === 'relax' ? 'text-orange-600' : 'text-gray-500'
              }`}
            >
              <Smile size={24} />
              <span className="text-xs">放松</span>
            </button>
            <button
              onClick={() => setActiveTab('discover')}
              className={`flex flex-col items-center space-y-1 ${
                activeTab === 'discover' ? 'text-orange-600' : 'text-gray-500'
              }`}
            >
              <Compass size={24} />
              <span className="text-xs">发现</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center space-y-1 ${
                activeTab === 'profile' ? 'text-orange-600' : 'text-gray-500'
              }`}
            >
              <User size={24} />
              <span className="text-xs">我的</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;